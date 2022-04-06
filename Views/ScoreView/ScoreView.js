import React from 'react'
import { Text } from 'react-native'
import { removeData } from '../../AsyncStorageDB/AsyncStorageDB'
import { List, ListComponentView, ScoreViewWrapper } from './ScoreView.styled'

const ScoreView = () => {

  const res = [
    {name: "1"},
    {name: "2"},
    {name: "3"}
  ]
  removeData("key")
  return (
    <>
      <ScoreViewWrapper>
        <List data={res} renderItem={({item})=> (
          <>
        <ListComponentView>{item.name}</ListComponentView> 
        {console.log(item.name)} 
        </>
        )}
        
        />
      </ScoreViewWrapper>
    </>
  )
}

export default ScoreView