import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { colors } from '../../assets/colors/colorPallete';

export const MenuViewWrapper = styled.View`
    height: ${windowHeight}px;
    width: ${windowWidth}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.lightBlue};
`

export const MenuViewComponentsContainer = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight/3}px;
    justify-content: space-evenly;
    align-items: center;
`