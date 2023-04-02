import React, { useState, useEffect } from "react";

const Typewriter = ({ messages }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === messages[index].length) {
      setTimeout(() => {
        if (index === messages.length - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
        setSubIndex(0);
      }, 2000);
    } else {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, messages]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h2>{`${messages[index].substring(0, subIndex)}${blink ? "|" : " "}`}</h2>
    </>
  );
};

export default Typewriter;
