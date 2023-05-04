const express = require('express');
const app = express();

// Define endpoint to retrieve video content
app.get('/videos', (req, res) => {
  const videos = [
    {
      id: 1,
      title: 'falcon and the winter soldier',
      description: 'The Falcon and the Winter Soldier, set after 2019 Avengers: Endgame, is about two Marvel superheroes, namesakes Falcon (Anthony Mackie) and Winter Soldier (Sebastian Stan), as they team up on a globe-trotting thriller to take down an old enemy, Baron Zemo',
      duration: '60 min',
      url: 'https://www.hotstar.com/in/movies/doctor-strange-in-the-multiverse-of-madness/1260103761'
    },
    
    {
      id: 2,
      title: 'loki',
      description: 'Loki was born a Frost Giant and abandoned as an infant by his father Laufey, only to be found by Odin during an invasion of the realm of the Frost Giants in Jotunheim. Odin used magic to make Loki appear Asgardian and raised him as a son alongside Odins biological son, Thor',
      duration: '45 min',
      url: 'https://www.hotstar.com/in/shows/loki/1260063451'
    }
  ];
  res.json(videos);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
