import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import ProjectCardContainer from "./components/ProjectCardContainer";
import("preline");
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className=" p-4 text-black text-4xl text-center underline underline-offset-4 decoration-orange-300">
        Mini Projects
      </header>
      <p className="uppercase rounded text-sm tracking-widest text-black-100 bg-gradient-to-r from-[#F76806] to-[#F4AB6A] m-auto border-2 border-l-stone-300 hover:text-white w-fit p-2">
        <a
          href="https://dvpavan-kumar.vercel.app/"
          className="flex items-center justify-center"
        >
          <span className="mr-1">
            <GiReturnArrow />
          </span>
          return to Home
        </a>
      </p>
      <main className="container ">
        <ProjectCardContainer />
      </main>
    </div>
  );
}

export default App;
