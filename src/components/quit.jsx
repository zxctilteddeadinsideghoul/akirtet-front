// eslint-disable-next-line react/prop-types
export const Quit = ({ classQuit }) => {
  return (
    <div className={classQuit}>
      <div className="flex flex-col justify-center font-bold text-gray-500 text-3xl select-none">
        <button className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="34"
            color="#6b7280"
            fill="none"
          >
            <path
              d="M5 21.9999V5.99993C5 4.11431 5 3.1715 5.58579 2.58572C6.17157 1.99993 7.11438 1.99993 9 1.99993H15C16.8856 1.99993 17.8284 1.99993 18.4142 2.58572C19 3.1715 19 4.11431 19 5.99993V21.9999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 21.9999H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13L16 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>Exit</div>
        </button>
      </div>
    </div>
  );
};