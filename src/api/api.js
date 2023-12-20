/* const API_BASE_URL = 'https://api.edamam.com';

const getRecipeSearchResults = async (query, applicationId, applicationKey) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search?q=${query}&app_id=${applicationId}&app_key=${applicationKey}`
    );

    if (!response.ok) {
      throw new Error('Не удалось получить данные');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
};

export { getRecipeSearchResults }; */
