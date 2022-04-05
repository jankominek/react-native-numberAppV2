import React from "react";
import { InputTextField } from "./InputTextComponent.styled";

export const InputTextComponent = (props) => {

    return(
        <>
            <InputTextField onChangeText={props.onChangeText}
                            value={props.value}
                            />
        </>
    )
}