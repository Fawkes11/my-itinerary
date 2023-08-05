import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Outlet />
    </div>
  );
}
