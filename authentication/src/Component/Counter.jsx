import React, { useState, useMemo } from "react";

const Counter = () => {
  let [age, setAge] = useState(0);
  let [salary, setSalary] = useState(5000);
  const handleAge = () => {
    setAge(age + 1);
  };
  const handleSalary = () => {
    setSalary(salary + 1000);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++; //delay every time the state updates the component rerenders so,we need to tell to react not to re-render it unnessacary to long time to compute  "usememo hook comes to picture "
    // it has to paramaters 1)callbackFunction 2)dependency
    return age % 2 === 0;
  }, [age]);

  return (
    <>
      <h1>useMemo</h1>
      <h3>{age}</h3>
      <h2>{isEven ? "even" : "odd"}</h2>
      <button onClick={handleAge}>age</button>
      <h3>{salary}</h3>
      <button onClick={handleSalary}>salary</button>
    </>
  );
};

export default Counter;
