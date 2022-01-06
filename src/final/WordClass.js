import React from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import singleWordData from './singleWordData';
import StatusItem from './StatusItem';

class WordClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words:singleWordData,
      statusData:["已背熟", "未背熟"],

    };
  }
  handlePress = id => {
    const newWords = this.state.words.map(word => {
      return word.id === id ? {...word, status: !word.status} : word;
    });
    this.setState({words: newWords});
    Actions.refresh({words: newWords});
  };
  handleAddTodo = singleWord => {
    this.setState(
      {
        words: [
          ...this.state.words,
          {
            id: this.state.words.length + 1,
            ...singleWord,
          },
        ],
      },
      () => {
        console.log('handleAddTodo');
        Actions.refresh({words: this.state.words, refresh: Math.random()});
      },
    );
    //這邊好像來是會比較卡 算惹
  };
  handleUpdateTodo = wordData => {
    const newWords = this.state.words.map(singleWord => {
      return singleWord.id === wordData.id ? wordData : singleWord;
    });
    this.setState({words: newWords}, () => {
      Actions.refresh({words: this.state.words, refresh: Math.random()});
    });
  };
  ClassPress = name => {
    Actions.WordList({
      words: this.state.words,
      wordStatus: name,
      idNumber:this.state.words.length,
      onPress: this.handlePress,
      handleAddTodo: this.handleAddTodo,
      handleUpdateTodo: this.handleUpdateTodo,
      onLeftSwipeable: this.renderLeftActions,
      onRightSwipeable: this.renderRightActions,
      rightActionsPress: this.rightActionsPress,
      leftActionsPress: this.leftActionsPress,
      
    });
  };
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#4ba5f7',
          borderRadius: 50,
          margin: 10,
          justifyContent: 'center',
        }}>
        <Animated.Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            fontWeight: '600',
          }}>
          修改
        </Animated.Text>
      </View>
    );
  };
  leftActionsPress = (word, toggleModal) => {
    toggleModal();
    //Actions.TodoForm({todo: todo, handleUpdateTodo: this.handleUpdateTodo});
  };
  renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ff5916',
          borderRadius: 50,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Animated.Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            fontWeight: '600',
          }}>
          刪除
        </Animated.Text>
      </View>
    );
  };
  rightActionsPress = id => {
    const newWords = this.state.words.filter(singleWord => singleWord.id !== id);
    this.setState({words: newWords});
    Actions.refresh({words: newWords});
  };

  render() {
    const {statusData} = this.state;
    return (
      <View style={styles.content}>
        <Text style={styles.subtitle}>項目</Text>
        <StatusItem name="全部" onPress={this.ClassPress} />
        {statusData.map(status => {
          return <StatusItem  name={status} onPress={this.ClassPress}/>;
        })}
        <Text style={styles.line} ></Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subtitle: {
    color: '#000',
    marginTop: 35,
    margin: 15,
    marginBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
  },
  content: {
    padding: 10,
    paddingTop: 0,
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(200, 200, 200 ,0.2)',
    alignSelf: 'stretch',
  },
});
export default WordClass;