import { TSMInterface } from "./screens/tsm/TSMInterface";
import { LogoutButton } from "./LogoutButton";

export function ScreenTSM() {
  return (
    <div className="size-full flex items-center bg-black relative">
      <TSMInterface />
      <LogoutButton className="absolute top-4 right-4" />
    </div>
  );
}
