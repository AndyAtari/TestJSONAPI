var axios = require("axios");

var config = {
  method: "get",
  url: "https://the-dune-api.herokuapp.com/quotes",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

