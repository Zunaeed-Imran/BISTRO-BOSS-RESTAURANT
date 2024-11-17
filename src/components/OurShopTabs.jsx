import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllMenuSection from '../smallcomponents/AllMenuSection';
import SaladSection from '../smallcomponents/SaladSection';
import PizzaSection from '../smallcomponents/PizzaSection';
import SoupSection from '../smallcomponents/SoupSection';
import DessertSection from '../smallcomponents/DessertSection';
import DrinkSection from '../smallcomponents/DrinkSection';

const OurShopTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="pb-7">
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        {/* Tab List */}
        <TabList className="flex gap-4 lg:gap-10 text-xl justify-center items-center pt-10 pb-7">
          <Tab
            className="btn hover:text-[#D99904]"
            selectedClassName="text-[#D99904] font-bold btn"
          >
            All Menu
          </Tab>
          <Tab
            className="btn hover:text-[#D99904]"
            selectedClassName="text-[#D99904] font-bold btn"
          >
            Salad
          </Tab>
          <Tab
            className="btn hover:text-[#D99904]"
            selectedClassName="text-[#D99904] font-bold btn"
          >
            Pizza
          </Tab>
          <Tab
            className="btn hover:text-[#D99904]"
            selectedClassName="text-[#D99904] font-bold btn"
          >
            Soup
          </Tab>
          <Tab
            className="btn hover:text-[#D99904]"
            selectedClassName="text-[#D99904] font-bold btn"
          >
            Dessert
          </Tab>
          <Tab
            className="btn hover:text-[#D99904]"
            selectedClassName="text-[#D99904] font-bold btn"
          >
            Drinks
          </Tab>
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
