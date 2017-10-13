const token = "whatever"
const api = "http://localhost:3001"
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


// export function fetchRecipes (food = '') {
//   food = food.trim()
//
//   return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
//     .then((res) => res.json())
//     .then(({ hits }) => hits.map(({ recipe }) => recipe))
// }

export default function getCategories () {
  return fetch(`${ api }/categories`, { headers })
  .then((categoriesResponse) => categoriesResponse.json())
  .then((res) => res.categories) //
}


//
// fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})
//
//     The following endpoints are available:
//
//     GET /categories
//       USAGE:
//         Get all of the categories available for the app. List is found in categories.js.
//         Feel free to extend this list as you desire.
 /* FROM MYREADS BOOKSAPI file
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
*/