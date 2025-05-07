// Components

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

// Dependencies

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import React from 'react'

// Three.js

function Scene() {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })

  return (
    <>
      {/* Corpo do boneco */}
      <group ref={mesh}>
        {/* Cabeça */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#fae7d7" />
        </mesh>

        {/* Olho esquerdo */}
        <mesh position={[-0.15, 1.4, 0.45]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Olho direito */}
        <mesh position={[0.15, 1.4, 0.45]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Corpo */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.4, 0.35, 1, 32]} />
          <meshStandardMaterial color="#030496" />
        </mesh>

        {/* Braço esquerdo */}
        <mesh position={[-0.555, 0.5, 0]} rotation={[0, 0, Math.PI / 1.1]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 32]} />
          <meshStandardMaterial color="#fae7d7" />
        </mesh>

        {/* Braço direito */}
        <mesh position={[0.6, 1.2, 0.3]} rotation={[10, 10, Math.PI / 1]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 32]} />
          <meshStandardMaterial color="#fae7d7" />
        </mesh>

        {/* Perna esquerda */}
        <mesh position={[-0.2, -0.5, 0]}>
          <cylinderGeometry args={[0.15, 0.12, 1, 32]} />
          <meshStandardMaterial color="#020202" />
        </mesh>

        {/* Perna direita */}
        <mesh position={[0.2, -0.5, 0]}>
          <cylinderGeometry args={[0.15, 0.12, 1, 32]} />
          <meshStandardMaterial color="#020202" />
        </mesh>

        {/* Cabelos */}
        <mesh position={[0, 1.6, 0]}>
          <sphereGeometry args={[0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    </>
  )
}

// Canvas

function CanvasContainer() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  )
}

// Main

function Main() {
  return (
    <main>

      <section className='home' id='home'>
        <div className='home-content'>
          <h2>Meu nome é <br /> <strong>Otavio Emanoel</strong></h2>
          <p>Sou dev fullstack e estudo NodeJS e MySql.</p>
          <div className='home-buttons'>
            <button>
              <a href="#projects"><i className="fas fa-user"></i> Sobre</a>
            </button>
            <button>
              <a href="https://github.com/Otavio-Emanoel"><i class="fab fa-github"></i> Github</a>
            </button>
          </div>
        </div>
        <div className='home-image'>
          <CanvasContainer />
        </div>
      </section>

      {/* <section className='about' id='about'>
        
      </section> */}
      
    </main>
  )
}


function App() {

  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  )
}

export default App
