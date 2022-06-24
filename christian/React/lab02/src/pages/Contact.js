import React from "react";

import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="bg-slate-700 h-screen">
      <h1 className=" flex justify-center text-3xl text-bold text-white pt-10">
        Contact me
      </h1>
      <p className="flex justify-center text-3xl text-bold text-white pt-1">
        for
      </p>
      <p className="flex justify-center text-3xl text-bold text-white pt-1">
        more information ⬇️
      </p>

      <Form />
    </div>
  );
};

export default Contact;
