import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {styles} from './styles';

export default class BookingScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Booking Screen</Text>
            </View>
        );
    }
}