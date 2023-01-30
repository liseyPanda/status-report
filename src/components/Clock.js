import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
  }, []);

  return <div>{clock}</div>;
};

export default Clock;
