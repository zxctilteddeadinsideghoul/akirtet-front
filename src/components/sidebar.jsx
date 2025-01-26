import {Quit} from "./quit.jsx";


// eslint-disable-next-line react/prop-types
const SidebarLinkTemplate = ({href, name, bgColor}) => {
  //TODO Link replaced
  return (
    <a href={href}>
      <li
        className="flex justify-start p-3 px-10 rounded-3xl transition-all duration-75 select-none"
        style={{
          backgroundColor: bgColor,
          color:
            bgColor === "#ffffff" || bgColor === "#cad5ca"
              ? "#000000"
              : "#ffffff",
        }}
      >
        {name}
      </li>
    </a>
  );
};

export const Sidebar = () => {
  return (
    <div className="flex p-5 w-auto flex-col h-full justify-start space-y-10 bg-black">
      <div className="flex  h-fit">

      </div>
      <div className="flex flex-col h-auto  text-2xl gap-2 select-none">
        <SidebarLinkTemplate href="/" name="Overview"/>
        <SidebarLinkTemplate href="/profile" name="Profile"/>
        <SidebarLinkTemplate href="/tables" name="Tables"/>
        <SidebarLinkTemplate href="/settings" name="Settings"/>
        <SidebarLinkTemplate href="/about" name="About"/>
      </div>
      <div className="flex bottom-0 fixed inset-x-0  w-full px-10 p-3 h-[25%]">
        <Quit classQuit={"flex"}/>
      </div>

    </div>
  );
};