import WmuDefaultPatientLoggedIn from "./imports/WmuDefaultPatientLoggedIn";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* WMU Screen - 768x512 */}
      <div className="w-[768px] h-[512px] overflow-hidden">
        <WmuDefaultPatientLoggedIn />
      </div>
    </div>
  );
}