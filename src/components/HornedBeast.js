import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        };
    }

    voteCount = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    };
    
 render() {
     return(
        <div>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            Discription: {this.props.description}
            </Card.Text>
            <Card.Text>
            Horns: {this.props.horns}
            </Card.Text>
            <Card.Text>
            Votes: {this.state.votes}
            </Card.Text>
            <Button variant="primary" onClick={this.voteCount}>vote</Button>
          </Card.Body>
        </Card>
        </div>
     )
 } 
}

export default HornedBeasts;