import { useState } from 'react';

const OurShopTabs = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Tab data
  const tabs = [
    { id: 'tab1', label: 'AllMenu', content: <div>Content for Tab 1</div> },
    { id: 'tab2', label: 'SALAD', content: <div>Content for Tab 2</div> },
    { id: 'tab3', label: 'PIZZA', content: <div>Content for Tab 3</div> },
    { id: 'tab3', label: 'SOUPS', content: <div>Content for Tab 3</div> },
    { id: 'tab3', label: 'DESSERT', content: <div>Content for Tab 3</div> },
    { id: 'tab3', label: 'DRINKS', content: <div>Content for Tab 3</div> },
  ];

  // Filter the active tab's content
  const activeContent = tabs.filter(tab => tab.id === activeTab)[0]?.content;

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
