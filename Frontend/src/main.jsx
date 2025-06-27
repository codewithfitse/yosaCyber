import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import NotFound from "./pages/404.jsx";
import Booking from "./pages/Booking.jsx";
import Vehicles, {
  SuvVehicles,
  MidSuvVehicles,
  FullSuvVehicles,
  MiniVanVehicles,
  PickUpVehicles,
  OneDayVehicles,
  OneDayVehiclesBook,
} from "./pages/Vehicles.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { Landing } from "./pages/Landing.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import UserDashboard from "./pages/dashboard/UserDashboard.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import SubDashboard from "./pages/dashboard/SubAdminDashboard.jsx";
import {
  EditDashboard,
  ViewDashboard,
  DeleteDashboard,
} from "./pages/dashboard/CRUDUSER.jsx";
import {
  LandingVehicle,
  SubLandingVehicle,
  Deletes,
  Edits,
  Views,
  Post,
  GetAdmin,
  Get,
} from "./pages/dashboard/CRUDVECHICL.jsx";
import {
  OneLandingVehicle,
  OneLandingVehicleAdmin,
  OneDeletes,
  OneEdits,
  OneViews,
  OnePost,
  OneGet,
  OneGetAdmin,
} from "./pages/dashboard/CRUDONE.jsx";
import {
  Profile,
  SubProfile,
  UserProfile,
} from "./pages/dashboard/Profile.jsx";
import { ContactDb, EditContactDb } from "./pages/dashboard/ContactDb.jsx";
import { BookingDb, EditBookingDb } from "./pages/dashboard/BookingDb.jsx";
import UserDb from "./pages/dashboard/UserDb.jsx";
import Demo from "./pages/Demo.jsx";
import {
  CancledDemoDb,
  AllDemoDb,
  EditDemoDb,
  LandingDemoDb,
  PendingDemoDb,
  SucessfullDemoDb,
  UserDemoDb,
} from "./pages/dashboard/DemoDb.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/AboutUS",
    element: <AboutUs />,
  },
  {
    path: "/Booking",
    element: <Booking />,
  },
  {
    path: "/Vehicles",
    element: <Vehicles />,
  },
  {
    path: "/Demo",
    element: <Demo />,
  },
  {
    path: "/SuvVehicles",
    element: <SuvVehicles />,
  },
  {
    path: "/MidSuvVehicles",
    element: <MidSuvVehicles />,
  },
  {
    path: "/FullSuvVehicles",
    element: <FullSuvVehicles />,
  },
  {
    path: "/MiniVanVehicles",
    element: <MiniVanVehicles />,
  },
  {
    path: "/PickUpVehicles",
    element: <PickUpVehicles />,
  },
  {
    path: "/OneDayVehicles",
    element: <OneDayVehicles />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Admin",
    element: <AdminDashboard />,
  },
  {
    path: "/SubAdmin",
    element: <SubDashboard />,
  },
  {
    path: "/UserDashboard",
    element: <UserDashboard />,
  },
  {
    path: "/LandingVehicle",
    element: <LandingVehicle />,
  },
  {
    path: "/SubLandingVehicle",
    element: <SubLandingVehicle />,
  },
  {
    path: "/Post",
    element: <Post />,
  },
  {
    path: "/GetAdmin",
    element: <GetAdmin />,
  },
  {
    path: "/Get",
    element: <Get />,
  },
  {
    path: "/Views",
    element: <Views />,
  },
  {
    path: "/Edits",
    element: <Edits />,
  },
  {
    path: "/Deletes",
    element: <Deletes />,
  },
  {
    path: "/OneLandingVehicle",
    element: <OneLandingVehicle />,
  },
  {
    path: "/OneLandingVehicleAdmin",
    element: <OneLandingVehicleAdmin />,
  },
  {
    path: "/OneDayVehiclesBook",
    element: <OneDayVehiclesBook />,
  },
  {
    path: "/OnePost",
    element: <OnePost />,
  },
  {
    path: "/OneGet",
    element: <OneGet />,
  },
  {
    path: "/OneGetAdmin",
    element: <OneGetAdmin />,
  },
  {
    path: "/OneViews",
    element: <OneViews />,
  },
  {
    path: "/OneEdits",
    element: <OneEdits />,
  },
  {
    path: "/OneDeletes",
    element: <OneDeletes />,
  },
  {
    path: "/Edit",
    element: <EditDashboard />,
  },
  {
    path: "/View",
    element: <ViewDashboard />,
  },
  {
    path: "/Delete",
    element: <DeleteDashboard />,
  },
  {
    path: "/UserDb",
    element: <UserDb />,
  },
  {
    path: "/ContactDb",
    element: <ContactDb />,
  },
  {
    path: "/EditContactDb",
    element: <EditContactDb />,
  },
  {
    path: "/BookingDb",
    element: <BookingDb />,
  },
  {
    path: "/EditBookingDb",
    element: <EditBookingDb />,
  },
  {
    path: "/LandingDemoDb",
    element: <LandingDemoDb />,
  },
  {
    path: "/AllDemoDb",
    element: <AllDemoDb />,
  },
  {
    path: "/PendingDemoDb",
    element: <PendingDemoDb />,
  },
  {
    path: "/SucessfullDemoDb",
    element: <SucessfullDemoDb />,
  },
  {
    path: "/CancledDemoDb",
    element: <CancledDemoDb />,
  },
  {
    path: "/UserDemoDb",
    element: <UserDemoDb />,
  },
  {
    path: "/EditDemoDb",
    element: <EditDemoDb />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/SubProfile",
    element: <SubProfile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
