import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions/detail.action";
import GoogleMapReact from "google-map-react";
import { AiFillAndroid } from "react-icons/ai";

class Detail extends Component {
  
  componentDidMount() {
    let EstId = this.props.match.params.EstId;
    this.props.getDetail(EstId);
  }

  showMap = () => {
    try {
      const { result, isFetching } = this.props.detailReducer;
      return (
        !isFetching &&
        result != null && 
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg",
              }}
              defaultCenter={{ lat: 13.736717, lng: 100.523186 }}
              defaultZoom={11}
            >
              <AiFillAndroid
                lat={result.lat}
                lng={result.lng}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        
      );
    } catch (e) {}
  };

  render() {
    return <div>
      {this.showMap()}
    </div>;
  }
}

const mapStateToProps = ({ detailReducer }) => ({
  detailReducer,
});

const mapDispatchToProps = {
  ...action,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
