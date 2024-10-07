
# Project Title

EpiRecipes Search Platform




## Objectives
Develop a full-stack web application that indexes the "EpiRecipes" dataset into OpenSearch, provides a user-friendly interface for searching and filtering recipes, and demonstrates proficiency in React for frontend development and Node.js for backend development, along with version control using GitHub.

## Project Overview
You are tasked with creating a comprehensive recipe search platform that allows users to efficiently search and filter through a vast collection of recipes. The application should mimic the user experience of leading e-commerce platforms like Flipkart or Amazon, ensuring intuitive navigation and responsive design.

## Technical Requirements
1. Data Indexing with OpenSearch

- **Dataset:** Utilize the EpiRecipes dataset from Kaggle. [EpiRecipes Dataset](https://www.kaggle.com/datasets/hugodarwood/epirecipes)
- **OpenSearch Setup:**
  - Install OpenSearch locally.
  - Create an index tailored to the EpiRecipes dataset.
  - Ingest the dataset into OpenSearch, ensuring proper mapping of fields for optimized search performance.
- **Documentation:**
  - Provide scripts or instructions for setting up OpenSearch and indexing the data.

### 2. Backend Development

- **Framework:** Node.js
- **API Development:**
  - Develop RESTful APIs to handle search queries and filtering.
  - Implement endpoints for:
    - Retrieving recipes based on search keywords.
    - Filtering recipes by categories such as ingredients, cuisine, preparation time, etc.
    - Pagination of search results.
- **Integration with OpenSearch:**
  - Ensure seamless communication between the backend and OpenSearch for data retrieval.
- **Documentation:**
  - Include setup instructions, dependency installation, and API endpoint descriptions.

### 3. Frontend Development

- **Framework:** React.js
- **Design Specifications:**
  - Create a single-page application (SPA) with a responsive design.
  - Design a user interface inspired by e-commerce platforms like Flipkart or Amazon.
- **Features:**
  - **Search Functionality:** Allow users to search for recipes using keywords.
  - **Filters:** Implement dynamic filters (refer to the dataset for filter fields) that update search results in real-time.
  - **Recipe Display:** Show recipe details in an organized and visually appealing manner.
  - **Navigation:** Ensure smooth navigation between different sections of the application.
- **Integration with Backend:**
  - Connect the React frontend with the Node.js backend APIs for data retrieval and interaction.
- **Documentation:**
  - Provide instructions on setting up the React project, installing dependencies, and running the application locally.


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## API Endpoints

The following API endpoints are available for interacting with the EpiRecipes Search Platform:

### 1. Search Recipes

- **Endpoint**: `GET /api/recipes/search`
- **Description**: Retrieves recipes based on the search keyword.
- **Query Parameters**:
  - `query` (string, required): The keyword to search for in recipes.
- **Response**:
  - **Success (200)**: Returns a list of recipes matching the search criteria.
  - **Example**:
    ```json
    {
      "results": [
        {
          "id": "1",
          "title": "Spaghetti Carbonara",
          "ingredients": ["spaghetti", "eggs", "cheese", "bacon"],
          "cuisine": "Italian"
        },
        {
          "id": "2",
          "title": "Chicken Tikka Masala",
          "ingredients": ["chicken", "spices", "tomatoes", "cream"],
          "cuisine": "Indian"
        }
      ],
      "totalResults": 2
    }
    ```

### 2. Filter Recipes

- **Endpoint**: `GET /api/recipes/filter`
- **Description**: Retrieves recipes based on specific filters.
- **Query Parameters**:
  - `cuisine` (string, optional): Filter by cuisine type (e.g., Italian, Indian).
  - `ingredient` (string, optional): Filter by a specific ingredient.
  - `prepTime` (number, optional): Filter by preparation time in minutes.
- **Response**:
  - **Success (200)**: Returns a list of filtered recipes.
  - **Example**:
    ```json
    {
      "results": [
        {
          "id": "3",
          "title": "Vegetable Stir Fry",
          "ingredients": ["broccoli", "carrots", "bell peppers"],
          "cuisine": "Chinese"
        }
      ],
      "totalResults": 1
    }
    ```

### 3. Get Recipe by ID

- **Endpoint**: `GET /api/recipes/:id`
- **Description**: Retrieves a specific recipe by its ID.
- **Path Parameters**:
  - `id` (string, required): The ID of the recipe to retrieve.
- **Response**:
  - **Success (200)**: Returns the recipe details.
  - **Example**:
    ```json
    {
      "id": "1",
      "title": "Spaghetti Carbonara",
      "ingredients": ["spaghetti", "eggs", "cheese", "bacon"],
      "cuisine": "Italian",
      "instructions": "Cook spaghetti, mix with eggs and cheese, add bacon."
    }
    ```

### 4. Pagination

- **Endpoint**: `GET /api/recipes`
- **Description**: Retrieves a paginated list of recipes.
- **Query Parameters**:
  - `page` (number, optional): The page number to retrieve (default: 1).
  - `limit` (number, optional): The number of recipes per page (default: 10).
- **Response**:
  - **Success (200)**: Returns a paginated list of recipes.
  - **Example**:
    ```json
    {
      "results": [...],
      "currentPage": 1,
      "totalPages": 5,
      "totalResults": 50
    }
    ```

### Notes

- Ensure that your backend is running before testing these endpoints.
- For any authentication or specific headers required, please refer to the backend documentation or code comments.


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Roadmap

- Additional browser support

- Add more integrations

