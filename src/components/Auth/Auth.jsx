import { useContext, useEffect, useState } from "react";
import { AuthSignInForm } from "./Forms/SignIn";
import { AuthSignUpForm } from "./Forms/SignUp";

/**
 * Auth page representation
 * @returns {JSX.Element} Page
 */
export const Auth = () => {
  const [isSignIn, setIsSighIn] = useState(true);

  return (
    <>
      {isSignIn ? (
        <AuthSignInForm switchToSignUp={() => setIsSighIn(false)} />
      ) : (
        <AuthSignUpForm switchToSignIn={() => setIsSighIn(true)} />
      )}
    </>
  );
};
