import { ActivityIndicator, ScrollView, Text, View } from "react-native"
import Styles from "../../styles/Styles"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API";

const Livestream = ({route}) => {
    // const {informationId} = route.params;

    const [livestream, setLivestream] = useState(null);

    useEffect(() => {
        const loadLivestream = async () => {
            try {
                let res = await API.get(endpoints['livestream']);
                setLivestream(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }
        loadLivestream();
    }, []);

    return (
        <View style={Styles.container}>
            <ScrollView>
                {livestream === null ? <ActivityIndicator /> : <>
                    {livestream.map(l => (
                        <View key={l.id}>
                            <Text>{l.title}</Text>
                        </View>
                    ))}
                </>}
            </ScrollView>
        </View>
    )
}

export default Livestream