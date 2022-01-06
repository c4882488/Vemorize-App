import React from 'react';
import {Button, Text, View, ScrollView, StyleSheet} from 'react-native';
import WordItem from './WordItem';
import ModalBotton from './ModalBotton';

class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //修改用
      singleWord: null,
      isModalVisible: false,
    };
  }
  updateWordData = currentWord => {
    this.setState({singleWord: currentWord}, () => {
      this.toggleModal();
    });
  };
  
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: '新增',
      onRight: () => {
        this.toggleModal();
      },
      title: this.props.wordStatus,
    });
  }
  render() {
    const {isModalVisible, singleWord} = this.state;
    const {
      words,
      wordStatus,
      idNumber,
      onPress,
      onLeftSwipeable,
      onRightSwipeable,
      rightActionsPress,
      leftActionsPress,
    } = this.props;
    const unMemorizedTodos =words.filter(singleWord => singleWord.status === false);
    const MemorizedTodos =words.filter(singleWord => singleWord.status === true);
    if (wordStatus=="全部") {
      var totalWords = words;
    }else if(wordStatus=="已背熟"){
      var totalWords = MemorizedTodos;
    }else if(wordStatus=="未背熟"){
      var totalWords = unMemorizedTodos;
    }
    return (
      <View style={styles.body}>
        <ScrollView style={styles.content}>
          <Text style={styles.subtitle}>未完成</Text>
          <Text style={styles.subSuggest}>左右滑動來修改/刪除事項</Text>
          <View style={styles.todoItme}>
            {totalWords.map(singleWord => (
              <WordItem
                key={singleWord.id}
                singleWord={singleWord}
                onPress={onPress}
                onLeftSwipeable={onLeftSwipeable}
                onRightSwipeable={onRightSwipeable}
                rightActionsPress={rightActionsPress}
                leftActionsPress={leftActionsPress}
                toggleModal={this.toggleModal}
                updateWordData={this.updateWordData}
              />
            ))}
          </View>
          <ModalBotton
            isModalVisible={isModalVisible}
            toggleModal={this.toggleModal}
            handleAddTodo={this.props.handleAddTodo}
            handleUpdateTodo={this.props.handleUpdateTodo}
            updateWordData={this.updateWordData}
            singleWord={singleWord}
            idNumber={idNumber}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  nearbar: {
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    alignSelf: 'center',
    borderRadius: 11.5,
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    marginLeft: 10,
    borderColor: '#878787',
    borderWidth: 0.5,
  },
  title: {
    color: '#333',
    fontSize: 23,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 7,
  },
  subtitle: {
    color: '#000',
    marginTop: 35,
    margin: 15,
    marginBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subSuggest: {
    color: '#8f8f8f',
    marginLeft: 15,
  },
  todoItme: {
    marginTop: 15,
  },
  info: {
    alignSelf: 'center',
    borderRadius: 11.5,
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    marginRight: 10,
    borderColor: '#878787',
    borderWidth: 0.5,
  },
  content: {
    padding: 10,
    paddingTop: 0,
  },
});
export default WordList;
