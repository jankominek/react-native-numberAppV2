import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { colors } from '../../assets/colors/colorPallete';


export const ScoreViewWrapper = styled.View`
    height: ${windowHeight}px;
    width: ${windowWidth}px;
`
export const List = styled.FlatList`

`
export const ListComponentView = styled.View`
    
`