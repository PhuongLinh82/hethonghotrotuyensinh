import { Button, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import UserStyles from "./UserStyles"
import Styles from "../../styles/Styles"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"

const Register = () => {
    const [gender, setGender] = useState('female');
    const [date, setDate] = useState(new Date("2024-01-01"));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: 'date'
        });
    };

    return (
        <View style={Styles.container}>
            <TouchableOpacity>
                <Text>Chọn Avatar</Text>
            </TouchableOpacity>

            <TextInput style={UserStyles.input} placeholder="Email" />
            <TextInput style={UserStyles.input} placeholder="Mật khẩu" secureTextEntry />
            <TextInput style={UserStyles.input} placeholder="Xác nhận mật khẩu" secureTextEntry />
            <TextInput style={UserStyles.input} placeholder="Họ và tên" />

            <View style={Styles.row}>
                <Text style={{marginTop: 18}}>Giới tính:</Text>
                <Picker selectedValue={gender}
                    style={{width: 130}}
                    onValueChange={(itemValue) => setGender(itemValue)} >
                    <Picker.Item label="Nữ" value="female" />
                    <Picker.Item label="Nam" value="male" />
                </Picker>
            </View>

            <View style={Styles.row}>
                <Text>Ngày sinh:</Text>
                <TouchableOpacity onPress={showDatePicker}>
                    <Text style={{fontWeight: 'bold', marginHorizontal: 10}}>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
            </View>
            
            <TextInput style={UserStyles.input} placeholder="Số điện thoại" />

            <TouchableOpacity style={UserStyles.button}>
                <Text style={Styles.textCenter}>Đăng ký</Text>
            </TouchableOpacity>

            <View style={Styles.row}>
                <Text>Bạn đã có tài khoản?  </Text>

                <TouchableOpacity>
                    <Text style={UserStyles.textBlue}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register