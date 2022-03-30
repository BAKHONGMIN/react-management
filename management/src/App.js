import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers =[
  {
    'id':'ghdals2655',
    'image' :'https://placeimg.com/64/64/1',
    'name': "박홍민",
    'birthday':"950108",
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':'ghdals2650',
    'image' :'https://placeimg.com/64/64/2',
    'name': "서연수",
    'birthday':"950108",
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':'ghdals2664',
    'image' :'https://placeimg.com/64/64/3',
    'name': "홍길동",
    'birthday':"950108",
    'gender':'남자',
    'job':'대학생'
  },
]
class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
              key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
