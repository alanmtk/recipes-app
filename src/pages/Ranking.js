import React from 'react';
import {
  TabPanel, Tab, TabList, Tabs,
} from 'react-tabs';
import RecipesList from '../components/RecipesList';

const Ranking = () => {
  const recipes = [
    { id: 1, name: 'Arroz con pollo', rate: 4.3 },
    { id: 2, name: 'Brownie', rate: 10 },
    { id: 3, name: 'Ñoquis de batata', rate: 6 },
  ];
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Mejor Puntaje</Tab>
          <Tab>Peor Puntaje</Tab>
        </TabList>
        <TabPanel>
          <RecipesList recipes={recipes} />
        </TabPanel>
        <TabPanel>
          <RecipesList recipes={[...recipes].reverse()} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Ranking;
