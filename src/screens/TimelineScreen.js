import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Modal, Button, TouchableOpacity, StyleSheet, FlatList, Animated } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Icon, { Icons } from "./Icons";
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useTheme } from '@react-navigation/native';

const Timelines = (props) => {

  const progress1 = useRef(new Animated.Value(1)).current;
  const { colors } = useTheme();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      start1()

    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };


  return (
    <View style={{ width: '100%', height: '100%' }}>

      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}

        data={props.value}
        keyExtractor={(item) => item.id}

        renderItem={({ item, index }) => (
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 0, paddingHorizontal: 10 }}>
            {/* <View style={{ flex: 1 }}> */}
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
              {/* <View style={{ width: '100%', alignItems: 'center', padding: 0 }}> */}
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: 'green',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ color: '#fff' }}>{item.id}</Text>
                {/* <Text style={{ color: '#fff' }}>{console.log(props.value.length)}</Text> */}
              </View>

              <Animated.View
                style={{
                  width: 6,
                  // height: progress1,
                  height: (props.value.length - 1) == index ? 0 : progress1,
                  marginTop: 0,
                  backgroundColor: 'green',
                }}></Animated.View>
              {/* <Animated.View
                style={{
                width: 5,
                height: progress1,
                marginTop: 0,
                backgroundColor: 'green',
                }}>

            </Animated.View> */}

              {
                start1()
              }

            </View>
           
            <View style={{
              flex: 2,
              backgroundColor: colors.background,

              padding: '5%',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
              {/* <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: colors.text }}>{item.time}</Text> */}
              <Text numberOfLines={3} style={{ textAlign: 'left', color: colors.text }}>{item.msg}</Text>

            </View>
          </View>

          // </View>
          // </View>
        )
        }
      />

    </View>
  );
};




const TimelineScreen = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={styles.centeredView}>
      {props.leadTrackData !== null ?

        <View style={[styles.modal, { height: 150, justifyContent: 'center', backgroundColor: colors.background, }]}>

          <View style={{ height: 80, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', justifyContent: 'space-evenly' }}>
            <View style={{ flex: 20, margin: 10 }}>
              <Icon
                name="calendar"
                type={Icons.AntDesign}
                color="black"// color="#009387"
                size={40}
              />

            </View>

            <View style={{ flex: 80, paddingTop: 10, }}>
              <Text style={{ color: '#009387' }}>Recent Activity</Text>
              <Text style={{ color: 'black' }}>Lead Information modified</Text>
              {props.leadTrackData.map((data) => {
                key = data.id
                return <Text style={{ color: 'black' }}>{data.msg}</Text>
              })}

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.modalCenteredView}>
                  <View style={styles.modalView}>
                    <Timelines value={props.leadTrackData} />
                    {/* <Text style={styles.modalText}>Hello, I'm a modal!</Text> */}
                    <Button
                      title="Close"
                      onPress={() => setModalVisible(!modalVisible)}
                    />
                  </View>
                </View>
              </Modal>

            </View>

          </View>

          <View style={{ height: 70, width: '100%', flexDirection: 'column' }}>

            <View style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth
            }} />

            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{ height: 70, width: '100%', flexDirection: 'row', justifyContent: "flex-end", alignItems: 'center', paddingRight: 10 }}>
              <Text style={{ fontWeight: "500", color: "black", textAlign: 'center', alignContent: 'center' }}>View all activities</Text>
              <Icon
                name="right"
                type={Icons.AntDesign}
                color="black"
                size={22}
              />
            </TouchableOpacity>
          </View>

        </View>
        : <View><Text>"Nothing"</Text></View>}
    </View>

  );
}

export default TimelineScreen;


const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  modal: {
    // justifyContent: 'center',  
    alignItems: 'center',
    // backgroundColor : "white", 

    // height: 300 ,  
    width: wp('95%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    // marginTop: 80,  
    // marginLeft: 40,  
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: '2%'
  },

  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'

  },
  modalView: {
    width: '80%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  }

});
