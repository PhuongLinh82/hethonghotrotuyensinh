import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import UserStyles from "./UserStyles"

const Login = () => {
    return (
        <View style={Styles.container}>
            <TextInput style={UserStyles.input} placeholder="Email" />
            <TextInput style={UserStyles.input} placeholder="Mật khẩu" secureTextEntry />

            <TouchableOpacity style={UserStyles.button}>
                <Text style={Styles.textCenter}>Đăng nhập</Text>
            </TouchableOpacity>

            <Text style={{color: 'gray'}}>Hoặc đăng nhập với</Text>

            <View style={Styles.row}>
                <TouchableOpacity>
                    <Image source={require('../../image/LogoFB.png')} style={UserStyles.logo} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../../image/LogoGG.png')} style={UserStyles.logo} />
                </TouchableOpacity>
            </View>

            <View style={Styles.row}>
                <TouchableOpacity>
                    <Text style={UserStyles.textBlue}>Quên mật khẩu</Text>
                </TouchableOpacity>

                <Text> | </Text>

                <TouchableOpacity>
                    <Text style={UserStyles.textBlue}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login