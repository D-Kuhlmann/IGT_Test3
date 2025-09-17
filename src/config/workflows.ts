import type { WorkflowStep } from "../types";

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { id: "startup", label: "FlexVision Startup", category: "Setup" },
  { id: "start", label: "Start", category: "Access" },
  { id: "ultrasound", label: "Ultrasound", category: "Access" },
  { id: "ccta-planning", label: "CCTA Planning", category: "Planning" },
  { id: "ivus-acquisition", label: "IVUS Acquisition", category: "Treatment" },
  { id: "xray", label: "X-ray Live", category: "Imaging" },
  { id: "hemo", label: "Hemodynamics", category: "Monitoring" },
  { id: "finalise", label: "Finalise", category: "Treatment" },
];

export const getWorkflowById = (id: string): WorkflowStep | undefined => {
  return WORKFLOW_STEPS.find(step => step.id === id);
};

export const getNextWorkflow = (currentId: string): WorkflowStep | null => {
  const currentIndex = WORKFLOW_STEPS.findIndex(step => step.id === currentId);
  if (currentIndex === -1 || currentIndex === WORKFLOW_STEPS.length - 1) {
    return WORKFLOW_STEPS[0];
  }
  return WORKFLOW_STEPS[currentIndex + 1];
};

export const getPreviousWorkflow = (currentId: string): WorkflowStep | null => {
  const currentIndex = WORKFLOW_STEPS.findIndex(step => step.id === currentId);
  if (currentIndex === -1 || currentIndex === 0) {
    return WORKFLOW_STEPS[WORKFLOW_STEPS.length - 1];
  }
  return WORKFLOW_STEPS[currentIndex - 1];
};