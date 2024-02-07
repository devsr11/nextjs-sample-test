"use client";
import DashboardLayout from "@/components/dashboardLayout";
import { Boxes, Package, ShoppingBag } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { productsList } from "@/projectData/products";
import _ from "lodash";

type DashboardItemType = {
  title: string;
  count: number;
  icon: ReactNode;
};

const DashboardItem = ({ title, count, icon }: DashboardItemType) => (
  <div className="flex items-center p-4  rounded-lg shadow-xs bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800">
    <div className="p-3 mr-4 text-indigo-500 bg-white rounded-full">{icon}</div>
    <div>
      <p className="mb-2 text-sm font-medium ">{title}</p>
      <p className="text-lg font-semibold text-indigo-800">{count}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <DashboardLayout>
      <main className="h-full overflow-y-auto">
        <div className="container  mx-auto grid">
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
            <DashboardItem
              title="Products"
              count={productsList.length}
              icon={<ShoppingBag size={20} />}
            />
            <DashboardItem
              title="Categories"
              count={Object.keys(_.groupBy(productsList, "category")).length}
              icon={<Boxes size={20} />}
            />
            <DashboardItem
              title="Brands"
              count={Object.keys(_.groupBy(productsList, "brand")).length}
              icon={<Package size={20} />}
            />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
