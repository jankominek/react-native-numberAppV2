import React, { useRef, useState } from "react"
import {LoginWrapper, FlexColWrapper} from './LoginView.styled';
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

import { InputTextComponent } from "../../components/InputTextComponent/InputTextComponent";
import { getData, storeData } from "../../AsyncStorageDB/AsyncStorageDB";
import Toast from "../../components/Toast/Toast";


export const LoginView = () => {   
    const [credentials, setCredentials] = useState({login: "", password: ""});

    const toast = useRef(null);
    const showToast = (textValue) => toast.current.startAnimation(textValue);

    const onChangeLogin = (text) => {
        console.log(text)
        setCredentials({
            ...credentials,
            login : text
        })
        
    }
    const onChangePassword = (text) => {
        console.log(text)
        setCredentials({
            ...credentials,
            password : text
        })
        
    }

    const onChangeFunc = (e) => {
        console.log(e);
    }

    const checkUserCredentials = () => {
        const login = credentials.login;
        const password = credentials.password;
        if(login && password){
            getData(login).then( (data) => {
                if(data?.login == null){
                    showToast("User does not exists !");
                }else if(data.login == login && data.password == password){
                    showToast("Successfully logged in");
                    storeData("current", data.login);
                }else{  
                    showToast("Wrong login or password");   
                }
            })
        }
    }

    return(
        <LoginWrapper>
            <FlexColWrapper>
                <InputTextComponent onChangeText={onChangeLogin}
                                    value={credentials.login}
                                    placeholder="Login..."
                                    />
                <InputTextComponent value={credentials.password} 
                                    onChangeText={onChangePassword}
                                    placeholder="Password..."
                                    />
                <ButtonComponent text="Login" onPress={checkUserCredentials}/>
            </FlexColWrapper>
            <Toast toastText={""} ref={toast}/>
        </LoginWrapper>
    )
}