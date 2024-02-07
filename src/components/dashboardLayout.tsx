import { Boxes, LayoutDashboard, Package, ShoppingBag } from "lucide-react";
import { ReactNode } from "react";
import Sidebar, { SidebarItem } from "./sidebar";

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          path="/"
        />
        <SidebarItem
          icon={<ShoppingBag size={20} />}
          text="Products"
          path="/products"
        />
        <SidebarItem
          icon={<Boxes size={20} />}
          text="Categories"
          path="/categories"
        />
        <SidebarItem
          icon={<Package size={20} />}
          text="Brands"
          path="/brands"
        />
      </Sidebar>
      <div className="grow p-10 max-sm:pl-24">{children}</div>
    </div>
  );
};

export default DashboardLayout;
