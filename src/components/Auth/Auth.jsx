import { AuthSignInForm } from "./Forms/SignIn";

/**
 * Auth page representation
 * @returns {JSX.Element} Page
 */
export const Auth = () => {
  console.log("ya obosralsya. with love from Auth");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <AuthSignInForm />
      </div>
    </div>
  );
};
