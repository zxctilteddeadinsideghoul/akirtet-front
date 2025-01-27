import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { Welcome } from "../Welcome/Welcome";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { TimeTable } from "../Calendar/TimeTable";
import { Chat } from "../Chat/Chat";
import { Layout } from "../Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="auth" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
          <Route path="calendar" element={<TimeTable />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
