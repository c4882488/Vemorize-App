import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Router, Tabs, Stack, Scene} from 'react-native-router-flux';
import WordClass from './WordClass';
import WordList from './WordList';
import ChallengeList from './ChallengeList';
import WordFrom from './WordForm';
import Badge from '../../assets/images/fi-bs-badge.svg';
import Chart from '../../assets/images/fi-bs-chart-pie-alt.svg';
import Plus from '../../assets/images/fi-bs-plus.svg';
import colors from '../../assets/colors/colors';
import ChallengePage from './ChallengePage';
import CustomNarBar from './CustomNarBar';

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
        width={props.focused ? 25 : 20}
        width={props.focused ? 25 : 20}
        fill={props.focused ? '#374957' : '#D0CFC5'}
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
        width={props.focused ? 25 : 20}
        width={props.focused ? 25 : 20}
        fill={props.focused ? '#374957' : '#D0CFC5'}
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
        width={props.focused ? 25 : 20}
        width={props.focused ? 25 : 20}
        fill={props.focused ? '#374957' : '#D0CFC5'}
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
            component={WordClass}
            title="Single Word"
            initial
          />
          <Scene key="WordList" component={WordList} title="待辦清單" back />
          <Scene
            key="ChallengePage"
            component={ChallengePage}
            title="Challenge"
          />
        </Stack>
        <Scene
          key="wordFrom"
          component={WordFrom}
          title="Add word"
          icon={PlusIcon}
          navBar={() => (
            <CustomNarBar backIcon={false} eyeIcon={null} title="Add word" />
          )}
        />
        <Scene
          key="challengeList"
          component={ChallengeList}
          icon={BadgeIcon}
          title="Challenge"
          navBar={() => (
            <CustomNarBar backIcon={false} eyeIcon={null} title="Challenge" />
          )}
        />
      </Tabs>
    </Router>
  );
};

export default Route;
