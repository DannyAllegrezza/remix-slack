import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";

export default function ChannelPage() {
  return (
    <div className="font-sans antialiased h-screen flex">
      <Sidebar />

      <Outlet />
    </div>
  );
}
