import { Button, message } from 'antd';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../firebase/firebaseConfig';
import { addAuth } from '../../../redux/reducers/authReducer';
import { localDataNames } from '../../../constants/appInfos';
import { googleLoginService } from '../../../services/authService';

interface GoogleLoginData {
    name: string | null,
    email: string | null
}

interface Props {
    isRemember?: boolean
}
const provider = new GoogleAuthProvider();

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.addScope('email');   // Email
provider.addScope('profile'); // Tên, ảnh đại diện
provider.setCustomParameters({
    login_hint: 'select_account'
});

const SocialLogin = (props: Props) => {
    const { isRemember } = props;
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleGoogleLogin = async () => {
        setIsLoading(true)

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user) {
                const data: GoogleLoginData = {
                    name: user.displayName,
                    email: user.email,
                }

                const res: any = await googleLoginService(data);
                try {

                    message.success(res.message)
                    if (res.data) {
                        dispatch(addAuth(res.data))
                        localStorage.setItem(localDataNames.authData, JSON.stringify(res.data))
                    }

                } catch (error: any) {
                    console.log(error)
                    message.error("Lỗi đăng nhập với google")
                }

            }
        } catch (error: any) {
            console.error('Google login error:', error);

            if (error.code === 'auth/popup-closed-by-user') {
                message.warning('Bạn đã đóng cửa sổ đăng nhập.');
            } else {
                message.error(error.message || 'Lỗi khi đăng nhập bằng Google');
            }
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