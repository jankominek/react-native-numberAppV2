import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../assets/colors/colorPallete";
const windowWidth = Dimensions.get('window').width;

export const InputTextField = styled.TextInput`
    width: ${windowWidth*0.6}px;
    height: 40px;
    border: 1px solid ${colors.darkBlue};
    border-radius: 10px;
    padding: 5px 10px;
`