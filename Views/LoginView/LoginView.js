import React, { useEffect, useRef, useState } from "react"
import {LoginWrapper, FlexColWrapper} from './LoginView.styled';
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

import { InputTextComponent } from "../../components/InputTextComponent/InputTextComponent";
import { getAllDataToDisplay, getData, storeData } from "../../AsyncStorageDB/AsyncStorageDB";
import Toast from "../../components/Toast/Toast";
import { useHeaderHeight } from '@react-navigation/elements';

export const LoginView = ({navigation}) => {   
    const [credentials, setCredentials] = useState({login: "", password: ""});
    const headerHeight = useHeaderHeight();
    const toast = useRef(null);
    const showToast = (textValue) => toast.current.startAnimation(textValue);

    useEffect(()=>{
        getAllDataToDisplay();
    }, [])

    const onChangeLogin = (text) => {
        setCredentials({
            ...credentials,
            login : text
        })
        
    }
    const onChangePassword = (text) => {
        setCredentials({
            ...credentials,
            password : text
        })
        
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
                    setTimeout(()=>{
                        navigation.navigate("menu");
                    }, 2000)
                }else{  
                    showToast("Wrong login or password");   
                }
            })
        }
    }

    return(
        headerHeight && <LoginWrapper header={headerHeight}>
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