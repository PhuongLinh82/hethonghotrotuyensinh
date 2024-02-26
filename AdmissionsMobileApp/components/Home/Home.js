import { ActivityIndicator, Button, FlatList, Image, ScrollView, SectionList, Text, TextInput, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import HomeStyles from "./HomeStyles"
import Icon from "react-native-vector-icons/Ionicons"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"
import Pagination from "react-native-pagination"

const Home = ({route, navigation}) => {
    const [informationsection, setInformationsection] = useState([]);
    const [information, setInformation] = useState(null);
    const [banners, setBanners] = useState(null);
    const [university, setUniversity] = useState(null);
    const [livestream, setLivestream] = useState(null);
    const [page, setPage] = useState(1);
    
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

    useEffect(() => {
        const loadInformationsection = async () => {
            try {
                let res = await API.get(endpoints['informationsections']);
                setInformationsection(res.data);
            } catch (ex) {
                // console.error(ex);
            }
        }
        loadInformationsection();
    }, []);

    useEffect(() => {
        const loadInformation = async () => {
            try {
                let res = await API.get(endpoints['information']);
                setInformation(res.data.results);
            } catch (ex) {
                // console.error(ex);
            }
        }
        loadInformation();
    }, []);

    useEffect(() => {
        const loadBanners = async () => {
            try {
                let res = await API.get(endpoints['banners']);
                setBanners(res.data)
            } catch (ex) {
                console.error(ex);
            }
        }
        loadBanners();
    }, []);

    useEffect(() => {
        const loadUniversity = async () => {
            try {
                let res = await API.get(endpoints['university']);
                setUniversity(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }
        loadUniversity();
    }, []);

    const goToInformation = (sectionId) => {
        navigation.navigate('Information', {"sectionId": sectionId})
    }

// ---------------------------------------------------------------
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                {/* Banner */}
                <View style={HomeStyles.banner}>
                    <Image 
                        source={require('../../image/vidu.jpg')}
                        style={{height: 160}}
                    />
                </View>

                {/* Button Thông tin khoa và Câu hỏi thường gặp */}
                <View style={[Styles.row, HomeStyles.spaceEvenly, HomeStyles.margin5]}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Faculty')} style={HomeStyles.button_fac}>
                        <Text style={{color: 'white'}}>THÔNG TIN KHOA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={HomeStyles.button_ques}>
                        <Text style={{color: 'white'}}>CÂU HỎI THƯỜNG GẶP</Text>
                    </TouchableOpacity>
                </View>

                {/* Tin tổng quan */}
                {university === null ? <ActivityIndicator/> : <>
                {university.map(u => (
                    <View style={HomeStyles.overview}>
                        <Text>{u.introduction}</Text>
                    </View>
                ))}
                </>}

                {/* Tư vấn tuyển sinh */}
                <View style={[Styles.row, Styles.marginHor5, HomeStyles.spaceBetween]}>
                    <Text style={Styles.textBoil}>TƯ VẤN TUYỂN SINH</Text>
                    <TouchableOpacity>
                        <Text style={[Styles.textBoil, Styles.text]}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={Styles.row}>
                    <Image 
                        source={require('../../image/vidu.jpg')}
                        style={[HomeStyles.img, HomeStyles.margin5]}
                    />

                    <View style={HomeStyles.spaceEvenly}>
                        <Text>Tiêu đề livestream...</Text>
                        <View style={Styles.row}>
                            <Text style={Styles.textBoil}>Bắt đầu lúc:</Text>
                            <Text>12:00  01/01/2024</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Đặt câu hỏi livestream */}
                <Text style={[Styles.textBlue, Styles.textBoil, HomeStyles.margin5]}>Đặt câu hỏi:</Text>
                <View style={[Styles.row, HomeStyles.spaceBetween]}>
                    <Image 
                        source={require('../../image/vidu.jpg')}
                        style={[{width: 25, height: 25}, HomeStyles.margin5]} 
                    />
                    <TextInput style={{borderWidth: 0.5, borderRadius: 25, width: "80%", height: 27, padding: 5}} />
                    <Button title="Gửi" />
                </View>

                {/* Tin tuyển sinh */}
                {informationsection === null ? <ActivityIndicator/> : <>
                    {informationsection.map(is => (
                        <View key={is.id} style={{marginVertical: 10}} >
                            <View style={[Styles.row, Styles.marginHor5, HomeStyles.spaceBetween]}>
                                <Text style={{fontWeight: 'bold', fontSize: 20}}>{is.name}</Text>
                                <TouchableOpacity onPress={() => goToInformation(is.id)}>
                                    <Text style={{color: '#f37c33'}}>Xem thêm</Text>
                                </TouchableOpacity>
                            </View>

                            <FlatList
                                data={information && information.slice(0, 5)}
                                keyExtractor={(item, index) => index.toString()}
                                onEndReached={() => setPage(page + 1)}
                                renderItem={({ item }) => 
                                    <TouchableOpacity 
                                        onPress={()=>navigation.navigate('DetailedInformation', {informationId: item.id})} 
                                        style={HomeStyles.info_container}
                                    >
                                        <Image 
                                            source={require('../../image/vidu.jpg')} 
                                            style={HomeStyles.img} 
                                        />
                                        <View style={{justifyContent: 'space-evenly'}}>
                                            <View key={item.id}>
                                                <Text numberOfLines={2} style={HomeStyles.info_title} >{item.title}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Icon name='time-outline' style={{margin: 3}} />
                                                <Text style={{color: 'gray'}}>12:00  01/01/2024</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                    ))}
                </>}
            </ScrollView>
        </View>
    )
}

export default Home