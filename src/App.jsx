import React from "react";
import ProjectCardContainer from "./components/ProjectCardContainer";
import('preline')
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className=" p-4 text-black text-4xl text-center underline underline-offset-4 decoration-orange-300">
        Mini Projects
      </header>
      <main className="container ">
        <ProjectCardContainer />
      </main>
    </div>
  );
}

export default App;
