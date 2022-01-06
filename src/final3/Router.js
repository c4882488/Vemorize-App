import React from 'react';
import {Router, Tabs, Stack, Scene} from 'react-native-router-flux';
import WordList from './WordList';
import ChallengeList from './ChallengeList';
import ChallengePage from './ChallengePage';
import WordFrom from './WordForm';
import WordClass from './WordClass';

const Route = () => {
  return (
    <Router>
      <Tabs
        headerLayoutPreset="center"
        tabBarPosition="bottom"
        // showLabel={false}
      >
        <Stack key="root" title="singleWord">
          <Scene
            key="singleWord"
            component={WordClass}
            title="Single Word"
            initial
          />
          <Scene
          key="WordList"
          component={WordList}
          title="待辦清單"
          back
        />
        <Scene
          key="ChallengePage"
          component={ChallengePage}
          title="Challenge"
        />
        </Stack>
        <Scene key="wordFrom" component={WordFrom} title="New Add word" />
        <Scene
          key="ChallengeList"
          component={ChallengeList}
          title="Challenge"
        />
      </Tabs>
    </Router>
  );
};

export default Route;
