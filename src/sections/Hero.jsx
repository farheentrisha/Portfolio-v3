import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import useInView from "../hooks/useInView";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { useLiteMode } from "../context/LiteModeContext";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [canvasReady, setCanvasReady] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { rootMargin: "200px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const { liteMode } = useLiteMode();
  const enableEffects = inView && !prefersReducedMotion && !liteMode;
  const allow3D = enableEffects && !isMobile;

  // Defer canvas rendering slightly to prioritize text content
  useEffect(() => {
    const timer = setTimeout(() => setCanvasReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground enabled={enableEffects} />
      {canvasReady && allow3D && (
        <figure
          className="absolute inset-0"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas
            camera={{ position: [0, 1, 3] }}
            dpr={[1, 1.5]}
            gl={{ powerPreference: "high-performance", antialias: false }}
          >
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={isMobile && 0.23}
                  position={isMobile && [0, -1.5, 0]}
                />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </figure>
      )}
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
