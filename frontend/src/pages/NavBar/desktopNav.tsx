import { useNavigate,NavLink } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useState,useEffect } from 'react';
import Hero from "../../components/hero";


interface DropdownItem {
  label: string;
  description?: string;
  icon?: string;
  badge?: string;
}

interface NavLink {
  label: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [dark,setDark] = useState(localStorage.getItem('Darktheme') === 'isTrue' ? true : false)
    const navigate = useNavigate()

  const navLinks: NavLink[] = [
    {
      label: 'Hire talent',
      hasDropdown: true,
      dropdownItems: [
        { 
          label: 'See all talents', 
          description: 'Connect with top talent vetted by our recruitments team',
          icon: '👥'
        },
        { label: 'Developers' },
        { label: 'Designers' },
        { label: 'Marketers' },
        { label: 'eCommerce experts' },
        { label: 'Sales experts' },
        { label: 'Customer support' },
        { label: 'Virtual assistants' },
        
      ]
    },
    {
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { label: ' Payroll', icon: '👤' },
        { label: 'Health Insurance', icon: '🏥' },
        { label: 'Equipment', icon: '💼' },
       
      ]
    },
    
    {
      label: 'About',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About us' },
        { label: 'Our team' },
        { label: 'Careers' },
        { label: 'Blog' },
      ]
    },
    {
      label: 'Pricing',
      hasDropdown: false,
    }
  ];

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
    <div className=" hidden  sm:flex sm:flex-col  ">
    
      <nav className="bg-white relative z-50 text-blue-950">
        <div className="max-w-7xl mx-auto md:px-4">
          <div className="flex items-center justify-between h-20">
          
            <div className='flex items-center justify-center lg:gap-2'>
              <img src=' ../src/assets/TMS.png' className='w-18  lg:w-20'/>
              <p className='md:text-xl font-bold'>EPIC</p>
            </div>

            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center  hover:font-bold transition-opacity py-2 md:text-[16px] font-medium">
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg 
                        className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown overlay */}
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-lg shadow-2xl py-4 px-2 min-w-[320px] text-gray-800">
                        {link.label === 'Services' && (
                          <div className="space-y-2">
                            {link.dropdownItems?.map((item, index) => (
                              <div key={index}>
                                {item.description ? (
                                  <div className="px-4 py-3 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors">
                                    {item.badge && (
                                      <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-0.5 rounded mb-2 font-semibold">
                                        {item.badge}
                                      </span>
                                    )}
                                    <div className="flex items-start space-x-3">
                                      {item.icon && <span className="text-3xl">{item.icon}</span>}
                                      <div className="flex-1">
                                        <div className="font-semibold text-gray-900">{item.label}</div>
                                        <div className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="px-4 py-2.5 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      {item.icon && <span className="text-xl">{item.icon}</span>}
                                      <span className="font-medium">{item.label}</span>
                                    </div>
                                    <span className="text-indigo-600">✓</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {link.label === 'Hire talent' && (
                          <div className="space-y-1">
                            <div className="px-4 py-2 mb-2 font-semibold text-gray-500 text-xs uppercase tracking-wide">
                              Talent pool
                            </div>
                            {link.dropdownItems?.map((item, index) => (
                              <div key={index}>
                                {item.description ? (
                                  <div className="px-4 py-3 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors">
                                    <div className="flex items-start space-x-3">
                                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-xl">{item.icon}</span>
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-semibold flex items-center text-gray-900">
                                          {item.label}
                                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="px-4 py-2.5 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors">
                                    <span className="font-medium">{item.label}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {( link.label === 'About') && (
                          <div className="space-y-1">
                            {link.dropdownItems?.map((item, index) => (
                              <div key={index} className="px-4 py-2.5 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors">
                                <span className="font-medium">{item.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <button className="bg-blue-500 hover:bg-blue-800 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-colors" onClick={handleClick}>
                Contact us
              </button>
              <button className='p-2' onClick={handleToggle}>
                {dark?   <FaRegMoon size={30}/> :<MdOutlineWbSunny size={30}/> }

              </button>
            </div>
          </div>
        </div>
      </nav>
     

    </div>
  );
};

