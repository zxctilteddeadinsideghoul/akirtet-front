import ChatLogo from "../assets/chat-round.svg";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-end">
      <Link className="text-link" to="/chat">
        <div className="flex items-center justify-end text-red-500 pr-10 mr-5 h-19 w-50 bg-customgreen rounded-full">
          <div className="h-13 w-13 mr-2">
            <Image src={ChatLogo}></Image>
          </div>
          <div className="text-4xl">
            Chat
          </div>
        </div>
      </Link>
      <Link className="text-link" to="/profile">
        <div className="flex justify-center  items-center bg-customgreen rounded-full w-19 h-19">Profile</div>
      </Link>
    </div>
  );
};
