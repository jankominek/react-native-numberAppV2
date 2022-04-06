import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
        // saving error
      }
}

export const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}

export const removeData = async(key) => {
  try {
      await AsyncStorage.removeItem(key);
      return true;
  }
  catch(exception) {
      return false;
  }
}
export const importData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    const resArray = result.map( (arrObj) => {
      return JSON.parse(arrObj[1])
    }).filter((e)=> typeof e !== "string");
    return resArray;
  } catch (error) {
    console.error(error)
  }
}

export const getAllDataToDisplay = async () => {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          stores.map((result, i, store) => {
            console.log({ [store[i][0]]: store[i][1] });
            return true;
          });
        });
      });
}