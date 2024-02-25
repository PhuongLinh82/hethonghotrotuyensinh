import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        width: 250,
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    shadow: {
        backgroundColor: '#191a4c',
        borderRadius: 20,
        
        // shadowColor: '#171717',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        elevation: 25,
        shadowColor: 'black',
    },
    text: {
        textAlign: 'center',
        margin: 10,
        color: 'white'
    }

})