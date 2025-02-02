import ChatLogo from "../assets/chat-round.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Header representation for 'Home'
 * @returns {JSX.Element} Element
 */
export const Header = () => {
  return (
    <div className="flex justify-end">
      <Link className="text-link" to="/chat">
        <div className="flex items-center justify-center text-red-500 mr-5 h-19 w-50 bg-primaryblue rounded-full">
          <div className="h-10 w-10 mr-2">
            <Image src={ChatLogo}></Image>
          </div>
          <div className="text-3xl justify-center">Chat</div>
        </div>
      </Link>

      {/**
       * Profile container
       */}
      <Link className="text-link" to="/profile">
        <div className="flex justify-center  items-center bg-primaryblue rounded-full w-19 h-19">
          Profile
        </div>
      </Link>
    </div>
  );
};
