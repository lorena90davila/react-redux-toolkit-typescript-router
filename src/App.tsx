import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './features/home/components/NavBar'
import CakeView from './features/cake/CakeView'
import IceCreamView from './features/iceCream/IceCreamView'
import UserView from './features/user/UserView'
import HomeView from './features/home/HomeView'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'cake'} element={<CakeView />} />
        <Route path={'ice-cream'} element={<IceCreamView />} />
        <Route path={'user'} element={<UserView />} />
        <Route path={'/'} element={<HomeView />} />
        <Route path={'*'} element={<p>Not Found</p>} />
      </Routes>
    </>
  )
}

export default App
