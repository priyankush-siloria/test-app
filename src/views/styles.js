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
        color: '#334669',
        fontFamily:'OpenSans-Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.45)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 10
    },
    name:{
        fontFamily:'EuclidCircularB-Medium',
        fontSize: 20,
        color: '#334669',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 10
    },
    topIcons:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 5
    },
    topIcon:{
        width: width/20,
        height: undefined,
        aspectRatio: 1,
        backgroundColor: '#E4F0FA',
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
        marginRight: 5,
    },
    address:{
        fontFamily: 'EuclidCircularB',
        fontSize: 13,
        color: '#5D6C87',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 10
    },
    searchBar:{
        width: '100%',
        alignSelf:'center',
        backgroundColor:'transparent',
        color:'#6E81A0',
        padding: 15,
        paddingLeft: 40,
        paddingRight: 15,        
        fontSize: 13,
        borderColor:'transparent',
        fontFamily:'OpenSans-Regular',
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
        fontSize: 20,
        fontFamily: 'EuclidCircularB-Bold',
        color:'white'
    },
    itemDesc:{
        fontFamily: 'EuclidCircularB',
        fontSize: 11,
        color:'white',
        lineHeight: 15
    },
    serviceText:{
        fontSize: 11,
        color:'#334669',
        marginTop: 5,
        marginBottom: 15,
        fontFamily:'OpenSans-SemiBold'
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
        backgroundColor:'#E6EEF8',
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: 'white',
        shadowOpacity: 0.6,
        borderRadius: 50,
        padding: 5,
        marginLeft: 15
    },
    shadow:{
        height: undefined,
        aspectRatio: 6.4,
        width: '100%',
        position:'absolute',
        top: 0,
        left: 0
    },
    outerInput:{
        marginBottom: 10,
        marginTop: 15,
        alignSelf:'center',
        width: '90%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};