import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import UserStyles from "./UserStyles"
import Icon from "react-native-vector-icons/Ionicons"
import { useContext, useState } from "react"
import MyContext from "../../configs/MyContext"
import API, { authApi, endpoints } from "../../configs/API"

const Login = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [ShowPassword, setShowPassword] = useState(false);
    const [user, dispatch] = useContext(MyContext);
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);
            formData.append("client_id", "52GEEIGE17ZGCiBUun1y5Q7JxtHuc4OiRONYSuBl");
            formData.append("client_secret", "OoqA2vguQzg35ILX8gvxZOR1CLhaFXEJZDuwS2W8O1Mw5uHCRNju3aTuk9OqYkBJ1Pu1AN5ZELEkjXu76GSkYvFZUkFWtmRQNTwEBIH9qykHICe4FNwvvr1ZMaxPeBVH");
            formData.append("grant_type", "password");

            const res = await API.post(endpoints['login'],
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
            console.info(res.data);

            // let res = await API.post(endpoints['login'], {
            //     "username": username,
            //     "password": password,
            //     "client_id": "52GEEIGE17ZGCiBUun1y5Q7JxtHuc4OiRONYSuBl",
            //     "client_secret": "OoqA2vguQzg35ILX8gvxZOR1CLhaFXEJZDuwS2W8O1Mw5uHCRNju3aTuk9OqYkBJ1Pu1AN5ZELEkjXu76GSkYvFZUkFWtmRQNTwEBIH9qykHICe4FNwvvr1ZMaxPeBVH",
            //     "grant_type": "password"
            // });
            

            // let user = await authApi(res.data.access_token).get(endpoints['users']);
            dispatch({
                type: 'login',
                payload: {"username": "admin"}
                // user.data
            })
            navigation.navigate('Home');
        } catch (ex) {
            Alert.alert("" ,"Tên đăng nhập hoặc mật khẩu không đúng!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={Styles.container}>
            <TextInput
                value={username}
                onChangeText={t => setUsername(t)}
                placeholder="Tên đăng nhập"
                style={UserStyles.input}
            />
            {/* cố định icon trong TextInput khi bàn phím đẩy lên */}
            <View style={Styles.row}>
                <TextInput 
                    value={password}
                    onChangeText={t => setPassword(t)}
                    placeholder="Mật khẩu"
                    secureTextEntry={ShowPassword}
                    style={UserStyles.input}
                />

                <TouchableOpacity 
                    onPress={() => setShowPassword(!ShowPassword)}
                    style={UserStyles.iconShowPassword}
                >
                    <Icon name={ShowPassword ? 'eye-off' : 'eye'} size={21} />
                </TouchableOpacity>
            </View>
            
            {loading === true ? <ActivityIndicator /> : <>
                <TouchableOpacity onPress={login} style={UserStyles.button}>
                    <Text style={UserStyles.textButton}>Đăng nhập</Text>
                </TouchableOpacity>
            </>}

            <View style={[Styles.row, {alignItems: 'center', marginTop: 20}]}>
                <View style={UserStyles.line}></View>
                <Text style={{color: 'gray'}}>Hoặc đăng nhập với</Text>
                <View style={UserStyles.line}></View>
            </View>

            <View style={Styles.row}>
                <TouchableOpacity>
                    <Image
                        source={require('../../image/LogoFB.png')}
                        style={UserStyles.logo}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../image/LogoGG.png')}
                        style={UserStyles.logo}
                    />
                </TouchableOpacity>
            </View>

            <View style={[Styles.row, {marginTop: 30}]}>
                <TouchableOpacity>
                    <Text style={{color: 'blue'}}>Quên mật khẩu</Text>
                </TouchableOpacity>

                <Text> | </Text>

                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <Text style={{color: 'blue'}}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login