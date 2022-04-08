import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { colors } from '../../assets/colors/colorPallete';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { InputTextComponent } from '../../components/InputTextComponent/InputTextComponent';
import { ButtonView } from '../../components/ButtonComponent/ButtonComponent.styled';

export const GameViewWrapper = styled.View`
    height: ${(props) => windowHeight - props.header}px;
    width: ${windowWidth}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.lightBlue};
`
export const GameViewCounter = styled.Text`
    font-size: 25px;
    color: ${colors.darkBlue};
    margin: 30px 0px 80px 0px;
`

export const GameViewTextGeneralScore = styled(GameViewCounter)`
    font-size: 25px;
    color: ${colors.darkBlue};
    margin: 0px 0px 0px 0px;
`