import { View, Text, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../theme/GlobalStyles';
import EditThoughtList from '../components/EditThoughtList/EditThoughtList';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import { deleteThought, getAllThoughts } from '../utils/NetworkCalls/ThoughtsAPI';
import { fetchThoughtFail, fetchThoughtSuccess, fetchThoughts } from '../redux/Thought/thoughtActions';
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";


export default function EditThoughtScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold

  });

  const { loading, thoughts } = useSelector(state => state.thoughts);
  const { authToken } = useSelector(state => state.auth)
  const [modalVisible, setModalVisible] = useState(false);
  const [delId, setDelId] = useState("");
  const dispatch = useDispatch();

  const showModal = (id) => {
    setModalVisible(true)
    setDelId(id);

  }

  const onDelete = (id, token) => {
    //console.log(id,token);
    deleteThought(id, token).then(res => {
      dispatch(fetchThoughts());
      getAllThoughts().then(res => { dispatch(fetchThoughtSuccess(res.data)); }).catch(err => { console.log(err); dispatch(fetchThoughtFail(err.message)) });
    })
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <View >
        <Modal animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false)
          }}
        >
          <View style={GlobalStyles.popUpContainer}>
            <View style={GlobalStyles.modalView}>
              <Text style={[GlobalStyles.modalText,{ fontFamily: "Poppins_400Regular" }]}>Are you sure ? You want to delete this thought?</Text>
              <View style={GlobalStyles.modalBottom}>
                <Pressable
                  style={[GlobalStyles.button, GlobalStyles.buttonClose]}
                  onPress={() => onDelete(delId, authToken)}>
                  <Text style={[GlobalStyles.textStyle,{ fontFamily: "Poppins_400Regular" }]}>Yes</Text>
                </Pressable>
                <Pressable
                  style={[GlobalStyles.button, GlobalStyles.buttonOpen]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={[GlobalStyles.textStyle,{ fontFamily: "Poppins_400Regular" }]}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={[GlobalStyles.brandText,{fontWeight:"100",fontFamily:"Poppins_500Medium" }]}>Bring Change To Your Thoughts</Text>
        {loading ? <Loading /> : <EditThoughtList data={thoughts} modalHandler={showModal} />}
      </View>
    </SafeAreaView>
  )
}