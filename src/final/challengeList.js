import React from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import singleWordData from './singleWordData';
import RecordData from './RecordData';

class ChallengeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleWordData:singleWordData,
      RecordData:RecordData,
    };
    console.log(props);
  }
  handlePress = () => {
    Actions.ChallengePage({singleWordData:singleWordData, handleNewRecord:this.handleNewRecord});
  };
  handleNewRecord = (newRecord) => {
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
        console.log(this.state);
      },
    );
  };
  
  render() {
    const {RecordData}=this.state;
    return (
      <View>
        <Text>challengeList</Text>
        <View>
          <Button
            title="Page"
            onPress={this.handlePress}
          />
        </View>
        {RecordData.map(Record => {
          return <View>
                  <Text>{Record.id + ". " + Record.corrent + " : " + Record.wrong}</Text>
                 </View>;
        })}
      </View>
    );
  }
}

export default ChallengeList;