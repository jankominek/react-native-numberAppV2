import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export const StartViewWrapper = styled.View`
    height: ${ScreenHeight}px;
    width: ${ScreenWidth}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    align-items: center;
`

export const StartViewText = styled.Text`
    font-size: 30px;
    color: #54A4FF;
`

export const ViewAnimationContent = styled.View`
    height: ${ScreenHeight/3}px;
    width: ${ScreenWidth}px;
`