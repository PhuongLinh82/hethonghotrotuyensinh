import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import InformationStyle from "./InformationStyle"
import Icon from "react-native-vector-icons/Ionicons"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"
import HomeStyles from "../Home/HomeStyles"

const Information = ({ route, navigation }) => {
    const [information, setInformation] = useState(null);

    useEffect(() => {
        const loadInformation = async () => {
            let url = endpoints['informationsection'](route.params.sectionId);
            // (informationSectionId)

            // if (informationSectionId !== null && informationSectionId !== undefined)
            //     url = `${url}?infosection=${informationSectionId}`
            try {
                let res = await API.get(url);
                setInformation(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }
        loadInformation();
    }, []);

    return (
        <View style={Styles.container}>
            <ScrollView>
                {information === null ? <ActivityIndicator /> :
                    <>
                        {information.map(i => (
                            <TouchableOpacity onPress={()=>{navigation.navigate('DetailedInformation', {informationId: i.id})}}>
                                <View key={i.id} style={HomeStyles.info_container}>
                                    <Image
                                        source={require('../../image/vidu.jpg')}
                                        // source={{uri: i.image}}
                                        style={HomeStyles.img}
                                    />
                                    <View style={{justifyContent: 'space-evenly'}}>
                                        <Text numberOfLines={2} style={HomeStyles.info_title}>{i.title}</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Icon name='time-outline' style={{margin: 3}} />
                                            <Text style={{color: 'gray'}}>12:00  01/01/2024</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </>
                }
            </ScrollView>
        </View>
    )
}

export default Information