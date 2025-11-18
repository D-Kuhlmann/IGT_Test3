import { TSMInterface } from "./screens/tsm/TSMInterface";
import { WorkflowSyncProvider } from "../contexts/WorkflowSyncContext";

export function ScreenTSM() {
  return (
    <WorkflowSyncProvider screenId="tsm">
      <div className="size-full flex items-center bg-black relative overflow-hidden">
        <TSMInterface />
      </div>
    </WorkflowSyncProvider>
  );
}
