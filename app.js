console.log("Let's get this party started!");

async function getSearchTerm(evt) {
  evt.preventDefault();
  console.log("getSearchTerm ran");
  let searchTerm = $("#search-term").val();

  let response = await axios.get("http://api.giphy.com/v1/gifs/search",
  {params: {q: searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});

  console.log("getSearchTerm response=", response);
  return response;
}

$("form").on("submit", getSearchTerm);