import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  content: {
    flex: 0.4,
    marginLeft: 10,
  },
  mean: {
    flex: 0.5,
    marginTop: 7,
  },
  items: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    // marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 23,
    borderRadius: 15,
    elevation: 3,
  },
  opti: {
    opacity: 0.9,
  },
  itemTitleUncheck: {
    marginBottom: 3,
    color: '#3f3f3f',
  },
  itemTitlecheck: {
    marginBottom: 3,
    color: '#9f9f9f',
    textDecorationLine: 'line-through',
  },
  itemContent: {
    color: '#8f8f8f',
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    letterSpacing: 1.5,
  },
  itemClockcheck: {
    alignSelf: 'center',
    color: colors.blackgray,
  },
  itemClockUncheck: {
    alignSelf: 'center',
    color: '#333',
  },
  itemsBorderdBlue: {
    borderColor: '#5CAFFF',
    borderWidth: 1.2,
  },
  itemsBorderdRed: {
    borderColor: '#FF7171',
    borderWidth: 1.2,
  },
  itemsBorderdYellow: {
    borderColor: '#FFD547',
    borderWidth: 1.2,
  },
  itemsBorderdGrey: {
    borderColor: '#bcbcbc',
    borderWidth: 1.2,
  },
  img: {
    width: 30,
    height: 30,
  },
  imgContent: {
    alignSelf: 'center',
    flex: 0.1,
    marginLeft: 10,
  },
  iconText: {
    fontFamily: 'Poppins-Black',
    fontSize: 18,
  },
  words: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    letterSpacing: 1,
  },
});

export default styles;
