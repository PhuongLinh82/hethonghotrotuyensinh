import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import InformationStyle from "./InformationStyle"
import Icon from "react-native-vector-icons/Ionicons"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"

const Information = ({ route, navigation }) => {
    const [information, setInformation] = useState(null);
    const [informationDetails, setInformationDetails] = useState(null);
    const informationSectionId = route.params?.sectionID;

    // const informationSectionId = 1;

    useEffect(() => {
        console.log(informationSectionId)
        const loadInformation = async () => {
            let url = endpoints['informationsection'](informationSectionId);

            // if (informationSectionId !== null && informationSectionId !== undefined)
            //     url = `${url}?infosection=${informationSectionId}%2F`

            try {
                let res = await API.get(url);
                console.log(res.data)
                setInformation(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }

        loadInformation();
    }, [informationSectionId]);

    return (
        <View style={Styles.container}>
            <ScrollView>
                {information === null ? <ActivityIndicator /> :
                    <>
                        {information.map(i => (
                            <TouchableOpacity onPress={()=>{navigation.navigate('DetailedInformation', {informationId: i.id})}}>
                                <View key={i.id} style={[Styles.row, { width: '100%', height: 100 }]}>
                                    <Image
                                        source={require('../../image/vidu.jpg')}
                                        // source={{uri: i.image}}
                                        style={InformationStyle.image}
                                    />
                                    <View>
                                        <Text style={InformationStyle.title}>{information.description}</Text>
                                        <View style={Styles.row}>
                                            <Text>

                                                <Icon
                                                    name='time-outline'
                                                    style={InformationStyle.icon}
                                                />
                                            </Text>
                                            <Text>12:00  01/01/2024</Text>
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