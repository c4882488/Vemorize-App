import React from 'react';
import {View} from 'react-native';
import {Actions, Router, Tabs, Stack, Scene} from 'react-native-router-flux';
import WordClass from './WordClass';
// import WordList from './WordList';
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
        <Stack key="root" icon={ChartIcon}>
          <Scene
            key="singleWord"
            component={WordClass}
            initial
            cardStyle={{
              backgroundColor: '#FFF7DC',
            }}
          />
        </Stack>
        <Scene
          key="wordFrom"
          component={WordClass}
          icon={PlusIcon}
          navBar={() => (
            <CustomNarBar backIcon={false} eyeIcon={null} title="Add word" />
          )}
          onEnter={() => {
            Actions.singleWord({onAddWord: true});
          }}
        />
        <Stack key="Challenge" icon={BadgeIcon}>
          <Scene
            key="ChallengeList"
            component={ChallengeList}
            icon={BadgeIcon}
            title="Challenge"
            navBar={() => (
              <CustomNarBar backIcon={false} eyeIcon={null} title="Challenge" />
            )}
            cardStyle={{
              backgroundColor: '#FFF7DC',
            }}
          />
          <Scene
            key="ChallengePage"
            component={ChallengePage}
            navBar={() => (
              <CustomNarBar backIcon={true} eyeIcon={null} title="Challenge" />
            )}
            cardStyle={{
              backgroundColor: '#FFF7DC',
            }}
          />
        </Stack>
      </Tabs>
    </Router>
  );
};

export default Route;
