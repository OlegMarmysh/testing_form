import React, {useState} from 'react';
import SelectingWirelessReduxForm from "./WirelessSettings/WirelessSettings";

const App = (props) => {
    const onSubmitWireless = (formData) => {
        console.log(formData);
    };
  return (
          <div>
              <SelectingWirelessReduxForm onSubmit={onSubmitWireless}/>
          </div>
  );
};


export default App;
