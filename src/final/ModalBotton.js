import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import WordForm from './WordForm';
import Modal from 'react-native-modal';
import colors from '../../assets/colors/colors';

class ModalBotton extends React.Component {
  render() {
    const {
      toggleModal,
      handleAddTodo,
      isModalVisible,
      singleWord,
      idNumber,
      handleUpdateTodo,
      updateWordData,
      updateSetWordData,
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={isModalVisible}
        style={{
          margin: 0,
        }}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}>
        <View
          style={{
            height: '65%',
            width: '100%',
            marginTop: 'auto',
            backgroundColor: colors.background,
            justifyContent: 'space-around',
          }}>
          <View>
            <View
              style={{
                marginTop: -60,
                height: 40,
                width: 40,
                alignSelf: 'flex-end',
                marginRight: 15,
                overflow: 'hidden',
                borderRadius: 50,
              }}>
              <TouchableOpacity
                title="×"
                onPress={() => {
                  toggleModal();
                  updateSetWordData();
                  Actions.refresh({onAddWord: false, refresh: Math.random()});
                  //Actions.singleWord();
                }}
                color={colors.yellow}
                style={{
                  backgroundColor: colors.yellow,
                }}>
                <Text
                  style={{
                    color: colors.iconblack,
                    fontSize: 16,
                    padding: 6,
                    fontFamily: 'Poppins-Medium',
                    marginLeft: 9,
                  }}>
                  x
                </Text>
              </TouchableOpacity>
            </View>
            <WordForm
              toggleModal={toggleModal}
              handleAddTodo={handleAddTodo}
              handleUpdateTodo={handleUpdateTodo}
              updateWordData={updateWordData}
              singleWord={singleWord}
              updateSetWordData={updateSetWordData}
              idNumber={idNumber}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalBotton;
