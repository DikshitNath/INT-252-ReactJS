import React from "react";

const Student = ({ name, age, email, hobbies }) => {
  return (
    <div className="w-[15%] h-[30%] rounded-lg bg-zinc-300 opacity-80 shadow-lg flex flex-col justify-center items-start p-4">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="text-xl">{age}</p>
      <p className="text-xl">{email}</p>
      <ul className="mt-2 list-disc list-inside">
        {hobbies.map((hobby, idx) => (
          <li key={idx} className="text-lg">{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
