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

export const API_URL = import.meta.env.VITE_API_URL;
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;