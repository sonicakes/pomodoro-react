import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TimerWrapper from './components/timer-wrapper/TimerWrapper';


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
