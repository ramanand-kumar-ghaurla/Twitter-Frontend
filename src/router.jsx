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
    EditPage,
    ChangePasswordPage,
    ChangeDtailsPage,
    ChangeAvtarPage,
    ChangeCoverPage
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
                    <Route path="error" element = {<ErrorPage/>}/>
                    <Route path='edit-account-details' element={<EditPage/>}>
                        <Route path="change-Pasword" element = {<ChangePasswordPage/>} />
                        <Route path="change-user-details" element={ <ChangeDtailsPage/>} />
                        <Route path="change-profile-picture" element={<ChangeAvtarPage/>} />
                        <Route path="change-cover-image" element={<ChangeCoverPage/>} />
                    </Route>
                </Route>
            </Route>
        </>
    )
);
export default router