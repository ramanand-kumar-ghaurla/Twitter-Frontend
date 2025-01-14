import React from "react";
import { useForm } from "react-hook-form";
import api from "../helperFunction/axios";
import { Axios, AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Features/authSclice";


const EditPage = () => {
const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
    setError,
    clearErrors,
    reset,
    getValues,
  } = useForm();

  // Custom validation logic to ensure at least one field is filled
  const validateFields = () => {
    const { username, fullName } = getValues();

    // Check if both fields are empty
    if (!username && !fullName) {
      setError("username", { type: "manual", message: "Username or Fullname is required" });
      setError("fullName", { type: "manual", message: "Username or Fullname is required" });
      return false; // Prevent submission
    }

    // Clear errors if at least one field is filled
    clearErrors("username");
    clearErrors("fullName");
    return true; // Allow submission
  };

  const onSubmit = async(data) => {
    // Perform validation before processing
    if (!validateFields()) return;

    console.log('data',data)

    const response = await api.post('/user/update-account-details',data)
    .catch((error)=>{
      console.log('error in updating account details',error)
      if(error.name === 'AxiosError'){
        
        console.log(error.request?.statusText)
      }
      reset()
    })

    
      const user = response?.data?.data
     
      if(user){
        dispatch(login(user))
        reset()
      }
     
    
   
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Update Username or Fullname</h2>
      {(errors.fullName || errors.username) && (
            <p className="text-red-500 text-sm">{errors?.fullName?.message ||errors?.username?.message }</p>
          )}

          
      <form onSubmit={handleSubmit(onSubmit)}>

           {/* Fullname Field */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 font-medium">
            Fullname
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className={`w-full p-2 border rounded ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          
        </div>

        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username",{
             
                                minLength: { value: 7, message: 'Username must be at least 7 characters' },
                                pattern: { value: /^(?=.*[a-z])(?=.*[0-9_.]).{7,30}$/, message: "Username must contain only lowercase, alphanumeric, and special characters '_' and '.'" },
            })}
            className={`w-full p-2 border rounded ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
         
        </div>

       

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}

          className="w-[50%] mx-auto rounded-full bg-blue-500 text-white py-2 px-4  hover:bg-blue-700"
        >
         {isSubmitting ? `Updating...` : `Update`}
        </button>
      </form>
    </div>
  );
};

export default EditPage;
