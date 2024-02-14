import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "./components/User/Login";
import Home from "./components/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Register from "./components/User/Register";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Register">
        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarLabel: "Trang chủ",
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )
          }} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App