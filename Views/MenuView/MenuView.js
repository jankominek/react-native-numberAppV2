import React, { useEffect } from 'react'
import { MenuViewComponentsContainer, MenuViewWrapper } from './MenuView.styled'
import {ButtonComponent} from '../../components/ButtonComponent/ButtonComponent';
import { storeData } from '../../AsyncStorageDB/AsyncStorageDB';


export const MenuView = ({navigation}) => {

  useEffect(()=>{
    
      // storeData("key" , {name: "mynewKey"});
  }, [])
  return (
    <MenuViewWrapper>
        <MenuViewComponentsContainer>
            <ButtonComponent text="Login" margin={0} onPress={() => navigation.navigate("login")}/>
            <ButtonComponent text="Register" margin={20} onPress={() => navigation.navigate("register")}/>
            <ButtonComponent text="Play" margin={20} onPress={() => navigation.navigate("game")}/>
            <ButtonComponent text="Table score" margin={0} onPress={() => navigation.navigate("score")}/>
        </MenuViewComponentsContainer>
    </MenuViewWrapper>
  )
}

export default MenuView