import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import WordItem from './WordItem';

class WordListPart extends React.Component {
  render() {
    const {
      showWord,
      words,
      wordStatus,
      onPress,
      onLeftSwipeable,
      onRightSwipeable,
      rightActionsPress,
      leftActionsPress,
      toggleModal,
      updateWordData,
    } = this.props;
    const unMemorizedTodos = words.filter(
      singleWord => singleWord.status === false,
    );
    const MemorizedTodos = words.filter(
      singleWord => singleWord.status === true,
    );
    if (wordStatus == '全部') {
      var totalWords = words;
    } else if (wordStatus == '已背熟') {
      var totalWords = MemorizedTodos;
    } else if (wordStatus == '未背熟') {
      var totalWords = unMemorizedTodos;
    }
    return (
      <View style={styles.body}>
        <ScrollView style={styles.content}>
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
                toggleModal={toggleModal}
                updateWordData={updateWordData}
                showWord={showWord}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    paddingBottom: 160,
    // backgroundColor: '#f7f7f7',
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
    marginTop: 8,
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
    // padding: 10,
    // paddingTop: 0,
    // paddingBottom: 150,
  },
});
export default WordListPart;
