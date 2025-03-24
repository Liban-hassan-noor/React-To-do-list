import React from "react";
//import { Button } from "./components/button";
import { TaskList } from "./components/taskList";

const App = () => {
  return (
    <main className="h-screen flex items-center justify-center  ">
      <div className="p-20 bg-gray-100 rounded-lg shadow-lg space-y-5 max-w-md w-full ">
        <h1 className="text-3xl font-bold text-center">Task Master</h1>
        <TaskList />
      </div>
    </main>
  );
};

export default App;
