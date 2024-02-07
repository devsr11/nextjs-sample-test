"use client";
import DashboardLayout from "@/components/dashboardLayout";
import { brandsList } from "@/projectData/brands";
import { categoriesList } from "@/projectData/categories";
import { productsList } from "@/projectData/products";
import { Boxes, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type DashboardItemType = {
  title: string;
  count: number;
  icon: ReactNode;
  link: string;
};

const DashboardItem = ({ title, count, icon, link }: DashboardItemType) => (
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
            <Link href="/products">
              <DashboardItem
                title="Products"
                count={productsList.length}
                icon={<ShoppingBag size={20} />}
                link="/products"
              />
            </Link>
            <Link href="/categories">
              <DashboardItem
                title="Categories"
                count={categoriesList.length}
                icon={<Boxes size={20} />}
                link="/categories"
              />
            </Link>
            <Link href="/brands">
              <DashboardItem
                title="Brands"
                count={brandsList.length}
                icon={<Package size={20} />}
                link="/brands"
              />
            </Link>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
