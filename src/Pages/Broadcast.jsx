import Navbar from '../Components/Navbar'
import React from 'react'
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

function Broadcast() {
  return (
  <>
  <Navbar/>
  <div className='text-center mt-3'>
  <h1 className='font-bold text-5xl leading-20'>Global Broadcast</h1>
  <h3 className='text-2xl'>Send a Global Message to all other adventures of <span className='text-red-500'>
       Nuxeland
    </span>
    </h3>
    <form className='flex flex-col justify-evenly mx-auto h-[400px] w-1/2'>
    <Input variant="outlined" label="Title" />
    <Input variant="outlined" label="Short Description" />
    <Textarea size="lg" label="Detailed Description" className='h-[250px] '/>
    </form>
  </div>
  <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:opacity-100"
    />
    <div>
    </div>
  </>
  )
}

export default Broadcast

