import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/colors';

class TypeItem extends React.Component {
  render() {
    const {name, onPress, status} = this.props;
    return (
      <TouchableOpacity
        style={[styles.items, status ? styles.buttons : styles.onButtons]}
        onPress={() => onPress(name)}>
        {/* <View style={styles.iconContent}>
          <Text style={styles.subtitle}>＞</Text>
        </View> */}
        <View style={styles.content}>
          <Text style={[styles.text, status ? '' : {color: colors.blackgray}]}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 6,
    fontSize: 13,
  },
  items: {
    margin: 8,
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
    borderRadius: 50,
  },
  content: {
    alignSelf: 'center',
  },
  buttons: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    borderWidth: 2,
  },
  onButtons: {
    borderColor: colors.yellow,
    backgroundColor: '#fff',
    borderWidth: 2,
  },
});
export default TypeItem;
