import { StartViewText, StartViewWrapper, ViewAnimationContent } from "./StartView.styled"
import LottieView from 'lottie-react-native';
import { useEffect, useState } from "react";

export const StartView = ({navigation}) => {

    const [isShowing, setIsShowing] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsShowing(false);
            navigation.navigate("menu")
        }, 4200)
    }, [])



    return(
        <StartViewWrapper>
            <StartViewText>NUMBERS GAME</StartViewText>
            <ViewAnimationContent>
            <LottieView source={require('../../assets/startViewAnimation.json')} autoPlay={isShowing} loop={isShowing}/>
            </ViewAnimationContent>
        </StartViewWrapper>
    )
}