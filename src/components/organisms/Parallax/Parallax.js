import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { BgImage } from 'gbimage-bridge';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
  },
}));

/**
 * Component to display the Parallax backgrounds
 *
 * @param {Object} props
 */
const Parallax = (props) => {
  const { backgroundImage, children, className, ...rest } = props;

  const classes = useStyles();

  React.useEffect(() => {
    const jarallaxElems = document.querySelectorAll('.jarallax');
    if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
      return;
    }

    const jarallax = require('jarallax').jarallax;
    jarallax(jarallaxElems, { speed: 0.2 });
  });

  return (
    <div
      className={clsx('jarallax', 'parallax', classes.root, className)}
      data-jarallax
      data-speed="0.2"
      {...rest}
    >
      <BgImage
        className={clsx('jarallax-img', 'parallax__image', classes.image)}
        image={backgroundImage}
        alt="Feature Image"
      />
      {children}
    </div>
  );
};

Parallax.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The content
   */
  children: PropTypes.node,
  /**
   * The parallax background image
   */
  backgroundImage: PropTypes.string.isRequired,
};

export default Parallax;
