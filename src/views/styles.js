import { Dimensions } from "react-native"

const {height,width} = Dimensions.get('window');

export const styles = {
    container:{
        flex:1,
        backgroundColor:'#E1EEF8'
    },
    head:{
        width: '95%',
        alignSelf:'center',
        padding: 10,
        paddingTop: 25
    },
    innerDesc:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    titleSection:{

    },
    helloText:{
        fontSize: 14,
        color: '#334669'
    },
    name:{
        fontFamily:'Euclid Circular B Medium',
        fontSize: 20,
        color: '#334669',
        fontWeight: '700'
    },
    topIcons:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 5
    },
    topIcon:{
        width: width/12,
        height: undefined,
        aspectRatio: 1,
        backgroundColor: '#E4F0FA',
        shadowOffset:{  width: 2,  height: 2,  },
        shadowColor: 'white',
        shadowOpacity: 0.6,
        borderRadius: 50,
    },
    pinView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 5,
        flexWrap:'wrap'
    },
    pinIcon:{
        height: 16,
        width: 12,
        marginRight: 5
    },
    address:{
        fontFamily: 'Euclid Circular B',
        fontSize: 13,
        color: '#5D6C87',
        fontWeight:'700'
    },
    searchBar:{
        width: '100%',
        alignSelf:'center',
        backgroundColor:'#E4F0FA',
        color:'#6E81A0',
        padding: 10,
        paddingLeft: 35,
        paddingRight: 15,        
        fontSize: 13,
        borderColor:'transparent',
        borderRadius: 15,
    },
    outerInput:{
        marginBottom: 10,
        marginTop: 15,
        alignSelf:'center',
        width: '90%',
        padding: 1,
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 15,
        shadowOffset:{  width: 2,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 1,
        borderRadius: 15,
        justifyContent: 'space-between',
    },
    searchIcon:{
        width: 20,
        height: 20,
        position:'absolute',
        left: 15
    },
    discountButton:{
        padding: 20,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#4AB0E0',
        width: width/2.5,
        borderRadius: 15,
        marginRight: 15
    },
    discountIcon:{
        width: width/8,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    percentage:{
        fontFamily:'Euclid Circular B',
        fontSize: 20,
        fontWeight:'700',
        color:'white'
    },
    itemDesc:{
        fontFamily:'Euclid Circular B',
        fontSize: 11,
        color:'white',
        lineHeight: 15
    },
    serviceText:{
        fontSize: 11,
        color:'#334669',
        marginTop: 5,
        fontWeight:'600',
        marginBottom: 15
    },
    serviceView:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        marginTop: 15,
        flexWrap:'wrap',
        justifyContent: 'space-between',
    },
    indView:{
        backgroundColor:'#E4F0FA',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
    },
    serviceIcon:{
        width: '65%',
        height: undefined,
        aspectRatio: 1,
        marginTop: 10
    },
    shadowView:{
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: 'white',
        shadowOpacity: 0.6,
        borderRadius: 15,
        margin: 5,
        width: '27%',
        marginBottom: '5%'
    },
    imgShadow:{
        shadowOffset:{  width: 2,  height: 2,  },
        shadowColor: 'white',
        shadowOpacity: 0.6,
        borderRadius: 50,
        marginLeft: 15
    }
};