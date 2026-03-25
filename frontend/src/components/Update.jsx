import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const {id} = useParams()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const navigate = useNavigate()

    const getById = async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/getbyId/${id}`)
            setName(res.data.data.name)
            setEmail(res.data.data.email)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8000/updateData/${id}`,{name,email})
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getById()
    },[])


  return (
    <>
    <div className='min-h-screen bg-sky-500 flex justify-center items-center p-6'>
        <div className='w-full max-w-3xl bg-white rounded-xl p-6'>
            <h2 className='text-gray-500 text-3xl mb-2'>
                Update List
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label className='block mb-2'>Name</label>
                    <input 
                    type="text" 
                    placeholder='Enter the name'
                    className='px-3 py-1 w-full border rounded-md'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                
                
                <div className='mb-2'>
                    <label className='block mb-2'>Email</label>
                    <input 
                    type="email" 
                    placeholder='Enter email'
                    className='px-3 py-1 w-full border rounded-md'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <button type='submit' className='px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white'>
                    Update
                </button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Update