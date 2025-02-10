import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*--left section---*/}
        <div >
<img className='mb-5 w-40'src={assets.logo} alt="" />
<p className='w-full md:w-2/m text-gray-600 leading-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, laboriosam, officia modi, at quos eligendi voluptate quisquam libero excepturi molestias consectetur corporis. Qui eos, molestias magni eaque voluptas dolor libero?</p>

{/*--center section---*/}
<div>
  <p className='text-x1 font-medium mb-5'>
    COMPANY
  </p>
  <ul className='flex flex-col gap-2 text-gray-600'>
    <li>HOME</li>
    <li>ABOUT</li>
    <li>CONTACT US</li>
    <li>PRIVACY POLICY</li>
  </ul>
          
          </div>
        </div>

        {/*--right section---*/}
        <div>
          <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>000000000</li>
            <li>hi@gmail.com</li>
          </ul>

        </div>
    </div>
    <div>
      {/*--bottom section---*/}
      <div>
        <hr/>
        <p className='py-5 text-sm'>2023 All rights reserved</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
