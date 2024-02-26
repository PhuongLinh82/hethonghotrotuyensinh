import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import { useReducer } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MyContext from "./configs/MyContext";
import UserReducer from "./reducers/UserReducer";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
import Login from "./components/User/Login";
import Logout from "./components/User/Logout";
import Faculty from "./components/Faculty/Faculty";
import Register from "./components/User/Register";
import Information from "./components/Information/Information";
import Notification from "./components/Notification/Notification";
import LoginNavigate from "./components/User/LoginNavigate";
import FacultyDetails from "./components/Faculty/FacultyDetails";
import DetailedInformation from "./components/Information/DetailedInformation";
import Livestream from "./components/Livestream/Livestream";
import UserProfile from "./components/User/UserProfile";

const Tab = createBottomTabNavigator();

const App = () => {
  const [user, dispatch] = useReducer(UserReducer, null);

  return (
    <MyContext.Provider value={[user, dispatch]}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerRight: user === null ? () => <LoginNavigate /> : () => <Logout />,
            headerTintColor: '#3b3f79'
          }}
        >
          <Tab.Screen name="Home" component={Home}
            options={{
              title: "Trang chủ",
              tabBarLabel: "Trang chủ",
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )
            }} />

          <Tab.Screen name="Notification" component={Notification}
            options={{
              title: "Thông báo",
              tabBarLabel: "Thông báo",
              tabBarIcon: ({ color, size }) => (
                <Icon name="notifications-outline" color={color} size={size} />
              )
            }} />

          <Tab.Screen name="Chat" component={Chat}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="chatbox-ellipses-outline" color={color} size={size} />
              )
            }} />

          <Tab.Screen name="UserProfile" component={UserProfile}
            options={{
              title: "Tài khoản",
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="user-o" color={color} size={size} />
              )
            }} />

          <Tab.Screen name="Login" component={Login} 
            options={{title: "Đăng nhập",
            tabBarItemStyle: {display: 'none'}
          }}
          />

          <Tab.Screen name="Register" component={Register}
            options={{title: "Đăng ký", 
            tabBarItemStyle: {display: 'none'}
          }}
          />

          <Tab.Screen name="Faculty" component={Faculty} 
            options={{title: "Các khoa",
              tabBarItemStyle: {display: 'none'}}}
          />
          <Tab.Screen name="FacultyDetails" component={FacultyDetails} 
            options={{title: "Chi tiết khoa",
              tabBarItemStyle: {display: 'none'}}}
          /> 
          <Tab.Screen name="Information" component={Information}
            options={{title: "Tin tuyển sinh",
              tabBarItemStyle: {display: 'none'}
          }}
          />
          <Tab.Screen name="DetailedInformation" component={DetailedInformation}
            options={{title: "Chi tiết tin tuyển sinh",
              tabBarItemStyle: {display: 'none'}}}
          />
          <Tab.Screen name="Livestream" component={Livestream}
            options={{
              tabBarItemStyle: {display: 'none'}
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  )
}

export default App