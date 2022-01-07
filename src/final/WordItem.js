import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import style from './style';

function WordItem(props) {
  const {
    singleWord: {id, word, pos, mean, color, status},
    showWord,
    onPress,
    onLeftSwipeable,
    onRightSwipeable,
    rightActionsPress,
    updateWordData,
  } = props;
  // const completedIcon = 'https://i.imgur.com/jxsdKdh.png';
  // const unCompletedIcon = 'https://i.imgur.com/zrs3alB.png';
  const borderColor = (status, completed) => {
    if (completed) {
      return style.itemsBorderdGrey;
    }
    switch (status) {
      case 'danger':
        return style.itemsBorderdRed;
      case 'warning':
        return style.itemsBorderdYellow;
      default:
        return style.itemsBorderdBlue;
    }
  };
  return (
    <Swipeable
      renderLeftActions={onLeftSwipeable}
      renderRightActions={onRightSwipeable}
      onSwipeableLeftWillOpen={() => {
        updateWordData(props.singleWord);
      }}
      onSwipeableRightWillOpen={() => rightActionsPress(id)}
      rightThreshold="20">
      <TouchableOpacity
        onPress={() => onPress(id)}
        style={[style.items, status ? style.opti : '']}>
        <View style={style.imgContent}>
          <Text style={[{color: color}, style.iconText]}>{'>'}</Text>
        </View>
        <View style={style.content}>
          <Text
            style={[
              style.words,
              status ? style.itemTitlecheck : style.itemTitleUncheck,
            ]}>
            {word}
          </Text>
          {/* <Text style={style.itemContent}>{mean}</Text> */}
        </View>
        <View style={style.mean}>
          <Text style={style.itemContent}>
            {pos}
            {showWord ? mean : ''}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

export default WordItem;
