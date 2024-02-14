import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import UserStyles from "./UserStyles"
import Styles from "../../styles/Styles"

const Register = () => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity>
                <Text>Chọn Avatar</Text>
            </TouchableOpacity>

            <TextInput style={UserStyles.input} placeholder="Email" />
            <TextInput style={UserStyles.input} placeholder="Mật khẩu" secureTextEntry />
            <TextInput style={UserStyles.input} placeholder="Xác nhận mật khẩu" secureTextEntry />
            <TextInput style={UserStyles.input} placeholder="Họ và tên" />

            <Text>Giới tính</Text>

            <Text>Ngày sinh</Text>
            
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