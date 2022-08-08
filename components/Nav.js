import requests from "../utils/requests";
import { useRouter } from "next/router";
import { useState } from "react";

function Nav() {
  const router = useRouter();
  const [currentNav, setCurrentNav] = useState("");
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => {
              router.push(`/?genre=${key}`);
              setCurrentNav(title);
            }}
            className={`last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-whtie active:text-red-500 ${currentNav === title?"scale-125 text-red-500":""}`}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#5d045d] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
