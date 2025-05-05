import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import React from 'react'

function Box(props) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function CanvasContainer() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}


function Main() {
  return (
    <main>
        <section className='home' id='home'>
          <div className='home-content'>
            <h2>Meu nome é <strong>Otavio</strong></h2>
            <p>Sou dev fullstack e estudo NodeJS e MySql.</p>
            <div>
              <button>
                <a href="#projects">Projetos</a>
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
