"use client";
import DashboardLayout from "@/components/dashboardLayout";
import Pagination from "@/components/pagination";
import { brandsList } from "@/projectData/brands";
import React, { useEffect, useState } from "react";

const Brands = () => {
  const [currenPage, setCurrenPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(
    brandsList.slice(0, 10)
  );

  useEffect(() => {
    setFilteredProducts(
      brandsList.slice((currenPage - 1) * 10, (currenPage - 1) * 10 + 10)
    );
  }, [currenPage]);
  return (
    <DashboardLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="px-6 w-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Brand name
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item, index) => (
              <tr
                key={item.id}
                className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{item.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 light:text-white whitespace-nowrap"
                >
                  {item.name}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currenPage={currenPage}
          setCurrenPage={setCurrenPage}
          pageCount={Math.ceil(brandsList.length / 10)}
        />
      </div>
    </DashboardLayout>
  );
};

export default Brands;
