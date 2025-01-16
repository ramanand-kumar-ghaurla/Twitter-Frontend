import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import Input from './Input'; // Assuming this is your updated Input component
import { login as authLogin } from '../../Features/authSclice';
import api from '../../helperFunction/axios';
import { Link } from 'react-router-dom';


function LoginForm() {
    
    const dispatch = useDispatch();
    const { register,reset, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        mode: 'onTouched',
        defaultValues: {
            userInput: '',
            password: '',
        },
    });

    const [error, setError] = useState('');

    const LoginUser = async (data) => {
        // Map `userInput` to `username` or `email` before sending to the server
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.userInput);
        const payload = {
            ...(isEmail ? { email: data.userInput } : { username: data.userInput }),
            password: data.password,
        };
        

        try {
            const response = await api.post('/user/login', payload);
            console.log('response', response)
            const userData = response?.data?.data;
            console.log(userData,'userdata in login form')
            if (userData) {
                dispatch(authLogin(userData));
                
                reset(); // Reset form fields on success
               
            }

            

        } catch (error) {
            setError(error.message);
        }
    };

    const validateUserInput = (value) => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Email validation regex
        const isUsername = /^(?=.*[a-z])(?=.*[0-9_.]).{7,30}$/.test(value); // Username validation regex

        if (!isEmail && !isUsername) {
            return 'Please enter a valid username or email';
        }
        return true;
    };

    return (
        <div className='flex items-center justify-center w-full h-full '>
            <div className='mx-auto max-w-2xl bg-gray-50 rounded-xl p-10 border border-black/10 flex flex-col justify-evenly  h-[80%] items-center'>
                <h2 className='text-center text-2xl font-bold leading-tight text-black'>Sign In Your Account</h2>
                <form onSubmit={handleSubmit(LoginUser)} className='mt-8'>
                    <div className='space-y-5 text-center flex flex-col gap-4 items-center'>

                        {/* Single Input for Username or Email */}
                        <Input
                            label="Username or Email"
                            placeholder="Enter Your Username or Email"
                            type="text"
                            {...register('userInput', {
                                required: 'This field is required',
                                validate: validateUserInput,
                            })}
                        />
                        {errors.userInput && <p className='text-red-500'>{errors.userInput.message}</p>}

                        {/* Password Field */}
                        <Input
                            label='Password'
                            placeholder='Enter Your Password'
                            type='password'
                            {...register('password', {
                                required: { value: true, message: 'Password is required' },
                                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                maxLength: { value: 20, message: 'Password must be at most 20 characters' },
                                pattern: { value: /^\S*(?=\S{8,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/, message: 'Password must contain one uppercase, lowercase, and special symbol' },
                            })}
                        />

                        
                        { errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <Button
                            variant="filled"
                            type="submit"
                            className="rounded-full text-base"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing In...' : 'Sign In'}
                        </Button>
                    </div>
                </form>

                <div className='mt-8'>
                    <h2 className='text-lg'>Don't Have any Account?
                       <Link to={'/register'} >
                       <span className='m-4 text-blue-600 cursor-pointer font-semibold'>Register Please</span>
                
                       </Link>    </h2>
                </div>
                {error && <p className='text-red-600'>{error}</p>}
            </div>
        </div>
    );
}

export default LoginForm;
