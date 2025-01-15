import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../helperFunction/axios'
import { useNavigate } from 'react-router-dom'

function ChangePasswordPage() {

    const navigate = useNavigate()

    const { register,
        handleSubmit,
        formState: { errors ,isSubmitting,touchedFields},
        setError,
        clearErrors,
        reset,} = useForm({
            mode:'onTouched',
            defaultValues:{
                oldPassword:'',
                newPassword:''
            }
        })

        const changePassword = async(data)=>{

            clearErrors()
            const response = await api.post('/user/change-password', data)
            .catch((error)=>{
                const serverError = error.response?.message || error.message;
                setError(serverError);
                console.log('error in changing password',error)
                reset()
            })

            console.log(response ,'change pasword res')
            const message = response?.data?.message

            if(message){
                reset()
                navigate('/home')
                console.log('response message',message)
            }
        }



  return (
    <div className="max-w-md mx-auto p-4 mt-5 border rounded shadow">
    <h2 className="text-xl font-bold mb-4 text-center">Change Your Password</h2>
  
    
        
    <form onSubmit={handleSubmit(changePassword)}>

         {/* oldPassword Field */}
         <div className="mb-4">
        <label htmlFor="oldPassword" className="block mb-1 font-medium">
        Old Password
        </label>
        <input
          id="oldPassword"
          type="text"
          {...register("oldPassword",{
            required: { value: true, message: 'Password is required' },
          })}
          className={`w-full p-2 border rounded ${
            errors.oldPassword ? "border-red-500" : "border-gray-300"
          }`}
        />
          {touchedFields.oldPassword && errors.oldPassword && <p className='text-red-500'>{errors.oldPassword.message}</p>}

       
      </div>

      {/* new password Field */}
    
      <div className="mb-4">
        <label htmlFor="newPassword" className="block mb-1 font-medium">
        New Password
        </label>
        <input
          id="newPassword"
          type="text"
          {...register("newPassword",{
                               required: { value: true, message: 'Password is required' },
                              minLength: { value: 8, message: 'Password must be at least 8 characters' },
                              maxLength: { value: 20, message: 'Password must be at most 20 characters' },
                              pattern: { value: /^\S*(?=\S{8,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/, message: 'Password must contain one uppercase, lowercase, and special symbol' },
         
          })}
          className={`w-full p-2 border rounded ${
            errors.newPassword ? "border-red-500" : "border-gray-300"
          }`}
        />

{touchedFields.newPassword && errors.newPassword && <p className='text-red-500'>{errors.newPassword.message}</p>}

       
      </div>

     

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}

        className="w-[50%] mx-auto rounded-full bg-blue-500 text-white py-2 px-4  hover:bg-blue-700"
      >
       {isSubmitting ? `Changing...` : `Change `}
      </button>
    </form>
  </div>
  )
}

export default ChangePasswordPage
