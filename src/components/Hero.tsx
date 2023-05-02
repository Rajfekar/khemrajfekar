"use client"
import { motion } from "framer-motion"
import React from "react"
type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
      <motion.div
        className="text-3xl text-yellow-300"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 500,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        Hello We are hiring...
      </motion.div>
    </div>
  )
}

export default Hero
