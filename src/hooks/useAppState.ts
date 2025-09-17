import { useState, useEffect } from "react";
import { parseHashParams } from "../utils/helpers";
import type { AppState } from "../types";

export function useAppState(): [AppState, {
  setWorkflowStep: (step: string) => void;
  setWorkspace: (workspace: string) => void;
  setShowLiveWorkspaces: (show: boolean) => void;
  resetState: () => void;
}] {
  const [state, setState] = useState<AppState>({
    currentWorkflowStep: "",
    currentWorkspace: "",
    showLiveWorkspaces: false,
  });

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const params = parseHashParams(window.location.hash);
      const workspace = params.get('workspace');
      const liveWorkspaces = params.get('live-workspaces');
      
      setState(prev => ({
        ...prev,
        currentWorkspace: workspace || "",
        showLiveWorkspaces: liveWorkspaces === 'true',
        currentWorkflowStep: workspace ? "" : prev.currentWorkflowStep,
      }));
    };

    // Check initial hash
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setWorkflowStep = (step: string) => {
    setState(prev => ({ ...prev, currentWorkflowStep: step }));
  };

  const setWorkspace = (workspace: string) => {
    setState(prev => ({ 
      ...prev, 
      currentWorkspace: workspace, 
      currentWorkflowStep: "" 
    }));
    window.location.hash = `#workspace=${workspace}`;
  };

  const setShowLiveWorkspaces = (show: boolean) => {
    setState(prev => ({ ...prev, showLiveWorkspaces: show }));
  };

  const resetState = () => {
    setState({
      currentWorkflowStep: "",
      currentWorkspace: "",
      showLiveWorkspaces: false,
    });
    window.location.hash = '';
  };

  return [state, {
    setWorkflowStep,
    setWorkspace,
    setShowLiveWorkspaces,
    resetState,
  }];
}