import React, { useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import "./Childpaino.css";

export const Childpaino = () => {
  const handlePlay = (bit) => {
    const audio = new Audio(`Mp3/${bit}.mp3`);
    audio.play();
  };

  const keyDownCallBack = useCallback((e) => {
    if (e.key === "a" && handlePlay("A"));
    if (e.key === "s" && handlePlay("B"));
    if (e.key === "d" && handlePlay("C"));
    if (e.key === "f" && handlePlay("D"));
    if (e.key === "j" && handlePlay("E"));
    if (e.key === "k" && handlePlay("F"));
    if (e.key === "l" && handlePlay("G"));
    if (e.key === "A" && handlePlay("Ab"));
    if (e.key === "S" && handlePlay("Bb"));
    if (e.key === "D" && handlePlay("C"));
    if (e.key === "F" && handlePlay("Db"));
    if (e.key === "J" && handlePlay("Eb"));
    if (e.key === "K" && handlePlay("F"));
    if (e.key === "L" && handlePlay("Gb"));
  });

  useEffect(() => {
    document.addEventListener("keydown", keyDownCallBack);
    return () => {
      document.removeEventListener("keydown", keyDownCallBack);
    };
  }, [keyDownCallBack]);

  return (
    <div className="sound">
      <Button id="A" className="sa" onClick={() => handlePlay("A")}>
        Sa
      </Button>
      <Button className="sa" onClick={() => handlePlay("B")}>
        Re
      </Button>
      <Button className="sa" onClick={() => handlePlay("C")}>
        Ga
      </Button>
      <Button className="sa" onClick={() => handlePlay("D")}>
        Ma
      </Button>
      <Button className="sa" onClick={() => handlePlay("E")}>
        Pa
      </Button>
      <Button className="sa" onClick={() => handlePlay("F")}>
        Dha
      </Button>
      <Button className="sa" onClick={() => handlePlay("G")}>
        Ni
      </Button>
    </div>
  );
};
