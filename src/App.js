import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const firstName = "Aziz";
  const lastName = "Mohammed";
  const age = 25;
  const arr = [1, 2, 3, 4, 5];

  //Example for Object
  const students = {
    firstName: "James",
    lastName: "Common",
    age: 30,
  };

  //Example for Object inside array
  const siblings = [
    {
      firstName: "Abdulaziz",
      lastName: "Gamal Eldin Mohammed",
      birthYear: 1991,
    },
    {
      firstName: "Maha",
      lastName: "Moh'd Al-Kheir",
      birthYear: 1995,
    },
    {
      firstName: "Faisal",
      lastName: "Mohammed",
      birthYear: 2001,
    },
    {
      firstName: "Sarah",
      lastName: "Mohammed",
      birthYear: 2000,
    },
  ];

  //Example for useState
  const [num, setNum] = useState(1);
  const [username, setUsername] = useState("");
  return (
    <>
      <Header />
      <main>
        <h1>
          Hello {"Abdulaziz"}, {"Gamal"} <br />
          {30} <br /> {arr}
        </h1>
        <p>you're Age: {age} </p>
        <h1>
          {students.firstName} {students.lastName} {students.age}
        </h1>

        <h3>Exampler for Array</h3>
        {arr.map((num) => (
          <p> {num * 5}</p>
        ))}

        <h3>Example for Array with Object</h3>
        {siblings.map((s) => (
          <p>
            {s.firstName} {s.lastName} {s.birthYear}
          </p>
        ))}

        <br />
        <br />
        <h1>{num}</h1>
        <button onClick={() => setNum((currentNum) => currentNum + 1)}>
          Submit
        </button>
        <br />
        <h1>{username}</h1>
        <button onClick={() => setUsername((currentUsername) => "CODE")}>
          Submit
        </button>
        <br />
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
      </main>
      <Footer />
    </>
  );
}

export default App;
