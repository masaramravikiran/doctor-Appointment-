import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencysymbol } = useContext(AppContext)
  const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }
  const getAvailable = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
  setDocSlots(docInfo.slots)
  
  //getting current date
  let today = new Date()
  for(let i = 0; i < 7; i++){
    //getting date with index
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)
    //settings end time of the date with index
    let endTime = new Date(currentDate)
    endTime.setDate(today.getDate()+1)
    endTime.setHours(21,0,0,0)

    //setting hours
    if(today.getDate() === currentDate.getDate()){
      let currentTime = new Date(today)
      currentTime.setHours(today.getHours()+1, 0, 0, 0)
      docSlots[i].slots = docSlots[i].slots.filter(slot => {
        let slotTime = new Date(currentDate)
        slotTime.setHours(slot.hour, slot.minute, 0, 0)
        return slotTime.getTime() > currentTime.getTime()
      })
    }

  }
}

  useEffect(() => {
    fetchDocInfo()
  }, [doctors,docId])
  return docInfo &&(
    <div>
      {/*-------Doctor Details--------*/}

      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='flex-1 border border-gray-400 rounded-lg' src={docInfo.Image} alt="" />
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*-----------Doc Info: name, degree, experience ----*/}

          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'> {docInfo.name} <img src={assets.verified_icon} alt=""/></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <p>{docInfo.experience}</p>
            <button className='py-0.5 px-2 border text-xs rounded'></button>
          </div>

          {/*-----------Doc Info: location, fees ----*/}

          <div>
            <p>{docInfo.location}</p>
            <p>{docInfo.fees}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointmnet fee:<span className='text-gray-600'>{currencysymbol}{docInfo.fees}</span>
          </p>
        </div>

      </div>

      {
        /*-------Doctor Slots--------*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        {docSlots.map((item, index) => (
          <div key={index} className='flex items-center gap-2'>
            <p>{daysofweek[item.day]}</p>
            <p>{item.slots[slotIndex].hour}:{item.slots[slotIndex].minute}</p>
          </div>
        ))}
      </div>
          
        <div>
          {docSlots.map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              <p>{daysofweek[item.day]}</p>
              <p>{item.slots[slotIndex].hour}:{item.slots[slotIndex].minute}</p>
            </div>
          ))}
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full'>Book an appointment</button>
      </div>
      {/* Listing Related Doctors */}
      <RelatedDoctors docId={docId} 
      speciality={docInfo.speciality}/>
      </div>
    )
  }


export default Appointment
