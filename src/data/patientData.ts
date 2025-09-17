// Centralized patient data for consistent display across all components
export interface PatientData {
  id: string;
  name: string;
  dateOfBirth: string;
  age: number;
  currentDate: string;
}

// Calculate age from date of birth
function calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// Format date to DD-MMM-YYYY
function formatDateToDDMMMYYYY(date: Date): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

// Format time consistently across all components
function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  });
}

// Patient data - modify these values to update across all components
const PATIENT_DOB = "1949-04-12"; // April 12, 1949 (to match original data)
const PATIENT_ID = "2345412";
const PATIENT_NAME = "DOE, Jane";

export const patientData: PatientData = {
  id: PATIENT_ID,
  name: PATIENT_NAME,
  dateOfBirth: PATIENT_DOB,
  age: calculateAge(PATIENT_DOB),
  currentDate: formatDateToDDMMMYYYY(new Date())
};

// Formatted display functions
export const getFormattedPatientName = () => patientData.name;
export const getPatientId = () => patientData.id;
export const getPatientAge = () => patientData.age;
export const getPatientDOB = () => patientData.dateOfBirth;
export const getCurrentDate = () => patientData.currentDate;
export const getFormattedDOB = () => {
  const date = new Date(patientData.dateOfBirth);
  return formatDateToDDMMMYYYY(date);
};

// Centralized time formatting function
export const getFormattedTime = () => {
  return formatTime(new Date());
};
