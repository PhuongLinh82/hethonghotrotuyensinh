import { ActivityIndicator, ScrollView, Text, View } from "react-native"
import Styles from "../../styles/Styles"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API";
import LivestreamStyles from "./LivestreamStyles";

const Livestream = ({route}) => {
    const {livestreamId} = route.params;

    const [livestream, setLivestream] = useState(null);

    useEffect(() => {
        const loadLivestream = async () => {
            try {
                let res = await API.get(endpoints['livestream-details'](livestreamId));
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
                    <View>
                        <Text style={LivestreamStyles.title}>CHỦ ĐỀ: {livestream.title}</Text>
                    </View>
                </>}
            </ScrollView>
        </View>
    )
}

export default Livestream