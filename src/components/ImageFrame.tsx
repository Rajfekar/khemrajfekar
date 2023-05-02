import React from "react"
import Image from "next/image"
import ImageData from "@/types/types"
interface MyComponentProps {
  image: ImageData
}
const ImageFrame: React.FC<MyComponentProps> = ({ image }) => {
  return (
    <>
      <Image
        width={1000}
        height={1000}
        className="cursor-pointer m-2 p-2 w-96 h-72  border-4 border-cyan-500 hover:shadow-custom hover:w-[25rem] hover:h-[19rem]"
        src={image.url}
        alt={`img ${image.id}`}
      />
      {/* <h2>{image.title}</h2> */}
    </>
  )
}

export default ImageFrame
