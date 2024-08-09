import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import useDarkMode from "@/hooks/useDarkMode";
import useSidebar from "@/hooks/useSidebar";
import useSemiDark from "@/hooks/useSemiDark";
import logo from "@/assets/images/ewcllogo.png"

// import images
import MobileLogo from "@/assets/images/logo/logo-c.svg";
import MobileLogoWhite from "@/assets/images/logo/logo-c-white.svg";

const SidebarLogo = ({ menuHover }) => {
  const [isDark] = useDarkMode();
  const [collapsed, setMenuCollapsed] = useSidebar();
  // semi dark
  const [isSemiDark] = useSemiDark();

  return (
    <div
      className={` logo-segment flex justify-between items-center bg-white dark:bg-gray-800 z-[9] py-6  px-4  
      ${menuHover ? "logo-hovered" : ""}
       
      
      `}
    >
      <Link to="/dashboard">
        <div className="flex items-center space-x- rtl:space-x-reverse">
          <div className="logo-icon h-[60px] object-cover">
            {!isDark && !isSemiDark ? (
              <img src={logo} alt="" className=" h-full w-20" />
            ) : (
              <img src={logo} alt="" className=" h-full w-20" />
            )}
          </div>

          {(!collapsed || menuHover) && (
            <div>
              <h1 className="text-[22px] font-medium  ">SadakaApp</h1>
            </div>
          )}
        </div>
      </Link>

      {(!collapsed || menuHover) && (
        <div
          onClick={() => setMenuCollapsed(!collapsed)}
          className={`h-4 w-4 border-[1px] border-gray-900 dark:border-gray-700 rounded-full transition-all duration-150
          ${
            collapsed
              ? ""
              : "ring-1 ring-inset ring-offset-[4px] ring-gray-900 dark:ring-gray-400 bg-gray-900 dark:bg-gray-400 dark:ring-offset-gray-700"
          }
          `}
        ></div>
      )}
    </div>
  );
};

export default SidebarLogo;
