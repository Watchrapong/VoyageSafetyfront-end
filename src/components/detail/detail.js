import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions/detail.action"
import GoogleMapReact from 'google-map-react';

class Detail extends Component {

 componentDidMount() {
    let EstId = this.props.match.params.EstId;
    this.props.getDetail(EstId);
  }

  render() {
    const {result} = this.props.detailReducer
    return  (<div>
       <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg' }}
          defaultCenter={{lat: result.lat, lng: result.lng}}
          defaultZoom={11}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    </div>)

  }
}

const mapStateToProps = ( {detailReducer} ) => ({
  detailReducer,
})

const mapDispatchToProps = {
  ...action,
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
