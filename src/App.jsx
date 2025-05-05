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
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <>
      <mesh ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00f0f0" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f00" />
      </mesh>
    </>
  )
}

// Canvas

function CanvasContainer() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight />
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
