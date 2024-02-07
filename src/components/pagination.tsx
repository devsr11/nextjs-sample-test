import React from "react";

interface IProps {
  currenPage: number;
  setCurrenPage: (currenPage: number) => void;
  pageCount: number;
}

const Pagination = ({ currenPage, setCurrenPage, pageCount }: IProps) => {
  return (
    <nav className="flex justify-end p-2">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li
          onClick={() => setCurrenPage(currenPage - 1)}
          className={currenPage === 1 ? "pointer-events-none" : ""}
        >
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        {[...Array(pageCount)].map((item, index) => (
          <li key={index} onClick={() => setCurrenPage(index + 1)}>
            <a
              href="#"
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currenPage === index + 1
                  ? "text-indigo-600 border-indigo-300 bg-indigo-50 hover:bg-indigo-100 hover:text-blue-700 light:text-white"
                  : "text-gray-600 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:text-gray-400"
              }   border    light:border-gray-700  light:hover:bg-gray-700 light:hover:text-white`}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li
          onClick={() => setCurrenPage(currenPage + 1)}
          className={currenPage === pageCount ? "pointer-events-none" : ""}
        >
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
