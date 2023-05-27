import Lottie from 'lottie-react'
import mvAnimation from "./mv_animation.json";

import './App.css'

function App() {

  return (
    <>
      <header className='header'>
        <h1 className='mainHd'>Welcome!</h1>
      </header>
      <main>
        <section>
          <Lottie animationData={mvAnimation} loop={true} />
        </section>
        <section>
          <h2>ここになにか入ります。</h2>
        </section>
      </main>
      <footer>
        フッターコンテンツ
      </footer>
    </>
  )
}

export default App
