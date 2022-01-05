import React from 'react';
import {View} from 'react-native';
import {Router, Tabs, Stack, Scene} from 'react-native-router-flux';
import wordList from './wordList';
import challengeList from './challengeList';
import wordFrom from './wordForm';
import Badge from './images/fi-bs-badge.svg';
import Chart from './images/fi-bs-chart-pie-alt.svg';
import Plus from './images/fi-bs-plus.svg';
import colors from '../../assets/colors/colors';

const BadgeIcon = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: colors.yellow,
        borderTopWidth: props.focused ? 3 : 0,
        padding: 15,
      }}>
      <Badge
        width={20}
        height={20}
        fill={props.focused ? '#4E4E4E' : '#D0CFC5'}
      />
    </View>
  );
};

const ChartIcon = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: colors.yellow,
        borderTopWidth: props.focused ? 3 : 0,
        padding: 15,
      }}>
      <Chart
        width={20}
        height={20}
        fill={props.focused ? '#4E4E4E' : '#D0CFC5'}
      />
    </View>
  );
};

const PlusIcon = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: colors.yellow,
        borderTopWidth: props.focused ? 3 : 0,
        padding: 15,
      }}>
      <Plus
        width={20}
        height={20}
        fill={props.focused ? '#4E4E4E' : '#D0CFC5'}
      />
    </View>
  );
};

const Route = () => {
  return (
    <Router>
      <Tabs
        headerLayoutPreset="center"
        tabBarPosition="bottom"
        showLabel={false}
        tabStyle={{backgroundColor: colors.navBackground}}>
        <Stack key="root" title="singleWord" icon={ChartIcon}>
          <Scene
            key="singleWord"
            component={wordList}
            title="Single Word"
            initial
          />
        </Stack>
        <Scene
          key="wordFrom"
          component={wordFrom}
          title="Add word"
          icon={PlusIcon}
        />
        <Scene
          key="challengeList"
          component={challengeList}
          icon={BadgeIcon}
          title="Challenge"
        />
      </Tabs>
    </Router>
  );
};

export default Route;
