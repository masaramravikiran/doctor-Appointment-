import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from '../context/AppContext'

const Doctors = () => {
  const {specality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = usestate(false)
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)

  const applyFilter = () =>{
    if(specality){
      setFilterDoc(doctors.filter(doc => doc.specality === speciality))
    }else{
      setFilterDoc(doctors)
    }

  }
  useEffect(()=>{
    applyFilter()
    
  },[doctors,speciality])
  return (
    <div>
      <p>Browse through the doctors specialist</p>
      <div>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${sowFilter ? 'flex' : 'hidden sm:flex'}`} mt-5>
          <button className='{`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? bg-primary text-white`}' onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
          <p onClick={()=> speciality === 'General physician' ?navigate('/doctors'):navigate('/doctors/General physician')}className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specality === "General physician" ? "ng-indigo-100 text-black": ""}`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ?navigate('/doctors'):navigate('/doctors/Gynecologist')}className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specality === "" ? "ng-indigo-100 text-black": "Gynecologist"}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ?navigate('/doctors'):navigate('/doctors/Dermatologist')}className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specality === "" ? "ng-indigo-100 text-black": "Dermatologist"}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specality === "" ? "ng-indigo-100 text-black": "Pediatricians"}`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ?navigate('/doctors'):navigate('/doctors/Neurologist')}className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specality === "" ? "ng-indigo-100 text-black": "Neurologist"}`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ?navigate('/doctors'):navigate('/doctors/Gastroenterologist')}className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specality === "" ? "ng-indigo-100 text-black": "Gastroenterologist"}`}>Gastroenterologist</p>
          </div>

    </div>
    <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
      {
        filterDoc.map((item,index)=>(
          <div onClick={()=>navigate(`/appointment/${item._id}`)}className='border border-blue-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>Available
              </div>
              <div className='p-4'>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          </div>
        ))
      }

    </div>
    </div>
  )
}

export default Doctors
