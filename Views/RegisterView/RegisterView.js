import React, { useEffect, useRef, useState } from "react"
import { getData, storeData } from "../../AsyncStorageDB/AsyncStorageDB";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { InputTextComponent } from "../../components/InputTextComponent/InputTextComponent";
import { RegisterWrapper, FlexColWrapper} from "./RegisterView.styled";
import Toast from "../../components/Toast/Toast";
import { useHeaderHeight } from '@react-navigation/elements';

export const RegisterView = ({navigation}) => {   
    const [credentials, setCredentials] = useState({login: "", password: ""});

    
    const headerHeight = useHeaderHeight();
    const toast = useRef(null);
    const showToast = (textValue) => toast.current.startAnimation(textValue);

    useEffect(()=>{
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

    const checkCredentials = () => {
        if(credentials.login && credentials.password){
            getData(credentials.login).then( (data) => {
                if(data?.login == null){
                    const userData = {
                        login : credentials.login,
                        password: credentials.password,
                        generalScore : 0
                    }
                        storeData(credentials.login, userData);
                        showToast("Successfully registered !")
                        setTimeout(() => {
                            navigation.navigate("menu");
                        }, 3000)
                }else{
                    showToast("User already exists !")
                }
            })
            
        }
    }

    return(
        headerHeight && <RegisterWrapper header={headerHeight}>
            <FlexColWrapper>
                <InputTextComponent onChangeText={onChangeLogin}
                                    value={credentials.login}
                                    placeholder="login..."
                                    />
                <InputTextComponent value={credentials.password} 
                                    onChangeText={onChangePassword}
                                    placeholder="password..."
                                    />
                <ButtonComponent text="register" onPress={checkCredentials}/>
            </FlexColWrapper>
            <Toast toastText={""} ref={toast}/>
        </RegisterWrapper>
    )
}