import { ActivityIndicator, Button, Dimensions, FlatList, Image, ScrollView, SectionList, Text, TextInput, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import HomeStyles from "./HomeStyles"
import Icon from "react-native-vector-icons/Ionicons"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"
import SwiperFlatList from "react-native-swiper-flatlist"

const Home = ({navigation}) => {
    const [informationsection, setInformationsection] = useState([]);
    const [information, setInformation] = useState(null);
    const [banners, setBanners] = useState(null);
    const [university, setUniversity] = useState(null);
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

    useEffect(() => {
        const loadInformationsection = async () => {
            try {
                let res = await API.get(endpoints['informationsections']);
                setInformationsection(res.data);
            } catch (ex) {
                console.error(ex);
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
                console.error(ex);
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
        navigation.navigate('Information', {sectionId});
    }

    const goToFaculty = () => {
        navigation.navigate('Faculty');
    }

    const goToLivestream = (livestreamId) => {
        navigation.navigate('Livestream', {livestreamId});
    }

    const screenWidth = Dimensions.get('window').width;

// ---------------------------------------------------------------
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                {/* Banner */}
                {banners === null ? <ActivityIndicator /> : <>
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={3}
                        autoplayLoop
                        index={1}
                        showPagination
                        paginationStyle={{top: 125}}
                        data={banners}
                        renderItem={({ item }) => (
                            <Image 
                                key={item.id}
                                source={{uri: item.image}}
                                style={{height: 160, width: screenWidth}}
                            />
                        )}
                    />
                </>}

                {/* Tin tổng quan */}
                {university === null ? <ActivityIndicator/> : <>
                    {university.map(u => (
                        <View key={u.introduction} style={HomeStyles.overview}>
                            <Text>{u.introduction}</Text>
                        </View>
                    ))}
                </>}

                {/* Button Thông tin khoa và Câu hỏi thường gặp */}
                <View style={HomeStyles.container_button}>
                    <TouchableOpacity 
                        onPress={()=> goToFaculty()} 
                        style={HomeStyles.button_fac}
                    >
                        <Text style={{color: 'white'}}>THÔNG TIN KHOA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={HomeStyles.button_ques}>
                        <Text style={{color: 'white'}}>CÂU HỎI THƯỜNG GẶP</Text>
                    </TouchableOpacity>
                </View>

                

                {/* Livestream */}
                <View style={[Styles.row, Styles.marginHor5, HomeStyles.spaceBetween]}>
                    <Text style={Styles.textBoil}>LIVESTREAM</Text>
                    <TouchableOpacity>
                        <Text style={[Styles.textBoil, Styles.text]}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>

                {livestream === null ? <ActivityIndicator /> : <>
                    {livestream.slice(0, 1).map(l => (
                        <TouchableOpacity
                            key={l.id}
                            onPress={() => goToLivestream(l.id)}
                            style={Styles.row}
                        >
                            <Image 
                                source={require('../../image/vidu.jpg')}
                                style={[HomeStyles.img, HomeStyles.margin5]}
                            />

                            <View style={HomeStyles.spaceEvenly}>
                                <Text>{l.title}</Text>
                                <View style={Styles.row}>
                                    <Text style={Styles.textBoil}>Bắt đầu lúc: </Text>
                                    <Text>{l.time}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </>}

                {/* Đặt câu hỏi livestream */}
                <Text style={[Styles.textBlue, Styles.textBoil, HomeStyles.margin5]}>Đặt câu hỏi:</Text>
                <View style={[Styles.row, HomeStyles.spaceBetween]}>
                    <Image 
                        source={require('../../image/vidu.jpg')}
                        style={{width: 25, height: 25, margin: 5}} 
                    />
                    <TextInput style={{borderWidth: 0.5, borderRadius: 25, width: "80%", height: 27, padding: 5}} />
                    <Button title="Gửi" />
                </View>

                {/* Tin tuyển sinh */}
                {informationsection === null ? <ActivityIndicator/> : <>
                    {informationsection.map(is => (
                        <View key={is.id} style={{marginVertical: 10}} >
                            <View style={HomeStyles.sectionName}>
                                <Text style={{fontWeight: 'bold', fontSize: 20}}>{is.name}</Text>
                                <TouchableOpacity onPress={() => goToInformation(is.id)}>
                                    <Text style={{color: '#f37c33'}}>Xem thêm</Text>
                                </TouchableOpacity>
                            </View>

                            <FlatList
                                data={information && information.slice(0, 5)}
                                keyExtractor={(item) => item.id.toString()}
                                scrollEnabled={false}
                                renderItem={({ item }) => 
                                    <TouchableOpacity 
                                        onPress={()=>navigation.navigate('DetailedInformation', {informationId: item.id})} 
                                        style={HomeStyles.info_container}
                                    >
                                        <Image 
                                            source={{uri: item.image}} 
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