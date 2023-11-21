import Timer from "./components/timer/Timer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';


function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); // 25 minutes timer
  return (
    <div className="App">
      <div>
        <Tabs>
  <TabList>
    <Tab>Pomodoro Session</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Timer expiryTimestamp={time}/>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </div>
    </div>
  );
}

export default App;
