import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Create() {

    const [name,setName] = useState()
    const [email,setEmail] = useState()

    const navigate = useNavigate()


    const Submit = async(e)=>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/addData',{name,email})
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <div className='min-h-screen bg-sky-500 flex justify-center items-center p-6'>
        <div className='w-full max-w-3xl bg-white rounded-xl p-6'>
            <h2 className='text-gray-500 text-3xl mb-2'>
                Add List
            </h2>
            <form onSubmit={Submit}>
                <div className='mb-2'>
                    <label className='block mb-2'>Name</label>
                    <input 
                    type="text" 
                    placeholder='Enter the name'
                    className='px-3 py-1 w-full border rounded-md'
                    
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                
                <div className='mb-2'>
                    <label className='block mb-2'>Email</label>

                    <input 
                    type="email" 
                    placeholder='Enter email'
                    className='px-3 py-1 w-full border rounded-md'
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <button type='submit' className='px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white'>
                    Create
                </button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Create