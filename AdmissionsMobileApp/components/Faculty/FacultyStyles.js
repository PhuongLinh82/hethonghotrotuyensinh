import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        width: 300,
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    container: {
        margin: 15,
        backgroundColor: '#191a4c',
        borderRadius: 20,
        elevation: 15,
        shadowColor: '#191a4c',
        // shadowColor: '#191a4c',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        
    },
    text_fac_name: {
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },

    container_details: {
        borderWidth: 1,
        borderColor: '#191a4c',
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        elevation: 10,
    },

    button_title_details: {
        backgroundColor: '#191a4c',
        borderRadius: 9,
        margin: 10,
        elevation: 10,
    },

    text_title_details: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        padding: 5,
    },

    content_details: {
        margin: 10,
    }


})