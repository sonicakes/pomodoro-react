import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TimerWrapper from './components/timer-wrapper/TimerWrapper';
import Customize from './components/form/Customize';
import { useState } from 'react';
import ApiCall from './components/data/apiCall';
import Alarm from './components/sound/Alarm';


function App() {
  const pomodoro = 'Pomodoro Session';
  const shortbreak = 'Short Break';
  const longbreak = 'Long Break';

  
  

  return (
    <div className="App">
      <div>
        <Tabs>
  <TabList>
    <Tab>{pomodoro}</Tab>
    <Tab>{shortbreak}</Tab>
    <Tab>{longbreak}</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <TimerWrapper type={pomodoro} />
    <Customize />
    <ApiCall />
    <Alarm />
    </TabPanel>
    <TabPanel>
    <TimerWrapper type={shortbreak} />
    </TabPanel>
    <TabPanel>
    <TimerWrapper type={longbreak} />
    </TabPanel>
  </TabPanels>
</Tabs>
      </div>
    </div>
  );
}

export default App;
