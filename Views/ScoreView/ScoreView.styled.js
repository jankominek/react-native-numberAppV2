import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { colors } from '../../assets/colors/colorPallete';


export const ScoreViewWrapper = styled.View`
    height: ${windowHeight}px;
    width: ${windowWidth}px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const List = styled.FlatList`

`
export const ListComponentView = styled.View`
    width: ${windowWidth}px;
    display: flex;
    flex-direction: row;
`
export const TextWrapper = styled.View`
   
    width: ${windowWidth/2}px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0px;
`