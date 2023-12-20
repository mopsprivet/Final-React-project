import React from 'react'; 
import '../css/nutrition.css'

class Nutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: null,
      searchQuery: '',
      error: null,
    };
  }

  //3017620422003, 0180411000803
  searchProduct = async () => {
    try { 
      const response = await fetch(`https://world.openfoodfacts.net/api/v2/product/${encodeURIComponent(this.state.searchQuery)}?fields=product_name,nutriscore_data,nutriments,nutrition_grades`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      this.setState({ productData: data.product, error: null });
    } catch (error) {
      console.error('Error fetching product:', error);
      this.setState({ productData: null, error: 'Failed to fetch product data' });
    }
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
