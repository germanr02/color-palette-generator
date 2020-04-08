const fetch = require("node-fetch");

const fetchPalette = async (r, g, b) => {
  var url = "http://colormind.io/api/";
  var data = {
    model: "default",
    input: [[r, g, b], "N", "N", "N", "N"],
  };

  const response = await fetch(url, {
    method: "POST",
    mode: "cors", 
    cache: "no-cache", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return response.json();
};

const fetchList = async () => {
  var url = "http://colormind.io/list/";
  const response = await fetch(url);
  return response.json();
};

fetchPalette(1, 2, 3).then((data) => {
  console.log(data);
});

fetchList().then((data) => {
  console.log(data);
});
