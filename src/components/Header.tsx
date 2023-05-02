"use client"
import { motion } from "framer-motion"
import React from "react"
import { Patrick_Hand_SC } from "next/font/google"
import { Philosopher } from "next/font/google"
type Props = {}
import Link from "next/link"
const philosopher = Philosopher({ subsets: ["cyrillic"], weight: "400" })
const patrickHandSc = Patrick_Hand_SC({ subsets: ["latin"], weight: "400" })
export default function Header({}: Props) {
  return (
    <div>
      <motion.div
        className="text-4xl text-white text-center"
        initial={{
          y: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <span className={patrickHandSc.className}>Khemraj Fekar</span>
      </motion.div>
      <div>
        <ul className="text-white flex justify-center">
          <li className="m-2 p-2 hover:bg-blend-color-burn">
            <Link className={philosopher.className} href={"/"}>
              Home
            </Link>
          </li>
          <li className="m-2 p-2">
            <Link className={philosopher.className} href={"/about"}>
              About
            </Link>
          </li>
          <li className="m-2 p-2">
            <Link className={philosopher.className} href={"/skills"}>
              Skills
            </Link>
          </li>
          <li className="m-2 p-2">
            <Link className={philosopher.className} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
