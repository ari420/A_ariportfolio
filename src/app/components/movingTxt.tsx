"use client";
import React, { useEffect, useState } from "react";

const phrases = [
  "I love coding.",
  "I code cool websites.",
  "I develop websites.",
];

export default function MovingTxt() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentPhrase.slice(0, charIndex - 1)
        : currentPhrase.slice(0, charIndex + 1);

      setText(updatedText);
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="text-[30px] md:text-[40px] text-black dark:text-white font-cormorant2">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-black dark:bg-white  ml-1 animate-pulse"></span>
    </div>
  );
}
