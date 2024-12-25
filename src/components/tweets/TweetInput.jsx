import React, { useState, useRef } from 'react';
import Avtar from './Avtar';
import FileInput from './filePicker';
import { Button } from '@material-tailwind/react';
import api from '../../helperFunction/axios';
function TweetInput() {
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const newTweet = e.target.value;
        if (newTweet.length > 250) {
            setError('Tweet must be 250 characters or less');
        } else {
            setError('');
        }
        setTweet(newTweet);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const files = fileInputRef.current.getFiles();
        console.log('files in tweet input', files);

        if (tweet.length > 250 || files.length > 2) {
            setError('Tweet must be 250 characters or less and maximum 2 files allowed');
            return;
        }
        if (tweet.length === 0) {
            setError('Please enter something.');
            return;
        }

        const formData = new FormData();
        formData.append('content', tweet);
        files.forEach(file => {
            formData.append('media', file);
        });

        try {
            const response = await api.post('/tweets/create-tweet', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzMzNDcyNTcyLCJleHAiOjE3MzM1NTg5NzJ9.2u6t-cKTyMR6MNELbrQlgwZr3Kq-0SbszeWL_ERer9c'
                }
            });
            console.log('res', response);

            if (response.statusText === 'OK') {
                console.log('Tweet submitted successfully');
                setTweet('');
                setError('');
                fileInputRef.current.clearFiles();
            } else {
                console.error('Failed to submit tweet');
            }
        } catch (err) {
            console.error('Error submitting tweet', err);
        }
    };

    return (
        <div className='flex gap-4 p-3 w-[90%] border rounded-md h-1/4 border-gray-300 mx-auto '>
            <div>
                <Avtar />
            </div>
            <div className='w-full'>
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder='What is happening?'
                        className='p-2 w-full resize-none border-none h-28 focus:outline-none overflow-hidden'
                        onChange={handleChange}
                        value={tweet}
                    />
                    {error && <p className='text-red-500'>{error}</p>}
                    <div className='flex items-center justify-between gap-3 border-b-2 w-full p-2 border-t-2'>
                        <FileInput ref={fileInputRef} />
                        <Button
                            variant="filled"
                            color='blue'
                            type='submit'
                            autoFocus={true}
                            className="rounded-full font-bold"
                            disabled={tweet.length > 250}
                        >
                            Post
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TweetInput;
