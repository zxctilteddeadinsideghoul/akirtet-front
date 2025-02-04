import {Link} from "react-router-dom";

/**
 * Auth page representation
 * @returns {JSX.Element} Page
 */
export const Auth = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-lightgray">
      <div>
        {/* Header */}
        <div
          className="w-[25vw] min-w-96 h-[13vh] min-h-32 rounded-t-3xl bg-primaryblue flex items-center justify-center text-3xl text-lightgray font-mono">
          Авторизация
        </div>

        {/* Form Container */}
        <div
          className="flex flex-col items-center w-[25vw] min-w-96 h-[50vh] min-h-96 shadow-lg shadow-dangerblue rounded-b-2xl bg-white relative">
          <ul className="w-full font-mono text-2xl">
            <li className="flex justify-center items-center mt-[15%] mb-4">
              <input
                type="text"
                className="bg-twgray border-2 border-primaryblue text-gray-900 text-sm rounded-full block w-4/5 p-2.5"
                placeholder="Имя пользователя"
                required
              />
            </li>
            <li className="flex justify-center items-center mb-4">
              <input
                type="password"
                className="bg-twgray border-2 border-primaryblue text-gray-900 text-sm rounded-full block w-4/5 p-2.5"
                placeholder="Пароль"
                required
              />
            </li>
          </ul>

          {/* Button */}
          <div className="flex w-4/5 p-2 mb-4">
            <button
              className="grow p-2 bg-primaryblue text-white rounded-full border-2 border-mywhite focus:border-dangerblue transition">
              Войти
            </button>
          </div>

          {/* Registration TODO add registration page */}
          <div className="absolute bottom-4 text-sm">
            Нет аккаунта? <Link className="text-primaryblue hover:underline">Регистрация</Link>
          </div>
        </div>
      </div>
    </div>

  );
};