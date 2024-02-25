import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import FacultyStyles from "./FacultyStyles"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"

const Faculty = () => {
    const [faculty, setFaculty] = useState(null);
    
    useEffect(() => {
        const loadFaculty = async () => {
            try {
                let res = await API.get(endpoints['faculty']);
                setFaculty(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }

        loadFaculty();
    }, []);

    return (
        <View style={Styles.container}>
            {faculty === null ? <ActivityIndicator /> : <>
                {faculty.map(f => (
                    <TouchableOpacity key={f.id} style={FacultyStyles.shadow} >
                        <Image 
                            source={require('../../image/vidu.jpg')} 
                            style={FacultyStyles.image}
                        />
                        <Text style={FacultyStyles.text}>{f.name}</Text>
                    </TouchableOpacity>
                ))}

            </>}
        </View>
    )
}

export default Faculty