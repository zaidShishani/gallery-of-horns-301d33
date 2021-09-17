import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
    render () {
        return (
            <div>
                {this.props.dataToSend.map((item, index) => {
                    return <HornedBeast key={index} title={item.title} image_url={item.image_url} description={item.description} horns={item.horns}/>
                })}
            </div>
    )
    }
}

export default Main;

