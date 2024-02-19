import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Bell, ListMusic, MonitorSpeaker, PlaySquare, Volume2, Minimize2} from 'Lucide-react'
export function Sidebar(){ 
    return ( 
        <aside className="w-72 bg-zinc-950 p-6 border-r border-black">
          <div className="flex items-center gap-2 group">
              <a className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer"></a>
              <a className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer"></a>
              <a className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer"></a>
          </div>

          <div className="mt-6 ml-2 mr-7 m-w-[10]"><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="lgo" /></div>
        
          <nav className="space-y-5 mt-8">
            <a href="" className='flex items-center gap-4 text-xm font-semibold text-zinc-200 hover:text-zinc-50'><HomeIcon />Home</a>
            <a href="" className='flex items-center gap-4 text-xm font-semibold text-zinc-200 hover:text-zinc-50'><Search />Search</a>
            <a href="" className='flex items-center gap-4 text-xm font-semibold text-zinc-200 hover:text-zinc-50'><Library />Library</a>
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
    )
}