import {  useState, useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrClose } from "react-icons/gr";


const navbar = [
  {
      label:'Hire Talent',
      id:1,
      path:'/'
  },
 
  {
      label:"Services",
      id:2,
      path:'/services'
  },
  {
      label:"About",
      id:3,
      path:'/about'
  },
  {
      label:"Pricing",
      id:4,
      path:'/pricing' 
  }
]

// const icon:ReactNode = <MdOutlineKeyboardArrowDown />
type bodyType = HTMLBodyElement| null
const body:bodyType= document.querySelector('body')

function MobileNav() {
    const [isOpen,setisOpen] = useState(false)
    const [dark,setDark] = useState(localStorage.getItem('Darktheme') === 'isTrue' ? true : false)
    const [isclicked, setIsclicked] = useState(false)
    

    const menuClicked = () => {
      setisOpen(!isOpen)
      setIsclicked(!isclicked)
      if(isOpen && body){
        body.style.overflow='hidden'
      }
    }

    // const navbarLength = navbar.length

    // Load saved preference on mount
    useEffect(() => {
      const savedTheme = localStorage.getItem('Darktheme')
      if(savedTheme === 'isTrue') {
        setDark(true)
      }
    }, [])

    // Keep DOM synced with state
    useEffect(() => {
      if(dark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [dark])

    const handleToggle = () => {
      const newValue = !dark
      setDark(newValue)
      localStorage.setItem('Darktheme', newValue ? 'isTrue' : 'isFalse')
    }

    const linkClicked=() =>{
      setisOpen(!isOpen)
    }
  
    return (
      <div className="flex items-center justify-between w-[95%] mx-auto my-3 bg-secondary py-4 px-2.5 text-primary rounded-full sm:hidden  dark:bg-darkFootNav">
        <div className='flex items-center justify-center'>
          <img src=' ../src/assets/TMS.png' className='w-20'/>
          <p className='text-2xl font-bold'>Epic</p>
        </div>
        <div >
          <div >
            {isclicked ? <GrClose size={28} onClick={menuClicked}/> : <GiHamburgerMenu size={30} color='#101010ff' onClick={menuClicked} />}
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open: ""}`}>
              {navbar.map(item => 
                  // navbarLength === navbarLength -1 ? 
                  // <NavLink to={item.path} key={item.path} className='my-0  p-2 text-[18px] text-right text-primary w-full bg-secondary dark:bg-darkFootNav hover:text-[#f5a005]' onClick={linkClicked}>{item.label}</NavLink>:
                  <NavLink to={item.path} key={item.path} className='my-0  p-2 text-[18px] text-right text-primary w-full bg-secondary dark:bg-darkFootNav hover:text-[#f5a005]' onClick={linkClicked}>{item.label}</NavLink> 

              )}
              <div className='flex items-end justify-end w-full pt-3'>
                <button className='p-2' onClick={handleToggle}>
                  {dark? <FaRegMoon size={30}/> : <MdOutlineWbSunny size={30}/>}
                </button>
              </div>
            </div>
          </div>

        </div>
       
      </div>
    )
}

export default MobileNav

