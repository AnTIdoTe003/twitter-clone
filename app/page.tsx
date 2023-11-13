import FeedCard from '@/components/FeedCard'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
 
  return (
  <div className='w-full'>
    <div className='container w-full max-w-[1280px] mx-auto my-0'>
      <div className='w-full grid grid-cols-12 '>
      <div className=' col-span-3'>
        <Sidebar/>
      </div>
      <div style={{scrollbarWidth: 'none', msOverflowStyle: 'none' }} className='col-span-6 border-l border-r border-white h-screen overflow-x-hidden overflow-y-scroll'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className='col-span-3'></div>
      </div>
    </div>
  </div>
  )
}
