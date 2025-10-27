import Teoria from "./components/Teoria"
import Conceptos from "./components/Conceptos"
import Contador from "./components/Contador"


function App() {
const codComision= 'web16 2025 modulo 2'
  return (
    <>
    <header className="py-3 text-center">
    <h1 className="display-4">Primera app con react </h1>
    </header>
    <main className="container">
      <Teoria></Teoria>
      {/*<Teoria/>*/}
      <Conceptos codComision= {codComision} tema= 'React' version= {19}/>
   <Contador></Contador>
    </main>
    </>
)
}

export default App
