import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './components/Data.json'
import Form from 'react-bootstrap/Form'


class App extends React.Component{
constructor(props) {
        super(props);
        this.state = {
            sendData: data,
            HornsCount:0
        }
    }

    filterArr = (value) => {
        let newArr = data.filter(item => {
            if(value === 0){
                return item;
            } else {
                if(item.horns === value){
                    return true;
                } else {
                    return false;
                }
            }
        })
        return newArr;
    } 
  
  
  
    eventHandler = (event) => {
      event.preventDefault();
      this.setState({
          HornsCount : event.target.value,
          sendData: this.filterArr(Number(event.target.value))
      })
  }
  

  render(){
    return(
      <div>
        <Header/>
        <>
          <Form >
            <Form.Label >Select number of horns</Form.Label>
            <Form.Select name="hornNumber" aria-label="Default select example" onChange={this.eventHandler}>
              <option value="0">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            <option value="100">100</option>
            </Form.Select>
          </Form>
        </>
        <Main dataToSend={this.state.sendData} />
        <Footer/>
      </div>
    )
  }
}

export default App;
