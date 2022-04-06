import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { getAllData, importData, removeData } from '../../AsyncStorageDB/AsyncStorageDB'
import { ItemList } from './ItemList'
import { List, ListComponentView, ScoreViewWrapper, TextWrapper, Title } from './ScoreView.styled'

const ScoreView = () => {

  const [store, setStore] = useState([]);

  useEffect(()=>{
      importData().then( (data) => {
          setStore(data);
      })
  }, [])
  const prepareData = () => {

  }
  return (
    <>
      <ScoreViewWrapper>
        <Title>Top 10 users</Title>
        <ItemList name="Name" score="Score"/>
        <List data={store} renderItem={({item})=> <ItemList name={item.login} score={item.generalScore}/>}

        />
      </ScoreViewWrapper>
    </>
  )
}

export default ScoreView