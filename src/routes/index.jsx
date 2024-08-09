import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../layout/Layout';
import AuthLayout from '../layout/AuthLayout';
import Loading from '@/components/Loading';

// Lazy load pages
// const Dashboard = lazy(() => import('../pages/dashboard'));
// const Dashboard = lazy(() => import('../pages/identityType/views/AddIdentityType'));
const Dashboard = lazy(() => import('../pages/dashboard/ecommerce'));
const Ecommerce = lazy(() => import('../pages/dashboard/ecommerce'));
const CrmPage = lazy(() => import('../pages/dashboard/crm'));
const Login = lazy(() => import('../pages/auth/login'));
const Login2 = lazy(() => import('../pages/auth/login2'));
const Register = lazy(() => import('../pages/auth/register'));
const Register2 = lazy(() => import('../pages/auth/register2'));
const ForgotPass = lazy(() => import('../pages/auth/forgot-password'));
const ForgotPass2 = lazy(() => import('../pages/auth/forgot-password2'));
const Error = lazy(() => import('../pages/404'));
const Button = lazy(() => import('../pages/elements/button'));
const Dropdown = lazy(() => import('../pages/components/dropdown'));
const Badges = lazy(() => import('../pages/elements/badges'));
const Alert = lazy(() => import('../pages/elements/alert'));
const Progressbar = lazy(() => import('../pages/elements/progress'));
const Card = lazy(() => import('../pages/elements/card'));
const AvatarPage = lazy(() => import('../pages/elements/avatar'));
const Tooltip = lazy(() => import('../pages/elements/tooltip-popover'));
const Modal = lazy(() => import('../pages/components/modal'));
const Pagination = lazy(() => import('../pages/components/pagination'));
const AccrodainPage = lazy(() => import('../pages/components/accordion'));
const TabPage = lazy(() => import('../pages/components/tab'));
const Video = lazy(() => import('../pages/components/video'));
const SpinierPage = lazy(() => import('../pages/elements/spinier'));
const TimelinePage = lazy(() => import('../pages/components/timeline'));
const InputPage = lazy(() => import('../pages/forms/input'));
const TextareaPage = lazy(() => import('../pages/forms/textarea'));
const CheckboxPage = lazy(() => import('../pages/forms/checkbox'));
const RadioPage = lazy(() => import('../pages/forms/radio-button'));
const SwitchPage = lazy(() => import('../pages/forms/switch'));
const InputGroupPage = lazy(() => import('../pages/forms/input-group'));
const InputMask = lazy(() => import('../pages/forms/input-mask'));
const FormValidation = lazy(() => import('../pages/forms/form-validation'));
const FileInput = lazy(() => import('../pages/forms/file-input'));
const FormRepeater = lazy(() => import('../pages/forms/form-repeater'));
const SelectPage = lazy(() => import('../pages/forms/select'));
const ReactSelectPage = lazy(() => import('../pages/forms/select/react-select'));
const Flatpicker = lazy(() => import('../pages/forms/date-time-picker'));
const AppexLineChartPage = lazy(() => import('../pages/chart/appex-chart'));
const ChartJs = lazy(() => import('../pages/chart/chartjs'));
const Recharts = lazy(() => import('../pages/chart/recharts'));
const CalendarPage = lazy(() => import('../pages/app/calendar'));
const MapPage = lazy(() => import('../pages/map'));
const BasicTablePage = lazy(() => import('../pages/table/table-basic'));
const TanstackTable = lazy(() => import('../pages/table/react-table'));
const InvoicePage = lazy(() => import('../pages/utility/invoice'));
const InvoiceAddPage = lazy(() => import('../pages/utility/add-invoice'));
const InvoicePreviewPage = lazy(() => import('../pages/utility/invoice-preview'));
const InvoiceEditPage = lazy(() => import('../pages/utility/edit-invoice'));
const PricingPage = lazy(() => import('../pages/utility/pricing'));
const BlankPage = lazy(() => import('../pages/utility/blank-page'));
const FaqPage = lazy(() => import('../pages/utility/faq'));
const Profile = lazy(() => import('../pages/utility/profile'));
const IconPage = lazy(() => import('../pages/icons'));
const NotificationPage = lazy(() => import('../pages/utility/notifications'));
const TodoPage = lazy(() => import('../pages/app/todo'));
const ChatPage = lazy(() => import('../pages/app/chat'));
const BoardsPage = lazy(() => import('../pages/app/boards'));
const Users = lazy(() => import('../pages/users/user-table'));
const Roles = lazy(() => import('../pages/roles/RoleTablePage'));
import { GlobalMethod } from '../helpers/apiHelper';
import UsersList from '../pages/users/views/UsersList';
import { AddUser,EditUser } from '../pages/users/views';
import {RolesList,EditRole,addRole,ViewRole} from '../pages/roles/views';
import PackageList from '../pages/package/views/PackageList';
import addPackages from '../pages/package/views/AddPackage';
import ViewUser from '../pages/users/views/ViewUser';
import {ViewPermission,AddPermission,PermissionsList,EditPermission} from '../pages/permisions/views';
import {DeviceList,AddDevice,DeviceDetails} from '../pages/device/views';
import EditDevice from '../pages/device/views/EditDevice';
import {EditSp,ViewSp,AddSp,SpList} from '../pages/sp/view';
import {IdentityTypeList,ViewIdentityType,EditIdentityType,AddIdentityType }from '../pages/identityType/views';
import {DeviceModalList,AddDeviceModal,ViewDeviceModal,EditDeviceModal} from '../pages/deviceModel/views';
import { ProductList,ViewProduct,EditProduct,AddProduct } from '../pages/product/view';
import {SaleList,ViewSale,AddSale,SaleReturnList,Pos,SaleReturnView} from '../pages/sale/view';
import {CustomerList,ViewCustomer,AddCustomer,EditCustomer} from '../pages/customer/views';
import {SupplierList,ViewSupplier,AddSupplier,EditSupplier} from '../pages/supplier/views';
import {BeneficiaryList,ViewBeneficiary,AddBeneficiary,EditBeneficiary} from '../pages/beneficiary/views';
import {InsuaranceList,AddInsuarance,ViewInsuarance,EditInsuarance} from "../pages/insuarance/views"
import {ExchangeRateList,AddExchangeRate,ViewExchangeRate,EditExchangeRate} from "../pages/exchangeRate/views"
import { PurchaseList,ViewPurchase,PurchaseReturnList,ImportPurchase,AddPurchase } from '../pages/purchase/view';
import { ExpenditureList,AddExpenditure,CancelledExpenditureList } from '../pages/expenditure/view';


const withPermissionCheck = (permissionsRequired, Component) => {
  const PermissionWrapper = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const permissionArray = useSelector(
      (state) => state.user.userInfo.UsrResp.UsrDtl.PermDtl
    );
    const userPermissions = GlobalMethod.getUserPermissionName(permissionArray);

    if (!isAuthenticated) {
      return <Navigate to="/signIn" />;
    }

    const hasPermission = GlobalMethod.hasAnyPermission(
      permissionsRequired,
      userPermissions
    );
    if (!hasPermission) {
      return <Navigate to="/error-403" />;
    }

    return <Component {...props} />;
  };

  return <PermissionWrapper />;
};

const AppRouter = () => {
  const { isAuthenticated, userInfo } = useSelector((state) => state.user);
    <Router></Router>;
    
  const routes = useRoutes([
    {
      path: '/auth/*',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'login2', element: <Login2 /> },
        { path: 'register', element: <Register /> },
        { path: 'register2', element: <Register2 /> },
        { path: 'forgot-password', element: <ForgotPass /> },
        { path: 'forgot-password2', element: <ForgotPass2 /> },
      ],
    },
    {
      element: 
      isAuthenticated ? 
      <Layout /> 
      : <Navigate to="/auth/login" />
      ,
      children: [
        { path: '', element: <Navigate to="/dashboard" /> },
        { path: 'dashboard', element: <Dashboard /> },
        {path: 'roles', element: <Roles />},
        { path: 'users', element: <Users />},
        { path: 'ecommerce', element: <Ecommerce /> },
        { path: 'crm', element: <CrmPage /> },
        { path: 'todos', element: <TodoPage /> },
        { path: 'chats', element: <ChatPage /> },
        { path: 'calendar', element: <CalendarPage /> },
        { path: 'boards', element: <BoardsPage /> },
        { path: 'button', element: <Button /> },
        { path: 'dropdown', element: <Dropdown /> },
        { path: 'badges', element: <Badges /> },
        { path: 'alert', element: <Alert /> },
        { path: 'progress', element: <Progressbar /> },
        { path: 'card', element: <Card /> },
        { path: 'avatar', element: <AvatarPage /> },
        { path: 'tooltip', element: <Tooltip /> },
        { path: 'timeline', element: <TimelinePage /> },
        { path: 'modal', element: <Modal /> },
        { path: 'pagination', element: <Pagination /> },
        { path: 'accordion', element: <AccrodainPage /> },
        { path: 'spinier', element: <SpinierPage /> },
        { path: 'tab', element: <TabPage /> },
        { path: 'video', element: <Video /> },
        { path: 'textfield', element: <InputPage /> },
        { path: 'textarea', element: <TextareaPage /> },
        { path: 'checkbox', element: <CheckboxPage /> },
        { path: 'radio', element: <RadioPage /> },
        { path: 'switch', element: <SwitchPage /> },
        { path: 'input-group', element: <InputGroupPage /> },
        { path: 'input-mask', element: <InputMask /> },
        { path: 'form-validation', element: <FormValidation /> },
        { path: 'file-input', element: <FileInput /> },
        { path: 'form-repeater', element: <FormRepeater /> },
        { path: 'select', element: <SelectPage /> },
        { path: 'react-select', element: <ReactSelectPage /> },
        { path: 'date-time-picker', element: <Flatpicker /> },
        { path: 'appex-chart', element: <AppexLineChartPage /> },
        { path: 'chartjs', element: <ChartJs /> },
        { path: 'recharts', element: <Recharts /> },
        { path: 'map', element: <MapPage /> },
        { path: 'table-basic', element: <BasicTablePage /> },
        { path: 'react_table', element: <TanstackTable /> },
        { path: 'invoice', element: <InvoicePage /> },
        { path: 'add-invoice', element: <InvoiceAddPage /> },
        { path: 'invoice-preview', element: <InvoicePreviewPage /> },
        { path: 'edit-invoice', element: <InvoiceEditPage /> },
        { path: 'pricing', element: <PricingPage /> },
        { path: 'blank-page', element: <BlankPage /> },
        { path: 'faq', element: <FaqPage /> },
        { path: 'profile', element: <Profile /> },
        { path: 'icons', element: <IconPage /> },
        { path: 'notifications', element: <NotificationPage /> },
       
        {
          path: "userManagement/users",
          element: withPermissionCheck(["MANAGE_USER", "VIEW_USER"], UsersList),
        },
        
        {
          path: "userManagement/users",
          element: withPermissionCheck(["MANAGE_USER", "VIEW_USER"], UsersList),
        },
        {
          path: "userManagement/viewUser",
          element: withPermissionCheck(["MANAGE_USER", "VIEW_USER"], ViewUser),
        },
        {
          path: "userManagement/EditUser",
          element: withPermissionCheck(["MANAGE_USER", "CREATE_USER"], EditUser),
        },
        {
          path: "userManagement/addUser",
          element: withPermissionCheck(["MANAGE_USER", "CREATE_USER"], AddUser),
        },

        {
          path: "userManagement/roles",
          element: withPermissionCheck(["MANAGE_ROLE", "VIEW_ROLE"], RolesList),
        },
        
        {
          path: "userManagement/addRole",
          element: withPermissionCheck(["MANAGE_ROLE", "CREATE_ROLE"], addRole),
        },
        {
          path: "userManagement/EditRole",
          element: withPermissionCheck(["MANAGE_ROLE", "CREATE_ROLE"], addRole),
        },
        {
          path: "userManagement/viewRole",
          element: withPermissionCheck(["MANAGE_ROLE", "VIEW_ROLE"], ViewRole),
        },

        {
          path: "userManagement/permissions",
          element: withPermissionCheck(
            ["MANAGE_PERMISSION", "VIEW_PERMISSION"],
            PermissionsList
          ),
        },
        {
          path: "userManagement/viewPermission",
          element: withPermissionCheck(
            ["MANAGE_PERMISSION", "VIEW_PERMISSION"],
            ViewPermission
          ),
        },
        {
          path: "userManagement/addPermission",
          element: withPermissionCheck(
            ["MANAGE_PERMISSION", "CREATE_PERMISSION"],
            AddPermission
          ),
        },
        {
          path: "userManagement/EditPermission",
          element: withPermissionCheck(
            ["MANAGE_PERMISSION", "CREATE_PERMISSION"],
            EditPermission
          ),
        },
        // customer
         
        {
          path: "settings/Customers",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "VIEW_CUSTOMER"],
            CustomerList
          ),
        },
        {
          path: "settings/addCustomer",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "CREATE_CUSTOMER"],
            AddCustomer
          ),
        },
        {
          path: "settings/editCustomer",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "EDIT_CUSTOMER"],
            EditCustomer
          ),
        },
        {
          path: "settings/viewCustomer",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "VIEW_CUSTOMER"],
            ViewCustomer
          ),
        },
        // end customer

        // start suppliers
        {
          path: "settings/Suppliers",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            SupplierList
          ),
        },
        {
          path: "settings/addSupplier",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "CREATE_SUPPLIER"],
            AddSupplier
          ),
        },
        {
          path: "settings/editSupplier",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "EDIT_SUPPLIER"],
            EditSupplier
          ),
        },
        {
          path: "settings/viewSupplier",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            ViewSupplier
          ),
        },
        // end supplier
      
        // start suppliers
        {
          path: "settings/beneficiaries",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "VIEW_CUSTOMER"],
            BeneficiaryList
          ),
        },
        {
          path: "settings/addBeneficiary",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "CREATE_CUSTOMER"],
            AddBeneficiary
          ),
        },
        {
          path: "settings/editBeneficiary",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "EDIT_CUSTOMER"],
            EditBeneficiary
          ),
        },
        {
          path: "settings/viewBeneficiary",
          element: withPermissionCheck(
            ["MANAGE_CUSTOMER", "VIEW_CUSTOMER"],
            ViewBeneficiary
          ),
        },
        // insuarance
          
        {
          path: "settings/insuarances",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            InsuaranceList
          ),
        },

        {
          path: "settings/addInsuarance",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            AddInsuarance
          ),
        },

        {
          path: "settings/editInsuarance",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            EditInsuarance
          ),
        },
        {
          path: "settings/viewInsuarance",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            ViewInsuarance
          ),
        },

        // end of insuarance

        // starrt  of exchanges
        {
          path: "settings/addExchangeRate",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            AddExchangeRate
          ),
        },
        {
          path: "settings/editExchangeRate",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            EditExchangeRate
          ),
        },
        {
          path: "settings/exchangeRates",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            ExchangeRateList
          ),
        },
        {
          path: "settings/viewExchangeRate",
          element: withPermissionCheck(
            ["MANAGE_SUPPLIER", "VIEW_SUPPLIER"],
            ViewExchangeRate
          ),
        },
        // end of exchanges


        {
          path: "settings/addSp",
          element: withPermissionCheck(["MANAGE_SP", "CREATE_SP"], AddSp),
        },
        {
          path: "settings/spList",
          element: withPermissionCheck(["MANAGE_SP", "VIEW_SP"], SpList),
        },
        {
          path: "settings/viewSp",
          element: withPermissionCheck(["VIEW_SP", "MANAGE_SP"], ViewSp),
        },
        {
          path: "settings/editDetail",
          element: withPermissionCheck(["EDIT_SP", "MANAGE_SP"], EditSp),
        },
        {
          path: "settings/packages",
          element: withPermissionCheck(["MANAGE_SP"], PackageList),
        },
        {
          path: "settings/addPackages",
          element: withPermissionCheck(["MANAGE_SP"], addPackages),
        },
        {
          path: "settings/devices",
          element: withPermissionCheck(
            ["MANAGE_DEVICE", "VIEW_DEVICE"],
            DeviceList
          ),
        },
        {
          path: "settings/addDevice",
          element: withPermissionCheck(
            ["MANAGE_DEVICE", "CREATE_DEVICE"],
            AddDevice
          ),
        },
        {
          path: "settings/viewDevice",
          element: withPermissionCheck(
            ["MANAGE_DEVICE", "VIEW_DEVICE"],
            DeviceDetails
          ),
        },
        {
          path: "settings/editDevice",
          element: withPermissionCheck(
            ["MANAGE_DEVICE", "EDIT_DEVICE"],
            EditDevice
          ),
        },
        {
          path: "settings/deviceModels",
          element: withPermissionCheck(
            ["MANAGE_DEVICE_MODEL", "VIEW_DEVICE_MODEL"],
            DeviceModalList
          ),
        },
        {
          path: "settings/addDeviceModel",
          element: withPermissionCheck(
            ["MANAGE_DEVICE_MODEL", "CREATE_DEVICE_MODEL"],
            AddDeviceModal
          ),
        },
        {
          path: "settings/viewDeviceModel",
          element: withPermissionCheck(
            ["MANAGE_DEVICE_MODEL", "VIEW_DEVICE_MODEL"],
            ViewDeviceModal
          ),
        },
        {
          path: "settings/EditDeviceModel",
          element: withPermissionCheck(
            ["MANAGE_DEVICE_MODEL", "EDIT_DEVICE_MODEL"],
            EditDeviceModal
          ),
        },
        {
          
          path: "settings/addIdentity",
          element: withPermissionCheck(
            ["MANAGE_IDENTITY_TYPE", "CREATE_IDENTITY_TYPE"],
            AddIdentityType
          ),
        },
        {
          path: "settings/editIdentity",
          element: withPermissionCheck(
            ["MANAGE_IDENTITY_TYPE", "EDIT_IDENTITY_TYPE"],
            EditIdentityType
          ),
        },
        {
          path: "settings/identities",
          element: withPermissionCheck(
            ["MANAGE_IDENTITY_TYPE", "VIEW_IDENTITY_TYPE"],
            IdentityTypeList
          ),
        },
        {
          path: "settings/viewIdentity",
          element: withPermissionCheck(
            ["MANAGE_IDENTITY_TYPE", "VIEW_IDENTITY_TYPE"],
            ViewIdentityType
          ),
        },
        // start transactionManagement
         {
          path: "transactionManagement/sales",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            SaleList
          ),
        },
        {
          path: "transactionManagement/viewSale",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            ViewSale
          ),
        },
        {
          path: "transactionManagement/Pos",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            Pos
          ),
        },
        {
          path: "transactionManagement/SaleReturnView",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            SaleReturnView
          ),
        },
        {
          path: "transactionManagement/salesReturns",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            SaleReturnList
          ),
        },
        {
          path: "transactionManagement/addSale",
          element: withPermissionCheck(
            ["MANAGE_SALE", "ADD_SALE"],
            AddSale
          ),
        },
        {
          path: "transactionManagement/purchases",
          element: withPermissionCheck(
            ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
            PurchaseList
          ),
        },
        {
          path: "transactionManagement/purchases",
          element: withPermissionCheck(
            ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
            PurchaseReturnList
          ),
        }, 
        {
          path: "transactionManagement/viewPurchase",
          element: withPermissionCheck(
            ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
            ViewPurchase
          ),
        },
        {
          path: "transactionManagement/purchasesReturns",
          element: withPermissionCheck(
            ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
            PurchaseReturnList
          ),
        },
        {
          path: "transactionManagement/importPurchase",
          element: withPermissionCheck(
            ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
            ImportPurchase
          ),
        },
        {
          path: "transactionManagement/addPurchase",
          element: withPermissionCheck(
            ["MANAGE_PURCHASE", "VIEW_PURCHASE"],
            AddPurchase
          ),
        },

        {
          path: "transactionManagement/expenditures",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            ExpenditureList
          ),
        },
        {
          path: "transactionManagement/cancellationExpenditure",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            CancelledExpenditureList
          ),
        },
        {
          path: "/transactionManagement/addExpenditure",
          element: withPermissionCheck(
            ["MANAGE_SALE", "VIEW_SALE"],
            AddExpenditure
          ),
        },


        // end transactionManagement

        //start stock Mnagament
         {
           path: "stockManagement/items",
          element: withPermissionCheck(
            ["MANAGE_ITEM", "VIEW_ITEM"],
            ProductList
          ),
        },
        {
          path: "stockManagement/viewItem",
         element: withPermissionCheck(
           ["MANAGE_ITEM", "VIEW_ITEM"],
           ViewProduct
         ),
       },
       {
        path: "stockManagement/addItem",
       element: withPermissionCheck(
         ["MANAGE_ITEM", "ADD_ITEM"],
         AddProduct
       ),
     },
     {
      path: "stockManagement/editItem",
     element: withPermissionCheck(
       ["MANAGE_ITEM", "EDIT_ITEM"],
       EditProduct
     ),
   },
       
        

        // end stock management
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/404',
      element: (
        <Suspense fallback={<Loading />}>
          <Error />
        </Suspense>
      ),
    },
  ]);

  return routes;
};

export default AppRouter;
