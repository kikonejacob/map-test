import 'babel-polyfill';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import MapGL from 'react-map-gl';

//import {updateMap, updateMeta, loadData, useParams} from '../actions/app-actions';
import ViewportAnimation from '../utils/map-utils';
import ScatterPlot from './scatterplot';

const MAPBOX_ACCESS_TOKEN="pk.eyJ1IjoiamFjb2JraXN3ZW5kc2lkYSIsImEiOiJjaXk4cXo0eTUwMDdxMzJtcDhmM2Rocm9hIn0.lQgbjfdBvKzlXYeEQGEuPg";
const SAMPLE_DATA=[[12,104],[23,14]];

export default class Map extends Component {

 
  render() {
    const {viewport, demo, params, owner, data, updateMeta, isInteractive} = this.props;
    console.log( 'ffdfdf');


    return (
      <MapGL
         mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        width={400}
  height={400}
  latitude={37.7577}
  longitude={-122.4376}
  zoom={8}
  onChangeViewport={viewport => {
    const {latitude, longitude, zoom} = viewport;
    // Optionally call `setState` and use the state to update the map.
  }}
        >
     

      </MapGL>
    )
  }

}

function mapStateToProps(state) {
  return {
    viewport: state.viewport, 
  }
}

Map.defaultProps = {
  onInteract: () => {},
  isInteractive: true
};

//export default connect(mapStateToProps)(Map);
