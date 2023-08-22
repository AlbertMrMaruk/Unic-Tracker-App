import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
    console.log(auth.currentUser);
  }, []);

  return user ? <h1>{user.name}</h1> : "Not Logged in";
}

export default Profile;
