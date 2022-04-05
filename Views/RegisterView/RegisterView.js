import React, { useState } from "react"
import {LoginWrapper, FlexColWrapper} from './LoginView.styled';
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

import { InputTextComponent } from "../../components/InputTextComponent/InputTextComponent";


export const RegisterView = () => {   
    const [credentials, setCredentials] = useState({login: "", password: ""});

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
    return(
        <LoginWrapper>
            <FlexColWrapper>
                <InputTextComponent onChangeText={onChangeLogin}
                                    value={credentials.login}
                                    />
                <InputTextComponent value={credentials.password} 
                                    onChangeText={onChangePassword}
                                    
                                    />
                <ButtonComponent />
            </FlexColWrapper>
        </LoginWrapper>
    )
}