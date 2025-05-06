import { useState } from 'react'
import Produtos from './componentes/produtos'
import Routers from './componentes/routes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers/>
    </>
  )
}

export default App