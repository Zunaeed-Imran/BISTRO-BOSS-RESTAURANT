import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllMenuSection from '../smallcomponents/AllMenuSection';
import SaladSection from '../smallcomponents/SaladSection';
import PizzaSection from '../smallcomponents/PizzaSection';
import SoupSection from '../smallcomponents/SoupSection';
import DessertSection from '../smallcomponents/DessertSection';
import DrinkSection from '../smallcomponents/DrinkSection';
// import '../assets/styles/OurSHopTabMenu.css';

const OurShopTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="">
      <Tabs
        className=""
        selectedIndex={tabIndex}
        onSelect={index => setTabIndex(index)}
      >
        {/* Tab List */}
        <TabList className={'flex gap-4 lg:gap-10 text-xl justify-center items-center pt-10 pb-7'}>
          <Tab>All Menu</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          <AllMenuSection />
        </TabPanel>
        <TabPanel>
          <SaladSection />
        </TabPanel>
        <TabPanel>
          <PizzaSection />
        </TabPanel>
        <TabPanel>
          <SoupSection />
        </TabPanel>
        <TabPanel>
          <DessertSection />
        </TabPanel>
        <TabPanel>
          <DrinkSection />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShopTabs;
