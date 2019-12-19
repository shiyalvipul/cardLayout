import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { getData } from './redux/actions';
import { Link, withRouter } from 'react-router-dom';


import './cardLayout.css';

class CardLayout extends Component {

  componentDidMount() {
    this.props._getData();
  }

  render() {
    const { data } = this.props;
    // console.log(data)
    return (
      <div className="container1">
        { data.map( (data,i) => {
          return (
            <Card className="card" key={data.id}>
            <Card.Img variant="top" src={data.url} />
            <Card.Body>
            <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.title}
              </Card.Text>
              <Link to="/details-page">
                <Button variant="primary">Go To Show More</Button>
              </Link>
            </Card.Body>
          </Card>
           )
        } ) } 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.card.data
});

const mapDispatchToProps = dispatch => ({
  _getData: () => dispatch(getData()),
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CardLayout));