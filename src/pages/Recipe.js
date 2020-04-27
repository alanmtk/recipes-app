import React, { useEffect } from 'react';
import {
  TabPanel, Tab, TabList, Tabs,
} from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import RateBar from '../components/RateBar';
import 'react-tabs/style/react-tabs.css';
import StepsList from '../components/StepsList';
import IngredientsList from '../components/IngredientsList';
import HomeButton from '../components/HomeButton';

const Recipe = () => {
  const { id } = useParams();
  const fetchSelectedRecipe = useStoreActions((actions) => actions.fetchRecipe);
  const recipe = useStoreState((state) => state.selectedRecipe);

  useEffect(() => {
    fetchSelectedRecipe(id);
  }, []);

  return recipe ? (
    <div>
      <h2>{`${recipe.name} (${recipe.rate || 'Sin valoraciones'})`}</h2>
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
      <HomeButton />
    </div>
  ) : null;
};

export default Recipe;
