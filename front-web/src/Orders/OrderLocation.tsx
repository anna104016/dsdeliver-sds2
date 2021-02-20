import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from "react-select/async";
import { fetchLocalMapBox } from '../api';
import { OrderLocationData } from './types';

// pegar no google maps a localizacao
const initialPosition = {
  lat: -23.2166484,
  lng: -45.8944576
}

type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  }
}


type Props = {
  onChangeLocation: (location: OrderLocationData) => void;
};

function OrderLocation({ onChangeLocation }: Props) {
   const [address, setAddress] = useState<Place>({
     position: initialPosition
   });
 

  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await fetchLocalMapBox(inputValue);
  
    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      });
    });
  
    callback(places);
  };
  
  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    });
  };  

  
  return (
    <div className="order-location-container">
      <div className="order-location-content">

      <form className="landing-page-form">

            <h3>Entregas</h3>


            <div className="input-block one">
              <label htmlFor="address">Endereço</label>
              <input type="text" />
              {/*<AsyncSelect
                placeholder="Digite um endereço para entregar o pedido"
                 className="filter"
                 //loadOptions={loadOptions}
                 onChange={value => handleChangeSelect(value as Place)}
                />*/}
            </div>

            <div className="input-block two">
              <label htmlFor="complement">Complemento</label>
              <input type="text" />
            </div>
        </form>

        {/*<MapContainer
            center={address.position}
            zoom={15}
            key={address.position.lat}
            scrollWheelZoom
          >
             
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
            />
            <Marker position={address.position}>
              <Popup>
                {address.label}
              </Popup>
            </Marker>
        </MapContainer> */}
        
      </div>
    </div>
     /* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */
  )
}

export default OrderLocation;
