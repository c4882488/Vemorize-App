import React from 'react';
import {Router, Tabs, Stack, Scene} from 'react-native-router-flux';
import WordList from './WordList';
import challengeList from './challengeList';
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
        </Stack>
        <Scene key="wordFrom" component={WordFrom} title="New Add word" />
        <Scene
          key="challengeList"
          component={challengeList}
          title="Challenge"
        />
      </Tabs>
    </Router>
  );
};

export default Route;
