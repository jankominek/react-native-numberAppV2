import React, { useEffect, useRef, useState } from 'react'
import { GameViewCounter, GameViewInput, GameViewTextGeneralScore, GameViewWrapper } from './GameView.styled'
import { Alert, Text } from 'react-native'
import { InputTextComponent } from '../../components/InputTextComponent/InputTextComponent'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import Toast from '../../components/Toast/Toast'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getData, storeData } from '../../AsyncStorageDB/AsyncStorageDB'
const GameView = ({navigation, route}) => {

    const [generalScore, setGeneralScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const [textInput, setTextInput] = useState("");
    const [randomVal, setRandomVal] = useState(0);
    const [toastText, setToastText] = useState("");
    const [isShowing, setIsShowing] = useState(false);
    const [user, setUser] = useState("");

    useEffect(()=>{
        setRandomVal(Math.floor(Math.random() * 21))
        route.params?.user && setUser(route.params.user);
    }, [])

    useEffect(()=>{
        getData(user).then( (data) => {
            setGeneralScore(data.generalScore)
        })
    }, [user])

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
    
    const showWonAlert = (times, points) => {
        Alert.alert("You Won!", "You won in "+ times +" times :)\n And you got "+ points +" points",
            [{text: "Close"}]
        )
    }
    const updateUserStore = (points) => {
        getData(user).then((data)=> {
            const userObject =data;
            userObject.generalScore = Number(userObject.generalScore) + points;
            storeData(user, userObject);
        });
    }

    const onCheckNumberButtonClick = () => {
        if(Number(textInput)>=0 && Number(textInput) <= 20 && textInput){
            setCounter(counter + 1);
            const actualCounter = counter + 1;
            if(Number(textInput) == randomVal){
                if(actualCounter === 1){
                    setGeneralScore(generalScore + 5);
                    updateUserStore(5)
                    showWonAlert(actualCounter, 5);
                    setCounter(0);
                }else if(actualCounter >= 2 && actualCounter <= 4){
                    setGeneralScore(generalScore + 3);
                    showWonAlert(actualCounter, 3);
                    updateUserStore(3)
                    setCounter(0);
                }else if(actualCounter >=5 && actualCounter <=6){
                    setGeneralScore(generalScore + 2);
                    updateUserStore(2)
                    showWonAlert(actualCounter, 2);
                    setCounter(0);
                }else if(actualCounter >= 7 && actualCounter <= 10){
                    setGeneralScore(generalScore + 1);
                    updateUserStore(1)
                    showWonAlert(actualCounter, 1);
                    setCounter(0);
                }
                setRandomVal(Math.floor(Math.random() * 21))
            }else if(actualCounter > 10){
                Alert.alert("You Lose", "Try again and do not cry :)",
                    [{text: "Close"}]
                );
                setCounter(0);
                setTextInput("");
                setRandomVal(Math.floor(Math.random() * 21))
            }else if(Number(textInput) > randomVal){
                showToast("Twoja liczba jest za duża!");
            }else if(Number(textInput) < randomVal){ 
                showToast("Twoja liczba jest za mała!");
            }
        }else if((Number(textInput)< 0 || Number(textInput) > 20) && textInput){
            showToast("Twoja liczba nie mieści się w przedziale 0 - 20");
        }else if(!textInput){
            showToast("Nie wpisano żadnej liczby");
        }
        setToastText("");

    }
    const onNewGameButtonClick = () => {
        setRandomVal(Math.floor(Math.random() * 21));
        setCounter(0);
        
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