import { useDispatch } from "react-redux";
import { useNavigate ,useLocation,} from "react-router-dom";
import { addProfile } from "../Features/profileSlice";
import api from "../helperFunction/axios";

const useFetchUserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()

    const fetchUserProfile = async (username, shouldNavigate = true) => {
        try {
            const response = await api.get(`/user/c/${username}`);
            const data = response.data.data;

            console.log('response',response)
            if (response) {
                dispatch(addProfile(data)); // Update Redux store
            }
            if (shouldNavigate) {
                const currentPath = location.pathname
                const targetPath = `/profile/${username}`
                if(currentPath !== targetPath){
                    navigate(`/profile/${username}`)
                }
                
            }
        } catch (error) {
            console.error("Error in fetching user profile", error);
        }
    };

    return fetchUserProfile;
};

export default useFetchUserProfile;
