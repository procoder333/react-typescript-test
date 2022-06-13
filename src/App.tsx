import { useState } from "react";
import "./styles.css";
import { User } from "./interface";
import DataGrid from "./components/DataGrid";
export default function App() {
  const users = [
    { id: 1, name: "John", age: 23 },
    { id: 2, name: "Alex", age: 23 },
    { id: 3, name: "Michael", age: 34 },
    { id: 4, name: "Danny", age: 23 }
  ];
  const orders = [
    { id: 1, quantity: 4, amount: 345 },
    { id: 2, quantity: 3, amount: 23 },
    { id: 3, quantity: 5, amount: 545 }
  ];
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
      <DataGrid items={users} />
      <DataGrid items={orders} />
    </div>
  );
}
