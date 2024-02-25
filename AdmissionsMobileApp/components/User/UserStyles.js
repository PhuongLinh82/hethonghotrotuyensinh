import { StyleSheet } from "react-native";

export default StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        width: '80%',
        backgroundColor: 'white'
    },

    button: {
        borderRadius: 30,
        padding: 10,
        margin: 20,
        width: '80%',
        backgroundColor: '#ec772f',
        elevation: 7,
        shadowColor: 'blue',
    },
    
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'lightgray',
        marginHorizontal: 10,
    },

    logo: {
        width: 50,
        height: 50,
        margin: 15,
    },

    iconShowPassword: {
        position: 'absolute',
        right: 15,
        top: '30%'
    },

    logoutButton: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#3b3f79',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 20,
    },
    
})