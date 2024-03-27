import { Float, useGLTF } from "@react-three/drei";

export function Name3D(props) {
  const { nodes, materials } = useGLTF("/3D/name.glb");
  return (
    <group {...props} dispose={null}>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text001.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text002.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text003.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.2}>
        <mesh
          geometry={nodes.Text004.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text005.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text006.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text007.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text008.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text009.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text010.geometry}
          material={materials["Material.002"]}
        />
      </Float>
      <Float floatIntensity={0.1} speed={0.4}>
        <mesh
          geometry={nodes.Text011.geometry}
          material={materials["Material.002"]}
        />
      </Float>
    </group>
  );
}

useGLTF.preload("/3D/name.glb");
