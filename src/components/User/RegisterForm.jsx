import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import Input from './Input';
import { login as authLogin } from '../../Features/authSclice';
import api from '../../helperFunction/axios';

function RegisterForm() {
    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors, isSubmitting, touchedFields } } = useForm({
        mode: 'onTouched', // Only validate when fields are touched
        defaultValues: {
            username: '',
            email: '',
            fullName: '',
            password: '',
        },
    });

    const [error, setError] = useState('');

    const registerUser = async (data) => {
        try {
            const response = await api.postForm('/user/register', data);
            const userData = response.data.data;

            console.log(' form response ', response )
            if (userData) {
                dispatch(authLogin(userData));
                reset(); // Reset form fields on success
               
            }
        } catch (error) {
            const serverError = error.response?.data?.message || error.message;
            setError(serverError);
        }
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-2xl bg-gray-50 rounded-xl p-10 border border-black/10 flex flex-col items-center'>
                <h2 className='text-center text-2xl font-bold leading-tight text-black'>Create An Account</h2>
                <form onSubmit={handleSubmit(registerUser)} className='mt-8'>
                    <div className='space-y-5 text-center flex flex-col items-center'>
                        <Input
                            label='Username'
                            placeholder='Enter Your Username'
                            type='text'
                            {...register('username', {
                                required: { value: true, message: 'Username is required' },
                                minLength: { value: 7, message: 'Username must be at least 7 characters' },
                                pattern: { value: /^(?=.*[a-z])(?=.*[0-9_.]).{7,30}$/, message: "Username must contain only lowercase, alphanumeric, and special characters '_' and '.'" },
                            })}
                        />
                        {touchedFields.username && errors.username && <p className='text-red-500'>{errors.username.message}</p>}

                        <Input
                            label='Email'
                            placeholder='Enter Your Email Address'
                            type='email'
                            {...register('email', { required: { value: true, message: 'Email is required' } })}
                        />
                        
                        {touchedFields.email && errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                        <Input
                            label='Fullname'
                            placeholder='Enter Your Fullname'
                            type='text'
                            {...register('fullName', {
                                required: { value: true, message: 'Fullname is required' },
                                maxLength: { value: 25, message: 'Fullname must be at most 25 characters' },
                            })}
                        />
                        {touchedFields.fullName && errors.fullName && <p className='text-red-500'>{errors.fullName.message}</p>}

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

                        
                        {touchedFields.password && errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                       
                        <Button
                            variant="filled"
                            autoFocus
                            type="submit"
                            className="rounded-full text-base"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Register'}
                        </Button>
                    </div>
                </form>

                <div className='mt-8'>
                    <h2 className='text-lg'>Already have an Account?
                        <span className='m-4 text-blue-600 font-semibold'>Login Please</span>
                    </h2>
                </div>
                {error && <p className='text-red-600'>{error}</p>}
            </div>
        </div>
    );
}

export default RegisterForm;
