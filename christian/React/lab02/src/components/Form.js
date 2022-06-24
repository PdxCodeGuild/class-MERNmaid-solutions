import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col pt-60">
      <input className="mb-2" type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="Email" />

      <button className="text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border border-black rounded mt-3">
        Contact Me 😎
      </button>
    </form>
  );
};

export default Form;
