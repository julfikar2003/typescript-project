
import { Outlet } from 'react-router'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'

const Mainlayout = () => {
  return (
    <div>
        <Navber />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Mainlayout
