import { useState } from "react";
import { data } from "../data";
import "./pages.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [users, setUsers] = useState(data);
  const [visible, setVisible] = useState(false);
  const Input = [];

  // Functions      //

  function random_bg_color() {
    var x = Math.floor(Math.random(50) * 256);
    var y = Math.floor(Math.random(100) * 256);
    var z = Math.floor(Math.random(150) * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    return bgColor;
  }

  function resize() {
    if (window.innerWidth < 900) {
      return 100;
    }
    if (window.innerWidth < 1300) {
      return 200;
    }
    if (window.innerWidth > 1300) {
      return 300;
    }
  }

  function repos() {
    if (window.innerWidth < 900) {
      return "top";
    }
    if (window.innerWidth > 900) {
      return "left";
    }
  }

  window.onresize = function () {
    
    return setTimeout(handleToggle, 10);
  };

  function setUp() {
    if (!visible) {
      return;
    } else if (visible) {
      const data = {
        labels: users.map((user) => user.name),

        datasets: [
          {
            data: users.map((user) => user.amount),
            backgroundColor: users.map((user) => random_bg_color(user)),
            cutout: 100,
            radius: resize(),
          },
        ],
      };
      const options = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            position: repos(),
            labels: {
              color: random_bg_color(),
              boxHeight: 30,
              boxWidth: 30,
              font: {
                size: 30,
                weight: "bold",
              },
            },
          },
          title: {
            display: true,
          },
        },
      };

      return (
        <div className="pt-40">
        <div
          style={{ position: "relative", height: "600px" }}
          className="inset-x-20"
          key={users.map((user) => user.id)}
        >
          <Doughnut data={data} options={options}></Doughnut>
        </div>
        </div>
      );
    }
  }
  // ---------------------------------------------------------------------------------- //
  //   Reset & Remove     //
  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  const reset = () => {
    window.location.reload();
  };

  // ---------------------------------------------------------------------------------- //

  //   handles  //

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name);
    // if no value, do nothing
    if (!name) return;
    // if value, setup new user and add to current users
    const fakeId = Date.now();
    console.log(fakeId);

    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name, amount };

    const updatedUsers = [...users, newUser];
    Input.push(newUser);
    setUsers(updatedUsers);
    // set back to empty
    setName("");
    setAmount("");
  };

  const handleToggle = () => {
    setVisible((current) => !current);
  };
  // ---------------------------------------------------------------------------------- //

  return (
    <div className="p-20 mt-[-80px]">
      <form className="form w-fit" onSubmit={handleSubmit}>
        <h4 className="font-['Segoe_UI'] font-bold text-4xl md:text-5xl text-center border-b border-[#000300] text-white">
          Add Item
        </h4>
        <div className="form-row">
          <label
            htmlFor="name"
            className="form-label font-['Segoe_UI'] font-bold text-[30px] text-white"
          >
            Name
          </label>
          <input
            type="text"
            className="form-input font-bold"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
          <label
            htmlFor="amount"
            className="form-label font-['Segoe_UI'] font-bold pt-2 text-[30px] text-white"
          >
            Amount
          </label>
          <input
            type="number"
            className="form-input font-bold"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
          />
        </div>

        <button
          type="submit"
          className="btn btn-block font-['Segoe_UI'] p-2 rounded-lg text-xl font-bold text-white"
        >
          Submit
        </button>
      </form>

      <button
        type="click"
        className="btn btn-block font-['Segoe_UI'] p-2 rounded-lg text-xl font-bold text-white"
        onClick={handleToggle}
      >
        Create Pie Chart
      </button>

      {/* render users */}

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#ab0c26",
            height: "3px",
          }}
        />

        <p
          style={{
            margin: "0 10px",
            fontFamily: "serif",
            fontSize: "1.5rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Time To Budget!
        </p>

        <div
          style={{
            flex: 1,
            backgroundColor: "#ab0c26",
            height: "3px",
          }}
        />
      </div>

      <button
        type="click"
        className="btn text-[#000300]] font-bold text-lg hover:bg-orange-400 py-2 px-8 mt-3 rounded-lg text-white"
        onClick={reset}
      >
        Clear All
      </button>

      {users.map((user) => {
        return (
          <div className="flex items-center justify-center" key={user.id}>
            <h4 className="text-center font-serif font-bold p-2 text-[#ab0c26]">
              {user.name}:
            </h4>
            <h2 className="text-center font-serif font-bold p-2 pr-5 text-[#ab0c26]">
              ${user.amount}
            </h2>
            <button
              onClick={() => removeUser(user.id)}
              className="remove items-center text-center rounded-lg p-1 px-8"
            >
              remove
            </button>
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(255, 133, 72, 1)",
                height: "3px",
              }}
            />
          </div>
        );
      })}

      <div>{setUp()}</div>
    </div>
  );
};
export default UserChallenge;
