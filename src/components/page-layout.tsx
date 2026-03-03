import { ReactNode } from "react";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "./refine-ui/views/list-view";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  search?: ReactNode;
  filters?: ReactNode;
  actions?: ReactNode;
  wrapperComponent?: React.ComponentType<{ children: ReactNode }>;
}

const PageLayout = ({
  title,
  subtitle,
  children,
  search,
  filters,
  actions,
  wrapperComponent: Wrapper = ListView,
}: PageLayoutProps) => {
  return (
    <Wrapper>
      <Breadcrumb />
      <h1 className="page-title">{title}</h1>
      {subtitle && (
        <div className="intro-row">
          <p>{subtitle}</p>
          <div className="actions-row">
            {search}
            {filters && <div className="flex gap-2 w-full sm:w-auto">{filters}</div>}
            {actions && <div className="flex gap-2 w-full sm:w-auto">{actions}</div>}
          </div>
        </div>
      )}
      {children}
    </Wrapper>
  );
};

export default PageLayout;
