import { useState } from "react";
import "./styles.css";
import { User } from "./interface";
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = () => {
    setUser({
      name: "Nick Bunny",
      age: 345,
      country: "US",
      address: {
        street: "the third builer street",
        number: 35,
        zip: "xyz"
      },
      admin: true
    });
  };
  return (
    <div className="App">
      <button onClick={fetchUser}>Welcome User </button>
      {user && <div>Welcome {user.name}</div>}
    </div>
  );
}
