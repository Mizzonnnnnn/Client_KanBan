import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, AuthState } from '../redux/reducers/authReducer';

const Routers = () => {
    const auth: AuthState = useSelector(authSelector);
    const dispatch = useDispatch();
    // dispatch(set)
    console.log("Check: ", auth)
    return !auth.token ? <AuthRouter /> : <MainRouter />
};

export default Routers;