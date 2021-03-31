import * as React from "react";
import { useEffect, useLayoutEffect, useState } from "react";

export default function FunctionsssComponent() {
  const [A, setA] = useState(true);
  useEffect(() => {
    console.log("useEffectMount");
    return () => {
      console.trace();
    };
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffectMount");
    return () => {
      //console.trace();
    };
  }, []);
  console.log(11);
  return (
    <div
      onClick={() => {
        setA(!A);
      }}
    >
      {A
        ? [
            <div key={0}>0</div>,
            <div key={1}>1</div>,
            <div key={2}>2</div>,
            <div key={3}>3</div>,
            <div key={4}>4</div>,
          ]
        : [
            <div key={4}>4</div>,
            <div key={2}>2</div>,
            <div key={3}>3</div>,
            <div key={1}>1</div>,
            <div key={5}>5</div>,
          ]}
    </div>
  );
}
