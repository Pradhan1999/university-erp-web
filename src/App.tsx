import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import { dataProvider } from "./providers/data";
import Dashboard from "./pages/dashboard";
import { Layout } from "./components/refine-ui/layout/layout";
import { Book, LayoutDashboard } from "lucide-react";
import SubjectsList from "./pages/subjects/list";
import SubjectsCreate from "./pages/subjects/create";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <Refine
            dataProvider={dataProvider}
            notificationProvider={useNotificationProvider()}
            routerProvider={routerProvider}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "Evic7K-HQFXfz-YVjEPJ",
            }}
            // Sidebar menu items
            resources={[
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
            ]}>
            <Routes>
              <Route
                element={
                  <Layout>
                    <Outlet />
                  </Layout>
                }>
                <Route index element={<Dashboard />} />
                <Route path="/subjects" element={<SubjectsList />} />
                <Route path="subjects/create" element={<SubjectsCreate />} />
              </Route>
            </Routes>
            <Toaster />
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
