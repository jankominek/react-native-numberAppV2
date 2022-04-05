import React from "react";
import { ButtonText, ButtonView, TouchableOpacity } from "./ButtonComponent.styled";

export const ButtonComponent = (props) => {


    return(
        <TouchableOpacity onPress={props.onPress}>
            <ButtonView margin={props.margin || 0}>
                <ButtonText>{props.text}</ButtonText>
            </ButtonView>
        </TouchableOpacity>
    )
}