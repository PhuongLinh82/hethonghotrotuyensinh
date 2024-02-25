import { Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Entypo"
import UserStyles from "./UserStyles"
import { useNavigation } from "@react-navigation/native"

const LoginNavigate = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => {navigation.navigate('Login')}}
            style={UserStyles.logoutButton}
        >
          <Icon name="login" size={17} color='#3b3f79' style={{margin: 4, marginRight: 7}} />
          <Text style={{color: '#3b3f79'}}>Đăng nhập</Text>
      </TouchableOpacity>
    )
  }

export default LoginNavigate