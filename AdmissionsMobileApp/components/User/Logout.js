import { useContext } from "react"
import { Text, TouchableOpacity } from "react-native"
import MyContext from "../../configs/MyContext"
import UserStyles from "./UserStyles";
import Icon from "react-native-vector-icons/Entypo"

const Logout = () => {
    const [user, dispatch] = useContext(MyContext);

    const logout = () => {
        dispatch({
            'type': 'logout'
        })
    }

    return (
        <TouchableOpacity onPress={logout} style={UserStyles.logoutButton}>
            <Icon name="log-out" size={17} color='#3b3f79' style={{margin: 4, marginRight: 7}} />
            <Text style={{color: '#3b3f79'}}>Đăng xuất</Text>
        </TouchableOpacity>
    )
}

export default Logout