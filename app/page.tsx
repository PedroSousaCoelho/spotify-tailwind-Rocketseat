import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Bell} from 'Lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className='flex flex-1'>
        <aside className="w-72 bg-zinc-950 p-6 border-r border-black">
          <div className="flex items-center gap-2 group">
              <a className="w-3 h-3 bg-red-500 rounded-full group-hover:bg-red-600"></a>
              <a className="w-3 h-3 bg-yellow-500 rounded-full group-hover:bg-yellow-600"></a>
              <a className="w-3 h-3 bg-green-500 rounded-full group-hover:bg-green-600"></a>
          </div>

          <div className="mt-6 ml-2 mr-7 m-w-[10]"><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="lgo" /></div>
        
          <nav className="space-y-5 mt-8">
            <a href="" className='flex items-center gap-4 text-xm font-semibold text-zinc-200'><HomeIcon />Home</a>
            <a href="" className='flex items-center gap-4 text-xm font-semibold text-zinc-200'><Search />Search</a>
            <a href="" className='flex items-center gap-4 text-xm font-semibold text-zinc-200'><Library />Library</a>
          </nav>

          <nav className="mt-6 pt-5 border-t border-zinc-700 flex flex-col gap-3">
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Hugo & Guilherme</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Momento</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Coisa boa</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Fred Again...</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Onomatopeia</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Pedru</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Volk</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">nonononono</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Boa</a>
            <a href="#" className="text-zinc-300 text-m hover:text-zinc-100">Old</a>
            
          </nav>
        </aside>
        <main className="flex-1 p-6 border-inherit-black">
          <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/20 p-1"><ChevronLeft/></button>
            <button className=" rounded-full bg-black/20 p-1"><ChevronRight/></button>
            
            <div className="ml-auto gap-5 flex mr-5 pt-3">
              <Bell className="w-10 h-7 "/>
              <h1 className="w-8 h-8"><img className="rounded-full" src="/eu.jpg" alt="img" /></h1>
            </div>
          </div>


          <h1 className="text-semibold text-3xl mt-10 font-sans	">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <a href='' className='bg-white/10 group rounded-lg overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <img width={100} height={100} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa"/>             
              <strong>FredAgain... ActualLife 3</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </a>
            <a href='' className='bg-white/10 group rounded-lg overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <img width={100} height={100} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa"/>             
              <strong>FredAgain... ActualLife 3</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </a>
            <a href='' className='bg-white/10 group rounded-lg overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <img width={100} height={100} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa"/>             
              <strong>FredAgain... ActualLife 3</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </a>
            <a href='' className='bg-white/10 group rounded-lg overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <img width={100} height={100} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa"/>             
              <strong>FredAgain... ActualLife 3</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </a>
            <a href='' className='bg-white/10 group rounded-lg overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <img width={100} height={100} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa"/>             
              <strong>FredAgain... ActualLife 3</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </a>
            <a href='' className='bg-white/10 group rounded-lg overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <img width={100} height={100} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa"/>             
              <strong>FredAgain... ActualLife 3</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </a>
            
          </div>

          <h2 className="text-semibold text-2xl mt-10 font-sans">Made for Pedro</h2>

          <div className="grid grid-cols-7 gap-4 mt-6">
            <a href='#' className="bg-white/5 p-3 rounded-xl group flex flex-col gap-2 hover:bg-white/10">
              <img className="w-full" width={120} height={120} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />             
              <strong className="font-semibold ">Daily Mix</strong>
              <span className="text-sm text-zinc-500">FredAgain...</span>
            </a>
            <a href='#' className="bg-white/5 p-3 rounded-xl group flex flex-col gap-2 hover:bg-white/10">
              <img className="w-full" width={120} height={120} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />             
              <strong className="font-semibold ">Daily Mix</strong>
              <span className="text-sm text-zinc-500">FredAgain...</span>
            </a>
            <a href='#' className="bg-white/5 p-3 rounded-xl group flex flex-col gap-2 hover:bg-white/10">
              <img className="w-full" width={120} height={120} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />             
              <strong className="font-semibold ">Daily Mix</strong>
              <span className="text-sm text-zinc-500">FredAgain...</span>
            </a>
            <a href='#' className="bg-white/5 p-3 rounded-xl group flex flex-col gap-2 hover:bg-white/10">
              <img className="w-full" width={120} height={120} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />             
              <strong className="font-semibold ">Daily Mix</strong>
              <span className="text-sm text-zinc-500">FredAgain...</span>
            </a>
            <a href='#' className="bg-white/5 p-3 rounded-xl group flex flex-col gap-2 hover:bg-white/10">
              <img className="w-full" width={120} height={120} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />             
              <strong className="font-semibold ">Daily Mix</strong>
              <span className="text-sm text-zinc-500">FredAgain...</span>
            </a>
            <a href='#' className="bg-white/5 p-3 rounded-xl group flex flex-col gap-2 hover:bg-white/10">
              <img className="w-full" width={120} height={120} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />             
              <strong className="font-semibold ">Daily Mix</strong>
              <span className="text-sm text-zinc-500">FredAgain...</span>
            </a>
            <a href='#' className="bg-white/5 p-3 rounded-xl group flex flex-col gap-2 hover:bg-white/10">
              <img className="w-full" width={120} height={120} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />             
              <strong className="font-semibold ">Daily Mix</strong>
              <span className="text-sm text-zinc-500">FredAgain...</span>
            </a>
          </div>
 
        </main>
      </div>

      <footer className="bg-zinc-950 border-t border-zinc-700 p-7 flex items-center justify-between"> 
        <div className="flex items-center">
          <img width={65} height={65} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />    
            <div className="flex flex-col">
              <a href="#"><strong className="ml-5 font-normal group hover:underline">Music Name</strong></a>
              <a href="#"><span className="ml-5 text-sm text-zinc-300 group hover:underline">Artist Name</span></a>
            </div>
              <div className='m-5 group hover:text-red-500'><a href="#"><Heart/></a></div>
        </div>
              
        <div className="flex flex-col items-center">          
          <div className="flex items-center gap-6">
            <Shuffle size={35}/>
            <SkipBack size={35}/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full text-xs bg-white text-black ml-auto "><Play/></button>
            <SkipForward size={35}/>
            <Repeat size={35}/>
          </div>

          <div className="flex items-center pt-5 gap-5 ">
            <span className="text-xs">0:00</span>
            <div className="h-2 rounded-full w-[600px] bg-zinc-300"></div>
            <span className="text-xs">3:30</span>            
          </div>
        </div>
        
        <div className="pt-4">

        </div>
      </footer> 
    </div>
  );
}
