import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Bell, ListMusic, MonitorSpeaker, PlaySquare, Volume2, Minimize2} from 'Lucide-react'

export function Footer(){ 
    return( 
        <footer className="bg-zinc-950 border-t border-zinc-700 pt-7 flex items-center justify-between"> 
        <div className="flex items-center ml-6">
          <img width={65} height={65} src="/Fred-Again..-Actual-Life-3.jpeg" alt="capa" />    
            <div className="flex flex-col">
              <a href="#"><strong className="ml-5 font-normal group hover:underline">Music Name</strong></a>
              <a href="#"><span className="ml-5 text-sm text-zinc-300 group hover:underline">Artist Name</span></a>
            </div>
              <div className='m-5 group hover:text-red-500'><a href="#"><Heart/></a></div>
        </div>
              
        <div className="flex flex-col ml-32 items-center">          
          <div className="flex items-center gap-6">
            <Shuffle size={25}/>
            <SkipBack size={25}/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full text-xs bg-white text-black ml-auto "><Play/></button>
            <SkipForward size={25}/>
            <Repeat size={25}/>
          </div>

          <div className="flex items-center pt-5 gap-4 ">
            <span className="text-xs">0:00</span>
            <div className="h-2 rounded-full w-[600px] bg-zinc-300"></div>
            <span className="text-xs">3:30</span>            
          </div>
        </div>
        
        <div className="flex flex-row gap-3 mb-6 mr-5">
          <a href="#"><PlaySquare size={25}/></a>
          <a href="#"><ListMusic size={25}/> </a>
          <a href="#"><MonitorSpeaker size={25}/> </a>
          <a href="#"><Volume2 size={25}/> </a>
          <a href="#"><div className="h-2 rounded-full w-[140px] mt-2 bg-zinc-300"></div> </a>
          <a href="#"><Minimize2 size={25}/> </a>
        </div>
      </footer> 
    )
}