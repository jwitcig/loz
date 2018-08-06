import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default props => {
  return (
    <div>
      {props.locations.map(item =>
        <Button to={"/locations/"+item.id} component={Link}>
          {item.name} - {item.description}
        </Button>
      )}
    </div>
  )
}
