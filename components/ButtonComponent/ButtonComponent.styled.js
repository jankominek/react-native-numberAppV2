import styled from 'styled-components/native';
import { Dimensions} from 'react-native';
import { colors } from '../../assets/colors/colorPallete';
const ScreenWidth = Dimensions.get("window").width;

export const TouchableOpacity = styled.TouchableOpacity`
    
`

export const ButtonView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: ${props => props.margin+"px"};
    width: ${ScreenWidth/3}px;
    border-radius: 10px;
    background: ${colors.mediumBlue};
`

export const ButtonText = styled.Text`
        
`