import { ActivityIndicator, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API";
import FacultyStyles from "./FacultyStyles";

const FacultyDetails = ({ route }) => {
    const [faculty, setFaculty] = useState(null);
    const {facultyId} = route.params;

    useEffect(() => {
        const loadFacultyDetails = async () => {
            try {
                let res = await API.get(endpoints['faculty-details'](facultyId));
                setFaculty(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }

        loadFacultyDetails();
    }, [facultyId]);

    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const openLink = () => {
        const url = faculty.website;
        Linking.openURL(url);
      };

    return (
        <View style={Styles.container}>
            <ScrollView>
                {faculty === null ? <ActivityIndicator /> : <>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity 
                            onPress={() => toggleItem(0)} 
                            style={FacultyStyles.button_title_details}
                        >
                            <Text style={FacultyStyles.text_title_details}>
                                GIỚI THIỆU KHOA
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => toggleItem(1)} 
                            style={FacultyStyles.button_title_details}
                        >
                            <Text style={FacultyStyles.text_title_details}>
                                CHƯƠNG TRÌNH ĐÀO TẠO
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => toggleItem(2)} 
                            style={FacultyStyles.button_title_details}
                        >
                            <Text style={FacultyStyles.text_title_details}>
                                ĐIỂM CHUẨN
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

                    {openIndex === 0 && 
                        <View style={FacultyStyles.container_details}>
                            <Text style={FacultyStyles.content_details} >{faculty.introduction}</Text>
                            <View style={{margin: 10, flexDirection: 'row'}}>
                                <Text style={{fontWeight: 'bold'}}>Website: </Text>
                                <TouchableOpacity onPress={openLink}>
                                    <Text style={{color: 'blue'}}>{faculty.website}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                    {openIndex === 1 && 
                    <View style={FacultyStyles.container_details}>
                        <Text style={FacultyStyles.content_details} >{faculty.program}</Text>
                    </View>}

                    {openIndex === 2 && 
                    <View style={FacultyStyles.container_details}>
                        <Text style={FacultyStyles.content_details} ></Text>
                    </View>}
                </>}
            </ScrollView>
        </View>   
    )
}

export default FacultyDetails