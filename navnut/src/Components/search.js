let params = new URLSearchParams({ 
    app_id: 'bb81efd9', 
    app_key: '125dad230ddbe1f538226583e7619cb4', 
    ingr: '1 cup of sugar' 
  });

  fetch(`https://api.edamam.com/api/nutrition-data?${params}`)
    .then(response => response.json())
    .then(console.log); 

    