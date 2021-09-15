import React from 'react';
import HornedBeast from './HornedBeast';
import DataArr from './Data.json'

class Main extends React.Component {
    render() {
        return (
            <div>
               {DataArr.map((item, index) => {
                   return( <HornedBeast key={index} title={item.title} image_url={item.image_url} description={item.description} horns={item.horns}/>)
                   })}
            </div>
        )
    }
}

export default Main;