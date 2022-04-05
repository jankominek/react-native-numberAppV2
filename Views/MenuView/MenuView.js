import React from 'react'
import { MenuViewComponentsContainer, MenuViewWrapper } from './MenuView.styled'
import {ButtonComponent} from '../../components/ButtonComponent/ButtonComponent';


export const MenuView = ({navigation}) => {
  return (
    <MenuViewWrapper>
        <MenuViewComponentsContainer>
            <ButtonComponent text="Login" onPress={() => navigation.navigate("login")}/>
            <ButtonComponent text="Register"/>
            <ButtonComponent text="Table score"/>
        </MenuViewComponentsContainer>
    </MenuViewWrapper>
  )
}

export default MenuView