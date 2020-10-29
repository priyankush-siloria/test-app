import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './styles';

import HomeScreen from './views/HomeScreen';
import BookingScreen from './views/BookingScreen';
import HelpdeskScreen from './views/HelpdeskScreen';
import MessageScreen from './views/MessageScreen';
import ProfileScreen from './views/ProfileScreen';
import { Dimensions, Image, View } from 'react-native';

import booking from './assets/icons/booking.png';
import bookingA from './assets/icons/bookingA.png';
import helpdesk from './assets/icons/helpdesk.png';
import helpdeskA from './assets/icons/helpdeskA.png';
import home from './assets/icons/home.png';
import homeA from './assets/icons/homeA.png';
import message from './assets/icons/message.png';
import messageA from './assets/icons/messageA.png';
import profile from './assets/icons/profile.png';
import profileA from './assets/icons/profileA.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator  initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Message" component={MessageScreen} />
            <Stack.Screen name="Booking" component={BookingScreen} />
            <Stack.Screen name="Helpdesk" component={HelpdeskScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    );
}

function App() {
    return (
        <View style={{flex:1,backgroundColor:'#E4F0FA'}}>
        <NavigationContainer>
            <Tab.Navigator  initialRouteName="Home"
                            tabBarOptions={{
                                activeTintColor: '#43AADB',
                                inactiveTintColor: '#5D6C87',
                                style:{
                                    backgroundColor:'#E4F0FA',
                                    borderTopWidth: 3,
                                    borderLeftWidth: 1,
                                    borderLeftColor:'#E4F0FA',
                                    borderRightColor:'#E4F0FA',
                                    borderRightWidth: 1,
                                    borderTopColor:'#fff',
                                    borderTopLeftRadius: 30,
                                    borderTopRightRadius: 30,
                                    height: Dimensions.get('window').height/10
                                },
                                labelStyle: {fontSize: 10,fontFamily:'OpenSans-Regular'},
                                tabStyle:{paddingBottom: 10,paddingTop: 20,backgroundColor:'transparent'}
                            }}>
                <Tab.Screen name="Home" component={HomeScreen}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ focused }) => (
                                    <Image source={focused ? homeA : home} style={styles.footerIcon} />
                                )
                            }}/>
                <Tab.Screen name="Message" component={MessageScreen}
                            options={{
                                tabBarLabel: 'Messages',
                                tabBarIcon: ({ focused }) => (
                                    <Image source={focused ? messageA : message} style={styles.footerIcon} />
                                )
                            }}/>
                <Tab.Screen name="Booking" component={BookingScreen}
                            options={{
                                tabBarLabel: 'Booking',
                                tabBarIcon: ({ focused }) => (
                                    <Image source={focused ? bookingA : booking} style={styles.footerIcon} />
                                )
                            }}/>
                <Tab.Screen name="Helpdesk" component={HelpdeskScreen}
                            options={{
                                tabBarLabel: 'Helpdesk',
                                tabBarIcon: ({ focused }) => (
                                    <Image source={focused ? helpdeskA : helpdesk} style={styles.footerIcon} />
                                )
                            }}/>
                <Tab.Screen name="Profile" component={ProfileScreen}
                            options={{
                                tabBarLabel: 'Profile',
                                tabBarIcon: ({ focused }) => (
                                    <Image source={focused ? profileA : profile} style={styles.footerIcon} />
                                )
                            }}/>
                
            </Tab.Navigator>
        </NavigationContainer>
        </View>
    );
}
export default App;