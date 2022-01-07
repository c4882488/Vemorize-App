import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChallengeCard from './ChallengeCard';
import {Actions} from 'react-native-router-flux';
import WordListPart from './WordListPart';

class ChallengePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleWordData: this.props.singleWordData,
      count: 0,
      last: 5,
      correct: 0,
      wrong: 0,
    };
  }

  handleOptionPress = (i, option) => {
    const answer = this.state.singleWordData[i].mean;
    if (option == answer) {
      alert('正確!');
      this.setState({correct: this.state.correct + 1});
    } else {
      alert('錯誤!');
      this.setState({wrong: this.state.wrong + 1});
    }
    this.setState({count: i + 1});
  };
  render() {
    const {singleWordData, handleNewRecord} = this.props;
    const {count, last, correct, wrong} = this.state;
    if (count != last) {
      var currentWord = singleWordData[count];
    } else {
      currentWord = singleWordData[0];
      const score = (correct / (correct + wrong)) * 100;
      console.log('答對: ' + correct + ' 答錯: ' + wrong + ' 分數: ' + score);
      const newRecord = {
        corrent: correct,
        wrong: wrong,
      };
      handleNewRecord(newRecord);
      // Actions.ChallengeList();
    }
    //console.log(singleWordData);
    return (
      <View style={styles.content}>
        {/* <Text>challengePage</Text> */}
        <ChallengeCard
          handleOptionPress={this.handleOptionPress}
          singleWordData={currentWord}
          count={count}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
    margin: 30,
    backgroundColor: '#fff',
    borderRadius: 35,
    paddingTop: 45,
    paddingBottom: 40,
  },
});

export default ChallengePage;
