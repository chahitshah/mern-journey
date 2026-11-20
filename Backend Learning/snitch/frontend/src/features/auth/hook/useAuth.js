import { useDispatch} from "react-redux";
import { setUser } from "../state/auth.slice.js";
import { register, login } from "../services/auth.api.js";

export const useAuth = () =>{
    const dispatch = useDispatch();
    async function handleRegister({email,password,fullname,contact,isSeller=false})
    {
        const data = await register({email,password,fullname,contact,isSeller})

        dispatch(setUser(data.user))
    }

    async function handleLogin({email,contact,password})
    {
        const data = await login({email,contact,password})

        dispatch(setUser(data.user))
    }

    return {handleRegister,handleLogin}


}