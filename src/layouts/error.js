import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h1 className="text-h1">
            The page you requested does not exist
              </h1>
            <h2 className='text-h4' style={{textAlign:"center", marginTop:'5%'}}>
              <Link to="/">Go to Home </Link>
            </h2>
          </div>;
    }
}
export default NotFoundPage;