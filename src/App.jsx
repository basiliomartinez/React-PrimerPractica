import Teoria from "./components/Teoria"
import Conceptos from "./components/Conceptos"

function App() {

  return (
    <>
    <header className="py-3 text-center">
    <h1 className="display-4">Primera app con react </h1>
    </header>
    <main className="container">
      <Teoria></Teoria>
      {/*<Teoria/>*/}
      <Conceptos/>
    </main>
    </>
  )
}

export default App
