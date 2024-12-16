import React from 'react'
import HandwritingImage from '../assets/handwriting.png'


const Card = () => {
  return (
    <div className='card-1 flex border drop- rounded-xl overflow-hidden'> 
          
        <div className='image w-[30%]'>
            <img src={HandwritingImage} />
        </div>

        <div className='p-3 pr-7'>
            <h4 className='text-xl font-semibold'>Kemampuan Merangkum Tulisan</h4>
            <p className='text-sm text-[#9E95A2]'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.Nulla risus malesuada ac turpis tempus.Lorem ipsum dolor sit amet consectetur....</p>
            <div className='flex justify-between'>
                <div className=''>
                    <h5 className='text-sm'>BAHASA SUNDA</h5>
                    <h5 className='text-sm text-[#9E95A2]'>Oleh Al-Baiqi Samaan</h5>
                </div>

                <div className=''>
                    <button className='bg-[#F39519] text-white px-4 py-3 rounded-md text-lg font-semibold'>
                        Add to Card
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card