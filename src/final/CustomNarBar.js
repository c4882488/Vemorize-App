import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Back from '../../assets/images/angle-left.svg';
import EyeClose from '../../assets/images/fi-bs-eye-crossed.svg';
import EyeOpen from '../../assets/images/fi-bs-eye.svg';

class CustomNarBar extends React.Component {
  render(props) {
    return (
      <ImageBackground
        source={require('../../assets/images/Rectangle3.jpg')}
        style={{padding: 10}}>
        <View>
          <TouchableOpacity>
            <Back width={30} height={30} fill="#374957" />
          </TouchableOpacity>
          <Text>Text</Text>
          <TouchableOpacity>
            <EyeClose width={25} height={25} fill="#374957" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default CustomNarBar;
