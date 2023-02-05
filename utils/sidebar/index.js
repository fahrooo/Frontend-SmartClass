import { RxDashboard } from "react-icons/rx";
import { MdOutlinePeopleAlt, MdOutlinePersonOutline } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

function generateSidebarItems() {
  return [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: RxDashboard,
    },
    {
      name: "User",
      path: "/user",
      icon: MdOutlinePeopleAlt,
    },
    {
      name: "Kelas",
      path: "/kelas",
      icon: SiGoogleclassroom,
    },
    {
      name: "Profil",
      path: "/profil",
      icon: MdOutlinePersonOutline,
    },
  ];
}

export default generateSidebarItems;
