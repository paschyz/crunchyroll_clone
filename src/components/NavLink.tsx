// NavBar.js
import { NavLink } from "react-router-dom";
import "./NavLink.css";
const NavBar = () => {
  return (
    <div className=" bg-[#23252b] text-[#dadada] text-[16px] font-[400]">
      <div className="flex items-center justify-center space-x-[560px] h-[60px] ml-12">
        <div className=" h-full flex items-center ">
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            {" "}
            <svg width="140" height="100" xmlns="http://www.w3.org/2000/svg">
              <image
                xlinkHref="https://upload.wikimedia.org/wikipedia/commons/d/d6/Crunchyroll.svg"
                width="140"
                height="100"
              />
            </svg>
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            Browse
            <svg
              className="pl-1 h-6"
              xmlns="http://www.w3.org/1100/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m12 15l-5-5h10l-5 5Z" />
            </svg>
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            Manga
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            Games
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            Store
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            News
            <svg
              className="pl-1 h-6"
              xmlns="http://www.w3.org/1100/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m12 15l-5-5h10l-5 5Z" />
            </svg>
          </NavLink>
        </div>
        <div className="flex h-full items-center ">
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519]  ml-[50px]"
            }
            to="/"
          >
            <svg
              className="pr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                fill="#FAB818"
                d="m247.37 89.15l-37 113.33a8 8 0 0 1-11.71 4.39c-.23-.14-25.8-14.87-70.68-14.87s-70.45 14.73-70.7 14.88a8 8 0 0 1-11.68-4.4L8.62 89.12a12.11 12.11 0 0 1 16.9-14.62l50.19 25l41.92-69.66a12.11 12.11 0 0 1 20.74 0l41.92 69.66l50.21-25a12.1 12.1 0 0 1 16.87 14.66Z"
              />
            </svg>
            <div className="flex flex-col font-semibold text-[0.625rem]">
              <span className="text-[#FAB818]">GO</span>
              <span>PREMIUM</span>
            </div>
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#dadada"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                />
              </svg>
            </span>
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#dadada"
                d="M19 3H5v18l7-3l7 3V3zm-2 15l-5-2.18L7 18V5h10v13z"
              />
            </svg>
          </NavLink>
          <NavLink
            className={
              "px-4 h-full flex items-center hover:bg-[#141519] brightness-110"
            }
            to="/"
          >
            <img
              className="h-9 rounded-full"
              src="https://static.crunchyroll.com/assets/avatar/170x170/chainsawman-kobeni.png"
              alt="avatar"
            />
            <svg
              className="pl-1 h-6"
              xmlns="http://www.w3.org/1100/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m12 15l-5-5h10l-5 5Z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
