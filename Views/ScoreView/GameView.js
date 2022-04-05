import React, { useEffect, useRef, useState } from 'react'
import { GameViewCounter, GameViewInput, GameViewTextGeneralScore, GameViewWrapper } from './GameView.styled'
import { Text } from 'react-native'
import { InputTextComponent } from '../../components/InputTextComponent/InputTextComponent'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import Toast from '../../components/Toast/Toast'
import { SafeAreaView } from 'react-native-safe-area-context'
const GameView = () => {

    const [generalScore, setGeneralScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const [textInput, setTextInput] = useState("");
    const [randomVal, setRandomVal] = useState(0);
    const [toastText, setToastText] = useState("");
    const [isShowing, setIsShowing] = useState(false);
    useEffect(()=>{
        setRandomVal(Math.floor(Math.random() * 21))
    }, [])

    const toast = useRef(null);
    const showToast = (textValue) => toast.current.startAnimation(textValue);

    console.log("Random val : ", randomVal);
    const onlyNumberValidation = (text) => {
        const regex = new RegExp("^[0-9]*$");
        return regex.test(text);
    }

    const onChangeInput = (textData) => {
        onlyNumberValidation(textData) && setTextInput(textData);
    }
    console.log("toast text : ", toastText)
    const onCheckNumberButtonClick = () => {
        if(Number(textInput)>=0 && Number(textInput) <= 20 && textInput){
            setCounter(counter + 1);
            if(Number(textInput) == randomVal){
                if(counter === 1){
                    setGeneralScore(generalScore + 5);
                }else if(counter >= 2 && counter <= 4){
                    setGeneralScore(generalScore + 3);
                }else if(counter >=5 && counter <=6){
                    setGeneralScore(generalScore + 2);
                }else if(counter >= 7 && counter <= 10){
                    setGeneralScore(generalScore + 1);
                }else if(counter > 10){
                    
                }
                
            }else if(Number(textInput) > randomVal && isShowing){
                setToastText("Twoja liczba jest za duża!")
                showToast("Twoja liczba jest za duża!");
            }else if(Number(textInput) < randomVal && isShowing){
                setToastText
                showToast("Twoja liczba jest za mała!");
            }
        }
        setToastText("");

    }
    const onNewGameButtonClick = () => {
        // setRandomVal(Math.floor(Math.random() * 21));
        // setCounter(0);
        
    }

  return (
      <SafeAreaView>
        <GameViewWrapper>
            <GameViewTextGeneralScore>General score : {generalScore}</GameViewTextGeneralScore>
            <GameViewCounter>Number of shots : {counter}</GameViewCounter>
            <InputTextComponent value={textInput} onChangeText={onChangeInput}/>
            <ButtonComponent text="check number" margin={25} onPress={onCheckNumberButtonClick}/>
            <ButtonComponent text="New game" margin={50} onPress={onNewGameButtonClick}/>
            <Toast toastText={toastText} ref={toast}/>
        </GameViewWrapper>
        </SafeAreaView>
  )
}

export default GameView