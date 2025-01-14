import { createBrowserRouter,Route ,createRoutesFromElements} from "react-router-dom";
import App from "./App";
import { Navigate } from "react-router-dom";
import { AuthLayout } from "./components";
import ProtectedRoute from "./components/Layouts/Protected";

import {
    HomePage,
    PageLayout,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    TweetPage,
    ErrorPage,
    EditPage
} from "./Pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegistrationPage />} />
            </Route>
            <Route path="/" element={<ProtectedRoute /> } >
                <Route path="/" element={<App />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="profile/:username" element={<ProfilePage />} />
                    <Route path="post/:tweetId" element={<TweetPage />} />
                    <Route path="/error" element = {<ErrorPage/>}/>
                    <Route path='/edit-account-details' element={<EditPage/>}/>
                </Route>
            </Route>
        </>
    )
);
export default router