import { motion } from "framer-motion-3d";
import { Name3D } from "./Name3D";
import { Environment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

function InitialPage(props) {
  const { section } = props;
  function Rig() {
    const { camera } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
      camera.position.lerp(vec.set(0, 400, 0), 1);
      camera.lookAt(0, 0, 0);
    });
  }
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[0, -1500, 0]}
        scale={[100, 100, 100]}
        animate={{
          x: section === 0 ? 0 : 2,
          y: section === 0 ? 0 : 8,
          z: section === 0 ? 0 : -5,
        }}
      >
        <Name3D />
        <Rig />
      </motion.group>
      <Environment files={"./3D/cayley_interior_4k.hdr"} />
    </>
  );
}

export default InitialPage;
