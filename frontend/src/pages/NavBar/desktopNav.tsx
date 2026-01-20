import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useState,useEffect } from 'react';


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

function DesktopNav() {
    const [dark,setDark] = useState(localStorage.getItem('Darktheme') === 'isTrue' ? true : false)
    const navigate = useNavigate()
    

    // this runs on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('Darktheme')
        if(savedTheme === 'isTrue'){
            setDark(true)
        }
    },[])

    // this matches react
    useEffect(() => {
        if(dark){
            document.documentElement.classList.add('dark')
        }else {
            document.documentElement.classList.remove('dark')
        }

    },[dark])

    const handleToggle = () => {
        const newDarkValue = !dark
        setDark(newDarkValue)
        localStorage.setItem('Darktheme', newDarkValue ? 'isTrue':'isFalse')
    }

    function handleClick() {
      navigate('./contact')
    }

  return (
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:text-[18px] sm:mb-3 bg-secondary sm:py-4 sm:px-2.5 md:px-5 lg:px-7  " style={{backgroundColor:'var(--color-background)',color:'var(--color-text)'}}>
            <div className='flex items-center justify-center lg:gap-2'>
                <img src=' ../src/assets/TMS.png' className='w-18  lg:w-20'/>
                <p className='text-2xl font-bold'>Epic</p>
            </div>

            <div className='sm:flex sm:flex-row sm:items-center justify-between gap-1.5 sm:w-[80%] md:w-[83%] md:gap-3 lg:w-[80%] '>
                <div className='  flex-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-5 p-2 md:gap-1 md:flex-2  lg' >
                    {
                        navbar.map((item)=> (
                            <div key={item.id}>
                                <NavLink to={item.path} className=' hover:font-bold focus p-1 active'>{item.label}</NavLink>
                            </div>
                        ))
                    }
                </div>
                <div className=' flex items-center justify-end gap-1.5 flex-1 '>
                    <button className='border rounded-2xl p-2 pr-3 pl-3' style={{backgroundColor:'var(--color-text)',color:'var(--color-background)'}}onClick={handleClick}>Contact Us</button>
                    <button className='p-2' onClick={handleToggle}>
                    {dark? <FaRegMoon size={30}/> : <MdOutlineWbSunny size={30}/>}
                    </button>
                </div>

            </div>
        </div>
  )
}

export default DesktopNav