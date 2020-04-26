import React from 'react';
import {
  TabPanel, Tab, TabList, Tabs,
} from 'react-tabs';
import RateBar from '../components/RateBar';
import 'react-tabs/style/react-tabs.css';
import StepsList from '../components/StepsList';
import IngredientsList from '../components/IngredientsList';

const Recipe = () => {
  const recipe = {
    id: 1,
    name: 'Arroz con Pollo',
    ingredients: [
      {
        name: 'Papa',
        unit: 'kg',
        amount: 0.5,
      },
      {
        name: 'Ajo',
        unit: 'kg',
        amount: 1,
      },
    ],
    steps: [
      'Picar cebolla',
      'Cortar tomate',
    ],
    reviews: [
      5,
      8,
    ],
  };
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Ingredientes</Tab>
          <Tab>Pasos</Tab>
        </TabList>
        <TabPanel>
          <IngredientsList ingredients={recipe.ingredients} />
        </TabPanel>
        <TabPanel>
          <StepsList steps={recipe.steps} />
        </TabPanel>
      </Tabs>
      <RateBar />
    </div>
  );
};

export default Recipe;
