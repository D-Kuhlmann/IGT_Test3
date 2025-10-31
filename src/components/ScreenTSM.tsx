import { TSMInterface } from "./screens/tsm/TSMInterface";
import { LogoutButton } from "./LogoutButton";
import { WorkflowSyncProvider } from "../contexts/WorkflowSyncContext";

export function ScreenTSM() {
  return (
    <WorkflowSyncProvider screenId="tsm">
      <div className="size-full flex items-center bg-black relative">
        <TSMInterface />
        <LogoutButton className="absolute top-4 right-4" />
      </div>
    </WorkflowSyncProvider>
  );
}
