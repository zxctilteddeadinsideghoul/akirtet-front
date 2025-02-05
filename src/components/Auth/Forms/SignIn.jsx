import { signInAction } from "../Actions/SignIn";

/**
 * Sign in form
 * @returns {JSX.Element} Form
 */
export const AuthSignInForm = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold text-general_blue mb-8">{"акиртет)"}</h1>
      <form className="w-72">
        <div className="mb-5">
          <label className="block text-gray-600 text-lg mb-2" htmlFor="email">
            Электронная почта
          </label>
          <input
            type="email"
            id="email"
            placeholder="mail@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700  text-sm font-medium mb-2"
            htmlFor="password"
          >
            Пароль
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="current-password"
          />
        </div>
        <div className="flex items-center mb-5">
          <input
            type="checkbox"
            id="stay_signed_in"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
          />
          <label
            htmlFor="stay_signed_in"
            className="ml-2 text-sm text-gray-700"
          >
            Не выходить
          </label>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            type="button"
            className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Зарегистрироваться
          </button>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 "
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};
