const fetchProductData = async (searchQuery) => {
  try {
    const response = await fetch(`https://world.openfoodfacts.net/api/v2/product/${encodeURIComponent(searchQuery)}?fields=product_name,nutriscore_data,nutriments,nutrition_grades`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await response.json();
    return { productData: data.product, error: null };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { productData: null, error: 'Failed to fetch product data' };
  }
};

export { fetchProductData }; 

