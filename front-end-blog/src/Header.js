import {FaLaptop ,FaTabletAlt , FaMobile} from 'react-icons/fa'
import {useContext } from "react"
import DataContext from './Context/DataContext'

const Header = () => {

  const { width} = useContext(DataContext)
    return (
        <header className="Header">
          <h1> Blog Application </h1>
          { width < 768 ? <FaMobile/> 
          : width < 992 ? <FaTabletAlt/> : <FaLaptop/> }
        </header>
    )
}

export default Header
