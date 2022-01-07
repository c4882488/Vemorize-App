import React from 'react';
import {Animated, Text, View, ScrollView, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import singleWordData from './singleWordData';
import StatusItem from './StatusItem';
import WordList from './WordList';
import ModalBotton from './ModalBotton';
import CustomNarBar from './CustomNarBar';

class WordClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: singleWordData,
      currentStatus: '全部',
      showWord: true,
      singleWord: null,
      isModalVisible: this.props.onAddWord ? true : false,
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
    console.log(singleWord);
    console.log(this.state.words);
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
        console.log('sss');
        //console.log(this.state.words);
        //Actions.singleWord({words: this.state.words, refresh: Math.random()});
        Actions.refresh({words: this.state.words, refresh: Math.random()});
      },
    );
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
    this.setState({
      currentStatus: name,
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
          borderRadius: 15,
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
    this.setState({singleWord: null});
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
          borderRadius: 15,
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
    const newWords = this.state.words.filter(
      singleWord => singleWord.id !== id,
    );
    this.setState({words: newWords});
    Actions.refresh({words: newWords});
  };

  updateWordData = currentWord => {
    this.setState({singleWord: currentWord}, () => {
      this.toggleModal();
    });
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  handlewords = () => {
    this.setState({showWord: !this.state.showWord});
  };
  componentDidMount() {
    this.props.navigation.setParams({
      navBar: e => {
        return (
          <CustomNarBar
            backIcon={false}
            eyeIcon={this.state.showWord}
            handlewords={this.handlewords}
            title="Words"
          />
        );
      },
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.showWord !== this.state.showWord) {
      this.props.navigation.setParams({
        navBar: e => {
          return (
            <CustomNarBar
              backIcon={false}
              eyeIcon={this.state.showWord}
              handlewords={this.handlewords}
              title="Words"
            />
          );
        },
      });
    }
  }

  render(props) {
    //console.log(this.props.onAddWord);
    const {isModalVisible, singleWord, currentStatus} = this.state;
    return (
      <View>
        {/* <Text style={styles.subtitle}>項目</Text> */}
        <View>
          <View style={styles.topButton}>
            <StatusItem
              name="全部"
              status={currentStatus === '全部' ? true : false}
              onPress={this.ClassPress}
            />
            <StatusItem
              name="已背熟"
              status={currentStatus === '已背熟' ? true : false}
              onPress={this.ClassPress}
            />
            <StatusItem
              name="未背熟"
              status={currentStatus === '未背熟' ? true : false}
              onPress={this.ClassPress}
            />
          </View>
        </View>

        {/* <Text style={styles.line}></Text> */}
        <ScrollView style={styles.content}>
          <WordList
            words={this.state.words}
            wordStatus={this.state.currentStatus}
            showWord={this.state.showWord}
            onPress={this.handlePress}
            handleAddTodo={this.handleAddTodo}
            handleUpdateTodo={this.handleUpdateTodo}
            onLeftSwipeable={this.renderLeftActions}
            onRightSwipeable={this.renderRightActions}
            rightActionsPress={this.rightActionsPress}
            leftActionsPress={this.leftActionsPress}
            toggleModal={this.toggleModal}
            updateWordData={this.updateWordData}
          />
        </ScrollView>
        <ModalBotton
          isModalVisible={isModalVisible}
          toggleModal={this.toggleModal}
          handleAddTodo={this.handleAddTodo}
          handleUpdateTodo={this.handleUpdateTodo}
          updateWordData={this.updateWordData}
          singleWord={singleWord}
          idNumber={this.state.words.length}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topButton: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 18,
    marginRight: 18,
  },
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
    // padding: 10,
    paddingTop: 20,
    marginLeft: 18,
    marginRight: 18,
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(200, 200, 200 ,0.2)',
    alignSelf: 'stretch',
  },
});
export default WordClass;
