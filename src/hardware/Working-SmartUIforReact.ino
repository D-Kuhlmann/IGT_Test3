#include <Keyboard.h>
#include <FastLED.h>
// This file is made specifically for the 3D printed Smart Knob Prototype made by Ronald Helmstrijd.
// It connects to the Reacts Prototype via USB cable, created by Daan Kuhlmann.
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

// Joystick switch debounce
bool lastJoySwState = HIGH;
unsigned long lastJoySwTime = 0;
const unsigned long JOY_SW_TIMEOUT = 100;

// Colors
String globalColorHex = "00EEAA";   // default blue-green
CRGB COLOR_OFF = CRGB::Black;

// Twist debounce
const unsigned long TWIST_TIMEOUT = 50;
bool lastTwistLState = HIGH;
bool lastTwistRState = HIGH;
unsigned long lastTwistLTime = 0;
unsigned long lastTwistRTime = 0;

// Joystick movement throttle
bool joystickActive = false;

// Modes
bool apcModeActive = false;
bool smartUIModeActive = false;
bool breatheModeActive = false;
bool startupBreathDone = false;

// Debug
bool debugMode = false;

// ================== HELPER FUNCTIONS ==================

CRGB hexToCRGB(String hexColor) {
  if (hexColor.length() != 6) return CRGB::White;
  long number = strtol(hexColor.c_str(), NULL, 16);
  byte r = (number >> 16) & 0xFF;
  byte g = (number >> 8) & 0xFF;
  byte b = number & 0xFF;
  return CRGB(r, g, b);
}

void setLEDJoystick(CRGB color) {
  fill_solid(joystickLED, NUM_JOYSTICK_LEDS, color);
  FastLED.show();
}

void setLEDBase(CRGB color) {
  fill_solid(baseLED, NUM_BASE_LEDS, color);
  FastLED.show();
}

void turnOffAllLEDs() {
  setLEDJoystick(COLOR_OFF);
  setLEDBase(COLOR_OFF);
}

void turnOffAllModes() {
  apcModeActive = false;
  smartUIModeActive = false;
  breatheModeActive = false;
  turnOffAllLEDs();
  if (debugMode) Serial.println("[MODE] All modes deactivated");
}

// Keyboard
void pressKey(char key) {
  Keyboard.press(key);
  delay(30);
  Keyboard.release(key);
  if (debugMode) {
    Serial.print("[KEY] ");
    Serial.println(key);
  }
}

// ================== BREATHING EFFECT ==================
void updateBreathingEffect() {
  static uint8_t phase = 0;
  static int direction = 1;
  static unsigned long lastUpdate = 0;

  const unsigned long BREATHE_SPEED = 10;

  if (millis() - lastUpdate < BREATHE_SPEED) return;
  lastUpdate = millis();

  CRGB baseColor = hexToCRGB(globalColorHex);

  uint8_t inhale = phase;           // Joystick LED
  uint8_t exhale = 255 - phase;     // Base LED

  CRGB joy = baseColor;
  joy.nscale8_video(inhale);

  CRGB bottom = baseColor;
  bottom.nscale8_video(exhale);

  setLEDJoystick(joy);
  setLEDBase(bottom);

  phase += direction;

  if (phase == 255 || phase == 0) {
    direction = -direction;
  }
}

void runStartupBreathingOnce() {
  static uint8_t phase = 0;
  static int direction = 1;

  CRGB baseColor = hexToCRGB(globalColorHex);

  // Joystick inhales, base exhales
  uint8_t inhale = phase;
  uint8_t exhale = 255 - phase;

  CRGB joy = baseColor;
  joy.nscale8_video(inhale);

  CRGB bottom = baseColor;
  bottom.nscale8_video(exhale);

  setLEDJoystick(joy);
  setLEDBase(bottom);

  phase += direction;

  // When cycle completes fully (back to 0), we're done
  if (phase == 255 || phase == 0) {
    if (phase == 0) {
      turnOffAllLEDs();
      startupBreathDone = true;
    }
    direction = -direction;
  }

  delay(10);  // breathing speed
}

// ================== SETUP ==================
void setup() {
  Keyboard.begin();
  Serial.begin(115200);

  pinMode(BTN_TWIST_L, INPUT_PULLUP);
  pinMode(BTN_TWIST_R, INPUT_PULLUP);
  pinMode(BTN_JOYSTICK_SW, INPUT_PULLUP);

  FastLED.addLeds<SK9822, JOYSTICK_DATA_PIN, JOYSTICK_CLOCK_PIN, BGR>(joystickLED, NUM_JOYSTICK_LEDS);
  FastLED.addLeds<SK9822, BASE_DATA_PIN, BASE_CLOCK_PIN, BGR>(baseLED, NUM_BASE_LEDS);

  turnOffAllLEDs();
}

// ================== MAIN LOOP ==================
void loop() {
  // ----- RUN ONE BREATH AT STARTUP -----
  if (!startupBreathDone) {
    runStartupBreathingOnce();
    //return;   // Block all other logic until finished
  }

  // ----------------- SERIAL COMMANDS -----------------
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();
    cmd.toLowerCase();

    if (cmd == "debug on") {
      debugMode = true;
      Serial.println("[DEBUG] Enabled");
    }
    else if (cmd == "debug off") {
      debugMode = false;
      Serial.println("[DEBUG] Disabled");
    }
    else if (cmd == "mode apc") {
      turnOffAllModes();
      apcModeActive = true;
      setLEDJoystick(hexToCRGB(globalColorHex));
    }
    else if (cmd == "mode smartui" || cmd == "mode smart") {
      turnOffAllModes();
      smartUIModeActive = true;
      setLEDBase(hexToCRGB(globalColorHex));
    }
    else if (cmd == "mode none" || cmd == "mode off") {
      turnOffAllModes();
    }
    else if (cmd.startsWith("led color ")) {
      String newColor = cmd.substring(10);
      if (newColor.length() == 6) {
        globalColorHex = newColor;
        if (apcModeActive) setLEDJoystick(hexToCRGB(globalColorHex));
        if (smartUIModeActive) setLEDBase(hexToCRGB(globalColorHex));
      }
    }
    else if (cmd == "mode breathe") {
      turnOffAllModes();
      breatheModeActive = true;
      if (debugMode) Serial.println("[MODE] Breathing ON");
    }
    else if (cmd == "mode pause") {
      breatheModeActive = false;
      turnOffAllLEDs();
      if (debugMode) Serial.println("[MODE] Breathing paused");
    }
  }

  // ----------------- BREATHING ANIMATION -----------------
  if (breatheModeActive) {
    updateBreathingEffect();
    // return;   // <--- Requested return, but left commented out
  }

  // ----------------- TWIST LEFT BUTTON -----------------
  bool twistL = digitalRead(BTN_TWIST_L);
  if (twistL == LOW && lastTwistLState == HIGH && (millis() - lastTwistLTime > TWIST_TIMEOUT)) {
    pressKey('q');
    lastTwistLTime = millis();
  }
  lastTwistLState = twistL;

  // ----------------- TWIST RIGHT BUTTON -----------------
  bool twistR = digitalRead(BTN_TWIST_R);
  if (twistR == LOW && lastTwistRState == HIGH && (millis() - lastTwistRTime > TWIST_TIMEOUT)) {
    pressKey('e');
    lastTwistRTime = millis();
  }
  lastTwistRState = twistR;

  // ----------------- JOYSTICK PUSH -----------------
  bool joyPress = digitalRead(BTN_JOYSTICK_SW);
  if (joyPress == LOW && lastJoySwState == HIGH && millis() - lastJoySwTime > 300) {
    pressKey('f');  // your previous mapping
    lastJoySwTime = millis();
  }
  lastJoySwState = joyPress;

  // ----------------- JOYSTICK AXIS MOVEMENT -----------------
  int xVal = analogRead(PIN_X);
  int yVal = analogRead(PIN_Y);

  static unsigned long lastMoveTime = 0;
  const unsigned long MOVE_COOLDOWN = 200;

  if (!joystickActive && (xVal > 600 || yVal > 600)) {
    joystickActive = true;
  }

  if (joystickActive && millis() - lastMoveTime > MOVE_COOLDOWN) {
    const int DEADZONE_LOW = 430;
    const int DEADZONE_HIGH = 600;

    bool moved = false;

    if (xVal < DEADZONE_LOW) { pressKey('z'); moved = true; }
    else if (xVal > DEADZONE_HIGH) { pressKey('w'); moved = true; }

    if (yVal < DEADZONE_LOW) { pressKey('a'); moved = true; }
    else if (yVal > DEADZONE_HIGH) { pressKey('s'); moved = true; }

    if (moved) lastMoveTime = millis();
  }

  delay(20);
}
