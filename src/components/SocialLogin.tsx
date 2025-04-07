import { Button, message } from 'antd';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
import handleAPI from '../apis/handleAPI';
import { error } from 'console';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    login_hint: 'select_account'
});

const SocialLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleGoogleLogin = async () => {
        setIsLoading(true)
        try {
            const result = await signInWithPopup(auth, provider);
            if (result) {
                const user = result.user;

                if (user) {
                    const data: any = {
                        name: user.displayName,
                        email: user.email,
                    }
                    const api = '/auth/google-login'
                    const res: any = await handleAPI(api, data, 'post')
                    message.success(res.message)
                }

            } else {
                console.log("Cannot login with google")
            }
        } catch (error: any) {
            console.log("Error socialLogin: ", error)
            message.error(error.message)

        } finally {
            setIsLoading(false)
        }
    };

    return (
        <Button
            onClick={handleGoogleLogin}
            loading={isLoading}
            style={{
                width: "100%"
            }}
            size='large'
            icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />}>
            Sign up with Google
        </Button>
    );
};

export default SocialLogin;