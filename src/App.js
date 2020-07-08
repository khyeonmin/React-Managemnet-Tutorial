import React, { Component } from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id' : 'hmin',
  'image' : 'https://placeimg.com/64/64/1',
  'name': 'Kang Hyeon Min',
  'birthday': '1994.08.08',
  'gender': 'Male',
  'job': 'M.S Candidate',
},
{
  'id' : 'ez1',
  'image' : 'https://placeimg.com/64/64/2',
  'name': 'Lee Jee Won',
  'birthday': '1994.12.13',
  'gender': 'Female',
  'job': 'Developer'
},
{
  'id' : 'ChaeWon',
  'image' : 'https://placeimg.com/64/64/3',
  'name': 'Lee Chae Won',
  'birthday': '1995.02.05',
  'gender': 'Female',
  'job': 'CEO'
}
];

class App extends Component{
  render(){
    return (
      <div>
        { customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}/>
          );
        })}
      </div>
    );
  }
}

export default App;
