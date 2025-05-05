import './App.css'
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

function Header() {
  return (
    <header>
      <h1>Otavio Emanoel</h1>
      <nav>
        <ul>
          <li><a href="#home"><i class="fas fa-home"></i> Inicio</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>Otavio - Todos os direitos reservados</p>
      <p>Desenvolvido por Otavio</p>
    </footer>
  )
}


function App() {

  return (
    <>
      <Header />

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

      <Footer />
    </>
  )
}

export default App
