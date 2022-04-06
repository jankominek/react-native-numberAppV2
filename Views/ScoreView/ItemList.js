import React from 'react'
import { Text } from 'react-native'
import { ListComponentView, TextWrapper } from './ScoreView.styled'

export const ItemList = (props) => {
  return (
    <ListComponentView>
          <TextWrapper>
            <Text>{props.name}</Text> 
          </TextWrapper>
          <TextWrapper>
            <Text>{props.score}</Text> 
          </TextWrapper>
           
    </ListComponentView>
  )
}
