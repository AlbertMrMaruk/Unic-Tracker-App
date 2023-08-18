import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import CreateCategory from "./pages/CreateCategory";
import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";
import TasksPage from "./pages/TasksPage";
import SignIn from "./pages/SignIn";
// import Firebase from "./components/Firebase";

function App() {
  return (
    // <Firebase>
    <Router>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
    // </Firebase>
  );
}

export default App;
