import React, {useContext} from 'react';
import { Link } from 'react-router-dom';


export default function Error() {
 
    return (
    <div>
      404! Not found <br />
      <Link to='/'>Click here to Go to Home</Link>

      <hr />
    </div>
  )
}
