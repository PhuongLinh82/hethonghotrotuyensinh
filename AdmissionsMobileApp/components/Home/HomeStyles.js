import { StyleSheet } from "react-native";

export default StyleSheet.create({
    info_container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#3b3f79',
        borderRadius: 20

    },

    info_title: {
        color: '#3b3f79',
        flexWrap: 'wrap',
        width: 310
        // marginRight: 50
    },

    banner: {
        height: 170, 
        alignItems: 'center',
    },

    container_button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 5,
    },

    button_fac: {
        backgroundColor: '#3b3f79', 
        padding: 10,
        borderRadius: 10,
        elevation: 10,
    },

    button_ques: {
        backgroundColor: '#fc8f52', 
        padding: 10,
        borderRadius: 10,
        elevation: 10,
    },

    overview: {
        marginHorizontal: 10,
        marginVertical: 15,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        borderRadius: 10,
    },

    sectionName: {
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'space-between',
    },

    spaceBetween: {
        justifyContent: 'space-between'
    },

    spaceEvenly: {
        justifyContent: 'space-evenly'
    },

    img: {
        width: 70,
        height: 70,
        borderRadius: 20,
        margin: 5,
    },

    margin5: {
        margin: 5,
    },

    margin3: {
        margin: 3,
    }
})