import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerGoogle from '../markerGoogle/MarkerGoogle';
import Geocode from "react-geocode";
import {dark, GEOCODING_API, MAPS_JAVASCRIPT_API} from "../../../config/config_google_map";

const SimpleMapGoogle = (props) => {
    const [center, setCenter] = useState({
        lat: 0,
        lng: 0
    })
    const defaultProps = {
        zoom: 16
    };

    useEffect(()=>{
        Geocode.setApiKey(GEOCODING_API);
        Geocode.fromAddress(`${props.location}`).then(
            (response) => {
                setCenter({...center,
                    lat: response.results[0].geometry.location.lat,
                    lng: response.results[0].geometry.location.lng
                })
            },
            (error) => {
                console.error(error);
            }
        );
    },[props.location])
    return <React.Fragment>
        <div style={{ height: '250px', width: '350px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: MAPS_JAVASCRIPT_API}}
                center={center}
                zoom={defaultProps.zoom}
                options={{styles: dark}}
            >
                <MarkerGoogle
                    lat={center.lat}
                    lng={center.lng}
                    name="My Marker"
                    color='#2B2D2F'
                />
            </GoogleMapReact>
        </div>
    </React.Fragment>
}

export default SimpleMapGoogle;
