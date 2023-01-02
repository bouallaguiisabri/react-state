import { render } from '@testing-library/react';
import React, { Component } from 'react';
import profile from './profile.jpg'; 
import './/App.css'

class App extends Component {

    
state={
    person: {
        fullName: 'bouallagui sabri',
        imgSrc: profile ,
        bio: 'I am a software developer with a passion for building web applications.',
        profession: 'Software Developer'
    },
    shows: false,
    timeInterval: 0
    }


    componentWillMount()
    {
        clearInterval(this.timer);
    }

    componentDidMount() 
    {
        this.timer = setInterval(() => {
            this.setState({ timeInterval: this.state.timeInterval + 1 });
        }, 1000);
    }



render()
{
    return  (
        <div className='App'>
        <button onClick={() => this.setState({ shows: !this.state.shows })} style={{backgroundColor:'red' , borderRadius:'20px'}} >Click Me</button>
        {this.state.shows && (
        <div >
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} style={{ height:'40vmin',alignItems: 'center' }} className='img' />
            <h1  className='text'>{this.state.person.fullName} </h1>
            <p className='text1'>{this.state.person.bio}</p>
            <p className='text1'>Profession: {this.state.person.profession}</p>
            <p className='text1'>Time interval: {this.state.timeInterval} seconds</p>
        </div>)}
    </div>
        );
    }
}





export default App;