import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../helperFunction/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../Features/authSclice'

function ChangeCoverPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register,
        handleSubmit,
        formState: { errors ,isSubmitting,touchedFields},
        setError,
        clearErrors,
        reset,} = useForm({
            mode:'onTouched',
        })

        const changeCover = async(data)=>{
            

            const formData = new FormData()
            formData.append('coverImage',data?.coverImage[0])
           
            console.log('cover image',formData)
            clearErrors()
            const response = await api.postForm('/user/update-cover-Image', formData)
            .catch((error)=>{
                const serverError = error.response?.message || error.message;
                setError(serverError);
                console.log('error in changing cover Image',error)
                reset()
            })

            console.log(response ,'change cover res')
            const userData = response?.data?.data

            if(userData){
                dispatch(login(userData))
                reset()
               navigate('/home')
                console.log('response message',userData)
            }
        }



  return (
    <>
     <div className="max-w-md mx-auto p-4 mt-5 border rounded shadow">
    <h2 className="text-xl font-bold mb-4 text-center">Change Your Cover Image</h2>
  
    
        
    <form onSubmit={handleSubmit(changeCover)}>

        

      {/* new password Field */}
    
      <div className="mb-4">
        <label htmlFor="newPassword" className="block mb-1 font-medium">
       Upload Your Image
        </label>
        <input
          id="newPassword"
          type="file"
          {...register("coverImage",{
                               required: { value: true, message: 'cover image is required to change' },
                               })}
          className={`w-full p-2 border rounded ${
            errors.coverImage ? "border-red-500" : "border-gray-300"
          }`}
        />

{touchedFields.coverImage && errors.coverImage && <p className='text-red-500'>{errors.coverImage.message}</p>}

       
      </div>

     

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}

        className="w-[50%] mx-auto rounded-full bg-blue-500 text-white py-2 px-4  hover:bg-blue-700"
      >
       {isSubmitting ? `Uploading...` : `Upload `}
      </button>
    </form>
  </div>
      
    </>
  )
}

export default ChangeCoverPage
