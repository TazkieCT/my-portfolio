import Navbar from "../components/navbar";
import SocialMedia from "../components/social-media";
import CustomCursor from "../components/custom-cursor";
import { Outlet } from "react-router-dom";
import SettingsButton from "../components/settings-button";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      <SocialMedia />
      <SettingsButton />
      <Outlet />
    </div>
  );
}
