import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [users, setUsers] = useState([])

    const getDetails = async () => {
        try {
            const res = await axios.get('http://localhost:8000/getData')
            setUsers(res.data.users)
        } catch (error) {
            console.log(error)
        }
    }
    

    const handleDelete = async(id)=>{
        try {
            await axios.delete(`http://localhost:8000/deleteData/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }    

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <div className='min-h-screen bg-sky-500 flex justify-center items-center p-6'>
            <div className='w-full max-w-3xl bg-white rounded-xl p-6'>
                
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-gray-500 text-3xl'>
                        Users List
                    </h2>

                    <Link to='/create'>
                        <button className='bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-white'>
                            + Add
                        </button>
                    </Link>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr>
                                <th className='px-4 py-3 text-left'>No</th>
                                <th className='px-4 py-3 text-left'>Name</th>
                                <th className='px-4 py-3 text-left'>Email</th>
                                <th className='px-4 py-3 text-center'>Actions</th>
                            </tr>
                        </thead>

                        <tbody className='border-t'>
                            
                            {
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td className='px-4 py-3'>{index + 1}</td>
                                        <td className='px-4 py-3'>{user.name}</td>
                                        <td className='px-4 py-3'>{user.email}</td>
                                        <td className='px-4 py-3 flex justify-center gap-2'>
                                            <Link to={`/update/${user._id}`}>
                                            <button className='px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white'>
                                                Edit
                                            </button>
                                            </Link>
                                            
                                            <button 
                                            className='px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md'
                                            onClick={()=> handleDelete(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home