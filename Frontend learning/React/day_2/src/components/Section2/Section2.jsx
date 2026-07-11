import React from 'react'

const Section2 = () => {
  return (
        <div className="flex justify-around mt-4">
            <div className="flex flex-col gap-2">
                <h1 className='text-3xl font-bold'>What is USD Bloom?</h1>
                <button className='bg-[#2B273E] text-white pr-5 py-2 w-[120px] rounded-2xl active:scale-95'>Explore now</button>
            </div>

            <div className="w-[300px]">
                <p>USD Bloom is a yield-bearing stablecoin that helps your capital grow while staying pegged to the U.S. dollar.</p>
            </div>
        </div>
  )
}

export default Section2