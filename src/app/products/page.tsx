"use client";
import DashboardLayout from "@/components/dashboardLayout";
import Pagination from "@/components/pagination";
import { productsList } from "@/projectData/products";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [currenPage, setCurrenPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(
    productsList.slice(0, 10)
  );

  useEffect(() => {
    setFilteredProducts(
      productsList.slice((currenPage - 1) * 10, (currenPage - 1) * 10 + 10)
    );
  }, [currenPage]);

  return (
    <DashboardLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{item.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 light:text-white whitespace-nowrap"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4">{item.brand}</td>
                <td className="px-6 py-4">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currenPage={currenPage}
          setCurrenPage={setCurrenPage}
          pageCount={Math.ceil(productsList.length / 10)}
        />
      </div>
    </DashboardLayout>
  );
};

export default Products;
