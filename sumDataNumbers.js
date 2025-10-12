const response = await fetch(url);
const json = await response.json();
return json.data.reduce((sum, item) => sum + item.number, 0);
