import { ActivityIndicator, Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Styles from "../../styles/Styles"
import HomeStyles from "./HomeStyles"
import Icon from "react-native-vector-icons/Ionicons"
import { useEffect, useState } from "react"
import API, { endpoints } from "../../configs/API"

const Home = ({route, navigation}) => {
    const [informationsection, setInformationsection] = useState([]);
    const [information, setInformation] = useState(null);
    const [banners, setBanners] = useState(null);
    const [university, setUniversity] = useState(null);
    const [informationsectionList, setInformationsectionList] = useState(null);

    // const {informationSectionId} = route.params;

    // useEffect(() => {
    //     const loadInformationsectionList = async () => {
    //         try {
    //             let res = await API.get(endpoints['informationsectionList']);
    //             setInformationsectionList(res.data);
    //         } catch (ex) {
    //             console.error(ex);
    //         }
    //     }
    //     loadInformationsectionList();
    // }, []);

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

// ---------------------------------------------------------------
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                {/* Tin tuyển sinh */}
                {informationsection === null ? <ActivityIndicator/> : <>
                    {informationsection.map(is => (
                        <View key={is.id}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Information', {sectionID: is.id})}>
                                <Text style={{color: 'red'}}>{is.name}</Text>
                            </TouchableOpacity>
                            {/* {information
                                .filter(f => (f.infosection === is.id))
                                .map(i => (
                                    <View key={i.id} >
                                        <Text>{i.description}</Text>
                                    </View>
                                ))} */}
                        </View>
                    ))}
                </>}
                





                {/* Banner */}
                <View style={{backgroundColor: 'lightgray', alignItems: 'center'}}>
                    <Text style={{padding: 30}}>Banner</Text>
                </View>

                {/* Button Thông tin khoa và Câu hỏi thường gặp */}
                <View style={[Styles.row, HomeStyles.spaceEvenly, HomeStyles.margin5]}>
                    <TouchableOpacity style={{backgroundColor: 'cornflowerblue', padding: 5}}>
                        <Text>THÔNG TIN KHOA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{backgroundColor: 'salmon', padding: 5}}>
                        <Text>CÂU HỎI THƯỜNG GẶP</Text>
                    </TouchableOpacity>
                </View>

                {/* Tin tổng quan */}
                {information === null ? <ActivityIndicator/> : <>
                    {university.map(u => (
                        <View key={u.id}>
                            <Text>{u.introduction}</Text>
                        </View>
                    ))}
                </>}
                {/* <View style={{backgroundColor: 'lightgray', alignItems: 'center'}}>
                    <Text style={{padding: 20}}>Thông tin tổng quan</Text>
                </View> */}

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

                {/* Hệ chính quy */}
                <View style={[Styles.row, Styles.marginHor5, HomeStyles.spaceBetween]}>
                    <Text style={Styles.textBoil}>THÔNG TIN TUYỂN SINH HỆ CHÍNH QUY</Text>
                    <TouchableOpacity>
                        <Text style={[Styles.textBoil, Styles.textRed]}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={Styles.row}>
                    <Image 
                        source={require('../../image/vidu.jpg')} 
                        style={[HomeStyles.img, HomeStyles.margin5]} 
                    />
                    <View style={HomeStyles.spaceEvenly}>
                        <Text style={Styles.textBlue}>Tiêu đề tin tuyển sinh...</Text>
                        <View style={Styles.row}>
                            <Icon name='time-outline' style={HomeStyles.margin3} />
                            <Text>12:00  01/01/2024</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Home