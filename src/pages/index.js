import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import HomeView from 'views/home.view';

const HomePage = () => {
  return <WithLayout component={HomeView} layout={Main} fullWidth />;
};

export default HomePage;
