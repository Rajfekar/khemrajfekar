"use client"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
type Props = {}
const TypeWriter = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Software Engineer",
      "Guy-who-love-Reading.tsx",
      "<ButLovesToCodeMore/>",
    ],
    // deleteSpeed: 50,
    loop: true,
    delaySpeed: 2500,
  })
  return (
    <div className="text-center">
      <h1>
        <span className="text-xl lg:text-4xl font-semibold text-cyan-400">
          Hello World! I am <br />{" "}
          <span className="text-white text-5xl">Khemraj Fekar</span> <br />I am{" "}
          {text}
          <Cursor cursorColor="yellow" />
        </span>
      </h1>
    </div>
  )
}

export default TypeWriter
