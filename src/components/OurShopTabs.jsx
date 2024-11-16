import { useState } from 'react';
import AllMenuSection from '../smallcomponents/AllMenuSection';
import SaladSection from '../smallcomponents/SaladSection';
import PizzaSection from '../smallcomponents/PizzaSection';
import SoupSection from '../smallcomponents/SoupSection';
import DessertSection from '../smallcomponents/DessertSection';
import DrinkSection from '../smallcomponents/DrinkSection';
import '../assets/styles/OurSHopTabMenu.css';

const OurShopTabs = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState('AllMenu');

  // Tab data
  const tabs = [
    { id: 'AllMenu', label: 'All Menu', content: <AllMenuSection /> },
    { id: 'SALAD', label: 'Salad', content: <SaladSection /> },
    { id: 'PIZZA', label: 'Pizza', content: <PizzaSection /> },
    { id: 'SOUPS', label: 'Soups', content: <SoupSection /> },
    { id: 'DESSERT', label: 'Dessert', content: <DessertSection /> },
    { id: 'DRINKS', label: 'Drinks', content: <DrinkSection /> },
  ];

  // Find the active tab's content
  const activeContent = tabs.find(tab => tab.id === activeTab)?.content || (
    <div>Content not found</div>
  );

  return (
    <div>
      {/* Tab Menu */}
      <div className="tab-menu">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            aria-selected={activeTab === tab.id}
            role="tab"
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
