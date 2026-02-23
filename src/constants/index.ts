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
  value: dept.toLowerCase().replace(/\s+/g, "-"),
}));
