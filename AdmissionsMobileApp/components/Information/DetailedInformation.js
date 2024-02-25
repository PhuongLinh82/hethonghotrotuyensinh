import { ActivityIndicator, ScrollView, Text, View } from "react-native"
import Styles from "../../styles/Styles"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API";

const DetailedInformation = ({route}) => {
    // if (!route.params) {
    //     console.error('route.params không tồn tại');
    // }

    // const {informationId} = route.params;

    const [detailedInformation, setDetailedInformation] = useState(null);

    const informationId = 1;

    useEffect(() => {
        const loadDetailedInformation = async () => {
            try {
                let res = await API.get(endpoints['information-details'](route.params.informationId));
                setDetailedInformation(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }

        loadDetailedInformation();
    }, []);

    return (
        <View style={Styles.container}>
            <ScrollView>
                {detailedInformation === null ? <ActivityIndicator /> : <>
                    {/* {detailedInformation.map(d => ( */}
                        <View key={detailedInformation.id}>
                            <Text>{detailedInformation.description}</Text>
                        </View>
                    {/* ))} */}
                </>}
            </ScrollView>
        </View>
    )
}

export default DetailedInformation