import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import UserStyles from "./UserStyles"
import Styles from "../../styles/Styles"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"
import * as ImagePicker from 'expo-image-picker';
import API, { endpoints } from "../../configs/API"

const Register = ({navigation}) => {
    const  [user, setUser] = useState({
        "username": "",
        "password": "",
        "confirmPassword": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "avatar": ""
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const register = async () => {
        setLoading(true);

        const form = new FormData();
        for (let key in user)
            if (key === "avatar") {
                form.append(key, {
                    uri: user[key].uri,
                    name: user[key].fileName,
                    type: user[key].type
                })
            } else
                form.append(key, user[key]);

        try {
            let res = await API.post(endpoints['register'], form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.info(res.data);
            navigation.navigate('Login');
        } catch (ex) {
            console.error(ex);
        } finally {
            setLoading(false);
        }
    }

    const picker = async () => {
        let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert("Permission denied!");
        } else {
            let res = await ImagePicker.launchImageLibraryAsync();
            if (!res.canceled) {
                change("avatar", res.assets[0])
            }
        }
    }

    const change = (field, value) => {
        setUser(current => {
            return {...current, [field]: value}
        })
    }
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    return (
        <View style={Styles.container}>
            {user.avatar ? <Image source={{uri: user.avatar.uri}} style={UserStyles.avatar} /> : 
                <Image source={require('../../image/user-profile.jpg')} style={UserStyles.avatar} />
            }
            <TouchableOpacity onPress={picker}>
                <Text style={{color: 'gray', marginTop: 10, marginBottom: 20}}>Chọn Avatar</Text>
            </TouchableOpacity>

            <TextInput value={user.username} onChangeText={t => change("username", t)} style={UserStyles.input} placeholder="Tên đăng nhập" />
            <TextInput value={user.password} onChangeText={t => change("password", t)} style={UserStyles.input} placeholder="Mật khẩu" secureTextEntry />
            <TextInput value={user.confirmPassword} onChangeText={t => change("confirmPassword", t)} style={UserStyles.input} placeholder="Xác nhận mật khẩu" secureTextEntry />
            {user.password !== user.confirmPassword ? <Text style={{color: 'red', fontSize: 10}}>Mật khẩu không khớp</Text> : <></>}
            <TextInput value={user.first_name} onChangeText={t => change("first_name", t)} style={UserStyles.input} placeholder="Tên" />
            <TextInput value={user.last_name} onChangeText={t => change("last_name", t)} style={UserStyles.input} placeholder="Họ" />
            <TextInput value={user.email} onChangeText={t => change("email", t)} style={UserStyles.input} placeholder="Email" />

            {loading === true ? <ActivityIndicator /> : <>
                <TouchableOpacity style={UserStyles.button} onPress={register}>
                    <Text style={Styles.textCenter}>Đăng ký</Text>
                </TouchableOpacity>
            </>}
            
        </View>
    )
}

export default Register