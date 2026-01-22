const companyIcons = [
    'src/assets/bmw-2.svg',
    'src/assets/coca-cola-2021.svg',
    'src/assets/disney-2.svg',
    'src/assets/porsche-2.svg',

]


export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgb(0, 0, 255) 0%, rgb(0, 0, 200) 50%, rgb(0, 0, 150) 100%)' }}>
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
      </div>

      <div className="relative h-full flex items-center pr-4 pl-3">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h1 className="text-center md:text-left text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Hire Exceptional
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-blue-600">
                Talent in Seconds
              </span>
            </h1>

            <p className="text-xl text-center  leading-normal  text-gray-300  mb-10 max-w-2xl md:text-[22px] lg:text-left">
             At Epic we believe that talent management shouldn't feel like paperwork. We help you build the kind of culture where people do the best work of their lives.
            </p>

            <div className="flex flex-col  gap-4 mb-12 sm:flex-row sm:items-start ">
              <button className="group px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1" style={{ background: '#DC4D01', color: 'white' }}>
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="inline-block ml-2 w-5 h-5 size-6 group-hover:translate-x-1 transition-transform">
                 <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white text-lg font-bold rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <div className="flex items-start  gap-8">
              <div className="flex -space-x-3">
                {companyIcons.map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-bold bg-amber-50">
                    <img src={`${i}`} className="opacity-90"/>
                  </div>
                ))}
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">1,000+ Companies</div>
                <div className="text-gray-300 text-sm">Trust our platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[45%] right-5 hidden lg:block lg:text-[16px]">
        <div className="bg-red-800 backdrop-blur-md rounded-2xl p-6 border shadow-2xl w-60 animate-float">
          <div className="flex items-center gap-3 mb-3">
            <img src="src/assets/talent2.jpg" className="w-15 h-15 rounded-full"  />
            <div>
              <div className="text-white font-bold">Sarah </div>
              <div className="text-white/80 text-sm">Senior Developer</div>
            </div>
          </div>
          <div className="text-white text-sm font-bold">✓ Hired in 24 hours</div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style> */}
    </section>
    
  );
};




