import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Bell, ListMusic, MonitorSpeaker, PlaySquare, Volume2, Minimize2} from 'Lucide-react'

export function MadeFor(){ 
    return(
        <div className="grid grid-cols-6 gap-4 mt-6">
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
    )
}