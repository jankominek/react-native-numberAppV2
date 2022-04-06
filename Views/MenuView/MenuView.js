import React, { useEffect, useState } from 'react'
import { MenuViewComponentsContainer, MenuViewWrapper } from './MenuView.styled'
import {ButtonComponent} from '../../components/ButtonComponent/ButtonComponent';
import { getData, removeData, storeData } from '../../AsyncStorageDB/AsyncStorageDB';
import { useIsFocused } from '@react-navigation/native'


export const MenuView = ({navigation}) => {

  const [isLogged, setIsLogged] = useState(false);
  const isFocused = useIsFocused();
  const [user, setUser] = useState("");

  useEffect(()=>{
    checkIfUserIsLoggedIn();
  }, [isFocused])

  const checkIfUserIsLoggedIn = () => {
    getData("current").then((res)=>{
        res ? setIsLogged(true) : setIsLogged(false);
        res && setUser(res)
    })
  }

  const logOut = () => {
      removeData("current");
      setIsLogged(false);
  }

  const navigateToGame = () => {
    if(isLogged){
      user && navigation.navigate("game", {user: user});
    }
  }

  return (
    <MenuViewWrapper>
        <MenuViewComponentsContainer>
            <ButtonComponent text="Login" margin={0} onPress={() => navigation.navigate("login")}/>
            <ButtonComponent text="Register" margin={20} onPress={() => navigation.navigate("register")}/>
            <ButtonComponent text="Play" margin={20} onPress={navigateToGame}/>
            <ButtonComponent text="Table score" margin={0} onPress={() => navigation.navigate("score")}/>
            {isLogged && <ButtonComponent text="Log out" margin={20} onPress={() => logOut()}/>}
        </MenuViewComponentsContainer>
    </MenuViewWrapper>
  )
}

export default MenuView