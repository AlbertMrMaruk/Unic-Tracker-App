import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import CreatePage from "./pages/CreatePage";
import CreateCategory from "./pages/CreateCategory";
import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#1b1d1f] h-max pb-10">
              <Navbar />
              <TaskList isDone={false} />
              <h2 className="text-4xl my-10 font-bold text-white text-center">
                Done Tasks
              </h2>
              <TaskList isDone={true} />
            </div>
          }
        />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
