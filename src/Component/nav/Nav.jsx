import "./Nav.css";
import aadharLogo from "../../assets/aadharLogo.webp";
import satyamevLogo from "../../assets/satyamevLogo.webp"
import dashboardIcon from "../../assets/dashboard-icon.webp"
import languageSelector from "../../assets/language-selector.webp"
import arrowDown from "../../assets/arrow-down-white.webp"
const Nav = () => {
  return (
    <header>
        <nav className="first-nav">
            <img src={satyamevLogo} alt=""/>
            <h2>Unique Identification Authority of India</h2>
            <img src={aadharLogo} alt=""/>
        </nav>
        <nav className="second-nav">
            <span className='firstSpan'>
                <img src={dashboardIcon} alt=""/>
                <p>myAadhar</p>
            </span>
            <span className='secondSpan'>
                <img src={languageSelector} alt=""/>
                <p>English</p>
                <img src={arrowDown} alt=""/>
            </span>
        </nav>
    </header>
  )
}

export default Nav