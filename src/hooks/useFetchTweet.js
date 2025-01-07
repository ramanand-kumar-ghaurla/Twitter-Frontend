import { useDispatch } from "react-redux";
import { useNavigate ,useLocation,} from "react-router-dom";
import { addTweet } from "../Features/OneTweet";
import api from "../helperFunction/axios";

const useFetchTweet = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()

    const fetchTweet = async (tweetId, shouldNavigate = true) => {
        try {
            const response = await api.get(`/tweets/tweet/${tweetId}`);
            const data = response.data.data;

            console.log('response',response)
            if (response) {
                dispatch(addTweet(data)); // Update Redux store
            }
            if (shouldNavigate) {
                const currentPath = location.pathname
                const targetPath = `/post/${tweetId}`
                if(currentPath !== targetPath){
                    navigate(`/post/${tweetId}`)
                }
                
            }
        } catch (error) {
            console.error("Error in fetching tweet", error);
        }
    };

    return fetchTweet;
};

export default useFetchTweet;
