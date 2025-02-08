import React, { useState, useRef ,forwardRef} from 'react';
import Avtar from './Avtar';
import FileInput from './FileInput'
import { Button } from '@material-tailwind/react';
import api from '../../helperFunction/axios';
import { useSelector,useDispatch } from 'react-redux';
import { addTweet } from '../../Features/tweetSlice';
function TweetInput() {
    const loggedInUser = useSelector((state)=>state?.auth?.userData)
    const dispatch = useDispatch()
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
            console.log(files , 'tweet files')
        });

        try {
            const response = await api.post('/tweets/create-tweet', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                   
                }
            });
            console.log(' tweet res', response?.data?.data);
            const tweet = response?.data?.data?.resTweet[0]
           if(response?.data?.statusCode === 200){
            setTweet('')
            setError('')
            dispatch(addTweet(tweet))
           }else{
            setError('error in submit tweet')
            setTweet('')
           }
        } catch (err) {
            console.error('Error submitting tweet', err);
            setTweet('')
        }
    };

    return (
        <div className='flex gap-4 p-2 max-w-[95%] mb-2  border rounded-md h-1/4 border-gray-300 mx-auto '>
            <div>
                <Avtar fullName={loggedInUser?.fullName} avtarURL={loggedInUser?.avtar?.url}/>
            </div>
            <div className='w-[85%]'>
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
                            size='md'
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

export default forwardRef(TweetInput);
