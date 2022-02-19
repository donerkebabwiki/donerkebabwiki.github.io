    var array = ['https://donerkebab.wiki/austria_map.jpg','https://donerkebab.wiki/denmark_map.jpg','https://donerkebab.wiki/estonia_map.jpg', 'https://donerkebab.wiki/finland_map.jpg', 'https://donerkebab.wiki/france_map.jpg', 'https://donerkebab.wiki/germany_map.jpg', 'https://donerkebab.wiki/ireland_map.jpg', 'https://donerkebab.wiki/italy_map.jpg', 'https://donerkebab.wiki/united_kingdom_map.jpg', 'https://donerkebab.wiki/ukraine_map.jpg', 'https://donerkebab.wiki/turkey_map.jpg', 'https://donerkebab.wiki/switzerland_map.jpg', 'https://donerkebab.wiki/sweden_map.jpg', 'https://donerkebab.wiki/spain_map.jpg', 'https://donerkebab.wiki/portugal_map.jpg', 'https://donerkebab.wiki/poland_map.jpg'];
    function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    var shuffled_images = shuffle(array);
    for(var i=0;i<3;i++) {
    document.getElementById('girl' + (i+1)).src = shuffled_images[i] ;
    }
