import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import CreatePage from "./pages/CreatePage";
import CreateCategory from "./pages/CreateCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#1b1d1f] h-screen">
              <Navbar />
              <TaskList />
            </div>
          }
        />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
