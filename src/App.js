import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, useGLTF } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Sketchfab: https://sketchfab.com/3d-models/brazillian-boot-vento-tita-6e95243a64a545aab3af43173f6b3e04
Author: https://sketchfab.com/Akaize
*/

useGLTF.preload('/high_perf_drone.glb')
const CameraController = () => {
  const { camera, gl } = useThree()
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)
    controls.minDistance = 1
    controls.maxDistance = 10
    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  return null
}

function Shoe({ ...props }) {
 /* const ref = useRef()
  const { nodes, materials } = useGLTF('/high_perf_drone.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    ref.current.position.y = (1 + Math.sin(t / 2)) / 10
  })
  return (
    <group {...props} dispose={null}>
      <group ref={ref}>
        <group position={[-0.16, 0, -0.22]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh castShadow geometry={nodes.Object_115.geometry} material={materials['Material.002']} />
          <mesh castShadow receiveShadow geometry={nodes.Object_119.geometry} material={materials['Material.001']} />
        </group>
      </group>
    </group>*/
    const group = useRef()
  const { nodes, materials } = useGLTF('/drone_compressed.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    group.current.position.y = (1 + Math.sin(t / 2)) / 20
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.12, -0.14]} rotation={[-0.28, 0, 0.4]} scale={3.53}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
              <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
              <mesh geometry={nodes.Object_7.geometry} material={nodes.Object_7.material} />
              <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
              <mesh geometry={nodes.Object_9.geometry} material={nodes.Object_9.material} />
              <mesh geometry={nodes.Object_10.geometry} material={materials['Material.009']} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_12.geometry} material={materials.Material} />
            </group>
            <group position={[0, -0.01, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
            </group>
            <group rotation={[0.42, 0.02, 0.08]} scale={0.28}>
              <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
              <mesh geometry={nodes.Object_17.geometry} material={nodes.Object_17.material} />
              <mesh geometry={nodes.Object_18.geometry} material={nodes.Object_18.material} />
              <mesh geometry={nodes.Object_19.geometry} material={nodes.Object_19.material} />
              <mesh geometry={nodes.Object_20.geometry} material={nodes.Object_20.material} />
            </group>
            <group rotation={[0.5, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
              <mesh geometry={nodes.Object_23.geometry} material={nodes.Object_23.material} />
              <mesh geometry={nodes.Object_24.geometry} material={nodes.Object_24.material} />
            </group>
            <group rotation={[0.45, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_26.geometry} material={nodes.Object_26.material} />
              <mesh geometry={nodes.Object_27.geometry} material={nodes.Object_27.material} />
              <mesh geometry={nodes.Object_28.geometry} material={nodes.Object_28.material} />
            </group>
            <group rotation={[0.62, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
              <mesh geometry={nodes.Object_31.geometry} material={nodes.Object_31.material} />
              <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
              <mesh geometry={nodes.Object_33.geometry} material={nodes.Object_33.material} />
              <mesh geometry={nodes.Object_34.geometry} material={nodes.Object_34.material} />
              <mesh geometry={nodes.Object_35.geometry} material={nodes.Object_35.material} />
              <mesh geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} />
              <mesh geometry={nodes.Object_37.geometry} material={nodes.Object_37.material} />
              <mesh geometry={nodes.Object_38.geometry} material={materials['Material.013']} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
              <mesh geometry={nodes.Object_41.geometry} material={nodes.Object_41.material} />
              <mesh geometry={nodes.Object_42.geometry} material={nodes.Object_42.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_44.geometry} material={nodes.Object_44.material} />
              <mesh geometry={nodes.Object_45.geometry} material={nodes.Object_45.material} />
              <mesh geometry={nodes.Object_46.geometry} material={nodes.Object_46.material} />
              <mesh geometry={nodes.Object_47.geometry} material={nodes.Object_47.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_49.geometry} material={nodes.Object_49.material} />
              <mesh geometry={nodes.Object_50.geometry} material={nodes.Object_50.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_52.geometry} material={materials['Material.006']} />
            </group>
            <group rotation={[1.12, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_54.geometry} material={materials['Material.014']} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_56.geometry} material={nodes.Object_56.material} />
              <mesh geometry={nodes.Object_57.geometry} material={nodes.Object_57.material} />
              <mesh geometry={nodes.Object_58.geometry} material={nodes.Object_58.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_60.geometry} material={nodes.Object_60.material} />
              <mesh geometry={nodes.Object_61.geometry} material={nodes.Object_61.material} />
              <mesh geometry={nodes.Object_62.geometry} material={nodes.Object_62.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_64.geometry} material={nodes.Object_64.material} />
              <mesh geometry={nodes.Object_65.geometry} material={nodes.Object_65.material} />
              <mesh geometry={nodes.Object_66.geometry} material={nodes.Object_66.material} />
            </group>
            <group rotation={[0.64, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_68.geometry} material={nodes.Object_68.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_70.geometry} material={materials.Mettal_L1} />
              <mesh geometry={nodes.Object_71.geometry} material={nodes.Object_71.material} />
              <mesh geometry={nodes.Object_72.geometry} material={nodes.Object_72.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_74.geometry} material={nodes.Object_74.material} />
              <mesh geometry={nodes.Object_75.geometry} material={nodes.Object_75.material} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.32, 0.28, 0.28]}>
              <mesh geometry={nodes.Object_77.geometry} material={nodes.Object_77.material} />
              <mesh geometry={nodes.Object_78.geometry} material={nodes.Object_78.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_80.geometry} material={nodes.Object_80.material} />
              <mesh geometry={nodes.Object_81.geometry} material={nodes.Object_81.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_83.geometry} material={nodes.Object_83.material} />
              <mesh geometry={nodes.Object_84.geometry} material={nodes.Object_84.material} />
              <mesh geometry={nodes.Object_85.geometry} material={nodes.Object_85.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_87.geometry} material={materials.Green_L1} />
              <mesh geometry={nodes.Object_88.geometry} material={materials.Green_L2E} />
            </group>
            <group rotation={[1.12, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_90.geometry} material={nodes.Object_90.material} />
              <mesh geometry={nodes.Object_91.geometry} material={nodes.Object_91.material} />
              <mesh geometry={nodes.Object_92.geometry} material={nodes.Object_92.material} />
            </group>
            <group rotation={[0.64, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_94.geometry} material={nodes.Object_94.material} />
              <mesh geometry={nodes.Object_95.geometry} material={nodes.Object_95.material} />
              <mesh geometry={nodes.Object_96.geometry} material={nodes.Object_96.material} />
              <mesh geometry={nodes.Object_97.geometry} material={nodes.Object_97.material} />
              <mesh geometry={nodes.Object_98.geometry} material={nodes.Object_98.material} />
              <mesh geometry={nodes.Object_99.geometry} material={nodes.Object_99.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_101.geometry} material={materials.Red_L1} />
              <mesh geometry={nodes.Object_102.geometry} material={nodes.Object_102.material} />
              <mesh geometry={nodes.Object_103.geometry} material={materials.Red_D1} />
              <mesh geometry={nodes.Object_104.geometry} material={nodes.Object_104.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_106.geometry} material={materials['Material.016']} />
            </group>
            <group rotation={[0, 0, -Math.PI / 2]} scale={0.27}>
              <mesh geometry={nodes.Object_108.geometry} material={nodes.Object_108.material} />
              <mesh geometry={nodes.Object_109.geometry} material={nodes.Object_109.material} />
              <mesh geometry={nodes.Object_110.geometry} material={nodes.Object_110.material} />
              <mesh geometry={nodes.Object_111.geometry} material={nodes.Object_111.material} />
            </group>
            <group rotation={[0, 0, -Math.PI / 2]} scale={0.28}>
              <mesh geometry={nodes.Object_113.geometry} material={nodes.Object_113.material} />
              <mesh geometry={nodes.Object_114.geometry} material={nodes.Object_114.material} />
              <mesh geometry={nodes.Object_115.geometry} material={nodes.Object_115.material} />
            </group>
            <group rotation={[0, 0, -Math.PI / 2]} scale={0.27}>
              <mesh geometry={nodes.Object_117.geometry} material={nodes.Object_117.material} />
            </group>
            <group rotation={[0, 0, -Math.PI / 2]} scale={0.27}>
              <mesh geometry={nodes.Object_119.geometry} material={nodes.Object_119.material} />
              <mesh geometry={nodes.Object_120.geometry} material={nodes.Object_120.material} />
              <mesh geometry={nodes.Object_121.geometry} material={nodes.Object_121.material} />
              <mesh geometry={nodes.Object_122.geometry} material={nodes.Object_122.material} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_124.geometry} material={materials['Material.008']} />
            </group>
            <group rotation={[-0.77, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_126.geometry} material={nodes.Object_126.material} />
              <mesh geometry={nodes.Object_127.geometry} material={nodes.Object_127.material} />
              <mesh geometry={nodes.Object_128.geometry} material={nodes.Object_128.material} />
              <mesh geometry={nodes.Object_129.geometry} material={nodes.Object_129.material} />
              <mesh geometry={nodes.Object_130.geometry} material={nodes.Object_130.material} />
              <mesh geometry={nodes.Object_131.geometry} material={nodes.Object_131.material} />
              <mesh geometry={nodes.Object_132.geometry} material={nodes.Object_132.material} />
              <mesh geometry={nodes.Object_133.geometry} material={materials.Yellow_L1} />
            </group>
            <group rotation={[-1.33, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_135.geometry} material={materials['Material.011']} />
              <mesh geometry={nodes.Object_136.geometry} material={materials['Material.012']} />
            </group>
            <group rotation={[0.27, 1.04, -2.02]} scale={0.28}>
              <mesh geometry={nodes.Object_138.geometry} material={nodes.Object_138.material} />
            </group>
            <group rotation={[-2.5, 1.21, 0.61]} scale={0.28}>
              <mesh geometry={nodes.Object_140.geometry} material={nodes.Object_140.material} />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.28, 0.31, 0.28]}>
              <mesh geometry={nodes.Object_142.geometry} material={nodes.Object_142.material} />
              <mesh geometry={nodes.Object_143.geometry} material={nodes.Object_143.material} />
              <mesh geometry={nodes.Object_144.geometry} material={nodes.Object_144.material} />
            </group>
            <group rotation={[-2.59, 0, -Math.PI]} scale={0.28}>
              <mesh geometry={nodes.Object_146.geometry} material={nodes.Object_146.material} />
              <mesh geometry={nodes.Object_147.geometry} material={nodes.Object_147.material} />
              <mesh geometry={nodes.Object_148.geometry} material={nodes.Object_148.material} />
            </group>
            <group scale={0.28}>
              <mesh geometry={nodes.Object_150.geometry} material={nodes.Object_150.material} />
              <mesh geometry={nodes.Object_151.geometry} material={nodes.Object_151.material} />
            </group>
            <group scale={[0.27, 0.28, 0.28]}>
              <mesh geometry={nodes.Object_153.geometry} material={nodes.Object_153.material} />
            </group>
            <group rotation={[0, -Math.PI / 2, 0]} scale={0}>
              <mesh geometry={nodes.Object_155.geometry} material={nodes.Object_155.material} />
              <mesh geometry={nodes.Object_156.geometry} material={nodes.Object_156.material} />
            </group>
            <group rotation={[0, -Math.PI / 2, 0]} scale={0}>
              <mesh geometry={nodes.Object_158.geometry} material={materials['Rubber_Tire.002']} />
            </group>
            <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
              <mesh geometry={nodes.Object_160.geometry} material={nodes.Object_160.material} />
            </group>
            <group position={[0.02, 0.44, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_162.geometry} material={nodes.Object_162.material} />
              <mesh geometry={nodes.Object_163.geometry} material={nodes.Object_163.material} />
              <mesh geometry={nodes.Object_164.geometry} material={nodes.Object_164.material} />
              <mesh geometry={nodes.Object_165.geometry} material={nodes.Object_165.material} />
              <mesh geometry={nodes.Object_166.geometry} material={nodes.Object_166.material} />
              <mesh geometry={nodes.Object_167.geometry} material={materials['Material.010']} />
            </group>
            <group rotation={[-0.11, 0, 0]} scale={0.28}>
              <mesh geometry={nodes.Object_169.geometry} material={materials['Material.015']} />
            </group>
          </group>
          <group position={[0.49, 1.37, 0.37]} rotation={[0.51, 0, -Math.PI / 2]} scale={0.13}>
            <mesh geometry={nodes.Object_171.geometry} material={nodes.Object_171.material} />
          </group>
          <group position={[-0.49, 0.87, 0.06]} rotation={[0.55, 0, Math.PI / 2]} scale={0.13}>
            <mesh geometry={nodes.Object_173.geometry} material={nodes.Object_173.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
      <CameraController />
      <ambientLight intensity={2} />
      <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
      <Suspense fallback={null}>
        <Shoe scale={0.225} position={[0, -0.09, 0]} />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
      </Suspense>
    </Canvas>
  )
}
