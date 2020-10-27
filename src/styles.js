import { Dimensions } from "react-native"

const {height,width} = Dimensions.get('window');

export const styles = {
    footerIcon:{
        width: width/15,
        height: undefined,
        aspectRatio:1
    }
}