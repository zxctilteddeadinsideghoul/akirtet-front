import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { AuthLayout } from "../Auth/AuthLayout";
import { Welcome } from "../Welcome/Welcome";
import { WelcomeLayout } from "../Welcome/WelcomeLayout";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { TimeTable } from "../Calendar/TimeTable";
import { Chat } from "../Chat/Chat";
import { Layout } from "../Layout";

/**
 * Routes representation
 * @returns {JSX.Element} BrowserRouter
 */
export const AppRouter = () => {
  return (
    <BrowserRouter>
      {/** Global routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="calendar" element={<TimeTable />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        {/** Welcome routes */}
        <Route path="/welcome" element={<WelcomeLayout />}>
          <Route index element={<Welcome />} />
        </Route>

        {/** Auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
