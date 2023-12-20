import React from 'react';
import "../css/main-page.css"; 
import {Link} from 'react-router-dom'; 


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBlock: null,
      selectedCategory: 'Elections',
    };
  }

   changeCategory = (category) => {
    console.log('changeCategory:', category);
    this.setState({ selectedCategory: category });
  };

  render() {
    return ( 
      <main>
        <ul className='blocks'> 
        <Link to="/blood_glucose">
            <li className={`block ${this.state.selectedCategory === 'Details about blood glucose' ? 'selected' : ''}`} onClick={() => this.changeCategory('Details about blood glucose')}> 
                <h3>Details about blood glucose</h3> 
                <p>What is it and how it can affect the body.</p>
            </li> 
        </Link>

        <Link to="/breathing_rate">
        <li className={`block ${this.state.selectedCategory === 'Learn more about the breathing rate' ? 'selected' : ''}`} onClick={() => this.changeCategory('Learn more about the breathing rate')}> 
            <h3>Learn more about the breathing rate</h3> 
            <p>Why are you breathing faster or slower?</p>
        </li> 
        </Link>
        </ul>
      </main>
    );
  }
}

export default Main;
