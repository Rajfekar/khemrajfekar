"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import ImageFrame from "./ImageFrame"
import ImageData from "@/types/types"
type Props = {}

const ImageGallery = (props: Props) => {
  var Raj: any = useRef(null)
  var disha: number = 1
  var gati: number = 1

  const images: ImageData[] = [
    {
      id: 1,
      title: "Annual Function Pictures",
      url: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Annual Function Pictures",
      url: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Annual Function Pictures",
      url: "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Annual Function Pictures",
      url: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Annual Function Pictures",
      url: "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      title: "Annual Function Pictures",
      url: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      title: "Annual Function Pictures",
      url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  const scrollImage = () => {
    if (disha == 1) {
      Raj.current.scrollLeft += gati
      const seema =
        Raj.current.scrollLeft >=
        Raj.current.scrollWidth - Raj.current.clientWidth
      if (seema) {
        disha = -1
      }
    } else {
      Raj.current.scrollLeft -= gati
      const Rekha = Raj.current.scrollLeft <= 0
      if (Rekha) {
        disha = 1
      }
    }
  }

  const whenClick = () => {
    gati == 1 ? (gati = 0) : (gati = 1)
  }
  const whenMouseEnter = () => {
    Raj.current.removeEventListener("scroll", scrollImage)
  }
  const whenMouseLeave = () => {
    let event = new Event("scroll")
    Raj.current.addEventListener("scroll", scrollImage)
    Raj.current.dispatchEvent(event)
  }
  useEffect(() => {
    let event = new Event("scroll")
    Raj.current.dispatchEvent(event)
  }, [])

  return (
    <div>
      <div className="h-screen w-screen">
        <div className="slider-container w-screen h-[50rem]">
          <div
            onMouseEnter={whenMouseEnter}
            onMouseLeave={whenMouseLeave}
            onClick={whenClick}
            onScroll={scrollImage}
            ref={Raj}
            className="flex overflow-y-scroll m-1 scrollbar-hide mt-12"
          >
            {images.map((image: ImageData, i: number) => (
              <ImageFrame key={i} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
