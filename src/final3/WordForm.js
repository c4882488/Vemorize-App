import React from 'react';
import {Text, View, TextInput, StyleSheet, Switch, Button, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Actions} from 'react-native-router-flux';

class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.idNumber+1,
      word: null,
      pos: 'n.',
      mean: null,
      color:"red",
      status:false,
    };
  }
  handleChangeStatus = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handlePress = () => {
    if (this.props.singleWord) {
      const {handleUpdateTodo, updateWordData} = this.props;

      Actions.pop({refresh: Math.random()});
      updateWordData(null);

      handleUpdateTodo(this.state);
    } else {
      const {handleAddTodo} = this.props;

      Actions.pop({
        refresh: Math.random(),
      });
      const addData = {
        id: this.state.id,
        word: this.state.word,
        pos: this.state.pos,
        mean: this.state.mean,
        color: this.state.color,
        status: this.state.status,
      };
      console.log(addData);
      handleAddTodo(addData);
    }

    this.setState({
      id:0,
      word: null,
      pos: 'n.',
      mean: null,
      color:"red",
      status:false,
    });
  };
  componentDidMount() {
    
    const {singleWord} = this.props;
    if (singleWord) {
      this.setState({
        id: singleWord.id,
        word: singleWord.word,
        pos: singleWord.pos,
        mean: singleWord.mean,
        color: singleWord.color,
        status: singleWord.status,
      });
    }
  }
  render() {
    const {singleWord} = this.props;
    console.log(singleWord)
    const {id, word, pos, mean, color, status} = this.state;
    var idText = id.toString();
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titles}>編號</Text>
          <View style={styles.textPadding}>
            <TextInput
              name="id"
              value={idText}
              onChangeText={val => this.handleChangeStatus('id', val)}
              style={styles.formTextInput}
              editable={false}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}>英文</Text>
          <View style={styles.textPadding}>
            <TextInput
              name="word"
              value={word}
              onChangeText={val => this.handleChangeStatus('word', val)}
              style={styles.formTextInput}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}>詞性</Text>
          <View style={styles.pickerBorder}>
            <Picker
              name="pos"
              selectedValue={pos}
              onValueChange={val => this.handleChangeStatus('pos', val)}
              style={styles.formPicker}>
              <Picker.Item label="名詞" value="n." />
              <Picker.Item label="形容詞" value="adj." />
              <Picker.Item label="動詞" value="v." />
            </Picker>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}>中文</Text>
          <View style={styles.textPadding}>
            <TextInput
              name="mean"
              value={mean}
              onChangeText={val => this.handleChangeStatus('mean', val)}
              style={styles.formTextInput}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}>詞性</Text>
          <View style={styles.pickerBorder}>
            <Picker
              name="color"
              selectedValue={color}
              onValueChange={val => this.handleChangeStatus('color', val)}
              style={styles.formPicker}>
              <Picker.Item label="紅色" value="red" />
              <Picker.Item label="黃色" value="yellow" />
            </Picker>
          </View>
        </View>
        <View style={[styles.content, styles.item]}>
          <Text style={styles.titles}>是否完成</Text>
          <Switch
            name="status"
            value={status}
            onValueChange={val => this.handleChangeStatus('status', val)}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={status ? '#767577' : '#81b0ff'}
            style={styles.formSwitch}
          />
        </View>
        <View style={[styles.content, styles.button]}>
          <Button
            style={styles.buttons}
            title={singleWord ? 'Update Todo' : 'Add Todo'}
            color="#81b0ff"
            onPress={this.handlePress}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.titles}></Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
  },
  titles: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 15,
  },
  content: {
    marginTop: 20,
  },
  pickerBorder: {
    marginTop: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  formPicker: {
    color: '#000',
    backgroundColor: '#fff',
  },
  formTextInput: {
    color: '#000',
    backgroundColor: '#fff',
    padding: 13,

    //marginLeft: 20,
  },
  formSwitch: {
    color: '#000',
    marginLeft: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginVertical: 5,
    //paddingHorizontal: 10,
  },
  button: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  buttons: {
    padding: 15,
    margin: 10,
  },
  textPadding: {
    marginTop: 10,
    paddingTop: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
  },
});
export default WordForm;
