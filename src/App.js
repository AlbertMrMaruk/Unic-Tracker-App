import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import CreateCategory from "./pages/CreateCategory";
import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";
import TasksPage from "./pages/TasksPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
// import Firebase from "./components/Firebase";

function App() {
  return (
    // <Firebase>
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<TasksPage />} />
        </Route>
        <Route path="/create" element={<PrivateRoute />}>
          <Route path="/create" element={<CreatePage />} />
        </Route>
        <Route path="/create-category" element={<PrivateRoute />}>
          <Route path="/create-category" element={<CreateCategory />} />
        </Route>
        <Route path="/create-project" element={<PrivateRoute />}>
          <Route path="/create-project" element={<CreateProject />} />
        </Route>
        <Route path="/create-task" element={<PrivateRoute />}>
          <Route path="/create-task" element={<CreateTask />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
    // </Firebase>
  );
}

export default App;
