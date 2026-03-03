import PageLayout from "@/components/page-layout";
import { CreateButton } from "@/components/refine-ui/buttons/create";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const ClassList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <PageLayout
      title="Classes"
      subtitle="Manage and organize your classes efficiently with our intuitive interface."
      search={
        <div className="search-field">
          <Search className="search-icon" />
          <Input
            type="text"
            placeholder="Search by name..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      }
      // filters={
      //   <Select
      //     value={selectedDepartment}
      //     onValueChange={(value) => setSelectedDepartment(value)}>
      //     <SelectTrigger>
      //       <SelectValue placeholder="Filter by department" />
      //     </SelectTrigger>
      //     <SelectContent>
      //       <SelectItem value="all">All Departments</SelectItem>
      //       {DEPARTMENT_OPTIONS.map((dept) => (
      //         <SelectItem key={dept.value} value={dept.value}>
      //           {dept.label}
      //         </SelectItem>
      //       ))}
      //     </SelectContent>
      //   </Select>
      // }
      actions={<CreateButton />}>
      Classes list will be here
    </PageLayout>
  );
};

export default ClassList;
