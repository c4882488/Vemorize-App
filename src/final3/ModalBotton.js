import React from 'react';
import {View, Button} from 'react-native';
import WordForm from './WordForm';
import Modal from 'react-native-modal';

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
            backgroundColor: '#F8F8F8',
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
                }}
                style={{backgroundColor: '#F8F8F8'}}
              />
            </View>
            <WordForm
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
