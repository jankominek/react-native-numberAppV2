import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { colors } from '../../assets/colors/colorPallete';

export const ToastWrapper = styled(Animated.View)`
    width: ${windowWidth*0.9}px;
    min-height: 40px;
    display: flex;
    opacity: ${props => props.visible};
    justify-content: center;
    align-items: center;
    background: ${colors.darkBlue};
    border-radius: 15px;
    position: absolute;
    bottom: 80px;
`

export const ToastText = styled.Text`
    color: white;
`