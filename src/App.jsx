import ThemeButton from "./components/ThemeButton"
import { ThemeProvider } from "./components/ThemeContext"


function App() {

  return (
    <>
      <ThemeProvider>
          <ThemeButton />
      </ThemeProvider>
    </>
  )
}

export default App
