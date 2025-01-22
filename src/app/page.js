"use client";

import { Scroll, ScrollControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import InitialPage from "./components/InitialPage";
import { useEffect, useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";

const Loading = () => {
  const { progress } = useProgress();
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col bg-gray-900 z-50">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_3s_linear_infinite] text-neutral-50"
        role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)">Loading...</span>
      </div>
      <div className="text-white text-2xl mt-8 ml-8 mr-8">저의 포트폴리오 웹사이트에 오신 걸 환영합니다!</div>
      <div className="text-white text-lg mt-2">{progress}%</div>
    </div>
  );
};

export default function Home() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    setTimeout(handleLoad, 10000);

    return () => clearTimeout(handleLoad);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
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
          onCreated={() => setIsLoading(false)}
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
