"use client";

import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import InitialPage from "./components/InitialPage";
import { useEffect, useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";
import axios from "axios";

export default function Home() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 50,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 400, 0], fov: 50 }}
          style={{ width: "100vw", height: "100vh" }}
        >
          <color attach="background" args={["#1e293b"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <InitialPage section={section} />
            </Scroll>
            <Scroll html>
              <Interface setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
    </>
  );
}
