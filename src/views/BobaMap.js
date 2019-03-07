import React, { Component } from 'react';
import { withStyles, LinearProgress } from '@material-ui/core';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import '../styles/global.css';
import MapProvider from '../providers/MapProvider';
import bobaResponse from './boba-locations.json';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  map: {
    height: '100%',
  },
  toolbar: theme.mixins.toolbar,
});

const googleApiKey = "AIzaSyAWIgRoSnkMs-IfdnB3vIvwaW35bkqb7bc";

class BobaMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: false,
      mapCenter: { lat: 40.854885, lng: -88.081807 },
      bobaMarkers: []
    }
  }

  markersForBusinesses = (businesses) => {
    return businesses.map(business => (
      <Marker
        name={ business.name }
        position={{
          lat: business.coordinates.latitude,
          lng: business.coordinates.longitude
        }}
        icon={{
          url: business.image_url,
          anchor: new this.props.google.maps.Point(32,32),
          scaledSize: new this.props.google.maps.Size(64,64)
        }} />
    ));
  }

  componentDidMount() {
    MapProvider
      .getCurrentLocation()
      .then(position => {
        let mapCenter = {
          lat: position.latitude,
          lng: position.longitude
        }

        let bobaPlaces = bobaResponse.businesses;
        let bobaMarkers = this.markersForBusinesses(bobaPlaces);

        this.setState({
          bobaMarkers,
          mapCenter,
          showLoader: false,
        });

        this.setState({
          mapCenter,
          showLoader: false
        });
      })
      .catch(error => console.log(error));
    
    this.setState({ showLoader: true });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="fillParent">
        <div className={classes.toolbar} />
        { this.state.showLoader  &&  <LinearProgress /> }
        <Map
          className={ classes.map }
          center={ this.state.mapCenter }
          google={this.props.google} 
          zoom={14}>
          { this.state.bobaMarkers }
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleApiKey
})(withStyles(styles)(BobaMap));
