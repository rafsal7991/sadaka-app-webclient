import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

const tables = [
  {
    title: "Basic",
    icon: "ph:car-profile-fill",
    price_Yearly: "$96",
    price_Monthly: "$26",
    button: "Buy now",
    bg: "bg-yellow-500",
    child: [
      {
        icon: "ci:check",
        className: "bg-[#13317d]dark:bg-[#13317d] text-indigo-500",
        text: "Lorem ipsum",
      },
      {
        icon: "ci:check",
        className: "bg-[#13317d]10 dark:bg-[#13317d]20 text-indigo-500",
        text: "Lorem set",
      },
      {
        icon: "ci:check",
        className: "bg-[#13317d]/10 dark:bg-[#13317d]/20 text-indigo-500",
        text: "Lorem ipsum dolor.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Lorem ipsum dolor sit amet, consectetur.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Only lorem.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Lorem ipsum dolor.",
      },
    ],
  },
  {
    title: "Pro",
    icon: "ph:airplane-in-flight-fill",
    price_Yearly: "$196",
    price_Monthly: "$20",
    button: "Buy now",
    bg: "bg-[#13317d]",
    ribon: "Most popular",
    child: [
      {
        icon: "ci:check",
        className: "bg-[#13317d]/10 dark:bg-[#13317d]/20 text-indigo-500",
        text: "Lorem ipsum",
      },
      {
        icon: "ci:check",
        className: "bg-[#13317d]/10 dark:bg-[#13317d]/20 text-indigo-500",
        text: "Lorem set",
      },
      {
        icon: "ci:check",
        className: "bg-[#13317d]/10 dark:bg-[#13317d]/20 text-indigo-500",
        text: "Lorem ipsum dolor.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Lorem ipsum dolor sit amet, consectetur.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Only lorem.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Lorem ipsum dolor.",
      },
    ],
  },
  {
    title: "Enterprices",
    icon: "ph:rocket-fill",
    price_Yearly: "$226",
    price_Monthly: "$216",
    button: "Buy now",
    bg: "bg-green-500",
    child: [
      {
        icon: "ci:check",
        className: "bg-[#13317d]/10 dark:bg-[#13317d]/20 text-indigo-500",
        text: "Lorem ipsum",
      },
      {
        icon: "ci:check",
        className: "bg-[#13317d]/10 dark:bg-[#13317d]/20 text-indigo-500",
        text: "Lorem set",
      },
      {
        icon: "ci:check",
        className: "bg-[#13317d]/10 dark:bg-[#13317d]/20 text-indigo-500",
        text: "Lorem ipsum dolor.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Lorem ipsum dolor sit amet, consectetur.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Only lorem.",
      },
      {
        icon: "ion:close",
        className: "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
        text: "Lorem ipsum dolor.",
      },
    ],
  },
];

const addPackages = () => {
  const [check, setCheck] = useState(true);
  const toggle = () => {
    setCheck(!check);
  };

  return (
    <div>
         <nav className="flex mb-3" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  to="/settings/packages"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                    Package List
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
               Add Packages 
                </span>
              </div>
            </li>
          </ol>
        </nav>
      <div className="space-y-5">
        <div className="text-center mb-6">
          <h4 className="text-gray-900 text-xl font-medium mb-2">Packages</h4>
          <label className="inline-flex text-sm cursor-pointer">
            <input type="checkbox" onChange={toggle} hidden />
            <span
              className={` ${
                check
                  ? "bg-[#13317d]/10  text-indigo-500"
                  : "dark:text-gray-300"
              } 
                px-[18px] py-1 transition duration-100 rounded`}
            >
              Yearly
            </span>
            <span
              className={`
              ${
                !check
                  ? "bg-[#13317d]/10  text-indigo-500"
                  : " dark:text-gray-300"
              }
                px-[18px] py-1 transition duration-100 rounded
                `}
            >
              Monthly
            </span>
          </label>
        </div>
        <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6 mx-auto">
          {tables.map((item, i) => (
            <div
              className="card p-6 text-center group hover:-translate-y-1 transition-all duration-200 relative overflow-hidden z-[1]"
              key={i}
            >
              {item.ribon && (
                <div className="text-sm font-medium bg-[#13317d] text-white py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45">
                  {item.ribon}
                </div>
              )}
              <Icon
                icon={item.icon}
                className=" text-center text-7xl mx-auto text-indigo-500 mb-4 group-hover:scale-110 transition-all duration-300"
              />
              <h4 className=" text-xl text-gray-600 dark:text-gray-300 mb-1">
                {item.title}
              </h4>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                the starter choise
              </div>
              <div
                className={`relative   text-sm text-gray-500 dark:text-gray-400 mt-5 `}
              >
                {check ? (
                  <span className=" text-4xl tracking-tight  text-indigo-500">
                    {item.price_Yearly}
                  </span>
                ) : (
                  <span className="text-4xl tracking-tight  text-indigo-500">
                    {item.price_Monthly}
                  </span>
                )}
                /{check ? "year" : "month"}
              </div>
              {item?.child && (
                <ul className="mt-8 space-y-4 text-left">
                  {item?.child.map((subItem, j) => (
                    <li
                      className="flex items-start space-x-3 rtl:space-x-reverse"
                      key={j}
                    >
                      <div
                        className={`shrink-0 h-6 w-6  flex flex-col items-center justify-center rounded-full ${subItem.className}`}
                      >
                        <Icon icon={subItem.icon} className="text-lg" />
                      </div>
                      <div className="  text-sm text-gray-600 dark:text-gray-300 ">
                        {subItem.text}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6">
                <Button
                  text={item.button}
                  className={` w-full rounded-full ${
                    item.bg === "bg-[#13317d]"
                      ? "btn-primary"
                      : "btn-primary light"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6 mx-auto">
          {tables.map((item, i) => (
            <div
              className="card p-6 text-center group hover:-translate-y-1 transition-all duration-200 relative z-[1] overflow-hidden"
              key={i}
            >
              <Icon
                icon={item.icon}
                className=" text-center text-7xl mx-auto text-indigo-500 mb-4 group-hover:scale-110 transition-all duration-300"
              />
              <h4 className=" text-xl text-gray-600 dark:text-gray-300 mb-1">
                {item.title}
              </h4>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                the starter choise
              </div>
              <div
                className={`relative   text-sm text-gray-500 dark:text-gray-400 mt-5 `}
              >
                {check ? (
                  <span className=" text-4xl tracking-tight  text-indigo-500">
                    {item.price_Yearly}
                  </span>
                ) : (
                  <span className="text-4xl tracking-tight  text-indigo-500">
                    {item.price_Monthly}
                  </span>
                )}
                /{check ? "year" : "month"}
              </div>
              {item?.child && (
                <ul className="mt-8 space-y-4 text-left">
                  {item?.child.map((subItem, j) => (
                    <li
                      className="flex items-start space-x-3 rtl:space-x-reverse"
                      key={j}
                    >
                      <div
                        className={`shrink-0 h-6 w-6  flex flex-col items-center justify-center rounded-full ${subItem.className}`}
                      >
                        <Icon icon={subItem.icon} className="text-lg" />
                      </div>
                      <div className="  text-sm text-gray-600 dark:text-gray-300 ">
                        {subItem.text}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6">
                <Button
                  text={item.button}
                  className={` w-full rounded-full ${
                    item.bg === "bg-[#13317d]"
                      ? "btn-primary"
                      : "btn-primary light"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default addPackages;
