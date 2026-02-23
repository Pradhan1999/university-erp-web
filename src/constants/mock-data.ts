import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "MATH101",
    name: "Calculus I",
    department: "Mathematics",
    description: "Introduction to differential and integral calculus.",
    createAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Overview of computer science principles and programming.",
    createAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS101",
    name: "General Physics I",
    department: "Physics",
    description: "Fundamental concepts of mechanics and thermodynamics.",
    createAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: "CHEM101",
    name: "General Chemistry I",
    department: "Chemistry",
    description:
      "Basic principles of chemistry, including atomic structure and bonding.",
    createAt: new Date().toISOString(),
  },
];
