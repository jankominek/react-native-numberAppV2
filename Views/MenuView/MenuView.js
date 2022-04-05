import React from 'react'
import { MenuViewComponentsContainer, MenuViewWrapper } from './MenuView.styled'
import {ButtonComponent} from '../../components/ButtonComponent/ButtonComponent';

export const MenuView = () => {
  return (
    <MenuViewWrapper>
        <MenuViewComponentsContainer>
            <ButtonComponent text="Login"/>
            <ButtonComponent text="Register"/>
            <ButtonComponent text="Table score"/>
        </MenuViewComponentsContainer>
    </MenuViewWrapper>
  )
}

export default MenuView