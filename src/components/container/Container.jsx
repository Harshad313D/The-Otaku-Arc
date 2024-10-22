import React, { useState } from "react";

function Container({ children }) {
  // const [color, setColor] = useState();

  return (
    <div
      // style={{ backgroundColor: color }}
      className="w-full max-w-7xl mx-auto py-2 rounded-lg bg-green-500 "
    >
      {children}
      <div className="fixed flex flex-col justify-center h-screen right-5">
        {/* <div className=" flex flex-col justify-center gap-3 shadow-lg backdrop-blur-md bg-white/30 px-3 py-2 rounded-3xl ">
          <button
            onMouseOver={() => setColor("#dc2626")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "#dc2626" }}
          >
            Red
          </button>
          <button
            onMouseOver={() => setColor("#22c55e")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "#22c55e" }}
          >
            Green
          </button>
          <button
            onMouseOver={() => setColor("#1d4ed8")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "#1d4ed8" }}
          >
            Blue
          </button>
          <button
            onMouseOver={() => setColor("#fbbf24")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "#fbbf24" }}
          >
            Yellow
          </button>
          <button
            onMouseOver={() => setColor("orange")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onMouseOver={() => setColor("indigo")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
            onMouseOver={() => setColor("violet")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Container;
