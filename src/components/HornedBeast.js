import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast.js'
import data from './data.json';



class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0,
            showModel: false
        };
    }

    voteCount = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    };

    handleShow = () => {
        this.setState({
            showModel: true,
        })
    }

    handleClose = () => {
        this.setState({
            showModel: false
        })
    }

    filterByHorn = () => {
        let arr = data.filter((value) => value.horns === parseInt(this.state.horns))
        this.setState({
            DataFilterd: arr
        })
    }
    
 render() {
     return(
        <div>
            <Card className='cards' style={{ width: '18rem' }}>
          <Card.Img onClick={this.handleShow} variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            Discription: {this.props.description}
            </Card.Text>
            <Card.Text>
            Horns: {this.props.horns}
            </Card.Text>
            <Card.Text>
            favorited &hearts;: {this.state.votes}
            </Card.Text>
            <Button variant="primary" onClick={this.voteCount}>vote</Button>
          </Card.Body>
        </Card>

        <SelectedBeast
                    handleClose={this.handleClose}
                    show={this.state.showModel}
                    title={this.props.title}
                    image_url={this.props.image_url}
                    description = {this.props.description}

                    />
        </div>
     )
 } 
}

export default HornedBeasts;