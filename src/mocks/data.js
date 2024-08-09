export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Dashboard",
    icon: "ph:house",
    isHide: true,
    permissions: ["MANAGE_USER", "VIEW_USER"],
    child: [
      {
        childtitle: "Home",
        childlink: "dashboard",
      },
      {
        childtitle: "System Statistics",
        childlink: "ecommerce",
      },
    ],
  },
  {
    isHeadr: true,
    title: "apps",
    permissions: ["MANAGE_USER", "VIEW_USER"],
  },
  {
    title: "Users",
    icon: "ph:users",
    permissions: ["MANAGE_USER", "VIEW_USER"],
    link: "#",
    child: [
      {
        childtitle: "Users List",
        childlink: "userManagement/users",
        permissions: ["MANAGE_USER", "VIEW_USER"],
      },
      {
        childtitle: "Permissions",
        childlink: "userManagement/permissions",
        permissions: ["MANAGE_PERMISSION", "VIEW_PERMISSION"],
      },
      {
        childtitle: "Roles",
        childlink: "userManagement/roles",
        permissions: ["MANAGE_ROLE", "VIEW_ROLE"],
      },
    ],
  },
 
 
  {
    title: "Purchase",
    icon: "ph:shopping-bag-light",
    permissions: ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
    link: "#",
    child: [
      {
        childtitle: "Purchase List",
        childlink: "transactionManagement/purchases",
        permissions: ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
      },
      {
        childtitle: "Purchase Return Lists",
        childlink: "transactionManagement/purchasesReturns",
        permissions: ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
      },
      {
        childtitle: "Import Purchase",
        childlink: "transactionManagement/importPurchase",
        permissions: ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
      },
    ],
  },
  {
    title: "Sale",
    icon: "ph:shopping-cart-light",
    permissions: ["MANAGE_SALE", "VIEW_SALE"],
    link: "#",
    child: [
      {
        childtitle: "Sale List",
        childlink: "transactionManagement/sales",
        permissions: ["MANAGE_SALE", "VIEW_SALE"],
      },
      {
        childtitle: "Sales Return Lists",
        childlink: "transactionManagement/salesReturns",
        permissions: ["MANAGE_SALE", "VIEW_SALE"],
      },
    ],
  },
  {
    title: "Stock",
    icon: "ph:codesandbox-logo",
    permissions: ["MANAGE_ITEM", "VIEW_ITEM"],
    link: "#",
    child: [
      {
        childtitle: "Items",
        childlink: "stockManagement/items",
        permissions: ["MANAGE_ITEM", "VIEW_ITEM"],
      },
      // {
      //   childtitle: "Roles",
      //   childlink: "userManagement/roles",
      //   permissions: ["MANAGE_ROLE", "VIEW_ROLE"],
      // },
    ],
  },
  {
    title: "Expenditure",
    icon: "ph:currency-circle-dollar-light",
    permissions: ["MANAGE_SALE", "VIEW_SALE"],
    link: "#",
    child: [
      {
        childtitle: "Expenditure List",
        childlink: "transactionManagement/expenditures",
        permissions: ["MANAGE_SALE", "VIEW_SALE"],
      },
      {
        childtitle: "Cancellation Expenditure",
        childlink: "transactionManagement/cancellationExpenditure",
        permissions: ["MANAGE_SALE", "VIEW_SALE"],
      },
    ],
  },
  {
    isHeadr: true,
    title: "Pages",
    permissions: ["MANAGE_USER", "VIEW_USER"],
  },
  {
    title: "Settings",
    icon: "ph:gear",
    link: "#",
    permissions: ["MANAGE_USER", "VIEW_USER","MANAGE_CUSTOMER","VIEW CUSTOMER"],
    isHide: true,
    child: [
      {
        childtitle: "Service Providers",
        childlink: "settings/spList",
        permissions: ["MANAGE_SP", "VIEW_SP"],
      },
      {
        childtitle: "Packages",
        childlink: "settings/packages",
        permissions: ["MANAGE_PACKAGE", "VIEW_PACKAGE"],
      },
      {
        childtitle: "Devices",
        childlink: "settings/devices",
        permissions: ["MANAGE_DEVICE", "VIEW_DEVICE"],
      },
      {
        childtitle: "Devices Modal",
        childlink: "settings/deviceModels",
        permissions: ["MANAGE_DEVICE_MODEL", "VIEW_DEVICE_MODEL"],
      },

      {
        childtitle: "Identity Types",
        childlink: "settings/identities",
        permissions: ["MANAGE_IDENTITY_TYPE", "VIEW_IDENTITY_TYPE"],
      },

      {
        childtitle: "Customers",
        childlink: "settings/customers",
        permissions: ["MANAGE_CUSTOMER", "VIEW_CUSTOMER"],
      },
      {
        childtitle: "Suppliers",
        childlink: "settings/suppliers",
        permissions: ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
      },
      {
        childtitle: "Insuarance",
        childlink: "settings/insuarances",
        permissions: ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
      },
      {
        childtitle: "Beneficiary",
        childlink: "settings/beneficiaries",
        permissions: ["MANAGE_CUSTOMER", "VIEW_CUSTOMER"],
      },
      {
        childtitle: "Exchange Rate",
        childlink: "settings/exchangeRates",
        permissions: ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
      },
    ],
  },
];

export const topMenu = [
  {
    title: "Dashboard",
    icon: "ph:house",
    isHide: true,
    child: [
      {
        childtitle: "Home",
        childlink: "dashboard",
      },
      {
        childtitle: "System Statistics",
        childlink: "ecommerce",
      },
    ],
  },
  {
    title: "Users",
    icon: "ph:lock-key",
    permissions: ["MANAGE_USER", "VIEW_USER"],
    link: "#",
    child: [
      {
        childtitle: "Users",
        childlink: "userManagement/users",
        permissions: ["MANAGE_USER", "VIEW_USER"],
      },
      {
        childtitle: "Permissions",
        childlink: "userManagement/permissions",
        permissions: ["MANAGE_PERMISSION", "VIEW_PERMISSION"],
      },
      {
        childtitle: "Roles",
        childlink: "userManagement/roles",
        permissions: ["MANAGE_ROLE", "VIEW_ROLE"],
      },
    ],
  },
  {
    title: "Settings",
    icon: "ph:codesandbox-logo",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Customers",
        childlink: "customers",
      },
      {
        childtitle: "Suppliers",
        childlink: "suppliers",
      },
      {
        childtitle: "Service Providers",
        childlink: "settings/spList",
        permissions: ["MANAGE_SP", "VIEW_SP"],
      },
      {
        childtitle: "Packages",
        childlink: "settings/packages",
        permissions: ["MANAGE_PACKAGE", "VIEW_PACKAGE"],
      },
      {
        childtitle: "Devices",
        childlink: "settings/devices",
        permissions: ["MANAGE_DEVICE", "VIEW_DEVICE"],
      },
      {
        childtitle: "Devices Modal",
        childlink: "settings/deviceModels",
        permissions: ["MANAGE_DEVICE_MODEL", "VIEW_DEVICE_MODEL"],
      },
      {
        childtitle: "Identity Types",
        childlink: "settings/identities",
        permissions: ["MANAGE_IDENTITY_TYPE", "VIEW_IDENTITY_TYPE"],
      },
    ],
  },
];

import User1 from "@/assets/images/avatar/avatar-1.jpg";
import User2 from "@/assets/images/avatar/avatar-2.jpg";
import User3 from "@/assets/images/avatar/avatar-3.jpg";
import User4 from "@/assets/images/avatar/avatar-4.jpg";

export const notifications = [
  {
    title:
      "Your Account has been created  <span class='font-medium'>successfully done</span>",
    icon: "ph:seal-check-light",
    status: "green",
    link: "#",
  },
  {
    title:
      "You upload your first product <span class='font-medium'>successfully done</span>",
    icon: "ph:cube-light",
    status: "blue",
    link: "#",
  },
  {
    title: "<span class='font-medium'>Thank you !</span> you made your first",
    icon: "ph:shopping-cart-light",
    status: "yellow",
    link: "#",
  },
  {
    title: "<span class='font-medium'>Broklan Simons </span> New are New admin",
    icon: "ph:user-circle-plus-light",
    status: "cyan",
    link: "#",
  },
  {
    title:
      "Your are update to Deshboard <span class='font-medium'>Pro Version</span>",
    status: "red",
    icon: "ph:lightning-light",
    link: "#",
  },
];

export const message = [
  {
    title: "Ronald Richards",
    desc: "Hello there, here is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: User1,
    link: "#",
  },
  {
    title: "Wade Warren",
    desc: "Hello there, here is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.",
    active: false,
    hasnotifaction: true,
    image: User2,
    link: "#",
  },
  {
    title: "Albert Flores",
    desc: "Hello there, here is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hello there, here is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
  {
    title: "Esther Howard",
    desc: "Hello there, here is  a Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.",
    active: false,
    hasnotifaction: true,
    image: User2,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hello there, here is  a Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.",
    active: false,
    hasnotifaction: false,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hello there, here is  a Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
];

export const colors = {
  primary: "#3b82f6",
  secondary: "#d946ef",
  danger: "#ef4444",
  black: "#000",
  warning: "#eab308",
  info: "#06b6d4",
  light: "#425466",
  success: "#22c55e",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

import meetsImage1 from "@/assets/images/svg/sk.svg";
import meetsImage2 from "@/assets/images/svg/path.svg";
import meetsImage3 from "@/assets/images/svg/dc.svg";
import meetsImage4 from "@/assets/images/svg/sk.svg";

export const meets = [
  {
    img: meetsImage1,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: meetsImage2,
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: meetsImage3,
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: meetsImage4,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];
import file1Img from "@/assets/images/icon/file-1.svg";
import file2Img from "@/assets/images/icon/pdf-1.svg";
import file3Img from "@/assets/images/icon/zip-1.svg";
import file4Img from "@/assets/images/icon/pdf-2.svg";
import file5Img from "@/assets/images/icon/scr-1.svg";

export const files = [
  {
    img: file1Img,
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file2Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file3Img,
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file4Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file5Img,
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];

export const filterOptions = [
  { value: "all", label: "All" },
  { value: "favorite", label: "Favorite" },
  { value: "completed", label: "Completed" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "update", label: "Update" },
  { value: "team", label: "Team" },
];
