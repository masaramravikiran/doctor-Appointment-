import React from 'react'
import {AppContext} from '../context/AppContext'

const RelatedDoctors = ({speciality,docId}) => {

  const {doctors} = useContext(AppContext)
  const navigate = useNavigate()
  const [relDoc,setRelDocs] = useState([])
  useEffect(()=>{
    if(doctors.length > 0 && speciality){
      const doctorsData = doctors.filter((doc)=> doc.speciality ===speciality && doc._id !== docId)
      setRelDocs(doctorsData)
    }
  },[doctors,speciality,docId])
  
  return (
    <div>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item,index)=>(
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
        ))}
      </div>
    </div>
  )
}

export default RelatedDoctors
