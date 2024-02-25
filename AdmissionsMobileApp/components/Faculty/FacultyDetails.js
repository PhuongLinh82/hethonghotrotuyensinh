import { ActivityIndicator, ScrollView, Text, View } from "react-native"
import Styles from "../../styles/Styles"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API";

const FacultyDetails = ({ route }) => {
    const [faculty, setFaculty] = useState(null);
    const {facultyId} = route.params;

    useEffect(() => {
        const loadFacultyDetails = async () => {
            try {
                let res = await API.get(endpoints['facultyDetails'](facultyId));
                setFaculty(res.data);
                console.log()
            } catch (ex) {
                console.error(ex);
            }
        }

        loadFacultyDetails();
    }, [facultyId]);

    return (
        <View style={Styles.container}>
            {faculty === null ? <ActivityIndicator /> : <>
                <ScrollView>
                    <Text>Giới thiệu khoa</Text>
                    <Text>Website</Text>
                    <Text>Chương trình đào tạo</Text>
                    <Text>Điểm trúng tuyển 5 năm gần nhất</Text>
                </ScrollView>
            </>}
        </View>   
    )
}

export default FacultyDetails