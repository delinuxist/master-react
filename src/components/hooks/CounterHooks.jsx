import React, { useState } from "react";

const CounterHooks = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      </div>
      <div>
        <form>
          <div style={{ paddingTop: 20 }}>
            <input
              type="text"
              placeholder="firstName"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
          </div>
          <div style={{ paddingTop: 20 }}>
            <input
              type="text"
              placeholder="lastName"
              value={name.lastName}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
          </div>
          <h1>{`FirstName: ${name.firstName}`}</h1>
          <h1>{`LastName: ${name.lastName}`}</h1>
        </form>
      </div>
    </div>
  );
};

export default CounterHooks;
