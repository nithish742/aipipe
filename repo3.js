const response = await fetch(`https://api.github.com/repos/${nithish742}/${repo3.js}`);
const data = await response.json();
return data.created_at;
