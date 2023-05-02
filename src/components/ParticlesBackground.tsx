"use client"
import { useCallback } from "react"
import { loadFull } from "tsparticles"
import ParticlesConfig from "../../config/particles-config"
import Particles from "react-particles"
import { Engine } from "tsparticles-engine"
// import {
//   basic,
//   parallax,
//   backgroundMask,
//   absorbers,
//   amongUs,
//   blackHole,
//   dataImages,
//   grabRandomColor,
//   zIndex,
//   big,
//   colorAnimation,
//   emitterAbsorber,
//   gradients,
//   chars,
//   clickConfetti,
//   destroy,
//   cards,
//   customShape,
//   collisionsBounce,
//   fireworks,
// } from "tsparticles-demo-configs"
import particlesConfig from "../../config/particles-config"
const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async (container: any) => {}, [])

  return (
    <div className="particles-background">
      <Particles
        id={"tsparticles"}
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        height="100vh"
        width="100vw"
      />
    </div>
  )
}
export default ParticleBackground
