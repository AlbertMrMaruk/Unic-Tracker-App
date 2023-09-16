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
import EditTask from "./pages/EditTask";
import { PushNotifications } from "@capacitor/push-notifications";
import { Capacitor } from "@capacitor/core";
// import Firebase from "./components/Firebase";
const isPushNotificationsAvailable =
  Capacitor.isPluginAvailable("PushNotifications");

function App() {
  function ngOnInit() {
    console.log("Initializing HomePage");

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token) => {
      alert("Push registration success, token: " + token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification) => {
        alert("Push received: " + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        alert("Push action performed: " + JSON.stringify(notification));
      }
    );
  }
  if (isPushNotificationsAvailable) {
    ngOnInit();
  }
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
        <Route path="/edit-task" element={<PrivateRoute />}>
          <Route path="/edit-task" element={<EditTask />} />
        </Route>
      </Routes>
    </Router>

    // </Firebase>
  );
}

export default App;
