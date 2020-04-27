import React, { useEffect } from 'react';
import {
  TabPanel, Tab, TabList, Tabs,
} from 'react-tabs';
import { useStoreActions, useStoreState } from 'easy-peasy';
import RecipesList from '../components/RecipesList';
import HomeButton from '../components/HomeButton';

const Ranking = () => {
  const bestRecipes = useStoreState((state) => state.bestRecipes);
  const worstRecipes = useStoreState((state) => state.worstRecipes);
  const fetchBestRecipes = useStoreActions((actions) => actions.fetchBestRecipes);
  const fetchWorstRecipes = useStoreActions((actions) => actions.fetchWorstRecipes);

  useEffect(() => {
    fetchBestRecipes();
  }, []);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Mejor Puntaje</Tab>
          <Tab onClick={fetchWorstRecipes}>Peor Puntaje</Tab>
        </TabList>
        <TabPanel>
          <RecipesList recipes={bestRecipes} />
        </TabPanel>
        <TabPanel>
          <RecipesList recipes={worstRecipes} />
        </TabPanel>
      </Tabs>
      <HomeButton />
    </div>
  );
};

export default Ranking;
