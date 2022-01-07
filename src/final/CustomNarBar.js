import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Back from '../../assets/images/angle-left.svg';
import EyeClose from '../../assets/images/fi-bs-eye-crossed.svg';
import EyeOpen from '../../assets/images/fi-bs-eye.svg';

class CustomNarBar extends React.Component {
  render() {
    const {title, backIcon, eyeIcon} = this.props;
    return (
      <ImageBackground
        source={require('../../assets/images/Rectangle3.jpg')}
        style={styles.container}>
        <View style={styles.content}>
          <View style={styles.back}>
            {backIcon && (
              <TouchableOpacity
                onPress={() => {
                  Actions.pop();
                }}>
                <Back width={25} height={25} fill="#374957" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.title}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={styles.back}>
            {eyeIcon !== null && (
              <TouchableOpacity
                onPress={() => {
                  this.props.handlewords();
                }}>
                {eyeIcon === false ? (
                  <EyeOpen width={20} height={20} fill="#374957" />
                ) : (
                  <EyeClose width={20} height={20} fill="#374957" />
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    padding: 18,
    paddingTop: 18,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  back: {
    flex: 0.1,
    margin: 9,
  },
  title: {
    flex: 0.8,
    // marginLeft: 5,
    marginTop: -1,
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#374957',
    letterSpacing: 1,
  },
});

export default CustomNarBar;
