import React from 'react';
import {View, Button} from 'react-native';
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
            height: '68%',
            width: '100%',
            marginTop: 'auto',
            backgroundColor: colors.background,
            justifyContent: 'space-around',
          }}>
          <View>
            <View
              style={{
                height: 35,
                width: 35,
                alignSelf: 'flex-end',
                marginRight: 15,
                overflow: 'hidden',
                borderRadius: 50,
              }}>
              <Button
                title="×"
                onPress={() => {
                  toggleModal();
                  //Actions.singleWord();
                }}
                color={colors.yellow}
                style={{
                  backgroundColor: '#F8F8F8',
                  color: colors.iconblack,
                }}
              />
            </View>
            <WordForm
              toggleModal={toggleModal}
              handleAddTodo={handleAddTodo}
              handleUpdateTodo={handleUpdateTodo}
              updateWordData={updateWordData}
              singleWord={singleWord}
              idNumber={idNumber}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalBotton;
