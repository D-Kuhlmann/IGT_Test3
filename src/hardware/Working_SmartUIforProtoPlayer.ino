#include <Keyboard.h>
#include <FastLED.h>
// This file is made specifically for the 3D printed Smart Knob Prototype made by Ronald Helmstrijd.
// It connects to the Protobuilder test-Prototype via USB cable
// ================== CONFIGURATION ==================

// --- LED setup ---
// Joystick LED (SK9822)
#define JOYSTICK_DATA_PIN 8
#define JOYSTICK_CLOCK_PIN 9
#define NUM_JOYSTICK_LEDS 1
CRGB joystickLED[NUM_JOYSTICK_LEDS];

// Base LED (SK9822)
#define BASE_DATA_PIN 6
#define BASE_CLOCK_PIN 7
#define NUM_BASE_LEDS 1
CRGB baseLED[NUM_BASE_LEDS];

// --- Joystick ---
#define PIN_X A0
#define PIN_Y A1
// --- Joystick button ---
#define BTN_JOYSTICK_SW 10

// --- Twist buttons ---
#define BTN_TWIST_L 4
#define BTN_TWIST_R 5

// Joystick switch state
bool lastJoySwState = HIGH;
unsigned long lastJoySwTime = 0;
const unsigned long JOY_SW_TIMEOUT = 100; // ms debounce / repeat delay

// --- Colors (hex RGB) ---
String globalColorHex = "00EEAA"; // Default blue tone
CRGB COLOR_OFF = CRGB::Black;

// --- Timing ---
#define DEBOUNCE_DELAY 50  // ms for general buttons
const unsigned long TWIST_TIMEOUT = 50; // ms for twist buttons

// --- Debug mode ---
bool debugMode = false;

// ================== STATE VARIABLES ==================
bool apcModeActive = false;
bool smartUIModeActive = false;
bool joystickActive = false;

// Twist button states
bool lastTwistLState = HIGH;
bool lastTwistRState = HIGH;
unsigned long lastTwistLTime = 0;
unsigned long lastTwistRTime = 0;

// ================== HELPER FUNCTIONS ==================

// Convert 6-char hex string to CRGB
CRGB hexToCRGB(String hexColor) {
  if (hexColor.length() != 6) return CRGB::White;
  long number = strtol(hexColor.c_str(), NULL, 16);
  byte r = (number >> 16) & 0xFF;
  byte g = (number >> 8) & 0xFF;
  byte b = number & 0xFF;
  return CRGB(r, g, b);
}

// --- LED control ---
void setLEDJoystick(CRGB color) {
  fill_solid(joystickLED, NUM_JOYSTICK_LEDS, color);
  FastLED.show();
  if (debugMode) Serial.print("[LED] Joystick LED set to "); Serial.println(color.r, HEX);
}

void setLEDBase(CRGB color) {
  fill_solid(baseLED, NUM_BASE_LEDS, color);
  FastLED.show();
  if (debugMode) Serial.print("[LED] Base LED set to "); Serial.println(color.r, HEX);
}

void turnOffAllLEDs() {
  setLEDJoystick(COLOR_OFF);
  setLEDBase(COLOR_OFF);
}

// --- Mode management ---
void turnOffAllModes() {
  apcModeActive = false;
  smartUIModeActive = false;
  turnOffAllLEDs();
  if (debugMode) Serial.println("[MODE] All modes deactivated");
}

// --- Keyboard helper ---
void pressKey(char key) {
  Keyboard.press(key);
  delay(30);
  Keyboard.release(key);
  if (debugMode) {
    Serial.print("[KEY] Pressed: ");
    Serial.println(key);
  }
}

// ================== SETUP ==================
void setup() {
  Keyboard.begin();
  Serial.begin(115200);

  // Setup twist buttons
  pinMode(BTN_TWIST_L, INPUT_PULLUP);
  pinMode(BTN_TWIST_R, INPUT_PULLUP);

  // Joystick pushdown button
  pinMode(BTN_JOYSTICK_SW, INPUT_PULLUP);

  // Setup LEDs
  FastLED.addLeds<SK9822, JOYSTICK_DATA_PIN, JOYSTICK_CLOCK_PIN, BGR>(joystickLED, NUM_JOYSTICK_LEDS);
  FastLED.addLeds<SK9822, BASE_DATA_PIN, BASE_CLOCK_PIN, BGR>(baseLED, NUM_BASE_LEDS);

  turnOffAllLEDs();

  if (debugMode) Serial.println("[INIT] Setup complete.");
}

void loop() {
  // --- Serial debug / mode commands ---
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();
    cmd.toLowerCase();

    if (cmd.equals("debug on")) {
      debugMode = true;
      Serial.println("[DEBUG] Enabled");
    } 
    else if (cmd.equals("debug off")) {
      debugMode = false;
      Serial.println("[DEBUG] Disabled");
    } 
    else if (cmd.equals("mode apc")) {
      turnOffAllModes();
      apcModeActive = true;
      setLEDJoystick(hexToCRGB(globalColorHex));
      if (debugMode) Serial.println("[MODE] APC mode activated");
    }
    else if (cmd.equals("mode smartui")) {
      turnOffAllModes();
      smartUIModeActive = true;
      setLEDBase(hexToCRGB(globalColorHex));
      if (debugMode) Serial.println("[MODE] SmartUI mode activated");
    }
    else if (cmd.equals("mode none")) {
      turnOffAllModes();
    }
    else if (cmd.startsWith("led color ")) {
      String newColor = cmd.substring(10);
      if (newColor.length() == 6) {
        globalColorHex = newColor;
        if (apcModeActive) setLEDJoystick(hexToCRGB(globalColorHex));
        if (smartUIModeActive) setLEDBase(hexToCRGB(globalColorHex));
        if (debugMode) Serial.print("[LED] Global color changed to "); Serial.println(globalColorHex);
      }
    }
  }

  // --- Twist left ---
  bool twistLReading = digitalRead(BTN_TWIST_L);
  if (twistLReading == LOW && lastTwistLState == HIGH && (millis() - lastTwistLTime > TWIST_TIMEOUT)) {
    pressKey('c');
    lastTwistLTime = millis();
    if (debugMode) Serial.println("[BTN] Twist L pressed");
  }
  lastTwistLState = twistLReading;

  // --- Twist right ---
  bool twistRReading = digitalRead(BTN_TWIST_R);
  if (twistRReading == LOW && lastTwistRState == HIGH && (millis() - lastTwistRTime > TWIST_TIMEOUT)) {
    pressKey('f');
    lastTwistRTime = millis();
    if (debugMode) Serial.println("[BTN] Twist R pressed");
  }
  lastTwistRState = twistRReading;

  // --- Joystick push button ---
  bool joySwReading = digitalRead(BTN_JOYSTICK_SW);
  if (joySwReading == LOW && lastJoySwState == HIGH && (millis() - lastJoySwTime > 300)) {  // 300 ms lockout
    pressKey(' ');   // was 'f'
    lastJoySwTime = millis();
    if (debugMode) Serial.println("[BTN] Joystick press detected");
  }
  lastJoySwState = joySwReading;

  // --- Joystick movement (with cooldown) ---
  int xVal = analogRead(PIN_X);
  int yVal = analogRead(PIN_Y);
  static unsigned long lastMoveTime = 0;
  const unsigned long MOVE_COOLDOWN = 200; // ms between moves

  if (!joystickActive && (xVal > 600 || yVal > 600)) {
    joystickActive = true;
    if (debugMode) Serial.println("[JOYSTICK] Connected.");
  }

  if (joystickActive && millis() - lastMoveTime > MOVE_COOLDOWN) {
    const int DEADZONE_LOW = 430;
    const int DEADZONE_HIGH = 600;

    bool moved = false;

    if (xVal < DEADZONE_LOW) { pressKey(KEY_UP_ARROW); moved = true; } //'w'
    else if (xVal > DEADZONE_HIGH) { pressKey(KEY_DOWN_ARROW); moved = true; } //'z'

    if (yVal < DEADZONE_LOW) { pressKey(KEY_RIGHT_ARROW); moved = true; }//'s'
    else if (yVal > DEADZONE_HIGH) { pressKey(KEY_LEFT_ARROW); moved = true; } //'a'

    if (moved) {
      lastMoveTime = millis();
      if (debugMode) {
        Serial.print("[JOYSTICK] Move | X:"); Serial.print(xVal);
        Serial.print(" Y:"); Serial.println(yVal);
      }
    }
  }

  delay(20);
}

