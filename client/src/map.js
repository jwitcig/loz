import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default (props) => {
  return (
    <div className='google-map' style={{width: '100%', height: '400px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_diIs0dhEucA3L8n9dsfCJMMGWrwLoBQ" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >

      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text={'Kreyser Avrora'}
        style={{
          color: 'white',
          background: 'grey',
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      </GoogleMapReact>
    </div>
  )
}
