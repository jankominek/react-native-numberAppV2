import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export const LoginWrapper = styled.View`
    background: white;
    height: ${ScreenHeight}px;
    width: ${ScreenWidth}px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FlexColWrapper = styled.View`
    height: ${ScreenHeight/3}px;
    width: ${ScreenWidth}px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
` 