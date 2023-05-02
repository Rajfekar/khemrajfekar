import Image from "next/image"
import { Inter } from "next/font/google"
import ParticleBackground from "@/components/ParticlesBackground"
import Hero from "@/components/Hero"
import ImageGallery from "@/components/ImageGallery"
import TypeWriter from "@/components/TypeWriter"
const inter = Inter({ subsets: ["latin"] })
export default function Home() {
  return (
    <main>
      <div>
        <div>Hello World! ,I am Khemraj Fekar </div>
        <div>
          <TypeWriter />
        </div>
      </div>
    </main>
  )
}
