import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import { Horizontal, Vertical } from 'templates/BlogReachView/components';
import { featured, articles } from 'templates/BlogReachView/data';
import SectionLabel from 'components/SectionLabel';

const useStyles = makeStyles((theme) => ({
  featuredContainer: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0),
    },
  },
  articlesContainer: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(0, 0, 4, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0),
    },
  },
}));

const ArticleSection = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.featuredContainer}>
        <SectionLabel
          title="Latest Stories"
          subtitle="Amet occaecat velit quis id elit et velit officia aliqua aute ipsum."
        />
        <Horizontal data={featured} />
      </div>
      <div className={classes.articlesContainer}>
        <Vertical data={articles} />
      </div>
    </>
  );
};

export default ArticleSection;
