import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';

class ChallengeCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleWordData: this.props.singleWordData,
    };
    //console.log(props);
  }
  render() {
    const {handleOptionPress, singleWordData, count} = this.props;
    return (
      <View>
        <View style={styles.context}>
          <Text style={styles.title}>{count + 1 + ') '}選出此單字的意思?</Text>
          <Text style={styles.subtitle}>{singleWordData.word}</Text>
        </View>
        {/* <Text>{count}</Text> */}
        <View style={styles.options}>
          {singleWordData.option.map(option => {
            return (
              // <View>
              <TouchableOpacity
                onPress={() => {
                  handleOptionPress(count, option);
                }}
                style={[styles.item]}>
                <Text style={styles.text}>{option}</Text>
              </TouchableOpacity>
              // </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  context: {
    marginBottom: 40,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '85%',
    backgroundColor: colors.navBackground,
    margin: 20,
    padding: 21,
    paddingTop: 60,
    paddingBottom: 60,
    borderRadius: 15,
    elevation: 2,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Light',

    letterSpacing: 3,
    fontSize: 20,
  },
  title: {
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  subtitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginLeft: 25,
    marginTop: 10,
    letterSpacing: 2,
    color: colors.black,
  },
});

export default ChallengeCard;
