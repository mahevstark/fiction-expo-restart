import * as Updates from 'expo-updates';
import { Platform } from 'react-native';

const Restart = ()=>{
    if(Platform.OS=="web")
    {
        window.location.reload()
    }
    else{
        Updates.reloadAsync();
    }
}
export { Restart }