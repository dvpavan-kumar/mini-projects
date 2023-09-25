import React from "react";
import ProjectCardContainer from "./components/ProjectCardContainer";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 text-white text-2xl text-center">
        Mini Project Showcase
      </header>
      <main className="container ">
        <ProjectCardContainer />
      </main>
    </div>
  );
}

export default App;
