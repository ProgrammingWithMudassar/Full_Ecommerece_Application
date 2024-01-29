import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MainRoutes } from "./routes/Routes"

function App() {

  return (
    <>
      <Router>
        <Routes>
          {MainRoutes.map((route, idx) => (
            <Route path={route.path} element={<route.component />} key={idx} exact={true} />
          ))}
        </Routes>
      </Router>
    </>
  )
}

export default App
