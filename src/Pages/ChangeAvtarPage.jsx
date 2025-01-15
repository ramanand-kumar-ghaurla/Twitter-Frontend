import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../helperFunction/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../Features/authSclice'

function ChangeAvtarPage() {

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

        const changeAvtar = async(data)=>{
            

            const formData = new FormData()
            formData.append('avtar',data?.avtar[0])
           

            clearErrors()
            const response = await api.postForm('/user/update-avtar', formData)
            .catch((error)=>{
                const serverError = error.response?.message || error.message;
                setError(serverError);
                console.log('error in changing avtar',error)
                reset()
            })

            console.log(response ,'change avtar res')
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
    <h2 className="text-xl font-bold mb-4 text-center">Change Your Profile Picture</h2>
  
    
        
    <form onSubmit={handleSubmit(changeAvtar)}>

        

      {/* new password Field */}
    
      <div className="mb-4">
        <label htmlFor="newPassword" className="block mb-1 font-medium">
       Upload Your Image
        </label>
        <input
          id="newPassword"
          type="file"
          {...register("avtar",{
                               required: { value: true, message: 'profile image is required to change' },
                               })}
          className={`w-full p-2 border rounded ${
            errors.avtar ? "border-red-500" : "border-gray-300"
          }`}
        />

{touchedFields.avtar && errors.avtar && <p className='text-red-500'>{errors.avtar.message}</p>}

       
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

export default ChangeAvtarPage
