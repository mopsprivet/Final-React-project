import React from 'react';
import { fetchProductData } from '../api/api';
import '../css/nutrition.css';

//3017620422003, 0180411000803 barcodes for test 
class Nutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: null,
      searchQuery: '',
      error: null,
    };
  }

  searchProduct = async () => {
    const { searchQuery } = this.state;
    const { productData, error } = await fetchProductData(searchQuery);
    this.setState({ productData, error });
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchButtonClick = () => {
    this.searchProduct();
  };

  render() {
    const { productData, error } = this.state;

    return (
      <div className='nutrition'>
        <h1>Nutrition Page</h1>
        <input
          type="text"
          placeholder="Enter barcode..."
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearchButtonClick}>Search</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {productData && (
          <div>
            <p>Name: {productData.product_name}</p>
            <p>Energy: {productData.nutriments.energy} {productData.nutriments.energy_unit}</p>
            <p>Carbohydrates: {productData.nutriments.carbohydrates} {productData.nutriments.carbohydrates_unit}</p>
            <p>Sugars: {productData.nutriments.sugars} {productData.nutriments.sugars_unit}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Nutrition; 
