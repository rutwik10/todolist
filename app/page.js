import React from "react";

const page = () => {
  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">
        Rutwik's ToDo List
      </h1>
      <form>
        <input
          type="text"
          className="text-2xl border-zinc-500 border-4 m-8 px-2 py-1"
          placeholder="Enter Task here"
        ></input>
        <input
          type="text"
          className="text-2xl border-zinc-500 border-4 m-8 px-2 py-1"
          placeholder="Enter Description"
        ></input>
      </form>
    </>
  );
};

export default page;
