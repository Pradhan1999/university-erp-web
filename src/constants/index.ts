export const DEPARTMENTS = [
  "Mathematics",
  "Computer Science",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Literature",
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  label: dept,
  value: dept,
}));

const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined.`);
  }
  return value;
};

// Environment variables (ensure these are set in your .env file)
export const API_URL = getEnvVariable("VITE_API_URL");
export const BACKEND_BASE_URL = getEnvVariable("VITE_BACKEND_BASE_URL");

// Cloudinary configuration
export const CLOUDINARY_UPLOAD_PRESET = getEnvVariable(
  "VITE_CLOUDINARY_UPLOAD_PRESET",
);
export const CLOUDINARY_CLOUD_NAME = getEnvVariable(
  "VITE_CLOUDINARY_CLOUD_NAME",
);
