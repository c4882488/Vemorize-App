import React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './style';

class ChallengeCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleWordData:this.props.singleWordData,
    };
    console.log(props)
  }
  render() {
    
    const {handleOptionPress, singleWordData, count} = this.props;
    return (
      <View>
        <Text>{singleWordData.word}</Text>
        <Text>{count}</Text>
        <View>
        {singleWordData.option.map(option => {
          return <TouchableOpacity
                    onPress={()=>{handleOptionPress(count, option)}}
                    style={[
                        style.items,
                        ]}
                    >
                        <Text>{option}</Text>
                    </TouchableOpacity>;
        })}
        </View>
      </View>
    );
  }
}

export default ChallengeCard;