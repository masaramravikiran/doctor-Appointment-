import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const MyAppointments = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
      <p>
        my appointments
      </p>
      <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-bottom' key={{index}}>
        {doctors.slice(0,2).map((item,index)=>(
          <div key={index}>
            <p>{item.name}</p>
            <img className='w-32 bg-indigo-50' src={item.image} alt=""/>
          </div>
        ))}
        {doctors.map((item, index)=>(
          <div key={index}>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semobold'>{item.name}</p>
            </div>
            <div>
              <p>
                {item.name}
              </p>
              <p>
                {item.speciality}
              </p>
              <p className='text-zinc-700 font-medium mt-1'>
                Address:
              </p>
              <p className='text-xs'>
                {item.address.line1}
              </p>
              <p  className='text-xs'>
                {item.address.line2}
              </p>
              <p><span className='text-sm mt-1'>Date & Time:</span></p>
            </div>
            <div>
              <div className='flex flex-col gap-2 justift-end'>
                <button className='text-sm-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                  Pay Online
                </button>
                <button className='text-sm-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                  Cancel appointement
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
