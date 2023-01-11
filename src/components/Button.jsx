import { useState } from "react";

export const Button = () => {
  const [age, setAge] = useState(0);
  return (
    <div>
      <form>
        <label> Enter Your Age:</label>
        <input
          type="number"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </form>
      <h1>Your age is {age}</h1>
    </div>
  );
};

export const Idea = () => {
  return <div>Idea</div>;
};
