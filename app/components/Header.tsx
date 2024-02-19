import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Bell, ListMusic, MonitorSpeaker, PlaySquare, Volume2, Minimize2} from 'Lucide-react'

export function Header(){
    return(
        <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/20 p-1"><ChevronLeft/></button>
            <button className=" rounded-full bg-black/20 p-1"><ChevronRight/></button>
            
            <div className="ml-auto gap-5 flex mr-5 pt-3">
              <a href="#"><Bell className="w-10 h-7 "/></a>
              <h1 className="w-8 h-8"><img className="rounded-full" src="/eu.jpg" alt="img" /></h1>
            </div>
          </div>
    )
}