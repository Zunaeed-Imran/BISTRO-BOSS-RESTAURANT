import { useState } from 'react';
import AllMenuSection from '../smallcomponents/AllMenuSection';
import SaladSection from '../smallcomponents/SaladSection';
import PizzaSection from '../smallcomponents/PizzaSection';
import SoupSection from '../smallcomponents/SoupSection';
import DessertSection from '../smallcomponents/DessertSection';
import DrinkSection from '../smallcomponents/DrinkSection';
import  '../assets/styles/OurSHopTabMenu.css';

const OurShopTabs = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Tab data
  const tabs = [
    { id: 'tab1', label: 'AllMenu', content: <AllMenuSection /> },
    { id: 'tab2', label: 'SALAD', content: <SaladSection/> },
    { id: 'tab3', label: 'PIZZA', content: <PizzaSection/> },
    { id: 'tab4', label: 'SOUPS', content: <SoupSection/> },
    { id: 'tab5', label: 'DESSERT', content: <DessertSection/> },
    { id: 'tab6', label: 'DRINKS', content: <DrinkSection/> },
  ];

  // Find the active tab's content
  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div>
      {/* Tab Menu */}
      <div className="tab-menu">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Render the active tab's content */}
      <div className="tab-content">{activeContent}</div>
    </div>
  );
};

export default OurShopTabs;
