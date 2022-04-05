import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react'
import { Animated, Text, StyleSheet, Dimensions, View } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { colors } from '../../assets/colors/colorPallete';

const Toast = forwardRef((props, ref) => {

    const [toastText, setToastText] = useState("");

    let progress = useRef(new Animated.Value(0)).current;
    
    // useEffect(()=>{
    //     Animated.sequence([
    //         Animated.timing(progress, {toValue: 1, useNativeDriver: true, duration: 500}),
    //         Animated.timing(progress, {toValue: 0, useNativeDriver: true, duration: 1000, delay: 3000})
    //     ]).start();
    // }, [props])

    useImperativeHandle(ref, () => ({        
        startAnimation(textValue){
            console.log("TEXT : ", textValue)
            setToastText(textValue);
            Animated.sequence([
                Animated.timing(progress, {toValue: 1, useNativeDriver: true, duration: 500}),
                Animated.timing(progress, {toValue: 0, useNativeDriver: true, duration: 1000, delay: 3000})
            ]).start();
        }
      }));

  

  return (
    <Animated.View
        style={[
          styles.wrapper,
          {
            opacity: progress
          }
        ]}
      >
        <Text style={styles.textStyle}>{toastText}</Text>
      </Animated.View>
  )
});

const styles = StyleSheet.create({
    wrapper : {
        width: windowWidth*0.9,
        height: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkBlue,
        borderRadius: 20,
        position: "absolute",
        bottom: 50
    },
    textStyle : {
        color: "white"
    }
})

export default Toast