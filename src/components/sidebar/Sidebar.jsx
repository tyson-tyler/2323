import Home from "../../assets/home.svg";
import Notfic from "../../assets/notification.svg";
import Shop from "../../assets/heart.svg";
import Conv from "../../assets/message.svg";
import Wall from "../../assets/wall.svg";
import sub from "../../assets/sub.svg";
import Pro from "../../assets/profile.svg";
import Set from "../../assets/setting.svg";
import Log from "../../assets/logout.svg";

const Sidebar = () => {
  const List = [
    {
      name: "Home",
      icons: Home,
    },
    {
      name: "Notifications",
      icons: Notfic,
    },
    {
      name: "Shop",
      icons: Shop,
    },
    {
      name: "Conversation",
      icons: Conv,
    },
    {
      name: "Wallet",
      icons: Wall,
    },
    {
      name: "Subscription",
      icons: sub,
    },
    {
      name: "My Profile",
      icons: Pro,
    },
    {
      name: "Settings",
      icons: Set,
    },
  ];

  return (
    <div className="sidebar fixed top-1 h-full px-3 py-3 mt-6 font-semibold">
      {List.map((num, index) => (
        <div key={index}>
          <div className="flex items-center px-5 py-6">
            <img src={num.icons} alt={`${num.name} icon`} className="mr-4" />
            <span>{num.name}</span>
          </div>
        </div>
      ))}

      <div className="bottom-2 px-3 py-3 mt-6 text-[#88C2BB] absolute flex items-center">
        <img className="w-5 h-5 mr-2" src={Log} />
        Log out
      </div>
    </div>
  );
};

export default Sidebar;
