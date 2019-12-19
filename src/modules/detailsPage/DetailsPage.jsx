import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

 const DetailsPage = () => {
  return (
    <div>
      <p>Detail Pages: HELLO USER</p>
      <Link to="/">
        <Button variant="primary">Back To Home</Button>
      </Link>
    </div>
  )
}
export default withRouter(DetailsPage);