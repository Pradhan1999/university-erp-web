import { Route, Routes, Outlet } from "react-router";
import { Book, GraduationCap, LayoutDashboard } from "lucide-react";
import { Layout } from "./components/refine-ui/layout/layout";
import Dashboard from "./pages/dashboard";
import SubjectsList from "./pages/subjects/list";
import SubjectsCreate from "./pages/subjects/create";
import ClassPage from "./pages/classes/list";
import ClassesCreate from "./pages/classes/create";

export const resources = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <LayoutDashboard />, 
    },
  },
  {
    name: "subjects",
    list: "/subjects",
    create: "/subjects/create",
    meta: {
      label: "Subjects",
      icon: <Book />, 
    },
  },
  {
    name: "classes",
    list: "/classes",
    create: "/classes/create",
    meta: {
      label: "Classes",
      icon: <GraduationCap />, 
    },
  },
];

export function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<Dashboard />} />

        <Route path="subjects">
          <Route index element={<SubjectsList />} />
          <Route path="create" element={<SubjectsCreate />} />
        </Route>

        <Route path="classes">
          <Route index element={<ClassPage />} />
          <Route path="create" element={<ClassesCreate />} />
        </Route>
      </Route>
    </Routes>
  );
}