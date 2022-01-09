import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import singleWordData from './singleWordData';
import RecordData from './RecordData';
import colors from '../../assets/colors/colors';

class ChallengeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleWordData: singleWordData,
      RecordData: RecordData,
    };
  }
  handlePress = () => {
    Actions.ChallengePage({
      singleWordData: singleWordData,
      handleNewRecord: this.handleNewRecord,
    });
  };
  handleNewRecord = newRecord => {
    this.setState(
      {
        RecordData: [
          ...this.state.RecordData,
          {
            id: this.state.RecordData.length + 1,
            ...newRecord,
          },
        ],
      },
      () => {
        Actions.pop();
        //Actions.refresh({RecordData: this.state.words, refresh: Math.random()});
      },
    );
  };

  render() {
    const scoreColor = corrent => {
      if (corrent >= 5) {
        return '#3BD341';
      }
      if (corrent >= 3 && corrent <= 4) {
        return '#EDE410';
      }
      return '#DD3D3D';
    };
    const {RecordData} = this.state;
    return (
      <View style={styles.container}>
        {/* <Text>challengeList</Text> */}
        <View>
          <TouchableOpacity
            title="Page"
            style={[styles.content, styles.button]}
            onPress={this.handlePress}>
            <Text style={styles.buttonText}>開始挑戰</Text>
          </TouchableOpacity>
        </View>
        {/* 介紹 */}
        <View
          style={{
            marginTop: 10,
            alignItems: 'flex-end',
            marginRight: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 20,
              overflow: 'hidden',
            }}>
            <Text
              style={[{fontSize: 37, marginTop: -13}, {color: scoreColor(1)}]}>
              ·
            </Text>
            <Text style={styles.subText}>待加強</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 20,
              overflow: 'hidden',
            }}>
            <Text
              style={[{fontSize: 37, marginTop: -13}, {color: scoreColor(3)}]}>
              ·
            </Text>
            <Text style={styles.subText}>　基礎</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 20,
              overflow: 'hidden',
            }}>
            <Text
              style={[{fontSize: 37, marginTop: -13}, {color: scoreColor(5)}]}>
              ·
            </Text>
            <Text style={styles.subText}>　精熟</Text>
          </View>
        </View>

        <View style={styles.Challengeitem}>
          {RecordData.map(Record => {
            return (
              <View style={[styles.items]}>
                <Text style={[styles.dot, {color: scoreColor(Record.corrent)}]}>
                  ·
                </Text>
                <Text style={styles.title}>測驗{Record.id + ')'}</Text>
                <View style={styles.score}>
                  <Text style={styles.corrent}>{Record.corrent}</Text>
                  <Text style={styles.slash}>/</Text>
                  <Text style={styles.tot}>5</Text>
                </View>
                <Text style={styles.timeText}>2021-01-01 12:00</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 13,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    marginTop: 15,
  },
  button: {
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.yellow,
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 6,
    fontFamily: 'Poppins-Light',
  },
  items: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 7,
    paddingLeft: 20,
    paddingRight: 23,
    borderRadius: 15,
    elevation: 3,
  },
  timeText: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.5,
    fontSize: 11,
    alignItems: 'center',
    alignSelf: 'center',
    color: colors.icongray,
  },
  dot: {
    fontSize: 37,
    alignItems: 'center',
    alignSelf: 'center',
    // color: '#DD3D3D',
  },
  title: {
    fontFamily: 'Poppins-Light',
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
    letterSpacing: 3,
    color: colors.black,
  },
  score: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 23,
    marginTop: 3,
  },
  corrent: {
    letterSpacing: 1,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.black,
  },
  slash: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
    letterSpacing: 4,
    color: colors.icongray,
  },
  tot: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 3,
    letterSpacing: 4,
    marginTop: 5,
    color: colors.icongray,
  },
  subText: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 12,
  },
});
export default ChallengeList;
