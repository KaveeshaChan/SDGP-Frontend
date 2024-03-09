import React, { useState, useEffect } from "react";

export default function AppPage() {
  const [members, setMembers] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:5000/main")
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMembers(data);
      });
  }, []);

  return (
    <>
      <div className="font-abc">
        <div className=" w-4/5 min-w-min bg-gray-800 rounded-xl min-h-52 mt-4 ml-40">
          <h2 className="text-2xl font-bold text-left leading-9 text-white pl-14 pt-10">
            Guidelines for Users
          </h2>
          <p className="text-left leading-9 text-white pl-14 pt-4 text-base">
            Some descriptive text explaining this guideline.
          </p>
          {/* ... more guidelines */}
        </div>
        <div className="flex w-4/5 mt-5 ml-40">
          <section className="w-2/5 justify-between bg-gray-800 -mr-0.5 rounded-xl min-h-3">
            <h2 className=" font-bold text-2xl text-center leading-9 text-white pl-5 pt-4">
              Drop your image here
            </h2>
            <h2 className="font-bold text-2xl text-center leading-9 text-white pl-5 pt-4">
              {" "}
              -or-{" "}
            </h2>
            <h2 className="font-bold text-2xl text-center leading-9 text-white pl-5 pt-4">
              Click to Upload
            </h2>
          </section>
          <section className="w-3/5 justify-between ">
            <section className=" mb-2.5 text-black">
              <h2 className="text-white ml-80">Select brand</h2>
              <select
                name="brand"
                className="w-32 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 ml-80 mt-2"
              >
                <option value="Toyota">Toyota</option>
                <option value="Toyota1">Toyota1</option>
                <option value="Toyota2">Toyota2</option>
              </select>
              <h2 className="text-white ml-80 mt-4">Select type</h2>
              <select
                name="type"
                className="w-32 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 ml-80 mt-2"
              >
                <option value="Car">Car</option>
                <option value="Car1">Car1</option>
                <option value="Car2">Car2</option>
              </select>
            </section>
            <a href="/estmatedCost">
              <button className="w-32 p-2.5 border-white rounded-3xl text-xl bg-gray-500 ml-80 mt-4">
                Proceed
              </button>
            </a>
          </section>
        </div>
      </div>
      <div>
        {typeof members === "undefined" ? (
          <p>Loading...</p>
        ) : (
          <p className="text-white">{JSON.stringify(members)}</p>
        )}
      </div>
    </>
  );
}
