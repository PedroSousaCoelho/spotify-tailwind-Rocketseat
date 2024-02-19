import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Bell, ListMusic, MonitorSpeaker, PlaySquare, Volume2, Minimize2} from 'Lucide-react'
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Playlist } from './components/Playlist';
import { MadeFor } from './components/MadeFor';
import { Header } from './components/Header';


export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className='flex flex-1'>
        <Sidebar/>
        <main className="flex-1 p-6 border-inherit-black">
          <Header/>
          <h1 className="text-semibold text-3xl mt-10 font-sans	">Good Afternoon</h1>
          <Playlist/>
          <h2 className="text-semibold text-2xl mt-10 font-sans">Made for Pedro</h2>
          <MadeFor/>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
