import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

// core components
import Card from './card';
import CardBody from './cardBody';
import Button from '../forms/Button'

import imagesStyles from './imagesStyles';

import { cardTitle } from './material-kit-react';

import './styles.scss';

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
      <div className="card-width">

    <Card style={{
        width: "40rem"
        }}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage.jpg"
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>COLD DRINKS</h4>
        <p>content.</p>
        <Link to="/search/hot">
        <Button color="primary">Search</Button>
        </Link>
      </CardBody>
    </Card>

    <Card style={{
        width: "40rem"
        }}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F08%2F20%2FGettyImages-1165807395-2000.jpg"
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>HOT DRINKS</h4>
        <p>content.</p>
        <Link to="/search/cold">
        <Button color="primary">Search</Button>
        </Link>
      </CardBody>
    </Card>
    </div>
  );
}