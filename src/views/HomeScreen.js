import * as React from 'react';
import {
    View,
    Text,
    Image,
    Alert
} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';

import axe from '../assets/icons/axe.png';
import tap from '../assets/icons/tap.png'
import sewing from '../assets/icons/sewing.png'
import electrician from '../assets/icons/electrician.png'
import farmer from '../assets/icons/farmer.png'
import cleaning from '../assets/icons/cleaning.png'
import salon from '../assets/icons/salon.png'
import haircut from '../assets/icons/haircut.png'
import painter from '../assets/icons/painter.png'
import massage from '../assets/icons/massage.png'
import Pest  from '../assets/icons/pest.png'

const options = [
    {icon: axe, text: "Carpentry"},
    {icon: tap, text: "Plumbers"},
    {icon: sewing, text: "Tailoring"},
    {icon: electrician, text: "Electricians"},
    {icon: farmer, text: "Farmer"},
    {icon: cleaning, text: "Cleaning"},
    {icon: salon, text: "Salon"},
    {icon: haircut, text: "Haircut"},
    {icon: painter, text: "Painters"},
    {icon: massage, text: "Massage"},
    {icon: massage, text: "Massage"},
    {icon: Pest, text: "Pest Control"},
]

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.head}>
                        <View style={styles.innerDesc}>
                            <View style={styles.titleSection}>
                                <Text style={styles.helloText}>Hello,</Text>
                                <Text style={styles.name}>Saepul Rohman</Text>
                            </View>
                            <View style={styles.topIcons}>
                                <View style={styles.imgShadow} elevation={3}>
                                    <TouchableOpacity onPress={()=>{}}>
                                        <Image source={require('../assets/icons/notif.png')} style={styles.topIcon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.imgShadow} elevation={3}>
                                    <TouchableOpacity onPress={()=>{}}>
                                        <Image source={require('../assets/icons/dollar.png')} style={styles.topIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.pinView}>
                            <Image source={require('../assets/icons/pin.png')} style={styles.pinIcon} />
                            <Text style={styles.address}>No. 13 Frontiers Street Western</Text>
                        </View>
                    </View>
                    <View elevation={5} style={styles.outerInput}>
                        <TextInput  style={styles.searchBar}
                                    placeholder="Search for a service"
                                    placeholderTextColor="#6E81A0"
                        ></TextInput>
                        <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                                style={{marginLeft:'5%',marginTop:15}}>
                        <TouchableOpacity onPress={()=>{}} style={styles.discountButton}>
                            <Image source={require('../assets/images/carpenter.png')} style={styles.discountIcon} />
                            <View>
                                <Text style={styles.percentage}>20%</Text>
                                <Text style={styles.itemDesc}>Carpentry{"\n"}Discount</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}} style={[styles.discountButton,{backgroundColor:'#2AC093'}]}>
                            <Image source={require('../assets/images/carpenter.png')} style={styles.discountIcon} />
                            <View>
                                <Text style={styles.percentage}>25%</Text>
                                <Text style={styles.itemDesc}>Plumbing{"\n"}Discount</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}} style={styles.discountButton}>
                            <Image source={require('../assets/images/carpenter.png')} style={styles.discountIcon} />
                            <View>
                                <Text style={styles.percentage}>20%</Text>
                                <Text style={styles.itemDesc}>Carpentry{"\n"}Discount</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={styles.serviceView}>
                        {options.map((item,index) => {
                            return(
                                <View  elevation={3} style={styles.shadowView} key={index}>
                                    <TouchableOpacity onPress={()=>{}} style={styles.indView}>
                                        <Image source={item.icon} style={styles.serviceIcon} />
                                        <Text style={styles.serviceText}>{item.text}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}