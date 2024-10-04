import './App.css'
import FooterDefault from './assets/Components/FooterDefault'
import Forms from './assets/Components/Forms'
import TitleDefault from './assets/Components/TitleDefault'


function App() {

  return (
    <>
      <main>
        <header>
          <TitleDefault />
        </header>
        <div className="side">
          
        </div>
        <div className="for">
          <Forms />
        </div>
        <div className="side2">
          
        </div>
        <footer>
        <FooterDefault />
        </footer>
      </main>
    </>
  )
}

export default App
