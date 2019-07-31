import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../marker/Marker";

class SimpleMap extends Component {
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDSbSS5V92UdmSRi125GPAJjH11f-9PaV0" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {latlngs.map((latlng, i) => {
          return (
            <Marker
              key={i}
              lat={latlng.lat}
              lng={latlng.lng}
              status={latlng.status}
            />
          );
        })}
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;

const latlngs = [
  { lat: 1.31553, lng: 103.67277, status: "activated" }
  // {lat:1.342601331131693,lng:103.9089497123108,status:'offline'},
  // {lat:1.3360799809569013,lng:103.89109692910768,status:'offline'},
  // {lat:1.3244101532814916,lng:103.85573468545533,status:'offline'},
  // {lat:1.321321072031588,lng:103.82998547891236,status:'activated'},

  // {lat : 1.358048, lng :  103.886454, status:'standbyin'},
  // {lat : 1.321357, lng :  103.891386, status:'standbyin'},
  // {lat : 1.343781, lng :  103.861990, status:'standbyin'},
  // {lat : 1.381194, lng :  103.868811, status:'standbyin'},
  // {lat : 1.377442, lng :  103.862459, status:'standbyin'},
  // {lat : 1.343641, lng :  103.849618, status:'standbyin'},
  // {lat : 1.375237, lng :  103.839821, status:'standbyin'},
  // {lat : 1.319795, lng :  103.768209, status:'standbyin'},
  // {lat : 1.316883, lng :  103.778162, status:'standbyin'},
  // {lat : 1.329989, lng :  103.769665, status:'standbyin'},
  // {lat : 1.347428, lng :  103.766932, status:'standbyin'},
  // {lat : 1.362874, lng :  103.768648, status:'standbyin'},
  // {lat : 1.366306, lng :  103.763842, status:'standbyin'},
  // {lat : 1.350127, lng :  103.752341, status:'standbyin'},
  // {lat : 1.338582, lng :  103.740215, status:'standbyin'},
  // {lat : 1.328192, lng :  103.736173, status:'standbyin'},
  // {lat : 1.360517, lng :  103.730977, status:'standbyin'},
  // {lat : 1.366290, lng :  103.722316, status:'standbyin'},
  // {lat : 1.341469, lng :  103.720006, status:'standbyin'},
  // {lat : 1.342682, lng :  103.708057, status:'standbyin'},

  // { lat : 1.352520,lng :  103.922978 , status : 'standbyoff' },
  // { lat : 1.354357,lng :  103.917875 , status : 'standbyoff' },
  // { lat : 1.362115,lng :  103.885530 , status : 'standbyoff' },
  // { lat : 1.310945,lng :  103.865078 , status : 'standbyoff' },
  // { lat : 1.364336,lng :  103.864886 , status : 'standbyoff' },
  // { lat : 1.331729,lng :  103.853556 , status : 'standbyoff' },
  // { lat : 1.373945,lng :  103.849089 , status : 'standbyoff' },
  // { lat : 1.379140,lng :  103.848512 , status : 'standbyoff' },
  // { lat : 1.357711,lng :  103.759111 , status : 'standbyoff' },
  // { lat : 1.360805,lng :  103.759535 , status : 'standbyoff' },
  // { lat : 1.358660,lng :  103.762785 , status : 'standbyoff' },
  // { lat : 1.339106,lng :  103.744741 , status : 'standbyoff' },
  // { lat : 1.338397,lng :  103.711108 , status : 'standbyoff' },
  // { lat : 1.345324,lng :  103.711396 , status : 'standbyoff' },
  // { lat : 1.344660,lng :  103.702319 , status : 'standbyoff' },
  // { lat : 1.346376,lng :  103.704036 , status : 'standbyoff' },
  // { lat : 1.345675,lng :  103.704405 , status : 'standbyoff' },

  // {lat : 1.385127, lng :  103.889224 , status : 'alert'},
  // {lat : 1.349139, lng :  103.848857 , status : 'alert'},
  // {lat : 1.335786, lng :  103.741784 , status : 'alert'},
  // {lat : 1.339727, lng :  103.713452 , status : 'alert'},
];
