// Top-10 categories. Each item has aliases to handle variant spellings.
// Order in `items` IS the ranking (index 0 = #1).
window.CATEGORIES = [
  {
    id: "populous-countries",
    category: "Geography",
    prompt: "Most populous countries in the world",
    hint: "2024 population estimates",
    items: [
      { name: "India",         aliases: ["Bharat", "Republic of India"] },
      { name: "China",         aliases: ["PRC", "People's Republic of China", "Chine"] },
      { name: "United States", aliases: ["USA", "US", "America", "United States of America", "Etats-Unis", "U.S.A.", "U.S."] },
      { name: "Indonesia",     aliases: ["Indonesie"] },
      { name: "Pakistan",      aliases: [] },
      { name: "Nigeria",       aliases: [] },
      { name: "Brazil",        aliases: ["Bresil", "Brasil"] },
      { name: "Bangladesh",    aliases: [] },
      { name: "Russia",        aliases: ["Russian Federation", "Russie"] },
      { name: "Mexico",        aliases: ["Mexique", "Mejico"] },
    ],
  },
  {
    id: "largest-countries",
    category: "Geography",
    prompt: "Largest countries by area",
    hint: "Total land + water area",
    items: [
      { name: "Russia",        aliases: ["Russian Federation", "Russie"] },
      { name: "Canada",        aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "United States of America", "Etats-Unis"] },
      { name: "China",         aliases: ["PRC", "People's Republic of China", "Chine"] },
      { name: "Brazil",        aliases: ["Bresil", "Brasil"] },
      { name: "Australia",     aliases: ["Australie"] },
      { name: "India",         aliases: ["Bharat"] },
      { name: "Argentina",     aliases: ["Argentine"] },
      { name: "Kazakhstan",    aliases: [] },
      { name: "Algeria",       aliases: ["Algerie"] },
    ],
  },
  {
    id: "smallest-countries",
    category: "Geography",
    prompt: "Smallest countries by area",
    hint: "Sovereign states only",
    items: [
      { name: "Vatican City",     aliases: ["Holy See", "Vatican"] },
      { name: "Monaco",           aliases: [] },
      { name: "Nauru",            aliases: [] },
      { name: "Tuvalu",           aliases: [] },
      { name: "San Marino",       aliases: [] },
      { name: "Liechtenstein",    aliases: [] },
      { name: "Marshall Islands", aliases: [] },
      { name: "Saint Kitts and Nevis", aliases: ["St Kitts and Nevis", "St. Kitts and Nevis"] },
      { name: "Maldives",         aliases: [] },
      { name: "Malta",            aliases: [] },
    ],
  },
  {
    id: "highest-mountains",
    category: "Geography",
    prompt: "Highest mountains in the world",
    hint: "Independent peaks above 8,000m",
    items: [
      { name: "Mount Everest",  aliases: ["Everest", "Sagarmatha", "Chomolungma"] },
      { name: "K2",             aliases: ["Mount Godwin-Austen", "Chhogori"] },
      { name: "Kangchenjunga",  aliases: ["Kanchenjunga"] },
      { name: "Lhotse",         aliases: [] },
      { name: "Makalu",         aliases: [] },
      { name: "Cho Oyu",        aliases: [] },
      { name: "Dhaulagiri",     aliases: ["Dhaulagiri I"] },
      { name: "Manaslu",        aliases: [] },
      { name: "Nanga Parbat",   aliases: [] },
      { name: "Annapurna",      aliases: ["Annapurna I"] },
    ],
  },
  {
    id: "longest-rivers",
    category: "Geography",
    prompt: "Longest rivers in the world",
    hint: "By length, including main tributary systems",
    items: [
      { name: "Nile",          aliases: ["River Nile", "Nil"] },
      { name: "Amazon",        aliases: ["Amazonas", "Amazone"] },
      { name: "Yangtze",       aliases: ["Chang Jiang"] },
      { name: "Mississippi",   aliases: ["Mississippi-Missouri"] },
      { name: "Yenisei",       aliases: ["Yenisey"] },
      { name: "Yellow River",  aliases: ["Huang He", "Huanghe"] },
      { name: "Ob",            aliases: ["Ob-Irtysh", "Obi"] },
      { name: "Parana",        aliases: ["Paraná"] },
      { name: "Congo",         aliases: ["Zaire River"] },
      { name: "Amur",          aliases: ["Heilong Jiang", "Heilongjiang"] },
    ],
  },
  {
    id: "largest-islands",
    category: "Geography",
    prompt: "Largest islands in the world",
    hint: "By area (Australia excluded — it's a continent)",
    items: [
      { name: "Greenland",        aliases: ["Kalaallit Nunaat", "Groenland"] },
      { name: "New Guinea",       aliases: ["Papua"] },
      { name: "Borneo",           aliases: ["Kalimantan"] },
      { name: "Madagascar",       aliases: [] },
      { name: "Baffin Island",    aliases: ["Baffin"] },
      { name: "Sumatra",          aliases: ["Sumatera"] },
      { name: "Honshu",           aliases: ["Honshū"] },
      { name: "Victoria Island",  aliases: ["Victoria"] },
      { name: "Great Britain",    aliases: ["Britain"] },
      { name: "Ellesmere Island", aliases: ["Ellesmere"] },
    ],
  },
  {
    id: "most-visited-countries",
    category: "Travel",
    prompt: "Most visited countries by tourists",
    hint: "International tourist arrivals (pre-2020 standard)",
    items: [
      { name: "France",          aliases: [] },
      { name: "Spain",           aliases: ["Espana"] },
      { name: "United States",   aliases: ["USA", "US", "America"] },
      { name: "China",           aliases: ["PRC"] },
      { name: "Italy",           aliases: ["Italia"] },
      { name: "Turkey",          aliases: ["Türkiye", "Turkiye"] },
      { name: "Mexico",          aliases: [] },
      { name: "Germany",         aliases: ["Deutschland"] },
      { name: "Thailand",        aliases: [] },
      { name: "United Kingdom",  aliases: ["UK", "Britain", "Great Britain"] },
    ],
  },
  {
    id: "populous-european-countries",
    category: "Geography",
    prompt: "Most populous countries in Europe",
    hint: "Includes Russia (European population)",
    items: [
      { name: "Russia",         aliases: ["Russian Federation"] },
      { name: "Germany",        aliases: ["Deutschland"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Great Britain"] },
      { name: "France",         aliases: [] },
      { name: "Italy",          aliases: ["Italia"] },
      { name: "Spain",          aliases: ["Espana"] },
      { name: "Poland",         aliases: ["Polska"] },
      { name: "Ukraine",        aliases: [] },
      { name: "Romania",        aliases: ["Romanya"] },
      { name: "Netherlands",    aliases: ["Holland"] },
    ],
  },
  {
    id: "populous-us-states",
    category: "USA",
    prompt: "Most populous U.S. states",
    items: [
      { name: "California",     aliases: ["CA", "Cali"] },
      { name: "Texas",          aliases: ["TX"] },
      { name: "Florida",        aliases: ["FL"] },
      { name: "New York",       aliases: ["NY", "New York State"] },
      { name: "Pennsylvania",   aliases: ["PA"] },
      { name: "Illinois",       aliases: ["IL"] },
      { name: "Ohio",           aliases: ["OH"] },
      { name: "Georgia",        aliases: ["GA"] },
      { name: "North Carolina", aliases: ["NC"] },
      { name: "Michigan",       aliases: ["MI"] },
    ],
  },
  {
    id: "largest-us-states",
    category: "USA",
    prompt: "Largest U.S. states by area",
    items: [
      { name: "Alaska",     aliases: ["AK"] },
      { name: "Texas",      aliases: ["TX"] },
      { name: "California", aliases: ["CA"] },
      { name: "Montana",    aliases: ["MT"] },
      { name: "New Mexico", aliases: ["NM"] },
      { name: "Arizona",    aliases: ["AZ"] },
      { name: "Nevada",     aliases: ["NV"] },
      { name: "Colorado",   aliases: ["CO"] },
      { name: "Oregon",     aliases: ["OR"] },
      { name: "Wyoming",    aliases: ["WY"] },
    ],
  },
  {
    id: "most-spoken-languages",
    category: "Languages",
    prompt: "Most spoken languages in the world",
    hint: "Total speakers (native + second language)",
    items: [
      { name: "English",       aliases: ["Anglais"] },
      { name: "Mandarin",      aliases: ["Mandarin Chinese", "Chinese", "Putonghua"] },
      { name: "Hindi",         aliases: [] },
      { name: "Spanish",       aliases: ["Espanol", "Castellano"] },
      { name: "French",        aliases: ["Francais"] },
      { name: "Arabic",        aliases: ["Arabe"] },
      { name: "Bengali",       aliases: ["Bangla"] },
      { name: "Portuguese",    aliases: ["Portugues"] },
      { name: "Russian",       aliases: ["Russe"] },
      { name: "Urdu",          aliases: [] },
    ],
  },
  {
    id: "largest-deserts",
    category: "Geography",
    prompt: "Largest deserts in the world",
    hint: "By area — includes polar deserts",
    items: [
      { name: "Antarctic Desert",      aliases: ["Antarctica"] },
      { name: "Arctic Desert",         aliases: ["Arctic"] },
      { name: "Sahara",                aliases: ["Sahara Desert"] },
      { name: "Arabian Desert",        aliases: ["Arabia"] },
      { name: "Gobi",                  aliases: ["Gobi Desert"] },
      { name: "Kalahari",              aliases: ["Kalahari Desert"] },
      { name: "Patagonian Desert",     aliases: ["Patagonia"] },
      { name: "Great Victoria Desert", aliases: ["Victoria Desert"] },
      { name: "Syrian Desert",         aliases: [] },
      { name: "Great Basin Desert",    aliases: ["Great Basin"] },
    ],
  },
  {
    id: "largest-lakes",
    category: "Geography",
    prompt: "Largest lakes in the world",
    hint: "By surface area — Caspian counts as a lake",
    items: [
      { name: "Caspian Sea",    aliases: ["Caspian"] },
      { name: "Superior",       aliases: ["Lake Superior"] },
      { name: "Victoria",       aliases: ["Lake Victoria"] },
      { name: "Huron",          aliases: ["Lake Huron"] },
      { name: "Michigan",       aliases: ["Lake Michigan"] },
      { name: "Tanganyika",     aliases: ["Lake Tanganyika"] },
      { name: "Baikal",         aliases: ["Lake Baikal"] },
      { name: "Great Bear Lake", aliases: ["Great Bear"] },
      { name: "Malawi",         aliases: ["Lake Malawi", "Lake Nyasa"] },
      { name: "Great Slave Lake", aliases: ["Great Slave"] },
    ],
  },
  {
    id: "tallest-buildings",
    category: "Architecture",
    prompt: "Tallest buildings in the world",
    hint: "By height to architectural top",
    items: [
      { name: "Burj Khalifa",          aliases: ["Burj Dubai"] },
      { name: "Merdeka 118",           aliases: ["Merdeka"] },
      { name: "Shanghai Tower",        aliases: [] },
      { name: "Abraj Al-Bait Clock Tower", aliases: ["Makkah Royal Clock Tower", "Mecca Clock Tower", "Abraj Al Bait"] },
      { name: "Ping An Finance Center", aliases: ["Ping An"] },
      { name: "Lotte World Tower",     aliases: ["Lotte World"] },
      { name: "One World Trade Center", aliases: ["1 WTC", "Freedom Tower", "One WTC"] },
      { name: "Guangzhou CTF Finance Centre", aliases: ["CTF Guangzhou"] },
      { name: "Tianjin CTF Finance Centre", aliases: ["CTF Tianjin"] },
      { name: "China Zun",             aliases: ["CITIC Tower"] },
    ],
  },
  {
    id: "highest-grossing-films",
    category: "Movies",
    prompt: "Highest-grossing films worldwide",
    hint: "Unadjusted box office",
    items: [
      { name: "Avatar",                          aliases: [] },
      { name: "Avengers: Endgame",               aliases: ["Endgame", "Avengers Endgame"] },
      { name: "Avatar: The Way of Water",        aliases: ["Avatar 2", "The Way of Water"] },
      { name: "Titanic",                         aliases: [] },
      { name: "Star Wars: The Force Awakens",    aliases: ["The Force Awakens", "Star Wars 7"] },
      { name: "Avengers: Infinity War",          aliases: ["Infinity War"] },
      { name: "Spider-Man: No Way Home",         aliases: ["No Way Home", "Spiderman No Way Home"] },
      { name: "Inside Out 2",                    aliases: [] },
      { name: "Jurassic World",                  aliases: [] },
      { name: "The Lion King",                   aliases: ["Lion King 2019", "Lion King"] },
    ],
  },
  {
    id: "highest-grossing-animated",
    category: "Movies",
    prompt: "Highest-grossing animated films",
    items: [
      { name: "Inside Out 2",                aliases: [] },
      { name: "Frozen 2",                    aliases: ["Frozen II"] },
      { name: "Frozen",                      aliases: [] },
      { name: "The Super Mario Bros. Movie", aliases: ["Super Mario Bros Movie", "Mario Movie"] },
      { name: "Incredibles 2",               aliases: ["The Incredibles 2"] },
      { name: "Minions",                     aliases: [] },
      { name: "The Lion King",               aliases: ["Lion King 2019"] },
      { name: "Toy Story 4",                 aliases: [] },
      { name: "Toy Story 3",                 aliases: [] },
      { name: "Despicable Me 3",             aliases: [] },
    ],
  },
  {
    id: "highest-grossing-franchises",
    category: "Movies",
    prompt: "Highest-grossing film franchises",
    hint: "Total worldwide box office across all films",
    items: [
      { name: "Marvel Cinematic Universe", aliases: ["MCU", "Marvel"] },
      { name: "Star Wars",                 aliases: [] },
      { name: "Harry Potter",              aliases: ["Wizarding World"] },
      { name: "James Bond",                aliases: ["007", "Bond"] },
      { name: "Spider-Man",                aliases: ["Spiderman"] },
      { name: "Avengers",                  aliases: [] },
      { name: "The Lord of the Rings",     aliases: ["Lord of the Rings", "LOTR"] },
      { name: "Batman",                    aliases: [] },
      { name: "Fast and Furious",          aliases: ["The Fast and the Furious", "Fast & Furious"] },
      { name: "X-Men",                     aliases: ["Xmen"] },
    ],
  },
  {
    id: "best-selling-artists",
    category: "Music",
    prompt: "Best-selling music artists of all time",
    hint: "Certified total record sales worldwide",
    items: [
      { name: "The Beatles",     aliases: ["Beatles"] },
      { name: "Elvis Presley",   aliases: ["Elvis"] },
      { name: "Michael Jackson", aliases: ["MJ"] },
      { name: "Madonna",         aliases: [] },
      { name: "Elton John",      aliases: [] },
      { name: "Led Zeppelin",    aliases: ["Zeppelin"] },
      { name: "Rihanna",         aliases: [] },
      { name: "Pink Floyd",      aliases: [] },
      { name: "Eminem",          aliases: [] },
      { name: "Mariah Carey",    aliases: [] },
    ],
  },
  {
    id: "best-selling-albums",
    category: "Music",
    prompt: "Best-selling albums of all time",
    items: [
      { name: "Thriller",                aliases: ["Michael Jackson Thriller"] },
      { name: "Back in Black",           aliases: ["AC/DC Back in Black"] },
      { name: "The Dark Side of the Moon", aliases: ["Dark Side of the Moon", "Pink Floyd Dark Side"] },
      { name: "The Bodyguard",           aliases: ["Bodyguard"] },
      { name: "Bat Out of Hell",         aliases: [] },
      { name: "Their Greatest Hits 1971-1975", aliases: ["Eagles Greatest Hits", "Eagles Greatest Hits 1971-1975"] },
      { name: "Hotel California",        aliases: [] },
      { name: "Come On Over",            aliases: ["Shania Twain Come On Over"] },
      { name: "Rumours",                 aliases: ["Fleetwood Mac Rumours"] },
      { name: "Saturday Night Fever",    aliases: [] },
    ],
  },
  {
    id: "most-viewed-youtube",
    category: "Internet",
    prompt: "Most viewed YouTube videos",
    hint: "All time, music videos dominate",
    items: [
      { name: "Baby Shark Dance",          aliases: ["Baby Shark"] },
      { name: "Despacito",                 aliases: [] },
      { name: "Johny Johny Yes Papa",      aliases: ["Johnny Johnny Yes Papa", "Johny Johny"] },
      { name: "Shape of You",              aliases: ["Ed Sheeran Shape of You"] },
      { name: "See You Again",             aliases: [] },
      { name: "Phonics Song with Two Words", aliases: ["Phonics Song"] },
      { name: "Bath Song",                 aliases: [] },
      { name: "Wheels on the Bus",         aliases: ["The Wheels on the Bus"] },
      { name: "Gangnam Style",             aliases: [] },
      { name: "Bad Romance",               aliases: ["Lady Gaga Bad Romance"] },
    ],
  },
  {
    id: "most-subscribed-youtube",
    category: "Internet",
    prompt: "Most subscribed YouTube channels",
    items: [
      { name: "MrBeast",        aliases: ["Mr Beast"] },
      { name: "T-Series",       aliases: ["TSeries", "T Series"] },
      { name: "Cocomelon",      aliases: ["Cocomelon - Nursery Rhymes"] },
      { name: "SET India",      aliases: ["Sony Entertainment Television India"] },
      { name: "Kids Diana Show", aliases: ["Diana Show"] },
      { name: "Vlad and Niki",  aliases: ["Vlad & Niki"] },
      { name: "Like Nastya",    aliases: ["Nastya"] },
      { name: "PewDiePie",      aliases: ["Pewdiepie"] },
      { name: "WWE",            aliases: [] },
      { name: "Zee Music Company", aliases: ["Zee Music"] },
    ],
  },
  {
    id: "most-followed-instagram",
    category: "Internet",
    prompt: "Most followed accounts on Instagram",
    items: [
      { name: "Instagram",           aliases: ["@instagram"] },
      { name: "Cristiano Ronaldo",   aliases: ["Cristiano", "CR7", "Ronaldo"] },
      { name: "Leo Messi",           aliases: ["Lionel Messi", "Messi"] },
      { name: "Selena Gomez",        aliases: [] },
      { name: "Kylie Jenner",        aliases: [] },
      { name: "Dwayne Johnson",      aliases: ["The Rock"] },
      { name: "Ariana Grande",       aliases: [] },
      { name: "Kim Kardashian",      aliases: [] },
      { name: "Beyonce",             aliases: ["Beyoncé"] },
      { name: "Khloe Kardashian",    aliases: ["Khloé Kardashian"] },
    ],
  },
  {
    id: "fastest-land-animals",
    category: "Animals",
    prompt: "Fastest land animals",
    hint: "Maximum running speed",
    items: [
      { name: "Cheetah",           aliases: [] },
      { name: "Pronghorn",         aliases: ["Pronghorn Antelope", "American Antelope"] },
      { name: "Springbok",         aliases: [] },
      { name: "Quarter Horse",     aliases: ["American Quarter Horse"] },
      { name: "Wildebeest",        aliases: ["Gnu"] },
      { name: "Lion",              aliases: [] },
      { name: "Blackbuck",         aliases: [] },
      { name: "Brown Hare",        aliases: ["European Hare", "Hare"] },
      { name: "Greyhound",         aliases: [] },
      { name: "Thomson's Gazelle", aliases: ["Thomsons Gazelle", "Thomson Gazelle"] },
    ],
  },
  {
    id: "largest-animals",
    category: "Animals",
    prompt: "Largest living animals by weight",
    items: [
      { name: "Blue Whale",           aliases: [] },
      { name: "Fin Whale",            aliases: [] },
      { name: "Bowhead Whale",        aliases: [] },
      { name: "Right Whale",          aliases: ["North Atlantic Right Whale", "Southern Right Whale"] },
      { name: "Sperm Whale",          aliases: [] },
      { name: "Humpback Whale",       aliases: [] },
      { name: "Gray Whale",           aliases: ["Grey Whale"] },
      { name: "Sei Whale",            aliases: [] },
      { name: "Whale Shark",          aliases: [] },
      { name: "African Elephant",     aliases: ["African Bush Elephant", "Elephant"] },
    ],
  },
  {
    id: "most-nba-titles",
    category: "Sports",
    prompt: "NBA teams with the most championships",
    items: [
      { name: "Boston Celtics",        aliases: ["Celtics"] },
      { name: "Los Angeles Lakers",    aliases: ["LA Lakers", "Lakers", "Minneapolis Lakers"] },
      { name: "Golden State Warriors", aliases: ["Warriors", "GSW"] },
      { name: "Chicago Bulls",         aliases: ["Bulls"] },
      { name: "San Antonio Spurs",     aliases: ["Spurs"] },
      { name: "Philadelphia 76ers",    aliases: ["76ers", "Sixers", "Philly 76ers"] },
      { name: "Detroit Pistons",       aliases: ["Pistons"] },
      { name: "Miami Heat",            aliases: ["Heat"] },
      { name: "New York Knicks",       aliases: ["Knicks"] },
      { name: "Houston Rockets",       aliases: ["Rockets"] },
    ],
  },
  {
    id: "most-super-bowls",
    category: "Sports",
    prompt: "NFL teams with the most Super Bowl wins",
    items: [
      { name: "Pittsburgh Steelers",   aliases: ["Steelers"] },
      { name: "New England Patriots",  aliases: ["Patriots", "Pats"] },
      { name: "Dallas Cowboys",        aliases: ["Cowboys"] },
      { name: "San Francisco 49ers",   aliases: ["49ers", "Niners", "SF 49ers"] },
      { name: "Green Bay Packers",     aliases: ["Packers"] },
      { name: "Kansas City Chiefs",    aliases: ["Chiefs", "KC Chiefs"] },
      { name: "New York Giants",       aliases: ["Giants", "NY Giants"] },
      { name: "Denver Broncos",        aliases: ["Broncos"] },
      { name: "Las Vegas Raiders",     aliases: ["Raiders", "Oakland Raiders", "LA Raiders"] },
      { name: "Washington Commanders", aliases: ["Commanders", "Washington Redskins", "Redskins"] },
    ],
  },
  {
    id: "mens-grand-slam-titles",
    category: "Sports",
    prompt: "Men's players with the most tennis Grand Slam singles titles",
    items: [
      { name: "Novak Djokovic",  aliases: ["Djokovic", "Nole"] },
      { name: "Rafael Nadal",    aliases: ["Nadal", "Rafa"] },
      { name: "Roger Federer",   aliases: ["Federer", "Fed"] },
      { name: "Pete Sampras",    aliases: ["Sampras"] },
      { name: "Roy Emerson",     aliases: ["Emerson"] },
      { name: "Rod Laver",       aliases: ["Laver"] },
      { name: "Bjorn Borg",      aliases: ["Björn Borg", "Borg"] },
      { name: "Bill Tilden",     aliases: ["Tilden"] },
      { name: "Andre Agassi",    aliases: ["Agassi"] },
      { name: "Jimmy Connors",   aliases: ["Connors"] },
    ],
  },
  {
    id: "womens-grand-slam-titles",
    category: "Sports",
    prompt: "Women's players with the most tennis Grand Slam singles titles",
    items: [
      { name: "Margaret Court",       aliases: ["Court"] },
      { name: "Serena Williams",      aliases: ["Serena"] },
      { name: "Steffi Graf",          aliases: ["Graf"] },
      { name: "Helen Wills",          aliases: ["Helen Wills Moody"] },
      { name: "Chris Evert",          aliases: ["Evert"] },
      { name: "Martina Navratilova",  aliases: ["Navratilova"] },
      { name: "Billie Jean King",     aliases: ["BJK", "King"] },
      { name: "Maureen Connolly",     aliases: ["Maureen Connolly Brinker", "Little Mo"] },
      { name: "Monica Seles",         aliases: ["Seles"] },
      { name: "Suzanne Lenglen",      aliases: ["Lenglen"] },
    ],
  },
  {
    id: "ballon-dor",
    category: "Sports",
    prompt: "Players with the most Ballon d'Or wins",
    items: [
      { name: "Lionel Messi",     aliases: ["Messi", "Leo Messi"] },
      { name: "Cristiano Ronaldo", aliases: ["Ronaldo", "CR7", "Cristiano"] },
      { name: "Michel Platini",   aliases: ["Platini"] },
      { name: "Johan Cruyff",     aliases: ["Cruyff"] },
      { name: "Marco van Basten", aliases: ["van Basten", "Van Basten"] },
      { name: "Franz Beckenbauer", aliases: ["Beckenbauer"] },
      { name: "Alfredo di Stefano", aliases: ["di Stefano", "Di Stefano", "Alfredo Di Stefano"] },
      { name: "Ronaldo",          aliases: ["Ronaldo Nazario", "R9", "Ronaldo Brazil", "Ronaldo Fenomeno"] },
      { name: "Karim Benzema",    aliases: ["Benzema"] },
      { name: "Luka Modric",      aliases: ["Modric"] },
    ],
  },
  {
    id: "champions-league-titles",
    category: "Sports",
    prompt: "Clubs with the most UEFA Champions League / European Cup titles",
    items: [
      { name: "Real Madrid",       aliases: ["Real"] },
      { name: "AC Milan",          aliases: ["Milan"] },
      { name: "Bayern Munich",     aliases: ["Bayern", "FC Bayern", "Bayern Munchen", "Bayern München"] },
      { name: "Liverpool",         aliases: ["LFC"] },
      { name: "Barcelona",         aliases: ["FC Barcelona", "Barca", "Barça"] },
      { name: "Ajax",              aliases: ["AFC Ajax", "Ajax Amsterdam"] },
      { name: "Manchester United", aliases: ["Man United", "Man Utd", "United", "MUFC"] },
      { name: "Inter Milan",       aliases: ["Inter", "Internazionale"] },
      { name: "Benfica",           aliases: ["SL Benfica"] },
      { name: "Nottingham Forest", aliases: ["Forest"] },
    ],
  },
  {
    id: "world-cup-wins",
    category: "Sports",
    prompt: "Countries to have won the men's FIFA World Cup",
    hint: "Only 8 countries — name them all",
    items: [
      { name: "Brazil",     aliases: ["Bresil"] },
      { name: "Germany",    aliases: ["West Germany", "Deutschland"] },
      { name: "Italy",      aliases: ["Italia"] },
      { name: "Argentina",  aliases: [] },
      { name: "France",     aliases: [] },
      { name: "Uruguay",    aliases: [] },
      { name: "England",    aliases: [] },
      { name: "Spain",      aliases: ["Espana"] },
    ],
  },
  {
    id: "intl-goalscorers-men",
    category: "Sports",
    prompt: "All-time top international goalscorers in men's football",
    items: [
      { name: "Cristiano Ronaldo", aliases: ["CR7", "Ronaldo", "Cristiano"] },
      { name: "Lionel Messi",     aliases: ["Messi", "Leo Messi"] },
      { name: "Ali Daei",         aliases: ["Daei"] },
      { name: "Sunil Chhetri",    aliases: ["Chhetri"] },
      { name: "Mokhtar Dahari",   aliases: ["Dahari"] },
      { name: "Ferenc Puskas",    aliases: ["Puskás", "Puskas"] },
      { name: "Godfrey Chitalu",  aliases: ["Chitalu"] },
      { name: "Hussain Saeed",    aliases: ["Hussein Saeed"] },
      { name: "Pele",             aliases: ["Pelé"] },
      { name: "Sandor Kocsis",    aliases: ["Sándor Kocsis", "Kocsis"] },
    ],
  },
  {
    id: "popular-dog-breeds",
    category: "Animals",
    prompt: "Most popular dog breeds in the United States",
    hint: "AKC registration rankings",
    items: [
      { name: "French Bulldog",       aliases: ["Frenchie", "French Bull Dog"] },
      { name: "Labrador Retriever",   aliases: ["Lab", "Labrador"] },
      { name: "Golden Retriever",     aliases: ["Golden"] },
      { name: "German Shepherd",      aliases: ["GSD"] },
      { name: "Poodle",               aliases: [] },
      { name: "Bulldog",              aliases: ["English Bulldog"] },
      { name: "Rottweiler",           aliases: [] },
      { name: "Beagle",               aliases: [] },
      { name: "Dachshund",            aliases: ["Wiener Dog", "Sausage Dog"] },
      { name: "German Shorthaired Pointer", aliases: ["GSP"] },
    ],
  },
  {
    id: "best-selling-video-games",
    category: "Games",
    prompt: "Best-selling video games of all time",
    hint: "Across all platforms",
    items: [
      { name: "Minecraft",              aliases: [] },
      { name: "Grand Theft Auto V",     aliases: ["GTA V", "GTA 5"] },
      { name: "Tetris",                 aliases: ["Tetris EA"] },
      { name: "Wii Sports",             aliases: [] },
      { name: "PUBG",                   aliases: ["PlayerUnknown's Battlegrounds", "PUBG: Battlegrounds"] },
      { name: "Mario Kart 8",           aliases: ["Mario Kart 8 Deluxe", "MK8"] },
      { name: "Red Dead Redemption 2",  aliases: ["RDR2", "RDR 2"] },
      { name: "Super Mario Bros.",      aliases: ["Super Mario Bros"] },
      { name: "Pokemon Red/Blue/Green/Yellow", aliases: ["Pokemon Red", "Pokemon Blue", "Pokemon Yellow", "Pokemon Red Blue"] },
      { name: "Terraria",               aliases: [] },
    ],
  },
  {
    id: "largest-planets",
    category: "Science",
    prompt: "Largest planets in our solar system",
    hint: "By diameter",
    items: [
      { name: "Jupiter", aliases: [] },
      { name: "Saturn",  aliases: [] },
      { name: "Uranus",  aliases: [] },
      { name: "Neptune", aliases: [] },
      { name: "Earth",   aliases: [] },
      { name: "Venus",   aliases: [] },
      { name: "Mars",    aliases: [] },
      { name: "Mercury", aliases: [] },
    ],
  },
  {
    id: "most-populous-cities",
    category: "Geography",
    prompt: "Most populous metropolitan areas in the world",
    hint: "Urban agglomeration population",
    items: [
      { name: "Tokyo",       aliases: ["Greater Tokyo"] },
      { name: "Delhi",       aliases: ["New Delhi", "Delhi NCR"] },
      { name: "Shanghai",    aliases: [] },
      { name: "Dhaka",       aliases: ["Dacca"] },
      { name: "Sao Paulo",   aliases: ["São Paulo"] },
      { name: "Cairo",       aliases: ["Greater Cairo"] },
      { name: "Mexico City", aliases: ["Ciudad de Mexico", "CDMX", "Mexico DF"] },
      { name: "Beijing",     aliases: ["Peking"] },
      { name: "Mumbai",      aliases: ["Bombay"] },
      { name: "Osaka",       aliases: [] },
    ],
  },
  {
    id: "richest-people",
    category: "Business",
    prompt: "Richest people in the world",
    hint: "Approximate Forbes/Bloomberg ranking — order varies",
    items: [
      { name: "Elon Musk",         aliases: ["Musk"] },
      { name: "Jeff Bezos",        aliases: ["Bezos"] },
      { name: "Mark Zuckerberg",   aliases: ["Zuckerberg", "Zuck"] },
      { name: "Larry Ellison",     aliases: ["Ellison"] },
      { name: "Bernard Arnault",   aliases: ["Arnault"] },
      { name: "Larry Page",        aliases: ["Page"] },
      { name: "Sergey Brin",       aliases: ["Brin"] },
      { name: "Bill Gates",        aliases: ["Gates"] },
      { name: "Steve Ballmer",     aliases: ["Ballmer"] },
      { name: "Warren Buffett",    aliases: ["Buffett"] },
    ],
  },
  {
    id: "largest-companies",
    category: "Business",
    prompt: "Most valuable public companies by market cap",
    hint: "Snapshot — fluctuates daily",
    items: [
      { name: "Apple",            aliases: ["AAPL"] },
      { name: "Microsoft",        aliases: ["MSFT"] },
      { name: "Nvidia",           aliases: ["NVDA"] },
      { name: "Alphabet",         aliases: ["Google", "GOOGL", "GOOG"] },
      { name: "Amazon",           aliases: ["AMZN"] },
      { name: "Saudi Aramco",     aliases: ["Aramco"] },
      { name: "Meta",             aliases: ["Facebook", "META"] },
      { name: "Berkshire Hathaway", aliases: ["Berkshire", "BRK"] },
      { name: "TSMC",             aliases: ["Taiwan Semiconductor", "Taiwan Semiconductor Manufacturing"] },
      { name: "Tesla",            aliases: ["TSLA"] },
    ],
  },
  {
    id: "best-selling-books",
    category: "Books",
    prompt: "Best-selling book series of all time",
    items: [
      { name: "Harry Potter",          aliases: [] },
      { name: "Goosebumps",            aliases: [] },
      { name: "Perry Mason",           aliases: [] },
      { name: "Berenstain Bears",      aliases: ["The Berenstain Bears"] },
      { name: "Choose Your Own Adventure", aliases: [] },
      { name: "Diary of a Wimpy Kid",  aliases: [] },
      { name: "Robert Langdon",        aliases: ["Da Vinci Code", "Dan Brown Langdon"] },
      { name: "Nancy Drew",            aliases: [] },
      { name: "The Lord of the Rings", aliases: ["Lord of the Rings", "LOTR"] },
      { name: "Sweet Valley High",     aliases: [] },
    ],
  },
  {
    id: "oscar-best-picture-multi",
    category: "Movies",
    prompt: "Films tied with the most Academy Award wins",
    hint: "Each won 11 Oscars",
    items: [
      { name: "Ben-Hur",                        aliases: ["Ben Hur"] },
      { name: "Titanic",                        aliases: [] },
      { name: "The Lord of the Rings: The Return of the King", aliases: ["Return of the King", "LOTR Return of the King", "LOTR ROTK"] },
    ],
  },
  {
    id: "most-oscars-actors",
    category: "Movies",
    prompt: "Performers with the most acting Academy Awards",
    items: [
      { name: "Katharine Hepburn",   aliases: ["Hepburn"] },
      { name: "Daniel Day-Lewis",    aliases: ["Day-Lewis", "Daniel Day Lewis"] },
      { name: "Frances McDormand",   aliases: ["McDormand"] },
      { name: "Ingrid Bergman",      aliases: ["Bergman"] },
      { name: "Jack Nicholson",      aliases: ["Nicholson"] },
      { name: "Meryl Streep",        aliases: ["Streep"] },
      { name: "Walter Brennan",      aliases: ["Brennan"] },
      { name: "Marlon Brando",       aliases: ["Brando"] },
      { name: "Gary Cooper",         aliases: [] },
      { name: "Bette Davis",         aliases: [] },
    ],
  },
  {
    id: "f1-championships",
    category: "Sports",
    prompt: "Drivers with the most F1 World Championships",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumacher"] },
      { name: "Lewis Hamilton",     aliases: ["Hamilton"] },
      { name: "Juan Manuel Fangio", aliases: ["Fangio"] },
      { name: "Max Verstappen",     aliases: ["Verstappen"] },
      { name: "Alain Prost",        aliases: ["Prost"] },
      { name: "Sebastian Vettel",   aliases: ["Vettel"] },
      { name: "Jackie Stewart",     aliases: ["Stewart"] },
      { name: "Niki Lauda",         aliases: ["Lauda"] },
      { name: "Nelson Piquet",      aliases: ["Piquet"] },
      { name: "Ayrton Senna",       aliases: ["Senna"] },
    ],
  },
  {
    id: "olympic-medals-countries",
    category: "Sports",
    prompt: "Countries with the most all-time Summer Olympic gold medals",
    items: [
      { name: "United States",  aliases: ["USA", "US", "America"] },
      { name: "Soviet Union",   aliases: ["USSR"] },
      { name: "Germany",        aliases: ["West Germany", "East Germany", "Deutschland"] },
      { name: "Great Britain",  aliases: ["United Kingdom", "UK", "Britain"] },
      { name: "France",         aliases: [] },
      { name: "Italy",          aliases: ["Italia"] },
      { name: "China",          aliases: [] },
      { name: "Hungary",        aliases: [] },
      { name: "Sweden",         aliases: [] },
      { name: "Australia",      aliases: [] },
    ],
  },
  {
    id: "expensive-paintings",
    category: "Art",
    prompt: "Most expensive paintings ever sold",
    hint: "Public auction or private sale",
    items: [
      { name: "Salvator Mundi",            aliases: [] },
      { name: "Interchange",               aliases: [] },
      { name: "The Card Players",          aliases: ["Card Players"] },
      { name: "Nafea Faa Ipoipo",          aliases: ["When Will You Marry"] },
      { name: "Number 17A",                aliases: ["No. 17A"] },
      { name: "Wasserschlangen II",        aliases: ["Water Serpents II"] },
      { name: "No. 6 (Violet, Green and Red)", aliases: ["No 6 Rothko"] },
      { name: "Pendant portraits of Maerten Soolmans and Oopjen Coppit", aliases: ["Rembrandt Pendants", "Soolmans and Coppit"] },
      { name: "Les Femmes d'Alger",        aliases: ["Women of Algiers", "Les Femmes d Alger"] },
      { name: "Nu couche",                 aliases: ["Reclining Nude", "Nu couché"] },
    ],
  },
  {
    id: "tour-de-france",
    category: "Sports",
    prompt: "Cyclists with the most Tour de France wins (recognised)",
    hint: "Lance Armstrong's wins were stripped — exclude him",
    items: [
      { name: "Jacques Anquetil",  aliases: ["Anquetil"] },
      { name: "Eddy Merckx",       aliases: ["Merckx"] },
      { name: "Bernard Hinault",   aliases: ["Hinault"] },
      { name: "Miguel Indurain",   aliases: ["Indurain"] },
      { name: "Chris Froome",      aliases: ["Froome"] },
      { name: "Tadej Pogacar",     aliases: ["Pogačar", "Pogacar"] },
      { name: "Philippe Thys",     aliases: ["Thys"] },
      { name: "Louison Bobet",     aliases: ["Bobet"] },
      { name: "Greg LeMond",       aliases: ["LeMond"] },
      { name: "Jonas Vingegaard",  aliases: ["Vingegaard"] },
    ],
  },
  {
    id: "biggest-religions",
    category: "World",
    prompt: "Largest religions by number of adherents",
    items: [
      { name: "Christianity",      aliases: ["Christian"] },
      { name: "Islam",             aliases: ["Muslim"] },
      { name: "Hinduism",          aliases: ["Hindu"] },
      { name: "Buddhism",          aliases: ["Buddhist"] },
      { name: "Folk Religions",    aliases: ["Folk Religion", "Traditional Religions", "Chinese Folk Religion"] },
      { name: "Sikhism",           aliases: ["Sikh"] },
      { name: "Judaism",           aliases: ["Jewish"] },
      { name: "Shinto",            aliases: ["Shintoism"] },
      { name: "Bahai",             aliases: ["Baha'i", "Bahai Faith", "Baháʼí"] },
      { name: "Jainism",           aliases: ["Jain"] },
    ],
  },
  {
    id: "pizza-toppings-us",
    category: "Food",
    prompt: "Most popular pizza toppings in the United States",
    items: [
      { name: "Pepperoni",       aliases: [] },
      { name: "Sausage",         aliases: ["Italian Sausage"] },
      { name: "Mushrooms",       aliases: ["Mushroom"] },
      { name: "Bacon",           aliases: [] },
      { name: "Onions",          aliases: ["Onion"] },
      { name: "Black Olives",    aliases: ["Olives"] },
      { name: "Green Peppers",   aliases: ["Bell Peppers", "Peppers"] },
      { name: "Chicken",         aliases: ["Grilled Chicken"] },
      { name: "Extra Cheese",    aliases: ["Cheese"] },
      { name: "Ham",             aliases: [] },
    ],
  },
  {
    id: "happiest-countries",
    category: "World",
    prompt: "Happiest countries (World Happiness Report)",
    items: [
      { name: "Finland",       aliases: [] },
      { name: "Denmark",       aliases: [] },
      { name: "Iceland",       aliases: [] },
      { name: "Sweden",        aliases: [] },
      { name: "Israel",        aliases: [] },
      { name: "Netherlands",   aliases: ["Holland"] },
      { name: "Norway",        aliases: [] },
      { name: "Luxembourg",    aliases: [] },
      { name: "Switzerland",   aliases: ["Suisse"] },
      { name: "Australia",     aliases: [] },
    ],
  },
  {
    id: "coffee-producers",
    category: "Food",
    prompt: "Largest coffee-producing countries",
    items: [
      { name: "Brazil",      aliases: ["Bresil", "Brasil"] },
      { name: "Vietnam",     aliases: [] },
      { name: "Colombia",    aliases: ["Colombie"] },
      { name: "Indonesia",   aliases: [] },
      { name: "Ethiopia",    aliases: [] },
      { name: "Uganda",      aliases: [] },
      { name: "Honduras",    aliases: [] },
      { name: "India",       aliases: [] },
      { name: "Peru",        aliases: [] },
      { name: "Mexico",      aliases: [] },
    ],
  },
  {
    id: "wine-producers",
    category: "Food",
    prompt: "Largest wine-producing countries",
    items: [
      { name: "Italy",          aliases: ["Italia"] },
      { name: "France",         aliases: [] },
      { name: "Spain",          aliases: ["Espana"] },
      { name: "United States",  aliases: ["USA", "US", "America"] },
      { name: "Australia",      aliases: [] },
      { name: "Chile",          aliases: [] },
      { name: "Argentina",      aliases: [] },
      { name: "South Africa",   aliases: [] },
      { name: "Germany",        aliases: ["Deutschland"] },
      { name: "Portugal",       aliases: [] },
    ],
  },
  {
    id: "biggest-economies",
    category: "Business",
    prompt: "Largest economies in the world by nominal GDP",
    items: [
      { name: "United States",  aliases: ["USA", "US", "America"] },
      { name: "China",          aliases: [] },
      { name: "Germany",        aliases: ["Deutschland"] },
      { name: "Japan",          aliases: [] },
      { name: "India",          aliases: [] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Great Britain"] },
      { name: "France",         aliases: [] },
      { name: "Italy",          aliases: ["Italia"] },
      { name: "Brazil",         aliases: ["Bresil"] },
      { name: "Canada",         aliases: [] },
    ],
  },
  {
    id: "fastest-fish",
    category: "Animals",
    prompt: "Fastest fish in the ocean",
    items: [
      { name: "Black Marlin",       aliases: [] },
      { name: "Sailfish",           aliases: [] },
      { name: "Striped Marlin",     aliases: [] },
      { name: "Wahoo",              aliases: [] },
      { name: "Mako Shark",         aliases: ["Shortfin Mako", "Shortfin Mako Shark"] },
      { name: "Atlantic Bluefin Tuna", aliases: ["Bluefin Tuna"] },
      { name: "Blue Shark",         aliases: [] },
      { name: "Bonefish",           aliases: [] },
      { name: "Swordfish",          aliases: [] },
      { name: "Yellowfin Tuna",     aliases: [] },
    ],
  },
  {
    id: "longest-rivers-europe",
    category: "Geography",
    prompt: "Longest rivers in Europe",
    items: [
      { name: "Volga",     aliases: [] },
      { name: "Danube",    aliases: [] },
      { name: "Ural",      aliases: [] },
      { name: "Dnieper",   aliases: ["Dnepr"] },
      { name: "Don",       aliases: [] },
      { name: "Pechora",   aliases: [] },
      { name: "Kama",      aliases: [] },
      { name: "Oka",       aliases: [] },
      { name: "Belaya",    aliases: [] },
      { name: "Dniester",  aliases: ["Dnestr"] },
    ],
  },
  {
    id: "highest-peaks-europe",
    category: "Geography",
    prompt: "Highest mountains in Europe",
    hint: "Caucasus included",
    items: [
      { name: "Elbrus",         aliases: ["Mount Elbrus"] },
      { name: "Dykh-Tau",       aliases: ["Dykhtau"] },
      { name: "Shkhara",        aliases: [] },
      { name: "Koshtan-Tau",    aliases: ["Koshtantau"] },
      { name: "Pik Pushkina",   aliases: ["Pushkin Peak"] },
      { name: "Dzhangi-Tau",    aliases: ["Janga"] },
      { name: "Kazbek",         aliases: ["Mount Kazbek"] },
      { name: "Mont Blanc",     aliases: [] },
      { name: "Dufourspitze",   aliases: ["Monte Rosa"] },
      { name: "Dom",            aliases: [] },
    ],
  },
  {
    id: "us-presidents-recent",
    category: "History",
    prompt: "Last ten U.S. presidents (most recent first)",
    items: [
      { name: "Donald Trump",   aliases: ["Trump"] },
      { name: "Joe Biden",      aliases: ["Biden", "Joseph Biden"] },
      { name: "Barack Obama",   aliases: ["Obama"] },
      { name: "George W. Bush", aliases: ["Bush", "GW Bush", "George Bush Jr", "Dubya"] },
      { name: "Bill Clinton",   aliases: ["Clinton"] },
      { name: "George H.W. Bush", aliases: ["Bush Sr", "George Bush Senior", "George H W Bush", "HW Bush"] },
      { name: "Ronald Reagan",  aliases: ["Reagan"] },
      { name: "Jimmy Carter",   aliases: ["Carter"] },
      { name: "Gerald Ford",    aliases: ["Ford"] },
      { name: "Richard Nixon",  aliases: ["Nixon"] },
    ],
  },
  {
    id: "longest-bridges",
    category: "Architecture",
    prompt: "Longest bridges in the world (any type)",
    items: [
      { name: "Danyang-Kunshan Grand Bridge",  aliases: ["Danyang Kunshan"] },
      { name: "Changhua-Kaohsiung Viaduct",    aliases: ["Changhua Kaohsiung"] },
      { name: "Cangde Grand Bridge",           aliases: ["Cangde Bridge"] },
      { name: "Tianjin Grand Bridge",          aliases: ["Tianjin Bridge"] },
      { name: "Weinan Weihe Grand Bridge",     aliases: ["Weinan Weihe Bridge"] },
      { name: "Bang Na Expressway",            aliases: ["Bang Na"] },
      { name: "Beijing Grand Bridge",          aliases: [] },
      { name: "Lake Pontchartrain Causeway",   aliases: ["Pontchartrain Causeway"] },
      { name: "Manchac Swamp Bridge",          aliases: ["Manchac Bridge"] },
      { name: "Yangcun Bridge",                aliases: [] },
    ],
  },
  {
    id: "english-monarchs-recent",
    category: "History",
    prompt: "Last ten monarchs of the United Kingdom / Britain (most recent first)",
    items: [
      { name: "Charles III",   aliases: ["King Charles III", "Charles 3"] },
      { name: "Elizabeth II",  aliases: ["Queen Elizabeth II", "Elizabeth 2", "QEII"] },
      { name: "George VI",     aliases: ["George 6"] },
      { name: "Edward VIII",   aliases: ["Edward 8"] },
      { name: "George V",      aliases: ["George 5"] },
      { name: "Edward VII",    aliases: ["Edward 7"] },
      { name: "Victoria",      aliases: ["Queen Victoria"] },
      { name: "William IV",    aliases: ["William 4"] },
      { name: "George IV",     aliases: ["George 4"] },
      { name: "George III",    aliases: ["George 3"] },
    ],
  },
  {
    id: "biggest-cities-france",
    category: "France",
    prompt: "Most populous cities in France (commune proper)",
    items: [
      { name: "Paris",        aliases: [] },
      { name: "Marseille",    aliases: [] },
      { name: "Lyon",         aliases: [] },
      { name: "Toulouse",     aliases: [] },
      { name: "Nice",         aliases: [] },
      { name: "Nantes",       aliases: [] },
      { name: "Montpellier",  aliases: [] },
      { name: "Strasbourg",   aliases: [] },
      { name: "Bordeaux",     aliases: [] },
      { name: "Lille",        aliases: [] },
    ],
  },
  {
    id: "best-selling-cars",
    category: "Cars",
    prompt: "Best-selling cars of all time (single nameplate)",
    items: [
      { name: "Toyota Corolla",         aliases: ["Corolla"] },
      { name: "Ford F-Series",          aliases: ["F-Series", "Ford F150", "Ford F-150"] },
      { name: "Volkswagen Golf",        aliases: ["VW Golf", "Golf"] },
      { name: "Volkswagen Beetle",      aliases: ["VW Beetle", "Beetle"] },
      { name: "Ford Escort",            aliases: ["Escort"] },
      { name: "Honda Civic",            aliases: ["Civic"] },
      { name: "Honda Accord",           aliases: ["Accord"] },
      { name: "Chevrolet Impala",       aliases: ["Impala"] },
      { name: "Lada Riva",              aliases: ["Lada 2105", "Lada Classic"] },
      { name: "Nissan Sunny",           aliases: ["Sunny"] },
    ],
  },
  {
    id: "highest-rated-imdb",
    category: "Movies",
    prompt: "Highest-rated films on IMDb (Top 250)",
    items: [
      { name: "The Shawshank Redemption",    aliases: ["Shawshank Redemption", "Shawshank"] },
      { name: "The Godfather",               aliases: ["Godfather"] },
      { name: "The Dark Knight",             aliases: ["Dark Knight"] },
      { name: "The Godfather Part II",       aliases: ["Godfather Part II", "Godfather 2", "Godfather II"] },
      { name: "12 Angry Men",                aliases: ["Twelve Angry Men"] },
      { name: "Schindler's List",            aliases: ["Schindlers List"] },
      { name: "The Lord of the Rings: The Return of the King", aliases: ["Return of the King", "LOTR Return of the King", "LOTR ROTK"] },
      { name: "Pulp Fiction",                aliases: [] },
      { name: "The Lord of the Rings: The Fellowship of the Ring", aliases: ["Fellowship of the Ring", "LOTR Fellowship"] },
      { name: "The Good, the Bad and the Ugly", aliases: ["Good Bad Ugly", "Good the Bad and the Ugly"] },
    ],
  },
  {
    id: "marvel-movies",
    category: "Movies",
    prompt: "Highest-grossing Marvel Cinematic Universe films",
    items: [
      { name: "Avengers: Endgame",         aliases: ["Endgame"] },
      { name: "Avengers: Infinity War",    aliases: ["Infinity War"] },
      { name: "Spider-Man: No Way Home",   aliases: ["No Way Home"] },
      { name: "The Avengers",              aliases: ["Avengers", "Avengers Assemble"] },
      { name: "Avengers: Age of Ultron",   aliases: ["Age of Ultron"] },
      { name: "Black Panther",             aliases: [] },
      { name: "Captain America: Civil War", aliases: ["Civil War"] },
      { name: "Iron Man 3",                aliases: [] },
      { name: "Deadpool & Wolverine",      aliases: ["Deadpool 3", "Deadpool and Wolverine"] },
      { name: "Captain Marvel",            aliases: [] },
    ],
  },
  {
    id: "oldest-universities",
    category: "History",
    prompt: "Oldest universities in continuous operation",
    items: [
      { name: "University of Bologna",        aliases: ["Bologna"] },
      { name: "University of Oxford",         aliases: ["Oxford"] },
      { name: "University of Salamanca",      aliases: ["Salamanca"] },
      { name: "University of Paris",          aliases: ["Paris University", "Sorbonne"] },
      { name: "University of Cambridge",      aliases: ["Cambridge"] },
      { name: "University of Padua",          aliases: ["Padua"] },
      { name: "University of Naples Federico II", aliases: ["Naples Federico II"] },
      { name: "University of Siena",          aliases: ["Siena"] },
      { name: "University of Coimbra",        aliases: ["Coimbra"] },
      { name: "University of Macerata",       aliases: ["Macerata"] },
    ],
  },
  {
    id: "popular-sports",
    category: "Sports",
    prompt: "Most popular sports by global following",
    hint: "Estimated fans worldwide",
    items: [
      { name: "Football",        aliases: ["Soccer", "Association Football"] },
      { name: "Cricket",         aliases: [] },
      { name: "Field Hockey",    aliases: ["Hockey"] },
      { name: "Tennis",          aliases: [] },
      { name: "Volleyball",      aliases: [] },
      { name: "Table Tennis",    aliases: ["Ping Pong"] },
      { name: "Basketball",      aliases: [] },
      { name: "Baseball",        aliases: [] },
      { name: "Rugby",           aliases: ["Rugby Union", "Rugby Football"] },
      { name: "Golf",            aliases: [] },
    ],
  },
  {
    id: "world-cup-finals",
    category: "Sports",
    prompt: "Countries with the most men's World Cup final appearances",
    items: [
      { name: "Germany",     aliases: ["West Germany", "Deutschland"] },
      { name: "Brazil",      aliases: ["Bresil"] },
      { name: "Argentina",   aliases: [] },
      { name: "Italy",       aliases: ["Italia"] },
      { name: "France",      aliases: [] },
      { name: "Netherlands", aliases: ["Holland"] },
      { name: "Uruguay",     aliases: [] },
      { name: "Czechoslovakia", aliases: [] },
      { name: "Hungary",     aliases: [] },
      { name: "England",     aliases: [] },
    ],
  },
  { id: "wgeo-gdp-nominal", category: "Geography", prompt: "Top 10 countries by nominal GDP (all-time peak rankings, 2020s era)", hint: "Economic superpowers",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine", "PRC"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "India", aliases: ["Inde"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "France", aliases: [] },
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "Brazil", aliases: ["Bresil", "Brasil"] },
      { name: "Canada", aliases: [] }
    ]
  },
  { id: "wgeo-gdp-per-capita", category: "Geography", prompt: "Top 10 countries by GDP per capita (nominal)", hint: "Tiny but wealthy",
    items: [
      { name: "Luxembourg", aliases: [] },
      { name: "Ireland", aliases: ["Irlande"] },
      { name: "Switzerland", aliases: ["Suisse"] },
      { name: "Norway", aliases: ["Norvege"] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Iceland", aliases: ["Islande"] },
      { name: "Qatar", aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Denmark", aliases: ["Danemark"] },
      { name: "Australia", aliases: ["Australie"] }
    ]
  },
  { id: "wgeo-hdi-top", category: "Geography", prompt: "Top 10 countries by Human Development Index (HDI)", hint: "Best places to live by UN measure",
    items: [
      { name: "Switzerland", aliases: ["Suisse"] },
      { name: "Norway", aliases: ["Norvege"] },
      { name: "Iceland", aliases: ["Islande"] },
      { name: "Hong Kong", aliases: [] },
      { name: "Denmark", aliases: ["Danemark"] },
      { name: "Sweden", aliases: ["Suede"] },
      { name: "Ireland", aliases: ["Irlande"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Netherlands", aliases: ["Pays-Bas", "Holland", "Hollande"] }
    ]
  },
  { id: "wgeo-life-expectancy", category: "Geography", prompt: "Top 10 countries by life expectancy", hint: "Where people live longest",
    items: [
      { name: "Hong Kong", aliases: [] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Switzerland", aliases: ["Suisse"] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Iceland", aliases: ["Islande"] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] },
      { name: "Israel", aliases: ["Israel"] }
    ]
  },
  { id: "wgeo-highest-birth-rate", category: "Geography", prompt: "Top 10 countries with the highest birth rate", hint: "Africa dominates",
    items: [
      { name: "Niger", aliases: [] },
      { name: "Angola", aliases: [] },
      { name: "Benin", aliases: ["Benin"] },
      { name: "Mali", aliases: [] },
      { name: "Uganda", aliases: ["Ouganda"] },
      { name: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Congo-Kinshasa", "RDC"] },
      { name: "Chad", aliases: ["Tchad"] },
      { name: "Somalia", aliases: ["Somalie"] },
      { name: "South Sudan", aliases: ["Soudan du Sud"] },
      { name: "Burkina Faso", aliases: [] }
    ]
  },
  { id: "wgeo-lowest-birth-rate", category: "Geography", prompt: "Top 10 countries with the lowest birth rate", hint: "Aging societies",
    items: [
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] },
      { name: "Hong Kong", aliases: [] },
      { name: "Taiwan", aliases: ["Taiwan"] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Ukraine", aliases: [] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Greece", aliases: ["Grece"] },
      { name: "Portugal", aliases: [] }
    ]
  },
  { id: "wgeo-most-populated-continents", category: "Geography", prompt: "Top continents by population (all 7, plus Antarctica last)", hint: "Asia is king",
    items: [
      { name: "Asia", aliases: ["Asie"] },
      { name: "Africa", aliases: ["Afrique"] },
      { name: "Europe", aliases: [] },
      { name: "North America", aliases: ["Amerique du Nord"] },
      { name: "South America", aliases: ["Amerique du Sud"] },
      { name: "Australia/Oceania", aliases: ["Oceania", "Oceanie", "Australie"] },
      { name: "Antarctica", aliases: ["Antarctique"] },
      { name: "Greenland", aliases: ["Groenland"] },
      { name: "Madagascar", aliases: [] },
      { name: "New Guinea", aliases: ["Nouvelle-Guinee"] }
    ]
  },
  { id: "wgeo-largest-continents", category: "Geography", prompt: "Top continents/landmasses by area", hint: "From biggest to small",
    items: [
      { name: "Asia", aliases: ["Asie"] },
      { name: "Africa", aliases: ["Afrique"] },
      { name: "North America", aliases: ["Amerique du Nord"] },
      { name: "South America", aliases: ["Amerique du Sud"] },
      { name: "Antarctica", aliases: ["Antarctique"] },
      { name: "Europe", aliases: [] },
      { name: "Australia", aliases: ["Australie", "Oceania", "Oceanie"] },
      { name: "Greenland", aliases: ["Groenland"] },
      { name: "New Guinea", aliases: ["Nouvelle-Guinee"] },
      { name: "Borneo", aliases: [] }
    ]
  },
  { id: "wgeo-largest-oceans-seas", category: "Geography", prompt: "Top 10 largest oceans and seas by area", hint: "Salty water bodies",
    items: [
      { name: "Pacific Ocean", aliases: ["Pacific", "Pacifique", "Ocean Pacifique"] },
      { name: "Atlantic Ocean", aliases: ["Atlantic", "Atlantique", "Ocean Atlantique"] },
      { name: "Indian Ocean", aliases: ["Indian", "Ocean Indien"] },
      { name: "Southern Ocean", aliases: ["Antarctic Ocean", "Ocean Austral"] },
      { name: "Arctic Ocean", aliases: ["Arctic", "Ocean Arctique"] },
      { name: "Philippine Sea", aliases: ["Mer des Philippines"] },
      { name: "Coral Sea", aliases: ["Mer de Corail"] },
      { name: "Arabian Sea", aliases: ["Mer d'Arabie"] },
      { name: "South China Sea", aliases: ["Mer de Chine meridionale"] },
      { name: "Caribbean Sea", aliases: ["Mer des Caraibes", "Mer Caraibe"] }
    ]
  },
  { id: "wgeo-deepest-oceans", category: "Geography", prompt: "Top 10 deepest oceans/seas by maximum depth", hint: "Trench territory",
    items: [
      { name: "Pacific Ocean", aliases: ["Pacific", "Pacifique"] },
      { name: "Atlantic Ocean", aliases: ["Atlantic", "Atlantique"] },
      { name: "Indian Ocean", aliases: ["Indian", "Ocean Indien"] },
      { name: "Southern Ocean", aliases: ["Antarctic Ocean", "Ocean Austral"] },
      { name: "Caribbean Sea", aliases: ["Mer des Caraibes"] },
      { name: "Arctic Ocean", aliases: ["Arctic", "Ocean Arctique"] },
      { name: "Sea of Japan", aliases: ["Mer du Japon", "East Sea"] },
      { name: "Mediterranean Sea", aliases: ["Mediterranee", "Mer Mediterranee"] },
      { name: "Bering Sea", aliases: ["Mer de Bering"] },
      { name: "Gulf of Mexico", aliases: ["Golfe du Mexique"] }
    ]
  },
  { id: "wgeo-most-time-zones", category: "Geography", prompt: "Top 10 countries with the most time zones", hint: "Far-flung territories count",
    items: [
      { name: "France", aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Canada", aliases: [] },
      { name: "Denmark", aliases: ["Danemark"] },
      { name: "New Zealand", aliases: ["Nouvelle-Zelande"] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Mexico", aliases: ["Mexique"] }
    ]
  },
  { id: "wgeo-most-neighbors", category: "Geography", prompt: "Top 10 countries with the most land neighbors", hint: "Borderlands champions",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Congo-Kinshasa", "RDC"] },
      { name: "France", aliases: [] },
      { name: "Austria", aliases: ["Autriche"] },
      { name: "Tanzania", aliases: ["Tanzanie"] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] },
      { name: "Sudan", aliases: ["Soudan"] }
    ]
  },
  { id: "wgeo-highest-elevation", category: "Geography", prompt: "Top 10 countries with the highest average elevation", hint: "Roof of the world",
    items: [
      { name: "Bhutan", aliases: ["Bhoutan"] },
      { name: "Nepal", aliases: ["Nepal"] },
      { name: "Tajikistan", aliases: ["Tadjikistan"] },
      { name: "Kyrgyzstan", aliases: ["Kirghizistan"] },
      { name: "Lesotho", aliases: [] },
      { name: "Andorra", aliases: ["Andorre"] },
      { name: "Afghanistan", aliases: [] },
      { name: "Chile", aliases: ["Chili"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Armenia", aliases: ["Armenie"] }
    ]
  },
  { id: "wgeo-longest-coastline", category: "Geography", prompt: "Top 10 countries with the longest coastline", hint: "Shores forever",
    items: [
      { name: "Canada", aliases: [] },
      { name: "Norway", aliases: ["Norvege"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Greenland", aliases: ["Groenland"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Philippines", aliases: [] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Antarctica", aliases: ["Antarctique"] }
    ]
  },
  { id: "wgeo-most-forest-cover", category: "Geography", prompt: "Top 10 countries by total forest area", hint: "Green giants",
    items: [
      { name: "Russia", aliases: ["Russie"] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Canada", aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Congo-Kinshasa", "RDC"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Peru", aliases: ["Perou"] },
      { name: "India", aliases: ["Inde"] }
    ]
  },
  { id: "wgeo-most-freshwater", category: "Geography", prompt: "Top 10 countries with the most renewable freshwater resources", hint: "Rivers and lakes galore",
    items: [
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Canada", aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Colombia", aliases: ["Colombie"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Peru", aliases: ["Perou"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Congo-Kinshasa", "RDC"] }
    ]
  },
  { id: "wgeo-oil-reserves", category: "Geography", prompt: "Top 10 countries by proven oil reserves", hint: "Black gold leaders",
    items: [
      { name: "Venezuela", aliases: [] },
      { name: "Saudi Arabia", aliases: ["Arabie Saoudite"] },
      { name: "Iran", aliases: [] },
      { name: "Canada", aliases: [] },
      { name: "Iraq", aliases: ["Irak"] },
      { name: "Kuwait", aliases: ["Koweit"] },
      { name: "United Arab Emirates", aliases: ["UAE", "Emirats arabes unis", "Emirats"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Libya", aliases: ["Libye"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] }
    ]
  },
  { id: "wgeo-most-unesco-sites", category: "Geography", prompt: "Top 10 countries with the most UNESCO World Heritage Sites", hint: "Cultural treasure chests",
    items: [
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "France", aliases: [] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Iran", aliases: [] }
    ]
  },
  { id: "wgeo-most-languages", category: "Geography", prompt: "Top 10 countries with the most living languages spoken", hint: "Linguistic diversity champions",
    items: [
      { name: "Papua New Guinea", aliases: ["PNG", "Papouasie-Nouvelle-Guinee"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Nigeria", aliases: [] },
      { name: "India", aliases: ["Inde"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Cameroon", aliases: ["Cameroun"] },
      { name: "Brazil", aliases: ["Bresil"] }
    ]
  },
  { id: "wgeo-landlocked-largest", category: "Geography", prompt: "Top 10 largest landlocked countries by area", hint: "No coastline, big territory",
    items: [
      { name: "Kazakhstan", aliases: [] },
      { name: "Mongolia", aliases: ["Mongolie"] },
      { name: "Chad", aliases: ["Tchad"] },
      { name: "Niger", aliases: [] },
      { name: "Mali", aliases: [] },
      { name: "Ethiopia", aliases: ["Ethiopie"] },
      { name: "Bolivia", aliases: ["Bolivie"] },
      { name: "Zambia", aliases: ["Zambie"] },
      { name: "Afghanistan", aliases: [] },
      { name: "Central African Republic", aliases: ["CAR", "Republique centrafricaine"] }
    ]
  },
  { id: "wgeo-newest-countries", category: "Geography", prompt: "Top 10 most recently founded UN-recognized countries", hint: "Born in your lifetime",
    items: [
      { name: "South Sudan", aliases: ["Soudan du Sud"] },
      { name: "Montenegro", aliases: ["Montenegro"] },
      { name: "Serbia", aliases: ["Serbie"] },
      { name: "Timor-Leste", aliases: ["East Timor", "Timor oriental"] },
      { name: "Palau", aliases: ["Palaos"] },
      { name: "Eritrea", aliases: ["Erythree"] },
      { name: "Czech Republic", aliases: ["Czechia", "Tchequie", "Republique tcheque"] },
      { name: "Slovakia", aliases: ["Slovaquie"] },
      { name: "Bosnia and Herzegovina", aliases: ["Bosnia", "Bosnie"] },
      { name: "Namibia", aliases: ["Namibie"] }
    ]
  },
  { id: "wgeo-smallest-countries-pop", category: "Geography", prompt: "Top 10 smallest sovereign states by population", hint: "Tiny populations",
    items: [
      { name: "Vatican City", aliases: ["Vatican", "Holy See"] },
      { name: "Tuvalu", aliases: [] },
      { name: "Nauru", aliases: [] },
      { name: "Palau", aliases: ["Palaos"] },
      { name: "San Marino", aliases: ["Saint-Marin"] },
      { name: "Liechtenstein", aliases: [] },
      { name: "Monaco", aliases: [] },
      { name: "Marshall Islands", aliases: ["Iles Marshall"] },
      { name: "Saint Kitts and Nevis", aliases: ["Saint-Kitts-et-Nevis"] },
      { name: "Dominica", aliases: ["Dominique"] }
    ]
  },
  { id: "wgeo-densest-countries", category: "Geography", prompt: "Top 10 most densely populated countries/territories", hint: "Crammed in tight",
    items: [
      { name: "Monaco", aliases: [] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Vatican City", aliases: ["Vatican", "Holy See"] },
      { name: "Bahrain", aliases: ["Bahrein"] },
      { name: "Maldives", aliases: ["Maldives"] },
      { name: "Malta", aliases: ["Malte"] },
      { name: "Bangladesh", aliases: [] },
      { name: "Palestine", aliases: ["Palestine"] },
      { name: "Lebanon", aliases: ["Liban"] },
      { name: "Barbados", aliases: ["Barbade"] }
    ]
  },
  { id: "wgeo-least-dense", category: "Geography", prompt: "Top 10 least densely populated sovereign countries", hint: "Empty horizons",
    items: [
      { name: "Mongolia", aliases: ["Mongolie"] },
      { name: "Namibia", aliases: ["Namibie"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Iceland", aliases: ["Islande"] },
      { name: "Suriname", aliases: [] },
      { name: "Libya", aliases: ["Libye"] },
      { name: "Mauritania", aliases: ["Mauritanie"] },
      { name: "Guyana", aliases: [] },
      { name: "Canada", aliases: [] },
      { name: "Botswana", aliases: [] }
    ]
  },
  { id: "wgeo-most-islands", category: "Geography", prompt: "Top 10 countries with the most islands", hint: "Archipelago nations",
    items: [
      { name: "Sweden", aliases: ["Suede"] },
      { name: "Finland", aliases: ["Finlande"] },
      { name: "Norway", aliases: ["Norvege"] },
      { name: "Canada", aliases: [] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Philippines", aliases: [] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Greece", aliases: ["Grece"] }
    ]
  },
  { id: "wgeo-natural-gas-reserves", category: "Geography", prompt: "Top 10 countries by proven natural gas reserves", hint: "Methane mountains",
    items: [
      { name: "Russia", aliases: ["Russie"] },
      { name: "Iran", aliases: [] },
      { name: "Qatar", aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Turkmenistan", aliases: ["Turkmenistan"] },
      { name: "Venezuela", aliases: [] },
      { name: "Saudi Arabia", aliases: ["Arabie Saoudite"] },
      { name: "United Arab Emirates", aliases: ["UAE", "Emirats arabes unis", "Emirats"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Nigeria", aliases: [] }
    ]
  },
  { id: "wgeo-gold-producers", category: "Geography", prompt: "Top 10 gold-producing countries", hint: "Modern El Dorados",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Canada", aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Kazakhstan", aliases: [] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "South Africa", aliases: ["Afrique du Sud"] },
      { name: "Peru", aliases: ["Perou"] }
    ]
  },
  { id: "wgeo-coffee-producers", category: "Geography", prompt: "Top 10 coffee-producing countries", hint: "Bean powerhouses",
    items: [
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Vietnam", aliases: ["Viet Nam"] },
      { name: "Colombia", aliases: ["Colombie"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Ethiopia", aliases: ["Ethiopie"] },
      { name: "Uganda", aliases: ["Ouganda"] },
      { name: "Honduras", aliases: [] },
      { name: "India", aliases: ["Inde"] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Peru", aliases: ["Perou"] }
    ]
  },
  { id: "wgeo-wine-producers", category: "Geography", prompt: "Top 10 wine-producing countries", hint: "Vineyard kings",
    items: [
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "France", aliases: [] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Argentina", aliases: ["Argentine"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Chile", aliases: ["Chili"] },
      { name: "South Africa", aliases: ["Afrique du Sud"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Portugal", aliases: [] }
    ]
  },
  { id: "wgeo-rice-producers", category: "Geography", prompt: "Top 10 rice-producing countries", hint: "Paddy fields forever",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Bangladesh", aliases: [] },
      { name: "Vietnam", aliases: ["Viet Nam"] },
      { name: "Thailand", aliases: ["Thailande"] },
      { name: "Myanmar", aliases: ["Burma", "Birmanie"] },
      { name: "Philippines", aliases: [] },
      { name: "Pakistan", aliases: [] },
      { name: "Cambodia", aliases: ["Cambodge"] }
    ]
  },
  { id: "wgeo-wheat-producers", category: "Geography", prompt: "Top 10 wheat-producing countries", hint: "Bread baskets",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "France", aliases: [] },
      { name: "Canada", aliases: [] },
      { name: "Pakistan", aliases: [] },
      { name: "Ukraine", aliases: [] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] }
    ]
  },
  { id: "wgeo-co2-emitters", category: "Geography", prompt: "Top 10 CO2-emitting countries (total annual)", hint: "Carbon heavyweights",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Iran", aliases: [] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Saudi Arabia", aliases: ["Arabie Saoudite"] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] }
    ]
  },
  { id: "wgeo-military-spending", category: "Geography", prompt: "Top 10 countries by annual military spending", hint: "Defense budget giants",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Saudi Arabia", aliases: ["Arabie Saoudite"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "France", aliases: [] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] }
    ]
  },
  { id: "wgeo-most-tourists", category: "Geography", prompt: "Top 10 most-visited countries by international tourists", hint: "Tourism magnets",
    items: [
      { name: "France", aliases: [] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Thailand", aliases: ["Thailande"] }
    ]
  },
  { id: "wgeo-nuclear-arsenals", category: "Geography", prompt: "Top 10 countries by nuclear warhead stockpile (all known)", hint: "Atomic powers",
    items: [
      { name: "Russia", aliases: ["Russie"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "France", aliases: [] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Pakistan", aliases: [] },
      { name: "India", aliases: ["Inde"] },
      { name: "Israel", aliases: [] },
      { name: "North Korea", aliases: ["Coree du Nord", "DPRK"] },
      { name: "South Africa", aliases: ["Afrique du Sud"] }
    ]
  },
  { id: "wgeo-french-speakers", category: "Geography", prompt: "Top 10 countries with the most French speakers", hint: "La Francophonie",
    items: [
      { name: "France", aliases: [] },
      { name: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Congo-Kinshasa", "RDC"] },
      { name: "Algeria", aliases: ["Algerie"] },
      { name: "Morocco", aliases: ["Maroc"] },
      { name: "Canada", aliases: [] },
      { name: "Cameroon", aliases: ["Cameroun"] },
      { name: "Tunisia", aliases: ["Tunisie"] },
      { name: "Belgium", aliases: ["Belgique"] },
      { name: "Ivory Coast", aliases: ["Cote d'Ivoire", "Cote d Ivoire"] },
      { name: "Madagascar", aliases: [] }
    ]
  },
  { id: "wgeo-spanish-speakers", category: "Geography", prompt: "Top 10 countries with the most Spanish speakers", hint: "El mundo hispano",
    items: [
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Colombia", aliases: ["Colombie"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Argentina", aliases: ["Argentine"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Peru", aliases: ["Perou"] },
      { name: "Venezuela", aliases: [] },
      { name: "Chile", aliases: ["Chili"] },
      { name: "Ecuador", aliases: ["Equateur"] },
      { name: "Guatemala", aliases: [] }
    ]
  },
  { id: "wgeo-english-speakers", category: "Geography", prompt: "Top 10 countries with the most English speakers (total)", hint: "L1 plus L2",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Pakistan", aliases: [] },
      { name: "Nigeria", aliases: [] },
      { name: "Philippines", aliases: [] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Bangladesh", aliases: [] },
      { name: "Egypt", aliases: ["Egypte"] },
      { name: "Canada", aliases: [] }
    ]
  },
  { id: "wgeo-muslim-population", category: "Geography", prompt: "Top 10 countries with the largest Muslim population", hint: "Not all in the Middle East",
    items: [
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Pakistan", aliases: [] },
      { name: "India", aliases: ["Inde"] },
      { name: "Bangladesh", aliases: [] },
      { name: "Nigeria", aliases: [] },
      { name: "Egypt", aliases: ["Egypte"] },
      { name: "Iran", aliases: [] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] },
      { name: "Algeria", aliases: ["Algerie"] },
      { name: "Sudan", aliases: ["Soudan"] }
    ]
  },
  { id: "wgeo-christian-population", category: "Geography", prompt: "Top 10 countries with the largest Christian population", hint: "Believers by headcount",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Philippines", aliases: [] },
      { name: "Nigeria", aliases: [] },
      { name: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Congo-Kinshasa", "RDC"] },
      { name: "Ethiopia", aliases: ["Ethiopie"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "China", aliases: ["Chine"] }
    ]
  },
  { id: "wgeo-jewish-population", category: "Geography", prompt: "Top 10 countries with the largest Jewish population", hint: "Diaspora map",
    items: [
      { name: "Israel", aliases: [] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "France", aliases: [] },
      { name: "Canada", aliases: [] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Argentina", aliases: ["Argentine"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Brazil", aliases: ["Bresil"] }
    ]
  },
  { id: "wgeo-immigrants-host", category: "Geography", prompt: "Top 10 countries hosting the most immigrants", hint: "Magnets for migration",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Saudi Arabia", aliases: ["Arabie Saoudite"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "United Arab Emirates", aliases: ["UAE", "Emirats arabes unis", "Emirats"] },
      { name: "France", aliases: [] },
      { name: "Canada", aliases: [] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] }
    ]
  },
  { id: "wgeo-electricity-producers", category: "Geography", prompt: "Top 10 countries by electricity production", hint: "Watt nations",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Canada", aliases: [] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "France", aliases: [] }
    ]
  },
  { id: "wgeo-car-producers", category: "Geography", prompt: "Top 10 car-manufacturing countries", hint: "Auto giants",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "India", aliases: ["Inde"] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "France", aliases: [] }
    ]
  },
  { id: "wgeo-steel-producers", category: "Geography", prompt: "Top 10 steel-producing countries", hint: "Heavy industry leaders",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Iran", aliases: [] }
    ]
  },
  { id: "wgeo-arms-exporters", category: "Geography", prompt: "Top 10 arms-exporting countries", hint: "Weapons trade",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "France", aliases: [] },
      { name: "China", aliases: ["Chine"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] },
      { name: "Israel", aliases: [] }
    ]
  },
  { id: "wgeo-largest-armies", category: "Geography", prompt: "Top 10 countries by active military personnel", hint: "Boots on the ground",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "India", aliases: ["Inde"] },
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "North Korea", aliases: ["Coree du Nord", "DPRK"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Pakistan", aliases: [] },
      { name: "South Korea", aliases: ["Coree du Sud", "Korea"] },
      { name: "Iran", aliases: [] },
      { name: "Vietnam", aliases: ["Viet Nam"] },
      { name: "Egypt", aliases: ["Egypte"] }
    ]
  },
  { id: "wgeo-prison-population", category: "Geography", prompt: "Top 10 countries by total prison population", hint: "Behind bars worldwide",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Thailand", aliases: ["Thailande"] },
      { name: "Mexico", aliases: ["Mexique"] },
      { name: "Philippines", aliases: [] }
    ]
  },
  { id: "wgeo-smallest-area", category: "Geography", prompt: "Top 10 smallest sovereign countries by area", hint: "Microstates",
    items: [
      { name: "Vatican City", aliases: ["Vatican", "Holy See"] },
      { name: "Monaco", aliases: [] },
      { name: "Nauru", aliases: [] },
      { name: "Tuvalu", aliases: [] },
      { name: "San Marino", aliases: ["Saint-Marin"] },
      { name: "Liechtenstein", aliases: [] },
      { name: "Marshall Islands", aliases: ["Iles Marshall"] },
      { name: "Saint Kitts and Nevis", aliases: ["Saint-Kitts-et-Nevis"] },
      { name: "Maldives", aliases: ["Maldives"] },
      { name: "Malta", aliases: ["Malte"] }
    ]
  },
  { id: "wgeo-eu-largest", category: "Geography", prompt: "Top 10 largest EU member states by area", hint: "Inside the Union",
    items: [
      { name: "France", aliases: [] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Sweden", aliases: ["Suede"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Finland", aliases: ["Finlande"] },
      { name: "Poland", aliases: ["Pologne"] },
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "Romania", aliases: ["Roumanie"] },
      { name: "Greece", aliases: ["Grece"] },
      { name: "Bulgaria", aliases: ["Bulgarie"] }
    ]
  },
  { id: "wgeo-eu-pop", category: "Geography", prompt: "Top 10 most populous EU member states", hint: "Population of the Union",
    items: [
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "France", aliases: [] },
      { name: "Italy", aliases: ["Italie", "Italia"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Poland", aliases: ["Pologne"] },
      { name: "Romania", aliases: ["Roumanie"] },
      { name: "Netherlands", aliases: ["Pays-Bas", "Holland", "Hollande"] },
      { name: "Belgium", aliases: ["Belgique"] },
      { name: "Czech Republic", aliases: ["Czechia", "Tchequie", "Republique tcheque"] },
      { name: "Sweden", aliases: ["Suede"] }
    ]
  },
  { id: "wgeo-africa-pop", category: "Geography", prompt: "Top 10 most populous African countries", hint: "Africa by headcount",
    items: [
      { name: "Nigeria", aliases: [] },
      { name: "Ethiopia", aliases: ["Ethiopie"] },
      { name: "Egypt", aliases: ["Egypte"] },
      { name: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Congo-Kinshasa", "RDC"] },
      { name: "Tanzania", aliases: ["Tanzanie"] },
      { name: "South Africa", aliases: ["Afrique du Sud"] },
      { name: "Kenya", aliases: [] },
      { name: "Uganda", aliases: ["Ouganda"] },
      { name: "Algeria", aliases: ["Algerie"] },
      { name: "Sudan", aliases: ["Soudan"] }
    ]
  },
  { id: "wgeo-asia-pop", category: "Geography", prompt: "Top 10 most populous Asian countries", hint: "Asia by headcount",
    items: [
      { name: "India", aliases: ["Inde"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Pakistan", aliases: [] },
      { name: "Bangladesh", aliases: [] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Philippines", aliases: [] },
      { name: "Vietnam", aliases: ["Viet Nam"] },
      { name: "Iran", aliases: [] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] }
    ]
  },
  { id: "wgeo-south-america-pop", category: "Geography", prompt: "Top 10 most populous South American countries", hint: "South of the equator (mostly)",
    items: [
      { name: "Brazil", aliases: ["Bresil"] },
      { name: "Colombia", aliases: ["Colombie"] },
      { name: "Argentina", aliases: ["Argentine"] },
      { name: "Peru", aliases: ["Perou"] },
      { name: "Venezuela", aliases: [] },
      { name: "Chile", aliases: ["Chili"] },
      { name: "Ecuador", aliases: ["Equateur"] },
      { name: "Bolivia", aliases: ["Bolivie"] },
      { name: "Paraguay", aliases: [] },
      { name: "Uruguay", aliases: [] }
    ]
  },
  { id: "wgeo-largest-deserts", category: "Geography", prompt: "Top 10 largest deserts in the world", hint: "Includes polar deserts",
    items: [
      { name: "Antarctic Desert", aliases: ["Antarctica", "Antarctique"] },
      { name: "Arctic Desert", aliases: ["Arctic"] },
      { name: "Sahara", aliases: [] },
      { name: "Arabian Desert", aliases: ["Desert d'Arabie"] },
      { name: "Gobi", aliases: ["Desert de Gobi"] },
      { name: "Kalahari", aliases: ["Desert du Kalahari"] },
      { name: "Patagonian Desert", aliases: ["Patagonia", "Patagonie"] },
      { name: "Great Victoria Desert", aliases: [] },
      { name: "Syrian Desert", aliases: ["Desert syrien"] },
      { name: "Great Basin Desert", aliases: [] }
    ]
  },
  { id: "wgeo-largest-lakes", category: "Geography", prompt: "Top 10 largest lakes by surface area", hint: "Caspian counts",
    items: [
      { name: "Caspian Sea", aliases: ["Mer Caspienne", "Caspian"] },
      { name: "Lake Superior", aliases: ["Lac Superieur"] },
      { name: "Lake Victoria", aliases: ["Lac Victoria"] },
      { name: "Lake Huron", aliases: ["Lac Huron"] },
      { name: "Lake Michigan", aliases: ["Lac Michigan"] },
      { name: "Lake Tanganyika", aliases: ["Lac Tanganyika"] },
      { name: "Lake Baikal", aliases: ["Baikal", "Lac Baikal"] },
      { name: "Great Bear Lake", aliases: ["Grand lac de l'Ours"] },
      { name: "Lake Malawi", aliases: ["Lac Malawi", "Lake Nyasa"] },
      { name: "Great Slave Lake", aliases: ["Grand lac des Esclaves"] }
    ]
  },
  { id: "wgeo-largest-islands", category: "Geography", prompt: "Top 10 largest islands in the world", hint: "Australia is a continent, not an island",
    items: [
      { name: "Greenland", aliases: ["Groenland"] },
      { name: "New Guinea", aliases: ["Nouvelle-Guinee"] },
      { name: "Borneo", aliases: [] },
      { name: "Madagascar", aliases: [] },
      { name: "Baffin Island", aliases: ["Ile de Baffin"] },
      { name: "Sumatra", aliases: [] },
      { name: "Honshu", aliases: [] },
      { name: "Victoria Island", aliases: ["Ile Victoria"] },
      { name: "Great Britain", aliases: ["Grande-Bretagne"] },
      { name: "Ellesmere Island", aliases: ["Ile d'Ellesmere"] }
    ]
  },
  { id: "wgeo-coldest-countries", category: "Geography", prompt: "Top 10 coldest countries by average annual temperature", hint: "Bring a parka",
    items: [
      { name: "Russia", aliases: ["Russie"] },
      { name: "Canada", aliases: [] },
      { name: "Mongolia", aliases: ["Mongolie"] },
      { name: "Norway", aliases: ["Norvege"] },
      { name: "Iceland", aliases: ["Islande"] },
      { name: "Finland", aliases: ["Finlande"] },
      { name: "Sweden", aliases: ["Suede"] },
      { name: "Kazakhstan", aliases: [] },
      { name: "Estonia", aliases: ["Estonie"] },
      { name: "Kyrgyzstan", aliases: ["Kirghizistan"] }
    ]
  },
  { id: "wgeo-hottest-countries", category: "Geography", prompt: "Top 10 hottest countries by average annual temperature", hint: "Equatorial and desert nations",
    items: [
      { name: "Mali", aliases: [] },
      { name: "Burkina Faso", aliases: [] },
      { name: "Senegal", aliases: [] },
      { name: "Tuvalu", aliases: [] },
      { name: "Djibouti", aliases: [] },
      { name: "Mauritania", aliases: ["Mauritanie"] },
      { name: "Bahrain", aliases: ["Bahrein"] },
      { name: "Palau", aliases: ["Palaos"] },
      { name: "Qatar", aliases: [] },
      { name: "Aruba", aliases: [] }
    ]
  },
  { id: "wgeo-asean", category: "Geography", prompt: "Top 10 ASEAN nations (all of them)", hint: "Southeast Asia bloc",
    items: [
      { name: "Indonesia", aliases: ["Indonesie"] },
      { name: "Philippines", aliases: [] },
      { name: "Vietnam", aliases: ["Viet Nam"] },
      { name: "Thailand", aliases: ["Thailande"] },
      { name: "Myanmar", aliases: ["Burma", "Birmanie"] },
      { name: "Malaysia", aliases: ["Malaisie"] },
      { name: "Cambodia", aliases: ["Cambodge"] },
      { name: "Laos", aliases: [] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Brunei", aliases: [] }
    ]
  },
  { id: "wgeo-largest-stock-exchanges", category: "Geography", prompt: "Top 10 countries hosting the largest stock exchanges by market cap", hint: "Where money trades",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "India", aliases: ["Inde"] },
      { name: "Hong Kong", aliases: [] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "France", aliases: [] },
      { name: "Saudi Arabia", aliases: ["Arabie Saoudite"] },
      { name: "Canada", aliases: [] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] }
    ]
  },
  { id: "wgeo-largest-airports", category: "Geography", prompt: "Top 10 countries with the most international airport passenger traffic", hint: "Aviation hubs by nation",
    items: [
      { name: "United States", aliases: ["USA", "US", "America", "Etats-Unis"] },
      { name: "China", aliases: ["Chine"] },
      { name: "United Kingdom", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "France", aliases: [] },
      { name: "United Arab Emirates", aliases: ["UAE", "Emirats arabes unis", "Emirats"] },
      { name: "Turkey", aliases: ["Turquie", "Turkiye"] },
      { name: "India", aliases: ["Inde"] }
    ]
  },
  { id: "wgeo-most-doctors-per-capita", category: "Geography", prompt: "Top 10 countries with the most doctors per capita", hint: "White coats per head",
    items: [
      { name: "Cuba", aliases: [] },
      { name: "Greece", aliases: ["Grece"] },
      { name: "Monaco", aliases: [] },
      { name: "Austria", aliases: ["Autriche"] },
      { name: "Portugal", aliases: [] },
      { name: "Norway", aliases: ["Norvege"] },
      { name: "Switzerland", aliases: ["Suisse"] },
      { name: "Germany", aliases: ["Allemagne", "Deutschland"] },
      { name: "Lithuania", aliases: ["Lituanie"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] }
    ]
  },
  { id: "city-most-populous-metro", category: "Cities", prompt: "Top 10 most populous metropolitan areas in the world",
    hint: "Mega-cities dominated by Asia",
    items: [
      { name: "Tokyo", aliases: ["Tokio", "Greater Tokyo"] },
      { name: "Jakarta", aliases: ["Jakarta Metro", "Jabodetabek"] },
      { name: "Delhi", aliases: ["New Delhi", "NCR"] },
      { name: "Manila", aliases: ["Metro Manila", "Manille"] },
      { name: "Sao Paulo", aliases: ["São Paulo", "Sao-Paulo"] },
      { name: "Seoul", aliases: ["Séoul", "Seoul Capital Area"] },
      { name: "Mumbai", aliases: ["Bombay"] },
      { name: "Shanghai", aliases: ["Shanghaï"] },
      { name: "Mexico City", aliases: ["Mexico", "Ciudad de Mexico", "CDMX"] },
      { name: "Guangzhou", aliases: ["Canton", "Guangzhou-Foshan"] }
    ] },
  { id: "city-most-populous-proper", category: "Cities", prompt: "Top 10 most populous cities proper",
    hint: "Within city limits only",
    items: [
      { name: "Chongqing", aliases: ["Chungking"] },
      { name: "Shanghai", aliases: ["Shanghaï"] },
      { name: "Beijing", aliases: ["Pekin", "Pékin", "Peking"] },
      { name: "Delhi", aliases: ["New Delhi"] },
      { name: "Lagos", aliases: [] },
      { name: "Tianjin", aliases: ["Tientsin"] },
      { name: "Karachi", aliases: [] },
      { name: "Dhaka", aliases: ["Dacca"] },
      { name: "Guangzhou", aliases: ["Canton"] },
      { name: "Istanbul", aliases: ["Constantinople", "Istamboul"] }
    ] },
  { id: "city-oldest-inhabited", category: "Cities", prompt: "Top 10 oldest continuously inhabited cities",
    hint: "Cradles of civilization",
    items: [
      { name: "Jericho", aliases: ["Ariha"] },
      { name: "Byblos", aliases: ["Jbeil", "Gebal"] },
      { name: "Aleppo", aliases: ["Alep", "Halab"] },
      { name: "Damascus", aliases: ["Damas", "Dimashq"] },
      { name: "Susa", aliases: ["Shush", "Shushan"] },
      { name: "Faiyum", aliases: ["Fayum", "Crocodilopolis"] },
      { name: "Sidon", aliases: ["Saida"] },
      { name: "Plovdiv", aliases: ["Philippopolis"] },
      { name: "Gaziantep", aliases: ["Antep"] },
      { name: "Beirut", aliases: ["Beyrouth"] }
    ] },
  { id: "city-european-capitals", category: "Cities", prompt: "Top 10 most populous European capital cities",
    hint: "EU and non-EU capitals",
    items: [
      { name: "Moscow", aliases: ["Moscou", "Moskva"] },
      { name: "London", aliases: ["Londres"] },
      { name: "Berlin", aliases: [] },
      { name: "Madrid", aliases: [] },
      { name: "Rome", aliases: ["Roma"] },
      { name: "Kyiv", aliases: ["Kiev"] },
      { name: "Paris", aliases: [] },
      { name: "Bucharest", aliases: ["Bucarest", "Bucuresti"] },
      { name: "Minsk", aliases: [] },
      { name: "Vienna", aliases: ["Vienne", "Wien"] }
    ] },
  { id: "city-african-capitals-pop", category: "Cities", prompt: "Top 10 most populous African capitals",
    hint: "From Cairo to Nairobi",
    items: [
      { name: "Cairo", aliases: ["Le Caire", "Al-Qahirah"] },
      { name: "Kinshasa", aliases: ["Leopoldville"] },
      { name: "Luanda", aliases: [] },
      { name: "Khartoum", aliases: ["Khartoum"] },
      { name: "Dar es Salaam", aliases: ["Dar-es-Salaam"] },
      { name: "Addis Ababa", aliases: ["Addis-Abeba"] },
      { name: "Nairobi", aliases: [] },
      { name: "Abidjan", aliases: [] },
      { name: "Algiers", aliases: ["Alger"] },
      { name: "Antananarivo", aliases: ["Tananarive"] }
    ] },
  { id: "city-asian-capitals-pop", category: "Cities", prompt: "Top 10 most populous Asian capitals",
    hint: "Megacapitals of Asia",
    items: [
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Jakarta", aliases: [] },
      { name: "Delhi", aliases: ["New Delhi"] },
      { name: "Manila", aliases: [] },
      { name: "Seoul", aliases: ["Séoul"] },
      { name: "Beijing", aliases: ["Pekin", "Pékin"] },
      { name: "Bangkok", aliases: ["Krung Thep"] },
      { name: "Dhaka", aliases: ["Dacca"] },
      { name: "Tehran", aliases: ["Teheran", "Téhéran"] },
      { name: "Baghdad", aliases: ["Bagdad"] }
    ] },
  { id: "city-american-capitals-pop", category: "Cities", prompt: "Top 10 most populous capitals in the Americas",
    hint: "North, Central and South",
    items: [
      { name: "Mexico City", aliases: ["Mexico", "CDMX"] },
      { name: "Buenos Aires", aliases: [] },
      { name: "Lima", aliases: [] },
      { name: "Bogota", aliases: ["Bogotá"] },
      { name: "Santiago", aliases: ["Santiago du Chili"] },
      { name: "Brasilia", aliases: ["Brasília"] },
      { name: "Caracas", aliases: [] },
      { name: "Havana", aliases: ["La Havane", "La Habana"] },
      { name: "Quito", aliases: [] },
      { name: "Guatemala City", aliases: ["Ciudad de Guatemala"] }
    ] },
  { id: "city-oceania-capitals", category: "Cities", prompt: "Top 10 most populous Oceania capitals",
    hint: "Pacific island and Australasian capitals",
    items: [
      { name: "Canberra", aliases: [] },
      { name: "Wellington", aliases: [] },
      { name: "Port Moresby", aliases: [] },
      { name: "Suva", aliases: [] },
      { name: "Honiara", aliases: [] },
      { name: "Apia", aliases: [] },
      { name: "Port Vila", aliases: ["Port-Vila"] },
      { name: "Nukualofa", aliases: ["Nuku'alofa"] },
      { name: "Palikir", aliases: [] },
      { name: "Funafuti", aliases: [] }
    ] },
  { id: "city-most-visited", category: "Cities", prompt: "Top 10 most visited cities by international tourists",
    hint: "Tourist count records",
    items: [
      { name: "Bangkok", aliases: [] },
      { name: "Paris", aliases: [] },
      { name: "London", aliases: ["Londres"] },
      { name: "Dubai", aliases: ["Dubaï"] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Kuala Lumpur", aliases: [] },
      { name: "New York", aliases: ["New York City", "NYC"] },
      { name: "Istanbul", aliases: [] },
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Antalya", aliases: [] }
    ] },
  { id: "city-most-billionaires", category: "Cities", prompt: "Top 10 cities with most billionaires",
    hint: "Where the ultra-rich live",
    items: [
      { name: "New York", aliases: ["NYC"] },
      { name: "Hong Kong", aliases: ["Hong-Kong"] },
      { name: "Moscow", aliases: ["Moscou"] },
      { name: "Beijing", aliases: ["Pekin"] },
      { name: "London", aliases: ["Londres"] },
      { name: "Mumbai", aliases: ["Bombay"] },
      { name: "Shanghai", aliases: [] },
      { name: "Shenzhen", aliases: [] },
      { name: "San Francisco", aliases: [] },
      { name: "Singapore", aliases: ["Singapour"] }
    ] },
  { id: "city-most-expensive", category: "Cities", prompt: "Top 10 most expensive cities to live in",
    hint: "Cost-of-living index leaders",
    items: [
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Zurich", aliases: ["Zürich"] },
      { name: "Geneva", aliases: ["Genève"] },
      { name: "New York", aliases: ["NYC"] },
      { name: "Hong Kong", aliases: ["Hong-Kong"] },
      { name: "Los Angeles", aliases: ["LA"] },
      { name: "Paris", aliases: [] },
      { name: "Copenhagen", aliases: ["Copenhague"] },
      { name: "Tel Aviv", aliases: ["Tel-Aviv"] },
      { name: "San Francisco", aliases: [] }
    ] },
  { id: "city-most-skyscrapers", category: "Cities", prompt: "Top 10 cities with most skyscrapers (150m+)",
    hint: "Skyline rankings",
    items: [
      { name: "Hong Kong", aliases: ["Hong-Kong"] },
      { name: "Shenzhen", aliases: [] },
      { name: "New York", aliases: ["NYC"] },
      { name: "Dubai", aliases: ["Dubaï"] },
      { name: "Shanghai", aliases: [] },
      { name: "Guangzhou", aliases: ["Canton"] },
      { name: "Kuala Lumpur", aliases: [] },
      { name: "Chongqing", aliases: [] },
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Wuhan", aliases: [] }
    ] },
  { id: "city-northernmost-capitals", category: "Cities", prompt: "Top 10 northernmost national capitals",
    hint: "Closest to the North Pole",
    items: [
      { name: "Reykjavik", aliases: ["Reykjavík"] },
      { name: "Helsinki", aliases: [] },
      { name: "Oslo", aliases: [] },
      { name: "Tallinn", aliases: [] },
      { name: "Stockholm", aliases: [] },
      { name: "Riga", aliases: [] },
      { name: "Moscow", aliases: ["Moscou"] },
      { name: "Copenhagen", aliases: ["Copenhague"] },
      { name: "Vilnius", aliases: [] },
      { name: "Minsk", aliases: [] }
    ] },
  { id: "city-southernmost-capitals", category: "Cities", prompt: "Top 10 southernmost national capitals",
    hint: "Closest to the South Pole",
    items: [
      { name: "Wellington", aliases: [] },
      { name: "Canberra", aliases: [] },
      { name: "Montevideo", aliases: [] },
      { name: "Buenos Aires", aliases: [] },
      { name: "Santiago", aliases: [] },
      { name: "Cape Town", aliases: ["Le Cap"] },
      { name: "Maseru", aliases: [] },
      { name: "Pretoria", aliases: [] },
      { name: "Mbabane", aliases: [] },
      { name: "Gaborone", aliases: [] }
    ] },
  { id: "city-highest-altitude-capitals", category: "Cities", prompt: "Top 10 highest-altitude national capitals",
    hint: "Above sea level rankings",
    items: [
      { name: "La Paz", aliases: [] },
      { name: "Quito", aliases: [] },
      { name: "Thimphu", aliases: ["Thimbou"] },
      { name: "Bogota", aliases: ["Bogotá"] },
      { name: "Addis Ababa", aliases: ["Addis-Abeba"] },
      { name: "Asmara", aliases: [] },
      { name: "Sanaa", aliases: ["Sanaá", "Sana'a"] },
      { name: "Mexico City", aliases: ["Mexico", "CDMX"] },
      { name: "Nairobi", aliases: [] },
      { name: "Tehran", aliases: ["Teheran"] }
    ] },
  { id: "city-largest-non-coastal", category: "Cities", prompt: "Top 10 largest cities NOT on a coast",
    hint: "Inland mega-cities",
    items: [
      { name: "Delhi", aliases: ["New Delhi"] },
      { name: "Mexico City", aliases: ["Mexico"] },
      { name: "Sao Paulo", aliases: ["São Paulo"] },
      { name: "Cairo", aliases: ["Le Caire"] },
      { name: "Beijing", aliases: ["Pekin"] },
      { name: "Moscow", aliases: ["Moscou"] },
      { name: "Tehran", aliases: ["Teheran"] },
      { name: "Bogota", aliases: ["Bogotá"] },
      { name: "Chengdu", aliases: [] },
      { name: "Wuhan", aliases: [] }
    ] },
  { id: "city-largest-uk", category: "Cities", prompt: "Top 10 largest cities in the United Kingdom",
    hint: "By city proper population",
    items: [
      { name: "London", aliases: ["Londres"] },
      { name: "Birmingham", aliases: [] },
      { name: "Glasgow", aliases: [] },
      { name: "Leeds", aliases: [] },
      { name: "Sheffield", aliases: [] },
      { name: "Manchester", aliases: [] },
      { name: "Bradford", aliases: [] },
      { name: "Liverpool", aliases: [] },
      { name: "Edinburgh", aliases: ["Édimbourg"] },
      { name: "Bristol", aliases: [] }
    ] },
  { id: "city-largest-france", category: "Cities", prompt: "Top 10 largest cities in France",
    hint: "By city proper (commune) population",
    items: [
      { name: "Paris", aliases: [] },
      { name: "Marseille", aliases: ["Marseilles"] },
      { name: "Lyon", aliases: ["Lyons"] },
      { name: "Toulouse", aliases: [] },
      { name: "Nice", aliases: [] },
      { name: "Nantes", aliases: [] },
      { name: "Montpellier", aliases: [] },
      { name: "Strasbourg", aliases: [] },
      { name: "Bordeaux", aliases: [] },
      { name: "Lille", aliases: [] }
    ] },
  { id: "city-largest-germany", category: "Cities", prompt: "Top 10 largest cities in Germany",
    hint: "By city proper population",
    items: [
      { name: "Berlin", aliases: [] },
      { name: "Hamburg", aliases: ["Hambourg"] },
      { name: "Munich", aliases: ["München", "Muenchen"] },
      { name: "Cologne", aliases: ["Köln", "Koeln"] },
      { name: "Frankfurt", aliases: ["Francfort"] },
      { name: "Stuttgart", aliases: [] },
      { name: "Dusseldorf", aliases: ["Düsseldorf"] },
      { name: "Leipzig", aliases: [] },
      { name: "Dortmund", aliases: [] },
      { name: "Essen", aliases: [] }
    ] },
  { id: "city-largest-japan", category: "Cities", prompt: "Top 10 largest cities in Japan",
    hint: "By city proper population",
    items: [
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Yokohama", aliases: [] },
      { name: "Osaka", aliases: [] },
      { name: "Nagoya", aliases: [] },
      { name: "Sapporo", aliases: [] },
      { name: "Fukuoka", aliases: [] },
      { name: "Kawasaki", aliases: [] },
      { name: "Kobe", aliases: ["Kōbe"] },
      { name: "Kyoto", aliases: ["Kyōto"] },
      { name: "Saitama", aliases: [] }
    ] },
  { id: "city-largest-china", category: "Cities", prompt: "Top 10 largest cities in China",
    hint: "By urban population",
    items: [
      { name: "Shanghai", aliases: [] },
      { name: "Beijing", aliases: ["Pekin", "Peking"] },
      { name: "Chongqing", aliases: ["Chungking"] },
      { name: "Guangzhou", aliases: ["Canton"] },
      { name: "Tianjin", aliases: ["Tientsin"] },
      { name: "Shenzhen", aliases: [] },
      { name: "Chengdu", aliases: [] },
      { name: "Nanjing", aliases: ["Nankin"] },
      { name: "Wuhan", aliases: [] },
      { name: "Xi'an", aliases: ["Xian", "Sian"] }
    ] },
  { id: "city-largest-brazil", category: "Cities", prompt: "Top 10 largest cities in Brazil",
    hint: "By city proper population",
    items: [
      { name: "Sao Paulo", aliases: ["São Paulo"] },
      { name: "Rio de Janeiro", aliases: ["Rio"] },
      { name: "Brasilia", aliases: ["Brasília"] },
      { name: "Salvador", aliases: [] },
      { name: "Fortaleza", aliases: [] },
      { name: "Belo Horizonte", aliases: [] },
      { name: "Manaus", aliases: [] },
      { name: "Curitiba", aliases: [] },
      { name: "Recife", aliases: [] },
      { name: "Porto Alegre", aliases: [] }
    ] },
  { id: "city-largest-india", category: "Cities", prompt: "Top 10 largest cities in India",
    hint: "By city proper population",
    items: [
      { name: "Mumbai", aliases: ["Bombay"] },
      { name: "Delhi", aliases: ["New Delhi"] },
      { name: "Bangalore", aliases: ["Bengaluru"] },
      { name: "Hyderabad", aliases: [] },
      { name: "Ahmedabad", aliases: [] },
      { name: "Chennai", aliases: ["Madras"] },
      { name: "Kolkata", aliases: ["Calcutta"] },
      { name: "Surat", aliases: [] },
      { name: "Pune", aliases: ["Poona"] },
      { name: "Jaipur", aliases: [] }
    ] },
  { id: "city-largest-usa", category: "Cities", prompt: "Top 10 largest cities in the USA",
    hint: "By city proper population",
    items: [
      { name: "New York", aliases: ["NYC", "New York City"] },
      { name: "Los Angeles", aliases: ["LA"] },
      { name: "Chicago", aliases: [] },
      { name: "Houston", aliases: [] },
      { name: "Phoenix", aliases: [] },
      { name: "Philadelphia", aliases: ["Philly"] },
      { name: "San Antonio", aliases: [] },
      { name: "San Diego", aliases: [] },
      { name: "Dallas", aliases: [] },
      { name: "Jacksonville", aliases: [] }
    ] },
  { id: "city-largest-canada", category: "Cities", prompt: "Top 10 largest cities in Canada",
    hint: "By city proper population",
    items: [
      { name: "Toronto", aliases: [] },
      { name: "Montreal", aliases: ["Montréal"] },
      { name: "Calgary", aliases: [] },
      { name: "Ottawa", aliases: [] },
      { name: "Edmonton", aliases: [] },
      { name: "Winnipeg", aliases: [] },
      { name: "Mississauga", aliases: [] },
      { name: "Vancouver", aliases: [] },
      { name: "Brampton", aliases: [] },
      { name: "Hamilton", aliases: [] }
    ] },
  { id: "city-largest-mexico", category: "Cities", prompt: "Top 10 largest cities in Mexico",
    hint: "By city proper population",
    items: [
      { name: "Mexico City", aliases: ["Mexico", "Ciudad de Mexico", "CDMX"] },
      { name: "Tijuana", aliases: [] },
      { name: "Ecatepec", aliases: ["Ecatepec de Morelos"] },
      { name: "Leon", aliases: ["León"] },
      { name: "Puebla", aliases: [] },
      { name: "Ciudad Juarez", aliases: ["Juarez", "Juárez"] },
      { name: "Zapopan", aliases: [] },
      { name: "Guadalajara", aliases: [] },
      { name: "Monterrey", aliases: [] },
      { name: "Nezahualcoyotl", aliases: ["Nezahualcóyotl", "Neza"] }
    ] },
  { id: "city-largest-russia", category: "Cities", prompt: "Top 10 largest cities in Russia",
    hint: "By city proper population",
    items: [
      { name: "Moscow", aliases: ["Moscou", "Moskva"] },
      { name: "Saint Petersburg", aliases: ["St Petersburg", "Saint-Petersbourg", "Leningrad"] },
      { name: "Novosibirsk", aliases: [] },
      { name: "Yekaterinburg", aliases: ["Ekaterinburg", "Sverdlovsk"] },
      { name: "Kazan", aliases: [] },
      { name: "Nizhny Novgorod", aliases: ["Gorky"] },
      { name: "Chelyabinsk", aliases: [] },
      { name: "Samara", aliases: [] },
      { name: "Ufa", aliases: [] },
      { name: "Rostov-on-Don", aliases: ["Rostov-na-Donu"] }
    ] },
  { id: "city-largest-australia", category: "Cities", prompt: "Top 10 largest cities in Australia",
    hint: "By metro population",
    items: [
      { name: "Sydney", aliases: [] },
      { name: "Melbourne", aliases: [] },
      { name: "Brisbane", aliases: [] },
      { name: "Perth", aliases: [] },
      { name: "Adelaide", aliases: [] },
      { name: "Gold Coast", aliases: [] },
      { name: "Newcastle", aliases: [] },
      { name: "Canberra", aliases: [] },
      { name: "Sunshine Coast", aliases: [] },
      { name: "Wollongong", aliases: [] }
    ] },
  { id: "city-largest-africa", category: "Cities", prompt: "Top 10 largest cities in Africa",
    hint: "By metro population",
    items: [
      { name: "Lagos", aliases: [] },
      { name: "Cairo", aliases: ["Le Caire"] },
      { name: "Kinshasa", aliases: [] },
      { name: "Luanda", aliases: [] },
      { name: "Johannesburg", aliases: ["Joburg"] },
      { name: "Dar es Salaam", aliases: [] },
      { name: "Khartoum", aliases: [] },
      { name: "Alexandria", aliases: ["Alexandrie"] },
      { name: "Abidjan", aliases: [] },
      { name: "Nairobi", aliases: [] }
    ] },
  { id: "city-largest-europe-metro", category: "Cities", prompt: "Top 10 largest metropolitan areas in Europe",
    hint: "By metro population",
    items: [
      { name: "Moscow", aliases: ["Moscou"] },
      { name: "Istanbul", aliases: ["Constantinople"] },
      { name: "London", aliases: ["Londres"] },
      { name: "Paris", aliases: [] },
      { name: "Madrid", aliases: [] },
      { name: "Saint Petersburg", aliases: ["St Petersburg"] },
      { name: "Barcelona", aliases: ["Barcelone"] },
      { name: "Berlin", aliases: [] },
      { name: "Rome", aliases: ["Roma"] },
      { name: "Athens", aliases: ["Athènes"] }
    ] },
  { id: "city-largest-namerica-metro", category: "Cities", prompt: "Top 10 largest metro areas in North America",
    hint: "Includes Central America and Caribbean",
    items: [
      { name: "Mexico City", aliases: ["Mexico", "CDMX"] },
      { name: "New York", aliases: ["NYC"] },
      { name: "Los Angeles", aliases: ["LA"] },
      { name: "Chicago", aliases: [] },
      { name: "Dallas", aliases: ["Dallas-Fort Worth"] },
      { name: "Houston", aliases: [] },
      { name: "Toronto", aliases: [] },
      { name: "Washington", aliases: ["Washington DC"] },
      { name: "Miami", aliases: [] },
      { name: "Philadelphia", aliases: [] }
    ] },
  { id: "city-largest-samerica-metro", category: "Cities", prompt: "Top 10 largest metro areas in South America",
    hint: "Latin American mega-cities",
    items: [
      { name: "Sao Paulo", aliases: ["São Paulo"] },
      { name: "Buenos Aires", aliases: [] },
      { name: "Rio de Janeiro", aliases: ["Rio"] },
      { name: "Bogota", aliases: ["Bogotá"] },
      { name: "Lima", aliases: [] },
      { name: "Santiago", aliases: [] },
      { name: "Belo Horizonte", aliases: [] },
      { name: "Caracas", aliases: [] },
      { name: "Brasilia", aliases: ["Brasília"] },
      { name: "Porto Alegre", aliases: [] }
    ] },
  { id: "city-largest-asia-metro", category: "Cities", prompt: "Top 10 largest metro areas in Asia",
    hint: "Asia's biggest urban giants",
    items: [
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Jakarta", aliases: [] },
      { name: "Delhi", aliases: ["New Delhi"] },
      { name: "Manila", aliases: [] },
      { name: "Seoul", aliases: ["Séoul"] },
      { name: "Mumbai", aliases: ["Bombay"] },
      { name: "Shanghai", aliases: [] },
      { name: "Karachi", aliases: [] },
      { name: "Beijing", aliases: ["Pekin"] },
      { name: "Guangzhou", aliases: ["Canton"] }
    ] },
  { id: "city-multi-olympics", category: "Cities", prompt: "Top 10 cities that have hosted multiple Olympics",
    hint: "Summer and Winter Games",
    items: [
      { name: "Athens", aliases: ["Athènes"] },
      { name: "Paris", aliases: [] },
      { name: "London", aliases: ["Londres"] },
      { name: "Los Angeles", aliases: ["LA"] },
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Stockholm", aliases: [] },
      { name: "Innsbruck", aliases: [] },
      { name: "St Moritz", aliases: ["Saint-Moritz"] },
      { name: "Lake Placid", aliases: [] },
      { name: "Beijing", aliases: ["Pekin"] }
    ] },
  { id: "city-smallest-capitals", category: "Cities", prompt: "Top 10 smallest national capitals by population",
    hint: "The tiniest seats of government",
    items: [
      { name: "Ngerulmud", aliases: [] },
      { name: "Vatican City", aliases: ["Vatican", "Cite du Vatican"] },
      { name: "Yaren", aliases: [] },
      { name: "Funafuti", aliases: [] },
      { name: "Melekeok", aliases: [] },
      { name: "Alofi", aliases: [] },
      { name: "Hagatna", aliases: ["Hagåtña"] },
      { name: "San Marino", aliases: ["Saint-Marin"] },
      { name: "Palikir", aliases: [] },
      { name: "Adamstown", aliases: [] }
    ] },
  { id: "city-largest-ports", category: "Cities", prompt: "Top 10 busiest cargo ports in the world",
    hint: "Container throughput leaders",
    items: [
      { name: "Shanghai", aliases: [] },
      { name: "Singapore", aliases: ["Singapour"] },
      { name: "Ningbo", aliases: ["Ningbo-Zhoushan"] },
      { name: "Shenzhen", aliases: [] },
      { name: "Guangzhou", aliases: ["Canton"] },
      { name: "Qingdao", aliases: [] },
      { name: "Busan", aliases: ["Pusan"] },
      { name: "Tianjin", aliases: ["Tientsin"] },
      { name: "Hong Kong", aliases: ["Hong-Kong"] },
      { name: "Rotterdam", aliases: [] }
    ] },
  { id: "city-most-universities", category: "Cities", prompt: "Top 10 cities with most top-ranked universities",
    hint: "Higher education hubs",
    items: [
      { name: "London", aliases: ["Londres"] },
      { name: "Boston", aliases: [] },
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Paris", aliases: [] },
      { name: "Beijing", aliases: ["Pekin"] },
      { name: "Seoul", aliases: ["Séoul"] },
      { name: "Hong Kong", aliases: ["Hong-Kong"] },
      { name: "New York", aliases: ["NYC"] },
      { name: "Melbourne", aliases: [] },
      { name: "Shanghai", aliases: [] }
    ] },
  { id: "city-highest-gdp", category: "Cities", prompt: "Top 10 cities by GDP (metro area)",
    hint: "Economic powerhouses",
    items: [
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "New York", aliases: ["NYC"] },
      { name: "Los Angeles", aliases: ["LA"] },
      { name: "Seoul", aliases: ["Séoul"] },
      { name: "London", aliases: ["Londres"] },
      { name: "Paris", aliases: [] },
      { name: "Shanghai", aliases: [] },
      { name: "Chicago", aliases: [] },
      { name: "Beijing", aliases: ["Pekin"] },
      { name: "Osaka", aliases: ["Osaka-Kobe"] }
    ] },
  { id: "city-longest-names", category: "Cities", prompt: "Top 10 cities with longest official names",
    hint: "Tongue-twisting place names",
    items: [
      { name: "Bangkok", aliases: ["Krung Thep Mahanakhon"] },
      { name: "Llanfairpwllgwyngyll", aliases: ["Llanfair PG"] },
      { name: "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu", aliases: ["Taumata"] },
      { name: "Tweebuffelsmeteenskootmorsdoodgeskietfontein", aliases: [] },
      { name: "Aeaeaeaeaeaeaeae", aliases: ["Äe äe äe"] },
      { name: "Chargoggagoggmanchauggagoggchaubunagungamaugg", aliases: ["Lake Webster"] },
      { name: "Mamungkukumpurangkuntjunya Hill", aliases: [] },
      { name: "Pekwachnamaykoskwaskwaypinwanik", aliases: [] },
      { name: "Venkatanarasimharajuvaripeta", aliases: [] },
      { name: "Azpilicuetagaraycosaroyarenberecolarrea", aliases: [] }
    ] },
  { id: "city-largest-italy", category: "Cities", prompt: "Top 10 largest cities in Italy",
    hint: "By city proper population",
    items: [
      { name: "Rome", aliases: ["Roma"] },
      { name: "Milan", aliases: ["Milano"] },
      { name: "Naples", aliases: ["Napoli"] },
      { name: "Turin", aliases: ["Torino"] },
      { name: "Palermo", aliases: ["Palerme"] },
      { name: "Genoa", aliases: ["Genova", "Gênes"] },
      { name: "Bologna", aliases: ["Bologne"] },
      { name: "Florence", aliases: ["Firenze"] },
      { name: "Bari", aliases: [] },
      { name: "Catania", aliases: ["Catane"] }
    ] },
  { id: "city-largest-spain", category: "Cities", prompt: "Top 10 largest cities in Spain",
    hint: "By city proper population",
    items: [
      { name: "Madrid", aliases: [] },
      { name: "Barcelona", aliases: ["Barcelone"] },
      { name: "Valencia", aliases: ["Valence"] },
      { name: "Seville", aliases: ["Sevilla", "Séville"] },
      { name: "Zaragoza", aliases: ["Saragosse"] },
      { name: "Malaga", aliases: ["Málaga"] },
      { name: "Murcia", aliases: ["Murcie"] },
      { name: "Palma", aliases: ["Palma de Mallorca"] },
      { name: "Las Palmas", aliases: ["Las Palmas de Gran Canaria"] },
      { name: "Bilbao", aliases: [] }
    ] },
  { id: "city-megacities-10m", category: "Cities", prompt: "Top 10 largest megacities (10M+ population)",
    hint: "The world's true mega-urbs",
    items: [
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Delhi", aliases: ["New Delhi"] },
      { name: "Shanghai", aliases: [] },
      { name: "Sao Paulo", aliases: ["São Paulo"] },
      { name: "Mexico City", aliases: ["Mexico"] },
      { name: "Cairo", aliases: ["Le Caire"] },
      { name: "Mumbai", aliases: ["Bombay"] },
      { name: "Beijing", aliases: ["Pekin"] },
      { name: "Dhaka", aliases: ["Dacca"] },
      { name: "Osaka", aliases: [] }
    ] },
  { id: "city-tallest-buildings-cities", category: "Cities", prompt: "Top 10 cities hosting the world's tallest buildings",
    hint: "Where supertalls rise",
    items: [
      { name: "Dubai", aliases: ["Dubaï"] },
      { name: "Shenzhen", aliases: [] },
      { name: "Shanghai", aliases: [] },
      { name: "Guangzhou", aliases: ["Canton"] },
      { name: "Mecca", aliases: ["Makkah", "La Mecque"] },
      { name: "Kuala Lumpur", aliases: [] },
      { name: "Seoul", aliases: ["Séoul"] },
      { name: "New York", aliases: ["NYC"] },
      { name: "Tianjin", aliases: ["Tientsin"] },
      { name: "Hong Kong", aliases: ["Hong-Kong"] }
    ] },
  { id: "city-largest-by-area", category: "Cities", prompt: "Top 10 largest cities by area (km2)",
    hint: "Geographic city size",
    items: [
      { name: "New York", aliases: ["NYC"] },
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "Chicago", aliases: [] },
      { name: "Atlanta", aliases: [] },
      { name: "Philadelphia", aliases: [] },
      { name: "Boston", aliases: [] },
      { name: "Los Angeles", aliases: ["LA"] },
      { name: "Dallas", aliases: [] },
      { name: "Houston", aliases: [] },
      { name: "Detroit", aliases: [] }
    ] },
  { id: "city-european-cities-pop", category: "Cities", prompt: "Top 10 most populous cities proper in Europe",
    hint: "City limits, not metro",
    items: [
      { name: "Istanbul", aliases: ["Constantinople"] },
      { name: "Moscow", aliases: ["Moscou"] },
      { name: "London", aliases: ["Londres"] },
      { name: "Saint Petersburg", aliases: ["St Petersburg", "Leningrad"] },
      { name: "Berlin", aliases: [] },
      { name: "Madrid", aliases: [] },
      { name: "Kyiv", aliases: ["Kiev"] },
      { name: "Rome", aliases: ["Roma"] },
      { name: "Paris", aliases: [] },
      { name: "Bucharest", aliases: ["Bucarest"] }
    ] },
  { id: "city-largest-turkey", category: "Cities", prompt: "Top 10 largest cities in Turkey",
    hint: "By city proper population",
    items: [
      { name: "Istanbul", aliases: ["Constantinople"] },
      { name: "Ankara", aliases: [] },
      { name: "Izmir", aliases: ["Smyrna"] },
      { name: "Bursa", aliases: [] },
      { name: "Adana", aliases: [] },
      { name: "Gaziantep", aliases: ["Antep"] },
      { name: "Konya", aliases: [] },
      { name: "Antalya", aliases: [] },
      { name: "Kayseri", aliases: [] },
      { name: "Mersin", aliases: [] }
    ] },
  { id: "city-largest-egypt", category: "Cities", prompt: "Top 10 largest cities in Egypt",
    hint: "By city proper population",
    items: [
      { name: "Cairo", aliases: ["Le Caire", "Al-Qahirah"] },
      { name: "Alexandria", aliases: ["Alexandrie"] },
      { name: "Giza", aliases: ["Gizeh"] },
      { name: "Shubra El Kheima", aliases: [] },
      { name: "Port Said", aliases: ["Port-Saïd"] },
      { name: "Suez", aliases: ["Suez"] },
      { name: "Luxor", aliases: ["Louxor"] },
      { name: "Mansoura", aliases: ["El-Mahalla El-Kubra"] },
      { name: "Tanta", aliases: [] },
      { name: "Asyut", aliases: ["Assiout"] }
    ] },
  { id: "city-most-fortune500-hq", category: "Cities", prompt: "Top 10 cities with most Fortune Global 500 HQs",
    hint: "Corporate capitals",
    items: [
      { name: "Beijing", aliases: ["Pekin"] },
      { name: "Tokyo", aliases: ["Tokio"] },
      { name: "New York", aliases: ["NYC"] },
      { name: "Paris", aliases: [] },
      { name: "London", aliases: ["Londres"] },
      { name: "Seoul", aliases: ["Séoul"] },
      { name: "Shanghai", aliases: [] },
      { name: "Houston", aliases: [] },
      { name: "Munich", aliases: ["München"] },
      { name: "Hong Kong", aliases: ["Hong-Kong"] }
    ] },
  { id: "city-largest-saudi", category: "Cities", prompt: "Top 10 largest cities in Saudi Arabia",
    hint: "By city proper population",
    items: [
      { name: "Riyadh", aliases: ["Riyad"] },
      { name: "Jeddah", aliases: ["Djedda"] },
      { name: "Mecca", aliases: ["Makkah", "La Mecque"] },
      { name: "Medina", aliases: ["Medine", "Madinah"] },
      { name: "Dammam", aliases: [] },
      { name: "Taif", aliases: ["Ta'if"] },
      { name: "Tabuk", aliases: [] },
      { name: "Buraidah", aliases: [] },
      { name: "Khobar", aliases: ["Al-Khobar"] },
      { name: "Hofuf", aliases: ["Al-Hofuf"] }
    ] },
  { id: "city-deepwater-river-ports", category: "Cities", prompt: "Top 10 largest river-port cities",
    hint: "Inland port giants",
    items: [
      { name: "Wuhan", aliases: [] },
      { name: "Chongqing", aliases: [] },
      { name: "Nanjing", aliases: ["Nankin"] },
      { name: "Buenos Aires", aliases: [] },
      { name: "Hamburg", aliases: ["Hambourg"] },
      { name: "Antwerp", aliases: ["Anvers"] },
      { name: "Rotterdam", aliases: [] },
      { name: "Manaus", aliases: [] },
      { name: "Kolkata", aliases: ["Calcutta"] },
      { name: "Memphis", aliases: [] }
    ] },
  { id: "city-largest-iran", category: "Cities", prompt: "Top 10 largest cities in Iran",
    hint: "By city proper population",
    items: [
      { name: "Tehran", aliases: ["Teheran", "Téhéran"] },
      { name: "Mashhad", aliases: ["Mashad"] },
      { name: "Isfahan", aliases: ["Esfahan", "Ispahan"] },
      { name: "Karaj", aliases: [] },
      { name: "Shiraz", aliases: [] },
      { name: "Tabriz", aliases: [] },
      { name: "Qom", aliases: ["Qum"] },
      { name: "Ahvaz", aliases: ["Ahwaz"] },
      { name: "Kermanshah", aliases: [] },
      { name: "Urmia", aliases: ["Orumiyeh"] }
    ] },
  { id: "city-largest-indonesia", category: "Cities", prompt: "Top 10 largest cities in Indonesia",
    hint: "By city proper population",
    items: [
      { name: "Jakarta", aliases: [] },
      { name: "Surabaya", aliases: [] },
      { name: "Bandung", aliases: [] },
      { name: "Medan", aliases: [] },
      { name: "Bekasi", aliases: [] },
      { name: "Tangerang", aliases: [] },
      { name: "Depok", aliases: [] },
      { name: "Semarang", aliases: [] },
      { name: "Palembang", aliases: [] },
      { name: "Makassar", aliases: [] }
    ] },
  { id: "city-largest-pakistan", category: "Cities", prompt: "Top 10 largest cities in Pakistan",
    hint: "By city proper population",
    items: [
      { name: "Karachi", aliases: [] },
      { name: "Lahore", aliases: [] },
      { name: "Faisalabad", aliases: [] },
      { name: "Rawalpindi", aliases: [] },
      { name: "Gujranwala", aliases: [] },
      { name: "Peshawar", aliases: [] },
      { name: "Multan", aliases: [] },
      { name: "Hyderabad", aliases: [] },
      { name: "Islamabad", aliases: [] },
      { name: "Quetta", aliases: [] }
    ] },
  { id: "city-largest-philippines", category: "Cities", prompt: "Top 10 largest cities in the Philippines",
    hint: "By city proper population",
    items: [
      { name: "Quezon City", aliases: [] },
      { name: "Manila", aliases: [] },
      { name: "Davao", aliases: ["Davao City"] },
      { name: "Caloocan", aliases: [] },
      { name: "Zamboanga", aliases: ["Zamboanga City"] },
      { name: "Cebu City", aliases: ["Cebu"] },
      { name: "Antipolo", aliases: [] },
      { name: "Taguig", aliases: [] },
      { name: "Pasig", aliases: [] },
      { name: "Cagayan de Oro", aliases: [] }
    ] },
  { id: "city-largest-vietnam", category: "Cities", prompt: "Top 10 largest cities in Vietnam",
    hint: "By city proper population",
    items: [
      { name: "Ho Chi Minh City", aliases: ["Saigon", "HCMC"] },
      { name: "Hanoi", aliases: ["Hanoï"] },
      { name: "Haiphong", aliases: ["Hai Phong"] },
      { name: "Can Tho", aliases: [] },
      { name: "Da Nang", aliases: ["Danang"] },
      { name: "Bien Hoa", aliases: [] },
      { name: "Hue", aliases: ["Huế"] },
      { name: "Nha Trang", aliases: [] },
      { name: "Buon Ma Thuot", aliases: [] },
      { name: "Vung Tau", aliases: [] }
    ] },
  { id: "city-largest-argentina", category: "Cities", prompt: "Top 10 largest cities in Argentina",
    hint: "By city proper or partido population",
    items: [
      { name: "Buenos Aires", aliases: [] },
      { name: "Cordoba", aliases: ["Córdoba"] },
      { name: "Rosario", aliases: [] },
      { name: "La Plata", aliases: [] },
      { name: "Mar del Plata", aliases: [] },
      { name: "San Miguel de Tucuman", aliases: ["Tucuman"] },
      { name: "Salta", aliases: [] },
      { name: "Santa Fe", aliases: [] },
      { name: "San Juan", aliases: [] },
      { name: "Resistencia", aliases: [] }
    ] },
  { id: "city-largest-poland", category: "Cities", prompt: "Top 10 largest cities in Poland",
    hint: "By city proper population",
    items: [
      { name: "Warsaw", aliases: ["Varsovie", "Warszawa"] },
      { name: "Krakow", aliases: ["Cracow", "Cracovie", "Kraków"] },
      { name: "Lodz", aliases: ["Łódź"] },
      { name: "Wroclaw", aliases: ["Wrocław", "Breslau"] },
      { name: "Poznan", aliases: ["Poznań"] },
      { name: "Gdansk", aliases: ["Gdańsk", "Dantzig"] },
      { name: "Szczecin", aliases: ["Stettin"] },
      { name: "Bydgoszcz", aliases: [] },
      { name: "Lublin", aliases: [] },
      { name: "Bialystok", aliases: ["Białystok"] }
    ] },
  { id: "city-largest-netherlands", category: "Cities", prompt: "Top 10 largest cities in the Netherlands",
    hint: "By city proper population",
    items: [
      { name: "Amsterdam", aliases: [] },
      { name: "Rotterdam", aliases: [] },
      { name: "The Hague", aliases: ["La Haye", "Den Haag"] },
      { name: "Utrecht", aliases: [] },
      { name: "Eindhoven", aliases: [] },
      { name: "Groningen", aliases: [] },
      { name: "Tilburg", aliases: [] },
      { name: "Almere", aliases: [] },
      { name: "Breda", aliases: [] },
      { name: "Nijmegen", aliases: [] }
    ] },
  { id: "city-largest-south-korea", category: "Cities", prompt: "Top 10 largest cities in South Korea",
    hint: "By city proper population",
    items: [
      { name: "Seoul", aliases: ["Séoul"] },
      { name: "Busan", aliases: ["Pusan"] },
      { name: "Incheon", aliases: ["Inchon"] },
      { name: "Daegu", aliases: ["Taegu"] },
      { name: "Daejeon", aliases: ["Taejon"] },
      { name: "Gwangju", aliases: ["Kwangju"] },
      { name: "Suwon", aliases: [] },
      { name: "Ulsan", aliases: [] },
      { name: "Yongin", aliases: [] },
      { name: "Changwon", aliases: [] }
    ] },
  { id: "city-largest-south-africa", category: "Cities", prompt: "Top 10 largest cities in South Africa",
    hint: "By metro population",
    items: [
      { name: "Johannesburg", aliases: ["Joburg"] },
      { name: "Cape Town", aliases: ["Le Cap", "Kaapstad"] },
      { name: "Durban", aliases: [] },
      { name: "Pretoria", aliases: [] },
      { name: "Port Elizabeth", aliases: ["Gqeberha"] },
      { name: "Bloemfontein", aliases: [] },
      { name: "East London", aliases: [] },
      { name: "Pietermaritzburg", aliases: [] },
      { name: "Polokwane", aliases: [] },
      { name: "Nelspruit", aliases: ["Mbombela"] }
    ] },
  { id: "nat-highest-mountains-world", category: "Nature", prompt: "Top 10 highest mountains in the world", hint: "All in Asia (Himalaya/Karakoram)",
    items: [
      { name: "Mount Everest", aliases: ["Everest", "Sagarmatha", "Chomolungma"] },
      { name: "K2", aliases: ["Mount Godwin-Austen", "Chhogori"] },
      { name: "Kangchenjunga", aliases: ["Kanchenjunga"] },
      { name: "Lhotse", aliases: [] },
      { name: "Makalu", aliases: [] },
      { name: "Cho Oyu", aliases: ["Cho-Oyu"] },
      { name: "Dhaulagiri", aliases: ["Dhaulagiri I"] },
      { name: "Manaslu", aliases: [] },
      { name: "Nanga Parbat", aliases: [] },
      { name: "Annapurna", aliases: ["Annapurna I"] }
    ]
  },
  { id: "nat-longest-rivers-world", category: "Nature", prompt: "Top 10 longest rivers in the world", hint: "Africa, South America, Asia dominate",
    items: [
      { name: "Nile", aliases: ["Nil"] },
      { name: "Amazon", aliases: ["Amazone", "Amazonas"] },
      { name: "Yangtze", aliases: ["Chang Jiang", "Yang-Tse"] },
      { name: "Mississippi-Missouri", aliases: ["Mississippi"] },
      { name: "Yenisei", aliases: ["Ienisseï", "Yenisey"] },
      { name: "Yellow River", aliases: ["Huang He", "Fleuve Jaune"] },
      { name: "Ob-Irtysh", aliases: ["Ob"] },
      { name: "Parana", aliases: ["Paraná"] },
      { name: "Congo", aliases: ["Zaire River"] },
      { name: "Amur", aliases: ["Heilong Jiang"] }
    ]
  },
  { id: "nat-largest-lakes-area", category: "Nature", prompt: "Top 10 largest lakes by area", hint: "Caspian counts as a lake",
    items: [
      { name: "Caspian Sea", aliases: ["Mer Caspienne"] },
      { name: "Superior", aliases: ["Lake Superior", "Lac Supérieur"] },
      { name: "Victoria", aliases: ["Lake Victoria", "Lac Victoria"] },
      { name: "Huron", aliases: ["Lake Huron"] },
      { name: "Michigan", aliases: ["Lake Michigan"] },
      { name: "Tanganyika", aliases: ["Lake Tanganyika"] },
      { name: "Baikal", aliases: ["Lake Baikal", "Baïkal"] },
      { name: "Great Bear Lake", aliases: ["Grand lac de l'Ours"] },
      { name: "Malawi", aliases: ["Lake Malawi", "Lake Nyasa"] },
      { name: "Great Slave Lake", aliases: ["Grand lac des Esclaves"] }
    ]
  },
  { id: "nat-deepest-lakes", category: "Nature", prompt: "Top 10 deepest lakes in the world", hint: "Rift valleys + Siberia",
    items: [
      { name: "Baikal", aliases: ["Lake Baikal", "Baïkal"] },
      { name: "Tanganyika", aliases: ["Lake Tanganyika"] },
      { name: "Caspian Sea", aliases: ["Mer Caspienne"] },
      { name: "Vostok", aliases: ["Lake Vostok"] },
      { name: "O'Higgins-San Martin", aliases: ["O'Higgins"] },
      { name: "Malawi", aliases: ["Lake Malawi", "Nyasa"] },
      { name: "Issyk-Kul", aliases: ["Yssyk-Köl"] },
      { name: "Great Slave Lake", aliases: ["Grand lac des Esclaves"] },
      { name: "Crater Lake", aliases: [] },
      { name: "Matano", aliases: ["Lake Matano"] }
    ]
  },
  { id: "nat-largest-deserts", category: "Nature", prompt: "Top 10 largest deserts on Earth", hint: "Polar deserts count",
    items: [
      { name: "Antarctic Desert", aliases: ["Antarctica"] },
      { name: "Arctic Desert", aliases: ["Arctic"] },
      { name: "Sahara", aliases: [] },
      { name: "Arabian Desert", aliases: ["Désert d'Arabie"] },
      { name: "Gobi", aliases: ["Désert de Gobi"] },
      { name: "Kalahari", aliases: [] },
      { name: "Patagonian Desert", aliases: ["Patagonie"] },
      { name: "Great Victoria Desert", aliases: [] },
      { name: "Syrian Desert", aliases: ["Désert de Syrie"] },
      { name: "Great Basin Desert", aliases: [] }
    ]
  },
  { id: "nat-largest-islands", category: "Nature", prompt: "Top 10 largest islands in the world", hint: "Greenland #1, Australia excluded as continent",
    items: [
      { name: "Greenland", aliases: ["Groenland"] },
      { name: "New Guinea", aliases: ["Nouvelle-Guinée"] },
      { name: "Borneo", aliases: [] },
      { name: "Madagascar", aliases: [] },
      { name: "Baffin Island", aliases: ["Île de Baffin"] },
      { name: "Sumatra", aliases: [] },
      { name: "Honshu", aliases: ["Honshū"] },
      { name: "Victoria Island", aliases: [] },
      { name: "Great Britain", aliases: ["Grande-Bretagne"] },
      { name: "Ellesmere Island", aliases: [] }
    ]
  },
  { id: "nat-tallest-waterfalls", category: "Nature", prompt: "Top 10 tallest waterfalls in the world", hint: "By total height",
    items: [
      { name: "Angel Falls", aliases: ["Salto Angel", "Kerepakupai Meru"] },
      { name: "Tugela Falls", aliases: [] },
      { name: "Tres Hermanas Falls", aliases: ["Cataratas las Tres Hermanas"] },
      { name: "Olo'upena Falls", aliases: ["Oloupena"] },
      { name: "Yumbilla Falls", aliases: [] },
      { name: "Vinnufossen", aliases: ["Vinnu Falls"] },
      { name: "Balaifossen", aliases: [] },
      { name: "Pu'uka'oku Falls", aliases: [] },
      { name: "James Bruce Falls", aliases: [] },
      { name: "Browne Falls", aliases: [] }
    ]
  },
  { id: "nat-deepest-trenches", category: "Nature", prompt: "Top 10 deepest ocean trenches", hint: "Pacific Ring of Fire",
    items: [
      { name: "Mariana Trench", aliases: ["Fosse des Mariannes"] },
      { name: "Tonga Trench", aliases: ["Fosse des Tonga"] },
      { name: "Philippine Trench", aliases: [] },
      { name: "Kuril-Kamchatka Trench", aliases: ["Fosse des Kouriles"] },
      { name: "Kermadec Trench", aliases: [] },
      { name: "Izu-Ogasawara Trench", aliases: ["Izu-Bonin"] },
      { name: "Japan Trench", aliases: ["Fosse du Japon"] },
      { name: "Puerto Rico Trench", aliases: ["Fosse de Porto Rico"] },
      { name: "South Sandwich Trench", aliases: [] },
      { name: "Peru-Chile Trench", aliases: ["Atacama Trench"] }
    ]
  },
  { id: "nat-tallest-volcanoes", category: "Nature", prompt: "Top 10 tallest volcanoes in the world", hint: "Mostly in the Andes",
    items: [
      { name: "Ojos del Salado", aliases: [] },
      { name: "Llullaillaco", aliases: [] },
      { name: "Tipas", aliases: [] },
      { name: "Nevado de Incahuasi", aliases: ["Incahuasi"] },
      { name: "Cazadero", aliases: ["Walther Penck"] },
      { name: "El Condor", aliases: ["Cóndor"] },
      { name: "Cerro El Muerto", aliases: ["El Muerto"] },
      { name: "Tres Cruces", aliases: [] },
      { name: "Llullaillaco Norte", aliases: [] },
      { name: "Pissis", aliases: ["Monte Pissis"] }
    ]
  },
  { id: "nat-largest-craters", category: "Nature", prompt: "Top 10 largest confirmed impact craters", hint: "Vredefort is #1",
    items: [
      { name: "Vredefort", aliases: ["Vredefort Crater"] },
      { name: "Chicxulub", aliases: [] },
      { name: "Sudbury Basin", aliases: ["Sudbury"] },
      { name: "Popigai", aliases: [] },
      { name: "Acraman", aliases: [] },
      { name: "Manicouagan", aliases: [] },
      { name: "Morokweng", aliases: [] },
      { name: "Kara", aliases: ["Kara crater"] },
      { name: "Beaverhead", aliases: [] },
      { name: "Tookoonooka", aliases: [] }
    ]
  },
  { id: "nat-strongest-earthquakes", category: "Nature", prompt: "Top 10 strongest recorded earthquakes", hint: "Chile 1960 tops the list",
    items: [
      { name: "Valdivia 1960", aliases: ["Chile 1960", "Great Chilean earthquake"] },
      { name: "Alaska 1964", aliases: ["Great Alaska earthquake", "Good Friday earthquake"] },
      { name: "Sumatra 2004", aliases: ["Indian Ocean 2004", "Sumatra-Andaman"] },
      { name: "Tohoku 2011", aliases: ["Japan 2011", "Great East Japan earthquake"] },
      { name: "Kamchatka 1952", aliases: [] },
      { name: "Maule 2010", aliases: ["Chile 2010"] },
      { name: "Ecuador 1906", aliases: ["Esmeraldas 1906"] },
      { name: "Rat Islands 1965", aliases: ["Alaska 1965"] },
      { name: "Assam-Tibet 1950", aliases: ["Assam 1950"] },
      { name: "Sumatra 2005", aliases: ["Nias 2005"] }
    ]
  },
  { id: "nat-largest-rainforests", category: "Nature", prompt: "Top 10 largest rainforests in the world", hint: "Amazon dwarfs the rest",
    items: [
      { name: "Amazon Rainforest", aliases: ["Forêt amazonienne", "Amazonia"] },
      { name: "Congo Rainforest", aliases: ["Bassin du Congo"] },
      { name: "New Guinea Rainforest", aliases: ["Papua rainforest"] },
      { name: "Valdivian Temperate Rainforest", aliases: ["Valdivian"] },
      { name: "Sundaland Rainforest", aliases: ["Sundaland"] },
      { name: "Daintree Rainforest", aliases: ["Daintree"] },
      { name: "Tongass National Forest", aliases: ["Tongass"] },
      { name: "Bosawas Reserve", aliases: ["Bosawás"] },
      { name: "Kinabalu Rainforest", aliases: ["Kinabalu"] },
      { name: "Sinharaja Forest Reserve", aliases: ["Sinharaja"] }
    ]
  },
  { id: "nat-strongest-hurricanes", category: "Nature", prompt: "Top 10 strongest Atlantic hurricanes by wind speed", hint: "1-minute sustained winds",
    items: [
      { name: "Allen 1980", aliases: ["Hurricane Allen"] },
      { name: "Dorian 2019", aliases: ["Hurricane Dorian"] },
      { name: "Gilbert 1988", aliases: ["Hurricane Gilbert"] },
      { name: "Wilma 2005", aliases: ["Hurricane Wilma"] },
      { name: "Mitch 1998", aliases: ["Hurricane Mitch"] },
      { name: "Rita 2005", aliases: ["Hurricane Rita"] },
      { name: "Irma 2017", aliases: ["Hurricane Irma"] },
      { name: "Maria 2017", aliases: ["Hurricane Maria"] },
      { name: "Labor Day 1935", aliases: ["1935 Labor Day hurricane"] },
      { name: "Camille 1969", aliases: ["Hurricane Camille"] }
    ]
  },
  { id: "nat-himalayan-peaks", category: "Nature", prompt: "Top 10 highest peaks in the Himalayas", hint: "All over 8,000 m",
    items: [
      { name: "Mount Everest", aliases: ["Everest", "Sagarmatha", "Chomolungma"] },
      { name: "Kangchenjunga", aliases: [] },
      { name: "Lhotse", aliases: [] },
      { name: "Makalu", aliases: [] },
      { name: "Cho Oyu", aliases: [] },
      { name: "Dhaulagiri", aliases: ["Dhaulagiri I"] },
      { name: "Manaslu", aliases: [] },
      { name: "Annapurna", aliases: ["Annapurna I"] },
      { name: "Shishapangma", aliases: ["Xixabangma"] },
      { name: "Gyachung Kang", aliases: [] }
    ]
  },
  { id: "nat-andes-peaks", category: "Nature", prompt: "Top 10 highest peaks in the Andes", hint: "Argentina/Chile border",
    items: [
      { name: "Aconcagua", aliases: [] },
      { name: "Ojos del Salado", aliases: [] },
      { name: "Monte Pissis", aliases: ["Pissis"] },
      { name: "Cerro Bonete", aliases: ["Bonete"] },
      { name: "Tres Cruces", aliases: [] },
      { name: "Llullaillaco", aliases: [] },
      { name: "Mercedario", aliases: [] },
      { name: "Cazadero", aliases: ["Walther Penck"] },
      { name: "Incahuasi", aliases: ["Nevado de Incahuasi"] },
      { name: "Tupungato", aliases: [] }
    ]
  },
  { id: "nat-alps-peaks", category: "Nature", prompt: "Top 10 highest peaks in the Alps", hint: "Mont Blanc tops them",
    items: [
      { name: "Mont Blanc", aliases: ["Monte Bianco"] },
      { name: "Monte Rosa", aliases: ["Dufourspitze"] },
      { name: "Dom", aliases: [] },
      { name: "Liskamm", aliases: ["Lyskamm"] },
      { name: "Weisshorn", aliases: [] },
      { name: "Taschhorn", aliases: ["Täschhorn"] },
      { name: "Matterhorn", aliases: ["Cervin", "Cervino"] },
      { name: "Mont Maudit", aliases: [] },
      { name: "Dent Blanche", aliases: [] },
      { name: "Nadelhorn", aliases: [] }
    ]
  },
  { id: "nat-rockies-peaks", category: "Nature", prompt: "Top 10 highest peaks in the Rocky Mountains", hint: "All in Colorado",
    items: [
      { name: "Mount Elbert", aliases: ["Elbert"] },
      { name: "Mount Massive", aliases: [] },
      { name: "Mount Harvard", aliases: [] },
      { name: "Blanca Peak", aliases: [] },
      { name: "La Plata Peak", aliases: [] },
      { name: "Uncompahgre Peak", aliases: [] },
      { name: "Crestone Peak", aliases: [] },
      { name: "Mount Lincoln", aliases: [] },
      { name: "Grays Peak", aliases: [] },
      { name: "Mount Antero", aliases: [] }
    ]
  },
  { id: "nat-pyrenees-peaks", category: "Nature", prompt: "Top 10 highest peaks in the Pyrenees", hint: "Spain/France border",
    items: [
      { name: "Aneto", aliases: ["Pic d'Aneto"] },
      { name: "Posets", aliases: [] },
      { name: "Monte Perdido", aliases: ["Mont Perdu"] },
      { name: "Pic de la Maladeta", aliases: ["Maladeta"] },
      { name: "Vignemale", aliases: [] },
      { name: "Cilindro de Marbore", aliases: ["Cilindro"] },
      { name: "Pic de Marbore", aliases: ["Marboré"] },
      { name: "Pic du Pavot", aliases: [] },
      { name: "Pico Maldito", aliases: [] },
      { name: "Pic Long", aliases: [] }
    ]
  },
  { id: "nat-rivers-europe", category: "Nature", prompt: "Top 10 longest rivers in Europe", hint: "Volga is longest",
    items: [
      { name: "Volga", aliases: [] },
      { name: "Danube", aliases: ["Donau"] },
      { name: "Ural", aliases: [] },
      { name: "Dnieper", aliases: ["Dnipro"] },
      { name: "Don", aliases: [] },
      { name: "Pechora", aliases: [] },
      { name: "Kama", aliases: [] },
      { name: "Oka", aliases: [] },
      { name: "Belaya", aliases: [] },
      { name: "Dniester", aliases: ["Dnister"] }
    ]
  },
  { id: "nat-rivers-africa", category: "Nature", prompt: "Top 10 longest rivers in Africa", hint: "Nile and Congo lead",
    items: [
      { name: "Nile", aliases: ["Nil"] },
      { name: "Congo", aliases: ["Zaire"] },
      { name: "Niger", aliases: [] },
      { name: "Zambezi", aliases: ["Zambèze"] },
      { name: "Ubangi", aliases: ["Oubangui"] },
      { name: "Kasai", aliases: [] },
      { name: "Orange", aliases: [] },
      { name: "Limpopo", aliases: [] },
      { name: "Senegal", aliases: ["Sénégal"] },
      { name: "Blue Nile", aliases: ["Nil Bleu"] }
    ]
  },
  { id: "nat-rivers-asia", category: "Nature", prompt: "Top 10 longest rivers in Asia", hint: "Yangtze is #1",
    items: [
      { name: "Yangtze", aliases: ["Chang Jiang"] },
      { name: "Yellow River", aliases: ["Huang He"] },
      { name: "Mekong", aliases: [] },
      { name: "Lena", aliases: [] },
      { name: "Irtysh", aliases: [] },
      { name: "Brahmaputra", aliases: [] },
      { name: "Ob", aliases: [] },
      { name: "Indus", aliases: [] },
      { name: "Yenisei", aliases: ["Ienisseï"] },
      { name: "Amur", aliases: ["Heilong Jiang"] }
    ]
  },
  { id: "nat-rivers-americas", category: "Nature", prompt: "Top 10 longest rivers in the Americas", hint: "Amazon is longest",
    items: [
      { name: "Amazon", aliases: ["Amazonas", "Amazone"] },
      { name: "Mississippi-Missouri", aliases: ["Mississippi"] },
      { name: "Parana", aliases: ["Paraná"] },
      { name: "Madeira", aliases: [] },
      { name: "Purus", aliases: ["Purús"] },
      { name: "Sao Francisco", aliases: ["São Francisco"] },
      { name: "Yukon", aliases: [] },
      { name: "Rio Grande", aliases: ["Río Grande"] },
      { name: "Tocantins", aliases: [] },
      { name: "Orinoco", aliases: [] }
    ]
  },
  { id: "nat-rivers-france", category: "Nature", prompt: "Top 10 longest rivers in France", hint: "Loire is longest",
    items: [
      { name: "Loire", aliases: [] },
      { name: "Seine", aliases: [] },
      { name: "Garonne", aliases: [] },
      { name: "Rhone", aliases: ["Rhône"] },
      { name: "Marne", aliases: [] },
      { name: "Lot", aliases: [] },
      { name: "Saone", aliases: ["Saône"] },
      { name: "Dordogne", aliases: [] },
      { name: "Charente", aliases: [] },
      { name: "Allier", aliases: [] }
    ]
  },
  { id: "nat-rivers-usa", category: "Nature", prompt: "Top 10 longest rivers in the United States", hint: "Missouri tops it",
    items: [
      { name: "Missouri", aliases: ["Missouri River"] },
      { name: "Mississippi", aliases: ["Mississippi River"] },
      { name: "Yukon", aliases: [] },
      { name: "Rio Grande", aliases: ["Río Grande"] },
      { name: "Colorado", aliases: ["Colorado River"] },
      { name: "Arkansas", aliases: ["Arkansas River"] },
      { name: "Columbia", aliases: ["Columbia River"] },
      { name: "Red River", aliases: [] },
      { name: "Snake River", aliases: ["Snake"] },
      { name: "Ohio", aliases: ["Ohio River"] }
    ]
  },
  { id: "nat-lakes-africa", category: "Nature", prompt: "Top 10 largest lakes in Africa", hint: "Great Rift Valley dominates",
    items: [
      { name: "Victoria", aliases: ["Lake Victoria"] },
      { name: "Tanganyika", aliases: ["Lake Tanganyika"] },
      { name: "Malawi", aliases: ["Lake Malawi", "Nyasa"] },
      { name: "Turkana", aliases: ["Lake Turkana"] },
      { name: "Albert", aliases: ["Lake Albert"] },
      { name: "Mweru", aliases: ["Lake Mweru"] },
      { name: "Tana", aliases: ["Lake Tana"] },
      { name: "Kivu", aliases: ["Lake Kivu"] },
      { name: "Edward", aliases: ["Lake Edward"] },
      { name: "Bangweulu", aliases: ["Lake Bangweulu"] }
    ]
  },
  { id: "nat-lakes-europe", category: "Nature", prompt: "Top 10 largest lakes in Europe", hint: "Ladoga is #1",
    items: [
      { name: "Ladoga", aliases: ["Lake Ladoga"] },
      { name: "Onega", aliases: ["Lake Onega"] },
      { name: "Vanern", aliases: ["Vänern"] },
      { name: "Saimaa", aliases: [] },
      { name: "Peipus", aliases: ["Lake Peipus", "Chudskoye"] },
      { name: "Vattern", aliases: ["Vättern"] },
      { name: "Beloye", aliases: ["White Lake"] },
      { name: "Vygozero", aliases: [] },
      { name: "Mälaren", aliases: ["Malaren"] },
      { name: "Inari", aliases: ["Lake Inari"] }
    ]
  },
  { id: "nat-lakes-na", category: "Nature", prompt: "Top 10 largest lakes in North America", hint: "Great Lakes lead",
    items: [
      { name: "Superior", aliases: ["Lake Superior"] },
      { name: "Huron", aliases: ["Lake Huron"] },
      { name: "Michigan", aliases: ["Lake Michigan"] },
      { name: "Great Bear Lake", aliases: ["Grand lac de l'Ours"] },
      { name: "Great Slave Lake", aliases: ["Grand lac des Esclaves"] },
      { name: "Erie", aliases: ["Lake Erie"] },
      { name: "Winnipeg", aliases: ["Lake Winnipeg"] },
      { name: "Ontario", aliases: ["Lake Ontario"] },
      { name: "Nicaragua", aliases: ["Lake Nicaragua"] },
      { name: "Athabasca", aliases: ["Lake Athabasca"] }
    ]
  },
  { id: "nat-volcanoes-active", category: "Nature", prompt: "Top 10 most active volcanoes on Earth", hint: "Always erupting",
    items: [
      { name: "Stromboli", aliases: [] },
      { name: "Mount Etna", aliases: ["Etna"] },
      { name: "Kilauea", aliases: ["Kīlauea"] },
      { name: "Sangay", aliases: [] },
      { name: "Erta Ale", aliases: [] },
      { name: "Yasur", aliases: ["Mount Yasur"] },
      { name: "Santa Maria", aliases: ["Santiaguito"] },
      { name: "Dukono", aliases: [] },
      { name: "Sakurajima", aliases: [] },
      { name: "Semeru", aliases: [] }
    ]
  },
  { id: "nat-volcanoes-eruptions", category: "Nature", prompt: "Top 10 largest volcanic eruptions in recorded history", hint: "By VEI",
    items: [
      { name: "Mount Tambora 1815", aliases: ["Tambora"] },
      { name: "Krakatoa 1883", aliases: ["Krakatau"] },
      { name: "Mount Pinatubo 1991", aliases: ["Pinatubo"] },
      { name: "Novarupta 1912", aliases: ["Katmai"] },
      { name: "Mount St. Helens 1980", aliases: ["St. Helens"] },
      { name: "Mount Vesuvius 79 AD", aliases: ["Vesuvius"] },
      { name: "Huaynaputina 1600", aliases: [] },
      { name: "Laki 1783", aliases: [] },
      { name: "Unzen 1792", aliases: ["Mount Unzen"] },
      { name: "Nevado del Ruiz 1985", aliases: ["Ruiz"] }
    ]
  },
  { id: "nat-deserts-hot", category: "Nature", prompt: "Top 10 largest hot deserts", hint: "Sahara is #1",
    items: [
      { name: "Sahara", aliases: [] },
      { name: "Arabian Desert", aliases: [] },
      { name: "Kalahari", aliases: [] },
      { name: "Great Victoria Desert", aliases: [] },
      { name: "Syrian Desert", aliases: [] },
      { name: "Great Sandy Desert", aliases: [] },
      { name: "Sonoran Desert", aliases: [] },
      { name: "Karakum", aliases: ["Kara-Kum"] },
      { name: "Chihuahuan Desert", aliases: [] },
      { name: "Thar Desert", aliases: [] }
    ]
  },
  { id: "nat-driest-places", category: "Nature", prompt: "Top 10 driest places on Earth", hint: "Antarctica + Atacama",
    items: [
      { name: "McMurdo Dry Valleys", aliases: ["Dry Valleys"] },
      { name: "Atacama Desert", aliases: ["Atacama"] },
      { name: "Aswan", aliases: [] },
      { name: "Luxor", aliases: [] },
      { name: "Arica", aliases: [] },
      { name: "Ica", aliases: [] },
      { name: "Wadi Halfa", aliases: [] },
      { name: "Iquique", aliases: [] },
      { name: "Pelican Point", aliases: [] },
      { name: "Al-Kufrah", aliases: ["Kufra"] }
    ]
  },
  { id: "nat-hottest-places", category: "Nature", prompt: "Top 10 hottest places on Earth (recorded temperatures)", hint: "Death Valley leads",
    items: [
      { name: "Death Valley", aliases: ["Furnace Creek"] },
      { name: "Mitribah", aliases: [] },
      { name: "Basra", aliases: ["Bassorah"] },
      { name: "Turbat", aliases: [] },
      { name: "Mohenjo-daro", aliases: ["Mohenjo Daro"] },
      { name: "Wadi Halfa", aliases: [] },
      { name: "Kebili", aliases: [] },
      { name: "Tirat Zvi", aliases: [] },
      { name: "Ahvaz", aliases: ["Ahwaz"] },
      { name: "Dallol", aliases: [] }
    ]
  },
  { id: "nat-coldest-places", category: "Nature", prompt: "Top 10 coldest inhabited places on Earth", hint: "Siberia dominates",
    items: [
      { name: "Oymyakon", aliases: [] },
      { name: "Verkhoyansk", aliases: [] },
      { name: "Yakutsk", aliases: [] },
      { name: "Eureka", aliases: [] },
      { name: "Norilsk", aliases: [] },
      { name: "Yellowknife", aliases: [] },
      { name: "Hell", aliases: ["Hell, Norway"] },
      { name: "Barrow", aliases: ["Utqiagvik"] },
      { name: "Snag", aliases: [] },
      { name: "International Falls", aliases: [] }
    ]
  },
  { id: "nat-longest-caves", category: "Nature", prompt: "Top 10 longest caves in the world", hint: "Mammoth Cave is #1",
    items: [
      { name: "Mammoth Cave", aliases: [] },
      { name: "Sistema Sac Actun", aliases: ["Sac Actun"] },
      { name: "Jewel Cave", aliases: [] },
      { name: "Sistema Ox Bel Ha", aliases: ["Ox Bel Ha"] },
      { name: "Optymistychna Cave", aliases: ["Optymistychna"] },
      { name: "Wind Cave", aliases: [] },
      { name: "Lechuguilla Cave", aliases: ["Lechuguilla"] },
      { name: "Hölloch", aliases: ["Holloch"] },
      { name: "Fisher Ridge Cave", aliases: [] },
      { name: "Clearwater Cave", aliases: [] }
    ]
  },
  { id: "nat-deepest-caves", category: "Nature", prompt: "Top 10 deepest caves in the world", hint: "Caucasus / Georgia",
    items: [
      { name: "Veryovkina Cave", aliases: ["Veryovkina"] },
      { name: "Krubera Cave", aliases: ["Voronya"] },
      { name: "Sarma Cave", aliases: ["Sarma"] },
      { name: "Snezhnaya Cave", aliases: ["Snezhnaya"] },
      { name: "Lamprechtsofen", aliases: [] },
      { name: "Mirolda Cave", aliases: ["Mirolda"] },
      { name: "Gouffre Jean-Bernard", aliases: ["Jean-Bernard"] },
      { name: "Torca del Cerro", aliases: ["Cerro del Cuevon"] },
      { name: "Sistema Huautla", aliases: ["Huautla"] },
      { name: "Sistema del Cerro", aliases: ["Cerro"] }
    ]
  },
  { id: "nat-largest-glaciers", category: "Nature", prompt: "Top 10 largest glaciers in the world (outside ice sheets)", hint: "Antarctica/Patagonia",
    items: [
      { name: "Lambert Glacier", aliases: ["Lambert"] },
      { name: "Pine Island Glacier", aliases: ["Pine Island"] },
      { name: "Thwaites Glacier", aliases: ["Thwaites"] },
      { name: "Beardmore Glacier", aliases: [] },
      { name: "Siachen Glacier", aliases: ["Siachen"] },
      { name: "Hispar Glacier", aliases: [] },
      { name: "Bering Glacier", aliases: [] },
      { name: "Biafo Glacier", aliases: [] },
      { name: "Baltoro Glacier", aliases: ["Baltoro"] },
      { name: "Fedchenko Glacier", aliases: ["Fedchenko"] }
    ]
  },
  { id: "nat-tallest-trees", category: "Nature", prompt: "Top 10 tallest tree species in the world", hint: "Redwoods + eucalyptus",
    items: [
      { name: "Coast Redwood", aliases: ["Sequoia sempervirens"] },
      { name: "Mountain Ash", aliases: ["Eucalyptus regnans"] },
      { name: "Coast Douglas Fir", aliases: ["Douglas-fir"] },
      { name: "Sitka Spruce", aliases: [] },
      { name: "Giant Sequoia", aliases: ["Sequoiadendron giganteum"] },
      { name: "Manna Gum", aliases: ["Eucalyptus viminalis"] },
      { name: "Noble Fir", aliases: [] },
      { name: "Yellow Meranti", aliases: ["Shorea faguetiana"] },
      { name: "Klinki Pine", aliases: ["Araucaria hunsteinii"] },
      { name: "Alpine Ash", aliases: ["Eucalyptus delegatensis"] }
    ]
  },
  { id: "nat-oldest-trees", category: "Nature", prompt: "Top 10 oldest known individual trees", hint: "Bristlecone pines",
    items: [
      { name: "Methuselah", aliases: [] },
      { name: "Prometheus", aliases: [] },
      { name: "Llangernyw Yew", aliases: [] },
      { name: "Fortingall Yew", aliases: [] },
      { name: "Alerce Milenario", aliases: ["Gran Abuelo"] },
      { name: "Sarv-e Abarkuh", aliases: ["Abarkuh Cypress"] },
      { name: "Olive Tree of Vouves", aliases: [] },
      { name: "Patriarca da Floresta", aliases: [] },
      { name: "Jomon Sugi", aliases: [] },
      { name: "Senator", aliases: ["The Senator"] }
    ]
  },
  { id: "nat-large-islands-pop", category: "Nature", prompt: "Top 10 most populous islands in the world", hint: "Java is #1",
    items: [
      { name: "Java", aliases: [] },
      { name: "Honshu", aliases: ["Honshū"] },
      { name: "Great Britain", aliases: ["Grande-Bretagne"] },
      { name: "Luzon", aliases: [] },
      { name: "Sumatra", aliases: [] },
      { name: "Madagascar", aliases: [] },
      { name: "Mindanao", aliases: [] },
      { name: "Taiwan", aliases: ["Formosa"] },
      { name: "Sri Lanka", aliases: ["Ceylon"] },
      { name: "Salsette Island", aliases: ["Mumbai island"] }
    ]
  },
  { id: "nat-seas-largest", category: "Nature", prompt: "Top 10 largest seas in the world", hint: "Marginal seas of oceans",
    items: [
      { name: "Philippine Sea", aliases: ["Mer des Philippines"] },
      { name: "Coral Sea", aliases: ["Mer de Corail"] },
      { name: "Arabian Sea", aliases: ["Mer d'Arabie"] },
      { name: "South China Sea", aliases: ["Mer de Chine méridionale"] },
      { name: "Weddell Sea", aliases: [] },
      { name: "Caribbean Sea", aliases: ["Mer des Caraïbes"] },
      { name: "Mediterranean Sea", aliases: ["Méditerranée"] },
      { name: "Tasman Sea", aliases: ["Mer de Tasman"] },
      { name: "Bering Sea", aliases: [] },
      { name: "Bay of Bengal", aliases: ["Golfe du Bengale"] }
    ]
  },
  { id: "nat-bays-largest", category: "Nature", prompt: "Top 10 largest bays in the world", hint: "Bengal is often #1",
    items: [
      { name: "Bay of Bengal", aliases: ["Golfe du Bengale"] },
      { name: "Gulf of Mexico", aliases: ["Golfe du Mexique"] },
      { name: "Hudson Bay", aliases: ["Baie d'Hudson"] },
      { name: "Gulf of Guinea", aliases: ["Golfe de Guinée"] },
      { name: "Gulf of Alaska", aliases: [] },
      { name: "Sea of Okhotsk", aliases: [] },
      { name: "Bay of Biscay", aliases: ["Golfe de Gascogne"] },
      { name: "Persian Gulf", aliases: ["Golfe Persique"] },
      { name: "Great Australian Bight", aliases: [] },
      { name: "Gulf of Carpentaria", aliases: [] }
    ]
  },
  { id: "nat-archipelagos", category: "Nature", prompt: "Top 10 largest archipelagos in the world", hint: "Indonesia tops it",
    items: [
      { name: "Malay Archipelago", aliases: ["Indonesian Archipelago"] },
      { name: "Canadian Arctic Archipelago", aliases: [] },
      { name: "Japanese Archipelago", aliases: ["Japon"] },
      { name: "Philippine Archipelago", aliases: ["Philippines"] },
      { name: "British Isles", aliases: ["Îles Britanniques"] },
      { name: "Aleutian Islands", aliases: ["Aleutian"] },
      { name: "Hawaiian Islands", aliases: ["Hawaii"] },
      { name: "Stockholm Archipelago", aliases: [] },
      { name: "Greek Archipelago", aliases: ["Greek Islands"] },
      { name: "Tierra del Fuego Archipelago", aliases: [] }
    ]
  },
  { id: "nat-peninsulas-largest", category: "Nature", prompt: "Top 10 largest peninsulas in the world", hint: "Arabia is biggest",
    items: [
      { name: "Arabian Peninsula", aliases: ["Arabia"] },
      { name: "Deccan Peninsula", aliases: [] },
      { name: "Indochinese Peninsula", aliases: ["Indochine"] },
      { name: "Horn of Africa", aliases: [] },
      { name: "Alaska Peninsula", aliases: [] },
      { name: "Labrador Peninsula", aliases: [] },
      { name: "Scandinavian Peninsula", aliases: ["Scandinavia"] },
      { name: "Iberian Peninsula", aliases: ["Péninsule Ibérique"] },
      { name: "Balkan Peninsula", aliases: ["Balkans"] },
      { name: "Kamchatka Peninsula", aliases: ["Kamchatka"] }
    ]
  },
  { id: "nat-amazon-tributaries", category: "Nature", prompt: "Top 10 longest tributaries of the Amazon", hint: "Madeira leads",
    items: [
      { name: "Madeira", aliases: [] },
      { name: "Purus", aliases: ["Purús"] },
      { name: "Japura", aliases: ["Japurá", "Caqueta"] },
      { name: "Tocantins", aliases: [] },
      { name: "Araguaia", aliases: [] },
      { name: "Jurua", aliases: ["Juruá"] },
      { name: "Negro", aliases: ["Rio Negro"] },
      { name: "Xingu", aliases: [] },
      { name: "Ucayali", aliases: [] },
      { name: "Tapajos", aliases: ["Tapajós"] }
    ]
  },
  { id: "nat-largest-waterfalls-flow", category: "Nature", prompt: "Top 10 largest waterfalls by water flow", hint: "By cubic meters per second",
    items: [
      { name: "Inga Falls", aliases: [] },
      { name: "Livingstone Falls", aliases: [] },
      { name: "Boyoma Falls", aliases: ["Stanley Falls"] },
      { name: "Khone Phapheng Falls", aliases: ["Khone Falls"] },
      { name: "Salto Para", aliases: ["Salto Pará"] },
      { name: "Pailolo Falls", aliases: [] },
      { name: "Niagara Falls", aliases: [] },
      { name: "Iguazu Falls", aliases: ["Iguaçu"] },
      { name: "Victoria Falls", aliases: ["Mosi-oa-Tunya"] },
      { name: "Celilo Falls", aliases: [] }
    ]
  },
  { id: "nat-coral-reefs", category: "Nature", prompt: "Top 10 largest coral reef systems", hint: "Great Barrier #1",
    items: [
      { name: "Great Barrier Reef", aliases: [] },
      { name: "Mesoamerican Barrier Reef", aliases: ["Mesoamerican Reef"] },
      { name: "New Caledonia Barrier Reef", aliases: [] },
      { name: "Andros Barrier Reef", aliases: [] },
      { name: "Red Sea Coral Reef", aliases: [] },
      { name: "Florida Reef", aliases: [] },
      { name: "Belize Barrier Reef", aliases: [] },
      { name: "Pulley Ridge", aliases: [] },
      { name: "Apo Reef", aliases: [] },
      { name: "Saya de Malha Bank", aliases: [] }
    ]
  },
  { id: "nat-atolls-largest", category: "Nature", prompt: "Top 10 largest atolls in the world (by lagoon area)", hint: "Indian + Pacific",
    items: [
      { name: "Great Chagos Bank", aliases: [] },
      { name: "Reed Bank", aliases: [] },
      { name: "Macclesfield Bank", aliases: [] },
      { name: "North Bank", aliases: [] },
      { name: "Huvadhu Atoll", aliases: [] },
      { name: "Truk Lagoon", aliases: ["Chuuk Lagoon"] },
      { name: "Sahalahi", aliases: [] },
      { name: "Kwajalein", aliases: [] },
      { name: "Namonuito Atoll", aliases: [] },
      { name: "Rangiroa", aliases: [] }
    ]
  },
  { id: "nat-glaciers-tropical", category: "Nature", prompt: "Top 10 highest peaks in the European Alps (extended)", hint: "Includes Bernese Oberland",
    items: [
      { name: "Mont Blanc", aliases: [] },
      { name: "Monte Rosa", aliases: ["Dufourspitze"] },
      { name: "Dom", aliases: [] },
      { name: "Liskamm", aliases: [] },
      { name: "Weisshorn", aliases: [] },
      { name: "Matterhorn", aliases: ["Cervin"] },
      { name: "Dent Blanche", aliases: [] },
      { name: "Grand Combin", aliases: [] },
      { name: "Finsteraarhorn", aliases: [] },
      { name: "Jungfrau", aliases: [] }
    ]
  },
  { id: "nat-lakes-volume", category: "Nature", prompt: "Top 10 largest lakes by volume", hint: "Baikal is #1",
    items: [
      { name: "Caspian Sea", aliases: ["Mer Caspienne"] },
      { name: "Baikal", aliases: ["Lake Baikal"] },
      { name: "Tanganyika", aliases: ["Lake Tanganyika"] },
      { name: "Superior", aliases: ["Lake Superior"] },
      { name: "Malawi", aliases: ["Lake Malawi"] },
      { name: "Vostok", aliases: ["Lake Vostok"] },
      { name: "Michigan", aliases: ["Lake Michigan"] },
      { name: "Huron", aliases: ["Lake Huron"] },
      { name: "Victoria", aliases: ["Lake Victoria"] },
      { name: "Great Bear Lake", aliases: ["Grand lac de l'Ours"] }
    ]
  },
  { id: "nat-deltas-largest", category: "Nature", prompt: "Top 10 largest river deltas in the world", hint: "Ganges-Brahmaputra is huge",
    items: [
      { name: "Ganges-Brahmaputra Delta", aliases: ["Bengal Delta"] },
      { name: "Nile Delta", aliases: ["Delta du Nil"] },
      { name: "Mekong Delta", aliases: [] },
      { name: "Mississippi Delta", aliases: [] },
      { name: "Niger Delta", aliases: [] },
      { name: "Amazon Delta", aliases: [] },
      { name: "Yellow River Delta", aliases: ["Huang He Delta"] },
      { name: "Lena Delta", aliases: [] },
      { name: "Volga Delta", aliases: [] },
      { name: "Indus Delta", aliases: [] }
    ]
  },
  { id: "nat-canyons-largest", category: "Nature", prompt: "Top 10 largest canyons in the world", hint: "Yarlung Tsangpo is deepest",
    items: [
      { name: "Yarlung Tsangpo Grand Canyon", aliases: ["Yarlung Tsangpo"] },
      { name: "Kali Gandaki Gorge", aliases: ["Kali Gandaki"] },
      { name: "Cotahuasi Canyon", aliases: ["Cotahuasi"] },
      { name: "Colca Canyon", aliases: ["Colca"] },
      { name: "Grand Canyon", aliases: ["Grand Canyon of the Colorado"] },
      { name: "Copper Canyon", aliases: ["Barranca del Cobre"] },
      { name: "Fish River Canyon", aliases: [] },
      { name: "Tara River Canyon", aliases: [] },
      { name: "Capertee Valley", aliases: [] },
      { name: "Blyde River Canyon", aliases: [] }
    ]
  },
  { id: "nat-largest-natl-parks", category: "Nature", prompt: "Top 10 largest national parks in the world", hint: "Greenland is huge",
    items: [
      { name: "Northeast Greenland National Park", aliases: ["Greenland NP"] },
      { name: "Chagos Marine Protected Area", aliases: [] },
      { name: "Papahanaumokuakea Marine NM", aliases: ["Papahānaumokuākea"] },
      { name: "Phoenix Islands Protected Area", aliases: [] },
      { name: "Galapagos Marine Reserve", aliases: ["Galápagos"] },
      { name: "Kavango-Zambezi TFCA", aliases: ["KAZA"] },
      { name: "Wood Buffalo National Park", aliases: [] },
      { name: "Namib-Naukluft National Park", aliases: [] },
      { name: "Kruger National Park", aliases: [] },
      { name: "Death Valley National Park", aliases: [] }
    ]
  },
  { id: "nat-mountains-africa", category: "Nature", prompt: "Top 10 highest mountains in Africa", hint: "Kilimanjaro #1",
    items: [
      { name: "Kilimanjaro", aliases: ["Mount Kilimanjaro"] },
      { name: "Mount Kenya", aliases: ["Batian"] },
      { name: "Mount Stanley", aliases: ["Margherita Peak", "Rwenzori"] },
      { name: "Mount Speke", aliases: [] },
      { name: "Mount Baker", aliases: ["Mount Baker, Africa"] },
      { name: "Mount Emin", aliases: [] },
      { name: "Mount Gessi", aliases: [] },
      { name: "Mount Luigi di Savoia", aliases: [] },
      { name: "Ras Dashen", aliases: ["Ras Dejen"] },
      { name: "Mount Meru", aliases: [] }
    ]
  },
  { id: "nat-mountains-na", category: "Nature", prompt: "Top 10 highest mountains in North America", hint: "Denali #1",
    items: [
      { name: "Denali", aliases: ["Mount McKinley"] },
      { name: "Mount Logan", aliases: ["Logan"] },
      { name: "Pico de Orizaba", aliases: ["Citlaltepetl"] },
      { name: "Mount Saint Elias", aliases: ["St. Elias"] },
      { name: "Popocatepetl", aliases: ["Popocatépetl"] },
      { name: "Mount Foraker", aliases: [] },
      { name: "Iztaccihuatl", aliases: ["Iztaccíhuatl"] },
      { name: "Mount Lucania", aliases: [] },
      { name: "King Peak", aliases: [] },
      { name: "Mount Bona", aliases: [] }
    ]
  },
  { id: "nat-mountains-oceania", category: "Nature", prompt: "Top 10 highest mountains in Oceania", hint: "New Guinea peaks",
    items: [
      { name: "Puncak Jaya", aliases: ["Carstensz Pyramid"] },
      { name: "Sumantri", aliases: ["Puncak Sumantri"] },
      { name: "Ngga Pulu", aliases: [] },
      { name: "Carstensz East", aliases: [] },
      { name: "Puncak Mandala", aliases: ["Juliana"] },
      { name: "Puncak Trikora", aliases: ["Wilhelmina"] },
      { name: "Mount Wilhelm", aliases: [] },
      { name: "Mount Kubor", aliases: [] },
      { name: "Mount Herbert", aliases: [] },
      { name: "Mount Bangeta", aliases: [] }
    ]
  },
  { id: "nat-mountains-antarctica", category: "Nature", prompt: "Top 10 highest mountains in Antarctica", hint: "Vinson Massif #1",
    items: [
      { name: "Vinson Massif", aliases: ["Mount Vinson"] },
      { name: "Mount Tyree", aliases: [] },
      { name: "Mount Shinn", aliases: [] },
      { name: "Mount Gardner", aliases: [] },
      { name: "Mount Epperly", aliases: [] },
      { name: "Mount Kirkpatrick", aliases: [] },
      { name: "Mount Elizabeth", aliases: [] },
      { name: "Mount Markham", aliases: [] },
      { name: "Mount Bell", aliases: [] },
      { name: "Mount Mackellar", aliases: [] }
    ]
  },
  { id: "nat-largest-forests", category: "Nature", prompt: "Top 10 largest forests in the world", hint: "Boreal + tropical",
    items: [
      { name: "Taiga", aliases: ["Boreal Forest"] },
      { name: "Amazon Rainforest", aliases: ["Amazonia"] },
      { name: "Congo Rainforest", aliases: [] },
      { name: "Valdivian Temperate Rainforest", aliases: [] },
      { name: "Tongass National Forest", aliases: [] },
      { name: "Daintree Rainforest", aliases: [] },
      { name: "Bosawas Reserve", aliases: ["Bosawás"] },
      { name: "Mindo-Nambillo Cloud Forest", aliases: [] },
      { name: "Sundarbans", aliases: [] },
      { name: "Xishuangbanna Tropical Rainforest", aliases: [] }
    ]
  },
  { id: "nat-volcanoes-iceland", category: "Nature", prompt: "Top 10 most notable volcanoes in Iceland", hint: "Iceland is volcanic",
    items: [
      { name: "Eyjafjallajokull", aliases: ["Eyjafjallajökull"] },
      { name: "Katla", aliases: [] },
      { name: "Hekla", aliases: [] },
      { name: "Bardarbunga", aliases: ["Bárðarbunga"] },
      { name: "Grimsvotn", aliases: ["Grímsvötn"] },
      { name: "Laki", aliases: ["Lakagigar"] },
      { name: "Askja", aliases: [] },
      { name: "Oraefajokull", aliases: ["Öræfajökull"] },
      { name: "Hengill", aliases: [] },
      { name: "Krafla", aliases: [] }
    ]
  },
  { id: "nat-rivers-by-discharge", category: "Nature", prompt: "Top 10 rivers by discharge (volume of water)", hint: "Amazon dominates",
    items: [
      { name: "Amazon", aliases: ["Amazonas"] },
      { name: "Congo", aliases: ["Zaire"] },
      { name: "Ganges-Brahmaputra", aliases: ["Ganges"] },
      { name: "Orinoco", aliases: [] },
      { name: "Yangtze", aliases: ["Chang Jiang"] },
      { name: "Madeira", aliases: [] },
      { name: "Negro", aliases: ["Rio Negro"] },
      { name: "Rio de la Plata", aliases: ["Río de la Plata"] },
      { name: "Yenisei", aliases: ["Ienisseï"] },
      { name: "Mississippi", aliases: [] }
    ]
  },
  { id: "nat-mountains-everest-region", category: "Nature", prompt: "Top 10 highest peaks in the Karakoram", hint: "K2 leads",
    items: [
      { name: "K2", aliases: ["Chhogori"] },
      { name: "Gasherbrum I", aliases: ["Hidden Peak"] },
      { name: "Broad Peak", aliases: [] },
      { name: "Gasherbrum II", aliases: [] },
      { name: "Gasherbrum III", aliases: [] },
      { name: "Gasherbrum IV", aliases: [] },
      { name: "Distaghil Sar", aliases: [] },
      { name: "Kunyang Chhish", aliases: [] },
      { name: "Masherbrum", aliases: [] },
      { name: "Batura Sar", aliases: ["Batura I"] }
    ]
  },
  { id: "nat-largest-islands-mediterranean", category: "Nature", prompt: "Top 10 largest islands in the Mediterranean", hint: "Sicily is #1",
    items: [
      { name: "Sicily", aliases: ["Sicile", "Sicilia"] },
      { name: "Sardinia", aliases: ["Sardaigne", "Sardegna"] },
      { name: "Cyprus", aliases: ["Chypre"] },
      { name: "Corsica", aliases: ["Corse"] },
      { name: "Crete", aliases: ["Crète"] },
      { name: "Euboea", aliases: ["Évvoia"] },
      { name: "Majorca", aliases: ["Mallorca"] },
      { name: "Lesbos", aliases: [] },
      { name: "Rhodes", aliases: [] },
      { name: "Chios", aliases: [] }
    ]
  },
  { id: "nat-biggest-waterfalls-tourist", category: "Nature", prompt: "Top 10 most famous waterfalls in the world", hint: "Tourist landmarks",
    items: [
      { name: "Niagara Falls", aliases: [] },
      { name: "Iguazu Falls", aliases: ["Iguaçu"] },
      { name: "Victoria Falls", aliases: ["Mosi-oa-Tunya"] },
      { name: "Angel Falls", aliases: ["Salto Angel"] },
      { name: "Yosemite Falls", aliases: [] },
      { name: "Plitvice Falls", aliases: [] },
      { name: "Gullfoss", aliases: [] },
      { name: "Kaieteur Falls", aliases: [] },
      { name: "Sutherland Falls", aliases: [] },
      { name: "Detian Falls", aliases: ["Ban Gioc"] }
    ]
  },
  { id: "nat-biggest-rivers-by-basin", category: "Nature", prompt: "Top 10 rivers with the largest drainage basins", hint: "Amazon is #1",
    items: [
      { name: "Amazon", aliases: [] },
      { name: "Congo", aliases: [] },
      { name: "Nile", aliases: [] },
      { name: "Mississippi", aliases: [] },
      { name: "Ob", aliases: [] },
      { name: "Parana", aliases: ["Paraná"] },
      { name: "Yenisei", aliases: [] },
      { name: "Lena", aliases: [] },
      { name: "Niger", aliases: [] },
      { name: "Yangtze", aliases: [] }
    ]
  },
  { id: "soc-world-cup-winners", category: "Soccer", prompt: "Countries with most FIFA World Cup titles", hint: "Men's World Cup, through 2022",
    items: [
      { name: "Brazil", aliases: ["Brasil"] },
      { name: "Germany", aliases: ["West Germany", "Deutschland"] },
      { name: "Italy", aliases: ["Italia"] },
      { name: "Argentina", aliases: [] },
      { name: "France", aliases: ["Les Bleus"] },
      { name: "Uruguay", aliases: [] },
      { name: "England", aliases: [] },
      { name: "Spain", aliases: ["Espana"] },
      { name: "Netherlands", aliases: ["Holland"] },
      { name: "Hungary", aliases: []}
    ]
  },
  { id: "soc-ballon-dor-most-wins", category: "Soccer", prompt: "Most Ballon d'Or wins (men)", hint: "Career totals as of 2024",
    items: [
      { name: "Lionel Messi", aliases: ["Messi", "Leo Messi", "La Pulga"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7", "Ronaldo"] },
      { name: "Michel Platini", aliases: ["Platini"] },
      { name: "Johan Cruyff", aliases: ["Cruyff"] },
      { name: "Marco van Basten", aliases: ["Van Basten"] },
      { name: "Karl-Heinz Rummenigge", aliases: ["Rummenigge"] },
      { name: "Alfredo Di Stefano", aliases: ["Di Stefano"] },
      { name: "Ronaldo Nazario", aliases: ["R9", "Brazilian Ronaldo"] },
      { name: "Franz Beckenbauer", aliases: ["Beckenbauer", "Der Kaiser"] },
      { name: "Kevin Keegan", aliases: ["Keegan"] }
    ]
  },
  { id: "soc-intl-top-scorers-men", category: "Soccer", prompt: "All-time top international goal scorers (men)", hint: "Career international goals",
    items: [
      { name: "Cristiano Ronaldo", aliases: ["CR7", "Ronaldo"] },
      { name: "Lionel Messi", aliases: ["Messi", "Leo Messi"] },
      { name: "Ali Daei", aliases: ["Daei"] },
      { name: "Sunil Chhetri", aliases: ["Chhetri"] },
      { name: "Mokhtar Dahari", aliases: ["Dahari"] },
      { name: "Ferenc Puskas", aliases: ["Puskas"] },
      { name: "Godfrey Chitalu", aliases: ["Chitalu"] },
      { name: "Hussein Saeed", aliases: ["Saeed"] },
      { name: "Pele", aliases: ["Edson Arantes do Nascimento"] },
      { name: "Robert Lewandowski", aliases: ["Lewandowski"] }
    ]
  },
  { id: "soc-ucl-top-scorers", category: "Soccer", prompt: "All-time UEFA Champions League top scorers", hint: "Including European Cup era",
    items: [
      { name: "Cristiano Ronaldo", aliases: ["CR7", "Ronaldo"] },
      { name: "Lionel Messi", aliases: ["Messi", "Leo Messi"] },
      { name: "Robert Lewandowski", aliases: ["Lewandowski"] },
      { name: "Karim Benzema", aliases: ["Benzema"] },
      { name: "Raul", aliases: ["Raul Gonzalez"] },
      { name: "Ruud van Nistelrooy", aliases: ["Van Nistelrooy"] },
      { name: "Thomas Muller", aliases: ["Muller"] },
      { name: "Thierry Henry", aliases: ["Henry"] },
      { name: "Alfredo Di Stefano", aliases: ["Di Stefano"] },
      { name: "Andriy Shevchenko", aliases: ["Shevchenko"] }
    ]
  },
  { id: "soc-laliga-top-scorers", category: "Soccer", prompt: "All-time La Liga top scorers", hint: "Spanish top-flight career goals",
    items: [
      { name: "Lionel Messi", aliases: ["Messi", "Leo Messi"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7", "Ronaldo"] },
      { name: "Telmo Zarra", aliases: ["Zarra"] },
      { name: "Karim Benzema", aliases: ["Benzema"] },
      { name: "Hugo Sanchez", aliases: ["Sanchez"] },
      { name: "Raul", aliases: ["Raul Gonzalez"] },
      { name: "Alfredo Di Stefano", aliases: ["Di Stefano"] },
      { name: "Cesar Rodriguez", aliases: ["Cesar"] },
      { name: "Quini", aliases: ["Enrique Castro"] },
      { name: "Pahino", aliases: ["Manuel Fernandez"] }
    ]
  },
  { id: "soc-premier-league-top-scorers", category: "Soccer", prompt: "All-time Premier League top scorers", hint: "From 1992 onwards",
    items: [
      { name: "Alan Shearer", aliases: ["Shearer"] },
      { name: "Harry Kane", aliases: ["Kane"] },
      { name: "Wayne Rooney", aliases: ["Rooney"] },
      { name: "Mohamed Salah", aliases: ["Salah"] },
      { name: "Andrew Cole", aliases: ["Andy Cole"] },
      { name: "Sergio Aguero", aliases: ["Aguero", "Kun Aguero"] },
      { name: "Frank Lampard", aliases: ["Lampard"] },
      { name: "Thierry Henry", aliases: ["Henry"] },
      { name: "Robbie Fowler", aliases: ["Fowler"] },
      { name: "Jermain Defoe", aliases: ["Defoe"] }
    ]
  },
  { id: "soc-bundesliga-top-scorers", category: "Soccer", prompt: "All-time Bundesliga top scorers", hint: "Since 1963 founding",
    items: [
      { name: "Gerd Muller", aliases: ["Muller", "Der Bomber"] },
      { name: "Robert Lewandowski", aliases: ["Lewandowski"] },
      { name: "Klaus Fischer", aliases: ["Fischer"] },
      { name: "Jupp Heynckes", aliases: ["Heynckes"] },
      { name: "Manfred Burgsmuller", aliases: ["Burgsmuller"] },
      { name: "Claudio Pizarro", aliases: ["Pizarro"] },
      { name: "Ulf Kirsten", aliases: ["Kirsten"] },
      { name: "Stefan Kuntz", aliases: ["Kuntz"] },
      { name: "Dieter Muller", aliases: [] },
      { name: "Klaus Allofs", aliases: ["Allofs"] }
    ]
  },
  { id: "soc-serie-a-top-scorers", category: "Soccer", prompt: "All-time Serie A top scorers", hint: "Italian top flight career goals",
    items: [
      { name: "Silvio Piola", aliases: ["Piola"] },
      { name: "Francesco Totti", aliases: ["Totti"] },
      { name: "Gunnar Nordahl", aliases: ["Nordahl"] },
      { name: "Giuseppe Meazza", aliases: ["Meazza"] },
      { name: "Jose Altafini", aliases: ["Altafini"] },
      { name: "Antonio Di Natale", aliases: ["Di Natale"] },
      { name: "Roberto Baggio", aliases: ["Baggio"] },
      { name: "Kurt Hamrin", aliases: ["Hamrin"] },
      { name: "Giuseppe Signori", aliases: ["Signori"] },
      { name: "Alessandro Del Piero", aliases: ["Del Piero"] }
    ]
  },
  { id: "soc-ligue1-top-scorers", category: "Soccer", prompt: "All-time Ligue 1 top scorers", hint: "French top flight career goals",
    items: [
      { name: "Delio Onnis", aliases: ["Onnis"] },
      { name: "Bernard Lacombe", aliases: ["Lacombe"] },
      { name: "Herve Revelli", aliases: ["Revelli"] },
      { name: "Roger Courtois", aliases: ["Courtois"] },
      { name: "Thadee Cisowski", aliases: ["Cisowski"] },
      { name: "Joseph Ujlaki", aliases: ["Ujlaki"] },
      { name: "Roger Piantoni", aliases: ["Piantoni"] },
      { name: "Carlos Bianchi", aliases: ["Bianchi"] },
      { name: "Fleury Di Nallo", aliases: ["Di Nallo"] },
      { name: "Jean-Pierre Papin", aliases: ["Papin"] }
    ]
  },
  { id: "soc-wc-goals-all-time", category: "Soccer", prompt: "Most goals in FIFA World Cup history (players)", hint: "All-time men's World Cup",
    items: [
      { name: "Miroslav Klose", aliases: ["Klose"] },
      { name: "Ronaldo Nazario", aliases: ["R9", "Brazilian Ronaldo"] },
      { name: "Gerd Muller", aliases: ["Muller"] },
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Just Fontaine", aliases: ["Fontaine"] },
      { name: "Pele", aliases: ["Edson Arantes do Nascimento"] },
      { name: "Kylian Mbappe", aliases: ["Mbappe"] },
      { name: "Sandor Kocsis", aliases: ["Kocsis"] },
      { name: "Jurgen Klinsmann", aliases: ["Klinsmann"] },
      { name: "Helmut Rahn", aliases: ["Rahn"] }
    ]
  },
  { id: "soc-wc-appearances", category: "Soccer", prompt: "Most World Cup match appearances (players)", hint: "Career matches at the World Cup",
    items: [
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Lothar Matthaus", aliases: ["Matthaus"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7", "Ronaldo"] },
      { name: "Miroslav Klose", aliases: ["Klose"] },
      { name: "Paolo Maldini", aliases: ["Maldini"] },
      { name: "Diego Maradona", aliases: ["Maradona"] },
      { name: "Uwe Seeler", aliases: ["Seeler"] },
      { name: "Wladyslaw Zmuda", aliases: ["Zmuda"] },
      { name: "Manuel Neuer", aliases: ["Neuer"] },
      { name: "Rafael Marquez", aliases: ["Marquez"] }
    ]
  },
  { id: "soc-most-caps-men", category: "Soccer", prompt: "Most international caps in men's football", hint: "All-time international appearances",
    items: [
      { name: "Bader Al-Mutawa", aliases: ["Al-Mutawa"] },
      { name: "Soh Chin Ann", aliases: ["Chin Ann"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7", "Ronaldo"] },
      { name: "Ahmed Hassan", aliases: ["Hassan"] },
      { name: "Ahmed Mubarak", aliases: ["Mubarak"] },
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Claudio Suarez", aliases: ["Suarez"] },
      { name: "Mohamed Al-Deayea", aliases: ["Al-Deayea"] },
      { name: "Ivan Hurtado", aliases: ["Hurtado"] },
      { name: "Vitalijs Astafjevs", aliases: ["Astafjevs"] }
    ]
  },
  { id: "soc-ucl-titles-clubs", category: "Soccer", prompt: "Clubs with most UEFA Champions League titles", hint: "Including European Cup era",
    items: [
      { name: "Real Madrid", aliases: ["Madrid", "Los Blancos"] },
      { name: "AC Milan", aliases: ["Milan", "Rossoneri"] },
      { name: "Bayern Munich", aliases: ["Bayern", "FC Bayern"] },
      { name: "Liverpool", aliases: ["LFC"] },
      { name: "Barcelona", aliases: ["FC Barcelona", "Barca"] },
      { name: "Ajax", aliases: ["AFC Ajax"] },
      { name: "Manchester United", aliases: ["Man United", "Man Utd", "United"] },
      { name: "Inter Milan", aliases: ["Inter", "Internazionale"] },
      { name: "Chelsea", aliases: ["CFC"] },
      { name: "Benfica", aliases: ["SL Benfica"] }
    ]
  },
  { id: "soc-premier-league-titles", category: "Soccer", prompt: "Clubs with most Premier League titles", hint: "1992 onward",
    items: [
      { name: "Manchester United", aliases: ["Man United", "Man Utd"] },
      { name: "Manchester City", aliases: ["Man City"] },
      { name: "Chelsea", aliases: ["CFC"] },
      { name: "Arsenal", aliases: ["AFC"] },
      { name: "Liverpool", aliases: ["LFC"] },
      { name: "Leicester City", aliases: ["Leicester"] },
      { name: "Blackburn Rovers", aliases: ["Blackburn"] },
      { name: "Tottenham Hotspur", aliases: ["Spurs", "Tottenham"] },
      { name: "Newcastle United", aliases: ["Newcastle"] },
      { name: "Everton", aliases: ["EFC"] }
    ]
  },
  { id: "soc-laliga-titles", category: "Soccer", prompt: "Clubs with most La Liga titles", hint: "Spanish top division",
    items: [
      { name: "Real Madrid", aliases: ["Madrid"] },
      { name: "Barcelona", aliases: ["FC Barcelona", "Barca"] },
      { name: "Atletico Madrid", aliases: ["Atletico", "Atleti"] },
      { name: "Athletic Bilbao", aliases: ["Athletic Club"] },
      { name: "Valencia", aliases: ["Valencia CF"] },
      { name: "Real Sociedad", aliases: ["La Real"] },
      { name: "Real Betis", aliases: ["Betis"] },
      { name: "Deportivo La Coruna", aliases: ["Deportivo"] },
      { name: "Sevilla", aliases: ["Sevilla FC"] },
      { name: "Real Madrid Castilla", aliases: ["Castilla"] }
    ]
  },
  { id: "soc-serie-a-titles", category: "Soccer", prompt: "Clubs with most Serie A titles", hint: "Scudetto winners",
    items: [
      { name: "Juventus", aliases: ["Juve", "Bianconeri"] },
      { name: "AC Milan", aliases: ["Milan"] },
      { name: "Inter Milan", aliases: ["Inter", "Internazionale"] },
      { name: "Genoa", aliases: ["Genoa CFC"] },
      { name: "Bologna", aliases: ["Bologna FC"] },
      { name: "Pro Vercelli", aliases: ["Vercelli"] },
      { name: "Torino", aliases: ["Toro"] },
      { name: "Roma", aliases: ["AS Roma"] },
      { name: "Napoli", aliases: ["SSC Napoli"] },
      { name: "Lazio", aliases: ["SS Lazio"] }
    ]
  },
  { id: "soc-bundesliga-titles", category: "Soccer", prompt: "Clubs with most Bundesliga titles", hint: "Since 1963",
    items: [
      { name: "Bayern Munich", aliases: ["Bayern", "FC Bayern"] },
      { name: "Borussia Monchengladbach", aliases: ["Gladbach"] },
      { name: "Borussia Dortmund", aliases: ["BVB", "Dortmund"] },
      { name: "Werder Bremen", aliases: ["Bremen"] },
      { name: "Hamburger SV", aliases: ["Hamburg", "HSV"] },
      { name: "VfB Stuttgart", aliases: ["Stuttgart"] },
      { name: "1. FC Koln", aliases: ["Koln", "Cologne"] },
      { name: "Bayer Leverkusen", aliases: ["Leverkusen"] },
      { name: "Kaiserslautern", aliases: ["FC Kaiserslautern"] },
      { name: "Eintracht Braunschweig", aliases: ["Braunschweig"] }
    ]
  },
  { id: "soc-most-expensive-transfers", category: "Soccer", prompt: "Most expensive football transfers ever", hint: "Confirmed transfer fees",
    items: [
      { name: "Neymar (to PSG)", aliases: ["Neymar"] },
      { name: "Kylian Mbappe (to PSG)", aliases: ["Mbappe"] },
      { name: "Ousmane Dembele (to Barcelona)", aliases: ["Dembele"] },
      { name: "Philippe Coutinho (to Barcelona)", aliases: ["Coutinho"] },
      { name: "Joao Felix (to Atletico Madrid)", aliases: ["Joao Felix"] },
      { name: "Enzo Fernandez (to Chelsea)", aliases: ["Enzo"] },
      { name: "Antoine Griezmann (to Barcelona)", aliases: ["Griezmann"] },
      { name: "Jack Grealish (to Manchester City)", aliases: ["Grealish"] },
      { name: "Romelu Lukaku (to Chelsea)", aliases: ["Lukaku"] },
      { name: "Moises Caicedo (to Chelsea)", aliases: ["Caicedo"] }
    ]
  },
  { id: "soc-most-followed-instagram", category: "Soccer", prompt: "Most-followed footballers on Instagram", hint: "Active and retired players",
    items: [
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Neymar", aliases: ["Neymar Jr"] },
      { name: "Kylian Mbappe", aliases: ["Mbappe"] },
      { name: "David Beckham", aliases: ["Beckham"] },
      { name: "Ronaldinho", aliases: ["Ronaldinho Gaucho"] },
      { name: "Karim Benzema", aliases: ["Benzema"] },
      { name: "Marcelo", aliases: ["Marcelo Vieira"] },
      { name: "Mohamed Salah", aliases: ["Salah"] },
      { name: "James Rodriguez", aliases: ["James"] }
    ]
  },
  { id: "soc-fifa-rank-top", category: "Soccer", prompt: "Top FIFA-ranked men's national teams (recent)", hint: "Based on recent rankings",
    items: [
      { name: "Argentina", aliases: [] },
      { name: "France", aliases: ["Les Bleus"] },
      { name: "Spain", aliases: ["Espana"] },
      { name: "England", aliases: [] },
      { name: "Brazil", aliases: ["Brasil"] },
      { name: "Portugal", aliases: [] },
      { name: "Netherlands", aliases: ["Holland"] },
      { name: "Belgium", aliases: ["Red Devils"] },
      { name: "Croatia", aliases: ["Hrvatska"] },
      { name: "Italy", aliases: ["Italia"] }
    ]
  },
  { id: "soc-copa-america-wins", category: "Soccer", prompt: "Most Copa America titles (countries)", hint: "South American championship",
    items: [
      { name: "Argentina", aliases: [] },
      { name: "Uruguay", aliases: [] },
      { name: "Brazil", aliases: ["Brasil"] },
      { name: "Chile", aliases: [] },
      { name: "Paraguay", aliases: [] },
      { name: "Peru", aliases: [] },
      { name: "Bolivia", aliases: [] },
      { name: "Colombia", aliases: [] },
      { name: "Mexico", aliases: [] },
      { name: "Ecuador", aliases: [] }
    ]
  },
  { id: "soc-euro-wins", category: "Soccer", prompt: "Most UEFA European Championship titles (countries)", hint: "Men's Euros",
    items: [
      { name: "Germany", aliases: ["West Germany"] },
      { name: "Spain", aliases: ["Espana"] },
      { name: "Italy", aliases: ["Italia"] },
      { name: "France", aliases: ["Les Bleus"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Czechoslovakia", aliases: [] },
      { name: "Netherlands", aliases: ["Holland"] },
      { name: "Denmark", aliases: [] },
      { name: "Greece", aliases: [] },
      { name: "Portugal", aliases: [] }
    ]
  },
  { id: "soc-copa-libertadores-titles", category: "Soccer", prompt: "Clubs with most Copa Libertadores titles", hint: "South American club championship",
    items: [
      { name: "Independiente", aliases: ["CA Independiente"] },
      { name: "Boca Juniors", aliases: ["Boca"] },
      { name: "Penarol", aliases: ["CA Penarol"] },
      { name: "River Plate", aliases: ["River"] },
      { name: "Estudiantes", aliases: ["Estudiantes La Plata"] },
      { name: "Olimpia", aliases: ["Club Olimpia"] },
      { name: "Nacional", aliases: ["Club Nacional"] },
      { name: "Santos", aliases: ["Santos FC"] },
      { name: "Sao Paulo", aliases: ["Sao Paulo FC"] },
      { name: "Gremio", aliases: ["Gremio FBPA"] }
    ]
  },
  { id: "soc-stadium-capacity", category: "Soccer", prompt: "Largest football stadiums in the world by capacity", hint: "Used for football regularly",
    items: [
      { name: "Rungrado May Day Stadium", aliases: ["May Day Stadium"] },
      { name: "Camp Nou", aliases: ["Spotify Camp Nou"] },
      { name: "Estadio Azteca", aliases: ["Azteca"] },
      { name: "FNB Stadium", aliases: ["Soccer City"] },
      { name: "Wembley Stadium", aliases: ["Wembley"] },
      { name: "Rose Bowl", aliases: [] },
      { name: "Bukit Jalil National Stadium", aliases: ["Bukit Jalil"] },
      { name: "Borg El Arab Stadium", aliases: ["Borg El Arab"] },
      { name: "Estadio Monumental", aliases: ["Monumental Lima"] },
      { name: "MetLife Stadium", aliases: ["MetLife"] }
    ]
  },
  { id: "soc-most-managed-games", category: "Soccer", prompt: "Coaches with most matches managed in football history", hint: "Career club + national team games",
    items: [
      { name: "Sir Alex Ferguson", aliases: ["Ferguson"] },
      { name: "Arsene Wenger", aliases: ["Wenger"] },
      { name: "Arrigo Sacchi", aliases: ["Sacchi"] },
      { name: "Carlo Ancelotti", aliases: ["Ancelotti"] },
      { name: "Jose Mourinho", aliases: ["Mourinho"] },
      { name: "Marcelo Bielsa", aliases: ["Bielsa"] },
      { name: "Sven-Goran Eriksson", aliases: ["Eriksson"] },
      { name: "Fabio Capello", aliases: ["Capello"] },
      { name: "Giovanni Trapattoni", aliases: ["Trapattoni"] },
      { name: "Manuel Pellegrini", aliases: ["Pellegrini"] }
    ]
  },
  { id: "soc-ballon-dor-feminin", category: "Soccer", prompt: "Ballon d'Or Feminin winners (by player)", hint: "Women's Ballon d'Or",
    items: [
      { name: "Ada Hegerberg", aliases: ["Hegerberg"] },
      { name: "Megan Rapinoe", aliases: ["Rapinoe"] },
      { name: "Alexia Putellas", aliases: ["Putellas"] },
      { name: "Aitana Bonmati", aliases: ["Bonmati"] },
      { name: "Barbra Banda", aliases: ["Banda"] },
      { name: "Sam Kerr", aliases: ["Kerr"] },
      { name: "Marta", aliases: ["Marta Vieira"] },
      { name: "Wendie Renard", aliases: ["Renard"] },
      { name: "Lucy Bronze", aliases: ["Bronze"] },
      { name: "Pernille Harder", aliases: ["Harder"] }
    ]
  },
  { id: "soc-women-top-intl-scorers", category: "Soccer", prompt: "Top international goal scorers in women's football", hint: "Career international goals",
    items: [
      { name: "Christine Sinclair", aliases: ["Sinclair"] },
      { name: "Abby Wambach", aliases: ["Wambach"] },
      { name: "Mia Hamm", aliases: ["Hamm"] },
      { name: "Marta", aliases: ["Marta Vieira"] },
      { name: "Birgit Prinz", aliases: ["Prinz"] },
      { name: "Carli Lloyd", aliases: ["Lloyd"] },
      { name: "Kristine Lilly", aliases: ["Lilly"] },
      { name: "Alex Morgan", aliases: ["Morgan"] },
      { name: "Sun Wen", aliases: ["Wen"] },
      { name: "Bettina Wiegmann", aliases: ["Wiegmann"] }
    ]
  },
  { id: "soc-wc-hosts", category: "Soccer", prompt: "Countries that hosted the FIFA World Cup (selected)", hint: "Men's World Cup hosts",
    items: [
      { name: "Brazil", aliases: ["Brasil"] },
      { name: "Mexico", aliases: [] },
      { name: "Italy", aliases: ["Italia"] },
      { name: "France", aliases: [] },
      { name: "Germany", aliases: ["West Germany"] },
      { name: "Uruguay", aliases: [] },
      { name: "Argentina", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "United States", aliases: ["USA"] },
      { name: "South Africa", aliases: [] }
    ]
  },
  { id: "soc-greatest-brazilians", category: "Soccer", prompt: "Greatest Brazilian footballers of all time", hint: "Consensus all-time list",
    items: [
      { name: "Pele", aliases: ["Edson Arantes do Nascimento"] },
      { name: "Ronaldo Nazario", aliases: ["R9"] },
      { name: "Ronaldinho", aliases: ["Ronaldinho Gaucho"] },
      { name: "Zico", aliases: ["Arthur Antunes"] },
      { name: "Romario", aliases: [] },
      { name: "Garrincha", aliases: ["Mane Garrincha"] },
      { name: "Rivaldo", aliases: [] },
      { name: "Roberto Carlos", aliases: [] },
      { name: "Cafu", aliases: [] },
      { name: "Socrates", aliases: [] }
    ]
  },
  { id: "soc-greatest-argentines", category: "Soccer", prompt: "Greatest Argentine footballers of all time", hint: "Consensus all-time list",
    items: [
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Diego Maradona", aliases: ["Maradona"] },
      { name: "Alfredo Di Stefano", aliases: ["Di Stefano"] },
      { name: "Daniel Passarella", aliases: ["Passarella"] },
      { name: "Mario Kempes", aliases: ["Kempes"] },
      { name: "Gabriel Batistuta", aliases: ["Batistuta", "Batigol"] },
      { name: "Juan Roman Riquelme", aliases: ["Riquelme"] },
      { name: "Omar Sivori", aliases: ["Sivori"] },
      { name: "Sergio Aguero", aliases: ["Aguero", "Kun"] },
      { name: "Javier Zanetti", aliases: ["Zanetti"] }
    ]
  },
  { id: "soc-greatest-germans", category: "Soccer", prompt: "Greatest German footballers of all time", hint: "Consensus all-time list",
    items: [
      { name: "Franz Beckenbauer", aliases: ["Beckenbauer", "Der Kaiser"] },
      { name: "Gerd Muller", aliases: ["Muller"] },
      { name: "Lothar Matthaus", aliases: ["Matthaus"] },
      { name: "Sepp Maier", aliases: ["Maier"] },
      { name: "Karl-Heinz Rummenigge", aliases: ["Rummenigge"] },
      { name: "Fritz Walter", aliases: ["Walter"] },
      { name: "Uwe Seeler", aliases: ["Seeler"] },
      { name: "Paul Breitner", aliases: ["Breitner"] },
      { name: "Oliver Kahn", aliases: ["Kahn"] },
      { name: "Philipp Lahm", aliases: ["Lahm"] }
    ]
  },
  { id: "soc-greatest-italians", category: "Soccer", prompt: "Greatest Italian footballers of all time", hint: "Consensus all-time list",
    items: [
      { name: "Paolo Maldini", aliases: ["Maldini"] },
      { name: "Roberto Baggio", aliases: ["Baggio"] },
      { name: "Franco Baresi", aliases: ["Baresi"] },
      { name: "Gianluigi Buffon", aliases: ["Buffon"] },
      { name: "Giuseppe Meazza", aliases: ["Meazza"] },
      { name: "Dino Zoff", aliases: ["Zoff"] },
      { name: "Andrea Pirlo", aliases: ["Pirlo"] },
      { name: "Alessandro Del Piero", aliases: ["Del Piero"] },
      { name: "Francesco Totti", aliases: ["Totti"] },
      { name: "Fabio Cannavaro", aliases: ["Cannavaro"] }
    ]
  },
  { id: "soc-greatest-french", category: "Soccer", prompt: "Greatest French footballers of all time", hint: "Consensus all-time list",
    items: [
      { name: "Zinedine Zidane", aliases: ["Zidane", "Zizou"] },
      { name: "Michel Platini", aliases: ["Platini"] },
      { name: "Thierry Henry", aliases: ["Henry"] },
      { name: "Raymond Kopa", aliases: ["Kopa"] },
      { name: "Just Fontaine", aliases: ["Fontaine"] },
      { name: "Didier Deschamps", aliases: ["Deschamps"] },
      { name: "Patrick Vieira", aliases: ["Vieira"] },
      { name: "Kylian Mbappe", aliases: ["Mbappe"] },
      { name: "Lilian Thuram", aliases: ["Thuram"] },
      { name: "Marcel Desailly", aliases: ["Desailly"] }
    ]
  },
  { id: "soc-consecutive-league-titles", category: "Soccer", prompt: "Clubs with most consecutive top-flight league titles", hint: "Major European leagues",
    items: [
      { name: "BATE Borisov", aliases: ["BATE"] },
      { name: "Lincoln Red Imps", aliases: ["Lincoln"] },
      { name: "Skonto Riga", aliases: ["Skonto"] },
      { name: "Rosenborg", aliases: ["Rosenborg BK"] },
      { name: "Juventus", aliases: ["Juve"] },
      { name: "Bayern Munich", aliases: ["Bayern"] },
      { name: "Olympiacos", aliases: ["Olympiakos"] },
      { name: "Celtic", aliases: ["Celtic FC"] },
      { name: "Dinamo Zagreb", aliases: ["Dinamo"] },
      { name: "MTK Budapest", aliases: ["MTK"] }
    ]
  },
  { id: "soc-oldest-clubs", category: "Soccer", prompt: "Oldest football clubs still active", hint: "Founded earliest",
    items: [
      { name: "Sheffield FC", aliases: ["Sheffield"] },
      { name: "Cray Wanderers", aliases: [] },
      { name: "Hallam FC", aliases: ["Hallam"] },
      { name: "Notts County", aliases: [] },
      { name: "Stoke City", aliases: ["Stoke"] },
      { name: "Nottingham Forest", aliases: ["Forest"] },
      { name: "Wrexham", aliases: ["Wrexham AFC"] },
      { name: "Sheffield Wednesday", aliases: ["Wednesday"] },
      { name: "Reading", aliases: ["Reading FC"] },
      { name: "Queen's Park", aliases: ["Queens Park"] }
    ]
  },
  { id: "soc-most-club-goals-all-time", category: "Soccer", prompt: "Most career club goals (top scorers)", hint: "Official career club totals",
    items: [
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Pele", aliases: ["Edson Arantes do Nascimento"] },
      { name: "Romario", aliases: [] },
      { name: "Ferenc Puskas", aliases: ["Puskas"] },
      { name: "Josef Bican", aliases: ["Bican"] },
      { name: "Gerd Muller", aliases: ["Muller"] },
      { name: "Robert Lewandowski", aliases: ["Lewandowski"] },
      { name: "Eusebio", aliases: [] },
      { name: "Jimmy Jones", aliases: [] }
    ]
  },
  { id: "soc-yashin-winners", category: "Soccer", prompt: "Yashin Trophy winners (best goalkeeper)", hint: "Awarded since 2019",
    items: [
      { name: "Alisson Becker", aliases: ["Alisson"] },
      { name: "Gianluigi Donnarumma", aliases: ["Donnarumma"] },
      { name: "Thibaut Courtois", aliases: ["Courtois"] },
      { name: "Emiliano Martinez", aliases: ["Dibu Martinez"] },
      { name: "Manuel Neuer", aliases: ["Neuer"] },
      { name: "Edouard Mendy", aliases: ["Mendy"] },
      { name: "Jan Oblak", aliases: ["Oblak"] },
      { name: "Marc-Andre ter Stegen", aliases: ["ter Stegen"] },
      { name: "Mike Maignan", aliases: ["Maignan"] },
      { name: "Yassine Bounou", aliases: ["Bono"] }
    ]
  },
  { id: "soc-greatest-goalkeepers", category: "Soccer", prompt: "Greatest goalkeepers in football history", hint: "All-time consensus",
    items: [
      { name: "Lev Yashin", aliases: ["Yashin"] },
      { name: "Gianluigi Buffon", aliases: ["Buffon"] },
      { name: "Iker Casillas", aliases: ["Casillas"] },
      { name: "Manuel Neuer", aliases: ["Neuer"] },
      { name: "Oliver Kahn", aliases: ["Kahn"] },
      { name: "Peter Schmeichel", aliases: ["Schmeichel"] },
      { name: "Dino Zoff", aliases: ["Zoff"] },
      { name: "Gordon Banks", aliases: ["Banks"] },
      { name: "Edwin van der Sar", aliases: ["Van der Sar"] },
      { name: "Petr Cech", aliases: ["Cech"] }
    ]
  },
  { id: "soc-most-goals-laliga-season", category: "Soccer", prompt: "Most goals in a single La Liga season", hint: "Single-season record holders",
    items: [
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Hugo Sanchez", aliases: ["Sanchez"] },
      { name: "Telmo Zarra", aliases: ["Zarra"] },
      { name: "Luis Suarez", aliases: ["Suarez"] },
      { name: "Karim Benzema", aliases: ["Benzema"] },
      { name: "Ronaldo Nazario", aliases: ["R9"] },
      { name: "Diego Forlan", aliases: ["Forlan"] },
      { name: "Robert Lewandowski", aliases: ["Lewandowski"] },
      { name: "Radamel Falcao", aliases: ["Falcao"] }
    ]
  },
  { id: "soc-most-goals-premier-league-season", category: "Soccer", prompt: "Most goals in a single Premier League season", hint: "1992 onward",
    items: [
      { name: "Erling Haaland", aliases: ["Haaland"] },
      { name: "Mohamed Salah", aliases: ["Salah"] },
      { name: "Alan Shearer", aliases: ["Shearer"] },
      { name: "Andy Cole", aliases: ["Cole"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Luis Suarez", aliases: ["Suarez"] },
      { name: "Harry Kane", aliases: ["Kane"] },
      { name: "Robin van Persie", aliases: ["Van Persie"] },
      { name: "Sergio Aguero", aliases: ["Aguero"] },
      { name: "Thierry Henry", aliases: ["Henry"] }
    ]
  },
  { id: "soc-most-goals-bundesliga-season", category: "Soccer", prompt: "Most goals in a single Bundesliga season", hint: "Top single-season tallies",
    items: [
      { name: "Robert Lewandowski", aliases: ["Lewandowski"] },
      { name: "Gerd Muller", aliases: ["Muller"] },
      { name: "Dieter Muller", aliases: [] },
      { name: "Klaus Fischer", aliases: ["Fischer"] },
      { name: "Karl-Heinz Rummenigge", aliases: ["Rummenigge"] },
      { name: "Ulf Kirsten", aliases: ["Kirsten"] },
      { name: "Mario Gomez", aliases: ["Gomez"] },
      { name: "Stefan Kuntz", aliases: ["Kuntz"] },
      { name: "Roland Wohlfarth", aliases: ["Wohlfarth"] },
      { name: "Anthony Modeste", aliases: ["Modeste"] }
    ]
  },
  { id: "soc-most-ucl-titles-players", category: "Soccer", prompt: "Players with most Champions League titles", hint: "European Cup era included",
    items: [
      { name: "Francisco Gento", aliases: ["Gento"] },
      { name: "Dani Carvajal", aliases: ["Carvajal"] },
      { name: "Luka Modric", aliases: ["Modric"] },
      { name: "Nacho Fernandez", aliases: ["Nacho"] },
      { name: "Toni Kroos", aliases: ["Kroos"] },
      { name: "Karim Benzema", aliases: ["Benzema"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Marcelo", aliases: ["Marcelo Vieira"] },
      { name: "Sergio Ramos", aliases: ["Ramos"] },
      { name: "Paco Gento", aliases: [] }
    ]
  },
  { id: "soc-most-fa-cup-wins", category: "Soccer", prompt: "Clubs with most FA Cup wins", hint: "World's oldest national football competition",
    items: [
      { name: "Manchester United", aliases: ["Man United"] },
      { name: "Arsenal", aliases: ["AFC"] },
      { name: "Chelsea", aliases: ["CFC"] },
      { name: "Tottenham Hotspur", aliases: ["Spurs"] },
      { name: "Liverpool", aliases: ["LFC"] },
      { name: "Aston Villa", aliases: ["Villa"] },
      { name: "Manchester City", aliases: ["Man City"] },
      { name: "Newcastle United", aliases: ["Newcastle"] },
      { name: "Blackburn Rovers", aliases: ["Blackburn"] },
      { name: "Everton", aliases: ["EFC"] }
    ]
  },
  { id: "soc-african-cup-of-nations", category: "Soccer", prompt: "Countries with most Africa Cup of Nations titles", hint: "AFCON winners",
    items: [
      { name: "Egypt", aliases: [] },
      { name: "Cameroon", aliases: [] },
      { name: "Ghana", aliases: [] },
      { name: "Nigeria", aliases: [] },
      { name: "Ivory Coast", aliases: ["Cote d'Ivoire"] },
      { name: "Algeria", aliases: [] },
      { name: "DR Congo", aliases: ["Congo DR", "Zaire"] },
      { name: "Senegal", aliases: [] },
      { name: "Morocco", aliases: [] },
      { name: "Ethiopia", aliases: [] }
    ]
  },
  { id: "soc-asian-cup-wins", category: "Soccer", prompt: "Countries with most AFC Asian Cup titles", hint: "Asian championship",
    items: [
      { name: "Japan", aliases: [] },
      { name: "Saudi Arabia", aliases: [] },
      { name: "Iran", aliases: [] },
      { name: "Qatar", aliases: [] },
      { name: "South Korea", aliases: ["Korea Republic"] },
      { name: "Iraq", aliases: [] },
      { name: "Australia", aliases: ["Socceroos"] },
      { name: "Israel", aliases: [] },
      { name: "Kuwait", aliases: [] },
      { name: "Lebanon", aliases: [] }
    ]
  },
  { id: "soc-wc-finals-appearances", category: "Soccer", prompt: "Countries with most World Cup final appearances", hint: "Men's WC finals reached",
    items: [
      { name: "Germany", aliases: ["West Germany"] },
      { name: "Brazil", aliases: ["Brasil"] },
      { name: "Italy", aliases: ["Italia"] },
      { name: "Argentina", aliases: [] },
      { name: "France", aliases: [] },
      { name: "Netherlands", aliases: ["Holland"] },
      { name: "Uruguay", aliases: [] },
      { name: "Hungary", aliases: [] },
      { name: "Czechoslovakia", aliases: [] },
      { name: "Sweden", aliases: [] }
    ]
  },
  { id: "soc-most-european-trophies", category: "Soccer", prompt: "Clubs with most UEFA trophies (all competitions)", hint: "Combined European silverware",
    items: [
      { name: "Real Madrid", aliases: ["Madrid"] },
      { name: "Barcelona", aliases: ["FC Barcelona", "Barca"] },
      { name: "AC Milan", aliases: ["Milan"] },
      { name: "Bayern Munich", aliases: ["Bayern"] },
      { name: "Liverpool", aliases: ["LFC"] },
      { name: "Juventus", aliases: ["Juve"] },
      { name: "Inter Milan", aliases: ["Inter"] },
      { name: "Chelsea", aliases: ["CFC"] },
      { name: "Manchester United", aliases: ["Man United"] },
      { name: "Sevilla", aliases: ["Sevilla FC"] }
    ]
  },
  { id: "soc-euro-top-scorers", category: "Soccer", prompt: "All-time top scorers at the UEFA European Championship", hint: "Career Euro finals goals",
    items: [
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Michel Platini", aliases: ["Platini"] },
      { name: "Alan Shearer", aliases: ["Shearer"] },
      { name: "Antoine Griezmann", aliases: ["Griezmann"] },
      { name: "Patrick Kluivert", aliases: ["Kluivert"] },
      { name: "Wayne Rooney", aliases: ["Rooney"] },
      { name: "Ruud van Nistelrooy", aliases: ["Van Nistelrooy"] },
      { name: "Thierry Henry", aliases: ["Henry"] },
      { name: "Zlatan Ibrahimovic", aliases: ["Ibrahimovic", "Ibra"] },
      { name: "Nuno Gomes", aliases: [] }
    ]
  },
  { id: "soc-copa-america-scorers", category: "Soccer", prompt: "All-time Copa America top scorers", hint: "Career goals at Copa America",
    items: [
      { name: "Norberto Mendez", aliases: ["Mendez"] },
      { name: "Zizinho", aliases: [] },
      { name: "Teodoro Fernandez", aliases: ["Fernandez"] },
      { name: "Severino Varela", aliases: ["Varela"] },
      { name: "Ademir", aliases: ["Ademir Marques"] },
      { name: "Jair Rosa Pinto", aliases: ["Jair"] },
      { name: "Hector Scarone", aliases: ["Scarone"] },
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Eduardo Vargas", aliases: ["Vargas"] },
      { name: "Paolo Guerrero", aliases: ["Guerrero"] }
    ]
  },
  { id: "soc-fifa-club-world-cup", category: "Soccer", prompt: "Clubs with most FIFA Club World Cup titles", hint: "Annual (pre-2025 format)",
    items: [
      { name: "Real Madrid", aliases: ["Madrid"] },
      { name: "Barcelona", aliases: ["FC Barcelona", "Barca"] },
      { name: "Bayern Munich", aliases: ["Bayern"] },
      { name: "Corinthians", aliases: [] },
      { name: "Inter Milan", aliases: ["Inter"] },
      { name: "AC Milan", aliases: ["Milan"] },
      { name: "Manchester United", aliases: ["Man United"] },
      { name: "Sao Paulo", aliases: ["Sao Paulo FC"] },
      { name: "Liverpool", aliases: ["LFC"] },
      { name: "Chelsea", aliases: ["CFC"] }
    ]
  },
  { id: "soc-coaches-most-ucl", category: "Soccer", prompt: "Coaches with most Champions League titles", hint: "European Cup era included",
    items: [
      { name: "Carlo Ancelotti", aliases: ["Ancelotti"] },
      { name: "Bob Paisley", aliases: ["Paisley"] },
      { name: "Zinedine Zidane", aliases: ["Zidane"] },
      { name: "Pep Guardiola", aliases: ["Guardiola"] },
      { name: "Alex Ferguson", aliases: ["Ferguson"] },
      { name: "Jose Mourinho", aliases: ["Mourinho"] },
      { name: "Jupp Heynckes", aliases: ["Heynckes"] },
      { name: "Ottmar Hitzfeld", aliases: ["Hitzfeld"] },
      { name: "Arrigo Sacchi", aliases: ["Sacchi"] },
      { name: "Fabio Capello", aliases: ["Capello"] }
    ]
  },
  { id: "soc-women-wc-titles", category: "Soccer", prompt: "Countries with most FIFA Women's World Cup titles", hint: "Through 2023",
    items: [
      { name: "United States", aliases: ["USA"] },
      { name: "Germany", aliases: [] },
      { name: "Norway", aliases: [] },
      { name: "Japan", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "Sweden", aliases: [] },
      { name: "Brazil", aliases: [] },
      { name: "Netherlands", aliases: ["Holland"] },
      { name: "England", aliases: [] },
      { name: "China", aliases: [] }
    ]
  },
  { id: "soc-wc-golden-boot", category: "Soccer", prompt: "Recent FIFA World Cup Golden Boot winners", hint: "Top scorer of the tournament",
    items: [
      { name: "Kylian Mbappe", aliases: ["Mbappe"] },
      { name: "Harry Kane", aliases: ["Kane"] },
      { name: "James Rodriguez", aliases: ["James"] },
      { name: "Thomas Muller", aliases: ["Muller"] },
      { name: "Miroslav Klose", aliases: ["Klose"] },
      { name: "Ronaldo Nazario", aliases: ["R9"] },
      { name: "Davor Suker", aliases: ["Suker"] },
      { name: "Oleg Salenko", aliases: ["Salenko"] },
      { name: "Hristo Stoichkov", aliases: ["Stoichkov"] },
      { name: "Salvatore Schillaci", aliases: ["Schillaci"] }
    ]
  },
  { id: "soc-laliga-clean-sheets", category: "Soccer", prompt: "Goalkeepers with most Zamora Trophy wins (La Liga)", hint: "Best GK award by GAA",
    items: [
      { name: "Antoni Ramallets", aliases: ["Ramallets"] },
      { name: "Victor Valdes", aliases: ["Valdes"] },
      { name: "Jan Oblak", aliases: ["Oblak"] },
      { name: "Francisco Buyo", aliases: ["Buyo"] },
      { name: "Andoni Zubizarreta", aliases: ["Zubizarreta"] },
      { name: "Miguel Reina", aliases: ["Reina"] },
      { name: "Salvador Sadurni", aliases: ["Sadurni"] },
      { name: "Jose Angel Iribar", aliases: ["Iribar"] },
      { name: "Carlos Pruden", aliases: ["Pruden"] },
      { name: "Diego Lopez", aliases: [] }
    ]
  },
  { id: "soc-bayern-legends", category: "Soccer", prompt: "Greatest Bayern Munich players of all time", hint: "Club legends",
    items: [
      { name: "Franz Beckenbauer", aliases: ["Beckenbauer"] },
      { name: "Gerd Muller", aliases: ["Muller"] },
      { name: "Karl-Heinz Rummenigge", aliases: ["Rummenigge"] },
      { name: "Oliver Kahn", aliases: ["Kahn"] },
      { name: "Sepp Maier", aliases: ["Maier"] },
      { name: "Philipp Lahm", aliases: ["Lahm"] },
      { name: "Bastian Schweinsteiger", aliases: ["Schweinsteiger"] },
      { name: "Lothar Matthaus", aliases: ["Matthaus"] },
      { name: "Manuel Neuer", aliases: ["Neuer"] },
      { name: "Robert Lewandowski", aliases: ["Lewandowski"] }
    ]
  },
  { id: "soc-real-madrid-legends", category: "Soccer", prompt: "Greatest Real Madrid players of all time", hint: "Club legends",
    items: [
      { name: "Alfredo Di Stefano", aliases: ["Di Stefano"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Raul", aliases: ["Raul Gonzalez"] },
      { name: "Zinedine Zidane", aliases: ["Zidane"] },
      { name: "Ferenc Puskas", aliases: ["Puskas"] },
      { name: "Iker Casillas", aliases: ["Casillas"] },
      { name: "Sergio Ramos", aliases: ["Ramos"] },
      { name: "Hugo Sanchez", aliases: ["Sanchez"] },
      { name: "Karim Benzema", aliases: ["Benzema"] },
      { name: "Francisco Gento", aliases: ["Gento"] }
    ]
  },
  { id: "soc-barcelona-legends", category: "Soccer", prompt: "Greatest Barcelona players of all time", hint: "Club legends",
    items: [
      { name: "Lionel Messi", aliases: ["Messi"] },
      { name: "Johan Cruyff", aliases: ["Cruyff"] },
      { name: "Xavi", aliases: ["Xavi Hernandez"] },
      { name: "Andres Iniesta", aliases: ["Iniesta"] },
      { name: "Ronaldinho", aliases: [] },
      { name: "Carles Puyol", aliases: ["Puyol"] },
      { name: "Ronald Koeman", aliases: ["Koeman"] },
      { name: "Romario", aliases: [] },
      { name: "Hristo Stoichkov", aliases: ["Stoichkov"] },
      { name: "Sergio Busquets", aliases: ["Busquets"] }
    ]
  },
  { id: "soc-manu-legends", category: "Soccer", prompt: "Greatest Manchester United players of all time", hint: "Club legends",
    items: [
      { name: "George Best", aliases: ["Best"] },
      { name: "Bobby Charlton", aliases: ["Charlton"] },
      { name: "Cristiano Ronaldo", aliases: ["CR7"] },
      { name: "Eric Cantona", aliases: ["Cantona"] },
      { name: "Ryan Giggs", aliases: ["Giggs"] },
      { name: "Paul Scholes", aliases: ["Scholes"] },
      { name: "Wayne Rooney", aliases: ["Rooney"] },
      { name: "Roy Keane", aliases: ["Keane"] },
      { name: "David Beckham", aliases: ["Beckham"] },
      { name: "Denis Law", aliases: ["Law"] }
    ]
  },
  { id: "soc-liverpool-legends", category: "Soccer", prompt: "Greatest Liverpool FC players of all time", hint: "Club legends",
    items: [
      { name: "Kenny Dalglish", aliases: ["Dalglish"] },
      { name: "Steven Gerrard", aliases: ["Gerrard"] },
      { name: "Ian Rush", aliases: ["Rush"] },
      { name: "John Barnes", aliases: ["Barnes"] },
      { name: "Mohamed Salah", aliases: ["Salah"] },
      { name: "Jamie Carragher", aliases: ["Carragher"] },
      { name: "Robbie Fowler", aliases: ["Fowler"] },
      { name: "Graeme Souness", aliases: ["Souness"] },
      { name: "Virgil van Dijk", aliases: ["Van Dijk"] },
      { name: "Sadio Mane", aliases: ["Mane"] }
    ]
  },
  { id: "soc-juventus-legends", category: "Soccer", prompt: "Greatest Juventus players of all time", hint: "Club legends",
    items: [
      { name: "Alessandro Del Piero", aliases: ["Del Piero"] },
      { name: "Michel Platini", aliases: ["Platini"] },
      { name: "Gianluigi Buffon", aliases: ["Buffon"] },
      { name: "Roberto Baggio", aliases: ["Baggio"] },
      { name: "Pavel Nedved", aliases: ["Nedved"] },
      { name: "Zinedine Zidane", aliases: ["Zidane"] },
      { name: "Giorgio Chiellini", aliases: ["Chiellini"] },
      { name: "Gaetano Scirea", aliases: ["Scirea"] },
      { name: "Dino Zoff", aliases: ["Zoff"] },
      { name: "Andrea Pirlo", aliases: ["Pirlo"] }
    ]
  },
  { id: "soc-most-prem-appearances", category: "Soccer", prompt: "Most career Premier League appearances", hint: "1992 onward",
    items: [
      { name: "Gareth Barry", aliases: ["Barry"] },
      { name: "James Milner", aliases: ["Milner"] },
      { name: "Ryan Giggs", aliases: ["Giggs"] },
      { name: "Frank Lampard", aliases: ["Lampard"] },
      { name: "David James", aliases: ["James"] },
      { name: "Gary Speed", aliases: ["Speed"] },
      { name: "Emile Heskey", aliases: ["Heskey"] },
      { name: "Mark Schwarzer", aliases: ["Schwarzer"] },
      { name: "Jamie Carragher", aliases: ["Carragher"] },
      { name: "Phil Neville", aliases: ["Neville"] }
    ]
  },
  { id: "soc-italy-coppa-italia", category: "Soccer", prompt: "Clubs with most Coppa Italia wins", hint: "Italian domestic cup",
    items: [
      { name: "Juventus", aliases: ["Juve"] },
      { name: "Roma", aliases: ["AS Roma"] },
      { name: "Inter Milan", aliases: ["Inter"] },
      { name: "Lazio", aliases: ["SS Lazio"] },
      { name: "Fiorentina", aliases: [] },
      { name: "Napoli", aliases: ["SSC Napoli"] },
      { name: "AC Milan", aliases: ["Milan"] },
      { name: "Torino", aliases: ["Toro"] },
      { name: "Sampdoria", aliases: [] },
      { name: "Bologna", aliases: [] }
    ]
  },
  { id: "soc-france-ligue1-titles", category: "Soccer", prompt: "Clubs with most Ligue 1 titles", hint: "French top flight",
    items: [
      { name: "Saint-Etienne", aliases: ["ASSE"] },
      { name: "Paris Saint-Germain", aliases: ["PSG"] },
      { name: "Marseille", aliases: ["OM", "Olympique de Marseille"] },
      { name: "Nantes", aliases: ["FC Nantes"] },
      { name: "Lyon", aliases: ["OL", "Olympique Lyonnais"] },
      { name: "Monaco", aliases: ["AS Monaco"] },
      { name: "Bordeaux", aliases: ["Girondins de Bordeaux"] },
      { name: "Reims", aliases: ["Stade de Reims"] },
      { name: "Nice", aliases: ["OGC Nice"] },
      { name: "Lille", aliases: ["LOSC"] }
    ]
  },
  { id: "nba-all-time-scoring-leaders", category: "Basketball", prompt: "Top 10 NBA all-time regular season scoring leaders", hint: "Career points scored",
    items: [
      { name: "LeBron James", aliases: ["LeBron","King James","LBJ"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem","Lew Alcindor"] },
      { name: "Karl Malone", aliases: ["The Mailman"] },
      { name: "Kobe Bryant", aliases: ["Black Mamba","Mamba"] },
      { name: "Michael Jordan", aliases: ["MJ","Air Jordan","His Airness"] },
      { name: "Dirk Nowitzki", aliases: ["Dirk","The German"] },
      { name: "Wilt Chamberlain", aliases: ["Wilt","The Big Dipper","Stilt"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq","Diesel"] },
      { name: "Carmelo Anthony", aliases: ["Melo"] },
      { name: "Moses Malone", aliases: ["Moses"] }
    ]
  },
  { id: "nba-playoff-scoring-leaders", category: "Basketball", prompt: "Top 10 NBA all-time playoff scoring leaders", hint: "Career playoff points",
    items: [
      { name: "LeBron James", aliases: ["King James","LBJ"] },
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Kevin Durant", aliases: ["KD","Easy Money Sniper","Slim Reaper"] },
      { name: "Jerry West", aliases: ["The Logo","Mr. Clutch"] },
      { name: "Larry Bird", aliases: ["Larry Legend","The Hick from French Lick"] }
    ]
  },
  { id: "nba-finals-scoring-leaders", category: "Basketball", prompt: "Top 10 NBA all-time Finals scoring leaders", hint: "Total points in NBA Finals games",
    items: [
      { name: "Jerry West", aliases: ["The Logo"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Bill Russell", aliases: ["Russ"] },
      { name: "Sam Jones", aliases: ["Sam"] },
      { name: "Magic Johnson", aliases: ["Magic","Earvin Johnson"] },
      { name: "Elgin Baylor", aliases: ["Elgin"] },
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "Tom Heinsohn", aliases: ["Tommy"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] }
    ]
  },
  { id: "nba-assists-leaders", category: "Basketball", prompt: "Top 10 NBA all-time assists leaders", hint: "Career regular season assists",
    items: [
      { name: "John Stockton", aliases: ["Stockton"] },
      { name: "Chris Paul", aliases: ["CP3","Point God"] },
      { name: "Jason Kidd", aliases: ["J-Kidd"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Steve Nash", aliases: ["Nash"] },
      { name: "Mark Jackson", aliases: ["Mark"] },
      { name: "Magic Johnson", aliases: ["Magic"] },
      { name: "Oscar Robertson", aliases: ["The Big O"] },
      { name: "Russell Westbrook", aliases: ["Russ","Brodie"] },
      { name: "Isiah Thomas", aliases: ["Zeke"] }
    ]
  },
  { id: "nba-rebounds-leaders", category: "Basketball", prompt: "Top 10 NBA all-time rebounding leaders", hint: "Career regular season rebounds",
    items: [
      { name: "Wilt Chamberlain", aliases: ["Wilt","The Stilt"] },
      { name: "Bill Russell", aliases: ["Russ"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Elvin Hayes", aliases: ["The Big E"] },
      { name: "Moses Malone", aliases: ["Moses"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Robert Parish", aliases: ["The Chief"] },
      { name: "Kevin Garnett", aliases: ["KG","The Big Ticket"] },
      { name: "Nate Thurmond", aliases: ["Nate"] }
    ]
  },
  { id: "nba-steals-leaders", category: "Basketball", prompt: "Top 10 NBA all-time steals leaders", hint: "Career steals (tracked since 1973-74)",
    items: [
      { name: "John Stockton", aliases: ["Stockton"] },
      { name: "Chris Paul", aliases: ["CP3","Point God"] },
      { name: "Jason Kidd", aliases: ["J-Kidd"] },
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "Gary Payton", aliases: ["The Glove","GP"] },
      { name: "Maurice Cheeks", aliases: ["Mo Cheeks"] },
      { name: "Scottie Pippen", aliases: ["Pippen","Pip"] },
      { name: "Clyde Drexler", aliases: ["The Glide"] },
      { name: "Hakeem Olajuwon", aliases: ["The Dream"] },
      { name: "Allen Iverson", aliases: ["AI","The Answer"] }
    ]
  },
  { id: "nba-blocks-leaders", category: "Basketball", prompt: "Top 10 NBA all-time blocks leaders", hint: "Career blocks (tracked since 1973-74)",
    items: [
      { name: "Hakeem Olajuwon", aliases: ["The Dream"] },
      { name: "Dikembe Mutombo", aliases: ["Mt. Mutombo","Deke"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Mark Eaton", aliases: ["Eaton"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "David Robinson", aliases: ["The Admiral"] },
      { name: "Patrick Ewing", aliases: ["Ewing"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq"] },
      { name: "Tree Rollins", aliases: ["Wayne Rollins"] },
      { name: "Robert Parish", aliases: ["The Chief"] }
    ]
  },
  { id: "nba-triple-doubles-leaders", category: "Basketball", prompt: "Top 10 NBA all-time triple-double leaders", hint: "Career regular season triple-doubles",
    items: [
      { name: "Russell Westbrook", aliases: ["Russ","Brodie"] },
      { name: "Oscar Robertson", aliases: ["The Big O"] },
      { name: "Nikola Jokic", aliases: ["The Joker","Jokic"] },
      { name: "Magic Johnson", aliases: ["Magic"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Jason Kidd", aliases: ["J-Kidd"] },
      { name: "Wilt Chamberlain", aliases: ["Wilt"] },
      { name: "Luka Doncic", aliases: ["Luka","Luka Magic"] },
      { name: "James Harden", aliases: ["The Beard"] },
      { name: "Larry Bird", aliases: ["Larry Legend"] }
    ]
  },
  { id: "nba-championships-players", category: "Basketball", prompt: "Top 10 NBA players with most championships", hint: "Career NBA titles won as a player",
    items: [
      { name: "Bill Russell", aliases: ["Russ"] },
      { name: "Sam Jones", aliases: ["Sam"] },
      { name: "Tom Heinsohn", aliases: ["Tommy"] },
      { name: "K.C. Jones", aliases: ["KC Jones"] },
      { name: "Satch Sanders", aliases: ["Tom Sanders"] },
      { name: "John Havlicek", aliases: ["Hondo"] },
      { name: "Jim Loscutoff", aliases: ["Loscutoff"] },
      { name: "Frank Ramsey", aliases: ["Ramsey"] },
      { name: "Robert Horry", aliases: ["Big Shot Bob","Big Shot Rob"] },
      { name: "Bob Cousy", aliases: ["The Cooz"] }
    ]
  },
  { id: "nba-championships-franchises", category: "Basketball", prompt: "Top 10 NBA franchises by championships won", hint: "Total NBA titles by franchise",
    items: [
      { name: "Boston Celtics", aliases: ["Celtics","Boston"] },
      { name: "Los Angeles Lakers", aliases: ["Lakers","LAL","Minneapolis Lakers"] },
      { name: "Golden State Warriors", aliases: ["Warriors","GSW","Philadelphia Warriors"] },
      { name: "Chicago Bulls", aliases: ["Bulls","Chicago"] },
      { name: "San Antonio Spurs", aliases: ["Spurs","SAS"] },
      { name: "Philadelphia 76ers", aliases: ["Sixers","76ers","Syracuse Nationals"] },
      { name: "Detroit Pistons", aliases: ["Pistons","Fort Wayne Pistons"] },
      { name: "Miami Heat", aliases: ["Heat","Miami"] },
      { name: "Milwaukee Bucks", aliases: ["Bucks","Milwaukee"] },
      { name: "New York Knicks", aliases: ["Knicks","NYK"] }
    ]
  },
  { id: "nba-mvp-awards", category: "Basketball", prompt: "Top 10 NBA regular season MVP award winners", hint: "Career MVP trophies",
    items: [
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Bill Russell", aliases: ["Russ"] },
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Wilt Chamberlain", aliases: ["Wilt"] },
      { name: "Nikola Jokic", aliases: ["The Joker"] },
      { name: "Moses Malone", aliases: ["Moses"] },
      { name: "Larry Bird", aliases: ["Larry Legend"] },
      { name: "Magic Johnson", aliases: ["Magic"] },
      { name: "Giannis Antetokounmpo", aliases: ["Giannis","Greek Freak"] }
    ]
  },
  { id: "nba-finals-mvp-awards", category: "Basketball", prompt: "Top 10 NBA Finals MVP winners (most trophies)", hint: "Career Finals MVPs (Bill Russell Award)",
    items: [
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Magic Johnson", aliases: ["Magic"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Kevin Durant", aliases: ["KD"] },
      { name: "Kawhi Leonard", aliases: ["Klaw","The Klaw"] },
      { name: "Hakeem Olajuwon", aliases: ["The Dream"] },
      { name: "Larry Bird", aliases: ["Larry Legend"] }
    ]
  },
  { id: "nba-all-star-selections", category: "Basketball", prompt: "Top 10 NBA players by All-Star selections", hint: "Career All-Star Game selections",
    items: [
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Kevin Garnett", aliases: ["KG"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq"] },
      { name: "Bob Cousy", aliases: ["The Cooz"] },
      { name: "Dirk Nowitzki", aliases: ["Dirk"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Kevin Durant", aliases: ["KD"] }
    ]
  },
  { id: "nba-all-nba-selections", category: "Basketball", prompt: "Top 10 NBA players by All-NBA Team selections", hint: "Total All-NBA First/Second/Third Team selections",
    items: [
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq"] },
      { name: "Kevin Durant", aliases: ["KD"] },
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "Bob Cousy", aliases: ["The Cooz"] },
      { name: "Jerry West", aliases: ["The Logo"] }
    ]
  },
  { id: "nba-all-defensive-selections", category: "Basketball", prompt: "Top 10 NBA players by All-Defensive Team selections", hint: "Total All-Defensive First/Second Team selections",
    items: [
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Kevin Garnett", aliases: ["KG"] },
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Gary Payton", aliases: ["The Glove"] },
      { name: "Scottie Pippen", aliases: ["Pip"] },
      { name: "Hakeem Olajuwon", aliases: ["The Dream"] },
      { name: "Jason Kidd", aliases: ["J-Kidd"] },
      { name: "Dennis Rodman", aliases: ["The Worm","Rodman"] }
    ]
  },
  { id: "nba-single-game-scoring", category: "Basketball", prompt: "Top 10 highest-scoring single games in NBA history", hint: "Points in one regular season game",
    items: [
      { name: "Wilt Chamberlain - 100", aliases: ["Wilt 100","Chamberlain 100"] },
      { name: "Kobe Bryant - 81", aliases: ["Kobe 81"] },
      { name: "Wilt Chamberlain - 78", aliases: ["Wilt 78"] },
      { name: "Wilt Chamberlain - 73", aliases: ["Wilt 73"] },
      { name: "David Thompson - 73", aliases: ["Thompson 73"] },
      { name: "David Robinson - 71", aliases: ["Admiral 71"] },
      { name: "Devin Booker - 70", aliases: ["Booker 70"] },
      { name: "Elgin Baylor - 71", aliases: ["Baylor 71"] },
      { name: "Donovan Mitchell - 71", aliases: ["Mitchell 71","Spida 71"] },
      { name: "Luka Doncic - 73", aliases: ["Luka 73"] }
    ]
  },
  { id: "nba-career-three-pointers", category: "Basketball", prompt: "Top 10 NBA all-time career 3-point leaders", hint: "Career made 3-pointers (regular season)",
    items: [
      { name: "Stephen Curry", aliases: ["Steph","Chef Curry","Steph Curry"] },
      { name: "James Harden", aliases: ["The Beard"] },
      { name: "Ray Allen", aliases: ["Jesus Shuttlesworth"] },
      { name: "Damian Lillard", aliases: ["Dame","Dame Time"] },
      { name: "Reggie Miller", aliases: ["Reggie"] },
      { name: "Klay Thompson", aliases: ["Klay","Game 6 Klay"] },
      { name: "Kyle Korver", aliases: ["Korver"] },
      { name: "Vince Carter", aliases: ["Vinsanity","VC","Half-Man Half-Amazing"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Jason Terry", aliases: ["The Jet"] }
    ]
  },
  { id: "nba-season-three-pointers", category: "Basketball", prompt: "Top 10 most 3-pointers in a single NBA season", hint: "Made 3s in one regular season",
    items: [
      { name: "Stephen Curry - 402 (2015-16)", aliases: ["Curry 402"] },
      { name: "Stephen Curry - 380 (2022-23)", aliases: ["Curry 380"] },
      { name: "Klay Thompson - 301 (2022-23)", aliases: ["Klay 301"] },
      { name: "Stephen Curry - 286 (2014-15)", aliases: ["Curry 286"] },
      { name: "James Harden - 378 (2018-19)", aliases: ["Harden 378"] },
      { name: "Stephen Curry - 354 (2018-19)", aliases: ["Curry 354"] },
      { name: "Stephen Curry - 337 (2020-21)", aliases: ["Curry 337"] },
      { name: "Stephen Curry - 324 (2016-17)", aliases: ["Curry 324"] },
      { name: "Klay Thompson - 276 (2015-16)", aliases: ["Klay 276"] },
      { name: "James Harden - 299 (2022-23)", aliases: ["Harden 299"] }
    ]
  },
  { id: "nba-franchise-valuations", category: "Basketball", prompt: "Top 10 most valuable NBA franchises", hint: "Estimated franchise valuation (Forbes)",
    items: [
      { name: "Golden State Warriors", aliases: ["Warriors","GSW"] },
      { name: "New York Knicks", aliases: ["Knicks"] },
      { name: "Los Angeles Lakers", aliases: ["Lakers"] },
      { name: "Boston Celtics", aliases: ["Celtics"] },
      { name: "Chicago Bulls", aliases: ["Bulls"] },
      { name: "Los Angeles Clippers", aliases: ["Clippers","LAC"] },
      { name: "Brooklyn Nets", aliases: ["Nets","BKN"] },
      { name: "Houston Rockets", aliases: ["Rockets"] },
      { name: "Dallas Mavericks", aliases: ["Mavericks","Mavs"] },
      { name: "Philadelphia 76ers", aliases: ["Sixers","76ers"] }
    ]
  },
  { id: "nba-tallest-players", category: "Basketball", prompt: "Top 10 tallest NBA players in history", hint: "Listed height",
    items: [
      { name: "Gheorghe Muresan", aliases: ["Muresan"] },
      { name: "Manute Bol", aliases: ["Manute"] },
      { name: "Tacko Fall", aliases: ["Tacko"] },
      { name: "Yao Ming", aliases: ["Yao"] },
      { name: "Slavko Vranes", aliases: ["Vranes"] },
      { name: "Shawn Bradley", aliases: ["Bradley"] },
      { name: "Boban Marjanovic", aliases: ["Boban"] },
      { name: "Chuck Nevitt", aliases: ["Nevitt"] },
      { name: "Pavel Podkolzin", aliases: ["Podkolzin"] },
      { name: "Sim Bhullar", aliases: ["Bhullar"] }
    ]
  },
  { id: "nba-shortest-players", category: "Basketball", prompt: "Top 10 shortest NBA players in history", hint: "Listed height",
    items: [
      { name: "Muggsy Bogues", aliases: ["Muggsy","Tyrone Bogues"] },
      { name: "Earl Boykins", aliases: ["Boykins"] },
      { name: "Mel Hirsch", aliases: ["Hirsch"] },
      { name: "Spud Webb", aliases: ["Spud","Anthony Webb"] },
      { name: "Greg Grant", aliases: ["Grant"] },
      { name: "Keith Jennings", aliases: ["Mister Jennings"] },
      { name: "Red Klotz", aliases: ["Klotz"] },
      { name: "Wat Misaka", aliases: ["Misaka"] },
      { name: "Monte Towe", aliases: ["Towe"] },
      { name: "Charlie Criss", aliases: ["Criss"] }
    ]
  },
  { id: "nba-scoring-titles", category: "Basketball", prompt: "Top 10 NBA players by scoring titles won", hint: "Most regular season scoring crowns",
    items: [
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "Wilt Chamberlain", aliases: ["Wilt"] },
      { name: "Kevin Durant", aliases: ["KD"] },
      { name: "George Gervin", aliases: ["The Iceman"] },
      { name: "Allen Iverson", aliases: ["AI","The Answer"] },
      { name: "James Harden", aliases: ["The Beard"] },
      { name: "Bob McAdoo", aliases: ["McAdoo"] },
      { name: "George Mikan", aliases: ["Mikan"] },
      { name: "Neil Johnston", aliases: ["Johnston"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] }
    ]
  },
  { id: "nba-games-played", category: "Basketball", prompt: "Top 10 NBA players by career games played", hint: "Regular season games",
    items: [
      { name: "Robert Parish", aliases: ["The Chief"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Vince Carter", aliases: ["Vinsanity"] },
      { name: "Dirk Nowitzki", aliases: ["Dirk"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "John Stockton", aliases: ["Stockton"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Kevin Garnett", aliases: ["KG"] },
      { name: "Jason Terry", aliases: ["The Jet"] },
      { name: "Kevin Willis", aliases: ["Willis"] }
    ]
  },
  { id: "nba-playoff-appearances", category: "Basketball", prompt: "Top 10 NBA players by career playoff appearances", hint: "Most seasons in which player reached playoffs",
    items: [
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Tony Parker", aliases: ["TP9"] },
      { name: "Manu Ginobili", aliases: ["Manu"] },
      { name: "Robert Horry", aliases: ["Big Shot Bob"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "John Stockton", aliases: ["Stockton"] }
    ]
  },
  { id: "nba-dpoy-awards", category: "Basketball", prompt: "Top 10 NBA players by Defensive Player of the Year awards", hint: "Career DPOY trophies",
    items: [
      { name: "Dikembe Mutombo", aliases: ["Mt. Mutombo"] },
      { name: "Ben Wallace", aliases: ["Big Ben"] },
      { name: "Rudy Gobert", aliases: ["The Stifle Tower"] },
      { name: "Dwight Howard", aliases: ["Superman"] },
      { name: "Hakeem Olajuwon", aliases: ["The Dream"] },
      { name: "Sidney Moncrief", aliases: ["Moncrief"] },
      { name: "Mark Eaton", aliases: ["Eaton"] },
      { name: "Kawhi Leonard", aliases: ["The Klaw"] },
      { name: "Alonzo Mourning", aliases: ["Zo"] },
      { name: "Dennis Rodman", aliases: ["The Worm"] }
    ]
  },
  { id: "nba-coach-of-year", category: "Basketball", prompt: "Top 10 most recent NBA Coach of the Year winners", hint: "From most recent backward",
    items: [
      { name: "Mark Daigneault (2024)", aliases: ["Daigneault"] },
      { name: "Mike Brown (2023)", aliases: ["Mike Brown"] },
      { name: "Monty Williams (2022)", aliases: ["Monty"] },
      { name: "Tom Thibodeau (2021)", aliases: ["Thibs"] },
      { name: "Nick Nurse (2020)", aliases: ["Nurse"] },
      { name: "Mike Budenholzer (2019)", aliases: ["Bud"] },
      { name: "Dwane Casey (2018)", aliases: ["Casey"] },
      { name: "Mike D'Antoni (2017)", aliases: ["D'Antoni"] },
      { name: "Steve Kerr (2016)", aliases: ["Kerr"] },
      { name: "Mike Budenholzer (2015)", aliases: ["Bud"] }
    ]
  },
  { id: "nba-rookie-of-year-recent", category: "Basketball", prompt: "Top 10 most recent NBA Rookie of the Year winners", hint: "From most recent backward",
    items: [
      { name: "Victor Wembanyama (2024)", aliases: ["Wemby","Wembanyama"] },
      { name: "Paolo Banchero (2023)", aliases: ["Banchero"] },
      { name: "Scottie Barnes (2022)", aliases: ["Scottie"] },
      { name: "LaMelo Ball (2021)", aliases: ["LaMelo"] },
      { name: "Ja Morant (2020)", aliases: ["Ja"] },
      { name: "Luka Doncic (2019)", aliases: ["Luka"] },
      { name: "Ben Simmons (2018)", aliases: ["Simmons"] },
      { name: "Malcolm Brogdon (2017)", aliases: ["Brogdon"] },
      { name: "Karl-Anthony Towns (2016)", aliases: ["KAT"] },
      { name: "Andrew Wiggins (2015)", aliases: ["Wiggins"] }
    ]
  },
  { id: "nba-hof-foreign-countries", category: "Basketball", prompt: "Top 10 countries with most Naismith Hall of Fame international players", hint: "Non-USA birthplaces",
    items: [
      { name: "Yugoslavia/Serbia", aliases: ["Serbia","Yugoslavia"] },
      { name: "Lithuania", aliases: [] },
      { name: "Brazil", aliases: [] },
      { name: "Croatia", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "Germany", aliases: [] },
      { name: "France", aliases: [] },
      { name: "Argentina", aliases: [] },
      { name: "Australia", aliases: [] },
      { name: "Russia", aliases: [] }
    ]
  },
  { id: "nba-dunk-contest-recent", category: "Basketball", prompt: "Top 10 most recent NBA Slam Dunk Contest winners", hint: "From most recent backward",
    items: [
      { name: "Mac McClung (2024)", aliases: ["McClung"] },
      { name: "Mac McClung (2023)", aliases: ["McClung"] },
      { name: "Obi Toppin (2022)", aliases: ["Obi"] },
      { name: "Anfernee Simons (2021)", aliases: ["Simons"] },
      { name: "Derrick Jones Jr. (2020)", aliases: ["DJJ"] },
      { name: "Hamidou Diallo (2019)", aliases: ["Diallo"] },
      { name: "Donovan Mitchell (2018)", aliases: ["Spida"] },
      { name: "Glenn Robinson III (2017)", aliases: ["GR3"] },
      { name: "Zach LaVine (2016)", aliases: ["LaVine"] },
      { name: "Zach LaVine (2015)", aliases: ["LaVine"] }
    ]
  },
  { id: "nba-arenas-capacity", category: "Basketball", prompt: "Top 10 largest NBA arenas by capacity", hint: "Basketball seating capacity",
    items: [
      { name: "United Center (Chicago Bulls)", aliases: ["United Center","UC"] },
      { name: "Little Caesars Arena (Detroit Pistons)", aliases: ["Little Caesars"] },
      { name: "State Farm Arena (Atlanta Hawks)", aliases: ["State Farm"] },
      { name: "Wells Fargo Center (Philadelphia 76ers)", aliases: ["Wells Fargo"] },
      { name: "Smoothie King Center (New Orleans Pelicans)", aliases: ["Smoothie King"] },
      { name: "Rocket Mortgage FieldHouse (Cleveland Cavaliers)", aliases: ["Rocket Mortgage","Rocket Arena"] },
      { name: "Madison Square Garden (New York Knicks)", aliases: ["MSG","The Garden"] },
      { name: "Toyota Center (Houston Rockets)", aliases: ["Toyota Center"] },
      { name: "Spectrum Center (Charlotte Hornets)", aliases: ["Spectrum"] },
      { name: "Capital One Arena (Washington Wizards)", aliases: ["Capital One"] }
    ]
  },
  { id: "nba-career-double-doubles", category: "Basketball", prompt: "Top 10 NBA all-time career double-double leaders", hint: "Most career regular season double-doubles",
    items: [
      { name: "Wilt Chamberlain", aliases: ["Wilt"] },
      { name: "Tim Duncan", aliases: ["The Big Fundamental"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Hakeem Olajuwon", aliases: ["The Dream"] },
      { name: "Moses Malone", aliases: ["Moses"] },
      { name: "Kevin Garnett", aliases: ["KG"] },
      { name: "Robert Parish", aliases: ["The Chief"] },
      { name: "Shaquille O'Neal", aliases: ["Shaq"] },
      { name: "Charles Barkley", aliases: ["Chuck","Sir Charles"] }
    ]
  },
  { id: "nba-french-players", category: "Basketball", prompt: "Top 10 most notable French NBA players", hint: "By career accolades / impact",
    items: [
      { name: "Tony Parker", aliases: ["TP9"] },
      { name: "Victor Wembanyama", aliases: ["Wemby"] },
      { name: "Rudy Gobert", aliases: ["The Stifle Tower"] },
      { name: "Joakim Noah", aliases: ["Noah"] },
      { name: "Boris Diaw", aliases: ["Diaw"] },
      { name: "Nicolas Batum", aliases: ["Batum"] },
      { name: "Evan Fournier", aliases: ["Fournier"] },
      { name: "Ronny Turiaf", aliases: ["Turiaf"] },
      { name: "Mickael Pietrus", aliases: ["Pietrus"] },
      { name: "Ian Mahinmi", aliases: ["Mahinmi"] }
    ]
  },
  { id: "nba-spanish-players", category: "Basketball", prompt: "Top 10 most notable Spanish NBA players", hint: "By career impact",
    items: [
      { name: "Pau Gasol", aliases: ["Pau"] },
      { name: "Marc Gasol", aliases: ["Marc"] },
      { name: "Ricky Rubio", aliases: ["Rubio"] },
      { name: "Jose Calderon", aliases: ["Calderon"] },
      { name: "Serge Ibaka", aliases: ["Ibaka"] },
      { name: "Juan Carlos Navarro", aliases: ["Navarro","La Bomba"] },
      { name: "Rudy Fernandez", aliases: ["Rudy"] },
      { name: "Jorge Garbajosa", aliases: ["Garbajosa"] },
      { name: "Fernando Martin", aliases: ["F. Martin"] },
      { name: "Alex Abrines", aliases: ["Abrines"] }
    ]
  },
  { id: "nba-canadian-players", category: "Basketball", prompt: "Top 10 most notable Canadian NBA players", hint: "By career impact",
    items: [
      { name: "Steve Nash", aliases: ["Nash"] },
      { name: "Shai Gilgeous-Alexander", aliases: ["SGA"] },
      { name: "Jamal Murray", aliases: ["Murray"] },
      { name: "Andrew Wiggins", aliases: ["Wiggins","Maple Jordan"] },
      { name: "Tristan Thompson", aliases: ["TT"] },
      { name: "Kelly Olynyk", aliases: ["Olynyk"] },
      { name: "Cory Joseph", aliases: ["Joseph"] },
      { name: "RJ Barrett", aliases: ["Barrett"] },
      { name: "Dwight Powell", aliases: ["Powell"] },
      { name: "Bill Wennington", aliases: ["Wennington"] }
    ]
  },
  { id: "nba-australian-players", category: "Basketball", prompt: "Top 10 most notable Australian NBA players", hint: "By career impact",
    items: [
      { name: "Andrew Bogut", aliases: ["Bogut"] },
      { name: "Patty Mills", aliases: ["Mills"] },
      { name: "Ben Simmons", aliases: ["Simmons"] },
      { name: "Joe Ingles", aliases: ["Slow-Mo","Ingles"] },
      { name: "Matthew Dellavedova", aliases: ["Delly"] },
      { name: "Josh Giddey", aliases: ["Giddey"] },
      { name: "Aron Baynes", aliases: ["Baynes"] },
      { name: "Dante Exum", aliases: ["Exum"] },
      { name: "Luc Longley", aliases: ["Longley"] },
      { name: "Andrew Gaze", aliases: ["Gaze"] }
    ]
  },
  { id: "nba-serbian-players", category: "Basketball", prompt: "Top 10 most notable Serbian NBA players", hint: "By career impact",
    items: [
      { name: "Nikola Jokic", aliases: ["The Joker"] },
      { name: "Vlade Divac", aliases: ["Divac"] },
      { name: "Peja Stojakovic", aliases: ["Peja"] },
      { name: "Bogdan Bogdanovic", aliases: ["Bogi"] },
      { name: "Nemanja Bjelica", aliases: ["Belly","Bjelica"] },
      { name: "Predrag Danilovic", aliases: ["Danilovic"] },
      { name: "Darko Milicic", aliases: ["Darko"] },
      { name: "Nenad Krstic", aliases: ["Krstic"] },
      { name: "Aleksandar Djordjevic", aliases: ["Djordjevic"] },
      { name: "Boban Marjanovic", aliases: ["Boban"] }
    ]
  },
  { id: "nba-german-players", category: "Basketball", prompt: "Top 10 most notable German NBA players", hint: "By career impact",
    items: [
      { name: "Dirk Nowitzki", aliases: ["Dirk"] },
      { name: "Detlef Schrempf", aliases: ["Schrempf"] },
      { name: "Franz Wagner", aliases: ["Franz"] },
      { name: "Dennis Schroder", aliases: ["Schroder"] },
      { name: "Daniel Theis", aliases: ["Theis"] },
      { name: "Maxi Kleber", aliases: ["Kleber"] },
      { name: "Moritz Wagner", aliases: ["Moe Wagner"] },
      { name: "Chris Kaman", aliases: ["Kaman"] },
      { name: "Tibor Pleiss", aliases: ["Pleiss"] },
      { name: "Isaiah Hartenstein", aliases: ["Hartenstein"] }
    ]
  },
  { id: "nba-nigerian-players", category: "Basketball", prompt: "Top 10 most notable Nigerian-heritage NBA players", hint: "Born in Nigeria or of Nigerian descent",
    items: [
      { name: "Hakeem Olajuwon", aliases: ["The Dream"] },
      { name: "Giannis Antetokounmpo", aliases: ["Greek Freak"] },
      { name: "Kiki VanDeWeghe", aliases: ["VanDeWeghe"] },
      { name: "Bam Adebayo", aliases: ["Bam"] },
      { name: "OG Anunoby", aliases: ["OG"] },
      { name: "Bismack Biyombo", aliases: ["Biyombo"] },
      { name: "Festus Ezeli", aliases: ["Ezeli"] },
      { name: "Al-Farouq Aminu", aliases: ["Aminu"] },
      { name: "Precious Achiuwa", aliases: ["Achiuwa"] },
      { name: "Ike Diogu", aliases: ["Diogu"] }
    ]
  },
  { id: "nba-lithuanian-players", category: "Basketball", prompt: "Top 10 most notable Lithuanian NBA players", hint: "By career impact",
    items: [
      { name: "Arvydas Sabonis", aliases: ["Sabonis"] },
      { name: "Sarunas Marciulionis", aliases: ["Marciulionis"] },
      { name: "Zydrunas Ilgauskas", aliases: ["Big Z","Ilgauskas"] },
      { name: "Domantas Sabonis", aliases: ["Domas"] },
      { name: "Jonas Valanciunas", aliases: ["JV","Valanciunas"] },
      { name: "Linas Kleiza", aliases: ["Kleiza"] },
      { name: "Darius Songaila", aliases: ["Songaila"] },
      { name: "Mindaugas Kuzminskas", aliases: ["Kuzminskas"] },
      { name: "Donatas Motiejunas", aliases: ["D-Mo","Motiejunas"] },
      { name: "Sarunas Jasikevicius", aliases: ["Jasikevicius"] }
    ]
  },
  { id: "olympic-mens-basketball-golds", category: "Basketball", prompt: "Top 10 countries with most Olympic men's basketball gold medals", hint: "Summer Olympic golds",
    items: [
      { name: "United States", aliases: ["USA","Team USA"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Yugoslavia", aliases: [] },
      { name: "Argentina", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "France", aliases: [] },
      { name: "Italy", aliases: [] },
      { name: "Lithuania", aliases: [] },
      { name: "Croatia", aliases: [] },
      { name: "Brazil", aliases: [] }
    ]
  },
  { id: "olympic-womens-basketball-golds", category: "Basketball", prompt: "Top 10 countries with most Olympic women's basketball golds", hint: "Summer Olympic golds",
    items: [
      { name: "United States", aliases: ["USA","Team USA"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Unified Team", aliases: ["EUN"] },
      { name: "Australia", aliases: [] },
      { name: "France", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "Brazil", aliases: [] },
      { name: "China", aliases: [] },
      { name: "South Korea", aliases: ["Korea"] },
      { name: "Bulgaria", aliases: [] }
    ]
  },
  { id: "fiba-world-cup-titles", category: "Basketball", prompt: "Top 10 countries by FIBA Men's Basketball World Cup titles", hint: "Total world championships",
    items: [
      { name: "United States", aliases: ["USA"] },
      { name: "Yugoslavia", aliases: [] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Brazil", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "Germany", aliases: [] },
      { name: "Argentina", aliases: [] },
      { name: "Serbia", aliases: [] },
      { name: "Lithuania", aliases: [] },
      { name: "Greece", aliases: [] }
    ]
  },
  { id: "ncaa-mens-titles", category: "Basketball", prompt: "Top 10 NCAA Men's Basketball programs by national titles", hint: "Most NCAA Division I championships",
    items: [
      { name: "UCLA Bruins", aliases: ["UCLA","Bruins"] },
      { name: "Kentucky Wildcats", aliases: ["Kentucky","UK"] },
      { name: "North Carolina Tar Heels", aliases: ["UNC","Tar Heels"] },
      { name: "Duke Blue Devils", aliases: ["Duke"] },
      { name: "Indiana Hoosiers", aliases: ["Indiana","Hoosiers"] },
      { name: "Connecticut Huskies", aliases: ["UConn","Huskies"] },
      { name: "Kansas Jayhawks", aliases: ["Kansas","KU"] },
      { name: "Villanova Wildcats", aliases: ["Villanova"] },
      { name: "Louisville Cardinals", aliases: ["Louisville"] },
      { name: "Cincinnati Bearcats", aliases: ["Cincinnati"] }
    ]
  },
  { id: "ncaa-mens-coaches-wins", category: "Basketball", prompt: "Top 10 winningest NCAA Division I men's basketball coaches", hint: "Career wins",
    items: [
      { name: "Mike Krzyzewski", aliases: ["Coach K","Krzyzewski"] },
      { name: "Jim Boeheim", aliases: ["Boeheim"] },
      { name: "Roy Williams", aliases: ["Roy Williams"] },
      { name: "Bob Knight", aliases: ["Knight"] },
      { name: "Dean Smith", aliases: ["Dean Smith"] },
      { name: "Adolph Rupp", aliases: ["Rupp"] },
      { name: "Jim Calhoun", aliases: ["Calhoun"] },
      { name: "Eddie Sutton", aliases: ["Sutton"] },
      { name: "Lute Olson", aliases: ["Olson"] },
      { name: "Lefty Driesell", aliases: ["Lefty"] }
    ]
  },
  { id: "wnba-scoring-leaders", category: "Basketball", prompt: "Top 10 WNBA all-time scoring leaders", hint: "Career regular season points",
    items: [
      { name: "Diana Taurasi", aliases: ["Taurasi"] },
      { name: "Tina Thompson", aliases: ["Thompson"] },
      { name: "Tina Charles", aliases: ["Charles"] },
      { name: "Tamika Catchings", aliases: ["Catchings"] },
      { name: "Candice Dupree", aliases: ["Dupree"] },
      { name: "Cappie Pondexter", aliases: ["Cappie"] },
      { name: "Katie Smith", aliases: ["Smith"] },
      { name: "Lisa Leslie", aliases: ["Leslie"] },
      { name: "Candace Parker", aliases: ["Parker"] },
      { name: "Sue Bird", aliases: ["Bird"] }
    ]
  },
  { id: "wnba-championships", category: "Basketball", prompt: "Top 10 WNBA franchises by championships", hint: "Most WNBA titles",
    items: [
      { name: "Houston Comets", aliases: ["Comets"] },
      { name: "Minnesota Lynx", aliases: ["Lynx"] },
      { name: "Seattle Storm", aliases: ["Storm"] },
      { name: "Detroit Shock", aliases: ["Shock"] },
      { name: "Phoenix Mercury", aliases: ["Mercury"] },
      { name: "Las Vegas Aces", aliases: ["Aces"] },
      { name: "Los Angeles Sparks", aliases: ["Sparks"] },
      { name: "Sacramento Monarchs", aliases: ["Monarchs"] },
      { name: "Washington Mystics", aliases: ["Mystics"] },
      { name: "New York Liberty", aliases: ["Liberty"] }
    ]
  },
  { id: "wnba-mvp-awards", category: "Basketball", prompt: "Top 10 WNBA players by MVP awards", hint: "Career regular season MVPs",
    items: [
      { name: "A'ja Wilson", aliases: ["A'ja"] },
      { name: "Lisa Leslie", aliases: ["Leslie"] },
      { name: "Sheryl Swoopes", aliases: ["Swoopes"] },
      { name: "Lauren Jackson", aliases: ["LJ"] },
      { name: "Cynthia Cooper", aliases: ["Cooper"] },
      { name: "Candace Parker", aliases: ["Parker"] },
      { name: "Elena Delle Donne", aliases: ["Delle Donne"] },
      { name: "Breanna Stewart", aliases: ["Stewie"] },
      { name: "Yolanda Griffith", aliases: ["Griffith"] },
      { name: "Tina Charles", aliases: ["Charles"] }
    ]
  },
  { id: "euroleague-titles", category: "Basketball", prompt: "Top 10 EuroLeague clubs by championships", hint: "Most EuroLeague titles",
    items: [
      { name: "Real Madrid", aliases: ["Real"] },
      { name: "CSKA Moscow", aliases: ["CSKA"] },
      { name: "Maccabi Tel Aviv", aliases: ["Maccabi"] },
      { name: "Panathinaikos", aliases: ["PAO"] },
      { name: "Olimpia Milano", aliases: ["Milano"] },
      { name: "Virtus Bologna", aliases: ["Virtus"] },
      { name: "Split", aliases: ["Jugoplastika","KK Split"] },
      { name: "FC Barcelona", aliases: ["Barca"] },
      { name: "Cibona", aliases: ["KK Cibona"] },
      { name: "Olympiacos", aliases: ["OSFP"] }
    ]
  },
  { id: "nba-franchise-wins", category: "Basketball", prompt: "Top 10 NBA franchises by all-time regular season wins", hint: "Total regular season wins",
    items: [
      { name: "Los Angeles Lakers", aliases: ["Lakers"] },
      { name: "Boston Celtics", aliases: ["Celtics"] },
      { name: "Philadelphia 76ers", aliases: ["Sixers"] },
      { name: "Golden State Warriors", aliases: ["Warriors"] },
      { name: "New York Knicks", aliases: ["Knicks"] },
      { name: "Atlanta Hawks", aliases: ["Hawks"] },
      { name: "Detroit Pistons", aliases: ["Pistons"] },
      { name: "San Antonio Spurs", aliases: ["Spurs"] },
      { name: "Sacramento Kings", aliases: ["Kings","Royals"] },
      { name: "Chicago Bulls", aliases: ["Bulls"] }
    ]
  },
  { id: "nba-consecutive-wins", category: "Basketball", prompt: "Top 10 longest NBA regular season winning streaks", hint: "Consecutive games won",
    items: [
      { name: "Lakers - 33 (1971-72)", aliases: ["Lakers 33"] },
      { name: "Heat - 27 (2012-13)", aliases: ["Heat 27"] },
      { name: "Rockets - 22 (2007-08 / 2017-18)", aliases: ["Rockets 22"] },
      { name: "Bucks - 20 (1970-71)", aliases: ["Bucks 20"] },
      { name: "Wizards/Bullets - 20 (1970-71)", aliases: ["Bullets 20"] },
      { name: "Warriors - 28 (2015-16 spanning)", aliases: ["Warriors 28"] },
      { name: "Hawks - 19 (2014-15)", aliases: ["Hawks 19"] },
      { name: "Spurs - 19 (1995-96)", aliases: ["Spurs 19"] },
      { name: "Knicks - 18 (1969-70)", aliases: ["Knicks 18"] },
      { name: "Celtics - 18 (2008-09)", aliases: ["Celtics 18"] }
    ]
  },
  { id: "nba-finals-losses-players", category: "Basketball", prompt: "Top 10 NBA players with most Finals losses", hint: "Career NBA Finals series losses",
    items: [
      { name: "Jerry West", aliases: ["The Logo"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Elgin Baylor", aliases: ["Baylor"] },
      { name: "Wilt Chamberlain", aliases: ["Wilt"] },
      { name: "Magic Johnson", aliases: ["Magic"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "John Havlicek", aliases: ["Hondo"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "Bob Cousy", aliases: ["The Cooz"] },
      { name: "Tommy Heinsohn", aliases: ["Heinsohn"] }
    ]
  },
  { id: "nba-number-one-picks-franchise", category: "Basketball", prompt: "Top 10 NBA franchises with most #1 overall draft picks", hint: "Most first overall selections",
    items: [
      { name: "Los Angeles Clippers", aliases: ["Clippers"] },
      { name: "Cleveland Cavaliers", aliases: ["Cavaliers","Cavs"] },
      { name: "Philadelphia 76ers", aliases: ["Sixers"] },
      { name: "Orlando Magic", aliases: ["Magic"] },
      { name: "Milwaukee Bucks", aliases: ["Bucks"] },
      { name: "New York Knicks", aliases: ["Knicks"] },
      { name: "Houston Rockets", aliases: ["Rockets"] },
      { name: "Sacramento Kings", aliases: ["Kings"] },
      { name: "Detroit Pistons", aliases: ["Pistons"] },
      { name: "Washington Wizards", aliases: ["Wizards","Bullets"] }
    ]
  },
  { id: "nba-coaches-wins", category: "Basketball", prompt: "Top 10 NBA coaches by all-time regular season wins", hint: "Career regular season wins",
    items: [
      { name: "Gregg Popovich", aliases: ["Pop"] },
      { name: "Don Nelson", aliases: ["Nellie"] },
      { name: "Lenny Wilkens", aliases: ["Wilkens"] },
      { name: "Jerry Sloan", aliases: ["Sloan"] },
      { name: "Pat Riley", aliases: ["Riley"] },
      { name: "Phil Jackson", aliases: ["Zen Master"] },
      { name: "Larry Brown", aliases: ["Brown"] },
      { name: "Rick Adelman", aliases: ["Adelman"] },
      { name: "Doc Rivers", aliases: ["Doc"] },
      { name: "George Karl", aliases: ["Karl"] }
    ]
  },
  { id: "nba-coaches-championships", category: "Basketball", prompt: "Top 10 NBA coaches by championships won", hint: "Career titles as head coach",
    items: [
      { name: "Phil Jackson", aliases: ["Zen Master"] },
      { name: "Red Auerbach", aliases: ["Auerbach"] },
      { name: "Gregg Popovich", aliases: ["Pop"] },
      { name: "Pat Riley", aliases: ["Riley"] },
      { name: "John Kundla", aliases: ["Kundla"] },
      { name: "Steve Kerr", aliases: ["Kerr"] },
      { name: "Erik Spoelstra", aliases: ["Spo","Spoelstra"] },
      { name: "Chuck Daly", aliases: ["Daly"] },
      { name: "Tom Heinsohn", aliases: ["Heinsohn"] },
      { name: "Bill Russell", aliases: ["Russell"] }
    ]
  },
  { id: "nba-three-point-percentage-career", category: "Basketball", prompt: "Top 10 NBA career 3-point percentage leaders (min 1000 makes)", hint: "Career 3P%",
    items: [
      { name: "Steve Kerr", aliases: ["Kerr"] },
      { name: "Hubert Davis", aliases: ["H. Davis"] },
      { name: "Stephen Curry", aliases: ["Chef Curry"] },
      { name: "Drazen Petrovic", aliases: ["Petrovic"] },
      { name: "Jason Kapono", aliases: ["Kapono"] },
      { name: "Steve Novak", aliases: ["Novak"] },
      { name: "Joe Harris", aliases: ["Harris"] },
      { name: "Kyle Korver", aliases: ["Korver"] },
      { name: "Tim Legler", aliases: ["Legler"] },
      { name: "Klay Thompson", aliases: ["Klay"] }
    ]
  },
  { id: "nba-mvp-foreign", category: "Basketball", prompt: "Top 10 international-born NBA MVPs (most recent)", hint: "Foreign-born MVP winners",
    items: [
      { name: "Nikola Jokic (Serbia)", aliases: ["Jokic"] },
      { name: "Joel Embiid (Cameroon)", aliases: ["Embiid"] },
      { name: "Giannis Antetokounmpo (Greece)", aliases: ["Giannis"] },
      { name: "Dirk Nowitzki (Germany)", aliases: ["Dirk"] },
      { name: "Steve Nash (Canada)", aliases: ["Nash"] },
      { name: "Hakeem Olajuwon (Nigeria)", aliases: ["The Dream"] },
      { name: "Shai Gilgeous-Alexander (Canada)", aliases: ["SGA"] },
      { name: "Tim Duncan (USVI)", aliases: ["Duncan"] },
      { name: "Patrick Ewing (Jamaica)", aliases: ["Ewing"] },
      { name: "Kareem Abdul-Jabbar (USA)", aliases: ["Kareem"] }
    ]
  },
  { id: "nba-all-time-minutes", category: "Basketball", prompt: "Top 10 NBA all-time minutes played leaders", hint: "Career regular season minutes",
    items: [
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Dirk Nowitzki", aliases: ["Dirk"] },
      { name: "Jason Kidd", aliases: ["J-Kidd"] },
      { name: "Elvin Hayes", aliases: ["The Big E"] },
      { name: "Kevin Garnett", aliases: ["KG"] },
      { name: "Wilt Chamberlain", aliases: ["Wilt"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Tim Duncan", aliases: ["Duncan"] }
    ]
  },
  { id: "nba-free-throws-made", category: "Basketball", prompt: "Top 10 NBA career free throws made leaders", hint: "Career made FTs",
    items: [
      { name: "Karl Malone", aliases: ["Mailman"] },
      { name: "Moses Malone", aliases: ["Moses"] },
      { name: "Kareem Abdul-Jabbar", aliases: ["Kareem"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Oscar Robertson", aliases: ["The Big O"] },
      { name: "Jerry West", aliases: ["The Logo"] },
      { name: "Kobe Bryant", aliases: ["Mamba"] },
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "Dirk Nowitzki", aliases: ["Dirk"] },
      { name: "James Harden", aliases: ["The Beard"] }
    ]
  },
  { id: "nba-points-per-game-career", category: "Basketball", prompt: "Top 10 NBA career points-per-game leaders", hint: "PPG min games qualifier",
    items: [
      { name: "Michael Jordan", aliases: ["MJ"] },
      { name: "Wilt Chamberlain", aliases: ["Wilt"] },
      { name: "Luka Doncic", aliases: ["Luka"] },
      { name: "Shai Gilgeous-Alexander", aliases: ["SGA"] },
      { name: "Kevin Durant", aliases: ["KD"] },
      { name: "Elgin Baylor", aliases: ["Baylor"] },
      { name: "LeBron James", aliases: ["King James"] },
      { name: "Joel Embiid", aliases: ["Embiid"] },
      { name: "Jerry West", aliases: ["The Logo"] },
      { name: "Allen Iverson", aliases: ["The Answer"] }
    ]
  },
  { id: "nba-finals-mvp-recent", category: "Basketball", prompt: "Top 10 most recent NBA Finals MVPs", hint: "Reverse chronological",
    items: [
      { name: "Jaylen Brown (2024)", aliases: ["Brown"] },
      { name: "Nikola Jokic (2023)", aliases: ["Joker"] },
      { name: "Stephen Curry (2022)", aliases: ["Curry"] },
      { name: "Giannis Antetokounmpo (2021)", aliases: ["Giannis"] },
      { name: "LeBron James (2020)", aliases: ["LeBron"] },
      { name: "Kawhi Leonard (2019)", aliases: ["Kawhi"] },
      { name: "Kevin Durant (2018)", aliases: ["KD"] },
      { name: "Kevin Durant (2017)", aliases: ["KD"] },
      { name: "LeBron James (2016)", aliases: ["LeBron"] },
      { name: "Andre Iguodala (2015)", aliases: ["Iggy"] }
    ]
  },
  { id: "nba-most-points-rookie-season", category: "Basketball", prompt: "Top 10 highest-scoring rookie seasons (total points)", hint: "Total regular season points as rookie",
    items: [
      { name: "Wilt Chamberlain (1959-60)", aliases: ["Wilt"] },
      { name: "Walt Bellamy (1961-62)", aliases: ["Bellamy"] },
      { name: "Oscar Robertson (1960-61)", aliases: ["Big O"] },
      { name: "Elvin Hayes (1968-69)", aliases: ["Big E"] },
      { name: "Michael Jordan (1984-85)", aliases: ["MJ"] },
      { name: "Rick Barry (1965-66)", aliases: ["Barry"] },
      { name: "Terry Dischinger (1962-63)", aliases: ["Dischinger"] },
      { name: "Allen Iverson (1996-97)", aliases: ["AI"] },
      { name: "Geoff Petrie (1970-71)", aliases: ["Petrie"] },
      { name: "Elgin Baylor (1958-59)", aliases: ["Baylor"] }
    ]
  },
  { id: "nba-most-points-finals-game", category: "Basketball", prompt: "Top 10 most points in a single NBA Finals game", hint: "Single-game Finals scoring record",
    items: [
      { name: "Elgin Baylor - 61", aliases: ["Baylor 61"] },
      { name: "Michael Jordan - 55", aliases: ["MJ 55"] },
      { name: "Rick Barry - 55", aliases: ["Barry 55"] },
      { name: "Jerry West - 53", aliases: ["West 53"] },
      { name: "Bob Pettit - 50", aliases: ["Pettit 50"] },
      { name: "LeBron James - 51", aliases: ["LeBron 51"] },
      { name: "Stephen Curry - 43", aliases: ["Curry 43"] },
      { name: "Michael Jordan - 45", aliases: ["MJ 45"] },
      { name: "Shaquille O'Neal - 44", aliases: ["Shaq 44"] },
      { name: "Wilt Chamberlain - 43", aliases: ["Wilt 43"] }
    ]
  },
  { id: "nba-mvp-consecutive", category: "Basketball", prompt: "Top 10 longest streaks of consecutive NBA MVP wins", hint: "Back-to-back MVP runs",
    items: [
      { name: "Bill Russell - 3 (1961-63)", aliases: ["Russell 3"] },
      { name: "Wilt Chamberlain - 3 (1966-68)", aliases: ["Wilt 3"] },
      { name: "Larry Bird - 3 (1984-86)", aliases: ["Bird 3"] },
      { name: "Moses Malone - 2 (1982-83)", aliases: ["Moses 2"] },
      { name: "Magic Johnson - 2 (1989-90)", aliases: ["Magic 2"] },
      { name: "Michael Jordan - 2 (1991-92)", aliases: ["MJ 2"] },
      { name: "Tim Duncan - 2 (2002-03)", aliases: ["Duncan 2"] },
      { name: "Steve Nash - 2 (2005-06)", aliases: ["Nash 2"] },
      { name: "LeBron James - 2 (2009-10)", aliases: ["LeBron 2"] },
      { name: "Giannis Antetokounmpo - 2 (2019-20)", aliases: ["Giannis 2"] }
    ]
  },
  { id: "nba-coaches-playoff-wins", category: "Basketball", prompt: "Top 10 NBA coaches by playoff wins", hint: "Career postseason wins",
    items: [
      { name: "Phil Jackson", aliases: ["Zen Master"] },
      { name: "Pat Riley", aliases: ["Riley"] },
      { name: "Gregg Popovich", aliases: ["Pop"] },
      { name: "Erik Spoelstra", aliases: ["Spo"] },
      { name: "Steve Kerr", aliases: ["Kerr"] },
      { name: "Larry Brown", aliases: ["Brown"] },
      { name: "Red Auerbach", aliases: ["Auerbach"] },
      { name: "Doc Rivers", aliases: ["Doc"] },
      { name: "Jerry Sloan", aliases: ["Sloan"] },
      { name: "George Karl", aliases: ["Karl"] }
    ]
  },
  { id: "rkt-gs-men-all-time", category: "Tennis", prompt: "Top 10 men with most Grand Slam singles titles (all-time)", hint: "The greats of the men's game",
    items: [
      { name: "Novak Djokovic", aliases: ["Djokovic", "Nole", "Djoker"] },
      { name: "Rafael Nadal", aliases: ["Nadal", "Rafa"] },
      { name: "Roger Federer", aliases: ["Federer", "Fed", "RF"] },
      { name: "Pete Sampras", aliases: ["Sampras", "Pistol Pete"] },
      { name: "Roy Emerson", aliases: ["Emerson"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "Rod Laver", aliases: ["Laver", "Rocket"] },
      { name: "Bill Tilden", aliases: ["Tilden"] },
      { name: "Andre Agassi", aliases: ["Agassi"] },
      { name: "Jimmy Connors", aliases: ["Connors", "Jimbo"] }
    ]
  },
  { id: "rkt-gs-women-all-time", category: "Tennis", prompt: "Top 10 women with most Grand Slam singles titles (all-time)", hint: "Queens of tennis",
    items: [
      { name: "Margaret Court", aliases: ["Court"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Helen Wills Moody", aliases: ["Helen Wills", "Wills Moody", "Wills"] },
      { name: "Chris Evert", aliases: ["Evert"] },
      { name: "Martina Navratilova", aliases: ["Navratilova"] },
      { name: "Billie Jean King", aliases: ["King", "BJK"] },
      { name: "Maureen Connolly", aliases: ["Connolly", "Little Mo"] },
      { name: "Suzanne Lenglen", aliases: ["Lenglen"] },
      { name: "Monica Seles", aliases: ["Seles"] }
    ]
  },
  { id: "rkt-wimbledon-men", category: "Tennis", prompt: "Top 10 men with most Wimbledon singles titles", hint: "Lords of the grass",
    items: [
      { name: "Roger Federer", aliases: ["Federer", "Fed"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Novak Djokovic", aliases: ["Djokovic", "Nole"] },
      { name: "William Renshaw", aliases: ["Renshaw"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "Laurence Doherty", aliases: ["Doherty", "Laurie Doherty"] },
      { name: "Reginald Doherty", aliases: ["Reggie Doherty"] },
      { name: "Anthony Wilding", aliases: ["Wilding"] },
      { name: "Rod Laver", aliases: ["Laver"] },
      { name: "Tony Wilding", aliases: ["Wilding"] }
    ]
  },
  { id: "rkt-wimbledon-women", category: "Tennis", prompt: "Top 10 women with most Wimbledon singles titles", hint: "Centre Court queens",
    items: [
      { name: "Martina Navratilova", aliases: ["Navratilova"] },
      { name: "Helen Wills Moody", aliases: ["Helen Wills"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Dorothea Lambert Chambers", aliases: ["Chambers", "Lambert Chambers"] },
      { name: "Blanche Bingley", aliases: ["Bingley"] },
      { name: "Suzanne Lenglen", aliases: ["Lenglen"] },
      { name: "Charlotte Cooper", aliases: ["Cooper", "Chattie Cooper"] },
      { name: "Louise Brough", aliases: ["Brough"] },
      { name: "Billie Jean King", aliases: ["BJK"] }
    ]
  },
  { id: "rkt-us-open-men", category: "Tennis", prompt: "Top 10 men with most US Open singles titles (Open Era + amateur)", hint: "Flushing Meadows kings",
    items: [
      { name: "Richard Sears", aliases: ["Sears"] },
      { name: "William Larned", aliases: ["Larned"] },
      { name: "Bill Tilden", aliases: ["Tilden"] },
      { name: "Jimmy Connors", aliases: ["Connors"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Roger Federer", aliases: ["Federer"] },
      { name: "Rafael Nadal", aliases: ["Nadal", "Rafa"] },
      { name: "John McEnroe", aliases: ["McEnroe", "Mac"] },
      { name: "Ivan Lendl", aliases: ["Lendl"] },
      { name: "Novak Djokovic", aliases: ["Djokovic"] }
    ]
  },
  { id: "rkt-us-open-women", category: "Tennis", prompt: "Top 10 women with most US Open singles titles", hint: "New York champions",
    items: [
      { name: "Molla Mallory", aliases: ["Mallory"] },
      { name: "Helen Wills Moody", aliases: ["Helen Wills"] },
      { name: "Chris Evert", aliases: ["Evert"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Margaret Court", aliases: ["Court"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Helen Jacobs", aliases: ["Jacobs"] },
      { name: "Alice Marble", aliases: ["Marble"] },
      { name: "Pauline Betz", aliases: ["Betz"] },
      { name: "Maria Bueno", aliases: ["Bueno"] }
    ]
  },
  { id: "rkt-french-open-men", category: "Tennis", prompt: "Top 10 men with most French Open singles titles", hint: "Kings of Roland Garros clay",
    items: [
      { name: "Rafael Nadal", aliases: ["Nadal", "Rafa", "King of Clay"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "Max Decugis", aliases: ["Decugis"] },
      { name: "Henri Cochet", aliases: ["Cochet"] },
      { name: "Novak Djokovic", aliases: ["Djokovic", "Nole"] },
      { name: "Rene Lacoste", aliases: ["Lacoste"] },
      { name: "Mats Wilander", aliases: ["Wilander"] },
      { name: "Ivan Lendl", aliases: ["Lendl"] },
      { name: "Gustavo Kuerten", aliases: ["Kuerten", "Guga"] },
      { name: "Jean Borotra", aliases: ["Borotra"] }
    ]
  },
  { id: "rkt-french-open-women", category: "Tennis", prompt: "Top 10 women with most French Open singles titles", hint: "Queens of Paris clay",
    items: [
      { name: "Chris Evert", aliases: ["Evert"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Suzanne Lenglen", aliases: ["Lenglen"] },
      { name: "Margaret Court", aliases: ["Court"] },
      { name: "Helen Wills Moody", aliases: ["Helen Wills"] },
      { name: "Justine Henin", aliases: ["Henin"] },
      { name: "Hilde Sperling", aliases: ["Sperling"] },
      { name: "Monica Seles", aliases: ["Seles"] },
      { name: "Arantxa Sanchez Vicario", aliases: ["Sanchez Vicario", "Arantxa"] },
      { name: "Iga Swiatek", aliases: ["Swiatek", "Iga"] }
    ]
  },
  { id: "rkt-australian-open-men", category: "Tennis", prompt: "Top 10 men with most Australian Open singles titles", hint: "Melbourne masters",
    items: [
      { name: "Novak Djokovic", aliases: ["Djokovic", "Nole"] },
      { name: "Roy Emerson", aliases: ["Emerson"] },
      { name: "Jack Crawford", aliases: ["Crawford"] },
      { name: "Ken Rosewall", aliases: ["Rosewall"] },
      { name: "Roger Federer", aliases: ["Federer"] },
      { name: "Andre Agassi", aliases: ["Agassi"] },
      { name: "Adrian Quist", aliases: ["Quist"] },
      { name: "James Anderson", aliases: ["Anderson"] },
      { name: "Mats Wilander", aliases: ["Wilander"] },
      { name: "Rod Laver", aliases: ["Laver"] }
    ]
  },
  { id: "rkt-australian-open-women", category: "Tennis", prompt: "Top 10 women with most Australian Open singles titles", hint: "Melbourne queens",
    items: [
      { name: "Margaret Court", aliases: ["Court"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Nancye Wynne Bolton", aliases: ["Bolton", "Wynne Bolton"] },
      { name: "Daphne Akhurst", aliases: ["Akhurst"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Monica Seles", aliases: ["Seles"] },
      { name: "Martina Hingis", aliases: ["Hingis"] },
      { name: "Evonne Goolagong", aliases: ["Goolagong", "Cawley"] },
      { name: "Joan Hartigan", aliases: ["Hartigan"] },
      { name: "Victoria Azarenka", aliases: ["Azarenka", "Vika"] }
    ]
  },
  { id: "rkt-weeks-no1-men", category: "Tennis", prompt: "Top 10 men with most weeks at ATP world No. 1", hint: "Atop the rankings",
    items: [
      { name: "Novak Djokovic", aliases: ["Djokovic"] },
      { name: "Roger Federer", aliases: ["Federer"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Ivan Lendl", aliases: ["Lendl"] },
      { name: "Jimmy Connors", aliases: ["Connors"] },
      { name: "Rafael Nadal", aliases: ["Nadal"] },
      { name: "John McEnroe", aliases: ["McEnroe"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "Andre Agassi", aliases: ["Agassi"] },
      { name: "Lleyton Hewitt", aliases: ["Hewitt"] }
    ]
  },
  { id: "rkt-weeks-no1-women", category: "Tennis", prompt: "Top 10 women with most weeks at WTA world No. 1", hint: "Queens of the rankings",
    items: [
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Martina Navratilova", aliases: ["Navratilova"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Chris Evert", aliases: ["Evert"] },
      { name: "Martina Hingis", aliases: ["Hingis"] },
      { name: "Monica Seles", aliases: ["Seles"] },
      { name: "Justine Henin", aliases: ["Henin"] },
      { name: "Iga Swiatek", aliases: ["Swiatek"] },
      { name: "Lindsay Davenport", aliases: ["Davenport"] },
      { name: "Caroline Wozniacki", aliases: ["Wozniacki"] }
    ]
  },
  { id: "rkt-atp-titles", category: "Tennis", prompt: "Top 10 men with most ATP singles titles (Open Era)", hint: "Tournament collectors",
    items: [
      { name: "Jimmy Connors", aliases: ["Connors"] },
      { name: "Roger Federer", aliases: ["Federer"] },
      { name: "Novak Djokovic", aliases: ["Djokovic"] },
      { name: "Ivan Lendl", aliases: ["Lendl"] },
      { name: "Rafael Nadal", aliases: ["Nadal"] },
      { name: "John McEnroe", aliases: ["McEnroe"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Guillermo Vilas", aliases: ["Vilas"] },
      { name: "Andre Agassi", aliases: ["Agassi"] }
    ]
  },
  { id: "rkt-wta-titles", category: "Tennis", prompt: "Top 10 women with most WTA singles titles (Open Era)", hint: "Trophy hunters",
    items: [
      { name: "Martina Navratilova", aliases: ["Navratilova"] },
      { name: "Chris Evert", aliases: ["Evert"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Evonne Goolagong", aliases: ["Goolagong", "Cawley"] },
      { name: "Margaret Court", aliases: ["Court"] },
      { name: "Billie Jean King", aliases: ["King", "BJK"] },
      { name: "Virginia Wade", aliases: ["Wade"] },
      { name: "Monica Seles", aliases: ["Seles"] },
      { name: "Venus Williams", aliases: ["Venus"] }
    ]
  },
  { id: "rkt-masters-1000", category: "Tennis", prompt: "Top 10 men with most ATP Masters 1000 titles", hint: "Tier just below the Slams",
    items: [
      { name: "Novak Djokovic", aliases: ["Djokovic"] },
      { name: "Rafael Nadal", aliases: ["Nadal"] },
      { name: "Roger Federer", aliases: ["Federer"] },
      { name: "Andre Agassi", aliases: ["Agassi"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Andy Murray", aliases: ["Murray"] },
      { name: "Ivan Lendl", aliases: ["Lendl"] },
      { name: "Thomas Muster", aliases: ["Muster"] },
      { name: "Michael Chang", aliases: ["Chang"] },
      { name: "Jim Courier", aliases: ["Courier"] }
    ]
  },
  { id: "rkt-davis-cup", category: "Tennis", prompt: "Top 10 countries with most Davis Cup titles", hint: "Men's national team tennis",
    items: [
      { name: "United States", aliases: ["USA", "America", "Etats-Unis"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Great Britain", aliases: ["UK", "Britain", "Royaume-Uni"] },
      { name: "France", aliases: [] },
      { name: "Sweden", aliases: ["Suede"] },
      { name: "Spain", aliases: ["Espagne", "Espana"] },
      { name: "Germany", aliases: ["Allemagne"] },
      { name: "Czech Republic", aliases: ["Czechia", "Czechoslovakia", "Tchequie"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Italy", aliases: ["Italie", "Italia"] }
    ]
  },
  { id: "rkt-bjk-cup", category: "Tennis", prompt: "Top 10 countries with most Billie Jean King Cup (Fed Cup) titles", hint: "Women's national team tennis",
    items: [
      { name: "United States", aliases: ["USA", "Etats-Unis"] },
      { name: "Czech Republic", aliases: ["Czechia", "Czechoslovakia"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Spain", aliases: ["Espagne"] },
      { name: "Russia", aliases: ["Russie"] },
      { name: "Italy", aliases: ["Italie"] },
      { name: "France", aliases: [] },
      { name: "Germany", aliases: ["Allemagne"] },
      { name: "Slovakia", aliases: ["Slovaquie"] },
      { name: "Switzerland", aliases: ["Suisse"] }
    ]
  },
  { id: "rkt-doubles-gs-men", category: "Tennis", prompt: "Top 10 men with most doubles Grand Slam titles", hint: "Best doubles players ever",
    items: [
      { name: "Mike Bryan", aliases: ["Bryan"] },
      { name: "Bob Bryan", aliases: ["Bryan"] },
      { name: "John Newcombe", aliases: ["Newcombe"] },
      { name: "Todd Woodbridge", aliases: ["Woodbridge"] },
      { name: "Roy Emerson", aliases: ["Emerson"] },
      { name: "Bob Hewitt", aliases: ["Hewitt"] },
      { name: "Frew McMillan", aliases: ["McMillan"] },
      { name: "John Bromwich", aliases: ["Bromwich"] },
      { name: "Adrian Quist", aliases: ["Quist"] },
      { name: "Daniel Nestor", aliases: ["Nestor"] }
    ]
  },
  { id: "rkt-doubles-gs-women", category: "Tennis", prompt: "Top 10 women with most doubles Grand Slam titles", hint: "Doubles greats",
    items: [
      { name: "Martina Navratilova", aliases: ["Navratilova"] },
      { name: "Margaret Court", aliases: ["Court"] },
      { name: "Pam Shriver", aliases: ["Shriver"] },
      { name: "Louise Brough", aliases: ["Brough"] },
      { name: "Margaret Osborne duPont", aliases: ["duPont", "Osborne"] },
      { name: "Doris Hart", aliases: ["Hart"] },
      { name: "Billie Jean King", aliases: ["King", "BJK"] },
      { name: "Elizabeth Ryan", aliases: ["Ryan"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Venus Williams", aliases: ["Venus"] }
    ]
  },
  { id: "rkt-olympic-tennis", category: "Tennis", prompt: "Top 10 players with most Olympic tennis medals (singles + doubles)", hint: "Five-ring tennis",
    items: [
      { name: "Venus Williams", aliases: ["Venus"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Kathleen McKane Godfree", aliases: ["McKane", "Godfree"] },
      { name: "Reginald Doherty", aliases: ["Doherty"] },
      { name: "Max Decugis", aliases: ["Decugis"] },
      { name: "Gigi Fernandez", aliases: ["Fernandez"] },
      { name: "Mary Joe Fernandez", aliases: ["Fernandez"] },
      { name: "Andy Murray", aliases: ["Murray"] },
      { name: "Rafael Nadal", aliases: ["Nadal"] },
      { name: "Nicolas Massu", aliases: ["Massu"] }
    ]
  },
  { id: "rkt-french-players", category: "Tennis", prompt: "Top 10 greatest French tennis players (Open Era, singles)", hint: "Les Bleus on court",
    items: [
      { name: "Yannick Noah", aliases: ["Noah"] },
      { name: "Mary Pierce", aliases: ["Pierce"] },
      { name: "Amelie Mauresmo", aliases: ["Mauresmo"] },
      { name: "Jo-Wilfried Tsonga", aliases: ["Tsonga"] },
      { name: "Gael Monfils", aliases: ["Monfils"] },
      { name: "Richard Gasquet", aliases: ["Gasquet"] },
      { name: "Marion Bartoli", aliases: ["Bartoli"] },
      { name: "Henri Leconte", aliases: ["Leconte"] },
      { name: "Cedric Pioline", aliases: ["Pioline"] },
      { name: "Guy Forget", aliases: ["Forget"] }
    ]
  },
  { id: "rkt-spanish-players", category: "Tennis", prompt: "Top 10 greatest Spanish tennis players (Open Era)", hint: "La Armada Espanola",
    items: [
      { name: "Rafael Nadal", aliases: ["Nadal", "Rafa"] },
      { name: "Carlos Alcaraz", aliases: ["Alcaraz"] },
      { name: "Arantxa Sanchez Vicario", aliases: ["Sanchez Vicario"] },
      { name: "Manuel Santana", aliases: ["Santana"] },
      { name: "Conchita Martinez", aliases: ["Martinez"] },
      { name: "Sergi Bruguera", aliases: ["Bruguera"] },
      { name: "Carlos Moya", aliases: ["Moya"] },
      { name: "Garbine Muguruza", aliases: ["Muguruza"] },
      { name: "Juan Carlos Ferrero", aliases: ["Ferrero"] },
      { name: "David Ferrer", aliases: ["Ferrer"] }
    ]
  },
  { id: "rkt-american-players", category: "Tennis", prompt: "Top 10 greatest American tennis players (Open Era)", hint: "Stars and Stripes",
    items: [
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Andre Agassi", aliases: ["Agassi"] },
      { name: "Jimmy Connors", aliases: ["Connors"] },
      { name: "John McEnroe", aliases: ["McEnroe"] },
      { name: "Chris Evert", aliases: ["Evert"] },
      { name: "Billie Jean King", aliases: ["King", "BJK"] },
      { name: "Venus Williams", aliases: ["Venus"] },
      { name: "Jim Courier", aliases: ["Courier"] },
      { name: "Michael Chang", aliases: ["Chang"] }
    ]
  },
  { id: "rkt-australian-players", category: "Tennis", prompt: "Top 10 greatest Australian tennis players (Open Era + amateur)", hint: "Aussie aces",
    items: [
      { name: "Rod Laver", aliases: ["Laver", "Rocket"] },
      { name: "Margaret Court", aliases: ["Court"] },
      { name: "Ken Rosewall", aliases: ["Rosewall"] },
      { name: "Roy Emerson", aliases: ["Emerson"] },
      { name: "John Newcombe", aliases: ["Newcombe"] },
      { name: "Evonne Goolagong", aliases: ["Goolagong", "Cawley"] },
      { name: "Pat Rafter", aliases: ["Rafter"] },
      { name: "Lleyton Hewitt", aliases: ["Hewitt"] },
      { name: "Pat Cash", aliases: ["Cash"] },
      { name: "Ashleigh Barty", aliases: ["Barty", "Ash Barty"] }
    ]
  },
  { id: "rkt-atp-finals", category: "Tennis", prompt: "Top 10 men with most ATP Finals (year-end championship) titles", hint: "End-of-season elite eight",
    items: [
      { name: "Roger Federer", aliases: ["Federer"] },
      { name: "Novak Djokovic", aliases: ["Djokovic"] },
      { name: "Ivan Lendl", aliases: ["Lendl"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Ilie Nastase", aliases: ["Nastase"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "John McEnroe", aliases: ["McEnroe"] },
      { name: "Boris Becker", aliases: ["Becker"] },
      { name: "Stefan Edberg", aliases: ["Edberg"] },
      { name: "Alexander Zverev", aliases: ["Zverev", "Sascha"] }
    ]
  },
  { id: "gol-majors-men", category: "Golf", prompt: "Top 10 men with most major championships in golf", hint: "The biggest titles in the sport",
    items: [
      { name: "Jack Nicklaus", aliases: ["Nicklaus", "Golden Bear"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Walter Hagen", aliases: ["Hagen"] },
      { name: "Ben Hogan", aliases: ["Hogan"] },
      { name: "Gary Player", aliases: ["Player"] },
      { name: "Tom Watson", aliases: ["Watson"] },
      { name: "Bobby Jones", aliases: ["Jones"] },
      { name: "Arnold Palmer", aliases: ["Palmer", "Arnie"] },
      { name: "Gene Sarazen", aliases: ["Sarazen"] },
      { name: "Sam Snead", aliases: ["Snead"] }
    ]
  },
  { id: "gol-pga-tour-wins", category: "Golf", prompt: "Top 10 golfers with most PGA Tour wins", hint: "Career victory leaders",
    items: [
      { name: "Sam Snead", aliases: ["Snead"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] },
      { name: "Ben Hogan", aliases: ["Hogan"] },
      { name: "Arnold Palmer", aliases: ["Palmer"] },
      { name: "Byron Nelson", aliases: ["Nelson"] },
      { name: "Billy Casper", aliases: ["Casper"] },
      { name: "Walter Hagen", aliases: ["Hagen"] },
      { name: "Phil Mickelson", aliases: ["Mickelson", "Lefty"] },
      { name: "Cary Middlecoff", aliases: ["Middlecoff"] }
    ]
  },
  { id: "gol-weeks-no1", category: "Golf", prompt: "Top 10 golfers with most weeks at world No. 1 (OWGR)", hint: "Time spent atop the world",
    items: [
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Greg Norman", aliases: ["Norman", "Shark"] },
      { name: "Dustin Johnson", aliases: ["DJ", "Johnson"] },
      { name: "Rory McIlroy", aliases: ["McIlroy", "Rory"] },
      { name: "Nick Faldo", aliases: ["Faldo"] },
      { name: "Scottie Scheffler", aliases: ["Scheffler"] },
      { name: "Luke Donald", aliases: ["Donald"] },
      { name: "Jon Rahm", aliases: ["Rahm"] },
      { name: "Jordan Spieth", aliases: ["Spieth"] },
      { name: "Adam Scott", aliases: ["Scott"] }
    ]
  },
  { id: "gol-ryder-cup-points", category: "Golf", prompt: "Top 10 golfers with most Ryder Cup career points", hint: "USA vs Europe legends",
    items: [
      { name: "Sergio Garcia", aliases: ["Garcia"] },
      { name: "Nick Faldo", aliases: ["Faldo"] },
      { name: "Bernhard Langer", aliases: ["Langer"] },
      { name: "Billy Casper", aliases: ["Casper"] },
      { name: "Arnold Palmer", aliases: ["Palmer"] },
      { name: "Lee Westwood", aliases: ["Westwood"] },
      { name: "Colin Montgomerie", aliases: ["Montgomerie", "Monty"] },
      { name: "Seve Ballesteros", aliases: ["Ballesteros", "Seve"] },
      { name: "Phil Mickelson", aliases: ["Mickelson"] },
      { name: "Ian Woosnam", aliases: ["Woosnam"] }
    ]
  },
  { id: "gol-pga-prize-money", category: "Golf", prompt: "Top 10 golfers by career PGA Tour prize money", hint: "Biggest career earners",
    items: [
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Rory McIlroy", aliases: ["McIlroy", "Rory"] },
      { name: "Phil Mickelson", aliases: ["Mickelson"] },
      { name: "Scottie Scheffler", aliases: ["Scheffler"] },
      { name: "Justin Thomas", aliases: ["Thomas", "JT"] },
      { name: "Dustin Johnson", aliases: ["DJ", "Johnson"] },
      { name: "Jordan Spieth", aliases: ["Spieth"] },
      { name: "Jim Furyk", aliases: ["Furyk"] },
      { name: "Adam Scott", aliases: ["Scott"] },
      { name: "Vijay Singh", aliases: ["Singh"] }
    ]
  },
  { id: "gol-european-tour-wins", category: "Golf", prompt: "Top 10 golfers with most European Tour (DP World Tour) wins", hint: "European Tour leaders",
    items: [
      { name: "Seve Ballesteros", aliases: ["Ballesteros", "Seve"] },
      { name: "Bernhard Langer", aliases: ["Langer"] },
      { name: "Nick Faldo", aliases: ["Faldo"] },
      { name: "Colin Montgomerie", aliases: ["Montgomerie", "Monty"] },
      { name: "Ernie Els", aliases: ["Els", "Big Easy"] },
      { name: "Miguel Angel Jimenez", aliases: ["Jimenez"] },
      { name: "Ian Woosnam", aliases: ["Woosnam"] },
      { name: "Greg Norman", aliases: ["Norman"] },
      { name: "Lee Westwood", aliases: ["Westwood"] },
      { name: "Padraig Harrington", aliases: ["Harrington"] }
    ]
  },
  { id: "gol-players-championship", category: "Golf", prompt: "Top 10 golfers with most Players Championship titles", hint: "The fifth major at TPC Sawgrass",
    items: [
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Steve Elkington", aliases: ["Elkington"] },
      { name: "Hal Sutton", aliases: ["Sutton"] },
      { name: "Davis Love III", aliases: ["Love"] },
      { name: "Fred Couples", aliases: ["Couples"] },
      { name: "Greg Norman", aliases: ["Norman"] },
      { name: "Justin Thomas", aliases: ["Thomas", "JT"] },
      { name: "Scottie Scheffler", aliases: ["Scheffler"] },
      { name: "Adam Scott", aliases: ["Scott"] }
    ]
  },
  { id: "gol-masters-wins", category: "Golf", prompt: "Top 10 golfers with most Masters Tournament wins", hint: "Augusta green jackets",
    items: [
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Arnold Palmer", aliases: ["Palmer"] },
      { name: "Jimmy Demaret", aliases: ["Demaret"] },
      { name: "Sam Snead", aliases: ["Snead"] },
      { name: "Gary Player", aliases: ["Player"] },
      { name: "Nick Faldo", aliases: ["Faldo"] },
      { name: "Phil Mickelson", aliases: ["Mickelson"] },
      { name: "Bubba Watson", aliases: ["Watson"] },
      { name: "Ben Hogan", aliases: ["Hogan"] }
    ]
  },
  { id: "gol-us-open-wins", category: "Golf", prompt: "Top 10 golfers with most US Open (golf) wins", hint: "America's national championship",
    items: [
      { name: "Willie Anderson", aliases: ["Anderson"] },
      { name: "Bobby Jones", aliases: ["Jones"] },
      { name: "Ben Hogan", aliases: ["Hogan"] },
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] },
      { name: "Hale Irwin", aliases: ["Irwin"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Brooks Koepka", aliases: ["Koepka"] },
      { name: "Curtis Strange", aliases: ["Strange"] },
      { name: "Andy North", aliases: ["North"] },
      { name: "Lee Janzen", aliases: ["Janzen"] }
    ]
  },
  { id: "gol-open-wins", category: "Golf", prompt: "Top 10 golfers with most Open Championship (British Open) wins", hint: "Claret Jug winners",
    items: [
      { name: "Harry Vardon", aliases: ["Vardon"] },
      { name: "James Braid", aliases: ["Braid"] },
      { name: "John Henry Taylor", aliases: ["Taylor", "JH Taylor"] },
      { name: "Peter Thomson", aliases: ["Thomson"] },
      { name: "Tom Watson", aliases: ["Watson"] },
      { name: "Tom Morris Sr", aliases: ["Old Tom Morris"] },
      { name: "Tom Morris Jr", aliases: ["Young Tom Morris"] },
      { name: "Bobby Locke", aliases: ["Locke"] },
      { name: "Walter Hagen", aliases: ["Hagen"] },
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] }
    ]
  },
  { id: "gol-pga-championship-wins", category: "Golf", prompt: "Top 10 golfers with most PGA Championship wins", hint: "Wanamaker Trophy winners",
    items: [
      { name: "Walter Hagen", aliases: ["Hagen"] },
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Gene Sarazen", aliases: ["Sarazen"] },
      { name: "Sam Snead", aliases: ["Snead"] },
      { name: "Brooks Koepka", aliases: ["Koepka"] },
      { name: "Jim Barnes", aliases: ["Barnes"] },
      { name: "Leo Diegel", aliases: ["Diegel"] },
      { name: "Paul Runyan", aliases: ["Runyan"] },
      { name: "Denny Shute", aliases: ["Shute"] }
    ]
  },
  { id: "gol-lpga-majors", category: "Golf", prompt: "Top 10 women with most LPGA major championships", hint: "Women's golf greats",
    items: [
      { name: "Patty Berg", aliases: ["Berg"] },
      { name: "Mickey Wright", aliases: ["Wright"] },
      { name: "Louise Suggs", aliases: ["Suggs"] },
      { name: "Annika Sorenstam", aliases: ["Sorenstam"] },
      { name: "Babe Zaharias", aliases: ["Zaharias", "Didrikson"] },
      { name: "Betsy Rawls", aliases: ["Rawls"] },
      { name: "Karrie Webb", aliases: ["Webb"] },
      { name: "Inbee Park", aliases: ["Park"] },
      { name: "Pat Bradley", aliases: ["Bradley"] },
      { name: "Juli Inkster", aliases: ["Inkster"] }
    ]
  },
  { id: "gol-lpga-prize-money", category: "Golf", prompt: "Top 10 women golfers by career LPGA prize money", hint: "Top women earners",
    items: [
      { name: "Annika Sorenstam", aliases: ["Sorenstam"] },
      { name: "Karrie Webb", aliases: ["Webb"] },
      { name: "Cristie Kerr", aliases: ["Kerr"] },
      { name: "Inbee Park", aliases: ["Park"] },
      { name: "Lydia Ko", aliases: ["Ko"] },
      { name: "Stacy Lewis", aliases: ["Lewis"] },
      { name: "Suzann Pettersen", aliases: ["Pettersen"] },
      { name: "Lorena Ochoa", aliases: ["Ochoa"] },
      { name: "Brittany Lincicome", aliases: ["Lincicome"] },
      { name: "Juli Inkster", aliases: ["Inkster"] }
    ]
  },
  { id: "gol-usa-players", category: "Golf", prompt: "Top 10 greatest American golfers of all time", hint: "USA's finest",
    items: [
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Ben Hogan", aliases: ["Hogan"] },
      { name: "Bobby Jones", aliases: ["Jones"] },
      { name: "Sam Snead", aliases: ["Snead"] },
      { name: "Arnold Palmer", aliases: ["Palmer"] },
      { name: "Walter Hagen", aliases: ["Hagen"] },
      { name: "Byron Nelson", aliases: ["Nelson"] },
      { name: "Phil Mickelson", aliases: ["Mickelson"] },
      { name: "Tom Watson", aliases: ["Watson"] }
    ]
  },
  { id: "gol-uk-players", category: "Golf", prompt: "Top 10 greatest British/Irish golfers of all time", hint: "Greats from the UK & Ireland",
    items: [
      { name: "Nick Faldo", aliases: ["Faldo"] },
      { name: "Rory McIlroy", aliases: ["McIlroy"] },
      { name: "Harry Vardon", aliases: ["Vardon"] },
      { name: "Sandy Lyle", aliases: ["Lyle"] },
      { name: "Ian Woosnam", aliases: ["Woosnam"] },
      { name: "Tony Jacklin", aliases: ["Jacklin"] },
      { name: "Padraig Harrington", aliases: ["Harrington"] },
      { name: "Colin Montgomerie", aliases: ["Montgomerie", "Monty"] },
      { name: "Lee Westwood", aliases: ["Westwood"] },
      { name: "Justin Rose", aliases: ["Rose"] }
    ]
  },
  { id: "gol-south-africa-players", category: "Golf", prompt: "Top 10 greatest South African golfers of all time", hint: "Springbok swingers",
    items: [
      { name: "Gary Player", aliases: ["Player"] },
      { name: "Ernie Els", aliases: ["Els", "Big Easy"] },
      { name: "Bobby Locke", aliases: ["Locke"] },
      { name: "Retief Goosen", aliases: ["Goosen"] },
      { name: "Louis Oosthuizen", aliases: ["Oosthuizen"] },
      { name: "Charl Schwartzel", aliases: ["Schwartzel"] },
      { name: "Trevor Immelman", aliases: ["Immelman"] },
      { name: "Branden Grace", aliases: ["Grace"] },
      { name: "Tim Clark", aliases: ["Clark"] },
      { name: "David Frost", aliases: ["Frost"] }
    ]
  },
  { id: "gol-spanish-players", category: "Golf", prompt: "Top 10 greatest Spanish golfers of all time", hint: "Spanish swing legends",
    items: [
      { name: "Seve Ballesteros", aliases: ["Ballesteros", "Seve"] },
      { name: "Jose Maria Olazabal", aliases: ["Olazabal"] },
      { name: "Sergio Garcia", aliases: ["Garcia"] },
      { name: "Jon Rahm", aliases: ["Rahm"] },
      { name: "Miguel Angel Jimenez", aliases: ["Jimenez"] },
      { name: "Jose Maria Canizares", aliases: ["Canizares"] },
      { name: "Manuel Pinero", aliases: ["Pinero"] },
      { name: "Antonio Garrido", aliases: ["Garrido"] },
      { name: "Rafael Cabrera-Bello", aliases: ["Cabrera-Bello"] },
      { name: "Alvaro Quiros", aliases: ["Quiros"] }
    ]
  },
  { id: "gol-swedish-players", category: "Golf", prompt: "Top 10 greatest Swedish golfers of all time", hint: "Sverige's finest on the fairway",
    items: [
      { name: "Annika Sorenstam", aliases: ["Sorenstam"] },
      { name: "Henrik Stenson", aliases: ["Stenson"] },
      { name: "Jesper Parnevik", aliases: ["Parnevik"] },
      { name: "Robert Karlsson", aliases: ["Karlsson"] },
      { name: "Helen Alfredsson", aliases: ["Alfredsson"] },
      { name: "Anna Nordqvist", aliases: ["Nordqvist"] },
      { name: "Liselotte Neumann", aliases: ["Neumann"] },
      { name: "Pierre Fulke", aliases: ["Fulke"] },
      { name: "Alexander Noren", aliases: ["Noren"] },
      { name: "Carl Pettersson", aliases: ["Pettersson"] }
    ]
  },
  { id: "gol-south-korea-players", category: "Golf", prompt: "Top 10 greatest South Korean golfers of all time", hint: "K-golf powerhouses",
    items: [
      { name: "Inbee Park", aliases: ["Park"] },
      { name: "Se Ri Pak", aliases: ["Pak"] },
      { name: "Sung Hyun Park", aliases: ["Park"] },
      { name: "K.J. Choi", aliases: ["Choi"] },
      { name: "Y.E. Yang", aliases: ["Yang"] },
      { name: "Jin Young Ko", aliases: ["Ko"] },
      { name: "Sei Young Kim", aliases: ["Kim"] },
      { name: "Hyo Joo Kim", aliases: ["Kim"] },
      { name: "Im Sung-jae", aliases: ["Im"] },
      { name: "So Yeon Ryu", aliases: ["Ryu"] }
    ]
  },
  { id: "gol-youngest-major-winners", category: "Golf", prompt: "Top 10 youngest male major championship winners", hint: "Teen and twenty-something champions",
    items: [
      { name: "Young Tom Morris", aliases: ["Tom Morris Jr", "Morris"] },
      { name: "Gene Sarazen", aliases: ["Sarazen"] },
      { name: "Tom Creavy", aliases: ["Creavy"] },
      { name: "John McDermott", aliases: ["McDermott"] },
      { name: "Francis Ouimet", aliases: ["Ouimet"] },
      { name: "Tiger Woods", aliases: ["Tiger", "Woods"] },
      { name: "Jordan Spieth", aliases: ["Spieth"] },
      { name: "Rory McIlroy", aliases: ["McIlroy"] },
      { name: "Seve Ballesteros", aliases: ["Ballesteros", "Seve"] },
      { name: "Jack Nicklaus", aliases: ["Nicklaus"] }
    ]
  },
  { id: "rkt-youngest-gs-winners", category: "Tennis", prompt: "Top 10 youngest Grand Slam singles champions (Open Era)", hint: "Teen prodigies",
    items: [
      { name: "Martina Hingis", aliases: ["Hingis"] },
      { name: "Michael Chang", aliases: ["Chang"] },
      { name: "Boris Becker", aliases: ["Becker"] },
      { name: "Monica Seles", aliases: ["Seles"] },
      { name: "Tracy Austin", aliases: ["Austin"] },
      { name: "Mats Wilander", aliases: ["Wilander"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "Pete Sampras", aliases: ["Sampras"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Rafael Nadal", aliases: ["Nadal", "Rafa"] }
    ]
  },
  { id: "rkt-oldest-gs-winners", category: "Tennis", prompt: "Top 10 oldest Grand Slam singles champions (Open Era)", hint: "Veterans defying age",
    items: [
      { name: "Ken Rosewall", aliases: ["Rosewall"] },
      { name: "Serena Williams", aliases: ["Serena"] },
      { name: "Novak Djokovic", aliases: ["Djokovic"] },
      { name: "Andres Gimeno", aliases: ["Gimeno"] },
      { name: "Roger Federer", aliases: ["Federer"] },
      { name: "Rafael Nadal", aliases: ["Nadal"] },
      { name: "Stan Wawrinka", aliases: ["Wawrinka", "Stanimal"] },
      { name: "Andre Agassi", aliases: ["Agassi"] },
      { name: "Flavia Pennetta", aliases: ["Pennetta"] },
      { name: "Marion Bartoli", aliases: ["Bartoli"] }
    ]
  },
  { id: "rkt-serbian-players", category: "Tennis", prompt: "Top 10 greatest Serbian tennis players (Open Era)", hint: "From Belgrade and beyond",
    items: [
      { name: "Novak Djokovic", aliases: ["Djokovic", "Nole"] },
      { name: "Monica Seles", aliases: ["Seles"] },
      { name: "Ana Ivanovic", aliases: ["Ivanovic"] },
      { name: "Jelena Jankovic", aliases: ["Jankovic"] },
      { name: "Janko Tipsarevic", aliases: ["Tipsarevic"] },
      { name: "Viktor Troicki", aliases: ["Troicki"] },
      { name: "Nenad Zimonjic", aliases: ["Zimonjic"] },
      { name: "Slobodan Zivojinovic", aliases: ["Zivojinovic", "Bobo"] },
      { name: "Dusan Lajovic", aliases: ["Lajovic"] },
      { name: "Filip Krajinovic", aliases: ["Krajinovic"] }
    ]
  },
  { id: "rkt-swiss-players", category: "Tennis", prompt: "Top 10 greatest Swiss tennis players (Open Era)", hint: "Helvetic heroes",
    items: [
      { name: "Roger Federer", aliases: ["Federer", "RF"] },
      { name: "Martina Hingis", aliases: ["Hingis"] },
      { name: "Stan Wawrinka", aliases: ["Wawrinka"] },
      { name: "Belinda Bencic", aliases: ["Bencic"] },
      { name: "Patty Schnyder", aliases: ["Schnyder"] },
      { name: "Marc Rosset", aliases: ["Rosset"] },
      { name: "Heinz Gunthardt", aliases: ["Gunthardt"] },
      { name: "Jakob Hlasek", aliases: ["Hlasek"] },
      { name: "Timea Bacsinszky", aliases: ["Bacsinszky"] },
      { name: "Manuela Maleeva-Fragniere", aliases: ["Maleeva"] }
    ]
  },
  { id: "rkt-argentine-players", category: "Tennis", prompt: "Top 10 greatest Argentine tennis players (Open Era)", hint: "Albiceleste racket stars",
    items: [
      { name: "Guillermo Vilas", aliases: ["Vilas"] },
      { name: "Gabriela Sabatini", aliases: ["Sabatini"] },
      { name: "Juan Martin del Potro", aliases: ["del Potro", "Delpo"] },
      { name: "David Nalbandian", aliases: ["Nalbandian"] },
      { name: "Gaston Gaudio", aliases: ["Gaudio"] },
      { name: "Guillermo Coria", aliases: ["Coria"] },
      { name: "Diego Schwartzman", aliases: ["Schwartzman"] },
      { name: "Jose Luis Clerc", aliases: ["Clerc"] },
      { name: "Mariano Puerta", aliases: ["Puerta"] },
      { name: "Martin Jaite", aliases: ["Jaite"] }
    ]
  },
  { id: "rkt-tt-mens-worlds", category: "Tennis", prompt: "Top 10 men with most Table Tennis World Championships (singles)", hint: "Kings of the ping pong table",
    items: [
      { name: "Viktor Barna", aliases: ["Barna"] },
      { name: "Wang Liqin", aliases: ["Wang"] },
      { name: "Zhuang Zedong", aliases: ["Zhuang"] },
      { name: "Ma Long", aliases: ["Ma"] },
      { name: "Zhang Jike", aliases: ["Zhang"] },
      { name: "Richard Bergmann", aliases: ["Bergmann"] },
      { name: "Jan-Ove Waldner", aliases: ["Waldner"] },
      { name: "Wang Hao", aliases: ["Wang"] },
      { name: "Liu Guoliang", aliases: ["Liu"] },
      { name: "Kong Linghui", aliases: ["Kong"] }
    ]
  },
  { id: "rkt-tt-womens-worlds", category: "Tennis", prompt: "Top 10 women with most Table Tennis World Championships (singles)", hint: "Queens of ping pong",
    items: [
      { name: "Angelica Rozeanu", aliases: ["Rozeanu"] },
      { name: "Maria Mednyanszky", aliases: ["Mednyanszky"] },
      { name: "Deng Yaping", aliases: ["Deng"] },
      { name: "Wang Nan", aliases: ["Wang"] },
      { name: "Zhang Yining", aliases: ["Zhang"] },
      { name: "Ding Ning", aliases: ["Ding"] },
      { name: "Liu Shiwen", aliases: ["Liu"] },
      { name: "Li Xiaoxia", aliases: ["Li"] },
      { name: "Qiao Hong", aliases: ["Qiao"] },
      { name: "Chen Jing", aliases: ["Chen"] }
    ]
  },
  { id: "rkt-tt-countries", category: "Tennis", prompt: "Top 10 countries by Table Tennis World Championship gold medals", hint: "Dominant ping pong nations",
    items: [
      { name: "China", aliases: ["Chine"] },
      { name: "Hungary", aliases: ["Hongrie"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Czechoslovakia", aliases: ["Czechia", "Czech Republic"] },
      { name: "Sweden", aliases: ["Suede"] },
      { name: "Romania", aliases: ["Roumanie"] },
      { name: "South Korea", aliases: ["Korea", "Coree du Sud"] },
      { name: "England", aliases: ["Angleterre"] },
      { name: "Yugoslavia", aliases: ["Yougoslavie"] },
      { name: "Austria", aliases: ["Autriche"] }
    ]
  },
  { id: "rkt-badminton-worlds", category: "Tennis", prompt: "Top 10 players with most BWF Badminton World Championships singles titles", hint: "World shuttle champions",
    items: [
      { name: "Lin Dan", aliases: ["Lin"] },
      { name: "Chen Long", aliases: ["Chen"] },
      { name: "Yang Yang", aliases: ["Yang"] },
      { name: "Han Aiping", aliases: ["Han"] },
      { name: "Li Lingwei", aliases: ["Li"] },
      { name: "Ye Zhaoying", aliases: ["Ye"] },
      { name: "Xie Xingfang", aliases: ["Xie"] },
      { name: "Zhang Ning", aliases: ["Zhang"] },
      { name: "Lee Chong Wei", aliases: ["Lee"] },
      { name: "Viktor Axelsen", aliases: ["Axelsen"] }
    ]
  },
  { id: "rkt-snooker-worlds", category: "Tennis", prompt: "Top 10 players with most Snooker World Championship titles", hint: "Crucible legends",
    items: [
      { name: "Joe Davis", aliases: ["Davis"] },
      { name: "Stephen Hendry", aliases: ["Hendry"] },
      { name: "Ronnie O'Sullivan", aliases: ["O'Sullivan", "Rocket"] },
      { name: "Ray Reardon", aliases: ["Reardon"] },
      { name: "Steve Davis", aliases: ["Davis"] },
      { name: "John Higgins", aliases: ["Higgins"] },
      { name: "Mark Selby", aliases: ["Selby"] },
      { name: "John Pulman", aliases: ["Pulman"] },
      { name: "Fred Davis", aliases: ["Davis"] },
      { name: "Alex Higgins", aliases: ["Higgins", "Hurricane"] }
    ]
  },
  { id: "rkt-pdc-darts-worlds", category: "Tennis", prompt: "Top 10 players with most PDC World Darts Championship titles", hint: "Oche masters of the PDC era",
    items: [
      { name: "Phil Taylor", aliases: ["Taylor", "The Power"] },
      { name: "Michael van Gerwen", aliases: ["van Gerwen", "MVG"] },
      { name: "Gary Anderson", aliases: ["Anderson"] },
      { name: "Adrian Lewis", aliases: ["Lewis", "Jackpot"] },
      { name: "Dennis Priestley", aliases: ["Priestley"] },
      { name: "John Part", aliases: ["Part"] },
      { name: "Raymond van Barneveld", aliases: ["van Barneveld", "Barney"] },
      { name: "Peter Wright", aliases: ["Wright", "Snakebite"] },
      { name: "Rob Cross", aliases: ["Cross"] },
      { name: "Luke Humphries", aliases: ["Humphries"] }
    ]
  },
  { id: "rkt-squash-worlds-men", category: "Tennis", prompt: "Top 10 men with most Squash World Championship titles", hint: "Glass court greats",
    items: [
      { name: "Jansher Khan", aliases: ["Khan"] },
      { name: "Jahangir Khan", aliases: ["Khan"] },
      { name: "Geoff Hunt", aliases: ["Hunt"] },
      { name: "Amr Shabana", aliases: ["Shabana"] },
      { name: "Nick Matthew", aliases: ["Matthew"] },
      { name: "Ramy Ashour", aliases: ["Ashour"] },
      { name: "Karim Abdel Gawad", aliases: ["Gawad"] },
      { name: "Mohamed ElShorbagy", aliases: ["ElShorbagy"] },
      { name: "Ali Farag", aliases: ["Farag"] },
      { name: "David Palmer", aliases: ["Palmer"] }
    ]
  },
  { id: "rkt-squash-worlds-women", category: "Tennis", prompt: "Top 10 women with most Squash World Championship titles", hint: "Top women on the squash court",
    items: [
      { name: "Nicol David", aliases: ["David"] },
      { name: "Sarah Fitz-Gerald", aliases: ["Fitz-Gerald"] },
      { name: "Susan Devoy", aliases: ["Devoy"] },
      { name: "Heather McKay", aliases: ["McKay"] },
      { name: "Michelle Martin", aliases: ["Martin"] },
      { name: "Nour El Sherbini", aliases: ["El Sherbini"] },
      { name: "Raneem El Welily", aliases: ["El Welily"] },
      { name: "Vanessa Atkinson", aliases: ["Atkinson"] },
      { name: "Nicolette Fernandes", aliases: ["Fernandes"] },
      { name: "Rhonda Thorne", aliases: ["Thorne"] }
    ]
  },
  { id: "rkt-chess-world-champions", category: "Tennis", prompt: "Top 10 chess World Champions with longest reigns", hint: "Kings of the 64 squares",
    items: [
      { name: "Emanuel Lasker", aliases: ["Lasker"] },
      { name: "Alexander Alekhine", aliases: ["Alekhine"] },
      { name: "Garry Kasparov", aliases: ["Kasparov"] },
      { name: "Wilhelm Steinitz", aliases: ["Steinitz"] },
      { name: "Anatoly Karpov", aliases: ["Karpov"] },
      { name: "Magnus Carlsen", aliases: ["Carlsen"] },
      { name: "Jose Raul Capablanca", aliases: ["Capablanca"] },
      { name: "Mikhail Botvinnik", aliases: ["Botvinnik"] },
      { name: "Viswanathan Anand", aliases: ["Anand", "Vishy"] },
      { name: "Tigran Petrosian", aliases: ["Petrosian"] }
    ]
  },
  { id: "gol-european-prize-money", category: "Golf", prompt: "Top 10 golfers by career European Tour prize money", hint: "Top European Tour earners",
    items: [
      { name: "Rory McIlroy", aliases: ["McIlroy"] },
      { name: "Lee Westwood", aliases: ["Westwood"] },
      { name: "Ernie Els", aliases: ["Els"] },
      { name: "Sergio Garcia", aliases: ["Garcia"] },
      { name: "Henrik Stenson", aliases: ["Stenson"] },
      { name: "Justin Rose", aliases: ["Rose"] },
      { name: "Padraig Harrington", aliases: ["Harrington"] },
      { name: "Miguel Angel Jimenez", aliases: ["Jimenez"] },
      { name: "Colin Montgomerie", aliases: ["Montgomerie"] },
      { name: "Martin Kaymer", aliases: ["Kaymer"] }
    ]
  },
  { id: "gol-irish-players", category: "Golf", prompt: "Top 10 greatest Irish golfers of all time", hint: "Emerald Isle on the fairway",
    items: [
      { name: "Rory McIlroy", aliases: ["McIlroy"] },
      { name: "Padraig Harrington", aliases: ["Harrington"] },
      { name: "Darren Clarke", aliases: ["Clarke"] },
      { name: "Graeme McDowell", aliases: ["McDowell", "G-Mac"] },
      { name: "Shane Lowry", aliases: ["Lowry"] },
      { name: "Paul McGinley", aliases: ["McGinley"] },
      { name: "Christy O'Connor Snr", aliases: ["O'Connor"] },
      { name: "Fred Daly", aliases: ["Daly"] },
      { name: "Eamonn Darcy", aliases: ["Darcy"] },
      { name: "Des Smyth", aliases: ["Smyth"] }
    ]
  },
  { id: "rkt-bjk-cup-players", category: "Tennis", prompt: "Top 10 players with most BJK Cup (Fed Cup) singles match wins", hint: "Team tennis stalwarts",
    items: [
      { name: "Arantxa Sanchez Vicario", aliases: ["Sanchez Vicario"] },
      { name: "Conchita Martinez", aliases: ["Martinez"] },
      { name: "Chris Evert", aliases: ["Evert"] },
      { name: "Helena Sukova", aliases: ["Sukova"] },
      { name: "Virginia Ruano Pascual", aliases: ["Ruano Pascual"] },
      { name: "Steffi Graf", aliases: ["Graf"] },
      { name: "Maria Bueno", aliases: ["Bueno"] },
      { name: "Mary Joe Fernandez", aliases: ["Fernandez"] },
      { name: "Magdalena Maleeva", aliases: ["Maleeva"] },
      { name: "Billie Jean King", aliases: ["BJK"] }
    ]
  },
  { id: "rkt-davis-cup-players", category: "Tennis", prompt: "Top 10 players with most Davis Cup singles match wins", hint: "Davis Cup workhorses",
    items: [
      { name: "Nicola Pietrangeli", aliases: ["Pietrangeli"] },
      { name: "Ilie Nastase", aliases: ["Nastase"] },
      { name: "Manuel Orantes", aliases: ["Orantes"] },
      { name: "Guillermo Vilas", aliases: ["Vilas"] },
      { name: "Bjorn Borg", aliases: ["Borg"] },
      { name: "John McEnroe", aliases: ["McEnroe"] },
      { name: "Manuel Santana", aliases: ["Santana"] },
      { name: "Andres Gimeno", aliases: ["Gimeno"] },
      { name: "Adriano Panatta", aliases: ["Panatta"] },
      { name: "Tomas Smid", aliases: ["Smid"] }
    ]
  },
  { id: "mot-f1-most-wdc", category: "Motorsport", prompt: "F1 drivers with most World Championships", hint: "Career titles",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Michael Schumacher", aliases: ["Schumi", "Schumacher"] },
      { name: "Juan Manuel Fangio", aliases: ["Fangio"] },
      { name: "Alain Prost", aliases: ["Prost", "The Professor"] },
      { name: "Sebastian Vettel", aliases: ["Vettel", "Seb"] },
      { name: "Max Verstappen", aliases: ["Verstappen", "Mad Max"] },
      { name: "Jack Brabham", aliases: ["Brabham"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Nelson Piquet", aliases: ["Piquet"] },
      { name: "Ayrton Senna", aliases: ["Senna", "Magic"] }
    ]
  },
  { id: "mot-f1-most-wins", category: "Motorsport", prompt: "F1 drivers with most race wins", hint: "Career Grand Prix victories",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Fernando Alonso", aliases: ["Alonso", "Nando"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Jackie Stewart", aliases: ["Stewart"] },
      { name: "Jim Clark", aliases: ["Clark"] }
    ]
  },
  { id: "mot-f1-most-poles", category: "Motorsport", prompt: "F1 drivers with most pole positions", hint: "Career poles",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Juan Manuel Fangio", aliases: ["Fangio"] },
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] }
    ]
  },
  { id: "mot-f1-most-podiums", category: "Motorsport", prompt: "F1 drivers with most podium finishes", hint: "Top-3 finishes career",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen", "Iceman"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Rubens Barrichello", aliases: ["Barrichello", "Rubinho"] },
      { name: "Valtteri Bottas", aliases: ["Bottas"] }
    ]
  },
  { id: "mot-f1-most-fastest-laps", category: "Motorsport", prompt: "F1 drivers with most fastest laps", hint: "Career fastest laps",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] }
    ]
  },
  { id: "mot-f1-constructors-titles", category: "Motorsport", prompt: "F1 teams with most Constructors' Championships", hint: "Total constructor titles",
    items: [
      { name: "Ferrari", aliases: ["Scuderia Ferrari"] },
      { name: "Williams", aliases: ["Williams F1"] },
      { name: "McLaren", aliases: ["McLaren F1"] },
      { name: "Mercedes", aliases: ["Mercedes-AMG"] },
      { name: "Lotus", aliases: ["Team Lotus"] },
      { name: "Red Bull", aliases: ["Red Bull Racing"] },
      { name: "Cooper", aliases: ["Cooper Car Company"] },
      { name: "Brabham", aliases: ["Brabham F1"] },
      { name: "Renault", aliases: [] },
      { name: "Matra", aliases: [] }
    ]
  },
  { id: "mot-f1-team-wins", category: "Motorsport", prompt: "F1 teams with most race wins", hint: "Career constructor wins",
    items: [
      { name: "Ferrari", aliases: ["Scuderia Ferrari"] },
      { name: "McLaren", aliases: [] },
      { name: "Mercedes", aliases: [] },
      { name: "Williams", aliases: [] },
      { name: "Red Bull", aliases: ["Red Bull Racing"] },
      { name: "Lotus", aliases: ["Team Lotus"] },
      { name: "Renault", aliases: [] },
      { name: "Brabham", aliases: [] },
      { name: "Benetton", aliases: [] },
      { name: "Tyrrell", aliases: [] }
    ]
  },
  { id: "mot-f1-most-points", category: "Motorsport", prompt: "F1 drivers with most career points", hint: "All-time points",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Valtteri Bottas", aliases: ["Bottas"] },
      { name: "Nico Rosberg", aliases: ["Rosberg"] },
      { name: "Sergio Perez", aliases: ["Perez", "Checo"] },
      { name: "Daniel Ricciardo", aliases: ["Ricciardo", "Honey Badger"] }
    ]
  },
  { id: "mot-f1-most-starts", category: "Motorsport", prompt: "F1 drivers with most race starts", hint: "Career GP entries",
    items: [
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Rubens Barrichello", aliases: ["Barrichello"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Jenson Button", aliases: ["Button"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Riccardo Patrese", aliases: ["Patrese"] },
      { name: "Felipe Massa", aliases: ["Massa"] },
      { name: "Jarno Trulli", aliases: ["Trulli"] }
    ]
  },
  { id: "mot-f1-youngest-champs", category: "Motorsport", prompt: "Youngest F1 World Champions", hint: "Age at first title",
    items: [
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Emerson Fittipaldi", aliases: ["Fittipaldi"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Jacques Villeneuve", aliases: ["Villeneuve"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] }
    ]
  },
  { id: "mot-f1-oldest-champs", category: "Motorsport", prompt: "Oldest F1 World Champions (final title age)", hint: "Age at last title",
    items: [
      { name: "Juan Manuel Fangio", aliases: ["Fangio"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Jack Brabham", aliases: ["Brabham"] },
      { name: "Graham Hill", aliases: ["Hill"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Nelson Piquet", aliases: ["Piquet"] },
      { name: "Mario Andretti", aliases: ["Andretti"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Damon Hill", aliases: ["Damon"] }
    ]
  },
  { id: "mot-f1-monaco-wins", category: "Motorsport", prompt: "F1 drivers with most Monaco GP wins", hint: "Monte Carlo victories",
    items: [
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Graham Hill", aliases: ["Hill", "Mr. Monaco"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Stirling Moss", aliases: ["Moss"] },
      { name: "Jackie Stewart", aliases: ["Stewart"] },
      { name: "Nico Rosberg", aliases: ["Rosberg"] },
      { name: "Daniel Ricciardo", aliases: ["Ricciardo"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] }
    ]
  },
  { id: "mot-f1-silverstone-wins", category: "Motorsport", prompt: "F1 drivers with most British GP wins at Silverstone", hint: "British GP victories",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Jack Brabham", aliases: ["Brabham"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Emerson Fittipaldi", aliases: ["Fittipaldi"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] }
    ]
  },
  { id: "mot-f1-spa-wins", category: "Motorsport", prompt: "F1 drivers with most Belgian GP wins at Spa", hint: "Spa-Francorchamps victories",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Damon Hill", aliases: ["Hill"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Daniel Ricciardo", aliases: ["Ricciardo"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Juan Manuel Fangio", aliases: ["Fangio"] }
    ]
  },
  { id: "mot-f1-monza-wins", category: "Motorsport", prompt: "F1 drivers with most Italian GP wins at Monza", hint: "Monza victories",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Nelson Piquet", aliases: ["Piquet"] },
      { name: "Stirling Moss", aliases: ["Moss"] },
      { name: "Juan Manuel Fangio", aliases: ["Fangio"] },
      { name: "Ronnie Peterson", aliases: ["Peterson"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Rubens Barrichello", aliases: ["Barrichello"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] }
    ]
  },
  { id: "mot-f1-suzuka-wins", category: "Motorsport", prompt: "F1 drivers with most Japanese GP wins at Suzuka", hint: "Japan GP victories",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] },
      { name: "Gerhard Berger", aliases: ["Berger"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Damon Hill", aliases: ["Hill"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Jenson Button", aliases: ["Button"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] }
    ]
  },
  { id: "mot-f1-hungaroring-wins", category: "Motorsport", prompt: "F1 drivers with most Hungarian GP wins", hint: "Hungaroring victories",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Jacques Villeneuve", aliases: ["Villeneuve"] },
      { name: "Nelson Piquet", aliases: ["Piquet"] },
      { name: "Damon Hill", aliases: ["Hill"] },
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Jenson Button", aliases: ["Button"] },
      { name: "Daniel Ricciardo", aliases: ["Ricciardo"] }
    ]
  },
  { id: "mot-f1-wins-by-nation", category: "Motorsport", prompt: "Nationalities with most F1 race wins", hint: "Driver nationality combined",
    items: [
      { name: "United Kingdom", aliases: ["UK", "Britain", "GB", "British"] },
      { name: "Germany", aliases: ["German"] },
      { name: "Brazil", aliases: ["Brazilian"] },
      { name: "France", aliases: ["French"] },
      { name: "Finland", aliases: ["Finnish"] },
      { name: "Austria", aliases: ["Austrian"] },
      { name: "Argentina", aliases: ["Argentine"] },
      { name: "Australia", aliases: ["Australian", "Aussie"] },
      { name: "Netherlands", aliases: ["Dutch", "Holland"] },
      { name: "Italy", aliases: ["Italian"] }
    ]
  },
  { id: "mot-f1-most-laps-led", category: "Motorsport", prompt: "F1 drivers with most laps led", hint: "Career laps in lead",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Jackie Stewart", aliases: ["Stewart"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] }
    ]
  },
  { id: "mot-f1-engine-titles", category: "Motorsport", prompt: "F1 engine manufacturers with most Constructors' titles", hint: "Engine supplier successes",
    items: [
      { name: "Ferrari", aliases: [] },
      { name: "Mercedes", aliases: ["Mercedes-Benz"] },
      { name: "Renault", aliases: [] },
      { name: "Ford", aliases: ["Cosworth"] },
      { name: "Honda", aliases: [] },
      { name: "Climax", aliases: ["Coventry Climax"] },
      { name: "Repco", aliases: [] },
      { name: "BMW", aliases: [] },
      { name: "TAG Porsche", aliases: ["TAG"] },
      { name: "Vanwall", aliases: [] }
    ]
  },
  { id: "mot-nascar-cup-titles", category: "Motorsport", prompt: "Drivers with most NASCAR Cup Series championships", hint: "Premier series titles",
    items: [
      { name: "Richard Petty", aliases: ["The King", "Petty"] },
      { name: "Dale Earnhardt", aliases: ["The Intimidator", "Earnhardt"] },
      { name: "Jimmie Johnson", aliases: ["Johnson"] },
      { name: "Jeff Gordon", aliases: ["Gordon"] },
      { name: "David Pearson", aliases: ["Pearson"] },
      { name: "Lee Petty", aliases: [] },
      { name: "Cale Yarborough", aliases: ["Yarborough"] },
      { name: "Tony Stewart", aliases: ["Smoke", "Stewart"] },
      { name: "Darrell Waltrip", aliases: ["Waltrip"] },
      { name: "Kyle Busch", aliases: ["Rowdy", "Busch"] }
    ]
  },
  { id: "mot-nascar-cup-wins", category: "Motorsport", prompt: "Drivers with most NASCAR Cup Series wins", hint: "Premier division victories",
    items: [
      { name: "Richard Petty", aliases: ["The King"] },
      { name: "David Pearson", aliases: ["Pearson"] },
      { name: "Jeff Gordon", aliases: ["Gordon"] },
      { name: "Bobby Allison", aliases: ["Allison"] },
      { name: "Darrell Waltrip", aliases: ["Waltrip"] },
      { name: "Jimmie Johnson", aliases: ["Johnson"] },
      { name: "Cale Yarborough", aliases: ["Yarborough"] },
      { name: "Kyle Busch", aliases: ["Rowdy"] },
      { name: "Dale Earnhardt", aliases: ["The Intimidator"] },
      { name: "Kevin Harvick", aliases: ["Harvick"] }
    ]
  },
  { id: "mot-daytona500-wins", category: "Motorsport", prompt: "Drivers with most Daytona 500 wins", hint: "Great American Race",
    items: [
      { name: "Richard Petty", aliases: ["The King"] },
      { name: "Cale Yarborough", aliases: ["Yarborough"] },
      { name: "Bobby Allison", aliases: ["Allison"] },
      { name: "Dale Jarrett", aliases: ["Jarrett"] },
      { name: "Jeff Gordon", aliases: ["Gordon"] },
      { name: "Denny Hamlin", aliases: ["Hamlin"] },
      { name: "Jimmie Johnson", aliases: ["Johnson"] },
      { name: "Sterling Marlin", aliases: ["Marlin"] },
      { name: "Matt Kenseth", aliases: ["Kenseth"] },
      { name: "Michael Waltrip", aliases: ["Waltrip"] }
    ]
  },
  { id: "mot-indy500-wins", category: "Motorsport", prompt: "Drivers with most Indianapolis 500 wins", hint: "Brickyard victories",
    items: [
      { name: "A.J. Foyt", aliases: ["AJ Foyt", "Foyt"] },
      { name: "Al Unser", aliases: ["Unser Sr"] },
      { name: "Rick Mears", aliases: ["Mears"] },
      { name: "Helio Castroneves", aliases: ["Castroneves", "Spiderman"] },
      { name: "Louis Meyer", aliases: ["Meyer"] },
      { name: "Mauri Rose", aliases: ["Rose"] },
      { name: "Johnny Rutherford", aliases: ["Rutherford"] },
      { name: "Bobby Unser", aliases: [] },
      { name: "Wilbur Shaw", aliases: ["Shaw"] },
      { name: "Dario Franchitti", aliases: ["Franchitti"] }
    ]
  },
  { id: "mot-indycar-titles", category: "Motorsport", prompt: "Drivers with most IndyCar/Champ Car championships", hint: "Including all premier US open-wheel titles",
    items: [
      { name: "A.J. Foyt", aliases: ["Foyt"] },
      { name: "Mario Andretti", aliases: ["Andretti"] },
      { name: "Sebastien Bourdais", aliases: ["Bourdais"] },
      { name: "Dario Franchitti", aliases: ["Franchitti"] },
      { name: "Scott Dixon", aliases: ["Dixon"] },
      { name: "Al Unser", aliases: ["Unser Sr"] },
      { name: "Rick Mears", aliases: ["Mears"] },
      { name: "Bobby Rahal", aliases: ["Rahal"] },
      { name: "Sam Hornish Jr.", aliases: ["Hornish"] },
      { name: "Will Power", aliases: ["Power"] }
    ]
  },
  { id: "mot-lemans-drivers", category: "Motorsport", prompt: "Drivers with most Le Mans 24 Hours wins", hint: "Sarthe victories",
    items: [
      { name: "Tom Kristensen", aliases: ["Mr. Le Mans", "Kristensen"] },
      { name: "Jacky Ickx", aliases: ["Ickx"] },
      { name: "Derek Bell", aliases: ["Bell"] },
      { name: "Frank Biela", aliases: ["Biela"] },
      { name: "Emanuele Pirro", aliases: ["Pirro"] },
      { name: "Andre Lotterer", aliases: ["Lotterer"] },
      { name: "Marcel Fassler", aliases: ["Fassler"] },
      { name: "Benoit Treluyer", aliases: ["Treluyer"] },
      { name: "Henri Pescarolo", aliases: ["Pescarolo"] },
      { name: "Yannick Dalmas", aliases: ["Dalmas"] }
    ]
  },
  { id: "mot-lemans-manufacturers", category: "Motorsport", prompt: "Manufacturers with most Le Mans 24 Hours wins", hint: "Constructor victories",
    items: [
      { name: "Porsche", aliases: [] },
      { name: "Audi", aliases: [] },
      { name: "Ferrari", aliases: [] },
      { name: "Jaguar", aliases: [] },
      { name: "Bentley", aliases: [] },
      { name: "Ford", aliases: [] },
      { name: "Alfa Romeo", aliases: [] },
      { name: "Toyota", aliases: [] },
      { name: "Peugeot", aliases: [] },
      { name: "Matra", aliases: [] }
    ]
  },
  { id: "mot-motogp-titles", category: "Motorsport", prompt: "Riders with most MotoGP/500cc World Championships", hint: "Premier class titles",
    items: [
      { name: "Giacomo Agostini", aliases: ["Ago", "Agostini"] },
      { name: "Valentino Rossi", aliases: ["The Doctor", "Rossi"] },
      { name: "Marc Marquez", aliases: ["Marquez"] },
      { name: "Mick Doohan", aliases: ["Doohan"] },
      { name: "Geoff Duke", aliases: ["Duke"] },
      { name: "John Surtees", aliases: ["Surtees"] },
      { name: "Mike Hailwood", aliases: ["Hailwood"] },
      { name: "Eddie Lawson", aliases: ["Lawson"] },
      { name: "Casey Stoner", aliases: ["Stoner"] },
      { name: "Kenny Roberts", aliases: ["Roberts"] }
    ]
  },
  { id: "mot-motogp-wins", category: "Motorsport", prompt: "Riders with most premier-class MotoGP wins", hint: "500cc/MotoGP victories",
    items: [
      { name: "Giacomo Agostini", aliases: ["Ago"] },
      { name: "Valentino Rossi", aliases: ["The Doctor"] },
      { name: "Marc Marquez", aliases: ["Marquez"] },
      { name: "Mick Doohan", aliases: ["Doohan"] },
      { name: "Mike Hailwood", aliases: ["Hailwood"] },
      { name: "Casey Stoner", aliases: ["Stoner"] },
      { name: "Eddie Lawson", aliases: ["Lawson"] },
      { name: "Jorge Lorenzo", aliases: ["Lorenzo"] },
      { name: "Geoff Duke", aliases: ["Duke"] },
      { name: "John Surtees", aliases: ["Surtees"] }
    ]
  },
  { id: "mot-wrc-titles", category: "Motorsport", prompt: "Drivers with most WRC championships", hint: "World Rally titles",
    items: [
      { name: "Sebastien Loeb", aliases: ["Loeb"] },
      { name: "Sebastien Ogier", aliases: ["Ogier"] },
      { name: "Tommi Makinen", aliases: ["Makinen"] },
      { name: "Juha Kankkunen", aliases: ["Kankkunen"] },
      { name: "Carlos Sainz", aliases: ["Sainz Sr", "El Matador"] },
      { name: "Walter Rohrl", aliases: ["Rohrl"] },
      { name: "Miki Biasion", aliases: ["Biasion"] },
      { name: "Marcus Gronholm", aliases: ["Gronholm"] },
      { name: "Bjorn Waldegard", aliases: ["Waldegard"] },
      { name: "Massimo Biasion", aliases: [] }
    ]
  },
  { id: "mot-wrc-rally-wins", category: "Motorsport", prompt: "Drivers with most WRC rally wins", hint: "Career rally victories",
    items: [
      { name: "Sebastien Loeb", aliases: ["Loeb"] },
      { name: "Sebastien Ogier", aliases: ["Ogier"] },
      { name: "Marcus Gronholm", aliases: ["Gronholm"] },
      { name: "Carlos Sainz", aliases: ["Sainz Sr"] },
      { name: "Colin McRae", aliases: ["McRae"] },
      { name: "Tommi Makinen", aliases: ["Makinen"] },
      { name: "Juha Kankkunen", aliases: ["Kankkunen"] },
      { name: "Didier Auriol", aliases: ["Auriol"] },
      { name: "Markku Alen", aliases: ["Alen"] },
      { name: "Hannu Mikkola", aliases: ["Mikkola"] }
    ]
  },
  { id: "mot-dakar-cars", category: "Motorsport", prompt: "Drivers with most Dakar Rally car-class wins", hint: "Auto category victories",
    items: [
      { name: "Stephane Peterhansel", aliases: ["Peterhansel", "Mr Dakar"] },
      { name: "Nasser Al-Attiyah", aliases: ["Al-Attiyah"] },
      { name: "Ari Vatanen", aliases: ["Vatanen"] },
      { name: "Carlos Sainz", aliases: ["Sainz Sr"] },
      { name: "Pierre Lartigue", aliases: ["Lartigue"] },
      { name: "Cyril Despres", aliases: ["Despres"] },
      { name: "Giniel de Villiers", aliases: ["de Villiers"] },
      { name: "Hubert Auriol", aliases: [] },
      { name: "Jean-Louis Schlesser", aliases: ["Schlesser"] },
      { name: "Luc Alphand", aliases: ["Alphand"] }
    ]
  },
  { id: "mot-btcc-titles", category: "Motorsport", prompt: "Drivers with most BTCC titles", hint: "British Touring Car champions",
    items: [
      { name: "Andy Rouse", aliases: ["Rouse"] },
      { name: "Jason Plato", aliases: ["Plato"] },
      { name: "Bill McGovern", aliases: ["McGovern"] },
      { name: "Matt Neal", aliases: ["Neal"] },
      { name: "Colin Turkington", aliases: ["Turkington"] },
      { name: "John Cleland", aliases: ["Cleland"] },
      { name: "Alain Menu", aliases: ["Menu"] },
      { name: "Frank Gardner", aliases: ["Gardner"] },
      { name: "Win Percy", aliases: ["Percy"] },
      { name: "Gordon Shedden", aliases: ["Shedden"] }
    ]
  },
  { id: "mot-f1-longest-running-gp", category: "Motorsport", prompt: "Longest-running F1 Grands Prix", hint: "Number of editions",
    items: [
      { name: "Italian Grand Prix", aliases: ["Monza GP"] },
      { name: "British Grand Prix", aliases: ["UK GP", "Silverstone"] },
      { name: "Monaco Grand Prix", aliases: ["Monte Carlo"] },
      { name: "Belgian Grand Prix", aliases: ["Spa", "Belgium GP"] },
      { name: "German Grand Prix", aliases: [] },
      { name: "French Grand Prix", aliases: [] },
      { name: "Spanish Grand Prix", aliases: [] },
      { name: "Brazilian Grand Prix", aliases: ["Sao Paulo GP"] },
      { name: "Canadian Grand Prix", aliases: [] },
      { name: "United States Grand Prix", aliases: ["US GP"] }
    ]
  },
  { id: "mot-f1-podium-record-season", category: "Motorsport", prompt: "F1 drivers with most podiums in a single season", hint: "Single-year record holders",
    items: [
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Nico Rosberg", aliases: ["Rosberg"] },
      { name: "Valtteri Bottas", aliases: ["Bottas"] },
      { name: "Sergio Perez", aliases: ["Checo"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Daniel Ricciardo", aliases: ["Ricciardo"] }
    ]
  },
  { id: "mot-f1-british-champs", category: "Motorsport", prompt: "British F1 World Champions", hint: "UK title winners",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Jackie Stewart", aliases: ["Stewart"] },
      { name: "Graham Hill", aliases: [] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Damon Hill", aliases: [] },
      { name: "Jenson Button", aliases: ["Button"] },
      { name: "John Surtees", aliases: ["Surtees"] },
      { name: "Mike Hawthorn", aliases: ["Hawthorn"] },
      { name: "James Hunt", aliases: ["Hunt"] }
    ]
  },
  { id: "mot-f1-german-champs", category: "Motorsport", prompt: "German-speaking F1 World Champions", hint: "Germany/Austria title winners",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Nico Rosberg", aliases: ["Rosberg"] },
      { name: "Jochen Rindt", aliases: ["Rindt"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Keke Rosberg", aliases: [] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Ayrton Senna", aliases: ["Senna"] }
    ]
  },
  { id: "mot-f1-constructors-cars", category: "Motorsport", prompt: "F1 chassis suppliers with most race wins", hint: "Top constructors of all time",
    items: [
      { name: "Ferrari", aliases: [] },
      { name: "McLaren", aliases: [] },
      { name: "Mercedes", aliases: [] },
      { name: "Williams", aliases: [] },
      { name: "Red Bull", aliases: [] },
      { name: "Lotus", aliases: [] },
      { name: "Brabham", aliases: [] },
      { name: "Benetton", aliases: [] },
      { name: "Renault", aliases: [] },
      { name: "Tyrrell", aliases: [] }
    ]
  },
  { id: "mot-f1-italian-wins", category: "Motorsport", prompt: "Italian F1 drivers with most race wins", hint: "Italy's Grand Prix winners",
    items: [
      { name: "Alberto Ascari", aliases: ["Ascari"] },
      { name: "Riccardo Patrese", aliases: ["Patrese"] },
      { name: "Michele Alboreto", aliases: ["Alboreto"] },
      { name: "Elio de Angelis", aliases: ["de Angelis"] },
      { name: "Giuseppe Farina", aliases: ["Nino Farina"] },
      { name: "Jarno Trulli", aliases: ["Trulli"] },
      { name: "Ludovico Scarfiotti", aliases: ["Scarfiotti"] },
      { name: "Vittorio Brambilla", aliases: ["Brambilla"] },
      { name: "Lorenzo Bandini", aliases: ["Bandini"] },
      { name: "Giancarlo Fisichella", aliases: ["Fisico"] }
    ]
  },
  { id: "mot-f1-french-wins", category: "Motorsport", prompt: "French F1 drivers with most race wins", hint: "France's Grand Prix winners",
    items: [
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Rene Arnoux", aliases: ["Arnoux"] },
      { name: "Jacques Laffite", aliases: ["Laffite"] },
      { name: "Didier Pironi", aliases: ["Pironi"] },
      { name: "Patrick Depailler", aliases: ["Depailler"] },
      { name: "Jean Alesi", aliases: ["Alesi"] },
      { name: "Jean-Pierre Jabouille", aliases: ["Jabouille"] },
      { name: "Olivier Panis", aliases: ["Panis"] },
      { name: "Francois Cevert", aliases: ["Cevert"] },
      { name: "Maurice Trintignant", aliases: ["Trintignant"] }
    ]
  },
  { id: "mot-f1-consecutive-wins", category: "Motorsport", prompt: "F1 drivers with longest consecutive win streaks", hint: "Back-to-back wins in a row",
    items: [
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Alberto Ascari", aliases: ["Ascari"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Nico Rosberg", aliases: ["Rosberg"] },
      { name: "Jack Brabham", aliases: ["Brabham"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Jackie Stewart", aliases: ["Stewart"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Ayrton Senna", aliases: ["Senna"] }
    ]
  },
  { id: "mot-motogp-honda-riders", category: "Motorsport", prompt: "MotoGP world champions for Honda", hint: "HRC title winners",
    items: [
      { name: "Mick Doohan", aliases: ["Doohan"] },
      { name: "Marc Marquez", aliases: ["Marquez"] },
      { name: "Valentino Rossi", aliases: ["Rossi"] },
      { name: "Mike Hailwood", aliases: ["Hailwood"] },
      { name: "Freddie Spencer", aliases: ["Spencer"] },
      { name: "Wayne Gardner", aliases: ["Gardner"] },
      { name: "Alex Criville", aliases: ["Criville"] },
      { name: "Nicky Hayden", aliases: ["Hayden"] },
      { name: "Casey Stoner", aliases: ["Stoner"] },
      { name: "Eddie Lawson", aliases: ["Lawson"] }
    ]
  },
  { id: "mot-nascar-truck-titles", category: "Motorsport", prompt: "Most Truck Series wins in NASCAR history", hint: "Craftsman Truck victories",
    items: [
      { name: "Kyle Busch", aliases: ["Rowdy"] },
      { name: "Ron Hornaday Jr.", aliases: ["Hornaday"] },
      { name: "Matt Crafton", aliases: ["Crafton"] },
      { name: "Mike Skinner", aliases: ["Skinner"] },
      { name: "Jack Sprague", aliases: ["Sprague"] },
      { name: "Johnny Sauter", aliases: ["Sauter"] },
      { name: "Todd Bodine", aliases: ["Bodine"] },
      { name: "Greg Biffle", aliases: ["Biffle"] },
      { name: "Mark Martin", aliases: ["Martin"] },
      { name: "Dennis Setzer", aliases: ["Setzer"] }
    ]
  },
  { id: "mot-f1-finnish-wins", category: "Motorsport", prompt: "Finnish F1 drivers with most race wins", hint: "Finland's Grand Prix winners",
    items: [
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen", "Iceman"] },
      { name: "Keke Rosberg", aliases: ["Rosberg"] },
      { name: "Valtteri Bottas", aliases: ["Bottas"] },
      { name: "Heikki Kovalainen", aliases: ["Kovalainen"] },
      { name: "Mika Salo", aliases: ["Salo"] },
      { name: "Leo Kinnunen", aliases: ["Kinnunen"] },
      { name: "JJ Lehto", aliases: ["Lehto"] },
      { name: "Jyrki Jarvilehto", aliases: [] },
      { name: "Markus Liesner", aliases: [] }
    ]
  },
  { id: "mot-le-mans-decades", category: "Motorsport", prompt: "Most successful manufacturers Le Mans (top brands)", hint: "Historic winners",
    items: [
      { name: "Porsche", aliases: [] },
      { name: "Audi", aliases: [] },
      { name: "Ferrari", aliases: [] },
      { name: "Jaguar", aliases: [] },
      { name: "Ford", aliases: [] },
      { name: "Bentley", aliases: [] },
      { name: "Alfa Romeo", aliases: [] },
      { name: "Mercedes-Benz", aliases: [] },
      { name: "Toyota", aliases: [] },
      { name: "Peugeot", aliases: [] }
    ]
  },
  { id: "mot-f1-aussie-champs", category: "Motorsport", prompt: "Australian F1 race winners", hint: "Aussie GP winners",
    items: [
      { name: "Jack Brabham", aliases: ["Brabham"] },
      { name: "Alan Jones", aliases: ["Jones"] },
      { name: "Mark Webber", aliases: ["Webber"] },
      { name: "Daniel Ricciardo", aliases: ["Ricciardo"] },
      { name: "Oscar Piastri", aliases: ["Piastri"] },
      { name: "David Brabham", aliases: [] },
      { name: "Larry Perkins", aliases: [] },
      { name: "Tim Schenken", aliases: [] },
      { name: "Vern Schuppan", aliases: [] },
      { name: "Paul England", aliases: [] }
    ]
  },
  { id: "mot-f1-most-doubles", category: "Motorsport", prompt: "F1 drivers with most title doubles (drivers + Le Mans/Indy/etc)", hint: "Cross-discipline champions",
    items: [
      { name: "Mario Andretti", aliases: ["Andretti"] },
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Graham Hill", aliases: ["Hill"] },
      { name: "Jacques Villeneuve", aliases: ["Villeneuve"] },
      { name: "Emerson Fittipaldi", aliases: ["Fittipaldi"] },
      { name: "Phil Hill", aliases: [] },
      { name: "John Surtees", aliases: ["Surtees"] },
      { name: "Alan Jones", aliases: ["Jones"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Juan Pablo Montoya", aliases: ["JPM"] }
    ]
  },
  { id: "mot-f1-ferrari-champs", category: "Motorsport", prompt: "F1 World Champions who drove for Ferrari", hint: "Title winners with Scuderia",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Alberto Ascari", aliases: ["Ascari"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Juan Manuel Fangio", aliases: ["Fangio"] },
      { name: "Jody Scheckter", aliases: ["Scheckter"] },
      { name: "Phil Hill", aliases: [] },
      { name: "John Surtees", aliases: ["Surtees"] },
      { name: "Mike Hawthorn", aliases: ["Hawthorn"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] }
    ]
  },
  { id: "mot-f1-mclaren-champs", category: "Motorsport", prompt: "F1 World Champions who drove for McLaren", hint: "Title winners with McLaren",
    items: [
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Ayrton Senna", aliases: ["Senna"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Emerson Fittipaldi", aliases: ["Fittipaldi"] },
      { name: "James Hunt", aliases: ["Hunt"] },
      { name: "Jenson Button", aliases: ["Button"] },
      { name: "Denny Hulme", aliases: ["Hulme"] },
      { name: "Lando Norris", aliases: ["Norris"] }
    ]
  },
  { id: "mot-f1-american-wins", category: "Motorsport", prompt: "American F1 drivers with most race wins", hint: "US GP victors",
    items: [
      { name: "Mario Andretti", aliases: ["Andretti"] },
      { name: "Dan Gurney", aliases: ["Gurney"] },
      { name: "Phil Hill", aliases: [] },
      { name: "Peter Revson", aliases: ["Revson"] },
      { name: "Richie Ginther", aliases: ["Ginther"] },
      { name: "Harry Schell", aliases: ["Schell"] },
      { name: "Bill Vukovich", aliases: ["Vukovich"] },
      { name: "Sam Hanks", aliases: [] },
      { name: "Jimmy Bryan", aliases: [] },
      { name: "Pat Flaherty", aliases: [] }
    ]
  },
  { id: "mot-motogp-italian-riders", category: "Motorsport", prompt: "Italian MotoGP/500cc world champions", hint: "Italy's premier-class champs",
    items: [
      { name: "Giacomo Agostini", aliases: ["Ago"] },
      { name: "Valentino Rossi", aliases: ["The Doctor"] },
      { name: "Libero Liberati", aliases: ["Liberati"] },
      { name: "Umberto Masetti", aliases: ["Masetti"] },
      { name: "Carlo Ubbiali", aliases: ["Ubbiali"] },
      { name: "Franco Uncini", aliases: ["Uncini"] },
      { name: "Marco Lucchinelli", aliases: ["Lucchinelli"] },
      { name: "Tarquinio Provini", aliases: ["Provini"] },
      { name: "Walter Villa", aliases: ["Villa"] },
      { name: "Pierpaolo Bianchi", aliases: ["Bianchi"] }
    ]
  },
  { id: "mot-rally-finland-wins", category: "Motorsport", prompt: "Most Rally Finland (1000 Lakes) winners (drivers)", hint: "Top WRC Finland victories",
    items: [
      { name: "Hannu Mikkola", aliases: ["Mikkola"] },
      { name: "Marcus Gronholm", aliases: ["Gronholm"] },
      { name: "Markku Alen", aliases: ["Alen"] },
      { name: "Juha Kankkunen", aliases: ["Kankkunen"] },
      { name: "Tommi Makinen", aliases: ["Makinen"] },
      { name: "Ari Vatanen", aliases: ["Vatanen"] },
      { name: "Timo Salonen", aliases: ["Salonen"] },
      { name: "Mikko Hirvonen", aliases: ["Hirvonen"] },
      { name: "Stig Blomqvist", aliases: ["Blomqvist"] },
      { name: "Sebastien Ogier", aliases: ["Ogier"] }
    ]
  },
  { id: "mot-f1-canadian-wins", category: "Motorsport", prompt: "Canadian F1 drivers with most race wins", hint: "Canada's Grand Prix winners",
    items: [
      { name: "Gilles Villeneuve", aliases: ["Villeneuve Sr"] },
      { name: "Jacques Villeneuve", aliases: ["JV"] },
      { name: "Lance Stroll", aliases: ["Stroll"] },
      { name: "Eppie Wietzes", aliases: [] },
      { name: "Peter Ryan", aliases: [] },
      { name: "John Cannon", aliases: [] },
      { name: "Allen Berg", aliases: [] },
      { name: "Bill Brack", aliases: [] },
      { name: "George Eaton", aliases: [] },
      { name: "Al Pease", aliases: [] }
    ]
  },
  { id: "mot-f1-spanish-wins", category: "Motorsport", prompt: "Spanish F1 drivers with most race wins", hint: "Spain's GP winners",
    items: [
      { name: "Fernando Alonso", aliases: ["Alonso", "Nando"] },
      { name: "Carlos Sainz Jr.", aliases: ["Sainz", "Sainz Jr"] },
      { name: "Pedro de la Rosa", aliases: ["de la Rosa"] },
      { name: "Marc Gene", aliases: ["Gene"] },
      { name: "Alfonso de Portago", aliases: ["de Portago"] },
      { name: "Jaime Alguersuari", aliases: ["Alguersuari"] },
      { name: "Roberto Merhi", aliases: ["Merhi"] },
      { name: "Adrian Campos", aliases: ["Campos"] },
      { name: "Emilio de Villota", aliases: [] },
      { name: "Antonio Garcia", aliases: [] }
    ]
  },
  { id: "mot-iconic-f1-cars", category: "Motorsport", prompt: "Most-winning F1 car models by total wins", hint: "Iconic chassis",
    items: [
      { name: "McLaren MP4/4", aliases: ["MP4/4"] },
      { name: "Mercedes W11", aliases: ["W11"] },
      { name: "Ferrari F2002", aliases: ["F2002"] },
      { name: "Red Bull RB19", aliases: ["RB19"] },
      { name: "Williams FW14B", aliases: ["FW14B"] },
      { name: "McLaren MP4/2", aliases: [] },
      { name: "Lotus 72", aliases: ["72"] },
      { name: "Ferrari F2004", aliases: [] },
      { name: "Mercedes W07", aliases: [] },
      { name: "Red Bull RB9", aliases: [] }
    ]
  },
  { id: "mot-f1-fastest-debut", category: "Motorsport", prompt: "Youngest F1 race winners", hint: "Age at first GP victory",
    items: [
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Charles Leclerc", aliases: ["Leclerc"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Lando Norris", aliases: ["Norris"] },
      { name: "Bruce McLaren", aliases: ["McLaren"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Robert Kubica", aliases: ["Kubica"] },
      { name: "Esteban Ocon", aliases: ["Ocon"] }
    ]
  },
  { id: "mot-wrc-manufacturers", category: "Motorsport", prompt: "Manufacturers with most WRC titles", hint: "Constructor crowns",
    items: [
      { name: "Lancia", aliases: [] },
      { name: "Citroen", aliases: [] },
      { name: "Peugeot", aliases: [] },
      { name: "Toyota", aliases: [] },
      { name: "Ford", aliases: [] },
      { name: "Subaru", aliases: [] },
      { name: "Mitsubishi", aliases: [] },
      { name: "Volkswagen", aliases: ["VW"] },
      { name: "Hyundai", aliases: [] },
      { name: "Audi", aliases: [] }
    ]
  },
  { id: "mot-motogp-spanish-riders", category: "Motorsport", prompt: "Spanish MotoGP premier-class champions", hint: "Spain title winners",
    items: [
      { name: "Marc Marquez", aliases: ["Marquez"] },
      { name: "Jorge Lorenzo", aliases: ["Lorenzo"] },
      { name: "Alex Criville", aliases: ["Criville"] },
      { name: "Joan Mir", aliases: ["Mir"] },
      { name: "Angel Nieto", aliases: ["Nieto"] },
      { name: "Alex Rins", aliases: ["Rins"] },
      { name: "Dani Pedrosa", aliases: ["Pedrosa"] },
      { name: "Sito Pons", aliases: ["Pons"] },
      { name: "Alvaro Bautista", aliases: ["Bautista"] },
      { name: "Maverick Vinales", aliases: ["Vinales"] }
    ]
  },
  { id: "mot-iconic-rivalries", category: "Motorsport", prompt: "Most iconic F1 driver rivalries", hint: "Legendary head-to-heads",
    items: [
      { name: "Senna vs Prost", aliases: ["Prost vs Senna"] },
      { name: "Hamilton vs Rosberg", aliases: ["Rosberg vs Hamilton"] },
      { name: "Hamilton vs Verstappen", aliases: ["Verstappen vs Hamilton"] },
      { name: "Hunt vs Lauda", aliases: ["Lauda vs Hunt"] },
      { name: "Schumacher vs Hakkinen", aliases: ["Hakkinen vs Schumacher"] },
      { name: "Mansell vs Piquet", aliases: ["Piquet vs Mansell"] },
      { name: "Vettel vs Webber", aliases: ["Webber vs Vettel"] },
      { name: "Alonso vs Hamilton", aliases: ["Hamilton vs Alonso"] },
      { name: "Stewart vs Rindt", aliases: ["Rindt vs Stewart"] },
      { name: "Fangio vs Moss", aliases: ["Moss vs Fangio"] }
    ]
  },
  { id: "mot-f1-reserves-to-champ", category: "Motorsport", prompt: "F1 drivers who served as reserve/test then became champion", hint: "Test drivers turned champs",
    items: [
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Jenson Button", aliases: ["Button"] },
      { name: "Kimi Raikkonen", aliases: ["Raikkonen"] },
      { name: "Nico Rosberg", aliases: ["Rosberg"] },
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] },
      { name: "Jacques Villeneuve", aliases: ["Villeneuve"] },
      { name: "Damon Hill", aliases: ["Hill"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] }
    ]
  },
  { id: "mot-f1-1-2-finishes", category: "Motorsport", prompt: "F1 teams with most 1-2 finishes", hint: "Career front-row sweeps",
    items: [
      { name: "Ferrari", aliases: [] },
      { name: "Mercedes", aliases: [] },
      { name: "McLaren", aliases: [] },
      { name: "Williams", aliases: [] },
      { name: "Red Bull", aliases: [] },
      { name: "Lotus", aliases: [] },
      { name: "Renault", aliases: [] },
      { name: "Brabham", aliases: [] },
      { name: "Tyrrell", aliases: [] },
      { name: "Cooper", aliases: [] }
    ]
  },
  { id: "mot-f1-grand-slams", category: "Motorsport", prompt: "F1 drivers with most Grand Slams (pole, win, FL, all laps led)", hint: "Career Grand Slams",
    items: [
      { name: "Jim Clark", aliases: ["Clark"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Alberto Ascari", aliases: ["Ascari"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Jackie Stewart", aliases: ["Stewart"] },
      { name: "Max Verstappen", aliases: ["Verstappen"] },
      { name: "Nigel Mansell", aliases: ["Mansell"] },
      { name: "Fernando Alonso", aliases: ["Alonso"] },
      { name: "Mika Hakkinen", aliases: ["Hakkinen"] }
    ]
  },
  { id: "mot-f1-most-second-place", category: "Motorsport", prompt: "F1 drivers most often runner-up in title (not won)", hint: "Most second-place finishes in championship",
    items: [
      { name: "Stirling Moss", aliases: ["Moss"] },
      { name: "Alain Prost", aliases: ["Prost"] },
      { name: "Michael Schumacher", aliases: ["Schumi"] },
      { name: "Lewis Hamilton", aliases: ["Hamilton"] },
      { name: "Sebastian Vettel", aliases: ["Vettel"] },
      { name: "Niki Lauda", aliases: ["Lauda"] },
      { name: "Felipe Massa", aliases: ["Massa"] },
      { name: "Mark Webber", aliases: ["Webber"] },
      { name: "Rubens Barrichello", aliases: ["Barrichello"] },
      { name: "Nelson Piquet", aliases: ["Piquet"] }
    ]
  },
  { id: "mot-imsa-titles", category: "Motorsport", prompt: "Drivers with most IMSA championships", hint: "US sportscar titles",
    items: [
      { name: "Scott Pruett", aliases: ["Pruett"] },
      { name: "Hurley Haywood", aliases: ["Haywood"] },
      { name: "Geoff Brabham", aliases: ["Brabham"] },
      { name: "Pete Halsmer", aliases: ["Halsmer"] },
      { name: "Peter Gregg", aliases: ["Gregg"] },
      { name: "Wayne Taylor", aliases: ["Taylor"] },
      { name: "Al Holbert", aliases: ["Holbert"] },
      { name: "Chip Robinson", aliases: ["Robinson"] },
      { name: "Juan Pablo Montoya", aliases: ["JPM"] },
      { name: "Ricky Taylor", aliases: ["Taylor"] }
    ]
  },
  { id: "mot-f1-spa-decades", category: "Motorsport", prompt: "Most-winning F1 constructors at Spa-Francorchamps", hint: "Team Belgian GP record",
    items: [
      { name: "Ferrari", aliases: [] },
      { name: "McLaren", aliases: [] },
      { name: "Lotus", aliases: [] },
      { name: "Mercedes", aliases: [] },
      { name: "Red Bull", aliases: [] },
      { name: "Williams", aliases: [] },
      { name: "Brabham", aliases: [] },
      { name: "Tyrrell", aliases: [] },
      { name: "Benetton", aliases: [] },
      { name: "Cooper", aliases: [] }
    ]
  },
  { id: "mot-rally-monte-carlo", category: "Motorsport", prompt: "Most Rallye Monte-Carlo wins (drivers)", hint: "WRC Monte Carlo victories",
    items: [
      { name: "Sebastien Loeb", aliases: ["Loeb"] },
      { name: "Sebastien Ogier", aliases: ["Ogier"] },
      { name: "Sandro Munari", aliases: ["Munari"] },
      { name: "Tommi Makinen", aliases: ["Makinen"] },
      { name: "Walter Rohrl", aliases: ["Rohrl"] },
      { name: "Didier Auriol", aliases: ["Auriol"] },
      { name: "Jean-Claude Andruet", aliases: ["Andruet"] },
      { name: "Bjorn Waldegard", aliases: ["Waldegard"] },
      { name: "Carlos Sainz", aliases: ["Sainz Sr"] },
      { name: "Patrick Snijers", aliases: [] }
    ]
  },
  { id: "mot-motogp-yamaha-riders", category: "Motorsport", prompt: "MotoGP/500cc Yamaha world champions", hint: "Title winners on Yamaha",
    items: [
      { name: "Valentino Rossi", aliases: ["The Doctor"] },
      { name: "Jorge Lorenzo", aliases: ["Lorenzo"] },
      { name: "Kenny Roberts", aliases: ["Roberts Sr"] },
      { name: "Wayne Rainey", aliases: ["Rainey"] },
      { name: "Eddie Lawson", aliases: ["Lawson"] },
      { name: "Giacomo Agostini", aliases: ["Ago"] },
      { name: "Fabio Quartararo", aliases: ["Quartararo"] },
      { name: "Kenny Roberts Jr.", aliases: ["Roberts Jr"] },
      { name: "Heikki Mikkola", aliases: [] },
      { name: "Phil Read", aliases: ["Read"] }
    ]
  },
  {
    id: "oly-most-olympic-gold-medals-individuals",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals (Individuals, All-Time)",
    hint: "Summer and Winter combined",
    items: [
      { name: "Michael Phelps", aliases: ["Phelps"] },
      { name: "Larisa Latynina", aliases: ["Latynina"] },
      { name: "Paavo Nurmi", aliases: ["Nurmi"] },
      { name: "Mark Spitz", aliases: ["Spitz"] },
      { name: "Carl Lewis", aliases: ["Lewis"] },
      { name: "Ole Einar Bjorndalen", aliases: ["Bjorndalen", "Bjørndalen"] },
      { name: "Bjorn Daehlie", aliases: ["Daehlie", "Dæhlie"] },
      { name: "Birgit Fischer", aliases: ["Fischer"] },
      { name: "Sawao Kato", aliases: ["Kato"] },
      { name: "Jenny Thompson", aliases: ["Thompson"] }
    ]
  },
  {
    id: "oly-most-olympic-medals-all-time",
    category: "Olympics",
    prompt: "Most Olympic Medals All-Time (Individuals)",
    hint: "Total medals including silver and bronze",
    items: [
      { name: "Michael Phelps", aliases: ["Phelps"] },
      { name: "Larisa Latynina", aliases: ["Latynina"] },
      { name: "Marit Bjorgen", aliases: ["Bjorgen", "Bjørgen"] },
      { name: "Nikolai Andrianov", aliases: ["Andrianov"] },
      { name: "Ole Einar Bjorndalen", aliases: ["Bjorndalen"] },
      { name: "Boris Shakhlin", aliases: ["Shakhlin"] },
      { name: "Edoardo Mangiarotti", aliases: ["Mangiarotti"] },
      { name: "Takashi Ono", aliases: ["Ono"] },
      { name: "Paavo Nurmi", aliases: ["Nurmi"] },
      { name: "Birgit Fischer", aliases: ["Fischer"] }
    ]
  },
  {
    id: "oly-most-golds-single-games",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals in a Single Games",
    hint: "One Olympics edition",
    items: [
      { name: "Michael Phelps (2008)", aliases: ["Phelps 2008"] },
      { name: "Mark Spitz (1972)", aliases: ["Spitz 1972"] },
      { name: "Vitaly Scherbo (1992)", aliases: ["Scherbo"] },
      { name: "Eric Heiden (1980)", aliases: ["Heiden"] },
      { name: "Kristin Otto (1988)", aliases: ["Otto"] },
      { name: "Matt Biondi (1988)", aliases: ["Biondi"] },
      { name: "Caeleb Dressel (2020)", aliases: ["Dressel"] },
      { name: "Michael Phelps (2004)", aliases: ["Phelps 2004"] },
      { name: "Paavo Nurmi (1924)", aliases: ["Nurmi 1924"] },
      { name: "Jesse Owens (1936)", aliases: ["Owens"] }
    ]
  },
  {
    id: "oly-countries-most-summer-medals",
    category: "Olympics",
    prompt: "Countries with Most Summer Olympic Medals All-Time",
    hint: "Total medal count",
    items: [
      { name: "United States", aliases: ["USA", "US", "America"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Germany", aliases: ["GER"] },
      { name: "Great Britain", aliases: ["UK", "GBR", "Britain"] },
      { name: "France", aliases: ["FRA"] },
      { name: "Italy", aliases: ["ITA"] },
      { name: "China", aliases: ["CHN"] },
      { name: "Australia", aliases: ["AUS"] },
      { name: "Sweden", aliases: ["SWE"] },
      { name: "Hungary", aliases: ["HUN"] }
    ]
  },
  {
    id: "oly-countries-most-winter-medals",
    category: "Olympics",
    prompt: "Countries with Most Winter Olympic Medals All-Time",
    hint: "Total medal count",
    items: [
      { name: "Norway", aliases: ["NOR"] },
      { name: "United States", aliases: ["USA"] },
      { name: "Germany", aliases: ["GER"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Canada", aliases: ["CAN"] },
      { name: "Austria", aliases: ["AUT"] },
      { name: "Finland", aliases: ["FIN"] },
      { name: "Sweden", aliases: ["SWE"] },
      { name: "Switzerland", aliases: ["SUI"] },
      { name: "Netherlands", aliases: ["NED", "Holland"] }
    ]
  },
  {
    id: "oly-countries-most-combined-medals",
    category: "Olympics",
    prompt: "Countries with Most Olympic Medals (Combined Summer + Winter)",
    hint: "All-time totals",
    items: [
      { name: "United States", aliases: ["USA"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Germany", aliases: ["GER"] },
      { name: "Great Britain", aliases: ["UK", "GBR"] },
      { name: "France", aliases: ["FRA"] },
      { name: "Italy", aliases: ["ITA"] },
      { name: "Norway", aliases: ["NOR"] },
      { name: "Sweden", aliases: ["SWE"] },
      { name: "China", aliases: ["CHN"] },
      { name: "Australia", aliases: ["AUS"] }
    ]
  },
  {
    id: "oly-most-olympic-appearances",
    category: "Olympics",
    prompt: "Most Olympic Appearances (Individuals)",
    hint: "Number of Games competed in",
    items: [
      { name: "Ian Millar", aliases: ["Millar"] },
      { name: "Hubert Raudaschl", aliases: ["Raudaschl"] },
      { name: "Afanasijs Kuzmins", aliases: ["Kuzmins"] },
      { name: "Nino Salukvadze", aliases: ["Salukvadze"] },
      { name: "Piero d'Inzeo", aliases: ["d'Inzeo"] },
      { name: "Raimondo d'Inzeo", aliases: ["d'Inzeo"] },
      { name: "Durward Knowles", aliases: ["Knowles"] },
      { name: "Paul Elvstrom", aliases: ["Elvstrom", "Elvstrøm"] },
      { name: "Lesley Thompson", aliases: ["Thompson"] },
      { name: "Josefa Idem", aliases: ["Idem"] }
    ]
  },
  {
    id: "oly-youngest-gold-medalists",
    category: "Olympics",
    prompt: "Youngest Olympic Gold Medalists (Verified)",
    hint: "Age in years",
    items: [
      { name: "Dimitrios Loundras (10)", aliases: ["Loundras"] },
      { name: "Marjorie Gestring (13)", aliases: ["Gestring"] },
      { name: "Inge Sorensen (12)", aliases: ["Sorensen", "Sørensen"] },
      { name: "Kim Yun-mi (13)", aliases: ["Kim Yun-mi"] },
      { name: "Donna de Varona (13)", aliases: ["de Varona"] },
      { name: "Tara Lipinski (15)", aliases: ["Lipinski"] },
      { name: "Nadia Comaneci (14)", aliases: ["Comaneci"] },
      { name: "Kusuo Kitamura (14)", aliases: ["Kitamura"] },
      { name: "Krisztina Egerszegi (14)", aliases: ["Egerszegi"] },
      { name: "Fu Mingxia (13)", aliases: ["Fu Mingxia"] }
    ]
  },
  {
    id: "oly-oldest-gold-medalists",
    category: "Olympics",
    prompt: "Oldest Olympic Gold Medalists",
    hint: "Age at gold medal",
    items: [
      { name: "Oscar Swahn (64)", aliases: ["Swahn"] },
      { name: "Galen Spencer (64)", aliases: ["Spencer"] },
      { name: "Samuel Duvall (68)", aliases: ["Duvall"] },
      { name: "Joshua Millner (61)", aliases: ["Millner"] },
      { name: "Louis Noverraz (60)", aliases: ["Noverraz"] },
      { name: "Lorna Johnstone (70)", aliases: ["Johnstone"] },
      { name: "Hiroshi Hoketsu (71)", aliases: ["Hoketsu"] },
      { name: "Ian Millar (61)", aliases: ["Millar"] },
      { name: "John Dillon (56)", aliases: ["Dillon"] },
      { name: "Mary Hanna (66)", aliases: ["Hanna"] }
    ]
  },
  {
    id: "oly-most-golds-gymnastics",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals in Gymnastics",
    hint: "Artistic gymnastics individuals",
    items: [
      { name: "Larisa Latynina", aliases: ["Latynina"] },
      { name: "Sawao Kato", aliases: ["Kato"] },
      { name: "Nikolai Andrianov", aliases: ["Andrianov"] },
      { name: "Vera Caslavska", aliases: ["Caslavska", "Čáslavská"] },
      { name: "Akinori Nakayama", aliases: ["Nakayama"] },
      { name: "Vitaly Scherbo", aliases: ["Scherbo"] },
      { name: "Boris Shakhlin", aliases: ["Shakhlin"] },
      { name: "Viktor Chukarin", aliases: ["Chukarin"] },
      { name: "Polina Astakhova", aliases: ["Astakhova"] },
      { name: "Agnes Keleti", aliases: ["Keleti"] }
    ]
  },
  {
    id: "oly-most-golds-swimming",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals in Swimming",
    hint: "Individual gold medals",
    items: [
      { name: "Michael Phelps", aliases: ["Phelps"] },
      { name: "Mark Spitz", aliases: ["Spitz"] },
      { name: "Katie Ledecky", aliases: ["Ledecky"] },
      { name: "Jenny Thompson", aliases: ["Thompson"] },
      { name: "Caeleb Dressel", aliases: ["Dressel"] },
      { name: "Kristin Otto", aliases: ["Otto"] },
      { name: "Matt Biondi", aliases: ["Biondi"] },
      { name: "Amy Van Dyken", aliases: ["Van Dyken"] },
      { name: "Ryan Lochte", aliases: ["Lochte"] },
      { name: "Ian Thorpe", aliases: ["Thorpe", "Thorpedo"] }
    ]
  },
  {
    id: "oly-most-golds-athletics",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals in Athletics (Track and Field)",
    hint: "Individual gold count",
    items: [
      { name: "Paavo Nurmi", aliases: ["Nurmi"] },
      { name: "Carl Lewis", aliases: ["Lewis"] },
      { name: "Ray Ewry", aliases: ["Ewry"] },
      { name: "Usain Bolt", aliases: ["Bolt"] },
      { name: "Ville Ritola", aliases: ["Ritola"] },
      { name: "Allyson Felix", aliases: ["Felix"] },
      { name: "Martin Sheridan", aliases: ["Sheridan"] },
      { name: "Alvin Kraenzlein", aliases: ["Kraenzlein"] },
      { name: "Fanny Blankers-Koen", aliases: ["Blankers-Koen"] },
      { name: "Jesse Owens", aliases: ["Owens"] }
    ]
  },
  {
    id: "oly-most-golds-cycling",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals in Cycling",
    hint: "Track and road cycling",
    items: [
      { name: "Jason Kenny", aliases: ["Kenny"] },
      { name: "Chris Hoy", aliases: ["Hoy"] },
      { name: "Bradley Wiggins", aliases: ["Wiggins"] },
      { name: "Laura Kenny", aliases: ["Kenny", "Laura Trott"] },
      { name: "Anna Meares", aliases: ["Meares"] },
      { name: "Daniel Morelon", aliases: ["Morelon"] },
      { name: "Paul Masson", aliases: ["Masson"] },
      { name: "Marcus Hurley", aliases: ["Hurley"] },
      { name: "Robert Charpentier", aliases: ["Charpentier"] },
      { name: "Leontien van Moorsel", aliases: ["van Moorsel"] }
    ]
  },
  {
    id: "oly-most-golds-rowing",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals in Rowing",
    hint: "Individual gold count",
    items: [
      { name: "Steve Redgrave", aliases: ["Redgrave"] },
      { name: "Elisabeta Lipa", aliases: ["Lipa"] },
      { name: "Georgeta Damian", aliases: ["Damian"] },
      { name: "Viorica Susanu", aliases: ["Susanu"] },
      { name: "Matthew Pinsent", aliases: ["Pinsent"] },
      { name: "Pertti Karppinen", aliases: ["Karppinen"] },
      { name: "Vyacheslav Ivanov", aliases: ["Ivanov"] },
      { name: "Siegfried Brietzke", aliases: ["Brietzke"] },
      { name: "Jack Beresford", aliases: ["Beresford"] },
      { name: "Paul Costello", aliases: ["Costello"] }
    ]
  },
  {
    id: "oly-most-golds-equestrian",
    category: "Olympics",
    prompt: "Most Olympic Gold Medals in Equestrian",
    hint: "Dressage, jumping, eventing",
    items: [
      { name: "Isabell Werth", aliases: ["Werth"] },
      { name: "Reiner Klimke", aliases: ["Klimke"] },
      { name: "Charlotte Dujardin", aliases: ["Dujardin"] },
      { name: "Anky van Grunsven", aliases: ["van Grunsven"] },
      { name: "Hans Gunter Winkler", aliases: ["Winkler"] },
      { name: "Henri Saint Cyr", aliases: ["Saint Cyr"] },
      { name: "Mark Todd", aliases: ["Todd"] },
      { name: "Andrew Hoy", aliases: ["Hoy"] },
      { name: "Pierre Jonqueres d'Oriola", aliases: ["d'Oriola"] },
      { name: "Nicole Uphoff", aliases: ["Uphoff"] }
    ]
  },
  {
    id: "oly-most-100m-champions",
    category: "Olympics",
    prompt: "Multiple Olympic 100m Champions (Men)",
    hint: "Won 100m gold more than once or notable winners",
    items: [
      { name: "Usain Bolt", aliases: ["Bolt"] },
      { name: "Carl Lewis", aliases: ["Lewis"] },
      { name: "Archie Hahn", aliases: ["Hahn"] },
      { name: "Ralph Craig", aliases: ["Craig"] },
      { name: "Eddie Tolan", aliases: ["Tolan"] },
      { name: "Jesse Owens", aliases: ["Owens"] },
      { name: "Bobby Morrow", aliases: ["Morrow"] },
      { name: "Linford Christie", aliases: ["Christie"] },
      { name: "Donovan Bailey", aliases: ["Bailey"] },
      { name: "Justin Gatlin", aliases: ["Gatlin"] }
    ]
  },
  {
    id: "oly-marathon-champions",
    category: "Olympics",
    prompt: "Notable Olympic Marathon Champions (Men)",
    hint: "Multiple wins and legendary winners",
    items: [
      { name: "Abebe Bikila", aliases: ["Bikila"] },
      { name: "Waldemar Cierpinski", aliases: ["Cierpinski"] },
      { name: "Eliud Kipchoge", aliases: ["Kipchoge"] },
      { name: "Frank Shorter", aliases: ["Shorter"] },
      { name: "Mamo Wolde", aliases: ["Wolde"] },
      { name: "Carlos Lopes", aliases: ["Lopes"] },
      { name: "Gelindo Bordin", aliases: ["Bordin"] },
      { name: "Stephen Kiprotich", aliases: ["Kiprotich"] },
      { name: "Samuel Wanjiru", aliases: ["Wanjiru"] },
      { name: "Spyridon Louis", aliases: ["Louis"] }
    ]
  },
  {
    id: "oly-cities-multiple-hosts",
    category: "Olympics",
    prompt: "Cities That Have Hosted Multiple Olympic Games",
    hint: "Summer or Winter Games",
    items: [
      { name: "Paris", aliases: ["Paris"] },
      { name: "London", aliases: ["London"] },
      { name: "Los Angeles", aliases: ["LA"] },
      { name: "Athens", aliases: ["Athens"] },
      { name: "Tokyo", aliases: ["Tokyo"] },
      { name: "St. Moritz", aliases: ["St Moritz"] },
      { name: "Lake Placid", aliases: ["Lake Placid"] },
      { name: "Innsbruck", aliases: ["Innsbruck"] },
      { name: "Beijing", aliases: ["Beijing"] },
      { name: "Stockholm", aliases: ["Stockholm"] }
    ]
  },
  {
    id: "oly-countries-most-winter-golds",
    category: "Olympics",
    prompt: "Countries with Most Winter Olympic Gold Medals",
    hint: "All-time gold count",
    items: [
      { name: "Norway", aliases: ["NOR"] },
      { name: "Germany", aliases: ["GER"] },
      { name: "United States", aliases: ["USA"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Canada", aliases: ["CAN"] },
      { name: "Austria", aliases: ["AUT"] },
      { name: "Sweden", aliases: ["SWE"] },
      { name: "Switzerland", aliases: ["SUI"] },
      { name: "Netherlands", aliases: ["NED"] },
      { name: "Russia", aliases: ["RUS"] }
    ]
  },
  {
    id: "oly-most-paralympic-golds",
    category: "Olympics",
    prompt: "Most Paralympic Gold Medals (Individuals)",
    hint: "All-time gold count",
    items: [
      { name: "Trischa Zorn", aliases: ["Zorn"] },
      { name: "Heinz Frei", aliases: ["Frei"] },
      { name: "Roberto Marson", aliases: ["Marson"] },
      { name: "Mike Kenny", aliases: ["Kenny"] },
      { name: "Beatrice Hess", aliases: ["Hess"] },
      { name: "Ragnhild Myklebust", aliases: ["Myklebust"] },
      { name: "Jonas Jacobsson", aliases: ["Jacobsson"] },
      { name: "Franz Nietlispach", aliases: ["Nietlispach"] },
      { name: "Daniel Dias", aliases: ["Dias"] },
      { name: "Reinhild Moller", aliases: ["Moller", "Möller"] }
    ]
  },
  {
    id: "oly-most-figure-skating-golds",
    category: "Olympics",
    prompt: "Most Olympic Figure Skating Gold Medals",
    hint: "Individual gold count",
    items: [
      { name: "Gillis Grafstrom", aliases: ["Grafstrom", "Grafström"] },
      { name: "Sonja Henie", aliases: ["Henie"] },
      { name: "Irina Rodnina", aliases: ["Rodnina"] },
      { name: "Artur Dmitriev", aliases: ["Dmitriev"] },
      { name: "Yevgeny Plushenko", aliases: ["Plushenko"] },
      { name: "Dick Button", aliases: ["Button"] },
      { name: "Karl Schafer", aliases: ["Schafer", "Schäfer"] },
      { name: "Katarina Witt", aliases: ["Witt"] },
      { name: "Yuzuru Hanyu", aliases: ["Hanyu"] },
      { name: "Tessa Virtue", aliases: ["Virtue"] }
    ]
  },
  {
    id: "oly-most-alpine-skiing-golds",
    category: "Olympics",
    prompt: "Most Olympic Alpine Skiing Gold Medals",
    hint: "Individual gold count",
    items: [
      { name: "Kjetil Andre Aamodt", aliases: ["Aamodt"] },
      { name: "Janica Kostelic", aliases: ["Kostelic"] },
      { name: "Mikaela Shiffrin", aliases: ["Shiffrin"] },
      { name: "Alberto Tomba", aliases: ["Tomba"] },
      { name: "Hermann Maier", aliases: ["Maier"] },
      { name: "Ted Ligety", aliases: ["Ligety"] },
      { name: "Marielle Goitschel", aliases: ["Goitschel"] },
      { name: "Vreni Schneider", aliases: ["Schneider"] },
      { name: "Katja Seizinger", aliases: ["Seizinger"] },
      { name: "Toni Sailer", aliases: ["Sailer"] }
    ]
  },
  {
    id: "oly-most-ice-hockey-golds",
    category: "Olympics",
    prompt: "Countries with Most Olympic Ice Hockey Gold Medals (Men)",
    hint: "Total team golds",
    items: [
      { name: "Canada", aliases: ["CAN"] },
      { name: "Soviet Union", aliases: ["USSR"] },
      { name: "Unified Team", aliases: ["EUN"] },
      { name: "United States", aliases: ["USA"] },
      { name: "Sweden", aliases: ["SWE"] },
      { name: "Great Britain", aliases: ["GBR"] },
      { name: "Czech Republic", aliases: ["CZE"] },
      { name: "Russia", aliases: ["RUS"] },
      { name: "Finland", aliases: ["FIN"] },
      { name: "Russian Olympic Committee", aliases: ["ROC"] }
    ]
  },
  {
    id: "oly-most-biathlon-golds",
    category: "Olympics",
    prompt: "Most Olympic Biathlon Gold Medals (Individuals)",
    hint: "Cross-country skiing plus shooting",
    items: [
      { name: "Ole Einar Bjorndalen", aliases: ["Bjorndalen"] },
      { name: "Martin Fourcade", aliases: ["Fourcade"] },
      { name: "Johannes Thingnes Boe", aliases: ["Boe", "Bø"] },
      { name: "Magdalena Forsberg", aliases: ["Forsberg"] },
      { name: "Anfisa Reztsova", aliases: ["Reztsova"] },
      { name: "Halvard Hanevold", aliases: ["Hanevold"] },
      { name: "Sven Fischer", aliases: ["Fischer"] },
      { name: "Ricco Gross", aliases: ["Gross"] },
      { name: "Frank Ullrich", aliases: ["Ullrich"] },
      { name: "Magnar Solberg", aliases: ["Solberg"] }
    ]
  },
  {
    id: "oly-decathlon-champions",
    category: "Olympics",
    prompt: "Notable Olympic Decathlon Champions",
    hint: "Track and field 10-event champions",
    items: [
      { name: "Jim Thorpe", aliases: ["Thorpe"] },
      { name: "Bob Mathias", aliases: ["Mathias"] },
      { name: "Rafer Johnson", aliases: ["Johnson"] },
      { name: "Bill Toomey", aliases: ["Toomey"] },
      { name: "Bruce Jenner", aliases: ["Jenner", "Caitlyn Jenner"] },
      { name: "Daley Thompson", aliases: ["Thompson"] },
      { name: "Dan O'Brien", aliases: ["O'Brien"] },
      { name: "Roman Sebrle", aliases: ["Sebrle"] },
      { name: "Bryan Clay", aliases: ["Clay"] },
      { name: "Ashton Eaton", aliases: ["Eaton"] }
    ]
  },
  {
    id: "nfl-super-bowl-wins-teams",
    category: "Sports",
    prompt: "Most Super Bowl Wins (NFL Teams)",
    hint: "Total championships",
    items: [
      { name: "Pittsburgh Steelers", aliases: ["Steelers", "Pittsburgh"] },
      { name: "New England Patriots", aliases: ["Patriots", "Pats"] },
      { name: "San Francisco 49ers", aliases: ["49ers", "Niners"] },
      { name: "Dallas Cowboys", aliases: ["Cowboys"] },
      { name: "Kansas City Chiefs", aliases: ["Chiefs", "KC"] },
      { name: "Green Bay Packers", aliases: ["Packers"] },
      { name: "New York Giants", aliases: ["Giants"] },
      { name: "Denver Broncos", aliases: ["Broncos"] },
      { name: "Las Vegas Raiders", aliases: ["Raiders", "Oakland Raiders"] },
      { name: "Washington Commanders", aliases: ["Commanders", "Redskins"] }
    ]
  },
  {
    id: "nfl-super-bowl-mvps",
    category: "Sports",
    prompt: "Most Super Bowl MVP Awards",
    hint: "Individual MVP count",
    items: [
      { name: "Tom Brady", aliases: ["Brady"] },
      { name: "Patrick Mahomes", aliases: ["Mahomes"] },
      { name: "Joe Montana", aliases: ["Montana"] },
      { name: "Bart Starr", aliases: ["Starr"] },
      { name: "Terry Bradshaw", aliases: ["Bradshaw"] },
      { name: "Eli Manning", aliases: ["Manning"] },
      { name: "Aaron Rodgers", aliases: ["Rodgers"] },
      { name: "Peyton Manning", aliases: ["Manning"] },
      { name: "Steve Young", aliases: ["Young"] },
      { name: "Jerry Rice", aliases: ["Rice"] }
    ]
  },
  {
    id: "nfl-passing-leaders",
    category: "Sports",
    prompt: "NFL All-Time Passing Yards Leaders",
    hint: "Career total",
    items: [
      { name: "Tom Brady", aliases: ["Brady"] },
      { name: "Drew Brees", aliases: ["Brees"] },
      { name: "Peyton Manning", aliases: ["Manning"] },
      { name: "Brett Favre", aliases: ["Favre"] },
      { name: "Aaron Rodgers", aliases: ["Rodgers"] },
      { name: "Matt Ryan", aliases: ["Ryan"] },
      { name: "Philip Rivers", aliases: ["Rivers"] },
      { name: "Ben Roethlisberger", aliases: ["Roethlisberger", "Big Ben"] },
      { name: "Eli Manning", aliases: ["Manning"] },
      { name: "Matthew Stafford", aliases: ["Stafford"] }
    ]
  },
  {
    id: "nfl-rushing-leaders",
    category: "Sports",
    prompt: "NFL All-Time Rushing Yards Leaders",
    hint: "Career total",
    items: [
      { name: "Emmitt Smith", aliases: ["Smith"] },
      { name: "Walter Payton", aliases: ["Payton", "Sweetness"] },
      { name: "Frank Gore", aliases: ["Gore"] },
      { name: "Barry Sanders", aliases: ["Sanders"] },
      { name: "Adrian Peterson", aliases: ["Peterson", "AP"] },
      { name: "Curtis Martin", aliases: ["Martin"] },
      { name: "LaDainian Tomlinson", aliases: ["Tomlinson", "LT"] },
      { name: "Jerome Bettis", aliases: ["Bettis", "Bus"] },
      { name: "Eric Dickerson", aliases: ["Dickerson"] },
      { name: "Tony Dorsett", aliases: ["Dorsett"] }
    ]
  },
  {
    id: "nfl-receiving-leaders",
    category: "Sports",
    prompt: "NFL All-Time Receiving Yards Leaders",
    hint: "Career total",
    items: [
      { name: "Jerry Rice", aliases: ["Rice"] },
      { name: "Larry Fitzgerald", aliases: ["Fitzgerald"] },
      { name: "Terrell Owens", aliases: ["Owens", "TO"] },
      { name: "Randy Moss", aliases: ["Moss"] },
      { name: "Isaac Bruce", aliases: ["Bruce"] },
      { name: "Tony Gonzalez", aliases: ["Gonzalez"] },
      { name: "Tim Brown", aliases: ["Brown"] },
      { name: "Steve Smith Sr.", aliases: ["Smith"] },
      { name: "Marvin Harrison", aliases: ["Harrison"] },
      { name: "Reggie Wayne", aliases: ["Wayne"] }
    ]
  },
  {
    id: "nfl-sacks-leaders",
    category: "Sports",
    prompt: "NFL All-Time Sacks Leaders",
    hint: "Career sacks (since 1982)",
    items: [
      { name: "Bruce Smith", aliases: ["Smith"] },
      { name: "Reggie White", aliases: ["White"] },
      { name: "Kevin Greene", aliases: ["Greene"] },
      { name: "Julius Peppers", aliases: ["Peppers"] },
      { name: "Chris Doleman", aliases: ["Doleman"] },
      { name: "Michael Strahan", aliases: ["Strahan"] },
      { name: "DeMarcus Ware", aliases: ["Ware"] },
      { name: "Jason Taylor", aliases: ["Taylor"] },
      { name: "Terrell Suggs", aliases: ["Suggs"] },
      { name: "John Randle", aliases: ["Randle"] }
    ]
  },
  {
    id: "nfl-interceptions-leaders",
    category: "Sports",
    prompt: "NFL All-Time Interceptions Leaders",
    hint: "Career interceptions",
    items: [
      { name: "Paul Krause", aliases: ["Krause"] },
      { name: "Emlen Tunnell", aliases: ["Tunnell"] },
      { name: "Rod Woodson", aliases: ["Woodson"] },
      { name: "Dick Lane", aliases: ["Night Train Lane"] },
      { name: "Ken Riley", aliases: ["Riley"] },
      { name: "Charles Woodson", aliases: ["Woodson"] },
      { name: "Ronnie Lott", aliases: ["Lott"] },
      { name: "Dick LeBeau", aliases: ["LeBeau"] },
      { name: "Dave Brown", aliases: ["Brown"] },
      { name: "Emmitt Thomas", aliases: ["Thomas"] }
    ]
  },
  {
    id: "nfl-mvp-awards",
    category: "Sports",
    prompt: "Most NFL MVP Awards (AP MVP)",
    hint: "Individual MVP count",
    items: [
      { name: "Peyton Manning", aliases: ["Manning"] },
      { name: "Aaron Rodgers", aliases: ["Rodgers"] },
      { name: "Tom Brady", aliases: ["Brady"] },
      { name: "Patrick Mahomes", aliases: ["Mahomes"] },
      { name: "Brett Favre", aliases: ["Favre"] },
      { name: "Jim Brown", aliases: ["Brown"] },
      { name: "Johnny Unitas", aliases: ["Unitas"] },
      { name: "Joe Montana", aliases: ["Montana"] },
      { name: "Steve Young", aliases: ["Young"] },
      { name: "Kurt Warner", aliases: ["Warner"] }
    ]
  },
  {
    id: "mlb-world-series-wins",
    category: "Sports",
    prompt: "Most World Series Wins (MLB Teams)",
    hint: "Total championships",
    items: [
      { name: "New York Yankees", aliases: ["Yankees", "NYY"] },
      { name: "St. Louis Cardinals", aliases: ["Cardinals", "Cards"] },
      { name: "Oakland Athletics", aliases: ["Athletics", "As", "Philadelphia Athletics"] },
      { name: "Boston Red Sox", aliases: ["Red Sox", "Sox"] },
      { name: "Los Angeles Dodgers", aliases: ["Dodgers", "Brooklyn Dodgers"] },
      { name: "San Francisco Giants", aliases: ["Giants", "New York Giants"] },
      { name: "Cincinnati Reds", aliases: ["Reds"] },
      { name: "Pittsburgh Pirates", aliases: ["Pirates"] },
      { name: "Detroit Tigers", aliases: ["Tigers"] },
      { name: "Chicago Cubs", aliases: ["Cubs"] }
    ]
  },
  {
    id: "mlb-home-runs",
    category: "Sports",
    prompt: "MLB All-Time Home Run Leaders",
    hint: "Career home runs",
    items: [
      { name: "Barry Bonds", aliases: ["Bonds"] },
      { name: "Hank Aaron", aliases: ["Aaron"] },
      { name: "Babe Ruth", aliases: ["Ruth", "Bambino"] },
      { name: "Albert Pujols", aliases: ["Pujols"] },
      { name: "Alex Rodriguez", aliases: ["A-Rod", "Rodriguez"] },
      { name: "Willie Mays", aliases: ["Mays"] },
      { name: "Ken Griffey Jr.", aliases: ["Griffey"] },
      { name: "Jim Thome", aliases: ["Thome"] },
      { name: "Sammy Sosa", aliases: ["Sosa"] },
      { name: "Frank Robinson", aliases: ["Robinson"] }
    ]
  },
  {
    id: "mlb-hits-leaders",
    category: "Sports",
    prompt: "MLB All-Time Hits Leaders",
    hint: "Career hits",
    items: [
      { name: "Pete Rose", aliases: ["Rose", "Charlie Hustle"] },
      { name: "Ty Cobb", aliases: ["Cobb"] },
      { name: "Hank Aaron", aliases: ["Aaron"] },
      { name: "Stan Musial", aliases: ["Musial"] },
      { name: "Tris Speaker", aliases: ["Speaker"] },
      { name: "Derek Jeter", aliases: ["Jeter"] },
      { name: "Albert Pujols", aliases: ["Pujols"] },
      { name: "Honus Wagner", aliases: ["Wagner"] },
      { name: "Carl Yastrzemski", aliases: ["Yastrzemski", "Yaz"] },
      { name: "Paul Molitor", aliases: ["Molitor"] }
    ]
  },
  {
    id: "mlb-strikeouts-pitching",
    category: "Sports",
    prompt: "MLB All-Time Pitching Strikeouts Leaders",
    hint: "Career strikeouts",
    items: [
      { name: "Nolan Ryan", aliases: ["Ryan"] },
      { name: "Randy Johnson", aliases: ["Johnson", "Big Unit"] },
      { name: "Roger Clemens", aliases: ["Clemens"] },
      { name: "Steve Carlton", aliases: ["Carlton"] },
      { name: "Bert Blyleven", aliases: ["Blyleven"] },
      { name: "Tom Seaver", aliases: ["Seaver"] },
      { name: "Don Sutton", aliases: ["Sutton"] },
      { name: "Gaylord Perry", aliases: ["Perry"] },
      { name: "Walter Johnson", aliases: ["Johnson"] },
      { name: "Greg Maddux", aliases: ["Maddux"] }
    ]
  },
  {
    id: "mlb-wins-pitching",
    category: "Sports",
    prompt: "MLB All-Time Pitching Wins Leaders",
    hint: "Career wins",
    items: [
      { name: "Cy Young", aliases: ["Young"] },
      { name: "Walter Johnson", aliases: ["Johnson"] },
      { name: "Pud Galvin", aliases: ["Galvin"] },
      { name: "Christy Mathewson", aliases: ["Mathewson"] },
      { name: "Warren Spahn", aliases: ["Spahn"] },
      { name: "Kid Nichols", aliases: ["Nichols"] },
      { name: "Greg Maddux", aliases: ["Maddux"] },
      { name: "Roger Clemens", aliases: ["Clemens"] },
      { name: "Tim Keefe", aliases: ["Keefe"] },
      { name: "Steve Carlton", aliases: ["Carlton"] }
    ]
  },
  {
    id: "nhl-stanley-cup-wins",
    category: "Sports",
    prompt: "Most Stanley Cup Wins (NHL Teams)",
    hint: "Total Stanley Cup championships",
    items: [
      { name: "Montreal Canadiens", aliases: ["Canadiens", "Habs"] },
      { name: "Toronto Maple Leafs", aliases: ["Maple Leafs", "Leafs"] },
      { name: "Detroit Red Wings", aliases: ["Red Wings"] },
      { name: "Boston Bruins", aliases: ["Bruins"] },
      { name: "Chicago Blackhawks", aliases: ["Blackhawks"] },
      { name: "Edmonton Oilers", aliases: ["Oilers"] },
      { name: "Pittsburgh Penguins", aliases: ["Penguins", "Pens"] },
      { name: "New York Rangers", aliases: ["Rangers"] },
      { name: "New York Islanders", aliases: ["Islanders"] },
      { name: "Tampa Bay Lightning", aliases: ["Lightning", "Bolts"] }
    ]
  },
  {
    id: "nhl-goals-leaders",
    category: "Sports",
    prompt: "NHL All-Time Goals Leaders",
    hint: "Career regular season goals",
    items: [
      { name: "Wayne Gretzky", aliases: ["Gretzky", "Great One"] },
      { name: "Alex Ovechkin", aliases: ["Ovechkin", "Ovi"] },
      { name: "Gordie Howe", aliases: ["Howe"] },
      { name: "Jaromir Jagr", aliases: ["Jagr"] },
      { name: "Brett Hull", aliases: ["Hull"] },
      { name: "Marcel Dionne", aliases: ["Dionne"] },
      { name: "Phil Esposito", aliases: ["Esposito"] },
      { name: "Mike Gartner", aliases: ["Gartner"] },
      { name: "Mark Messier", aliases: ["Messier"] },
      { name: "Steve Yzerman", aliases: ["Yzerman", "Stevie Y"] }
    ]
  },
  {
    id: "nhl-points-leaders",
    category: "Sports",
    prompt: "NHL All-Time Points Leaders",
    hint: "Career regular season points",
    items: [
      { name: "Wayne Gretzky", aliases: ["Gretzky"] },
      { name: "Jaromir Jagr", aliases: ["Jagr"] },
      { name: "Gordie Howe", aliases: ["Howe"] },
      { name: "Mark Messier", aliases: ["Messier"] },
      { name: "Ron Francis", aliases: ["Francis"] },
      { name: "Marcel Dionne", aliases: ["Dionne"] },
      { name: "Steve Yzerman", aliases: ["Yzerman"] },
      { name: "Sidney Crosby", aliases: ["Crosby", "Sid the Kid"] },
      { name: "Mario Lemieux", aliases: ["Lemieux", "Super Mario"] },
      { name: "Joe Sakic", aliases: ["Sakic"] }
    ]
  },
  {
    id: "nhl-assists-leaders",
    category: "Sports",
    prompt: "NHL All-Time Assists Leaders",
    hint: "Career assists",
    items: [
      { name: "Wayne Gretzky", aliases: ["Gretzky"] },
      { name: "Ron Francis", aliases: ["Francis"] },
      { name: "Mark Messier", aliases: ["Messier"] },
      { name: "Jaromir Jagr", aliases: ["Jagr"] },
      { name: "Ray Bourque", aliases: ["Bourque"] },
      { name: "Paul Coffey", aliases: ["Coffey"] },
      { name: "Adam Oates", aliases: ["Oates"] },
      { name: "Steve Yzerman", aliases: ["Yzerman"] },
      { name: "Gordie Howe", aliases: ["Howe"] },
      { name: "Marcel Dionne", aliases: ["Dionne"] }
    ]
  },
  {
    id: "nhl-wins-goalies",
    category: "Sports",
    prompt: "NHL All-Time Goalie Wins Leaders",
    hint: "Career regular season wins",
    items: [
      { name: "Martin Brodeur", aliases: ["Brodeur"] },
      { name: "Marc-Andre Fleury", aliases: ["Fleury"] },
      { name: "Patrick Roy", aliases: ["Roy"] },
      { name: "Roberto Luongo", aliases: ["Luongo"] },
      { name: "Ed Belfour", aliases: ["Belfour"] },
      { name: "Curtis Joseph", aliases: ["Joseph", "Cujo"] },
      { name: "Henrik Lundqvist", aliases: ["Lundqvist"] },
      { name: "Terry Sawchuk", aliases: ["Sawchuk"] },
      { name: "Jacques Plante", aliases: ["Plante"] },
      { name: "Tony Esposito", aliases: ["Esposito"] }
    ]
  },
  {
    id: "nhl-hart-trophy-wins",
    category: "Sports",
    prompt: "Most Hart Trophy Wins (NHL MVP)",
    hint: "Individual MVP awards",
    items: [
      { name: "Wayne Gretzky", aliases: ["Gretzky"] },
      { name: "Gordie Howe", aliases: ["Howe"] },
      { name: "Eddie Shore", aliases: ["Shore"] },
      { name: "Bobby Clarke", aliases: ["Clarke"] },
      { name: "Mario Lemieux", aliases: ["Lemieux"] },
      { name: "Howie Morenz", aliases: ["Morenz"] },
      { name: "Bobby Orr", aliases: ["Orr"] },
      { name: "Alex Ovechkin", aliases: ["Ovechkin"] },
      { name: "Connor McDavid", aliases: ["McDavid"] },
      { name: "Jean Beliveau", aliases: ["Beliveau"] }
    ]
  },
  {
    id: "ncaa-football-titles",
    category: "Sports",
    prompt: "Most NCAA Football National Titles (Claimed)",
    hint: "Major selectors recognized",
    items: [
      { name: "Alabama Crimson Tide", aliases: ["Alabama", "Bama"] },
      { name: "Princeton Tigers", aliases: ["Princeton"] },
      { name: "Yale Bulldogs", aliases: ["Yale"] },
      { name: "Notre Dame Fighting Irish", aliases: ["Notre Dame"] },
      { name: "Michigan Wolverines", aliases: ["Michigan"] },
      { name: "Ohio State Buckeyes", aliases: ["Ohio State"] },
      { name: "USC Trojans", aliases: ["USC", "Southern Cal"] },
      { name: "Oklahoma Sooners", aliases: ["Oklahoma"] },
      { name: "Harvard Crimson", aliases: ["Harvard"] },
      { name: "Minnesota Golden Gophers", aliases: ["Minnesota"] }
    ]
  },
  {
    id: "ncaa-basketball-titles",
    category: "Sports",
    prompt: "Most NCAA Men's Basketball Titles",
    hint: "Division I championships",
    items: [
      { name: "UCLA Bruins", aliases: ["UCLA"] },
      { name: "Kentucky Wildcats", aliases: ["Kentucky"] },
      { name: "North Carolina Tar Heels", aliases: ["UNC", "North Carolina"] },
      { name: "Duke Blue Devils", aliases: ["Duke"] },
      { name: "Connecticut Huskies", aliases: ["UConn"] },
      { name: "Indiana Hoosiers", aliases: ["Indiana"] },
      { name: "Kansas Jayhawks", aliases: ["Kansas"] },
      { name: "Villanova Wildcats", aliases: ["Villanova"] },
      { name: "Louisville Cardinals", aliases: ["Louisville"] },
      { name: "Florida Gators", aliases: ["Florida"] }
    ]
  },
  {
    id: "cricket-world-cup-mens",
    category: "Sports",
    prompt: "Most ICC Men's Cricket World Cup Wins",
    hint: "ODI 50-over format",
    items: [
      { name: "Australia", aliases: ["AUS"] },
      { name: "India", aliases: ["IND"] },
      { name: "West Indies", aliases: ["WI"] },
      { name: "Sri Lanka", aliases: ["SL"] },
      { name: "Pakistan", aliases: ["PAK"] },
      { name: "England", aliases: ["ENG"] },
      { name: "New Zealand", aliases: ["NZ"] },
      { name: "South Africa", aliases: ["SA"] },
      { name: "Bangladesh", aliases: ["BAN"] },
      { name: "Zimbabwe", aliases: ["ZIM"] }
    ]
  },
  {
    id: "cricket-world-cup-womens",
    category: "Sports",
    prompt: "Most ICC Women's Cricket World Cup Wins",
    hint: "ODI 50-over format",
    items: [
      { name: "Australia", aliases: ["AUS"] },
      { name: "England", aliases: ["ENG"] },
      { name: "New Zealand", aliases: ["NZ"] },
      { name: "India", aliases: ["IND"] },
      { name: "South Africa", aliases: ["SA"] },
      { name: "West Indies", aliases: ["WI"] },
      { name: "Sri Lanka", aliases: ["SL"] },
      { name: "Pakistan", aliases: ["PAK"] },
      { name: "Bangladesh", aliases: ["BAN"] },
      { name: "Ireland", aliases: ["IRE"] }
    ]
  },
  {
    id: "cricket-t20-world-cup-mens",
    category: "Sports",
    prompt: "Most Men's T20 Cricket World Cup Wins",
    hint: "20-over format",
    items: [
      { name: "West Indies", aliases: ["WI"] },
      { name: "England", aliases: ["ENG"] },
      { name: "India", aliases: ["IND"] },
      { name: "Australia", aliases: ["AUS"] },
      { name: "Pakistan", aliases: ["PAK"] },
      { name: "Sri Lanka", aliases: ["SL"] },
      { name: "New Zealand", aliases: ["NZ"] },
      { name: "South Africa", aliases: ["SA"] },
      { name: "Bangladesh", aliases: ["BAN"] },
      { name: "Afghanistan", aliases: ["AFG"] }
    ]
  },
  {
    id: "cricket-odi-runs",
    category: "Sports",
    prompt: "Most ODI Runs (Cricket)",
    hint: "Career ODI runs",
    items: [
      { name: "Sachin Tendulkar", aliases: ["Tendulkar"] },
      { name: "Kumar Sangakkara", aliases: ["Sangakkara"] },
      { name: "Virat Kohli", aliases: ["Kohli"] },
      { name: "Ricky Ponting", aliases: ["Ponting"] },
      { name: "Sanath Jayasuriya", aliases: ["Jayasuriya"] },
      { name: "Mahela Jayawardene", aliases: ["Jayawardene"] },
      { name: "Inzamam-ul-Haq", aliases: ["Inzamam"] },
      { name: "Jacques Kallis", aliases: ["Kallis"] },
      { name: "Sourav Ganguly", aliases: ["Ganguly"] },
      { name: "Rahul Dravid", aliases: ["Dravid"] }
    ]
  },
  {
    id: "cricket-test-runs",
    category: "Sports",
    prompt: "Most Test Runs (Cricket)",
    hint: "Career Test runs",
    items: [
      { name: "Sachin Tendulkar", aliases: ["Tendulkar"] },
      { name: "Ricky Ponting", aliases: ["Ponting"] },
      { name: "Jacques Kallis", aliases: ["Kallis"] },
      { name: "Rahul Dravid", aliases: ["Dravid"] },
      { name: "Joe Root", aliases: ["Root"] },
      { name: "Alastair Cook", aliases: ["Cook"] },
      { name: "Kumar Sangakkara", aliases: ["Sangakkara"] },
      { name: "Brian Lara", aliases: ["Lara"] },
      { name: "Shivnarine Chanderpaul", aliases: ["Chanderpaul"] },
      { name: "Mahela Jayawardene", aliases: ["Jayawardene"] }
    ]
  },
  {
    id: "cricket-test-wickets",
    category: "Sports",
    prompt: "Most Test Wickets (Cricket)",
    hint: "Career Test bowling wickets",
    items: [
      { name: "Muttiah Muralitharan", aliases: ["Murali", "Muralitharan"] },
      { name: "Shane Warne", aliases: ["Warne"] },
      { name: "James Anderson", aliases: ["Anderson", "Jimmy"] },
      { name: "Anil Kumble", aliases: ["Kumble"] },
      { name: "Stuart Broad", aliases: ["Broad"] },
      { name: "Glenn McGrath", aliases: ["McGrath"] },
      { name: "Courtney Walsh", aliases: ["Walsh"] },
      { name: "Nathan Lyon", aliases: ["Lyon"] },
      { name: "Ravichandran Ashwin", aliases: ["Ashwin"] },
      { name: "Dale Steyn", aliases: ["Steyn"] }
    ]
  },
  {
    id: "rugby-world-cup-wins",
    category: "Sports",
    prompt: "Most Rugby World Cup Wins (Men)",
    hint: "Total titles",
    items: [
      { name: "South Africa", aliases: ["Springboks", "SA"] },
      { name: "New Zealand", aliases: ["All Blacks", "NZ"] },
      { name: "Australia", aliases: ["Wallabies"] },
      { name: "England", aliases: ["ENG"] },
      { name: "France", aliases: ["FRA", "Les Bleus"] },
      { name: "Wales", aliases: ["WAL"] },
      { name: "Argentina", aliases: ["Pumas", "ARG"] },
      { name: "Ireland", aliases: ["IRE"] },
      { name: "Scotland", aliases: ["SCO"] },
      { name: "Fiji", aliases: ["FIJ"] }
    ]
  },
  {
    id: "rugby-six-nations-wins",
    category: "Sports",
    prompt: "Most Six Nations (and Five Nations) Championship Titles",
    hint: "Outright titles since 1883",
    items: [
      { name: "Wales", aliases: ["WAL"] },
      { name: "England", aliases: ["ENG"] },
      { name: "France", aliases: ["FRA"] },
      { name: "Scotland", aliases: ["SCO"] },
      { name: "Ireland", aliases: ["IRE"] },
      { name: "Italy", aliases: ["ITA"] },
      { name: "Wales (Grand Slam)", aliases: ["Wales Grand Slam"] },
      { name: "England (Grand Slam)", aliases: ["England Grand Slam"] },
      { name: "France (Grand Slam)", aliases: ["France Grand Slam"] },
      { name: "Ireland (Grand Slam)", aliases: ["Ireland Grand Slam"] }
    ]
  },
  {
    id: "tour-de-france-wins-riders",
    category: "Sports",
    prompt: "Most Tour de France Wins (Riders)",
    hint: "General classification titles",
    items: [
      { name: "Jacques Anquetil", aliases: ["Anquetil"] },
      { name: "Eddy Merckx", aliases: ["Merckx"] },
      { name: "Bernard Hinault", aliases: ["Hinault"] },
      { name: "Miguel Indurain", aliases: ["Indurain"] },
      { name: "Chris Froome", aliases: ["Froome"] },
      { name: "Tadej Pogacar", aliases: ["Pogacar", "Pogačar"] },
      { name: "Greg LeMond", aliases: ["LeMond"] },
      { name: "Philippe Thys", aliases: ["Thys"] },
      { name: "Louison Bobet", aliases: ["Bobet"] },
      { name: "Alberto Contador", aliases: ["Contador"] }
    ]
  },
  {
    id: "tour-de-france-wins-countries",
    category: "Sports",
    prompt: "Countries with Most Tour de France Wins",
    hint: "Total GC titles by nationality",
    items: [
      { name: "France", aliases: ["FRA"] },
      { name: "Belgium", aliases: ["BEL"] },
      { name: "Spain", aliases: ["ESP"] },
      { name: "United States", aliases: ["USA"] },
      { name: "Italy", aliases: ["ITA"] },
      { name: "Great Britain", aliases: ["GBR", "UK"] },
      { name: "Luxembourg", aliases: ["LUX"] },
      { name: "Netherlands", aliases: ["NED"] },
      { name: "Switzerland", aliases: ["SUI"] },
      { name: "Slovenia", aliases: ["SLO"] }
    ]
  },
  {
    id: "giro-italia-wins",
    category: "Sports",
    prompt: "Most Giro d'Italia Wins (Riders)",
    hint: "General classification titles",
    items: [
      { name: "Alfredo Binda", aliases: ["Binda"] },
      { name: "Fausto Coppi", aliases: ["Coppi"] },
      { name: "Eddy Merckx", aliases: ["Merckx"] },
      { name: "Gino Bartali", aliases: ["Bartali"] },
      { name: "Felice Gimondi", aliases: ["Gimondi"] },
      { name: "Giovanni Brunero", aliases: ["Brunero"] },
      { name: "Bernard Hinault", aliases: ["Hinault"] },
      { name: "Vincenzo Nibali", aliases: ["Nibali"] },
      { name: "Miguel Indurain", aliases: ["Indurain"] },
      { name: "Alberto Contador", aliases: ["Contador"] }
    ]
  },
  {
    id: "vuelta-espana-wins",
    category: "Sports",
    prompt: "Most Vuelta a Espana Wins (Riders)",
    hint: "General classification titles",
    items: [
      { name: "Roberto Heras", aliases: ["Heras"] },
      { name: "Primoz Roglic", aliases: ["Roglic", "Roglič"] },
      { name: "Tony Rominger", aliases: ["Rominger"] },
      { name: "Alberto Contador", aliases: ["Contador"] },
      { name: "Tadej Pogacar", aliases: ["Pogacar"] },
      { name: "Chris Froome", aliases: ["Froome"] },
      { name: "Julio Jimenez", aliases: ["Jimenez"] },
      { name: "Jan Janssen", aliases: ["Janssen"] },
      { name: "Felice Gimondi", aliases: ["Gimondi"] },
      { name: "Pedro Delgado", aliases: ["Delgado"] }
    ]
  },
  {
    id: "boxing-heavyweight-champions",
    category: "Sports",
    prompt: "Greatest Boxing Heavyweight Champions",
    hint: "Most title reigns and recognized greats",
    items: [
      { name: "Joe Louis", aliases: ["Louis"] },
      { name: "Muhammad Ali", aliases: ["Ali", "Cassius Clay"] },
      { name: "Larry Holmes", aliases: ["Holmes"] },
      { name: "Mike Tyson", aliases: ["Tyson", "Iron Mike"] },
      { name: "Lennox Lewis", aliases: ["Lewis"] },
      { name: "Wladimir Klitschko", aliases: ["Klitschko"] },
      { name: "Evander Holyfield", aliases: ["Holyfield"] },
      { name: "George Foreman", aliases: ["Foreman"] },
      { name: "Rocky Marciano", aliases: ["Marciano"] },
      { name: "Jack Dempsey", aliases: ["Dempsey"] }
    ]
  },
  {
    id: "boxing-undisputed-champions",
    category: "Sports",
    prompt: "Notable Undisputed Boxing Champions (Four-Belt Era)",
    hint: "Held all major belts simultaneously",
    items: [
      { name: "Bernard Hopkins", aliases: ["Hopkins"] },
      { name: "Jermain Taylor", aliases: ["Taylor"] },
      { name: "Terence Crawford", aliases: ["Crawford"] },
      { name: "Josh Taylor", aliases: ["Taylor"] },
      { name: "Oleksandr Usyk", aliases: ["Usyk"] },
      { name: "Naoya Inoue", aliases: ["Inoue"] },
      { name: "Devin Haney", aliases: ["Haney"] },
      { name: "Claressa Shields", aliases: ["Shields"] },
      { name: "Cecilia Braekhus", aliases: ["Braekhus", "Brækhus"] },
      { name: "Katie Taylor", aliases: ["Taylor"] }
    ]
  },
  {
    id: "ufc-most-titles",
    category: "Sports",
    prompt: "Most UFC Title Wins (Champions)",
    hint: "Title fight victories",
    items: [
      { name: "Demetrious Johnson", aliases: ["Johnson", "Mighty Mouse"] },
      { name: "Jon Jones", aliases: ["Jones", "Bones"] },
      { name: "Georges St-Pierre", aliases: ["GSP", "St-Pierre"] },
      { name: "Anderson Silva", aliases: ["Silva", "Spider"] },
      { name: "Khabib Nurmagomedov", aliases: ["Khabib"] },
      { name: "Amanda Nunes", aliases: ["Nunes"] },
      { name: "Jose Aldo", aliases: ["Aldo"] },
      { name: "Israel Adesanya", aliases: ["Adesanya"] },
      { name: "Kamaru Usman", aliases: ["Usman"] },
      { name: "Valentina Shevchenko", aliases: ["Shevchenko"] }
    ]
  },
  {
    id: "surfing-world-titles",
    category: "Sports",
    prompt: "Most World Surf League/ASP World Titles",
    hint: "Pro surfing championships",
    items: [
      { name: "Kelly Slater", aliases: ["Slater"] },
      { name: "Layne Beachley", aliases: ["Beachley"] },
      { name: "Stephanie Gilmore", aliases: ["Gilmore"] },
      { name: "Mark Richards", aliases: ["Richards"] },
      { name: "Frieda Zamba", aliases: ["Zamba"] },
      { name: "Wendy Botha", aliases: ["Botha"] },
      { name: "Lisa Andersen", aliases: ["Andersen"] },
      { name: "Carissa Moore", aliases: ["Moore"] },
      { name: "Tom Curren", aliases: ["Curren"] },
      { name: "Andy Irons", aliases: ["Irons"] }
    ]
  },
  {
    id: "skiing-world-cup-overall",
    category: "Sports",
    prompt: "Most Alpine Skiing World Cup Overall Titles",
    hint: "Crystal Globe overall winners",
    items: [
      { name: "Marcel Hirscher", aliases: ["Hirscher"] },
      { name: "Mikaela Shiffrin", aliases: ["Shiffrin"] },
      { name: "Annemarie Moser-Proell", aliases: ["Moser-Proell", "Pröll"] },
      { name: "Lindsey Vonn", aliases: ["Vonn"] },
      { name: "Hermann Maier", aliases: ["Maier"] },
      { name: "Gustav Thoeni", aliases: ["Thoeni", "Thöni"] },
      { name: "Pirmin Zurbriggen", aliases: ["Zurbriggen"] },
      { name: "Phil Mahre", aliases: ["Mahre"] },
      { name: "Petra Kronberger", aliases: ["Kronberger"] },
      { name: "Vreni Schneider", aliases: ["Schneider"] }
    ]
  },
  {
    id: "oly-heptathlon-champions",
    category: "Olympics",
    prompt: "Notable Olympic Heptathlon Champions",
    hint: "Women's 7-event track and field",
    items: [
      { name: "Jackie Joyner-Kersee", aliases: ["Joyner-Kersee"] },
      { name: "Glynis Nunn", aliases: ["Nunn"] },
      { name: "Ghada Shouaa", aliases: ["Shouaa"] },
      { name: "Denise Lewis", aliases: ["Lewis"] },
      { name: "Carolina Kluft", aliases: ["Kluft", "Klüft"] },
      { name: "Natalia Dobrynska", aliases: ["Dobrynska"] },
      { name: "Jessica Ennis-Hill", aliases: ["Ennis-Hill", "Ennis"] },
      { name: "Nafissatou Thiam", aliases: ["Thiam"] },
      { name: "Anke Vater-Behmer", aliases: ["Vater-Behmer"] },
      { name: "Hyleas Fountain", aliases: ["Fountain"] }
    ]
  },
  {
    id: "mov-highest-grossing-worldwide",
    category: "Movies",
    prompt: "Top 10 highest-grossing films worldwide of all time",
    hint: "Lifetime worldwide box office",
    items: [
      { name: "Avatar", aliases: ["Avatar 1"] },
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Avatar: The Way of Water", aliases: ["Avatar 2", "Way of Water"] },
      { name: "Titanic", aliases: [] },
      { name: "Ne Zha 2", aliases: ["Nezha 2"] },
      { name: "Star Wars: The Force Awakens", aliases: ["Force Awakens", "Star Wars Episode VII"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "Spider-Man: No Way Home", aliases: ["No Way Home"] },
      { name: "Inside Out 2", aliases: [] },
      { name: "Jurassic World", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-inflation-adjusted",
    category: "Movies",
    prompt: "Top 10 highest-grossing films inflation-adjusted (domestic US)",
    hint: "Box Office Mojo adjusted ranking",
    items: [
      { name: "Gone with the Wind", aliases: ["GWTW", "Autant en emporte le vent"] },
      { name: "Star Wars", aliases: ["A New Hope", "Star Wars Episode IV"] },
      { name: "The Sound of Music", aliases: ["Sound of Music", "La Melodie du bonheur"] },
      { name: "E.T. the Extra-Terrestrial", aliases: ["ET"] },
      { name: "Titanic", aliases: [] },
      { name: "The Ten Commandments", aliases: ["Ten Commandments"] },
      { name: "Jaws", aliases: ["Les Dents de la mer"] },
      { name: "Doctor Zhivago", aliases: ["Le Docteur Jivago"] },
      { name: "The Exorcist", aliases: ["Exorcist", "L'Exorciste"] },
      { name: "Snow White and the Seven Dwarfs", aliases: ["Snow White", "Blanche-Neige"] }
    ]
  },
  {
    id: "mov-highest-grossing-animated",
    category: "Movies",
    prompt: "Top 10 highest-grossing animated films worldwide",
    hint: "Lifetime box office",
    items: [
      { name: "Ne Zha 2", aliases: ["Nezha 2"] },
      { name: "Inside Out 2", aliases: [] },
      { name: "The Lion King", aliases: ["Lion King 2019", "Roi Lion"] },
      { name: "The Super Mario Bros. Movie", aliases: ["Super Mario Bros Movie", "Mario"] },
      { name: "Frozen II", aliases: ["Frozen 2", "Reine des Neiges 2"] },
      { name: "Frozen", aliases: ["Reine des Neiges"] },
      { name: "Incredibles 2", aliases: ["Indestructibles 2"] },
      { name: "Minions", aliases: [] },
      { name: "Toy Story 4", aliases: [] },
      { name: "Toy Story 3", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-disney",
    category: "Movies",
    prompt: "Top 10 highest-grossing Walt Disney Animation Studios films",
    hint: "Worldwide gross, WDAS releases",
    items: [
      { name: "Frozen II", aliases: ["Frozen 2"] },
      { name: "Frozen", aliases: [] },
      { name: "Zootopia", aliases: ["Zootropolis"] },
      { name: "Encanto", aliases: [] },
      { name: "Big Hero 6", aliases: ["Les Nouveaux Heros"] },
      { name: "Moana", aliases: ["Vaiana"] },
      { name: "Tangled", aliases: ["Raiponce"] },
      { name: "Wreck-It Ralph", aliases: ["Ralph"] },
      { name: "Ralph Breaks the Internet", aliases: ["Ralph 2"] },
      { name: "Bolt", aliases: ["Volt"] }
    ]
  },
  {
    id: "mov-highest-grossing-pixar",
    category: "Movies",
    prompt: "Top 10 highest-grossing Pixar films worldwide",
    hint: "Lifetime box office",
    items: [
      { name: "Inside Out 2", aliases: ["Vice-Versa 2"] },
      { name: "Incredibles 2", aliases: ["Indestructibles 2"] },
      { name: "Toy Story 4", aliases: [] },
      { name: "Toy Story 3", aliases: [] },
      { name: "Finding Dory", aliases: ["Monde de Dory"] },
      { name: "Finding Nemo", aliases: ["Monde de Nemo"] },
      { name: "Coco", aliases: [] },
      { name: "Inside Out", aliases: ["Vice-Versa"] },
      { name: "Up", la_la: [], aliases: ["La-haut"] },
      { name: "Monsters University", aliases: ["Monstres Academy"] }
    ]
  },
  {
    id: "mov-highest-grossing-ghibli",
    category: "Movies",
    prompt: "Top 10 highest-grossing Studio Ghibli films worldwide",
    hint: "Miyazaki and others",
    items: [
      { name: "Spirited Away", aliases: ["Voyage de Chihiro"] },
      { name: "The Boy and the Heron", aliases: ["Garcon et le Heron"] },
      { name: "Howl's Moving Castle", aliases: ["Chateau Ambulant"] },
      { name: "Ponyo", aliases: ["Ponyo sur la falaise"] },
      { name: "Princess Mononoke", aliases: ["Mononoke"] },
      { name: "The Wind Rises", aliases: ["Vent se leve"] },
      { name: "The Secret World of Arrietty", aliases: ["Arrietty"] },
      { name: "From Up on Poppy Hill", aliases: ["Colline aux coquelicots"] },
      { name: "The Tale of the Princess Kaguya", aliases: ["Conte de la princesse Kaguya"] },
      { name: "When Marnie Was There", aliases: ["Souvenirs de Marnie"] }
    ]
  },
  {
    id: "mov-highest-grossing-dreamworks",
    category: "Movies",
    prompt: "Top 10 highest-grossing DreamWorks Animation films worldwide",
    hint: "Animated only, no live-action",
    items: [
      { name: "Shrek 2", aliases: [] },
      { name: "Minions", aliases: [] },
      { name: "Shrek the Third", aliases: ["Shrek 3"] },
      { name: "Shrek Forever After", aliases: ["Shrek 4"] },
      { name: "Madagascar 3: Europe's Most Wanted", aliases: ["Madagascar 3"] },
      { name: "Kung Fu Panda 4", aliases: [] },
      { name: "Kung Fu Panda 3", aliases: [] },
      { name: "Kung Fu Panda 2", aliases: [] },
      { name: "Puss in Boots: The Last Wish", aliases: ["Chat Potte 2"] },
      { name: "How to Train Your Dragon 2", aliases: ["Dragons 2"] }
    ]
  },
  {
    id: "mov-highest-grossing-r-rated",
    category: "Movies",
    prompt: "Top 10 highest-grossing R-rated films worldwide",
    hint: "MPAA R rating, lifetime gross",
    items: [
      { name: "Deadpool & Wolverine", aliases: ["Deadpool 3"] },
      { name: "Joker", aliases: [] },
      { name: "Oppenheimer", aliases: [] },
      { name: "It", aliases: ["IT 2017", "Ca"] },
      { name: "Deadpool 2", aliases: [] },
      { name: "Deadpool", aliases: ["Deadpool 1"] },
      { name: "The Passion of the Christ", aliases: ["Passion du Christ"] },
      { name: "The Matrix Reloaded", aliases: ["Matrix Reloaded"] },
      { name: "It Chapter Two", aliases: ["IT 2", "Ca 2"] },
      { name: "American Sniper", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-horror",
    category: "Movies",
    prompt: "Top 10 highest-grossing horror films worldwide",
    hint: "Lifetime box office, horror genre",
    items: [
      { name: "It", aliases: ["IT 2017", "Ca"] },
      { name: "The Sixth Sense", aliases: ["Sixieme Sens"] },
      { name: "It Chapter Two", aliases: ["IT 2", "Ca 2"] },
      { name: "Jaws", aliases: ["Les Dents de la mer"] },
      { name: "The Exorcist", aliases: ["L'Exorciste"] },
      { name: "The Nun", aliases: ["Nonne"] },
      { name: "A Quiet Place Part II", aliases: ["Sans un bruit 2"] },
      { name: "World War Z", aliases: ["WWZ"] },
      { name: "Hannibal", aliases: [] },
      { name: "Get Out", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-comedy",
    category: "Movies",
    prompt: "Top 10 highest-grossing comedy films worldwide",
    hint: "Comedy genre, lifetime gross",
    items: [
      { name: "The Lion King", aliases: ["Lion King 2019"] },
      { name: "Barbie", aliases: [] },
      { name: "Minions", aliases: [] },
      { name: "Toy Story 4", aliases: [] },
      { name: "Toy Story 3", aliases: [] },
      { name: "Despicable Me 3", aliases: ["Moi moche et mechant 3"] },
      { name: "Finding Dory", aliases: [] },
      { name: "Zootopia", aliases: ["Zootropolis"] },
      { name: "Despicable Me 2", aliases: ["Moi moche et mechant 2"] },
      { name: "Inside Out", aliases: ["Vice-Versa"] }
    ]
  },
  {
    id: "mov-highest-grossing-war",
    category: "Movies",
    prompt: "Top 10 highest-grossing war films worldwide",
    hint: "War genre, lifetime gross",
    items: [
      { name: "The Eight Hundred", aliases: ["Eight Hundred", "Huit Cents"] },
      { name: "The Battle at Lake Changjin", aliases: ["Lake Changjin"] },
      { name: "American Sniper", aliases: [] },
      { name: "Dunkirk", aliases: ["Dunkerque"] },
      { name: "1917", aliases: [] },
      { name: "Pearl Harbor", aliases: [] },
      { name: "Saving Private Ryan", aliases: ["Il faut sauver le soldat Ryan"] },
      { name: "Hacksaw Ridge", aliases: ["Tu ne tueras point"] },
      { name: "Inglourious Basterds", aliases: ["Inglorious Basterds"] },
      { name: "Wolf Warrior 2", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-musical",
    category: "Movies",
    prompt: "Top 10 highest-grossing musical films worldwide",
    hint: "Live-action musicals primarily",
    items: [
      { name: "The Lion King", aliases: ["Lion King 2019"] },
      { name: "Wicked", aliases: ["Wicked Part 1"] },
      { name: "Beauty and the Beast", aliases: ["Belle et la Bete 2017"] },
      { name: "Aladdin", aliases: ["Aladdin 2019"] },
      { name: "Bohemian Rhapsody", aliases: [] },
      { name: "The Greatest Showman", aliases: [] },
      { name: "Mamma Mia!", aliases: ["Mamma Mia"] },
      { name: "Mamma Mia! Here We Go Again", aliases: ["Mamma Mia 2"] },
      { name: "La La Land", aliases: [] },
      { name: "Les Miserables", aliases: ["Miserables 2012"] }
    ]
  },
  {
    id: "mov-highest-grossing-biopic",
    category: "Movies",
    prompt: "Top 10 highest-grossing biopics worldwide",
    hint: "Biographical films",
    items: [
      { name: "Bohemian Rhapsody", aliases: [] },
      { name: "Oppenheimer", aliases: [] },
      { name: "American Sniper", aliases: [] },
      { name: "The Passion of the Christ", aliases: ["Passion du Christ"] },
      { name: "Pearl Harbor", aliases: [] },
      { name: "Catch Me If You Can", aliases: ["Arrete-moi si tu peux"] },
      { name: "Schindler's List", aliases: ["Liste de Schindler"] },
      { name: "The Imitation Game", aliases: [] },
      { name: "The Theory of Everything", aliases: ["Une merveilleuse histoire du temps"] },
      { name: "Rocketman", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-action",
    category: "Movies",
    prompt: "Top 10 highest-grossing action films worldwide",
    hint: "Action genre, lifetime gross",
    items: [
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "Spider-Man: No Way Home", aliases: ["No Way Home"] },
      { name: "The Avengers", aliases: ["Avengers 2012"] },
      { name: "Avengers: Age of Ultron", aliases: ["Age of Ultron"] },
      { name: "Black Panther", aliases: [] },
      { name: "Furious 7", aliases: ["Fast 7"] },
      { name: "Top Gun: Maverick", aliases: ["Top Gun 2"] },
      { name: "Iron Man 3", aliases: [] },
      { name: "Captain America: Civil War", aliases: ["Civil War"] }
    ]
  },
  {
    id: "mov-highest-grossing-sequels",
    category: "Movies",
    prompt: "Top 10 highest-grossing movie sequels worldwide",
    hint: "Numbered or named sequels",
    items: [
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Avatar: The Way of Water", aliases: ["Avatar 2"] },
      { name: "Ne Zha 2", aliases: ["Nezha 2"] },
      { name: "Star Wars: The Force Awakens", aliases: ["Force Awakens"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "Spider-Man: No Way Home", aliases: ["No Way Home"] },
      { name: "Inside Out 2", aliases: [] },
      { name: "Top Gun: Maverick", aliases: ["Top Gun 2"] },
      { name: "Star Wars: The Last Jedi", aliases: ["Last Jedi", "Star Wars Episode VIII"] },
      { name: "Jurassic World", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-bond",
    category: "Movies",
    prompt: "Top 10 highest-grossing James Bond films (worldwide)",
    hint: "Eon Productions, lifetime gross",
    items: [
      { name: "Skyfall", aliases: [] },
      { name: "Spectre", aliases: [] },
      { name: "No Time to Die", aliases: ["Mourir peut attendre"] },
      { name: "Casino Royale", aliases: ["Casino Royale 2006"] },
      { name: "Quantum of Solace", aliases: [] },
      { name: "Die Another Day", aliases: ["Meurs un autre jour"] },
      { name: "The World Is Not Enough", aliases: ["Monde ne suffit pas"] },
      { name: "Tomorrow Never Dies", aliases: ["Demain ne meurt jamais"] },
      { name: "GoldenEye", aliases: [] },
      { name: "Goldfinger", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-mcu",
    category: "Movies",
    prompt: "Top 10 highest-grossing Marvel Cinematic Universe films",
    hint: "MCU worldwide gross",
    items: [
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "Spider-Man: No Way Home", aliases: ["No Way Home"] },
      { name: "The Avengers", aliases: ["Avengers 2012"] },
      { name: "Avengers: Age of Ultron", aliases: ["Age of Ultron"] },
      { name: "Black Panther", aliases: [] },
      { name: "Deadpool & Wolverine", aliases: ["Deadpool 3"] },
      { name: "Captain America: Civil War", aliases: ["Civil War"] },
      { name: "Captain Marvel", aliases: [] },
      { name: "Iron Man 3", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-star-wars",
    category: "Movies",
    prompt: "Top 10 highest-grossing Star Wars films worldwide",
    hint: "Theatrical releases including spinoffs",
    items: [
      { name: "Star Wars: The Force Awakens", aliases: ["Force Awakens", "Episode VII"] },
      { name: "Star Wars: The Last Jedi", aliases: ["Last Jedi", "Episode VIII"] },
      { name: "Star Wars: The Rise of Skywalker", aliases: ["Rise of Skywalker", "Episode IX"] },
      { name: "Rogue One: A Star Wars Story", aliases: ["Rogue One"] },
      { name: "Star Wars: Episode I - The Phantom Menace", aliases: ["Phantom Menace", "Episode I"] },
      { name: "Star Wars: Episode III - Revenge of the Sith", aliases: ["Revenge of the Sith", "Episode III"] },
      { name: "Star Wars", aliases: ["A New Hope", "Episode IV"] },
      { name: "Star Wars: Episode II - Attack of the Clones", aliases: ["Attack of the Clones", "Episode II"] },
      { name: "Return of the Jedi", aliases: ["Episode VI"] },
      { name: "The Empire Strikes Back", aliases: ["Empire Strikes Back", "Episode V"] }
    ]
  },
  {
    id: "mov-highest-grossing-harry-potter",
    category: "Movies",
    prompt: "Top 10 highest-grossing Harry Potter / Wizarding World films",
    hint: "Including Fantastic Beasts",
    items: [
      { name: "Harry Potter and the Deathly Hallows - Part 2", aliases: ["Deathly Hallows 2"] },
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone", "Harry Potter 1"] },
      { name: "Harry Potter and the Deathly Hallows - Part 1", aliases: ["Deathly Hallows 1"] },
      { name: "Harry Potter and the Half-Blood Prince", aliases: ["Half-Blood Prince"] },
      { name: "Harry Potter and the Order of the Phoenix", aliases: ["Order of the Phoenix"] },
      { name: "Harry Potter and the Goblet of Fire", aliases: ["Goblet of Fire"] },
      { name: "Harry Potter and the Chamber of Secrets", aliases: ["Chamber of Secrets"] },
      { name: "Fantastic Beasts and Where to Find Them", aliases: ["Fantastic Beasts 1"] },
      { name: "Harry Potter and the Prisoner of Azkaban", aliases: ["Prisoner of Azkaban"] },
      { name: "Fantastic Beasts: The Crimes of Grindelwald", aliases: ["Crimes of Grindelwald"] }
    ]
  },
  {
    id: "mov-highest-grossing-lotr",
    category: "Movies",
    prompt: "Top 10 highest-grossing Lord of the Rings / Hobbit films",
    hint: "Middle-earth films",
    items: [
      { name: "The Lord of the Rings: The Return of the King", aliases: ["Return of the King", "ROTK", "LOTR 3"] },
      { name: "The Hobbit: An Unexpected Journey", aliases: ["Unexpected Journey", "Hobbit 1"] },
      { name: "The Hobbit: The Desolation of Smaug", aliases: ["Desolation of Smaug", "Hobbit 2"] },
      { name: "The Hobbit: The Battle of the Five Armies", aliases: ["Battle of the Five Armies", "Hobbit 3"] },
      { name: "The Lord of the Rings: The Two Towers", aliases: ["Two Towers", "LOTR 2"] },
      { name: "The Lord of the Rings: The Fellowship of the Ring", aliases: ["Fellowship of the Ring", "FOTR", "LOTR 1"] },
      { name: "The Lord of the Rings: The War of the Rohirrim", aliases: ["War of the Rohirrim"] },
      { name: "The Lord of the Rings", aliases: ["Bakshi LOTR 1978"] },
      { name: "The Hobbit", aliases: ["Hobbit 1977 TV"] },
      { name: "The Return of the King", aliases: ["Return of the King 1980 TV"] }
    ]
  },
  {
    id: "mov-highest-grossing-jurassic",
    category: "Movies",
    prompt: "Highest-grossing Jurassic Park / World films",
    hint: "Worldwide gross",
    items: [
      { name: "Jurassic World", aliases: ["Jurassic World 1"] },
      { name: "Jurassic World: Fallen Kingdom", aliases: ["Fallen Kingdom", "Jurassic World 2"] },
      { name: "Jurassic World Dominion", aliases: ["Dominion", "Jurassic World 3"] },
      { name: "Jurassic Park", aliases: ["Jurassic Park 1"] },
      { name: "The Lost World: Jurassic Park", aliases: ["Lost World", "Jurassic Park 2"] },
      { name: "Jurassic Park III", aliases: ["Jurassic Park 3"] }
    ]
  },
  {
    id: "mov-highest-grossing-mission-impossible",
    category: "Movies",
    prompt: "Highest-grossing Mission: Impossible films",
    hint: "Tom Cruise franchise",
    items: [
      { name: "Mission: Impossible - Fallout", aliases: ["Fallout", "MI6"] },
      { name: "Mission: Impossible - Ghost Protocol", aliases: ["Ghost Protocol", "MI4"] },
      { name: "Mission: Impossible 2", aliases: ["MI2"] },
      { name: "Mission: Impossible - Rogue Nation", aliases: ["Rogue Nation", "MI5"] },
      { name: "Mission: Impossible - Dead Reckoning Part One", aliases: ["Dead Reckoning", "MI7"] },
      { name: "Mission: Impossible - The Final Reckoning", aliases: ["Final Reckoning", "MI8"] },
      { name: "Mission: Impossible III", aliases: ["MI3"] },
      { name: "Mission: Impossible", aliases: ["MI1", "Mission Impossible 1"] }
    ]
  },
  {
    id: "mov-highest-grossing-fast-furious",
    category: "Movies",
    prompt: "Top 10 highest-grossing Fast & Furious films",
    hint: "Including spinoffs",
    items: [
      { name: "Furious 7", aliases: ["Fast 7"] },
      { name: "The Fate of the Furious", aliases: ["Fast 8", "Fate of the Furious"] },
      { name: "F9: The Fast Saga", aliases: ["F9", "Fast 9"] },
      { name: "Fast X", aliases: ["Fast 10"] },
      { name: "Fast Five", aliases: ["Fast 5"] },
      { name: "Fast & Furious 6", aliases: ["Fast 6"] },
      { name: "Hobbs & Shaw", aliases: ["Fast and Furious Presents Hobbs and Shaw"] },
      { name: "Fast & Furious", aliases: ["Fast 4", "Fast and Furious 2009"] },
      { name: "2 Fast 2 Furious", aliases: [] },
      { name: "The Fast and the Furious", aliases: ["Fast 1"] }
    ]
  },
  {
    id: "mov-most-oscar-wins-films",
    category: "Movies",
    prompt: "Top 10 films with most Oscar wins",
    hint: "Best at the Academy Awards",
    items: [
      { name: "Ben-Hur", aliases: ["Ben Hur"] },
      { name: "Titanic", aliases: [] },
      { name: "The Lord of the Rings: The Return of the King", aliases: ["ROTK"] },
      { name: "West Side Story", aliases: ["West Side Story 1961"] },
      { name: "The English Patient", aliases: ["Patient anglais"] },
      { name: "Gigi", aliases: [] },
      { name: "The Last Emperor", aliases: ["Dernier empereur"] },
      { name: "Gone with the Wind", aliases: ["GWTW"] },
      { name: "From Here to Eternity", aliases: ["Tant qu'il y aura des hommes"] },
      { name: "On the Waterfront", aliases: ["Sur les quais"] }
    ]
  },
  {
    id: "mov-most-oscar-nominations-films",
    category: "Movies",
    prompt: "Top 10 films with most Oscar nominations",
    hint: "Single film nomination counts",
    items: [
      { name: "All About Eve", aliases: ["Eve"] },
      { name: "Titanic", aliases: [] },
      { name: "La La Land", aliases: [] },
      { name: "Oppenheimer", aliases: [] },
      { name: "Mary Poppins", aliases: [] },
      { name: "Forrest Gump", aliases: [] },
      { name: "Shakespeare in Love", aliases: [] },
      { name: "Gone with the Wind", aliases: ["GWTW"] },
      { name: "From Here to Eternity", aliases: ["Tant qu'il y aura des hommes"] },
      { name: "On the Waterfront", aliases: ["Sur les quais"] }
    ]
  },
  {
    id: "mov-most-oscars-actor",
    category: "Movies",
    prompt: "Top 10 actors/actresses with most acting Oscars",
    hint: "Acting Academy Awards only",
    items: [
      { name: "Katharine Hepburn", aliases: [] },
      { name: "Daniel Day-Lewis", aliases: ["Day Lewis"] },
      { name: "Frances McDormand", aliases: [] },
      { name: "Meryl Streep", aliases: [] },
      { name: "Jack Nicholson", aliases: [] },
      { name: "Walter Brennan", aliases: [] },
      { name: "Ingrid Bergman", aliases: [] },
      { name: "Cate Blanchett", aliases: [] },
      { name: "Bette Davis", aliases: [] },
      { name: "Tom Hanks", aliases: [] }
    ]
  },
  {
    id: "mov-most-oscars-director",
    category: "Movies",
    prompt: "Top 10 directors with most Best Director Oscars",
    hint: "Academy Award for Best Directing",
    items: [
      { name: "John Ford", aliases: [] },
      { name: "Frank Capra", aliases: [] },
      { name: "William Wyler", aliases: [] },
      { name: "Steven Spielberg", aliases: [] },
      { name: "Clint Eastwood", aliases: [] },
      { name: "Alejandro G. Inarritu", aliases: ["Inarritu"] },
      { name: "Ang Lee", aliases: [] },
      { name: "Oliver Stone", aliases: [] },
      { name: "Milos Forman", aliases: [] },
      { name: "Elia Kazan", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-actors-lead",
    category: "Movies",
    prompt: "Top 10 highest-grossing lead actors all-time (domestic US)",
    hint: "Box Office Mojo lead role rankings",
    items: [
      { name: "Samuel L. Jackson", aliases: ["Samuel L Jackson", "Samuel Jackson"] },
      { name: "Robert Downey Jr.", aliases: ["Robert Downey Jr", "RDJ"] },
      { name: "Scarlett Johansson", aliases: [] },
      { name: "Chris Pratt", aliases: [] },
      { name: "Zoe Saldana", aliases: ["Zoe Saldana"] },
      { name: "Chris Evans", aliases: [] },
      { name: "Chris Hemsworth", aliases: [] },
      { name: "Tom Hanks", aliases: [] },
      { name: "Tom Cruise", aliases: [] },
      { name: "Bradley Cooper", aliases: [] }
    ]
  },
  {
    id: "mov-most-oscar-nominated-actors",
    category: "Movies",
    prompt: "Top 10 most Oscar-nominated actors/actresses",
    hint: "All acting nominations combined",
    items: [
      { name: "Meryl Streep", aliases: [] },
      { name: "Katharine Hepburn", aliases: [] },
      { name: "Jack Nicholson", aliases: [] },
      { name: "Bette Davis", aliases: [] },
      { name: "Laurence Olivier", aliases: [] },
      { name: "Spencer Tracy", aliases: [] },
      { name: "Paul Newman", aliases: [] },
      { name: "Al Pacino", aliases: [] },
      { name: "Marlon Brando", aliases: [] },
      { name: "Denzel Washington", aliases: [] }
    ]
  },
  {
    id: "mov-best-picture-recent-10",
    category: "Movies",
    prompt: "Most recent 10 Best Picture Oscar winners (newest first)",
    hint: "Through 2025 ceremony",
    items: [
      { name: "Anora", aliases: [] },
      { name: "Oppenheimer", aliases: [] },
      { name: "Everything Everywhere All at Once", aliases: ["EEAAO"] },
      { name: "CODA", aliases: [] },
      { name: "Nomadland", aliases: [] },
      { name: "Parasite", aliases: [] },
      { name: "Green Book", aliases: [] },
      { name: "The Shape of Water", aliases: ["Shape of Water"] },
      { name: "Moonlight", aliases: [] },
      { name: "Spotlight", aliases: [] }
    ]
  },
  {
    id: "mov-imdb-top-10",
    category: "Movies",
    prompt: "Top 10 films on IMDb Top 250",
    hint: "User-voted ranking",
    items: [
      { name: "The Shawshank Redemption", aliases: ["Shawshank"] },
      { name: "The Godfather", aliases: ["Parrain"] },
      { name: "The Dark Knight", aliases: ["Dark Knight"] },
      { name: "The Godfather Part II", aliases: ["Parrain 2", "Godfather 2"] },
      { name: "12 Angry Men", aliases: ["Douze hommes en colere"] },
      { name: "Schindler's List", aliases: ["Liste de Schindler"] },
      { name: "The Lord of the Rings: The Return of the King", aliases: ["ROTK"] },
      { name: "Pulp Fiction", aliases: [] },
      { name: "The Lord of the Rings: The Fellowship of the Ring", aliases: ["FOTR"] },
      { name: "The Good, the Bad and the Ugly", aliases: ["Bon la brute et le truand"] }
    ]
  },
  {
    id: "mov-highest-grossing-franchises",
    category: "Movies",
    prompt: "Top 10 highest-grossing film franchises worldwide",
    hint: "Total franchise box office",
    items: [
      { name: "Marvel Cinematic Universe", aliases: ["MCU"] },
      { name: "Star Wars", aliases: [] },
      { name: "Harry Potter / Wizarding World", aliases: ["Harry Potter", "Wizarding World"] },
      { name: "James Bond", aliases: ["007"] },
      { name: "Spider-Man", aliases: ["Spiderman"] },
      { name: "Avengers", aliases: [] },
      { name: "Fast & Furious", aliases: ["Fast and Furious"] },
      { name: "Batman", aliases: [] },
      { name: "X-Men", aliases: ["Xmen"] },
      { name: "Jurassic Park", aliases: ["Jurassic World"] }
    ]
  },
  {
    id: "mov-highest-grossing-foreign-language",
    category: "Movies",
    prompt: "Top 10 highest-grossing non-English language films worldwide",
    hint: "Original language not English",
    items: [
      { name: "Ne Zha 2", aliases: ["Nezha 2"] },
      { name: "The Battle at Lake Changjin", aliases: ["Lake Changjin"] },
      { name: "Wolf Warrior 2", aliases: [] },
      { name: "Hi, Mom", aliases: [] },
      { name: "Demon Slayer: Mugen Train", aliases: ["Mugen Train"] },
      { name: "The Wandering Earth", aliases: [] },
      { name: "Full River Red", aliases: [] },
      { name: "Detective Chinatown 3", aliases: [] },
      { name: "The Wandering Earth II", aliases: ["Wandering Earth 2"] },
      { name: "Spirited Away", aliases: ["Voyage de Chihiro"] }
    ]
  },
  {
    id: "mov-highest-grossing-indian",
    category: "Movies",
    prompt: "Top 10 highest-grossing Indian films worldwide",
    hint: "All Indian languages combined",
    items: [
      { name: "Dangal", aliases: [] },
      { name: "Baahubali 2: The Conclusion", aliases: ["Baahubali 2"] },
      { name: "RRR", aliases: [] },
      { name: "Pathaan", aliases: [] },
      { name: "KGF: Chapter 2", aliases: ["KGF 2"] },
      { name: "Jawan", aliases: [] },
      { name: "Pushpa 2: The Rule", aliases: ["Pushpa 2"] },
      { name: "Secret Superstar", aliases: [] },
      { name: "PK", aliases: [] },
      { name: "Bajrangi Bhaijaan", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-chinese",
    category: "Movies",
    prompt: "Top 10 highest-grossing Chinese films worldwide",
    hint: "Mainland China productions",
    items: [
      { name: "Ne Zha 2", aliases: ["Nezha 2"] },
      { name: "The Battle at Lake Changjin", aliases: ["Lake Changjin"] },
      { name: "Wolf Warrior 2", aliases: [] },
      { name: "Hi, Mom", aliases: [] },
      { name: "The Wandering Earth", aliases: [] },
      { name: "Full River Red", aliases: [] },
      { name: "Detective Chinatown 3", aliases: [] },
      { name: "The Wandering Earth II", aliases: ["Wandering Earth 2"] },
      { name: "The Eight Hundred", aliases: ["Eight Hundred"] },
      { name: "YOLO", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-japanese",
    category: "Movies",
    prompt: "Top 10 highest-grossing Japanese films worldwide",
    hint: "Japanese productions, animated or live-action",
    items: [
      { name: "Demon Slayer: Mugen Train", aliases: ["Mugen Train", "Kimetsu no Yaiba"] },
      { name: "Spirited Away", aliases: ["Voyage de Chihiro"] },
      { name: "The Boy and the Heron", aliases: ["Garcon et le Heron"] },
      { name: "Your Name", aliases: ["Kimi no Na wa"] },
      { name: "Howl's Moving Castle", aliases: ["Chateau Ambulant"] },
      { name: "Ponyo", aliases: [] },
      { name: "One Piece Film: Red", aliases: ["One Piece Red"] },
      { name: "Princess Mononoke", aliases: ["Mononoke"] },
      { name: "Suzume", aliases: [] },
      { name: "Weathering with You", aliases: ["Tenki no Ko"] }
    ]
  },
  {
    id: "mov-highest-grossing-korean",
    category: "Movies",
    prompt: "Top 10 highest-grossing Korean films worldwide",
    hint: "South Korean productions",
    items: [
      { name: "The Admiral: Roaring Currents", aliases: ["Roaring Currents", "Myeongryang"] },
      { name: "Extreme Job", aliases: [] },
      { name: "Along with the Gods: The Two Worlds", aliases: ["Along with the Gods 1"] },
      { name: "Ode to My Father", aliases: [] },
      { name: "Along with the Gods: The Last 49 Days", aliases: ["Along with the Gods 2"] },
      { name: "Veteran", aliases: [] },
      { name: "The Thieves", aliases: [] },
      { name: "Miracle in Cell No. 7", aliases: [] },
      { name: "Train to Busan", aliases: [] },
      { name: "Assassination", aliases: [] }
    ]
  },
  {
    id: "mov-biggest-opening-worldwide",
    category: "Movies",
    prompt: "Top 10 biggest worldwide opening weekends",
    hint: "Three-day global box office debut",
    items: [
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Spider-Man: No Way Home", aliases: ["No Way Home"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "Deadpool & Wolverine", aliases: ["Deadpool 3"] },
      { name: "Star Wars: The Force Awakens", aliases: ["Force Awakens"] },
      { name: "Avatar: The Way of Water", aliases: ["Avatar 2"] },
      { name: "Star Wars: The Last Jedi", aliases: ["Last Jedi"] },
      { name: "Jurassic World", aliases: [] },
      { name: "The Fate of the Furious", aliases: ["Fast 8"] },
      { name: "Furious 7", aliases: ["Fast 7"] }
    ]
  },
  {
    id: "mov-biggest-opening-domestic",
    category: "Movies",
    prompt: "Top 10 biggest US opening weekends",
    hint: "Three-day domestic debut",
    items: [
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Spider-Man: No Way Home", aliases: ["No Way Home"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "Star Wars: The Force Awakens", aliases: ["Force Awakens"] },
      { name: "Deadpool & Wolverine", aliases: ["Deadpool 3"] },
      { name: "Star Wars: The Last Jedi", aliases: ["Last Jedi"] },
      { name: "Inside Out 2", aliases: [] },
      { name: "Barbie", aliases: [] },
      { name: "Jurassic World", aliases: [] },
      { name: "The Avengers", aliases: ["Avengers 2012"] }
    ]
  },
  {
    id: "mov-most-expensive-productions",
    category: "Movies",
    prompt: "Top 10 most expensive film productions",
    hint: "Production budget",
    items: [
      { name: "Star Wars: The Force Awakens", aliases: ["Force Awakens"] },
      { name: "Avengers: Age of Ultron", aliases: ["Age of Ultron"] },
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "Pirates of the Caribbean: On Stranger Tides", aliases: ["On Stranger Tides", "Pirates 4"] },
      { name: "Avatar: The Way of Water", aliases: ["Avatar 2"] },
      { name: "Justice League", aliases: [] },
      { name: "Indiana Jones and the Dial of Destiny", aliases: ["Dial of Destiny", "Indy 5"] },
      { name: "Solo: A Star Wars Story", aliases: ["Solo"] },
      { name: "Pirates of the Caribbean: At World's End", aliases: ["At World's End", "Pirates 3"] }
    ]
  },
  {
    id: "mov-highest-grossing-directors",
    category: "Movies",
    prompt: "Top 10 highest-grossing directors by career box office",
    hint: "Worldwide cumulative",
    items: [
      { name: "Steven Spielberg", aliases: [] },
      { name: "Anthony Russo", aliases: ["Russo Brother"] },
      { name: "Joe Russo", aliases: ["Russo Brother"] },
      { name: "Peter Jackson", aliases: [] },
      { name: "Michael Bay", aliases: [] },
      { name: "James Cameron", aliases: [] },
      { name: "Christopher Nolan", aliases: [] },
      { name: "David Yates", aliases: [] },
      { name: "Tim Burton", aliases: [] },
      { name: "Robert Zemeckis", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-70s",
    category: "Movies",
    prompt: "Top 10 highest-grossing films of the 1970s (worldwide)",
    hint: "Released 1970-1979",
    items: [
      { name: "Star Wars", aliases: ["A New Hope", "Episode IV"] },
      { name: "Jaws", aliases: ["Dents de la mer"] },
      { name: "Grease", aliases: [] },
      { name: "The Exorcist", aliases: ["L'Exorciste"] },
      { name: "Close Encounters of the Third Kind", aliases: ["Rencontres du troisieme type"] },
      { name: "Superman", aliases: ["Superman 1978"] },
      { name: "Saturday Night Fever", aliases: ["Fievre du samedi soir"] },
      { name: "Moonraker", aliases: [] },
      { name: "Rocky", aliases: [] },
      { name: "The Spy Who Loved Me", aliases: ["Espion qui m'aimait"] }
    ]
  },
  {
    id: "mov-highest-grossing-80s",
    category: "Movies",
    prompt: "Top 10 highest-grossing films of the 1980s (worldwide)",
    hint: "Released 1980-1989",
    items: [
      { name: "E.T. the Extra-Terrestrial", aliases: ["ET"] },
      { name: "Indiana Jones and the Last Crusade", aliases: ["Last Crusade", "Indy 3"] },
      { name: "Rain Man", aliases: [] },
      { name: "Return of the Jedi", aliases: ["Episode VI"] },
      { name: "Batman", aliases: ["Batman 1989"] },
      { name: "Indiana Jones and the Temple of Doom", aliases: ["Temple of Doom", "Indy 2"] },
      { name: "Back to the Future", aliases: ["Retour vers le futur"] },
      { name: "Raiders of the Lost Ark", aliases: ["Aventuriers de l'arche perdue", "Indy 1"] },
      { name: "Who Framed Roger Rabbit", aliases: ["Roger Rabbit"] },
      { name: "Top Gun", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-90s",
    category: "Movies",
    prompt: "Top 10 highest-grossing films of the 1990s (worldwide)",
    hint: "Released 1990-1999",
    items: [
      { name: "Titanic", aliases: [] },
      { name: "Star Wars: Episode I - The Phantom Menace", aliases: ["Phantom Menace"] },
      { name: "Jurassic Park", aliases: [] },
      { name: "Independence Day", aliases: ["ID4"] },
      { name: "The Lion King", aliases: ["Lion King 1994", "Roi Lion"] },
      { name: "Forrest Gump", aliases: [] },
      { name: "The Sixth Sense", aliases: ["Sixieme Sens"] },
      { name: "The Lost World: Jurassic Park", aliases: ["Lost World", "Jurassic Park 2"] },
      { name: "Men in Black", aliases: ["MIB"] },
      { name: "Armageddon", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-2000s",
    category: "Movies",
    prompt: "Top 10 highest-grossing films of the 2000s (worldwide)",
    hint: "Released 2000-2009",
    items: [
      { name: "Avatar", aliases: [] },
      { name: "The Lord of the Rings: The Return of the King", aliases: ["ROTK"] },
      { name: "Pirates of the Caribbean: Dead Man's Chest", aliases: ["Dead Man's Chest", "Pirates 2"] },
      { name: "The Dark Knight", aliases: [] },
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone", "Harry Potter 1"] },
      { name: "Pirates of the Caribbean: At World's End", aliases: ["At World's End", "Pirates 3"] },
      { name: "Harry Potter and the Order of the Phoenix", aliases: ["Order of the Phoenix"] },
      { name: "Harry Potter and the Half-Blood Prince", aliases: ["Half-Blood Prince"] },
      { name: "The Lord of the Rings: The Two Towers", aliases: ["Two Towers"] },
      { name: "Star Wars: Episode III - Revenge of the Sith", aliases: ["Revenge of the Sith"] }
    ]
  },
  {
    id: "mov-highest-grossing-2010s",
    category: "Movies",
    prompt: "Top 10 highest-grossing films of the 2010s (worldwide)",
    hint: "Released 2010-2019",
    items: [
      { name: "Avengers: Endgame", aliases: ["Endgame"] },
      { name: "Star Wars: The Force Awakens", aliases: ["Force Awakens"] },
      { name: "Avengers: Infinity War", aliases: ["Infinity War"] },
      { name: "The Lion King", aliases: ["Lion King 2019"] },
      { name: "Jurassic World", aliases: [] },
      { name: "The Avengers", aliases: ["Avengers 2012"] },
      { name: "Furious 7", aliases: ["Fast 7"] },
      { name: "Frozen II", aliases: ["Frozen 2"] },
      { name: "Avengers: Age of Ultron", aliases: ["Age of Ultron"] },
      { name: "Black Panther", aliases: [] }
    ]
  },
  {
    id: "mov-palme-dor-recent",
    category: "Movies",
    prompt: "Most recent 10 Palme d'Or winners at Cannes (newest first)",
    hint: "Through 2025 festival",
    items: [
      { name: "It Was Just an Accident", aliases: ["C'etait qu'un accident"] },
      { name: "Anora", aliases: [] },
      { name: "Anatomy of a Fall", aliases: ["Anatomie d'une chute"] },
      { name: "Triangle of Sadness", aliases: [] },
      { name: "Titane", aliases: [] },
      { name: "Parasite", aliases: [] },
      { name: "Shoplifters", aliases: ["Affaire de famille"] },
      { name: "The Square", aliases: [] },
      { name: "I, Daniel Blake", aliases: ["Moi Daniel Blake"] },
      { name: "Dheepan", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-tom-hanks",
    category: "Movies",
    prompt: "Top 10 highest-grossing Tom Hanks films",
    hint: "Lead or major role, worldwide",
    items: [
      { name: "Toy Story 4", aliases: [] },
      { name: "Toy Story 3", aliases: [] },
      { name: "Forrest Gump", aliases: [] },
      { name: "Cast Away", aliases: ["Seul au monde"] },
      { name: "The Da Vinci Code", aliases: ["Da Vinci Code"] },
      { name: "Saving Private Ryan", aliases: ["Soldat Ryan"] },
      { name: "Angels & Demons", aliases: ["Anges et Demons"] },
      { name: "Inferno", aliases: [] },
      { name: "Catch Me If You Can", aliases: ["Arrete-moi si tu peux"] },
      { name: "Toy Story 2", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-dicaprio",
    category: "Movies",
    prompt: "Top 10 highest-grossing Leonardo DiCaprio films",
    hint: "Worldwide gross",
    items: [
      { name: "Titanic", aliases: [] },
      { name: "Inception", aliases: [] },
      { name: "The Wolf of Wall Street", aliases: ["Loup de Wall Street"] },
      { name: "The Revenant", aliases: [] },
      { name: "Catch Me If You Can", aliases: ["Arrete-moi si tu peux"] },
      { name: "Shutter Island", aliases: [] },
      { name: "Django Unchained", aliases: [] },
      { name: "Once Upon a Time in Hollywood", aliases: [] },
      { name: "The Departed", aliases: ["Infiltres"] },
      { name: "Killers of the Flower Moon", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-brad-pitt",
    category: "Movies",
    prompt: "Top 10 highest-grossing Brad Pitt films",
    hint: "Worldwide gross",
    items: [
      { name: "Once Upon a Time in Hollywood", aliases: [] },
      { name: "World War Z", aliases: ["WWZ"] },
      { name: "Mr. & Mrs. Smith", aliases: ["Mr and Mrs Smith"] },
      { name: "Troy", aliases: ["Troie"] },
      { name: "Ocean's Eleven", aliases: ["Ocean's 11"] },
      { name: "Ocean's Twelve", aliases: ["Ocean's 12"] },
      { name: "Inglourious Basterds", aliases: ["Inglorious Basterds"] },
      { name: "The Curious Case of Benjamin Button", aliases: ["Benjamin Button"] },
      { name: "F1", aliases: ["F1 The Movie"] },
      { name: "Bullet Train", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-tom-cruise",
    category: "Movies",
    prompt: "Top 10 highest-grossing Tom Cruise films",
    hint: "Worldwide gross",
    items: [
      { name: "Top Gun: Maverick", aliases: ["Top Gun 2"] },
      { name: "Mission: Impossible - Fallout", aliases: ["Fallout", "MI6"] },
      { name: "Mission: Impossible - Ghost Protocol", aliases: ["Ghost Protocol", "MI4"] },
      { name: "War of the Worlds", aliases: ["Guerre des mondes"] },
      { name: "Mission: Impossible 2", aliases: ["MI2"] },
      { name: "Mission: Impossible - Rogue Nation", aliases: ["Rogue Nation", "MI5"] },
      { name: "Mission: Impossible - Dead Reckoning Part One", aliases: ["Dead Reckoning", "MI7"] },
      { name: "Mission: Impossible - The Final Reckoning", aliases: ["Final Reckoning", "MI8"] },
      { name: "Mission: Impossible III", aliases: ["MI3"] },
      { name: "Minority Report", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-will-smith",
    category: "Movies",
    prompt: "Top 10 highest-grossing Will Smith films",
    hint: "Worldwide gross",
    items: [
      { name: "Aladdin", aliases: ["Aladdin 2019"] },
      { name: "Independence Day", aliases: ["ID4"] },
      { name: "Suicide Squad", aliases: [] },
      { name: "I Am Legend", aliases: [] },
      { name: "Hancock", aliases: [] },
      { name: "Men in Black 3", aliases: ["MIB 3"] },
      { name: "Men in Black", aliases: ["MIB"] },
      { name: "Men in Black II", aliases: ["MIB 2"] },
      { name: "Bad Boys for Life", aliases: ["Bad Boys 3"] },
      { name: "I, Robot", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-denzel",
    category: "Movies",
    prompt: "Top 10 highest-grossing Denzel Washington films",
    hint: "Worldwide gross",
    items: [
      { name: "American Gangster", aliases: [] },
      { name: "Gladiator II", aliases: ["Gladiator 2"] },
      { name: "The Equalizer 2", aliases: ["Equalizer 2"] },
      { name: "The Equalizer", aliases: ["Equalizer"] },
      { name: "The Equalizer 3", aliases: ["Equalizer 3"] },
      { name: "Safe House", aliases: [] },
      { name: "Inside Man", aliases: [] },
      { name: "Remember the Titans", aliases: ["Plus que des champions"] },
      { name: "The Magnificent Seven", aliases: ["Sept mercenaires 2016"] },
      { name: "The Book of Eli", aliases: ["Livre d'Eli"] }
    ]
  },
  {
    id: "mov-highest-grossing-keanu",
    category: "Movies",
    prompt: "Top 10 highest-grossing Keanu Reeves films",
    hint: "Worldwide gross",
    items: [
      { name: "The Matrix Reloaded", aliases: ["Matrix Reloaded"] },
      { name: "Toy Story 4", aliases: [] },
      { name: "The Matrix", aliases: ["Matrix 1"] },
      { name: "The Matrix Revolutions", aliases: ["Matrix Revolutions"] },
      { name: "John Wick: Chapter 4", aliases: ["John Wick 4"] },
      { name: "The Matrix Resurrections", aliases: ["Matrix 4"] },
      { name: "John Wick: Chapter 3 - Parabellum", aliases: ["John Wick 3"] },
      { name: "John Wick: Chapter 2", aliases: ["John Wick 2"] },
      { name: "Bram Stoker's Dracula", aliases: ["Dracula 1992"] },
      { name: "Speed", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-meryl-streep",
    category: "Movies",
    prompt: "Top 10 highest-grossing Meryl Streep films",
    hint: "Worldwide gross",
    items: [
      { name: "Mamma Mia!", aliases: ["Mamma Mia"] },
      { name: "Mamma Mia! Here We Go Again", aliases: ["Mamma Mia 2"] },
      { name: "The Devil Wears Prada", aliases: ["Diable s'habille en Prada"] },
      { name: "Into the Woods", aliases: [] },
      { name: "It's Complicated", aliases: ["Pas si simple"] },
      { name: "The Post", aliases: ["Pentagon Papers"] },
      { name: "Julie & Julia", aliases: [] },
      { name: "Doubt", aliases: ["Doute"] },
      { name: "Out of Africa", aliases: ["Souvenirs d'Afrique"] },
      { name: "The Iron Lady", aliases: ["Dame de Fer"] }
    ]
  },
  {
    id: "mov-highest-grossing-julia-roberts",
    category: "Movies",
    prompt: "Top 10 highest-grossing Julia Roberts films",
    hint: "Worldwide gross",
    items: [
      { name: "Ocean's Eleven", aliases: ["Ocean's 11"] },
      { name: "Ocean's Twelve", aliases: ["Ocean's 12"] },
      { name: "Pretty Woman", aliases: [] },
      { name: "My Best Friend's Wedding", aliases: ["Mariage de mon meilleur ami"] },
      { name: "Notting Hill", aliases: ["Coup de foudre a Notting Hill"] },
      { name: "Erin Brockovich", aliases: [] },
      { name: "Runaway Bride", aliases: ["Just Married ou presque"] },
      { name: "Valentine's Day", aliases: ["Saint Valentin"] },
      { name: "Eat Pray Love", aliases: ["Mange Prie Aime"] },
      { name: "The Pelican Brief", aliases: ["Affaire Pelican"] }
    ]
  },
  {
    id: "mov-highest-grossing-sandra-bullock",
    category: "Movies",
    prompt: "Top 10 highest-grossing Sandra Bullock films",
    hint: "Worldwide gross",
    items: [
      { name: "Minions", aliases: [] },
      { name: "Minions: The Rise of Gru", aliases: ["Minions 2"] },
      { name: "Gravity", aliases: [] },
      { name: "The Blind Side", aliases: ["Etoile du Sud"] },
      { name: "The Heat", aliases: ["Flingueuses"] },
      { name: "The Proposal", aliases: ["Proposition"] },
      { name: "Bird Box", aliases: [] },
      { name: "Ocean's 8", aliases: ["Ocean's Eight"] },
      { name: "The Lost City", aliases: [] },
      { name: "Bullet Train", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-nicole-kidman",
    category: "Movies",
    prompt: "Top 10 highest-grossing Nicole Kidman films",
    hint: "Worldwide gross",
    items: [
      { name: "Aquaman", aliases: [] },
      { name: "Aquaman and the Lost Kingdom", aliases: ["Aquaman 2"] },
      { name: "Happy Feet", aliases: [] },
      { name: "Moulin Rouge!", aliases: ["Moulin Rouge"] },
      { name: "Batman Forever", aliases: [] },
      { name: "The Others", aliases: ["Autres"] },
      { name: "Bombshell", aliases: ["Scandale"] },
      { name: "The Golden Compass", aliases: ["Boussole d'or"] },
      { name: "Lion", aliases: [] },
      { name: "Australia", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-jennifer-lawrence",
    category: "Movies",
    prompt: "Top 10 highest-grossing Jennifer Lawrence films",
    hint: "Worldwide gross",
    items: [
      { name: "The Hunger Games: Catching Fire", aliases: ["Catching Fire", "Hunger Games 2"] },
      { name: "The Hunger Games: Mockingjay - Part 1", aliases: ["Mockingjay 1"] },
      { name: "The Hunger Games", aliases: ["Hunger Games 1"] },
      { name: "The Hunger Games: Mockingjay - Part 2", aliases: ["Mockingjay 2"] },
      { name: "X-Men: Days of Future Past", aliases: ["Days of Future Past"] },
      { name: "X-Men: Apocalypse", aliases: ["Apocalypse"] },
      { name: "X-Men: First Class", aliases: ["First Class"] },
      { name: "Passengers", aliases: [] },
      { name: "Dark Phoenix", aliases: [] },
      { name: "American Hustle", aliases: ["Arnaque americaine"] }
    ]
  },
  {
    id: "mov-highest-grossing-nolan",
    category: "Movies",
    prompt: "Top 10 highest-grossing Christopher Nolan films",
    hint: "Worldwide gross, as director",
    items: [
      { name: "The Dark Knight Rises", aliases: ["Dark Knight Rises"] },
      { name: "Oppenheimer", aliases: [] },
      { name: "The Dark Knight", aliases: [] },
      { name: "Inception", aliases: [] },
      { name: "Interstellar", aliases: [] },
      { name: "Dunkirk", aliases: ["Dunkerque"] },
      { name: "Tenet", aliases: [] },
      { name: "Batman Begins", aliases: [] },
      { name: "The Prestige", aliases: [] },
      { name: "Insomnia", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-spielberg",
    category: "Movies",
    prompt: "Top 10 highest-grossing Steven Spielberg films",
    hint: "Worldwide gross, as director",
    items: [
      { name: "Jurassic Park", aliases: [] },
      { name: "The Lost World: Jurassic Park", aliases: ["Lost World"] },
      { name: "E.T. the Extra-Terrestrial", aliases: ["ET"] },
      { name: "Indiana Jones and the Kingdom of the Crystal Skull", aliases: ["Crystal Skull", "Indy 4"] },
      { name: "War of the Worlds", aliases: ["Guerre des mondes"] },
      { name: "Indiana Jones and the Last Crusade", aliases: ["Last Crusade", "Indy 3"] },
      { name: "Ready Player One", aliases: [] },
      { name: "Saving Private Ryan", aliases: ["Soldat Ryan"] },
      { name: "Catch Me If You Can", aliases: ["Arrete-moi si tu peux"] },
      { name: "Minority Report", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-tarantino",
    category: "Movies",
    prompt: "Top 10 highest-grossing Quentin Tarantino films",
    hint: "Worldwide gross, as director",
    items: [
      { name: "Django Unchained", aliases: [] },
      { name: "Once Upon a Time in Hollywood", aliases: [] },
      { name: "Inglourious Basterds", aliases: ["Inglorious Basterds"] },
      { name: "Pulp Fiction", aliases: [] },
      { name: "Kill Bill: Vol. 1", aliases: ["Kill Bill 1"] },
      { name: "Kill Bill: Vol. 2", aliases: ["Kill Bill 2"] },
      { name: "The Hateful Eight", aliases: ["8 Salopards"] },
      { name: "Death Proof", aliases: ["Boulevard de la mort"] },
      { name: "Jackie Brown", aliases: [] },
      { name: "Reservoir Dogs", aliases: [] }
    ]
  },
  {
    id: "mov-highest-grossing-scorsese",
    category: "Movies",
    prompt: "Top 10 highest-grossing Martin Scorsese films",
    hint: "Worldwide gross, as director",
    items: [
      { name: "The Wolf of Wall Street", aliases: ["Loup de Wall Street"] },
      { name: "Shutter Island", aliases: [] },
      { name: "The Departed", aliases: ["Infiltres"] },
      { name: "Hugo", aliases: ["Hugo Cabret"] },
      { name: "Killers of the Flower Moon", aliases: [] },
      { name: "The Aviator", aliases: ["Aviateur"] },
      { name: "Gangs of New York", aliases: [] },
      { name: "The Irishman", aliases: [] },
      { name: "Cape Fear", aliases: ["Nuits Cap Fear"] },
      { name: "Silence", aliases: [] }
    ]
  },
  {
    id: "mov-afi-top-10-american",
    category: "Movies",
    prompt: "Top 10 American films per AFI 100 Years 100 Movies (2007)",
    hint: "American Film Institute ranking",
    items: [
      { name: "Citizen Kane", aliases: [] },
      { name: "The Godfather", aliases: ["Parrain"] },
      { name: "Casablanca", aliases: [] },
      { name: "Raging Bull", aliases: ["Taureau enrage"] },
      { name: "Singin' in the Rain", aliases: ["Chantons sous la pluie"] },
      { name: "Gone with the Wind", aliases: ["GWTW"] },
      { name: "Lawrence of Arabia", aliases: ["Lawrence d'Arabie"] },
      { name: "Schindler's List", aliases: ["Liste de Schindler"] },
      { name: "Vertigo", aliases: ["Sueurs froides"] },
      { name: "The Wizard of Oz", aliases: ["Magicien d'Oz"] }
    ]
  },
  {
    id: "mov-highest-grossing-book-adaptations",
    category: "Movies",
    prompt: "Top 10 highest-grossing book adaptations worldwide",
    hint: "Based on novels",
    items: [
      { name: "Harry Potter and the Deathly Hallows - Part 2", aliases: ["Deathly Hallows 2"] },
      { name: "The Lord of the Rings: The Return of the King", aliases: ["ROTK"] },
      { name: "Jurassic Park", aliases: [] },
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone"] },
      { name: "Harry Potter and the Deathly Hallows - Part 1", aliases: ["Deathly Hallows 1"] },
      { name: "Harry Potter and the Half-Blood Prince", aliases: ["Half-Blood Prince"] },
      { name: "Harry Potter and the Order of the Phoenix", aliases: ["Order of the Phoenix"] },
      { name: "Harry Potter and the Goblet of Fire", aliases: ["Goblet of Fire"] },
      { name: "The Hobbit: An Unexpected Journey", aliases: ["Unexpected Journey", "Hobbit 1"] },
      { name: "The Lord of the Rings: The Two Towers", aliases: ["Two Towers"] }
    ]
  },
  {
    id: "mov-highest-grossing-french-films",
    category: "Movies",
    prompt: "Top 10 highest-grossing French films worldwide",
    hint: "French productions, lifetime gross",
    items: [
      { name: "The Intouchables", aliases: ["Intouchables"] },
      { name: "Lucy", aliases: [] },
      { name: "Valerian and the City of a Thousand Planets", aliases: ["Valerian"] },
      { name: "The Fifth Element", aliases: ["Cinquieme Element"] },
      { name: "Taken 2", aliases: [] },
      { name: "Asterix & Obelix: Mission Cleopatra", aliases: ["Mission Cleopatre"] },
      { name: "Welcome to the Sticks", aliases: ["Bienvenue chez les Ch'tis"] },
      { name: "The Artist", aliases: [] },
      { name: "Amelie", aliases: ["Fabuleux destin d'Amelie Poulain"] },
      { name: "Taxi 2", aliases: [] }
    ]
  },
  { id: "tv-most-watched-finales-us", category: "TV", prompt: "Most-watched US TV series finales (viewers)", hint: "All-time US finale audience",
    items: [
      { name: "M*A*S*H", aliases: ["MASH", "M.A.S.H."] },
      { name: "Cheers", aliases: [] },
      { name: "Seinfeld", aliases: [] },
      { name: "Friends", aliases: [] },
      { name: "Magnum, P.I.", aliases: ["Magnum PI"] },
      { name: "The Tonight Show Starring Johnny Carson", aliases: ["Johnny Carson finale"] },
      { name: "The Cosby Show", aliases: [] },
      { name: "All in the Family", aliases: [] },
      { name: "Family Ties", aliases: [] },
      { name: "Home Improvement", aliases: [] }
    ]
  },
  { id: "tv-imdb-highest-rated-series", category: "TV", prompt: "Highest-rated TV series on IMDb (all-time)", hint: "IMDb Top 250 TV",
    items: [
      { name: "Planet Earth II", aliases: [] },
      { name: "Breaking Bad", aliases: ["BrBa"] },
      { name: "Planet Earth", aliases: [] },
      { name: "Band of Brothers", aliases: [] },
      { name: "Chernobyl", aliases: [] },
      { name: "The Wire", aliases: [] },
      { name: "Avatar: The Last Airbender", aliases: ["ATLA"] },
      { name: "Blue Planet II", aliases: [] },
      { name: "The Sopranos", aliases: [] },
      { name: "Game of Thrones", aliases: ["GoT", "Le Trône de Fer"] }
    ]
  },
  { id: "tv-most-emmy-winning-shows", category: "TV", prompt: "Most Emmy-winning primetime TV shows (total wins)", hint: "All-time Emmy wins",
    items: [
      { name: "Saturday Night Live", aliases: ["SNL"] },
      { name: "Game of Thrones", aliases: ["GoT"] },
      { name: "Frasier", aliases: [] },
      { name: "The Simpsons", aliases: ["Les Simpson"] },
      { name: "The Daily Show", aliases: ["Daily Show with Jon Stewart"] },
      { name: "Cheers", aliases: [] },
      { name: "Hill Street Blues", aliases: [] },
      { name: "The Mary Tyler Moore Show", aliases: [] },
      { name: "The West Wing", aliases: [] },
      { name: "The Carol Burnett Show", aliases: [] }
    ]
  },
  { id: "tv-most-emmy-winning-drama", category: "TV", prompt: "Most Emmy-winning drama series (Outstanding Drama wins)", hint: "Drama Series Emmys",
    items: [
      { name: "Game of Thrones", aliases: ["GoT"] },
      { name: "Mad Men", aliases: [] },
      { name: "The West Wing", aliases: [] },
      { name: "Hill Street Blues", aliases: [] },
      { name: "L.A. Law", aliases: ["LA Law"] },
      { name: "The Crown", aliases: [] },
      { name: "Breaking Bad", aliases: [] },
      { name: "The Sopranos", aliases: [] },
      { name: "Succession", aliases: [] },
      { name: "Lou Grant", aliases: [] }
    ]
  },
  { id: "tv-most-emmy-winning-comedy", category: "TV", prompt: "Most Emmy-winning comedy series (Outstanding Comedy wins)", hint: "Comedy Series Emmys",
    items: [
      { name: "Frasier", aliases: [] },
      { name: "Modern Family", aliases: [] },
      { name: "The Mary Tyler Moore Show", aliases: [] },
      { name: "Cheers", aliases: [] },
      { name: "All in the Family", aliases: [] },
      { name: "Veep", aliases: [] },
      { name: "30 Rock", aliases: [] },
      { name: "The Phil Silvers Show", aliases: [] },
      { name: "The Dick Van Dyke Show", aliases: [] },
      { name: "Schitt's Creek", aliases: [] }
    ]
  },
  { id: "tv-most-emmy-winning-actors", category: "TV", prompt: "Most Emmy-winning actors (male, all categories)", hint: "Male performer wins",
    items: [
      { name: "Ed Asner", aliases: [] },
      { name: "Art Carney", aliases: [] },
      { name: "Carl Reiner", aliases: [] },
      { name: "Don Knotts", aliases: [] },
      { name: "Hank Azaria", aliases: [] },
      { name: "Peter Dinklage", aliases: [] },
      { name: "Bryan Cranston", aliases: [] },
      { name: "Bill Cosby", aliases: [] },
      { name: "John Larroquette", aliases: [] },
      { name: "Alan Alda", aliases: [] }
    ]
  },
  { id: "tv-most-emmy-winning-actresses", category: "TV", prompt: "Most Emmy-winning actresses (performance)", hint: "Female performer wins",
    items: [
      { name: "Julia Louis-Dreyfus", aliases: [] },
      { name: "Cloris Leachman", aliases: [] },
      { name: "Mary Tyler Moore", aliases: [] },
      { name: "Tracey Ullman", aliases: [] },
      { name: "Edie Falco", aliases: [] },
      { name: "Allison Janney", aliases: [] },
      { name: "Candice Bergen", aliases: [] },
      { name: "Lily Tomlin", aliases: [] },
      { name: "Tyne Daly", aliases: [] },
      { name: "Patricia Arquette", aliases: [] }
    ]
  },
  { id: "tv-longest-running-scripted-primetime", category: "TV", prompt: "Longest-running US scripted primetime shows (seasons)", hint: "Most seasons",
    items: [
      { name: "The Simpsons", aliases: ["Les Simpson"] },
      { name: "Law & Order: SVU", aliases: ["SVU", "Special Victims Unit"] },
      { name: "Gunsmoke", aliases: [] },
      { name: "Law & Order", aliases: [] },
      { name: "Family Guy", aliases: [] },
      { name: "South Park", aliases: [] },
      { name: "Grey's Anatomy", aliases: [] },
      { name: "Bonanza", aliases: [] },
      { name: "NCIS", aliases: [] },
      { name: "Lassie", aliases: [] }
    ]
  },
  { id: "tv-longest-running-animated", category: "TV", prompt: "Longest-running US animated series (seasons)", hint: "Animated seasons",
    items: [
      { name: "The Simpsons", aliases: [] },
      { name: "Arthur", aliases: [] },
      { name: "South Park", aliases: [] },
      { name: "Family Guy", aliases: [] },
      { name: "SpongeBob SquarePants", aliases: ["Bob l'éponge"] },
      { name: "King of the Hill", aliases: [] },
      { name: "Scooby-Doo, Where Are You!", aliases: ["Scooby-Doo"] },
      { name: "Rugrats", aliases: [] },
      { name: "Bob's Burgers", aliases: [] },
      { name: "American Dad!", aliases: [] }
    ]
  },
  { id: "tv-longest-running-soaps", category: "TV", prompt: "Longest-running US soap operas (episodes)", hint: "Daytime soap runs",
    items: [
      { name: "Guiding Light", aliases: [] },
      { name: "General Hospital", aliases: [] },
      { name: "Days of Our Lives", aliases: [] },
      { name: "As the World Turns", aliases: [] },
      { name: "The Young and the Restless", aliases: [] },
      { name: "The Bold and the Beautiful", aliases: [] },
      { name: "Another World", aliases: [] },
      { name: "Search for Tomorrow", aliases: [] },
      { name: "One Life to Live", aliases: [] },
      { name: "All My Children", aliases: [] }
    ]
  },
  { id: "tv-longest-running-talk-shows", category: "TV", prompt: "Longest-running US daytime/nighttime talk shows", hint: "Years on air",
    items: [
      { name: "The Tonight Show", aliases: [] },
      { name: "Today", aliases: ["The Today Show"] },
      { name: "Meet the Press", aliases: [] },
      { name: "Good Morning America", aliases: ["GMA"] },
      { name: "The Late Show", aliases: [] },
      { name: "Live with Kelly and Mark", aliases: ["Live!"] },
      { name: "The Oprah Winfrey Show", aliases: ["Oprah"] },
      { name: "The Ellen DeGeneres Show", aliases: ["Ellen"] },
      { name: "The View", aliases: [] },
      { name: "Jimmy Kimmel Live!", aliases: [] }
    ]
  },
  { id: "tv-netflix-most-watched-all-time", category: "TV", prompt: "Most-watched Netflix series of all time (hours, 91-day)", hint: "Netflix Top 10 all-time",
    items: [
      { name: "Squid Game", aliases: ["Squid Game season 1"] },
      { name: "Wednesday", aliases: [] },
      { name: "Stranger Things 4", aliases: ["Stranger Things season 4"] },
      { name: "Dahmer – Monster: The Jeffrey Dahmer Story", aliases: ["Dahmer"] },
      { name: "Bridgerton season 2", aliases: ["Bridgerton 2"] },
      { name: "Money Heist part 5", aliases: ["La Casa de Papel", "La Casa de Papel partie 5"] },
      { name: "Stranger Things 3", aliases: ["Stranger Things season 3"] },
      { name: "The Night Agent", aliases: [] },
      { name: "Lupin part 1", aliases: ["Lupin"] },
      { name: "Bridgerton", aliases: ["Bridgerton season 1"] }
    ]
  },
  { id: "tv-netflix-non-english-most-watched", category: "TV", prompt: "Most-watched non-English Netflix series ever", hint: "Non-English Top 10",
    items: [
      { name: "Squid Game", aliases: [] },
      { name: "Money Heist part 5", aliases: ["La Casa de Papel"] },
      { name: "Money Heist part 4", aliases: [] },
      { name: "All of Us Are Dead", aliases: [] },
      { name: "Lupin part 1", aliases: [] },
      { name: "Money Heist part 3", aliases: [] },
      { name: "Squid Game season 2", aliases: [] },
      { name: "The Glory", aliases: [] },
      { name: "Berlin", aliases: [] },
      { name: "Lupin part 2", aliases: [] }
    ]
  },
  { id: "tv-hbo-highest-rated-dramas", category: "TV", prompt: "Highest-rated HBO dramas (IMDb)", hint: "HBO drama scores",
    items: [
      { name: "Band of Brothers", aliases: [] },
      { name: "Chernobyl", aliases: [] },
      { name: "The Wire", aliases: [] },
      { name: "The Sopranos", aliases: [] },
      { name: "Game of Thrones", aliases: ["GoT"] },
      { name: "Succession", aliases: [] },
      { name: "True Detective", aliases: [] },
      { name: "The Last of Us", aliases: [] },
      { name: "Westworld", aliases: [] },
      { name: "Boardwalk Empire", aliases: [] }
    ]
  },
  { id: "tv-super-bowl-halftime-most-watched", category: "TV", prompt: "Most-watched Super Bowl halftime shows (US viewers)", hint: "Halftime audience",
    items: [
      { name: "Usher (LIX, 2024)", aliases: ["Usher"] },
      { name: "Rihanna (LVII, 2023)", aliases: ["Rihanna"] },
      { name: "Kendrick Lamar (LIX, 2025)", aliases: ["Kendrick Lamar"] },
      { name: "Katy Perry (XLIX, 2015)", aliases: ["Katy Perry"] },
      { name: "Lady Gaga (LI, 2017)", aliases: ["Lady Gaga"] },
      { name: "Dr. Dre, Snoop, Eminem, Mary J. Blige, Kendrick (LVI, 2022)", aliases: ["Dr. Dre halftime"] },
      { name: "Madonna (XLVI, 2012)", aliases: ["Madonna"] },
      { name: "Bruno Mars (XLVIII, 2014)", aliases: ["Bruno Mars"] },
      { name: "Beyoncé (XLVII, 2013)", aliases: ["Beyonce"] },
      { name: "Justin Timberlake (LII, 2018)", aliases: ["Justin Timberlake"] }
    ]
  },
  { id: "tv-imdb-highest-sitcoms", category: "TV", prompt: "Highest-rated sitcoms on IMDb", hint: "Sitcom scores",
    items: [
      { name: "Seinfeld", aliases: [] },
      { name: "The Office (US)", aliases: ["The Office"] },
      { name: "Friends", aliases: [] },
      { name: "Arrested Development", aliases: [] },
      { name: "Brooklyn Nine-Nine", aliases: ["B99"] },
      { name: "Parks and Recreation", aliases: [] },
      { name: "It's Always Sunny in Philadelphia", aliases: [] },
      { name: "Community", aliases: [] },
      { name: "Curb Your Enthusiasm", aliases: [] },
      { name: "How I Met Your Mother", aliases: ["HIMYM"] }
    ]
  },
  { id: "tv-imdb-highest-dramas", category: "TV", prompt: "Highest-rated TV dramas on IMDb", hint: "Drama scores",
    items: [
      { name: "Breaking Bad", aliases: [] },
      { name: "The Wire", aliases: [] },
      { name: "The Sopranos", aliases: [] },
      { name: "Game of Thrones", aliases: ["GoT"] },
      { name: "Better Call Saul", aliases: [] },
      { name: "Mad Men", aliases: [] },
      { name: "True Detective", aliases: [] },
      { name: "Lost", aliases: [] },
      { name: "Succession", aliases: [] },
      { name: "House of Cards", aliases: [] }
    ]
  },
  { id: "tv-most-emmy-noms-one-year", category: "TV", prompt: "Most Emmy nominations for a single show in one year", hint: "Single-year nomination record",
    items: [
      { name: "The Bear (2024)", aliases: ["The Bear"] },
      { name: "Succession (2023)", aliases: ["Succession"] },
      { name: "Game of Thrones (2019)", aliases: ["GoT"] },
      { name: "NYPD Blue (1994)", aliases: [] },
      { name: "John Adams (2008)", aliases: [] },
      { name: "Roots (1977)", aliases: [] },
      { name: "ER (1995)", aliases: [] },
      { name: "Cheers (1983)", aliases: [] },
      { name: "Hill Street Blues (1981)", aliases: [] },
      { name: "Saturday Night Live (2017)", aliases: ["SNL"] }
    ]
  },
  { id: "tv-highest-paid-actors-per-episode", category: "TV", prompt: "Highest-paid TV actors per episode (historic peak)", hint: "Salary per episode",
    items: [
      { name: "Jerry Seinfeld (Seinfeld)", aliases: ["Jerry Seinfeld"] },
      { name: "Ray Romano (Everybody Loves Raymond)", aliases: ["Ray Romano"] },
      { name: "Charlie Sheen (Two and a Half Men)", aliases: ["Charlie Sheen"] },
      { name: "Kelsey Grammer (Frasier)", aliases: ["Kelsey Grammer"] },
      { name: "Jim Parsons (The Big Bang Theory)", aliases: ["Jim Parsons"] },
      { name: "Friends cast (each)", aliases: ["Friends cast"] },
      { name: "Tim Allen (Home Improvement)", aliases: ["Tim Allen"] },
      { name: "Mariska Hargitay (Law & Order: SVU)", aliases: ["Mariska Hargitay"] },
      { name: "Game of Thrones leads (S7-8)", aliases: ["GoT cast"] },
      { name: "Kiefer Sutherland (24)", aliases: ["Kiefer Sutherland"] }
    ]
  },
  { id: "tv-highest-rated-kdramas", category: "TV", prompt: "Highest-rated Korean dramas (IMDb)", hint: "K-drama top scores",
    items: [
      { name: "Reply 1988", aliases: ["Eung-dap-ha-ra 1988"] },
      { name: "Mr. Sunshine", aliases: [] },
      { name: "Move to Heaven", aliases: [] },
      { name: "My Mister", aliases: ["My Ahjussi"] },
      { name: "Signal", aliases: [] },
      { name: "Hospital Playlist", aliases: [] },
      { name: "Crash Landing on You", aliases: ["CLOY"] },
      { name: "Goblin", aliases: ["Guardian: The Lonely and Great God"] },
      { name: "Vincenzo", aliases: [] },
      { name: "Itaewon Class", aliases: [] }
    ]
  },
  { id: "tv-most-popular-anime", category: "TV", prompt: "Most popular anime (MyAnimeList members)", hint: "MAL member count",
    items: [
      { name: "Attack on Titan", aliases: ["Shingeki no Kyojin", "AoT"] },
      { name: "Death Note", aliases: [] },
      { name: "Fullmetal Alchemist: Brotherhood", aliases: ["FMA Brotherhood"] },
      { name: "One Punch Man", aliases: [] },
      { name: "Sword Art Online", aliases: ["SAO"] },
      { name: "Naruto", aliases: [] },
      { name: "Demon Slayer", aliases: ["Kimetsu no Yaiba"] },
      { name: "My Hero Academia", aliases: ["Boku no Hero Academia"] },
      { name: "Tokyo Ghoul", aliases: [] },
      { name: "Jujutsu Kaisen", aliases: [] }
    ]
  },
  { id: "tv-longest-british-sitcoms", category: "TV", prompt: "Longest-running British sitcoms (years)", hint: "UK sitcom longevity",
    items: [
      { name: "Last of the Summer Wine", aliases: [] },
      { name: "Birds of a Feather", aliases: [] },
      { name: "Mrs. Brown's Boys", aliases: [] },
      { name: "Only Fools and Horses", aliases: [] },
      { name: "Keeping Up Appearances", aliases: [] },
      { name: "My Family", aliases: [] },
      { name: "Vicar of Dibley", aliases: [] },
      { name: "Father Ted", aliases: [] },
      { name: "Blackadder", aliases: [] },
      { name: "Fawlty Towers", aliases: [] }
    ]
  },
  { id: "tv-highest-grossing-reality-franchises", category: "TV", prompt: "Highest-grossing reality TV franchises", hint: "Revenue/licensing leaders",
    items: [
      { name: "Got Talent", aliases: ["America's Got Talent", "Britain's Got Talent"] },
      { name: "Idol", aliases: ["American Idol", "Pop Idol"] },
      { name: "MasterChef", aliases: [] },
      { name: "The Voice", aliases: [] },
      { name: "Big Brother", aliases: [] },
      { name: "Survivor", aliases: [] },
      { name: "Dancing with the Stars", aliases: ["Strictly Come Dancing"] },
      { name: "The Real Housewives", aliases: [] },
      { name: "Top Chef", aliases: [] },
      { name: "The Bachelor", aliases: [] }
    ]
  },
  { id: "tv-popular-kids-cartoons", category: "TV", prompt: "Most popular kids' cartoons of all time", hint: "Iconic children's animation",
    items: [
      { name: "SpongeBob SquarePants", aliases: ["Bob l'éponge"] },
      { name: "Tom and Jerry", aliases: [] },
      { name: "Looney Tunes", aliases: [] },
      { name: "Scooby-Doo", aliases: [] },
      { name: "Mickey Mouse Clubhouse", aliases: [] },
      { name: "Dora the Explorer", aliases: ["Dora l'exploratrice"] },
      { name: "Paw Patrol", aliases: [] },
      { name: "Peppa Pig", aliases: [] },
      { name: "The Powerpuff Girls", aliases: [] },
      { name: "Avatar: The Last Airbender", aliases: ["ATLA"] }
    ]
  },
  { id: "tv-longest-running-game-shows", category: "TV", prompt: "Longest-running US game shows", hint: "Years on the air",
    items: [
      { name: "The Price Is Right", aliases: [] },
      { name: "Jeopardy!", aliases: ["Jeopardy"] },
      { name: "Wheel of Fortune", aliases: [] },
      { name: "Family Feud", aliases: [] },
      { name: "Hollywood Squares", aliases: [] },
      { name: "Match Game", aliases: [] },
      { name: "Card Sharks", aliases: [] },
      { name: "Let's Make a Deal", aliases: [] },
      { name: "Password", aliases: [] },
      { name: "To Tell the Truth", aliases: [] }
    ]
  },
  { id: "tv-best-miniseries-emmys", category: "TV", prompt: "Most Emmy-winning limited series / miniseries (single year)", hint: "Limited series Emmy hauls",
    items: [
      { name: "John Adams", aliases: [] },
      { name: "Angels in America", aliases: [] },
      { name: "The People v. O.J. Simpson", aliases: [] },
      { name: "Chernobyl", aliases: [] },
      { name: "Olive Kitteridge", aliases: [] },
      { name: "Roots", aliases: [] },
      { name: "Eleanor and Franklin", aliases: [] },
      { name: "Band of Brothers", aliases: [] },
      { name: "The Pacific", aliases: [] },
      { name: "The Queen's Gambit", aliases: ["Le Jeu de la Dame"] }
    ]
  },
  { id: "tv-top-medical-shows", category: "TV", prompt: "Top-rated medical dramas (IMDb)", hint: "Hospital/medical shows",
    items: [
      { name: "Scrubs", aliases: [] },
      { name: "House M.D.", aliases: ["House"] },
      { name: "ER", aliases: ["Urgences"] },
      { name: "M*A*S*H", aliases: ["MASH"] },
      { name: "Grey's Anatomy", aliases: [] },
      { name: "The Good Doctor", aliases: [] },
      { name: "The Pitt", aliases: [] },
      { name: "Chicago Med", aliases: [] },
      { name: "Nip/Tuck", aliases: [] },
      { name: "Code Black", aliases: [] }
    ]
  },
  { id: "tv-top-crime-shows", category: "TV", prompt: "Top-rated crime/police dramas (IMDb)", hint: "Crime drama scores",
    items: [
      { name: "Breaking Bad", aliases: [] },
      { name: "The Wire", aliases: [] },
      { name: "True Detective", aliases: [] },
      { name: "Better Call Saul", aliases: [] },
      { name: "Mindhunter", aliases: [] },
      { name: "Peaky Blinders", aliases: [] },
      { name: "Narcos", aliases: [] },
      { name: "Dexter", aliases: [] },
      { name: "Line of Duty", aliases: [] },
      { name: "Fargo", aliases: [] }
    ]
  },
  { id: "tv-top-legal-shows", category: "TV", prompt: "Top-rated legal dramas (IMDb)", hint: "Courtroom/lawyer shows",
    items: [
      { name: "Better Call Saul", aliases: [] },
      { name: "Suits", aliases: [] },
      { name: "The Good Wife", aliases: [] },
      { name: "Boston Legal", aliases: [] },
      { name: "The Practice", aliases: [] },
      { name: "Law & Order", aliases: [] },
      { name: "Damages", aliases: [] },
      { name: "Ally McBeal", aliases: [] },
      { name: "How to Get Away with Murder", aliases: [] },
      { name: "The Good Fight", aliases: [] }
    ]
  },
  { id: "tv-top-sci-fi-shows", category: "TV", prompt: "Top-rated sci-fi TV shows (IMDb)", hint: "Sci-fi scores",
    items: [
      { name: "Battlestar Galactica (2004)", aliases: ["BSG"] },
      { name: "Stranger Things", aliases: [] },
      { name: "The X-Files", aliases: ["Aux frontières du réel"] },
      { name: "Black Mirror", aliases: [] },
      { name: "Westworld", aliases: [] },
      { name: "Doctor Who", aliases: [] },
      { name: "The Expanse", aliases: [] },
      { name: "Star Trek: The Next Generation", aliases: ["TNG"] },
      { name: "Severance", aliases: [] },
      { name: "Firefly", aliases: [] }
    ]
  },
  { id: "tv-top-fantasy-shows", category: "TV", prompt: "Top-rated fantasy TV shows (IMDb)", hint: "Fantasy scores",
    items: [
      { name: "Avatar: The Last Airbender", aliases: ["ATLA"] },
      { name: "Game of Thrones", aliases: ["GoT", "Le Trône de Fer"] },
      { name: "The Lord of the Rings: The Rings of Power", aliases: ["Rings of Power"] },
      { name: "House of the Dragon", aliases: [] },
      { name: "The Witcher", aliases: [] },
      { name: "Once Upon a Time", aliases: [] },
      { name: "Outlander", aliases: [] },
      { name: "His Dark Materials", aliases: [] },
      { name: "The Magicians", aliases: [] },
      { name: "Shadow and Bone", aliases: [] }
    ]
  },
  { id: "tv-prime-video-originals-popular", category: "TV", prompt: "Most popular Amazon Prime Video originals", hint: "Prime hits",
    items: [
      { name: "The Boys", aliases: [] },
      { name: "The Marvelous Mrs. Maisel", aliases: ["Mrs. Maisel"] },
      { name: "Reacher", aliases: [] },
      { name: "Fallout", aliases: [] },
      { name: "The Lord of the Rings: The Rings of Power", aliases: ["Rings of Power"] },
      { name: "Jack Ryan", aliases: ["Tom Clancy's Jack Ryan"] },
      { name: "The Grand Tour", aliases: [] },
      { name: "Invincible", aliases: [] },
      { name: "The Man in the High Castle", aliases: [] },
      { name: "Citadel", aliases: [] }
    ]
  },
  { id: "tv-apple-tv-originals-popular", category: "TV", prompt: "Most popular Apple TV+ originals", hint: "Apple TV+ hits",
    items: [
      { name: "Ted Lasso", aliases: [] },
      { name: "Severance", aliases: [] },
      { name: "The Morning Show", aliases: [] },
      { name: "Slow Horses", aliases: [] },
      { name: "Foundation", aliases: [] },
      { name: "Silo", aliases: [] },
      { name: "For All Mankind", aliases: [] },
      { name: "Pachinko", aliases: [] },
      { name: "Shrinking", aliases: [] },
      { name: "See", aliases: [] }
    ]
  },
  { id: "tv-hulu-originals-popular", category: "TV", prompt: "Most popular Hulu originals", hint: "Hulu hits",
    items: [
      { name: "The Handmaid's Tale", aliases: [] },
      { name: "Only Murders in the Building", aliases: [] },
      { name: "The Bear", aliases: [] },
      { name: "Shogun", aliases: [] },
      { name: "The Great", aliases: [] },
      { name: "Pam & Tommy", aliases: [] },
      { name: "Castle Rock", aliases: [] },
      { name: "Dopesick", aliases: [] },
      { name: "Nine Perfect Strangers", aliases: [] },
      { name: "PEN15", aliases: [] }
    ]
  },
  { id: "tv-disney-plus-originals-popular", category: "TV", prompt: "Most popular Disney+ originals", hint: "Disney+ hits",
    items: [
      { name: "The Mandalorian", aliases: [] },
      { name: "WandaVision", aliases: [] },
      { name: "Loki", aliases: [] },
      { name: "The Falcon and the Winter Soldier", aliases: [] },
      { name: "Hawkeye", aliases: [] },
      { name: "Obi-Wan Kenobi", aliases: [] },
      { name: "Andor", aliases: [] },
      { name: "Moon Knight", aliases: [] },
      { name: "Ahsoka", aliases: [] },
      { name: "The Book of Boba Fett", aliases: [] }
    ]
  },
  { id: "tv-snl-longest-tenure-cast", category: "TV", prompt: "Longest-tenured SNL cast members (seasons)", hint: "Saturday Night Live tenure",
    items: [
      { name: "Kenan Thompson", aliases: [] },
      { name: "Darrell Hammond", aliases: [] },
      { name: "Seth Meyers", aliases: [] },
      { name: "Fred Armisen", aliases: [] },
      { name: "Tim Meadows", aliases: [] },
      { name: "Kate McKinnon", aliases: [] },
      { name: "Bobby Moynihan", aliases: [] },
      { name: "Jason Sudeikis", aliases: [] },
      { name: "Kenan & Kel's Kenan Thompson encore", aliases: ["Kenan Thompson encore"] },
      { name: "Al Franken", aliases: [] }
    ]
  },
  { id: "tv-longest-running-late-night-hosts", category: "TV", prompt: "Longest-running US late-night hosts (years in chair)", hint: "Late-night tenure",
    items: [
      { name: "Johnny Carson (The Tonight Show)", aliases: ["Johnny Carson"] },
      { name: "David Letterman (Late Show)", aliases: ["David Letterman"] },
      { name: "Jay Leno (The Tonight Show)", aliases: ["Jay Leno"] },
      { name: "Conan O'Brien (Late Night/Tonight/Conan)", aliases: ["Conan O'Brien"] },
      { name: "Jimmy Kimmel (Jimmy Kimmel Live!)", aliases: ["Jimmy Kimmel"] },
      { name: "Jimmy Fallon (Late Night/Tonight)", aliases: ["Jimmy Fallon"] },
      { name: "Craig Ferguson (Late Late Show)", aliases: ["Craig Ferguson"] },
      { name: "Seth Meyers (Late Night)", aliases: ["Seth Meyers"] },
      { name: "Stephen Colbert (Late Show)", aliases: ["Stephen Colbert"] },
      { name: "Tom Snyder (Tomorrow/Late Late Show)", aliases: ["Tom Snyder"] }
    ]
  },
  { id: "tv-best-british-panel-shows", category: "TV", prompt: "Best-loved British panel shows", hint: "UK panel comedy",
    items: [
      { name: "QI", aliases: [] },
      { name: "Have I Got News for You", aliases: [] },
      { name: "Mock the Week", aliases: [] },
      { name: "Would I Lie to You?", aliases: [] },
      { name: "8 Out of 10 Cats", aliases: [] },
      { name: "Never Mind the Buzzcocks", aliases: [] },
      { name: "Taskmaster", aliases: [] },
      { name: "A League of Their Own", aliases: [] },
      { name: "Big Fat Quiz of the Year", aliases: [] },
      { name: "The Big Fat Quiz of Everything", aliases: [] }
    ]
  },
  { id: "tv-longest-running-cartoons-global", category: "TV", prompt: "Longest-running cartoons globally (episodes)", hint: "Most episodes worldwide",
    items: [
      { name: "Sazae-san", aliases: [] },
      { name: "Doraemon", aliases: [] },
      { name: "The Simpsons", aliases: [] },
      { name: "Crayon Shin-chan", aliases: [] },
      { name: "Pokémon", aliases: ["Pokemon"] },
      { name: "One Piece", aliases: [] },
      { name: "Detective Conan", aliases: ["Case Closed"] },
      { name: "Chibi Maruko-chan", aliases: [] },
      { name: "Anpanman", aliases: [] },
      { name: "Ninja Hattori-kun", aliases: [] }
    ]
  },
  { id: "tv-highest-rated-streaming-docs", category: "TV", prompt: "Highest-rated documentary series on streaming (IMDb)", hint: "Streaming docs",
    items: [
      { name: "Planet Earth II", aliases: [] },
      { name: "Planet Earth", aliases: [] },
      { name: "Blue Planet II", aliases: [] },
      { name: "Cosmos: A Spacetime Odyssey", aliases: ["Cosmos"] },
      { name: "Our Planet", aliases: [] },
      { name: "The Last Dance", aliases: [] },
      { name: "Making a Murderer", aliases: [] },
      { name: "Wild Wild Country", aliases: [] },
      { name: "Chef's Table", aliases: [] },
      { name: "Tiger King", aliases: [] }
    ]
  },
  { id: "tv-most-watched-series-finales-cable", category: "TV", prompt: "Most-watched cable TV series finales (US viewers)", hint: "Cable finale audiences",
    items: [
      { name: "Breaking Bad", aliases: [] },
      { name: "The Sopranos", aliases: [] },
      { name: "Game of Thrones", aliases: ["GoT"] },
      { name: "Sex and the City", aliases: ["SATC"] },
      { name: "Monk", aliases: [] },
      { name: "Burn Notice", aliases: [] },
      { name: "Boardwalk Empire", aliases: [] },
      { name: "Mad Men", aliases: [] },
      { name: "True Blood", aliases: [] },
      { name: "Sons of Anarchy", aliases: ["SoA"] }
    ]
  },
  { id: "tv-most-emmy-noms-actors-all-time", category: "TV", prompt: "Most Emmy nominations for a male actor (all categories)", hint: "Male actor nominations",
    items: [
      { name: "Ed Asner", aliases: [] },
      { name: "Carl Reiner", aliases: [] },
      { name: "Sid Caesar", aliases: [] },
      { name: "Alan Alda", aliases: [] },
      { name: "Hal Holbrook", aliases: [] },
      { name: "Don Knotts", aliases: [] },
      { name: "Bryan Cranston", aliases: [] },
      { name: "John Larroquette", aliases: [] },
      { name: "Jack Lemmon", aliases: [] },
      { name: "Carroll O'Connor", aliases: [] }
    ]
  },
  { id: "tv-most-emmy-noms-actresses-all-time", category: "TV", prompt: "Most Emmy nominations for an actress (all categories)", hint: "Female actor nominations",
    items: [
      { name: "Julia Louis-Dreyfus", aliases: [] },
      { name: "Mary Tyler Moore", aliases: [] },
      { name: "Cloris Leachman", aliases: [] },
      { name: "Edie Falco", aliases: [] },
      { name: "Candice Bergen", aliases: [] },
      { name: "Tyne Daly", aliases: [] },
      { name: "Lucille Ball", aliases: [] },
      { name: "Angela Lansbury", aliases: [] },
      { name: "Susan Lucci", aliases: [] },
      { name: "Allison Janney", aliases: [] }
    ]
  },
  { id: "tv-most-watched-series-premieres-streaming", category: "TV", prompt: "Biggest streaming series premieres (opening 28 days)", hint: "Streaming launch hits",
    items: [
      { name: "Squid Game season 2", aliases: [] },
      { name: "Wednesday", aliases: [] },
      { name: "Stranger Things 4", aliases: [] },
      { name: "Dahmer", aliases: [] },
      { name: "Bridgerton season 2", aliases: [] },
      { name: "Squid Game season 1", aliases: [] },
      { name: "The Night Agent", aliases: [] },
      { name: "Money Heist part 5 vol 1", aliases: [] },
      { name: "House of the Dragon premiere", aliases: [] },
      { name: "Lupin part 1", aliases: [] }
    ]
  },
  { id: "tv-most-watched-tv-events-history", category: "TV", prompt: "Most-watched TV events in US history (single broadcasts)", hint: "Largest US audiences",
    items: [
      { name: "M*A*S*H finale", aliases: ["MASH finale"] },
      { name: "Dallas 'Who Done It?'", aliases: ["Dallas 'Who Shot J.R.?'"] },
      { name: "Roots part VIII", aliases: ["Roots finale"] },
      { name: "Super Bowl XLIX", aliases: [] },
      { name: "Super Bowl LVIII", aliases: [] },
      { name: "Super Bowl LIX", aliases: [] },
      { name: "Super Bowl XLVIII", aliases: [] },
      { name: "Super Bowl 50", aliases: ["Super Bowl L"] },
      { name: "Super Bowl LVII", aliases: [] },
      { name: "Super Bowl XLVI", aliases: [] }
    ]
  },
  { id: "tv-best-animated-series-imdb", category: "TV", prompt: "Best-rated animated series on IMDb", hint: "Animated TV scores",
    items: [
      { name: "Avatar: The Last Airbender", aliases: ["ATLA"] },
      { name: "Rick and Morty", aliases: [] },
      { name: "Arcane", aliases: [] },
      { name: "Gravity Falls", aliases: [] },
      { name: "BoJack Horseman", aliases: [] },
      { name: "The Simpsons", aliases: [] },
      { name: "Avatar: The Legend of Korra", aliases: ["LOK"] },
      { name: "Samurai Jack", aliases: [] },
      { name: "Cowboy Bebop", aliases: [] },
      { name: "Invincible", aliases: [] }
    ]
  },
  { id: "tv-most-popular-spanish-shows", category: "TV", prompt: "Most popular Spanish-language TV shows", hint: "Spanish-language hits",
    items: [
      { name: "Money Heist", aliases: ["La Casa de Papel"] },
      { name: "Elite", aliases: [] },
      { name: "Narcos", aliases: [] },
      { name: "El Chavo del Ocho", aliases: [] },
      { name: "Cable Girls", aliases: ["Las Chicas del Cable"] },
      { name: "Vis a Vis", aliases: ["Locked Up"] },
      { name: "La Reina del Sur", aliases: [] },
      { name: "Berlin", aliases: [] },
      { name: "Yo soy Betty, la fea", aliases: ["Ugly Betty"] },
      { name: "El señor de los cielos", aliases: [] }
    ]
  },
  { id: "tv-most-popular-french-shows", category: "TV", prompt: "Most popular French TV series", hint: "French hits",
    items: [
      { name: "Lupin", aliases: [] },
      { name: "Call My Agent!", aliases: ["Dix pour cent"] },
      { name: "The Bureau", aliases: ["Le Bureau des Légendes"] },
      { name: "Marseille", aliases: [] },
      { name: "Plus belle la vie", aliases: [] },
      { name: "Family Business", aliases: [] },
      { name: "Spiral", aliases: ["Engrenages"] },
      { name: "The Returned", aliases: ["Les Revenants"] },
      { name: "Versailles", aliases: [] },
      { name: "HPI", aliases: ["Haut Potentiel Intellectuel"] }
    ]
  },
  { id: "tv-longest-running-uk-soaps", category: "TV", prompt: "Longest-running UK soap operas (episodes)", hint: "British soap longevity",
    items: [
      { name: "Coronation Street", aliases: ["Corrie"] },
      { name: "Emmerdale", aliases: [] },
      { name: "EastEnders", aliases: [] },
      { name: "Hollyoaks", aliases: [] },
      { name: "Doctors", aliases: [] },
      { name: "Casualty", aliases: [] },
      { name: "Holby City", aliases: [] },
      { name: "Crossroads", aliases: [] },
      { name: "Brookside", aliases: [] },
      { name: "Family Affairs", aliases: [] }
    ]
  },
  { id: "tv-most-popular-telenovelas", category: "TV", prompt: "Most popular telenovelas globally", hint: "Worldwide telenovela hits",
    items: [
      { name: "Yo soy Betty, la fea", aliases: ["Betty la Fea"] },
      { name: "Marimar", aliases: [] },
      { name: "Rebelde", aliases: [] },
      { name: "Rubí", aliases: [] },
      { name: "María la del Barrio", aliases: [] },
      { name: "Maria Mercedes", aliases: [] },
      { name: "Pasión de Gavilanes", aliases: [] },
      { name: "La Usurpadora", aliases: [] },
      { name: "El Cuerpo del Deseo", aliases: [] },
      { name: "Avenida Brasil", aliases: [] }
    ]
  },
  { id: "tv-most-watched-tv-shows-per-season-us", category: "TV", prompt: "Most-watched US TV series in a single season (Nielsen)", hint: "Single-season viewership records",
    items: [
      { name: "I Love Lucy (1952-53)", aliases: ["I Love Lucy"] },
      { name: "Gunsmoke (1957-61)", aliases: [] },
      { name: "Bonanza (1964-65)", aliases: [] },
      { name: "All in the Family (1971-76)", aliases: [] },
      { name: "Happy Days (1976-77)", aliases: [] },
      { name: "Dallas (1980-81)", aliases: [] },
      { name: "The Cosby Show (1985-90)", aliases: [] },
      { name: "Cheers (1990-91)", aliases: [] },
      { name: "Seinfeld (1994-98)", aliases: [] },
      { name: "ER (1995-98)", aliases: [] }
    ]
  },
  { id: "tv-most-successful-tv-spinoffs", category: "TV", prompt: "Most successful TV spinoffs", hint: "Hit spinoffs",
    items: [
      { name: "Better Call Saul (Breaking Bad)", aliases: ["Better Call Saul"] },
      { name: "Frasier (Cheers)", aliases: ["Frasier"] },
      { name: "The Jeffersons (All in the Family)", aliases: ["The Jeffersons"] },
      { name: "Laverne & Shirley (Happy Days)", aliases: ["Laverne & Shirley"] },
      { name: "Mork & Mindy (Happy Days)", aliases: ["Mork & Mindy"] },
      { name: "The Simpsons (Tracey Ullman Show)", aliases: ["The Simpsons"] },
      { name: "Angel (Buffy the Vampire Slayer)", aliases: ["Angel"] },
      { name: "Joey (Friends)", aliases: ["Joey"] },
      { name: "Daria (Beavis and Butt-Head)", aliases: ["Daria"] },
      { name: "The Mary Tyler Moore Show spinoffs (Rhoda)", aliases: ["Rhoda"] }
    ]
  },
  { id: "tv-most-rewatched-comfort-shows", category: "TV", prompt: "Most-rewatched comfort shows (streaming minutes US)", hint: "Top library shows",
    items: [
      { name: "The Office (US)", aliases: ["The Office"] },
      { name: "Friends", aliases: [] },
      { name: "Grey's Anatomy", aliases: [] },
      { name: "Criminal Minds", aliases: [] },
      { name: "NCIS", aliases: [] },
      { name: "Gilmore Girls", aliases: [] },
      { name: "Seinfeld", aliases: [] },
      { name: "The Big Bang Theory", aliases: [] },
      { name: "Parks and Recreation", aliases: [] },
      { name: "Bluey", aliases: [] }
    ]
  },
  { id: "tv-most-watched-nfl-broadcasts", category: "TV", prompt: "Most-watched NFL TV broadcasts in history", hint: "NFL audience records",
    items: [
      { name: "Super Bowl LIX (2025)", aliases: [] },
      { name: "Super Bowl LVIII (2024)", aliases: [] },
      { name: "Super Bowl LVII (2023)", aliases: [] },
      { name: "Super Bowl XLIX (2015)", aliases: [] },
      { name: "Super Bowl XLVIII (2014)", aliases: [] },
      { name: "Super Bowl 50 (2016)", aliases: [] },
      { name: "Super Bowl XLVI (2012)", aliases: [] },
      { name: "Super Bowl XLV (2011)", aliases: [] },
      { name: "Super Bowl XLVII (2013)", aliases: [] },
      { name: "Super Bowl LI (2017)", aliases: [] }
    ]
  },
  { id: "tv-biggest-tv-cliffhangers", category: "TV", prompt: "Biggest TV cliffhangers in history", hint: "Iconic finale shocks",
    items: [
      { name: "Dallas - Who Shot J.R.?", aliases: ["Who Shot J.R.?"] },
      { name: "Game of Thrones - Red Wedding", aliases: ["Red Wedding"] },
      { name: "The Sopranos - Cut to Black", aliases: ["Sopranos finale"] },
      { name: "Lost - 'We have to go back'", aliases: ["Lost season 3 finale"] },
      { name: "Breaking Bad - 'I am the one who knocks'", aliases: ["Face Off"] },
      { name: "Twin Peaks - Who Killed Laura Palmer?", aliases: ["Twin Peaks"] },
      { name: "The Walking Dead - Negan kills...", aliases: ["TWD season 6 finale"] },
      { name: "Friends - 'I take thee, Rachel'", aliases: ["Friends Ross-Emily wedding"] },
      { name: "Cheers - Diane leaves Sam", aliases: ["Cheers season 5"] },
      { name: "ER - Dr. Greene gets attacked", aliases: ["ER Romano"] }
    ]
  },
  { id: "tv-streaming-most-emmys-platform", category: "TV", prompt: "Streaming platforms with the most Emmy wins (cumulative)", hint: "Streaming Emmys",
    items: [
      { name: "Netflix", aliases: [] },
      { name: "HBO Max / Max", aliases: ["Max", "HBO Max"] },
      { name: "Hulu", aliases: [] },
      { name: "Apple TV+", aliases: [] },
      { name: "Amazon Prime Video", aliases: ["Prime Video"] },
      { name: "Disney+", aliases: [] },
      { name: "Peacock", aliases: [] },
      { name: "Paramount+", aliases: [] },
      { name: "FX on Hulu", aliases: [] },
      { name: "YouTube", aliases: [] }
    ]
  },
  { id: "tv-most-popular-disney-channel-shows", category: "TV", prompt: "Most popular Disney Channel original series", hint: "Disney Channel hits",
    items: [
      { name: "Hannah Montana", aliases: [] },
      { name: "Lizzie McGuire", aliases: [] },
      { name: "That's So Raven", aliases: [] },
      { name: "The Suite Life of Zack & Cody", aliases: [] },
      { name: "Wizards of Waverly Place", aliases: [] },
      { name: "Phineas and Ferb", aliases: [] },
      { name: "Kim Possible", aliases: [] },
      { name: "Even Stevens", aliases: [] },
      { name: "Good Luck Charlie", aliases: [] },
      { name: "Recess", aliases: [] }
    ]
  },
  { id: "tv-most-popular-nickelodeon-shows", category: "TV", prompt: "Most popular Nickelodeon original series", hint: "Nick hits",
    items: [
      { name: "SpongeBob SquarePants", aliases: [] },
      { name: "Rugrats", aliases: [] },
      { name: "iCarly", aliases: [] },
      { name: "Drake & Josh", aliases: [] },
      { name: "The Fairly OddParents", aliases: [] },
      { name: "Avatar: The Last Airbender", aliases: ["ATLA"] },
      { name: "Hey Arnold!", aliases: [] },
      { name: "All That", aliases: [] },
      { name: "Dora the Explorer", aliases: [] },
      { name: "The Loud House", aliases: [] }
    ]
  },
  { id: "tv-most-popular-cartoon-network-shows", category: "TV", prompt: "Most popular Cartoon Network original series", hint: "CN hits",
    items: [
      { name: "Adventure Time", aliases: [] },
      { name: "Dexter's Laboratory", aliases: [] },
      { name: "The Powerpuff Girls", aliases: [] },
      { name: "Ed, Edd n Eddy", aliases: [] },
      { name: "Courage the Cowardly Dog", aliases: [] },
      { name: "Samurai Jack", aliases: [] },
      { name: "Regular Show", aliases: [] },
      { name: "Steven Universe", aliases: [] },
      { name: "Ben 10", aliases: [] },
      { name: "Johnny Bravo", aliases: [] }
    ]
  },
  { id: "tv-most-watched-tv-weddings", category: "TV", prompt: "Most-watched TV weddings (US viewership)", hint: "Wedding episode audiences",
    items: [
      { name: "Luke and Laura (General Hospital, 1981)", aliases: ["Luke and Laura"] },
      { name: "Charles and Diana (1981)", aliases: ["Royal Wedding 1981"] },
      { name: "William and Kate (2011)", aliases: ["Royal Wedding 2011"] },
      { name: "Harry and Meghan (2018)", aliases: ["Royal Wedding 2018"] },
      { name: "Rhoda and Joe (Rhoda, 1974)", aliases: ["Rhoda wedding"] },
      { name: "Ross and Emily (Friends, 1998)", aliases: ["Ross and Emily"] },
      { name: "Chandler and Monica (Friends, 2001)", aliases: ["Chandler and Monica"] },
      { name: "Niles and Daphne (Frasier, 2003)", aliases: [] },
      { name: "Jim and Pam (The Office, 2009)", aliases: ["Niagara"] },
      { name: "Carrie and Big (Sex and the City finale)", aliases: ["Carrie and Big"] }
    ]
  },
  { id: "tv-most-popular-tv-villains", category: "TV", prompt: "Most iconic TV villains of all time", hint: "Legendary antagonists",
    items: [
      { name: "Walter White (Breaking Bad)", aliases: ["Heisenberg"] },
      { name: "Joffrey Baratheon (Game of Thrones)", aliases: ["Joffrey"] },
      { name: "Cersei Lannister (Game of Thrones)", aliases: ["Cersei"] },
      { name: "Hannibal Lecter (Hannibal)", aliases: [] },
      { name: "Gus Fring (Breaking Bad)", aliases: [] },
      { name: "The Joker (Batman 1966)", aliases: [] },
      { name: "Negan (The Walking Dead)", aliases: [] },
      { name: "Tony Soprano (The Sopranos)", aliases: [] },
      { name: "J.R. Ewing (Dallas)", aliases: [] },
      { name: "Homelander (The Boys)", aliases: [] }
    ]
  },
  { id: "tv-most-popular-tv-detectives", category: "TV", prompt: "Most popular TV detectives", hint: "Iconic sleuths",
    items: [
      { name: "Sherlock Holmes (Sherlock)", aliases: ["Sherlock"] },
      { name: "Columbo", aliases: [] },
      { name: "Hercule Poirot (Agatha Christie's Poirot)", aliases: ["Poirot"] },
      { name: "Inspector Morse", aliases: [] },
      { name: "Adrian Monk (Monk)", aliases: ["Monk"] },
      { name: "Jessica Fletcher (Murder, She Wrote)", aliases: ["Jessica Fletcher"] },
      { name: "Olivia Benson (Law & Order: SVU)", aliases: ["Olivia Benson"] },
      { name: "Sarah Lund (The Killing)", aliases: ["Sarah Lund"] },
      { name: "Saga Norén (The Bridge)", aliases: ["Saga Noren"] },
      { name: "Rust Cohle (True Detective)", aliases: ["Rust Cohle"] }
    ]
  },
  { id: "tv-best-tv-comedies-rolling-stone", category: "TV", prompt: "Greatest TV comedies of all time (Rolling Stone list)", hint: "Classic comedies",
    items: [
      { name: "Seinfeld", aliases: [] },
      { name: "I Love Lucy", aliases: [] },
      { name: "The Simpsons", aliases: [] },
      { name: "Cheers", aliases: [] },
      { name: "The Larry Sanders Show", aliases: [] },
      { name: "All in the Family", aliases: [] },
      { name: "The Mary Tyler Moore Show", aliases: [] },
      { name: "M*A*S*H", aliases: ["MASH"] },
      { name: "Curb Your Enthusiasm", aliases: [] },
      { name: "Arrested Development", aliases: [] }
    ]
  },
  { id: "mus-best-selling-albums-alltime", category: "Music", prompt: "Top 10 best-selling albums of all time (worldwide)", hint: "Classic rock & pop megahits dominate",
    items: [
      { name: "Thriller", aliases: ["Michael Jackson Thriller"] },
      { name: "Back in Black", aliases: ["AC/DC Back in Black"] },
      { name: "The Dark Side of the Moon", aliases: ["Dark Side of the Moon", "Pink Floyd Dark Side"] },
      { name: "The Bodyguard", aliases: ["Bodyguard Soundtrack", "Whitney Houston Bodyguard"] },
      { name: "Bat Out of Hell", aliases: ["Meat Loaf Bat Out of Hell"] },
      { name: "Their Greatest Hits 1971-1975", aliases: ["Eagles Greatest Hits", "Eagles Their Greatest Hits"] },
      { name: "Saturday Night Fever", aliases: ["Saturday Night Fever Soundtrack", "Bee Gees Saturday Night Fever"] },
      { name: "Rumours", aliases: ["Fleetwood Mac Rumours"] },
      { name: "Come On Over", aliases: ["Shania Twain Come On Over"] },
      { name: "Led Zeppelin IV", aliases: ["Zeppelin IV", "Four Symbols"] }
    ]
  },
  { id: "mus-best-selling-artists-alltime", category: "Music", prompt: "Top 10 best-selling music artists of all time", hint: "Legendary acts with hundreds of millions of records sold",
    items: [
      { name: "The Beatles", aliases: ["Beatles"] },
      { name: "Elvis Presley", aliases: ["Elvis", "The King"] },
      { name: "Michael Jackson", aliases: ["MJ", "King of Pop"] },
      { name: "Madonna", aliases: ["Madonna Ciccone"] },
      { name: "Elton John", aliases: ["Sir Elton John"] },
      { name: "Led Zeppelin", aliases: ["Zeppelin"] },
      { name: "Rihanna", aliases: ["RiRi"] },
      { name: "Pink Floyd", aliases: ["The Pink Floyd"] },
      { name: "Eagles", aliases: ["The Eagles"] },
      { name: "Mariah Carey", aliases: ["MC"] }
    ]
  },
  { id: "mus-best-selling-singles-ever", category: "Music", prompt: "Top 10 best-selling singles of all time", hint: "Holiday classics and charity songs rank high",
    items: [
      { name: "White Christmas", aliases: ["Bing Crosby White Christmas"] },
      { name: "Candle in the Wind 1997", aliases: ["Candle in the Wind", "Elton John Candle in the Wind 1997"] },
      { name: "Silent Night", aliases: ["Bing Crosby Silent Night"] },
      { name: "Rock Around the Clock", aliases: ["Bill Haley Rock Around the Clock"] },
      { name: "I Want to Hold Your Hand", aliases: ["Beatles I Want to Hold Your Hand"] },
      { name: "It's Now or Never", aliases: ["Elvis Presley It's Now or Never"] },
      { name: "Hey Jude", aliases: ["Beatles Hey Jude"] },
      { name: "I Will Always Love You", aliases: ["Whitney Houston I Will Always Love You"] },
      { name: "Despacito", aliases: ["Luis Fonsi Despacito"] },
      { name: "My Heart Will Go On", aliases: ["Celine Dion My Heart Will Go On", "Titanic theme"] }
    ]
  },
  { id: "mus-best-selling-christmas-albums", category: "Music", prompt: "Top 10 best-selling Christmas albums of all time", hint: "Crooners and modern divas dominate",
    items: [
      { name: "Merry Christmas", aliases: ["Mariah Carey Merry Christmas"] },
      { name: "Miracles: The Holiday Album", aliases: ["Kenny G Miracles"] },
      { name: "Merry Christmas (Bing Crosby)", aliases: ["Bing Crosby Merry Christmas"] },
      { name: "These Are Special Times", aliases: ["Celine Dion These Are Special Times"] },
      { name: "Noel", aliases: ["Josh Groban Noel"] },
      { name: "A Christmas Album", aliases: ["Barbra Streisand A Christmas Album"] },
      { name: "Christmas", aliases: ["Michael Buble Christmas"] },
      { name: "The Christmas Song", aliases: ["Nat King Cole Christmas Song"] },
      { name: "When My Heart Finds Christmas", aliases: ["Harry Connick Jr When My Heart Finds Christmas"] },
      { name: "Home for Christmas", aliases: ["NSYNC Home for Christmas"] }
    ]
  },
  { id: "mus-most-streamed-songs-spotify", category: "Music", prompt: "Top 10 most-streamed songs on Spotify all-time", hint: "Streaming-era pop and indie hits",
    items: [
      { name: "Blinding Lights", aliases: ["The Weeknd Blinding Lights"] },
      { name: "Shape of You", aliases: ["Ed Sheeran Shape of You"] },
      { name: "Someone You Loved", aliases: ["Lewis Capaldi Someone You Loved"] },
      { name: "Sunflower", aliases: ["Post Malone Sunflower", "Swae Lee Sunflower"] },
      { name: "Starboy", aliases: ["The Weeknd Starboy"] },
      { name: "Dance Monkey", aliases: ["Tones and I Dance Monkey"] },
      { name: "Believer", aliases: ["Imagine Dragons Believer"] },
      { name: "As It Was", aliases: ["Harry Styles As It Was"] },
      { name: "Rockstar", aliases: ["Post Malone Rockstar"] },
      { name: "Stay", aliases: ["Kid Laroi Stay", "Justin Bieber Stay"] }
    ]
  },
  { id: "mus-most-streamed-artists-spotify", category: "Music", prompt: "Top 10 most-streamed artists on Spotify all-time", hint: "Modern pop, hip-hop, and Latin superstars",
    items: [
      { name: "Drake", aliases: ["Drizzy"] },
      { name: "Bad Bunny", aliases: ["Benito Martinez"] },
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "The Weeknd", aliases: ["Abel Tesfaye"] },
      { name: "Ed Sheeran", aliases: ["Sheeran"] },
      { name: "Justin Bieber", aliases: ["Bieber"] },
      { name: "Ariana Grande", aliases: ["Grande"] },
      { name: "Eminem", aliases: ["Slim Shady", "Marshall Mathers"] },
      { name: "Post Malone", aliases: ["Posty"] },
      { name: "Rihanna", aliases: ["RiRi"] }
    ]
  },
  { id: "mus-best-selling-albums-70s", category: "Music", prompt: "Top 10 best-selling albums of the 1970s", hint: "Disco, classic rock, and a soundtrack",
    items: [
      { name: "The Dark Side of the Moon", aliases: ["Pink Floyd Dark Side"] },
      { name: "Rumours", aliases: ["Fleetwood Mac Rumours"] },
      { name: "Saturday Night Fever", aliases: ["Saturday Night Fever Soundtrack"] },
      { name: "Hotel California", aliases: ["Eagles Hotel California"] },
      { name: "Their Greatest Hits 1971-1975", aliases: ["Eagles Greatest Hits"] },
      { name: "Led Zeppelin IV", aliases: ["Zeppelin IV"] },
      { name: "Bat Out of Hell", aliases: ["Meat Loaf Bat Out of Hell"] },
      { name: "Grease", aliases: ["Grease Soundtrack"] },
      { name: "Tapestry", aliases: ["Carole King Tapestry"] },
      { name: "Goodbye Yellow Brick Road", aliases: ["Elton John Goodbye Yellow Brick Road"] }
    ]
  },
  { id: "mus-best-selling-albums-80s", category: "Music", prompt: "Top 10 best-selling albums of the 1980s", hint: "MTV era pop and rock anthems",
    items: [
      { name: "Thriller", aliases: ["Michael Jackson Thriller"] },
      { name: "Back in Black", aliases: ["AC/DC Back in Black"] },
      { name: "Bad", aliases: ["Michael Jackson Bad"] },
      { name: "Brothers in Arms", aliases: ["Dire Straits Brothers in Arms"] },
      { name: "Born in the U.S.A.", aliases: ["Bruce Springsteen Born in the USA"] },
      { name: "Hysteria", aliases: ["Def Leppard Hysteria"] },
      { name: "Faith", aliases: ["George Michael Faith"] },
      { name: "Slippery When Wet", aliases: ["Bon Jovi Slippery When Wet"] },
      { name: "Like a Virgin", aliases: ["Madonna Like a Virgin"] },
      { name: "Appetite for Destruction", aliases: ["Guns N Roses Appetite for Destruction"] }
    ]
  },
  { id: "mus-best-selling-albums-90s", category: "Music", prompt: "Top 10 best-selling albums of the 1990s", hint: "Grunge, divas, and soundtracks",
    items: [
      { name: "The Bodyguard", aliases: ["Bodyguard Soundtrack"] },
      { name: "Come On Over", aliases: ["Shania Twain Come On Over"] },
      { name: "Jagged Little Pill", aliases: ["Alanis Morissette Jagged Little Pill"] },
      { name: "Falling into You", aliases: ["Celine Dion Falling into You"] },
      { name: "Let's Talk About Love", aliases: ["Celine Dion Let's Talk About Love"] },
      { name: "Dangerous", aliases: ["Michael Jackson Dangerous"] },
      { name: "Metallica", aliases: ["Black Album", "Metallica Black Album"] },
      { name: "Cracked Rear View", aliases: ["Hootie and the Blowfish Cracked Rear View"] },
      { name: "Music Box", aliases: ["Mariah Carey Music Box"] },
      { name: "Nevermind", aliases: ["Nirvana Nevermind"] }
    ]
  },
  { id: "mus-best-selling-albums-2000s", category: "Music", prompt: "Top 10 best-selling albums of the 2000s", hint: "Pop, hip-hop, and Norah Jones",
    items: [
      { name: "The Marshall Mathers LP", aliases: ["Eminem Marshall Mathers LP"] },
      { name: "1", aliases: ["Beatles 1", "The Beatles 1"] },
      { name: "No Strings Attached", aliases: ["NSYNC No Strings Attached"] },
      { name: "Hybrid Theory", aliases: ["Linkin Park Hybrid Theory"] },
      { name: "Come Away with Me", aliases: ["Norah Jones Come Away with Me"] },
      { name: "Confessions", aliases: ["Usher Confessions"] },
      { name: "Back to Black", aliases: ["Amy Winehouse Back to Black"] },
      { name: "The Eminem Show", aliases: ["Eminem Show"] },
      { name: "Oops!... I Did It Again", aliases: ["Britney Spears Oops I Did It Again"] },
      { name: "Fearless", aliases: ["Taylor Swift Fearless"] }
    ]
  },
  { id: "mus-best-selling-albums-2010s", category: "Music", prompt: "Top 10 best-selling albums of the 2010s", hint: "Adele dominates",
    items: [
      { name: "21", aliases: ["Adele 21"] },
      { name: "25", aliases: ["Adele 25"] },
      { name: "1989", aliases: ["Taylor Swift 1989"] },
      { name: "x", aliases: ["Ed Sheeran x", "Multiply"] },
      { name: "Divide", aliases: ["Ed Sheeran Divide", "÷"] },
      { name: "Lemonade", aliases: ["Beyonce Lemonade"] },
      { name: "Recovery", aliases: ["Eminem Recovery"] },
      { name: "Born This Way", aliases: ["Lady Gaga Born This Way"] },
      { name: "Views", aliases: ["Drake Views"] },
      { name: "Purpose", aliases: ["Justin Bieber Purpose"] }
    ]
  },
  { id: "mus-most-grammy-wins-artists", category: "Music", prompt: "Top 10 artists with the most Grammy wins all-time", hint: "Classical conductor leads, with Beyonce close",
    items: [
      { name: "Beyonce", aliases: ["Beyonce Knowles", "Queen Bey"] },
      { name: "Georg Solti", aliases: ["Sir Georg Solti", "Solti"] },
      { name: "Quincy Jones", aliases: ["Q"] },
      { name: "Alison Krauss", aliases: ["Krauss"] },
      { name: "Pierre Boulez", aliases: ["Boulez"] },
      { name: "Stevie Wonder", aliases: ["Stevland Hardaway Morris"] },
      { name: "Vladimir Horowitz", aliases: ["Horowitz"] },
      { name: "John Williams", aliases: ["Williams composer"] },
      { name: "Chick Corea", aliases: ["Corea"] },
      { name: "U2", aliases: ["U Two"] }
    ]
  },
  { id: "mus-most-number-one-billboard", category: "Music", prompt: "Top 10 artists with the most #1 Billboard Hot 100 hits", hint: "Beatles top this chart",
    items: [
      { name: "The Beatles", aliases: ["Beatles"] },
      { name: "Mariah Carey", aliases: ["MC"] },
      { name: "Rihanna", aliases: ["RiRi"] },
      { name: "Michael Jackson", aliases: ["MJ"] },
      { name: "Madonna", aliases: ["Madge"] },
      { name: "The Supremes", aliases: ["Supremes"] },
      { name: "Whitney Houston", aliases: ["Whitney"] },
      { name: "Drake", aliases: ["Drizzy"] },
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "Elvis Presley", aliases: ["Elvis"] }
    ]
  },
  { id: "mus-most-weeks-at-number-one", category: "Music", prompt: "Top 10 songs with the most weeks at #1 on Billboard Hot 100", hint: "Modern era ballads and Latin hits",
    items: [
      { name: "Old Town Road", aliases: ["Lil Nas X Old Town Road"] },
      { name: "Despacito", aliases: ["Luis Fonsi Despacito"] },
      { name: "One Sweet Day", aliases: ["Mariah Carey Boyz II Men One Sweet Day"] },
      { name: "Uptown Funk", aliases: ["Mark Ronson Uptown Funk", "Bruno Mars Uptown Funk"] },
      { name: "I Gotta Feeling", aliases: ["Black Eyed Peas I Gotta Feeling"] },
      { name: "We Belong Together", aliases: ["Mariah Carey We Belong Together"] },
      { name: "I'll Make Love to You", aliases: ["Boyz II Men I'll Make Love to You"] },
      { name: "Macarena", aliases: ["Los del Rio Macarena"] },
      { name: "End of the Road", aliases: ["Boyz II Men End of the Road"] },
      { name: "Candle in the Wind 1997", aliases: ["Elton John Candle in the Wind 1997"] }
    ]
  },
  { id: "mus-most-number-one-albums-billboard", category: "Music", prompt: "Top 10 artists with the most #1 albums on Billboard 200", hint: "Beatles and Jay-Z lead",
    items: [
      { name: "The Beatles", aliases: ["Beatles"] },
      { name: "Jay-Z", aliases: ["Jay Z", "Shawn Carter"] },
      { name: "Drake", aliases: ["Drizzy"] },
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "Bruce Springsteen", aliases: ["Springsteen", "The Boss"] },
      { name: "Barbra Streisand", aliases: ["Streisand"] },
      { name: "Eminem", aliases: ["Slim Shady"] },
      { name: "The Rolling Stones", aliases: ["Rolling Stones", "Stones"] },
      { name: "Garth Brooks", aliases: ["Brooks"] },
      { name: "Elvis Presley", aliases: ["Elvis"] }
    ]
  },
  { id: "mus-most-watched-youtube-music-videos", category: "Music", prompt: "Top 10 most-viewed music videos on YouTube all-time", hint: "Latin hits and viral pop",
    items: [
      { name: "Baby Shark Dance", aliases: ["Baby Shark", "Pinkfong Baby Shark"] },
      { name: "Despacito", aliases: ["Luis Fonsi Despacito"] },
      { name: "Johny Johny Yes Papa", aliases: ["Johny Johny"] },
      { name: "Shape of You", aliases: ["Ed Sheeran Shape of You"] },
      { name: "See You Again", aliases: ["Wiz Khalifa See You Again", "Charlie Puth See You Again"] },
      { name: "Bath Song", aliases: ["Cocomelon Bath Song"] },
      { name: "Phonics Song with Two Words", aliases: ["ChuChu TV Phonics Song"] },
      { name: "Wheels on the Bus", aliases: ["Cocomelon Wheels on the Bus"] },
      { name: "Masha and the Bear Recipe for Disaster", aliases: ["Masha and the Bear"] },
      { name: "Bath Song Cocomelon", aliases: ["Cocomelon"] }
    ]
  },
  { id: "mus-most-followed-spotify-artists", category: "Music", prompt: "Top 10 most-followed artists on Spotify", hint: "Modern superstars with massive fan bases",
    items: [
      { name: "Ed Sheeran", aliases: ["Sheeran"] },
      { name: "Ariana Grande", aliases: ["Grande"] },
      { name: "Drake", aliases: ["Drizzy"] },
      { name: "Billie Eilish", aliases: ["Eilish"] },
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "Justin Bieber", aliases: ["Bieber"] },
      { name: "The Weeknd", aliases: ["Abel"] },
      { name: "Bad Bunny", aliases: ["Benito"] },
      { name: "BTS", aliases: ["Bangtan Boys", "Bangtan Sonyeondan"] },
      { name: "Eminem", aliases: ["Slim Shady"] }
    ]
  },
  { id: "mus-best-selling-boy-bands", category: "Music", prompt: "Top 10 best-selling boy bands of all time", hint: "Counting groups marketed as boy bands",
    items: [
      { name: "Backstreet Boys", aliases: ["BSB"] },
      { name: "NSYNC", aliases: ["N Sync", "N'Sync"] },
      { name: "New Kids on the Block", aliases: ["NKOTB"] },
      { name: "Take That", aliases: ["Take That UK"] },
      { name: "Boyz II Men", aliases: ["Boyz to Men"] },
      { name: "Westlife", aliases: ["West Life"] },
      { name: "Jonas Brothers", aliases: ["JoBros"] },
      { name: "Bay City Rollers", aliases: ["Rollers"] },
      { name: "One Direction", aliases: ["1D"] },
      { name: "Menudo", aliases: ["Menudo group"] }
    ]
  },
  { id: "mus-best-selling-girl-groups", category: "Music", prompt: "Top 10 best-selling girl groups of all time", hint: "From Motown to modern pop",
    items: [
      { name: "Spice Girls", aliases: ["The Spice Girls"] },
      { name: "TLC", aliases: ["TLC group"] },
      { name: "Destiny's Child", aliases: ["Destinys Child"] },
      { name: "The Supremes", aliases: ["Supremes"] },
      { name: "Bananarama", aliases: ["Banana Rama"] },
      { name: "The Pussycat Dolls", aliases: ["Pussycat Dolls", "PCD"] },
      { name: "Pointer Sisters", aliases: ["The Pointer Sisters"] },
      { name: "Dixie Chicks", aliases: ["The Chicks"] },
      { name: "En Vogue", aliases: ["EnVogue"] },
      { name: "Little Mix", aliases: ["LM"] }
    ]
  },
  { id: "mus-best-selling-kpop-groups", category: "Music", prompt: "Top 10 best-selling K-pop groups of all time", hint: "Korean pop powerhouses",
    items: [
      { name: "BTS", aliases: ["Bangtan Boys", "Bangtan Sonyeondan"] },
      { name: "Seventeen", aliases: ["SVT"] },
      { name: "Stray Kids", aliases: ["SKZ"] },
      { name: "Twice", aliases: ["Twice group"] },
      { name: "Blackpink", aliases: ["Black Pink", "BP"] },
      { name: "EXO", aliases: ["EXO K", "EXO M"] },
      { name: "NCT Dream", aliases: ["NCT"] },
      { name: "Tomorrow X Together", aliases: ["TXT", "Tomorrow by Together"] },
      { name: "Enhypen", aliases: ["EN-"] },
      { name: "Aespa", aliases: ["aespa"] }
    ]
  },
  { id: "mus-highest-grossing-tours", category: "Music", prompt: "Top 10 highest-grossing music tours of all time", hint: "Taylor Swift's Eras Tour shattered records",
    items: [
      { name: "The Eras Tour", aliases: ["Taylor Swift Eras Tour"] },
      { name: "Music of the Spheres World Tour", aliases: ["Coldplay Music of the Spheres"] },
      { name: "Renaissance World Tour", aliases: ["Beyonce Renaissance Tour"] },
      { name: "Plus, Minus, Equals, Divide Tour", aliases: ["Ed Sheeran Mathematics Tour", "+ - = ÷ x Tour"] },
      { name: "Divide Tour", aliases: ["Ed Sheeran Divide Tour"] },
      { name: "A Bigger Bang Tour", aliases: ["Rolling Stones A Bigger Bang"] },
      { name: "360 Tour", aliases: ["U2 360 Tour"] },
      { name: "Not in This Lifetime... Tour", aliases: ["Guns N Roses Not in This Lifetime"] },
      { name: "Reputation Stadium Tour", aliases: ["Taylor Swift Reputation Tour"] },
      { name: "Wall Street Journal Tour", aliases: ["The Wall Live", "Roger Waters The Wall Live"] }
    ]
  },
  { id: "mus-best-selling-queen-albums", category: "Music", prompt: "Top 10 best-selling Queen albums of all time", hint: "Greatest Hits dominates",
    items: [
      { name: "Greatest Hits", aliases: ["Queen Greatest Hits"] },
      { name: "Greatest Hits II", aliases: ["Queen Greatest Hits 2"] },
      { name: "A Night at the Opera", aliases: ["Queen A Night at the Opera"] },
      { name: "News of the World", aliases: ["Queen News of the World"] },
      { name: "The Game", aliases: ["Queen The Game"] },
      { name: "Jazz", aliases: ["Queen Jazz"] },
      { name: "A Day at the Races", aliases: ["Queen A Day at the Races"] },
      { name: "Innuendo", aliases: ["Queen Innuendo"] },
      { name: "Made in Heaven", aliases: ["Queen Made in Heaven"] },
      { name: "The Miracle", aliases: ["Queen The Miracle"] }
    ]
  },
  { id: "mus-best-selling-pink-floyd-albums", category: "Music", prompt: "Top 10 best-selling Pink Floyd albums of all time", hint: "Dark Side and The Wall lead",
    items: [
      { name: "The Dark Side of the Moon", aliases: ["Dark Side of the Moon"] },
      { name: "The Wall", aliases: ["Pink Floyd The Wall"] },
      { name: "Wish You Were Here", aliases: ["Pink Floyd Wish You Were Here"] },
      { name: "The Division Bell", aliases: ["Pink Floyd Division Bell"] },
      { name: "A Momentary Lapse of Reason", aliases: ["Pink Floyd Momentary Lapse"] },
      { name: "Animals", aliases: ["Pink Floyd Animals"] },
      { name: "Meddle", aliases: ["Pink Floyd Meddle"] },
      { name: "The Final Cut", aliases: ["Pink Floyd Final Cut"] },
      { name: "Echoes: The Best of Pink Floyd", aliases: ["Echoes Pink Floyd"] },
      { name: "The Endless River", aliases: ["Pink Floyd Endless River"] }
    ]
  },
  { id: "mus-best-selling-acdc-albums", category: "Music", prompt: "Top 10 best-selling AC/DC albums of all time", hint: "Back in Black tops them all",
    items: [
      { name: "Back in Black", aliases: ["AC/DC Back in Black"] },
      { name: "Highway to Hell", aliases: ["AC/DC Highway to Hell"] },
      { name: "The Razors Edge", aliases: ["AC/DC Razors Edge"] },
      { name: "For Those About to Rock We Salute You", aliases: ["For Those About to Rock"] },
      { name: "Dirty Deeds Done Dirt Cheap", aliases: ["AC/DC Dirty Deeds"] },
      { name: "Who Made Who", aliases: ["AC/DC Who Made Who"] },
      { name: "Live", aliases: ["AC/DC Live"] },
      { name: "Black Ice", aliases: ["AC/DC Black Ice"] },
      { name: "Stiff Upper Lip", aliases: ["AC/DC Stiff Upper Lip"] },
      { name: "Ballbreaker", aliases: ["AC/DC Ballbreaker"] }
    ]
  },
  { id: "mus-best-selling-led-zeppelin-albums", category: "Music", prompt: "Top 10 best-selling Led Zeppelin albums of all time", hint: "IV is the masterpiece",
    items: [
      { name: "Led Zeppelin IV", aliases: ["Zeppelin IV", "Four Symbols"] },
      { name: "Physical Graffiti", aliases: ["Zeppelin Physical Graffiti"] },
      { name: "Led Zeppelin II", aliases: ["Zeppelin II"] },
      { name: "Houses of the Holy", aliases: ["Zeppelin Houses of the Holy"] },
      { name: "Led Zeppelin", aliases: ["Zeppelin I", "Led Zeppelin I"] },
      { name: "Led Zeppelin III", aliases: ["Zeppelin III"] },
      { name: "Presence", aliases: ["Zeppelin Presence"] },
      { name: "In Through the Out Door", aliases: ["Zeppelin In Through the Out Door"] },
      { name: "The Song Remains the Same", aliases: ["Zeppelin Song Remains the Same"] },
      { name: "Coda", aliases: ["Zeppelin Coda"] }
    ]
  },
  { id: "mus-best-selling-michael-jackson-albums", category: "Music", prompt: "Top 10 best-selling Michael Jackson albums of all time", hint: "King of Pop's catalog",
    items: [
      { name: "Thriller", aliases: ["MJ Thriller"] },
      { name: "Bad", aliases: ["MJ Bad"] },
      { name: "Dangerous", aliases: ["MJ Dangerous"] },
      { name: "HIStory: Past, Present and Future, Book I", aliases: ["HIStory MJ"] },
      { name: "Off the Wall", aliases: ["MJ Off the Wall"] },
      { name: "Invincible", aliases: ["MJ Invincible"] },
      { name: "Number Ones", aliases: ["MJ Number Ones"] },
      { name: "Blood on the Dance Floor: HIStory in the Mix", aliases: ["Blood on the Dance Floor MJ"] },
      { name: "Michael", aliases: ["MJ Michael album"] },
      { name: "Xscape", aliases: ["MJ Xscape"] }
    ]
  },
  { id: "mus-best-selling-madonna-albums", category: "Music", prompt: "Top 10 best-selling Madonna albums of all time", hint: "Queen of Pop's massive discography",
    items: [
      { name: "The Immaculate Collection", aliases: ["Madonna Immaculate Collection"] },
      { name: "True Blue", aliases: ["Madonna True Blue"] },
      { name: "Like a Virgin", aliases: ["Madonna Like a Virgin"] },
      { name: "Like a Prayer", aliases: ["Madonna Like a Prayer"] },
      { name: "Ray of Light", aliases: ["Madonna Ray of Light"] },
      { name: "Music", aliases: ["Madonna Music album"] },
      { name: "Madonna", aliases: ["Madonna debut album"] },
      { name: "Confessions on a Dance Floor", aliases: ["Madonna Confessions"] },
      { name: "Bedtime Stories", aliases: ["Madonna Bedtime Stories"] },
      { name: "Erotica", aliases: ["Madonna Erotica"] }
    ]
  },
  { id: "mus-best-selling-whitney-houston-albums", category: "Music", prompt: "Top 10 best-selling Whitney Houston albums of all time", hint: "Bodyguard is her biggest",
    items: [
      { name: "The Bodyguard", aliases: ["Bodyguard Soundtrack"] },
      { name: "Whitney Houston", aliases: ["Whitney Houston debut"] },
      { name: "Whitney", aliases: ["Whitney album"] },
      { name: "My Love Is Your Love", aliases: ["Whitney My Love Is Your Love"] },
      { name: "I'm Your Baby Tonight", aliases: ["Whitney I'm Your Baby Tonight"] },
      { name: "The Preacher's Wife", aliases: ["Preachers Wife Soundtrack"] },
      { name: "Whitney: The Greatest Hits", aliases: ["Whitney Greatest Hits"] },
      { name: "Just Whitney", aliases: ["Whitney Just Whitney"] },
      { name: "One Wish: The Holiday Album", aliases: ["One Wish Whitney"] },
      { name: "I Look to You", aliases: ["Whitney I Look to You"] }
    ]
  },
  { id: "mus-best-selling-mariah-carey-albums", category: "Music", prompt: "Top 10 best-selling Mariah Carey albums of all time", hint: "Music Box and Daydream lead",
    items: [
      { name: "Music Box", aliases: ["Mariah Music Box"] },
      { name: "Daydream", aliases: ["Mariah Daydream"] },
      { name: "Mariah Carey", aliases: ["Mariah Carey debut"] },
      { name: "Merry Christmas", aliases: ["Mariah Merry Christmas"] },
      { name: "Butterfly", aliases: ["Mariah Butterfly"] },
      { name: "Emotions", aliases: ["Mariah Emotions"] },
      { name: "The Emancipation of Mimi", aliases: ["Emancipation of Mimi"] },
      { name: "Rainbow", aliases: ["Mariah Rainbow"] },
      { name: "#1's", aliases: ["Mariah Number 1s"] },
      { name: "MTV Unplugged", aliases: ["Mariah MTV Unplugged"] }
    ]
  },
  { id: "mus-best-selling-elton-john-albums", category: "Music", prompt: "Top 10 best-selling Elton John albums of all time", hint: "Goodbye Yellow Brick Road and Greatest Hits",
    items: [
      { name: "Goodbye Yellow Brick Road", aliases: ["Elton John Yellow Brick Road"] },
      { name: "Greatest Hits", aliases: ["Elton John Greatest Hits"] },
      { name: "Captain Fantastic and the Brown Dirt Cowboy", aliases: ["Captain Fantastic Elton"] },
      { name: "Honky Chateau", aliases: ["Elton Honky Chateau"] },
      { name: "Madman Across the Water", aliases: ["Elton Madman Across the Water"] },
      { name: "Don't Shoot Me I'm Only the Piano Player", aliases: ["Dont Shoot Me Elton"] },
      { name: "Caribou", aliases: ["Elton Caribou"] },
      { name: "Rock of the Westies", aliases: ["Elton Rock of the Westies"] },
      { name: "Elton John", aliases: ["Elton John album"] },
      { name: "The One", aliases: ["Elton The One"] }
    ]
  },
  { id: "mus-best-selling-eminem-albums", category: "Music", prompt: "Top 10 best-selling Eminem albums of all time", hint: "Marshall Mathers LP is his peak",
    items: [
      { name: "The Marshall Mathers LP", aliases: ["Marshall Mathers LP"] },
      { name: "The Eminem Show", aliases: ["Eminem Show"] },
      { name: "Encore", aliases: ["Eminem Encore"] },
      { name: "Recovery", aliases: ["Eminem Recovery"] },
      { name: "The Slim Shady LP", aliases: ["Slim Shady LP"] },
      { name: "Curtain Call: The Hits", aliases: ["Eminem Curtain Call"] },
      { name: "Relapse", aliases: ["Eminem Relapse"] },
      { name: "The Marshall Mathers LP 2", aliases: ["MMLP2"] },
      { name: "Revival", aliases: ["Eminem Revival"] },
      { name: "Kamikaze", aliases: ["Eminem Kamikaze"] }
    ]
  },
  { id: "mus-best-selling-drake-albums", category: "Music", prompt: "Top 10 best-selling Drake albums of all time", hint: "Views and Scorpion lead",
    items: [
      { name: "Views", aliases: ["Drake Views"] },
      { name: "Scorpion", aliases: ["Drake Scorpion"] },
      { name: "Take Care", aliases: ["Drake Take Care"] },
      { name: "Nothing Was the Same", aliases: ["Drake Nothing Was the Same"] },
      { name: "If You're Reading This It's Too Late", aliases: ["IYRTITL"] },
      { name: "Thank Me Later", aliases: ["Drake Thank Me Later"] },
      { name: "More Life", aliases: ["Drake More Life"] },
      { name: "Certified Lover Boy", aliases: ["CLB"] },
      { name: "Honestly, Nevermind", aliases: ["Drake Honestly Nevermind"] },
      { name: "Her Loss", aliases: ["Drake 21 Savage Her Loss"] }
    ]
  },
  { id: "mus-best-selling-kanye-albums", category: "Music", prompt: "Top 10 best-selling Kanye West albums of all time", hint: "Graduation and MBDTF top this",
    items: [
      { name: "Graduation", aliases: ["Kanye Graduation"] },
      { name: "The College Dropout", aliases: ["College Dropout"] },
      { name: "Late Registration", aliases: ["Kanye Late Registration"] },
      { name: "My Beautiful Dark Twisted Fantasy", aliases: ["MBDTF"] },
      { name: "808s & Heartbreak", aliases: ["808s and Heartbreak"] },
      { name: "Watch the Throne", aliases: ["Kanye Jay-Z Watch the Throne"] },
      { name: "Yeezus", aliases: ["Kanye Yeezus"] },
      { name: "The Life of Pablo", aliases: ["TLOP"] },
      { name: "Ye", aliases: ["Kanye Ye"] },
      { name: "Jesus Is King", aliases: ["Kanye Jesus Is King"] }
    ]
  },
  { id: "mus-best-selling-jayz-albums", category: "Music", prompt: "Top 10 best-selling Jay-Z albums of all time", hint: "The Blueprint and Black Album",
    items: [
      { name: "The Blueprint", aliases: ["Jay-Z Blueprint"] },
      { name: "Vol. 2... Hard Knock Life", aliases: ["Hard Knock Life Jay-Z"] },
      { name: "The Black Album", aliases: ["Jay-Z Black Album"] },
      { name: "The Dynasty: Roc La Familia", aliases: ["Dynasty Roc La Familia"] },
      { name: "Vol. 3... Life and Times of S. Carter", aliases: ["Vol 3 Jay-Z"] },
      { name: "Kingdom Come", aliases: ["Jay-Z Kingdom Come"] },
      { name: "American Gangster", aliases: ["Jay-Z American Gangster"] },
      { name: "The Blueprint 3", aliases: ["Blueprint 3"] },
      { name: "Magna Carta Holy Grail", aliases: ["MCHG"] },
      { name: "4:44", aliases: ["Jay-Z 444"] }
    ]
  },
  { id: "mus-best-selling-taylor-swift-albums", category: "Music", prompt: "Top 10 best-selling Taylor Swift albums of all time", hint: "Fearless and 1989 lead",
    items: [
      { name: "1989", aliases: ["Taylor Swift 1989"] },
      { name: "Fearless", aliases: ["Taylor Swift Fearless"] },
      { name: "Speak Now", aliases: ["Taylor Swift Speak Now"] },
      { name: "Red", aliases: ["Taylor Swift Red"] },
      { name: "Taylor Swift", aliases: ["Taylor Swift debut"] },
      { name: "Reputation", aliases: ["Taylor Swift Reputation"] },
      { name: "Lover", aliases: ["Taylor Swift Lover"] },
      { name: "Folklore", aliases: ["Taylor Swift Folklore"] },
      { name: "Midnights", aliases: ["Taylor Swift Midnights"] },
      { name: "Evermore", aliases: ["Taylor Swift Evermore"] }
    ]
  },
  { id: "mus-best-selling-beyonce-albums", category: "Music", prompt: "Top 10 best-selling Beyonce albums of all time", hint: "Dangerously in Love and B'Day",
    items: [
      { name: "Dangerously in Love", aliases: ["Beyonce Dangerously in Love"] },
      { name: "I Am... Sasha Fierce", aliases: ["I Am Sasha Fierce"] },
      { name: "B'Day", aliases: ["Beyonce B Day"] },
      { name: "Beyonce", aliases: ["Beyonce self-titled"] },
      { name: "Lemonade", aliases: ["Beyonce Lemonade"] },
      { name: "4", aliases: ["Beyonce 4"] },
      { name: "Renaissance", aliases: ["Beyonce Renaissance"] },
      { name: "Cowboy Carter", aliases: ["Beyonce Cowboy Carter"] },
      { name: "The Lion King: The Gift", aliases: ["Lion King The Gift Beyonce"] },
      { name: "Homecoming: The Live Album", aliases: ["Homecoming Beyonce"] }
    ]
  },
  { id: "mus-best-selling-rihanna-albums", category: "Music", prompt: "Top 10 best-selling Rihanna albums of all time", hint: "Good Girl Gone Bad and Loud",
    items: [
      { name: "Good Girl Gone Bad", aliases: ["Rihanna Good Girl Gone Bad"] },
      { name: "Loud", aliases: ["Rihanna Loud"] },
      { name: "Anti", aliases: ["Rihanna Anti"] },
      { name: "Talk That Talk", aliases: ["Rihanna Talk That Talk"] },
      { name: "Rated R", aliases: ["Rihanna Rated R"] },
      { name: "A Girl Like Me", aliases: ["Rihanna A Girl Like Me"] },
      { name: "Unapologetic", aliases: ["Rihanna Unapologetic"] },
      { name: "Music of the Sun", aliases: ["Rihanna Music of the Sun"] },
      { name: "Disturbia", aliases: ["Rihanna Disturbia"] },
      { name: "Rihanna Reloaded", aliases: ["Reloaded Rihanna"] }
    ]
  },
  { id: "mus-best-selling-adele-albums", category: "Music", prompt: "Top 10 best-selling Adele albums of all time", hint: "Only has 5 studio albums - top them",
    items: [
      { name: "21", aliases: ["Adele 21"] },
      { name: "25", aliases: ["Adele 25"] },
      { name: "19", aliases: ["Adele 19"] },
      { name: "30", aliases: ["Adele 30"] },
      { name: "Adele Live at the Royal Albert Hall", aliases: ["Adele Live Royal Albert Hall"] },
      { name: "Live at the Royal Albert Hall", aliases: ["Royal Albert Hall Adele"] },
      { name: "iTunes Festival: London 2011", aliases: ["iTunes Festival Adele"] },
      { name: "Hello (single)", aliases: ["Adele Hello"] },
      { name: "Skyfall (single)", aliases: ["Adele Skyfall"] },
      { name: "Easy on Me (single)", aliases: ["Adele Easy on Me"] }
    ]
  },
  { id: "mus-best-selling-rock-albums", category: "Music", prompt: "Top 10 best-selling rock albums of all time", hint: "AC/DC, Pink Floyd, Zeppelin dominate",
    items: [
      { name: "Back in Black", aliases: ["AC/DC Back in Black"] },
      { name: "The Dark Side of the Moon", aliases: ["Pink Floyd Dark Side"] },
      { name: "Bat Out of Hell", aliases: ["Meat Loaf Bat Out of Hell"] },
      { name: "Their Greatest Hits 1971-1975", aliases: ["Eagles Greatest Hits"] },
      { name: "Hotel California", aliases: ["Eagles Hotel California"] },
      { name: "Rumours", aliases: ["Fleetwood Mac Rumours"] },
      { name: "Led Zeppelin IV", aliases: ["Zeppelin IV"] },
      { name: "Born in the U.S.A.", aliases: ["Springsteen Born in the USA"] },
      { name: "Brothers in Arms", aliases: ["Dire Straits Brothers in Arms"] },
      { name: "Appetite for Destruction", aliases: ["Guns N Roses Appetite for Destruction"] }
    ]
  },
  { id: "mus-best-selling-hip-hop-albums", category: "Music", prompt: "Top 10 best-selling hip-hop albums of all time", hint: "Eminem dominates this list",
    items: [
      { name: "The Marshall Mathers LP", aliases: ["Marshall Mathers LP"] },
      { name: "The Eminem Show", aliases: ["Eminem Show"] },
      { name: "Cracked Rear View", aliases: ["Hootie and the Blowfish Cracked Rear View"] },
      { name: "Recovery", aliases: ["Eminem Recovery"] },
      { name: "Encore", aliases: ["Eminem Encore"] },
      { name: "Get Rich or Die Tryin'", aliases: ["50 Cent Get Rich or Die Tryin"] },
      { name: "The Massacre", aliases: ["50 Cent The Massacre"] },
      { name: "Doggystyle", aliases: ["Snoop Doggy Dogg Doggystyle"] },
      { name: "The Slim Shady LP", aliases: ["Slim Shady LP"] },
      { name: "Life After Death", aliases: ["Notorious BIG Life After Death"] }
    ]
  },
  { id: "mus-best-selling-pop-albums", category: "Music", prompt: "Top 10 best-selling pop albums of all time", hint: "Pop divas and Michael Jackson",
    items: [
      { name: "Thriller", aliases: ["MJ Thriller"] },
      { name: "The Bodyguard", aliases: ["Bodyguard Soundtrack"] },
      { name: "Come On Over", aliases: ["Shania Twain Come On Over"] },
      { name: "Bad", aliases: ["MJ Bad"] },
      { name: "Dangerous", aliases: ["MJ Dangerous"] },
      { name: "Falling into You", aliases: ["Celine Dion Falling into You"] },
      { name: "Let's Talk About Love", aliases: ["Celine Dion Let's Talk About Love"] },
      { name: "21", aliases: ["Adele 21"] },
      { name: "1", aliases: ["Beatles 1"] },
      { name: "Jagged Little Pill", aliases: ["Alanis Jagged Little Pill"] }
    ]
  },
  { id: "mus-best-selling-country-albums", category: "Music", prompt: "Top 10 best-selling country albums of all time", hint: "Shania, Garth and Dixie Chicks",
    items: [
      { name: "Come On Over", aliases: ["Shania Twain Come On Over"] },
      { name: "No Fences", aliases: ["Garth Brooks No Fences"] },
      { name: "Ropin' the Wind", aliases: ["Garth Brooks Ropin the Wind"] },
      { name: "Some Gave All", aliases: ["Billy Ray Cyrus Some Gave All"] },
      { name: "The Hits", aliases: ["Garth Brooks The Hits"] },
      { name: "Wide Open Spaces", aliases: ["Dixie Chicks Wide Open Spaces"] },
      { name: "Breathe", aliases: ["Faith Hill Breathe"] },
      { name: "Fly", aliases: ["Dixie Chicks Fly"] },
      { name: "The Woman in Me", aliases: ["Shania Twain Woman in Me"] },
      { name: "Double Live", aliases: ["Garth Brooks Double Live"] }
    ]
  },
  { id: "mus-best-selling-latin-albums", category: "Music", prompt: "Top 10 best-selling Latin albums of all time", hint: "Buena Vista Social Club leads",
    items: [
      { name: "Buena Vista Social Club", aliases: ["BVSC"] },
      { name: "Romances", aliases: ["Luis Miguel Romances"] },
      { name: "Romance", aliases: ["Luis Miguel Romance"] },
      { name: "Vida Loca", aliases: ["Ricky Martin Livin La Vida Loca"] },
      { name: "Amarte Es un Placer", aliases: ["Luis Miguel Amarte Es un Placer"] },
      { name: "Segundo Romance", aliases: ["Luis Miguel Segundo Romance"] },
      { name: "Mi Tierra", aliases: ["Gloria Estefan Mi Tierra"] },
      { name: "Dreaming of You", aliases: ["Selena Dreaming of You"] },
      { name: "Amor Prohibido", aliases: ["Selena Amor Prohibido"] },
      { name: "Sueños Líquidos", aliases: ["Mana Suenos Liquidos"] }
    ]
  },
  { id: "mus-best-selling-french-artists", category: "Music", prompt: "Top 10 best-selling French music artists of all time", hint: "Chanson legends and modern stars",
    items: [
      { name: "Celine Dion", aliases: ["Céline Dion"] },
      { name: "Johnny Hallyday", aliases: ["Hallyday"] },
      { name: "Mireille Mathieu", aliases: ["Mathieu Mireille"] },
      { name: "Charles Aznavour", aliases: ["Aznavour"] },
      { name: "Jean-Michel Jarre", aliases: ["Jarre"] },
      { name: "Edith Piaf", aliases: ["Piaf", "Édith Piaf"] },
      { name: "Mylene Farmer", aliases: ["Mylène Farmer", "Farmer"] },
      { name: "Daft Punk", aliases: ["DaftPunk"] },
      { name: "Jean Ferrat", aliases: ["Ferrat"] },
      { name: "Patrick Bruel", aliases: ["Bruel"] }
    ]
  },
  { id: "mus-most-grammy-album-of-year", category: "Music", prompt: "Top 10 artists with most Grammy Album of the Year wins", hint: "Stevie Wonder and Taylor Swift lead",
    items: [
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "Stevie Wonder", aliases: ["Wonder"] },
      { name: "Frank Sinatra", aliases: ["Sinatra"] },
      { name: "Paul Simon", aliases: ["Simon"] },
      { name: "Adele", aliases: ["Adkins"] },
      { name: "U2", aliases: ["U Two"] },
      { name: "Ray Charles", aliases: ["Charles Ray"] },
      { name: "Bob Newhart", aliases: ["Newhart"] },
      { name: "Vladimir Horowitz", aliases: ["Horowitz"] },
      { name: "Quincy Jones", aliases: ["Q"] }
    ]
  },
  { id: "mus-most-brit-awards", category: "Music", prompt: "Top 10 most BRIT Awards won by an artist", hint: "UK music's biggest stars",
    items: [
      { name: "Robbie Williams", aliases: ["Williams Robbie"] },
      { name: "Coldplay", aliases: ["Cold Play"] },
      { name: "Adele", aliases: ["Adele Adkins"] },
      { name: "Take That", aliases: ["Take That UK"] },
      { name: "Annie Lennox", aliases: ["Lennox"] },
      { name: "Ed Sheeran", aliases: ["Sheeran"] },
      { name: "U2", aliases: ["U Two"] },
      { name: "Arctic Monkeys", aliases: ["Arctic Monkeys band"] },
      { name: "Harry Styles", aliases: ["Styles"] },
      { name: "Stormzy", aliases: ["Stormzy UK"] }
    ]
  },
  { id: "mus-most-mtv-vma-wins", category: "Music", prompt: "Top 10 most MTV Video Music Awards won by an artist", hint: "Beyonce and Madonna dominate",
    items: [
      { name: "Beyonce", aliases: ["Beyoncé", "Queen Bey"] },
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "Madonna", aliases: ["Madge"] },
      { name: "Lady Gaga", aliases: ["Gaga"] },
      { name: "Peter Gabriel", aliases: ["Gabriel"] },
      { name: "Eminem", aliases: ["Slim Shady"] },
      { name: "BTS", aliases: ["Bangtan"] },
      { name: "Justin Bieber", aliases: ["Bieber"] },
      { name: "Rihanna", aliases: ["RiRi"] },
      { name: "Bruno Mars", aliases: ["Mars"] }
    ]
  },
  { id: "mus-best-selling-jazz-albums", category: "Music", prompt: "Top 10 best-selling jazz albums of all time", hint: "Kind of Blue tops the list",
    items: [
      { name: "Kind of Blue", aliases: ["Miles Davis Kind of Blue"] },
      { name: "Come Away with Me", aliases: ["Norah Jones Come Away with Me"] },
      { name: "Time Out", aliases: ["Dave Brubeck Time Out"] },
      { name: "Getz/Gilberto", aliases: ["Getz Gilberto"] },
      { name: "Breezin'", aliases: ["George Benson Breezin"] },
      { name: "A Love Supreme", aliases: ["John Coltrane A Love Supreme"] },
      { name: "Head Hunters", aliases: ["Herbie Hancock Head Hunters"] },
      { name: "Bitches Brew", aliases: ["Miles Davis Bitches Brew"] },
      { name: "Songs in the Key of Life", aliases: ["Stevie Wonder Key of Life"] },
      { name: "Feels So Good", aliases: ["Chuck Mangione Feels So Good"] }
    ]
  },
  { id: "mus-best-selling-soundtracks", category: "Music", prompt: "Top 10 best-selling movie soundtracks of all time", hint: "Bodyguard and Saturday Night Fever lead",
    items: [
      { name: "The Bodyguard", aliases: ["Bodyguard Soundtrack"] },
      { name: "Saturday Night Fever", aliases: ["Saturday Night Fever Soundtrack"] },
      { name: "Purple Rain", aliases: ["Prince Purple Rain"] },
      { name: "Dirty Dancing", aliases: ["Dirty Dancing Soundtrack"] },
      { name: "The Lion King", aliases: ["Lion King Soundtrack"] },
      { name: "Titanic: Music from the Motion Picture", aliases: ["Titanic Soundtrack"] },
      { name: "Grease", aliases: ["Grease Soundtrack"] },
      { name: "Forrest Gump", aliases: ["Forrest Gump Soundtrack"] },
      { name: "Waiting to Exhale", aliases: ["Waiting to Exhale Soundtrack"] },
      { name: "Pulp Fiction", aliases: ["Pulp Fiction Soundtrack"] }
    ]
  },
  { id: "mus-most-attended-festivals", category: "Music", prompt: "Top 10 most-attended music festivals in history", hint: "Free concerts in Rio and beyond",
    items: [
      { name: "Rod Stewart - Copacabana 1994", aliases: ["Rod Stewart Copacabana"] },
      { name: "Jean-Michel Jarre - Moscow 1997", aliases: ["Jarre Moscow"] },
      { name: "Jean-Michel Jarre - Paris La Defense 1990", aliases: ["Jarre La Defense"] },
      { name: "Jorge Ben Jor - Rio 1993", aliases: ["Jorge Ben Jor Rio"] },
      { name: "Steve Wozniak's US Festival 1983", aliases: ["US Festival 1983"] },
      { name: "Summer Jam at Watkins Glen 1973", aliases: ["Watkins Glen 1973"] },
      { name: "Donauinselfest", aliases: ["Donau Insel Fest"] },
      { name: "Mawazine", aliases: ["Mawazine Festival"] },
      { name: "Glastonbury Festival", aliases: ["Glasto"] },
      { name: "Woodstock 1969", aliases: ["Woodstock"] }
    ]
  },
  { id: "mus-best-selling-jpop-artists", category: "Music", prompt: "Top 10 best-selling J-pop artists of all time", hint: "Japanese pop legends",
    items: [
      { name: "B'z", aliases: ["BZ", "Bz"] },
      { name: "Mr. Children", aliases: ["Mr Children", "Misuchiru"] },
      { name: "Ayumi Hamasaki", aliases: ["Hamasaki Ayumi"] },
      { name: "Southern All Stars", aliases: ["Southern All Stars Japan"] },
      { name: "Utada Hikaru", aliases: ["Hikaru Utada"] },
      { name: "AKB48", aliases: ["AKB 48"] },
      { name: "Arashi", aliases: ["Arashi group"] },
      { name: "SMAP", aliases: ["SMAP Japan"] },
      { name: "Dreams Come True", aliases: ["DCT Dreams Come True"] },
      { name: "Glay", aliases: ["GLAY"] }
    ]
  },
  { id: "mus-best-selling-reggae-albums", category: "Music", prompt: "Top 10 best-selling reggae albums of all time", hint: "Bob Marley dominates",
    items: [
      { name: "Legend", aliases: ["Bob Marley Legend"] },
      { name: "Exodus", aliases: ["Bob Marley Exodus"] },
      { name: "Uprising", aliases: ["Bob Marley Uprising"] },
      { name: "Catch a Fire", aliases: ["Bob Marley Catch a Fire"] },
      { name: "Survival", aliases: ["Bob Marley Survival"] },
      { name: "Rastaman Vibration", aliases: ["Bob Marley Rastaman Vibration"] },
      { name: "Kaya", aliases: ["Bob Marley Kaya"] },
      { name: "Natty Dread", aliases: ["Bob Marley Natty Dread"] },
      { name: "Confrontation", aliases: ["Bob Marley Confrontation"] },
      { name: "Burnin'", aliases: ["Bob Marley Burnin"] }
    ]
  },
  { id: "mus-best-selling-metal-albums", category: "Music", prompt: "Top 10 best-selling metal albums of all time", hint: "Metallica's Black Album leads",
    items: [
      { name: "Metallica", aliases: ["Black Album", "Metallica Black Album"] },
      { name: "Appetite for Destruction", aliases: ["Guns N Roses Appetite for Destruction"] },
      { name: "Hysteria", aliases: ["Def Leppard Hysteria"] },
      { name: "Pyromania", aliases: ["Def Leppard Pyromania"] },
      { name: "Slippery When Wet", aliases: ["Bon Jovi Slippery When Wet"] },
      { name: "Master of Puppets", aliases: ["Metallica Master of Puppets"] },
      { name: "Number of the Beast", aliases: ["Iron Maiden Number of the Beast"] },
      { name: "Paranoid", aliases: ["Black Sabbath Paranoid"] },
      { name: "Ride the Lightning", aliases: ["Metallica Ride the Lightning"] },
      { name: "Reign in Blood", aliases: ["Slayer Reign in Blood"] }
    ]
  },
  { id: "mus-most-grammy-record-of-year", category: "Music", prompt: "Top 10 artists with most Grammy Record of the Year wins", hint: "Few have won this multiple times",
    items: [
      { name: "Bruno Mars", aliases: ["Mars Bruno"] },
      { name: "Paul Simon", aliases: ["Simon Paul"] },
      { name: "Roberta Flack", aliases: ["Flack"] },
      { name: "U2", aliases: ["U Two"] },
      { name: "Eric Clapton", aliases: ["Clapton"] },
      { name: "Henry Mancini", aliases: ["Mancini"] },
      { name: "Adele", aliases: ["Adkins"] },
      { name: "Frank Sinatra", aliases: ["Sinatra"] },
      { name: "Tony Bennett", aliases: ["Bennett"] },
      { name: "Billie Eilish", aliases: ["Eilish"] }
    ]
  },
  { id: "mus-most-grammy-song-of-year", category: "Music", prompt: "Top 10 songwriters with most Grammy Song of the Year wins", hint: "Songwriting greats",
    items: [
      { name: "Henry Mancini", aliases: ["Mancini"] },
      { name: "Johnny Mercer", aliases: ["Mercer Johnny"] },
      { name: "James Horner", aliases: ["Horner"] },
      { name: "Will Jennings", aliases: ["Jennings Will"] },
      { name: "Paul McCartney", aliases: ["McCartney"] },
      { name: "John Lennon", aliases: ["Lennon"] },
      { name: "U2", aliases: ["U Two"] },
      { name: "Billie Eilish", aliases: ["Eilish"] },
      { name: "Finneas O'Connell", aliases: ["FINNEAS"] },
      { name: "Adele", aliases: ["Adkins"] }
    ]
  },
  { id: "mus-diamond-singles-riaa", category: "Music", prompt: "Top 10 most diamond-certified singles by RIAA", hint: "10x platinum and above",
    items: [
      { name: "Old Town Road", aliases: ["Lil Nas X Old Town Road"] },
      { name: "Despacito", aliases: ["Luis Fonsi Despacito"] },
      { name: "Party in the U.S.A.", aliases: ["Miley Cyrus Party in the USA"] },
      { name: "Shape of You", aliases: ["Ed Sheeran Shape of You"] },
      { name: "I Gotta Feeling", aliases: ["Black Eyed Peas I Gotta Feeling"] },
      { name: "Closer", aliases: ["The Chainsmokers Closer"] },
      { name: "Counting Stars", aliases: ["OneRepublic Counting Stars"] },
      { name: "Perfect", aliases: ["Ed Sheeran Perfect"] },
      { name: "Radioactive", aliases: ["Imagine Dragons Radioactive"] },
      { name: "Rockstar", aliases: ["Post Malone Rockstar"] }
    ]
  },
  { id: "mus-diamond-albums-riaa", category: "Music", prompt: "Top 10 most diamond-certified albums by RIAA (US sales)", hint: "10 million+ certified in the US",
    items: [
      { name: "Their Greatest Hits 1971-1975", aliases: ["Eagles Greatest Hits"] },
      { name: "Thriller", aliases: ["MJ Thriller"] },
      { name: "Hotel California", aliases: ["Eagles Hotel California"] },
      { name: "Led Zeppelin IV", aliases: ["Zeppelin IV"] },
      { name: "Back in Black", aliases: ["AC/DC Back in Black"] },
      { name: "The Wall", aliases: ["Pink Floyd The Wall"] },
      { name: "Greatest Hits Volume 1 & 2", aliases: ["Billy Joel Greatest Hits"] },
      { name: "Rumours", aliases: ["Fleetwood Mac Rumours"] },
      { name: "Come On Over", aliases: ["Shania Twain Come On Over"] },
      { name: "The Bodyguard", aliases: ["Bodyguard Soundtrack"] }
    ]
  },
  { id: "mus-best-selling-french-albums", category: "Music", prompt: "Top 10 best-selling albums in France of all time", hint: "Goldman, Sardou and Brel",
    items: [
      { name: "D'eux", aliases: ["Celine Dion Deux", "D eux"] },
      { name: "Chansons pour les pieds", aliases: ["Jean-Jacques Goldman"] },
      { name: "Olympia 64", aliases: ["Jacques Brel Olympia"] },
      { name: "Goldman / Jones / Sirima", aliases: ["Goldman Jones"] },
      { name: "S'il suffisait d'aimer", aliases: ["Celine Dion S'il suffisait d'aimer"] },
      { name: "Roch Voisine - Helene", aliases: ["Helene Roch Voisine"] },
      { name: "Mylene Farmer - Anamorphosee", aliases: ["Anamorphosee"] },
      { name: "Notre-Dame de Paris", aliases: ["Notre Dame de Paris musical"] },
      { name: "Best of Daft Punk", aliases: ["Daft Punk Greatest Hits"] },
      { name: "Random Access Memories", aliases: ["Daft Punk RAM"] }
    ]
  },
  { id: "mus-best-selling-classical-albums", category: "Music", prompt: "Top 10 best-selling classical albums of all time", hint: "Three Tenors and Bocelli",
    items: [
      { name: "In Concert", aliases: ["Three Tenors In Concert"] },
      { name: "Romanza", aliases: ["Andrea Bocelli Romanza"] },
      { name: "Sogno", aliases: ["Andrea Bocelli Sogno"] },
      { name: "Chant", aliases: ["Benedictine Monks Chant"] },
      { name: "Voice of an Angel", aliases: ["Charlotte Church Voice of an Angel"] },
      { name: "Sacred Arias", aliases: ["Bocelli Sacred Arias"] },
      { name: "Classics", aliases: ["Pavarotti Classics"] },
      { name: "The Three Tenors in Concert 1994", aliases: ["Three Tenors 1994"] },
      { name: "Verdi", aliases: ["Pavarotti Verdi"] },
      { name: "Pavarotti's Greatest Hits", aliases: ["Pavarotti Greatest Hits"] }
    ]
  },
  { id: "mus-most-streamed-female-artists", category: "Music", prompt: "Top 10 most-streamed female artists on Spotify all-time", hint: "Modern pop divas",
    items: [
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "Ariana Grande", aliases: ["Grande"] },
      { name: "Rihanna", aliases: ["RiRi"] },
      { name: "Billie Eilish", aliases: ["Eilish"] },
      { name: "Dua Lipa", aliases: ["DL"] },
      { name: "Sia", aliases: ["Sia Furler"] },
      { name: "Beyonce", aliases: ["Queen Bey"] },
      { name: "Adele", aliases: ["Adkins"] },
      { name: "Lady Gaga", aliases: ["Gaga"] },
      { name: "Selena Gomez", aliases: ["Gomez Selena"] }
    ]
  },
  { id: "mus-best-selling-bts-albums", category: "Music", prompt: "Top 10 best-selling BTS albums of all time", hint: "Korean pop juggernaut",
    items: [
      { name: "Map of the Soul: 7", aliases: ["Map of the Soul 7"] },
      { name: "BE", aliases: ["BTS BE"] },
      { name: "Proof", aliases: ["BTS Proof"] },
      { name: "Love Yourself: Answer", aliases: ["BTS Love Yourself Answer"] },
      { name: "Love Yourself: Tear", aliases: ["BTS Love Yourself Tear"] },
      { name: "Map of the Soul: Persona", aliases: ["MOTS Persona"] },
      { name: "Love Yourself: Her", aliases: ["BTS Love Yourself Her"] },
      { name: "Wings", aliases: ["BTS Wings"] },
      { name: "You Never Walk Alone", aliases: ["BTS You Never Walk Alone"] },
      { name: "Butter (single)", aliases: ["BTS Butter"] }
    ]
  },
  { id: "mus-best-selling-singles-21st-century", category: "Music", prompt: "Top 10 best-selling singles of the 21st century", hint: "Streaming and download era",
    items: [
      { name: "Despacito", aliases: ["Luis Fonsi Despacito"] },
      { name: "Shape of You", aliases: ["Ed Sheeran Shape of You"] },
      { name: "Old Town Road", aliases: ["Lil Nas X Old Town Road"] },
      { name: "Uptown Funk", aliases: ["Mark Ronson Uptown Funk"] },
      { name: "Rolling in the Deep", aliases: ["Adele Rolling in the Deep"] },
      { name: "Closer", aliases: ["Chainsmokers Closer"] },
      { name: "Someone You Loved", aliases: ["Lewis Capaldi Someone You Loved"] },
      { name: "Hello", aliases: ["Adele Hello"] },
      { name: "Blinding Lights", aliases: ["Weeknd Blinding Lights"] },
      { name: "See You Again", aliases: ["Wiz Khalifa See You Again"] }
    ]
  },
  { id: "mus-most-1-billion-spotify", category: "Music", prompt: "Top 10 artists with most songs over 1 billion Spotify streams", hint: "Streaming superstars",
    items: [
      { name: "The Weeknd", aliases: ["Abel"] },
      { name: "Ed Sheeran", aliases: ["Sheeran"] },
      { name: "Drake", aliases: ["Drizzy"] },
      { name: "Justin Bieber", aliases: ["Bieber"] },
      { name: "Taylor Swift", aliases: ["TSwift"] },
      { name: "Post Malone", aliases: ["Posty"] },
      { name: "Ariana Grande", aliases: ["Grande"] },
      { name: "Billie Eilish", aliases: ["Eilish"] },
      { name: "Bruno Mars", aliases: ["Mars"] },
      { name: "Imagine Dragons", aliases: ["Imagine Dragons band"] }
    ]
  },
  { id: "mus-best-selling-christmas-singles", category: "Music", prompt: "Top 10 best-selling Christmas singles of all time", hint: "White Christmas leads by a mile",
    items: [
      { name: "White Christmas", aliases: ["Bing Crosby White Christmas"] },
      { name: "Silent Night", aliases: ["Bing Crosby Silent Night"] },
      { name: "Rudolph the Red-Nosed Reindeer", aliases: ["Rudolph"] },
      { name: "All I Want for Christmas Is You", aliases: ["Mariah Carey Christmas"] },
      { name: "Do They Know It's Christmas?", aliases: ["Band Aid Do They Know"] },
      { name: "Last Christmas", aliases: ["Wham Last Christmas"] },
      { name: "Mary's Boy Child", aliases: ["Boney M Marys Boy Child", "Harry Belafonte Marys Boy Child"] },
      { name: "Jingle Bell Rock", aliases: ["Bobby Helms Jingle Bell Rock"] },
      { name: "The Christmas Song", aliases: ["Nat King Cole Christmas Song"] },
      { name: "Wonderful Christmastime", aliases: ["Paul McCartney Wonderful Christmastime"] }
    ]
  },
  { id: "lit-best-selling-books-all-time", category: "Books", prompt: "Best-selling single-volume books of all time", hint: "Religious and classic novels dominate",
    items: [
      { name: "Don Quixote", aliases: ["Don Quichotte", "Cervantes"] },
      { name: "A Tale of Two Cities", aliases: ["Dickens"] },
      { name: "The Lord of the Rings", aliases: ["LOTR", "Tolkien"] },
      { name: "The Little Prince", aliases: ["Le Petit Prince", "Saint-Exupery"] },
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone", "HP1"] },
      { name: "And Then There Were None", aliases: ["Ten Little Indians", "Agatha Christie"] },
      { name: "Dream of the Red Chamber", aliases: ["Hong Lou Meng", "Cao Xueqin"] },
      { name: "The Hobbit", aliases: ["Tolkien"] },
      { name: "Alice's Adventures in Wonderland", aliases: ["Alice in Wonderland", "Carroll"] },
      { name: "The Lion, the Witch and the Wardrobe", aliases: ["Narnia", "C.S. Lewis"] }
    ]
  },
  { id: "lit-best-selling-book-series", category: "Books", prompt: "Best-selling book series of all time", hint: "From wizards to detectives",
    items: [
      { name: "Harry Potter", aliases: ["HP", "Rowling"] },
      { name: "Goosebumps", aliases: ["R.L. Stine"] },
      { name: "Perry Mason", aliases: ["Erle Stanley Gardner"] },
      { name: "Berenstain Bears", aliases: ["Berenstein Bears"] },
      { name: "Choose Your Own Adventure", aliases: ["CYOA"] },
      { name: "Robert Langdon", aliases: ["Dan Brown", "Da Vinci Code series"] },
      { name: "Diary of a Wimpy Kid", aliases: ["Wimpy Kid", "Jeff Kinney"] },
      { name: "Nancy Drew", aliases: ["Carolyn Keene"] },
      { name: "The Lord of the Rings", aliases: ["LOTR"] },
      { name: "Twilight", aliases: ["Stephenie Meyer"] }
    ]
  },
  { id: "lit-best-selling-fiction-novels", category: "Books", prompt: "Best-selling fiction novels (single volume)", hint: "Classics and modern bestsellers",
    items: [
      { name: "Don Quixote", aliases: ["Cervantes"] },
      { name: "A Tale of Two Cities", aliases: ["Dickens"] },
      { name: "The Little Prince", aliases: ["Le Petit Prince"] },
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone"] },
      { name: "And Then There Were None", aliases: ["Ten Little Indians"] },
      { name: "Dream of the Red Chamber", aliases: ["Hong Lou Meng"] },
      { name: "The Hobbit", aliases: ["Tolkien"] },
      { name: "Alice's Adventures in Wonderland", aliases: ["Alice in Wonderland"] },
      { name: "The Lion, the Witch and the Wardrobe", aliases: ["Narnia"] },
      { name: "The Da Vinci Code", aliases: ["Dan Brown"] }
    ]
  },
  { id: "lit-best-selling-authors-all-time", category: "Books", prompt: "Best-selling fiction authors of all time", hint: "Estimated total copies sold",
    items: [
      { name: "William Shakespeare", aliases: ["The Bard"] },
      { name: "Agatha Christie", aliases: ["Dame Agatha"] },
      { name: "Barbara Cartland", aliases: ["Dame Cartland"] },
      { name: "Danielle Steel", aliases: [] },
      { name: "Harold Robbins", aliases: [] },
      { name: "Georges Simenon", aliases: ["Simenon"] },
      { name: "Enid Blyton", aliases: [] },
      { name: "Sidney Sheldon", aliases: [] },
      { name: "J.K. Rowling", aliases: ["Rowling"] },
      { name: "Gilbert Patten", aliases: ["Burt L. Standish"] }
    ]
  },
  { id: "lit-best-selling-living-authors", category: "Books", prompt: "Best-selling living authors", hint: "Modern blockbuster writers",
    items: [
      { name: "Danielle Steel", aliases: [] },
      { name: "J.K. Rowling", aliases: ["Rowling"] },
      { name: "Stephen King", aliases: ["King"] },
      { name: "James Patterson", aliases: ["Patterson"] },
      { name: "Nora Roberts", aliases: ["J.D. Robb"] },
      { name: "Dean Koontz", aliases: [] },
      { name: "John Grisham", aliases: ["Grisham"] },
      { name: "Eiichiro Oda", aliases: ["One Piece"] },
      { name: "Dan Brown", aliases: [] },
      { name: "Paulo Coelho", aliases: ["Coelho"] }
    ]
  },
  { id: "lit-best-selling-stephen-king", category: "Books", prompt: "Best-selling Stephen King novels", hint: "Horror master's biggest hits",
    items: [
      { name: "The Shining", aliases: [] },
      { name: "It", aliases: ["IT"] },
      { name: "The Stand", aliases: [] },
      { name: "Carrie", aliases: [] },
      { name: "Misery", aliases: [] },
      { name: "Pet Sematary", aliases: [] },
      { name: "Salem's Lot", aliases: ["'Salem's Lot"] },
      { name: "The Green Mile", aliases: [] },
      { name: "11/22/63", aliases: ["11.22.63"] },
      { name: "The Dark Tower: The Gunslinger", aliases: ["The Gunslinger"] }
    ]
  },
  { id: "lit-best-selling-jk-rowling", category: "Books", prompt: "Best-selling J.K. Rowling books", hint: "All seven HP books plus extras",
    items: [
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone", "HP1"] },
      { name: "Harry Potter and the Chamber of Secrets", aliases: ["HP2"] },
      { name: "Harry Potter and the Prisoner of Azkaban", aliases: ["HP3"] },
      { name: "Harry Potter and the Goblet of Fire", aliases: ["HP4"] },
      { name: "Harry Potter and the Order of the Phoenix", aliases: ["HP5"] },
      { name: "Harry Potter and the Half-Blood Prince", aliases: ["HP6"] },
      { name: "Harry Potter and the Deathly Hallows", aliases: ["HP7"] },
      { name: "Fantastic Beasts and Where to Find Them", aliases: ["Fantastic Beasts"] },
      { name: "Quidditch Through the Ages", aliases: [] },
      { name: "The Tales of Beedle the Bard", aliases: ["Beedle the Bard"] }
    ]
  },
  { id: "lit-best-selling-dan-brown", category: "Books", prompt: "Best-selling Dan Brown novels", hint: "Robert Langdon and beyond",
    items: [
      { name: "The Da Vinci Code", aliases: ["Da Vinci Code"] },
      { name: "Angels & Demons", aliases: ["Angels and Demons"] },
      { name: "Inferno", aliases: [] },
      { name: "The Lost Symbol", aliases: [] },
      { name: "Origin", aliases: [] },
      { name: "Deception Point", aliases: [] },
      { name: "Digital Fortress", aliases: [] },
      { name: "The Solomon Key", aliases: [] },
      { name: "Wild Symphony", aliases: [] },
      { name: "187 Men to Avoid", aliases: ["Danielle Brown"] }
    ]
  },
  { id: "lit-best-selling-james-patterson", category: "Books", prompt: "Best-selling James Patterson series", hint: "Alex Cross and friends",
    items: [
      { name: "Alex Cross", aliases: [] },
      { name: "Women's Murder Club", aliases: ["1st to Die"] },
      { name: "Michael Bennett", aliases: [] },
      { name: "Maximum Ride", aliases: [] },
      { name: "Private", aliases: [] },
      { name: "Daniel X", aliases: [] },
      { name: "Witch & Wizard", aliases: ["Witch and Wizard"] },
      { name: "I, Michael Bennett", aliases: [] },
      { name: "Treasure Hunters", aliases: [] },
      { name: "Middle School", aliases: ["Middle School: The Worst Years of My Life"] }
    ]
  },
  { id: "lit-best-selling-agatha-christie", category: "Books", prompt: "Best-selling Agatha Christie novels", hint: "Mystery queen's biggest sellers",
    items: [
      { name: "And Then There Were None", aliases: ["Ten Little Indians"] },
      { name: "The Murder of Roger Ackroyd", aliases: [] },
      { name: "Murder on the Orient Express", aliases: [] },
      { name: "Death on the Nile", aliases: [] },
      { name: "The ABC Murders", aliases: [] },
      { name: "The Mysterious Affair at Styles", aliases: [] },
      { name: "Evil Under the Sun", aliases: [] },
      { name: "Curtain", aliases: ["Curtain: Poirot's Last Case"] },
      { name: "A Murder is Announced", aliases: [] },
      { name: "Five Little Pigs", aliases: [] }
    ]
  },
  { id: "lit-best-selling-john-grisham", category: "Books", prompt: "Best-selling John Grisham legal thrillers", hint: "Lawyers, trials, and conspiracies",
    items: [
      { name: "The Firm", aliases: [] },
      { name: "The Pelican Brief", aliases: [] },
      { name: "A Time to Kill", aliases: [] },
      { name: "The Client", aliases: [] },
      { name: "The Rainmaker", aliases: [] },
      { name: "The Chamber", aliases: [] },
      { name: "The Runaway Jury", aliases: [] },
      { name: "The Testament", aliases: [] },
      { name: "The Street Lawyer", aliases: [] },
      { name: "The Partner", aliases: [] }
    ]
  },
  { id: "lit-best-selling-french-authors", category: "Books", prompt: "Best-selling French authors of all time", hint: "From Verne to Levy",
    items: [
      { name: "Jules Verne", aliases: [] },
      { name: "Georges Simenon", aliases: ["Simenon"] },
      { name: "Antoine de Saint-Exupery", aliases: ["Saint-Exupery"] },
      { name: "Alexandre Dumas", aliases: ["Dumas"] },
      { name: "Victor Hugo", aliases: ["Hugo"] },
      { name: "Marc Levy", aliases: [] },
      { name: "Guillaume Musso", aliases: ["Musso"] },
      { name: "Rene Goscinny", aliases: ["Goscinny"] },
      { name: "Anna Gavalda", aliases: [] },
      { name: "Michel Houellebecq", aliases: ["Houellebecq"] }
    ]
  },
  { id: "lit-most-translated-books", category: "Books", prompt: "Most translated books in the world", hint: "Religious texts and classics",
    items: [
      { name: "The Bible", aliases: ["Holy Bible"] },
      { name: "The Little Prince", aliases: ["Le Petit Prince"] },
      { name: "The Adventures of Pinocchio", aliases: ["Pinocchio"] },
      { name: "The Pilgrim's Progress", aliases: [] },
      { name: "Alice's Adventures in Wonderland", aliases: ["Alice in Wonderland"] },
      { name: "The Adventures of Tintin", aliases: ["Tintin"] },
      { name: "The Way to Happiness", aliases: ["L. Ron Hubbard"] },
      { name: "Andersen's Fairy Tales", aliases: [] },
      { name: "Twenty Thousand Leagues Under the Sea", aliases: ["20,000 Leagues Under the Sea"] },
      { name: "The Quran", aliases: ["Koran"] }
    ]
  },
  { id: "lit-most-expensive-books-auction", category: "Books", prompt: "Most expensive books sold at auction", hint: "Millions for rare manuscripts",
    items: [
      { name: "Codex Leicester", aliases: ["Leonardo da Vinci's Codex"] },
      { name: "Sassoon Codex", aliases: ["Codex Sassoon"] },
      { name: "Magna Carta", aliases: [] },
      { name: "Bay Psalm Book", aliases: [] },
      { name: "St Cuthbert Gospel", aliases: [] },
      { name: "The Birds of America", aliases: ["Audubon"] },
      { name: "Rothschild Prayerbook", aliases: [] },
      { name: "First Folio (Shakespeare)", aliases: ["Shakespeare First Folio"] },
      { name: "Gospels of Henry the Lion", aliases: [] },
      { name: "Gutenberg Bible", aliases: [] }
    ]
  },
  { id: "lit-nobel-literature-recent", category: "Books", prompt: "Recent Nobel Prize in Literature winners (2015-2024)", hint: "Last decade of laureates",
    items: [
      { name: "Han Kang", aliases: ["2024 winner"] },
      { name: "Jon Fosse", aliases: ["2023 winner"] },
      { name: "Annie Ernaux", aliases: ["2022 winner"] },
      { name: "Abdulrazak Gurnah", aliases: ["2021 winner"] },
      { name: "Louise Gluck", aliases: ["2020 winner"] },
      { name: "Peter Handke", aliases: ["2019 winner"] },
      { name: "Olga Tokarczuk", aliases: ["2018 winner"] },
      { name: "Kazuo Ishiguro", aliases: ["2017 winner"] },
      { name: "Bob Dylan", aliases: ["2016 winner"] },
      { name: "Svetlana Alexievich", aliases: ["2015 winner"] }
    ]
  },
  { id: "lit-pulitzer-fiction-recent", category: "Books", prompt: "Recent Pulitzer Prize for Fiction winners (2015-2024)", hint: "American letters' top honor",
    items: [
      { name: "Night Watch by Jayne Anne Phillips", aliases: ["Night Watch", "Phillips"] },
      { name: "Demon Copperhead by Barbara Kingsolver / Trust by Hernan Diaz", aliases: ["Demon Copperhead", "Trust", "2023 winners"] },
      { name: "The Netanyahus by Joshua Cohen", aliases: ["The Netanyahus", "Cohen"] },
      { name: "The Night Watchman by Louise Erdrich", aliases: ["The Night Watchman", "Erdrich"] },
      { name: "The Nickel Boys by Colson Whitehead", aliases: ["The Nickel Boys", "Whitehead"] },
      { name: "The Overstory by Richard Powers", aliases: ["The Overstory", "Powers"] },
      { name: "Less by Andrew Sean Greer", aliases: ["Less", "Greer"] },
      { name: "The Underground Railroad by Colson Whitehead", aliases: ["The Underground Railroad"] },
      { name: "The Sympathizer by Viet Thanh Nguyen", aliases: ["The Sympathizer"] },
      { name: "All the Light We Cannot See by Anthony Doerr", aliases: ["All the Light We Cannot See"] }
    ]
  },
  { id: "lit-pulitzer-history-recent", category: "Books", prompt: "Recent Pulitzer Prize for History winners (2015-2024)", hint: "Best American history books",
    items: [
      { name: "No Right to an Honest Living by Jacqueline Jones", aliases: ["No Right to an Honest Living"] },
      { name: "Freedom's Dominion by Jefferson Cowie", aliases: ["Freedom's Dominion"] },
      { name: "Covered with Night by Nicole Eustace", aliases: ["Covered with Night"] },
      { name: "Cuba: An American History by Ada Ferrer", aliases: ["Cuba: An American History"] },
      { name: "Franchise by Marcia Chatelain", aliases: ["Franchise"] },
      { name: "Sandworm by Andy Greenberg / Sweet Taste of Liberty", aliases: ["Sweet Taste of Liberty"] },
      { name: "The New Negro by Jeffrey C. Stewart", aliases: ["The New Negro"] },
      { name: "A Nation Under Our Feet by Steven Hahn", aliases: [] },
      { name: "Custer's Trials by T.J. Stiles", aliases: ["Custer's Trials"] },
      { name: "Encounters at the Heart of the World by Elizabeth A. Fenn", aliases: ["Encounters at the Heart of the World"] }
    ]
  },
  { id: "lit-booker-prize-recent", category: "Books", prompt: "Recent Booker Prize winners (2015-2024)", hint: "Top English-language fiction",
    items: [
      { name: "Orbital by Samantha Harvey", aliases: ["Orbital"] },
      { name: "Prophet Song by Paul Lynch", aliases: ["Prophet Song"] },
      { name: "The Seven Moons of Maali Almeida by Shehan Karunatilaka", aliases: ["The Seven Moons of Maali Almeida"] },
      { name: "The Promise by Damon Galgut", aliases: ["The Promise"] },
      { name: "Shuggie Bain by Douglas Stuart", aliases: ["Shuggie Bain"] },
      { name: "Girl, Woman, Other by Bernardine Evaristo / The Testaments by Margaret Atwood", aliases: ["Girl Woman Other", "The Testaments"] },
      { name: "Milkman by Anna Burns", aliases: ["Milkman"] },
      { name: "Lincoln in the Bardo by George Saunders", aliases: ["Lincoln in the Bardo"] },
      { name: "The Sellout by Paul Beatty", aliases: ["The Sellout"] },
      { name: "A Brief History of Seven Killings by Marlon James", aliases: ["A Brief History of Seven Killings"] }
    ]
  },
  { id: "lit-goncourt-recent", category: "Books", prompt: "Recent Prix Goncourt winners (2015-2024)", hint: "France's top literary prize",
    items: [
      { name: "Houris by Kamel Daoud", aliases: ["Houris"] },
      { name: "Veiller sur elle by Jean-Baptiste Andrea", aliases: ["Veiller sur elle"] },
      { name: "Vivre vite by Brigitte Giraud", aliases: ["Vivre vite"] },
      { name: "La plus secrete memoire des hommes by Mohamed Mbougar Sarr", aliases: ["La plus secrete memoire des hommes"] },
      { name: "L'Anomalie by Herve Le Tellier", aliases: ["L'Anomalie", "The Anomaly"] },
      { name: "Tous les hommes n'habitent pas le monde de la meme facon by Jean-Paul Dubois", aliases: ["Tous les hommes n'habitent pas le monde de la meme facon"] },
      { name: "Leurs enfants apres eux by Nicolas Mathieu", aliases: ["Leurs enfants apres eux"] },
      { name: "L'Ordre du jour by Eric Vuillard", aliases: ["L'Ordre du jour", "The Order of the Day"] },
      { name: "Chanson douce by Leila Slimani", aliases: ["Chanson douce", "The Perfect Nanny"] },
      { name: "Boussole by Mathias Enard", aliases: ["Boussole", "Compass"] }
    ]
  },
  { id: "lit-hugo-best-novel-recent", category: "Books", prompt: "Recent Hugo Award Best Novel winners (2015-2024)", hint: "Top sci-fi/fantasy novels",
    items: [
      { name: "Some Desperate Glory by Emily Tesh", aliases: ["Some Desperate Glory"] },
      { name: "Translation State by Ann Leckie / Nettle & Bone", aliases: ["Nettle & Bone"] },
      { name: "A Desolation Called Peace by Arkady Martine", aliases: ["A Desolation Called Peace"] },
      { name: "Network Effect by Martha Wells", aliases: ["Network Effect"] },
      { name: "A Memory Called Empire by Arkady Martine", aliases: ["A Memory Called Empire"] },
      { name: "The Calculating Stars by Mary Robinette Kowal", aliases: ["The Calculating Stars"] },
      { name: "The Stone Sky by N.K. Jemisin", aliases: ["The Stone Sky"] },
      { name: "The Obelisk Gate by N.K. Jemisin", aliases: ["The Obelisk Gate"] },
      { name: "The Fifth Season by N.K. Jemisin", aliases: ["The Fifth Season"] },
      { name: "The Three-Body Problem by Liu Cixin", aliases: ["The Three-Body Problem"] }
    ]
  },
  { id: "lit-nebula-best-novel-recent", category: "Books", prompt: "Recent Nebula Award Best Novel winners", hint: "Top sci-fi/fantasy honors",
    items: [
      { name: "The Saint of Bright Doors by Vajra Chandrasekera", aliases: ["The Saint of Bright Doors"] },
      { name: "Babel by R.F. Kuang", aliases: ["Babel"] },
      { name: "A Master of Djinn by P. Djeli Clark", aliases: ["A Master of Djinn"] },
      { name: "Network Effect by Martha Wells", aliases: ["Network Effect"] },
      { name: "A Song for a New Day by Sarah Pinsker", aliases: ["A Song for a New Day"] },
      { name: "The Calculating Stars by Mary Robinette Kowal", aliases: ["The Calculating Stars"] },
      { name: "The Stone Sky by N.K. Jemisin", aliases: ["The Stone Sky"] },
      { name: "All the Birds in the Sky by Charlie Jane Anders", aliases: ["All the Birds in the Sky"] },
      { name: "Uprooted by Naomi Novik", aliases: ["Uprooted"] },
      { name: "Annihilation by Jeff VanderMeer", aliases: ["Annihilation"] }
    ]
  },
  { id: "lit-most-banned-books-us", category: "Books", prompt: "Most banned/challenged books in US schools", hint: "ALA top challenged titles",
    items: [
      { name: "Gender Queer", aliases: ["Maia Kobabe"] },
      { name: "All Boys Aren't Blue", aliases: ["George M. Johnson"] },
      { name: "The Bluest Eye", aliases: ["Toni Morrison"] },
      { name: "Flamer", aliases: ["Mike Curato"] },
      { name: "To Kill a Mockingbird", aliases: ["Harper Lee"] },
      { name: "Looking for Alaska", aliases: ["John Green"] },
      { name: "The Perks of Being a Wallflower", aliases: ["Stephen Chbosky"] },
      { name: "Lawn Boy", aliases: ["Jonathan Evison"] },
      { name: "Out of Darkness", aliases: ["Ashley Hope Perez"] },
      { name: "The Hate U Give", aliases: ["Angie Thomas"] }
    ]
  },
  { id: "lit-longest-shakespeare-plays", category: "Books", prompt: "Longest Shakespeare plays (by line count)", hint: "Tragedies dominate the top",
    items: [
      { name: "Hamlet", aliases: [] },
      { name: "Richard III", aliases: [] },
      { name: "Coriolanus", aliases: [] },
      { name: "Cymbeline", aliases: [] },
      { name: "Henry V", aliases: [] },
      { name: "Troilus and Cressida", aliases: [] },
      { name: "Antony and Cleopatra", aliases: [] },
      { name: "Othello", aliases: [] },
      { name: "Henry VIII", aliases: [] },
      { name: "King Lear", aliases: [] }
    ]
  },
  { id: "lit-most-performed-shakespeare", category: "Books", prompt: "Most-performed Shakespeare plays", hint: "Classics on every stage",
    items: [
      { name: "A Midsummer Night's Dream", aliases: ["Midsummer"] },
      { name: "Romeo and Juliet", aliases: [] },
      { name: "Hamlet", aliases: [] },
      { name: "Macbeth", aliases: [] },
      { name: "Twelfth Night", aliases: [] },
      { name: "Much Ado About Nothing", aliases: [] },
      { name: "The Tempest", aliases: [] },
      { name: "Othello", aliases: [] },
      { name: "King Lear", aliases: [] },
      { name: "The Taming of the Shrew", aliases: [] }
    ]
  },
  { id: "lit-best-selling-harry-potter", category: "Books", prompt: "Best-selling Harry Potter books", hint: "All seven plus extras",
    items: [
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone", "HP1"] },
      { name: "Harry Potter and the Chamber of Secrets", aliases: ["HP2"] },
      { name: "Harry Potter and the Prisoner of Azkaban", aliases: ["HP3"] },
      { name: "Harry Potter and the Goblet of Fire", aliases: ["HP4"] },
      { name: "Harry Potter and the Order of the Phoenix", aliases: ["HP5"] },
      { name: "Harry Potter and the Half-Blood Prince", aliases: ["HP6"] },
      { name: "Harry Potter and the Deathly Hallows", aliases: ["HP7"] },
      { name: "Harry Potter and the Cursed Child", aliases: ["Cursed Child"] },
      { name: "Fantastic Beasts and Where to Find Them", aliases: [] },
      { name: "The Tales of Beedle the Bard", aliases: ["Beedle the Bard"] }
    ]
  },
  { id: "lit-best-selling-lotr-books", category: "Books", prompt: "Best-selling Tolkien Middle-earth books", hint: "Hobbits and elves",
    items: [
      { name: "The Hobbit", aliases: [] },
      { name: "The Lord of the Rings", aliases: ["LOTR (single volume)"] },
      { name: "The Fellowship of the Ring", aliases: ["LOTR Book 1"] },
      { name: "The Two Towers", aliases: ["LOTR Book 2"] },
      { name: "The Return of the King", aliases: ["LOTR Book 3"] },
      { name: "The Silmarillion", aliases: [] },
      { name: "Unfinished Tales", aliases: [] },
      { name: "The Children of Hurin", aliases: ["Children of Hurin"] },
      { name: "Beren and Luthien", aliases: [] },
      { name: "The Fall of Gondolin", aliases: [] }
    ]
  },
  { id: "lit-best-selling-cookbook-authors", category: "Books", prompt: "Best-selling cookbook authors of all time", hint: "Recipe royalty",
    items: [
      { name: "Betty Crocker", aliases: [] },
      { name: "Irma Rombauer", aliases: ["Joy of Cooking"] },
      { name: "Julia Child", aliases: [] },
      { name: "Jamie Oliver", aliases: [] },
      { name: "Martha Stewart", aliases: [] },
      { name: "Ina Garten", aliases: ["Barefoot Contessa"] },
      { name: "Nigella Lawson", aliases: [] },
      { name: "Rachael Ray", aliases: [] },
      { name: "Delia Smith", aliases: [] },
      { name: "Mary Berry", aliases: [] }
    ]
  },
  { id: "lit-best-selling-memoirs", category: "Books", prompt: "Best-selling memoirs of all time", hint: "Personal stories that sold millions",
    items: [
      { name: "The Diary of a Young Girl by Anne Frank", aliases: ["The Diary of Anne Frank", "Anne Frank"] },
      { name: "I Know Why the Caged Bird Sings by Maya Angelou", aliases: ["I Know Why the Caged Bird Sings"] },
      { name: "Becoming by Michelle Obama", aliases: ["Becoming"] },
      { name: "Eat, Pray, Love by Elizabeth Gilbert", aliases: ["Eat Pray Love"] },
      { name: "Wild by Cheryl Strayed", aliases: ["Wild"] },
      { name: "Long Walk to Freedom by Nelson Mandela", aliases: ["Long Walk to Freedom"] },
      { name: "Night by Elie Wiesel", aliases: ["Night"] },
      { name: "Tuesdays with Morrie by Mitch Albom", aliases: ["Tuesdays with Morrie"] },
      { name: "Educated by Tara Westover", aliases: ["Educated"] },
      { name: "Angela's Ashes by Frank McCourt", aliases: ["Angela's Ashes"] }
    ]
  },
  { id: "lit-best-selling-thrillers", category: "Books", prompt: "Best-selling thriller novels of all time", hint: "Page-turners that hooked millions",
    items: [
      { name: "The Da Vinci Code by Dan Brown", aliases: ["The Da Vinci Code"] },
      { name: "The Hunt for Red October by Tom Clancy", aliases: ["The Hunt for Red October"] },
      { name: "The Girl with the Dragon Tattoo by Stieg Larsson", aliases: ["The Girl with the Dragon Tattoo"] },
      { name: "Gone Girl by Gillian Flynn", aliases: ["Gone Girl"] },
      { name: "The Silence of the Lambs by Thomas Harris", aliases: ["The Silence of the Lambs"] },
      { name: "The Firm by John Grisham", aliases: ["The Firm"] },
      { name: "Jurassic Park by Michael Crichton", aliases: ["Jurassic Park"] },
      { name: "Angels & Demons by Dan Brown", aliases: ["Angels and Demons"] },
      { name: "The Bourne Identity by Robert Ludlum", aliases: ["The Bourne Identity"] },
      { name: "Patriot Games by Tom Clancy", aliases: ["Patriot Games"] }
    ]
  },
  { id: "lit-best-selling-romance-novels", category: "Books", prompt: "Best-selling romance novels", hint: "Love stories with massive sales",
    items: [
      { name: "Fifty Shades of Grey by E.L. James", aliases: ["50 Shades of Grey"] },
      { name: "The Bridges of Madison County by Robert James Waller", aliases: ["The Bridges of Madison County"] },
      { name: "Twilight by Stephenie Meyer", aliases: ["Twilight"] },
      { name: "Outlander by Diana Gabaldon", aliases: ["Outlander"] },
      { name: "The Notebook by Nicholas Sparks", aliases: ["The Notebook"] },
      { name: "Gone with the Wind by Margaret Mitchell", aliases: ["Gone with the Wind"] },
      { name: "Pride and Prejudice by Jane Austen", aliases: ["Pride and Prejudice"] },
      { name: "Me Before You by Jojo Moyes", aliases: ["Me Before You"] },
      { name: "Forever by Judy Blume", aliases: [] },
      { name: "It Ends with Us by Colleen Hoover", aliases: ["It Ends with Us"] }
    ]
  },
  { id: "lit-best-selling-scifi-novels", category: "Books", prompt: "Best-selling science fiction novels", hint: "Genre titans",
    items: [
      { name: "Dune by Frank Herbert", aliases: ["Dune"] },
      { name: "1984 by George Orwell", aliases: ["Nineteen Eighty-Four"] },
      { name: "Brave New World by Aldous Huxley", aliases: ["Brave New World"] },
      { name: "Fahrenheit 451 by Ray Bradbury", aliases: ["Fahrenheit 451"] },
      { name: "Ender's Game by Orson Scott Card", aliases: ["Ender's Game"] },
      { name: "The Hitchhiker's Guide to the Galaxy by Douglas Adams", aliases: ["Hitchhiker's Guide"] },
      { name: "Foundation by Isaac Asimov", aliases: ["Foundation"] },
      { name: "Stranger in a Strange Land by Robert Heinlein", aliases: ["Stranger in a Strange Land"] },
      { name: "The Martian by Andy Weir", aliases: ["The Martian"] },
      { name: "Jurassic Park by Michael Crichton", aliases: ["Jurassic Park"] }
    ]
  },
  { id: "lit-best-selling-fantasy-novels", category: "Books", prompt: "Best-selling fantasy novels", hint: "Wizards, rings, and dragons",
    items: [
      { name: "The Lord of the Rings by J.R.R. Tolkien", aliases: ["LOTR"] },
      { name: "The Hobbit by J.R.R. Tolkien", aliases: ["The Hobbit"] },
      { name: "Harry Potter and the Philosopher's Stone by J.K. Rowling", aliases: ["HP1"] },
      { name: "The Lion, the Witch and the Wardrobe by C.S. Lewis", aliases: ["Narnia"] },
      { name: "A Game of Thrones by George R.R. Martin", aliases: ["GoT"] },
      { name: "The Name of the Wind by Patrick Rothfuss", aliases: ["The Name of the Wind"] },
      { name: "The Way of Kings by Brandon Sanderson", aliases: ["The Way of Kings"] },
      { name: "The Wheel of Time: The Eye of the World by Robert Jordan", aliases: ["The Eye of the World"] },
      { name: "American Gods by Neil Gaiman", aliases: ["American Gods"] },
      { name: "Mistborn by Brandon Sanderson", aliases: ["Mistborn"] }
    ]
  },
  { id: "lit-best-selling-ya-novels", category: "Books", prompt: "Best-selling young adult novels", hint: "Teen blockbusters",
    items: [
      { name: "The Hunger Games by Suzanne Collins", aliases: ["The Hunger Games"] },
      { name: "Twilight by Stephenie Meyer", aliases: ["Twilight"] },
      { name: "The Fault in Our Stars by John Green", aliases: ["TFiOS"] },
      { name: "Divergent by Veronica Roth", aliases: ["Divergent"] },
      { name: "Catching Fire by Suzanne Collins", aliases: [] },
      { name: "Mockingjay by Suzanne Collins", aliases: [] },
      { name: "New Moon by Stephenie Meyer", aliases: [] },
      { name: "Eclipse by Stephenie Meyer", aliases: [] },
      { name: "Breaking Dawn by Stephenie Meyer", aliases: [] },
      { name: "The Maze Runner by James Dashner", aliases: ["The Maze Runner"] }
    ]
  },
  { id: "lit-best-selling-crime-novels", category: "Books", prompt: "Best-selling crime novels of all time", hint: "Detectives and mysteries",
    items: [
      { name: "And Then There Were None by Agatha Christie", aliases: ["Ten Little Indians"] },
      { name: "The Murder of Roger Ackroyd by Agatha Christie", aliases: [] },
      { name: "The Girl with the Dragon Tattoo by Stieg Larsson", aliases: [] },
      { name: "The Godfather by Mario Puzo", aliases: [] },
      { name: "In Cold Blood by Truman Capote", aliases: [] },
      { name: "The Silence of the Lambs by Thomas Harris", aliases: [] },
      { name: "The Da Vinci Code by Dan Brown", aliases: [] },
      { name: "Gone Girl by Gillian Flynn", aliases: [] },
      { name: "Murder on the Orient Express by Agatha Christie", aliases: [] },
      { name: "The Big Sleep by Raymond Chandler", aliases: [] }
    ]
  },
  { id: "lit-most-printed-books-earth", category: "Books", prompt: "Most-printed books in history", hint: "Religious and political texts top the list",
    items: [
      { name: "The Bible", aliases: ["Holy Bible"] },
      { name: "Quotations from Chairman Mao Tse-tung", aliases: ["Little Red Book", "Mao's Little Red Book"] },
      { name: "Quran", aliases: ["Koran"] },
      { name: "Xinhua Zidian", aliases: ["Chinese dictionary"] },
      { name: "Book of Mormon", aliases: [] },
      { name: "Don Quixote", aliases: [] },
      { name: "A Tale of Two Cities", aliases: [] },
      { name: "The Lord of the Rings", aliases: ["LOTR"] },
      { name: "The Little Prince", aliases: ["Le Petit Prince"] },
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone"] }
    ]
  },
  { id: "lit-greatest-american-novels", category: "Books", prompt: "Greatest American novels (per major polls)", hint: "Classic US literature",
    items: [
      { name: "The Great Gatsby by F. Scott Fitzgerald", aliases: ["The Great Gatsby"] },
      { name: "To Kill a Mockingbird by Harper Lee", aliases: ["To Kill a Mockingbird"] },
      { name: "Moby-Dick by Herman Melville", aliases: ["Moby Dick"] },
      { name: "The Adventures of Huckleberry Finn by Mark Twain", aliases: ["Huckleberry Finn"] },
      { name: "Beloved by Toni Morrison", aliases: ["Beloved"] },
      { name: "The Sound and the Fury by William Faulkner", aliases: ["The Sound and the Fury"] },
      { name: "The Grapes of Wrath by John Steinbeck", aliases: ["The Grapes of Wrath"] },
      { name: "Invisible Man by Ralph Ellison", aliases: ["Invisible Man"] },
      { name: "The Catcher in the Rye by J.D. Salinger", aliases: ["The Catcher in the Rye"] },
      { name: "Lolita by Vladimir Nabokov", aliases: ["Lolita"] }
    ]
  },
  { id: "lit-greatest-british-novels", category: "Books", prompt: "Greatest British novels (per major polls)", hint: "Classic UK literature",
    items: [
      { name: "Middlemarch by George Eliot", aliases: ["Middlemarch"] },
      { name: "To the Lighthouse by Virginia Woolf", aliases: ["To the Lighthouse"] },
      { name: "Mrs Dalloway by Virginia Woolf", aliases: ["Mrs Dalloway"] },
      { name: "Great Expectations by Charles Dickens", aliases: ["Great Expectations"] },
      { name: "Jane Eyre by Charlotte Bronte", aliases: ["Jane Eyre"] },
      { name: "Wuthering Heights by Emily Bronte", aliases: ["Wuthering Heights"] },
      { name: "Bleak House by Charles Dickens", aliases: ["Bleak House"] },
      { name: "Pride and Prejudice by Jane Austen", aliases: ["Pride and Prejudice"] },
      { name: "1984 by George Orwell", aliases: ["Nineteen Eighty-Four"] },
      { name: "Vanity Fair by William Makepeace Thackeray", aliases: ["Vanity Fair"] }
    ]
  },
  { id: "lit-longest-novels-ever", category: "Books", prompt: "Longest novels ever published (word count)", hint: "Massive tomes",
    items: [
      { name: "Artamene ou le Grand Cyrus", aliases: ["Artamene"] },
      { name: "Venmurasu by B. Jeyamohan", aliases: ["Venmurasu"] },
      { name: "Marienbad My Love by Mark Leach", aliases: [] },
      { name: "In Search of Lost Time by Marcel Proust", aliases: ["Remembrance of Things Past", "A la recherche du temps perdu"] },
      { name: "Sironia, Texas by Madison Cooper", aliases: [] },
      { name: "Poor Fellow My Country by Xavier Herbert", aliases: [] },
      { name: "Atlas Shrugged by Ayn Rand", aliases: ["Atlas Shrugged"] },
      { name: "War and Peace by Leo Tolstoy", aliases: ["War and Peace"] },
      { name: "A Suitable Boy by Vikram Seth", aliases: ["A Suitable Boy"] },
      { name: "Les Miserables by Victor Hugo", aliases: ["Les Miserables"] }
    ]
  },
  { id: "lit-best-selling-manga-series", category: "Books", prompt: "Best-selling manga series of all time", hint: "Japanese comic juggernauts",
    items: [
      { name: "One Piece", aliases: ["Eiichiro Oda"] },
      { name: "Golgo 13", aliases: [] },
      { name: "Dragon Ball", aliases: ["Akira Toriyama"] },
      { name: "Naruto", aliases: [] },
      { name: "Detective Conan", aliases: ["Case Closed"] },
      { name: "KochiKame", aliases: ["Kochira Katsushika-ku Kameari Koen-mae Hashutsujo"] },
      { name: "Doraemon", aliases: [] },
      { name: "Slam Dunk", aliases: [] },
      { name: "Demon Slayer", aliases: ["Kimetsu no Yaiba"] },
      { name: "Astro Boy", aliases: ["Mighty Atom", "Tetsuwan Atom"] }
    ]
  },
  { id: "lit-most-adapted-novels-film", category: "Books", prompt: "Most adapted novels to film", hint: "Books that became many movies",
    items: [
      { name: "Dracula by Bram Stoker", aliases: ["Dracula"] },
      { name: "A Christmas Carol by Charles Dickens", aliases: ["A Christmas Carol"] },
      { name: "Frankenstein by Mary Shelley", aliases: ["Frankenstein"] },
      { name: "Alice's Adventures in Wonderland by Lewis Carroll", aliases: ["Alice in Wonderland"] },
      { name: "Romeo and Juliet by William Shakespeare", aliases: ["Romeo and Juliet"] },
      { name: "Hamlet by William Shakespeare", aliases: ["Hamlet"] },
      { name: "The Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson", aliases: ["Jekyll and Hyde"] },
      { name: "Les Miserables by Victor Hugo", aliases: ["Les Miserables"] },
      { name: "Oliver Twist by Charles Dickens", aliases: ["Oliver Twist"] },
      { name: "The Three Musketeers by Alexandre Dumas", aliases: ["The Three Musketeers"] }
    ]
  },
  { id: "lit-highest-grossing-book-films", category: "Books", prompt: "Highest-grossing book-to-film adaptations", hint: "Box office champions from page to screen",
    items: [
      { name: "The Lord of the Rings: The Return of the King", aliases: ["LOTR: Return of the King"] },
      { name: "Harry Potter and the Deathly Hallows Part 2", aliases: ["HP Deathly Hallows 2"] },
      { name: "The Hobbit: An Unexpected Journey", aliases: [] },
      { name: "Harry Potter and the Philosopher's Stone", aliases: ["Sorcerer's Stone film"] },
      { name: "The Hunger Games: Catching Fire", aliases: [] },
      { name: "Jurassic Park", aliases: [] },
      { name: "The Da Vinci Code", aliases: [] },
      { name: "Forrest Gump", aliases: [] },
      { name: "Twilight: Breaking Dawn Part 2", aliases: [] },
      { name: "Fifty Shades of Grey", aliases: ["50 Shades of Grey"] }
    ]
  },
  { id: "lit-best-selling-tom-clancy", category: "Books", prompt: "Best-selling Tom Clancy novels", hint: "Jack Ryan and military thrillers",
    items: [
      { name: "The Hunt for Red October", aliases: [] },
      { name: "Patriot Games", aliases: [] },
      { name: "Clear and Present Danger", aliases: [] },
      { name: "The Sum of All Fears", aliases: [] },
      { name: "Rainbow Six", aliases: [] },
      { name: "Executive Orders", aliases: [] },
      { name: "Debt of Honor", aliases: [] },
      { name: "Red Storm Rising", aliases: [] },
      { name: "The Cardinal of the Kremlin", aliases: [] },
      { name: "Without Remorse", aliases: [] }
    ]
  },
  { id: "lit-best-selling-self-help", category: "Books", prompt: "Best-selling self-help books of all time", hint: "Personal development classics",
    items: [
      { name: "How to Win Friends and Influence People by Dale Carnegie", aliases: ["How to Win Friends and Influence People"] },
      { name: "The 7 Habits of Highly Effective People by Stephen Covey", aliases: ["7 Habits"] },
      { name: "Think and Grow Rich by Napoleon Hill", aliases: ["Think and Grow Rich"] },
      { name: "The Power of Positive Thinking by Norman Vincent Peale", aliases: [] },
      { name: "Rich Dad Poor Dad by Robert Kiyosaki", aliases: ["Rich Dad Poor Dad"] },
      { name: "The Secret by Rhonda Byrne", aliases: ["The Secret"] },
      { name: "The Four Agreements by Don Miguel Ruiz", aliases: ["The Four Agreements"] },
      { name: "Awaken the Giant Within by Tony Robbins", aliases: [] },
      { name: "The Subtle Art of Not Giving a F*ck by Mark Manson", aliases: ["The Subtle Art of Not Giving a Fck"] },
      { name: "Atomic Habits by James Clear", aliases: ["Atomic Habits"] }
    ]
  },
  { id: "lit-best-selling-childrens-books", category: "Books", prompt: "Best-selling children's books of all time", hint: "From hungry caterpillars to wizards",
    items: [
      { name: "The Tale of Peter Rabbit by Beatrix Potter", aliases: ["Peter Rabbit"] },
      { name: "The Very Hungry Caterpillar by Eric Carle", aliases: ["The Very Hungry Caterpillar"] },
      { name: "Charlotte's Web by E.B. White", aliases: ["Charlotte's Web"] },
      { name: "Where the Wild Things Are by Maurice Sendak", aliases: ["Where the Wild Things Are"] },
      { name: "Goodnight Moon by Margaret Wise Brown", aliases: ["Goodnight Moon"] },
      { name: "Green Eggs and Ham by Dr. Seuss", aliases: ["Green Eggs and Ham"] },
      { name: "The Cat in the Hat by Dr. Seuss", aliases: ["The Cat in the Hat"] },
      { name: "The Gruffalo by Julia Donaldson", aliases: ["The Gruffalo"] },
      { name: "Guess How Much I Love You by Sam McBratney", aliases: ["Guess How Much I Love You"] },
      { name: "The Giving Tree by Shel Silverstein", aliases: ["The Giving Tree"] }
    ]
  },
  { id: "lit-best-selling-non-fiction", category: "Books", prompt: "Best-selling non-fiction books of all time", hint: "Educational and inspirational hits",
    items: [
      { name: "Quotations from Chairman Mao Tse-tung", aliases: ["Little Red Book"] },
      { name: "Xinhua Zidian", aliases: ["Chinese dictionary"] },
      { name: "The American Spelling Book by Noah Webster", aliases: ["Webster's Speller"] },
      { name: "Diary of a Young Girl by Anne Frank", aliases: ["Anne Frank"] },
      { name: "A Brief History of Time by Stephen Hawking", aliases: ["A Brief History of Time"] },
      { name: "You Can Heal Your Life by Louise Hay", aliases: ["You Can Heal Your Life"] },
      { name: "Think and Grow Rich by Napoleon Hill", aliases: [] },
      { name: "Common Sense by Thomas Paine", aliases: ["Common Sense"] },
      { name: "How to Win Friends and Influence People by Dale Carnegie", aliases: [] },
      { name: "What to Expect When You're Expecting by Heidi Murkoff", aliases: [] }
    ]
  },
  { id: "lit-best-selling-biographies", category: "Books", prompt: "Best-selling biographies/autobiographies", hint: "Famous lives chronicled",
    items: [
      { name: "Diary of a Young Girl by Anne Frank", aliases: ["The Diary of Anne Frank"] },
      { name: "Long Walk to Freedom by Nelson Mandela", aliases: [] },
      { name: "I Know Why the Caged Bird Sings by Maya Angelou", aliases: [] },
      { name: "The Autobiography of Malcolm X", aliases: ["Malcolm X autobiography"] },
      { name: "Becoming by Michelle Obama", aliases: ["Becoming"] },
      { name: "Steve Jobs by Walter Isaacson", aliases: ["Steve Jobs biography"] },
      { name: "A Promised Land by Barack Obama", aliases: ["A Promised Land"] },
      { name: "Spare by Prince Harry", aliases: ["Spare"] },
      { name: "Open by Andre Agassi", aliases: [] },
      { name: "My Life by Bill Clinton", aliases: ["My Life"] }
    ]
  },
  { id: "lit-best-selling-stieg-larsson", category: "Books", prompt: "Best-selling Stieg Larsson Millennium series books", hint: "Lisbeth Salander novels",
    items: [
      { name: "The Girl with the Dragon Tattoo", aliases: ["Man som hatar kvinnor"] },
      { name: "The Girl Who Played with Fire", aliases: [] },
      { name: "The Girl Who Kicked the Hornet's Nest", aliases: [] },
      { name: "The Girl in the Spider's Web", aliases: ["David Lagercrantz"] },
      { name: "The Girl Who Takes an Eye for an Eye", aliases: [] },
      { name: "The Girl Who Lived Twice", aliases: [] },
      { name: "The Girl in the Eagle's Talons", aliases: ["Karin Smirnoff"] },
      { name: "Millennium: The Graphic Novel", aliases: [] },
      { name: "Stieg: The Crusading Journalist Behind The Girl with the Dragon Tattoo", aliases: [] },
      { name: "On Stieg Larsson", aliases: [] }
    ]
  },
  { id: "lit-best-selling-paulo-coelho", category: "Books", prompt: "Best-selling Paulo Coelho books", hint: "The Alchemist and others",
    items: [
      { name: "The Alchemist", aliases: ["O Alquimista"] },
      { name: "Brida", aliases: [] },
      { name: "The Pilgrimage", aliases: [] },
      { name: "Eleven Minutes", aliases: ["Onze Minutos"] },
      { name: "The Witch of Portobello", aliases: [] },
      { name: "Veronika Decides to Die", aliases: [] },
      { name: "By the River Piedra I Sat Down and Wept", aliases: [] },
      { name: "The Zahir", aliases: [] },
      { name: "The Fifth Mountain", aliases: [] },
      { name: "Adultery", aliases: [] }
    ]
  },
  { id: "lit-best-selling-roald-dahl", category: "Books", prompt: "Best-selling Roald Dahl books", hint: "Children's favorites with dark wit",
    items: [
      { name: "Charlie and the Chocolate Factory", aliases: [] },
      { name: "Matilda", aliases: [] },
      { name: "James and the Giant Peach", aliases: [] },
      { name: "The BFG", aliases: ["Big Friendly Giant"] },
      { name: "Fantastic Mr Fox", aliases: ["Fantastic Mr. Fox"] },
      { name: "The Witches", aliases: [] },
      { name: "George's Marvellous Medicine", aliases: ["George's Marvelous Medicine"] },
      { name: "The Twits", aliases: [] },
      { name: "Danny, the Champion of the World", aliases: [] },
      { name: "Charlie and the Great Glass Elevator", aliases: [] }
    ]
  },
  { id: "lit-best-selling-george-rr-martin", category: "Books", prompt: "Best-selling George R.R. Martin books", hint: "Westeros and beyond",
    items: [
      { name: "A Game of Thrones", aliases: ["GoT"] },
      { name: "A Clash of Kings", aliases: [] },
      { name: "A Storm of Swords", aliases: [] },
      { name: "A Feast for Crows", aliases: [] },
      { name: "A Dance with Dragons", aliases: [] },
      { name: "Fire & Blood", aliases: ["Fire and Blood"] },
      { name: "The World of Ice & Fire", aliases: [] },
      { name: "A Knight of the Seven Kingdoms", aliases: [] },
      { name: "Wild Cards", aliases: [] },
      { name: "Tuf Voyaging", aliases: [] }
    ]
  },
  { id: "lit-best-selling-suzanne-collins", category: "Books", prompt: "Best-selling Suzanne Collins novels", hint: "The Hunger Games and more",
    items: [
      { name: "The Hunger Games", aliases: [] },
      { name: "Catching Fire", aliases: [] },
      { name: "Mockingjay", aliases: [] },
      { name: "The Ballad of Songbirds and Snakes", aliases: [] },
      { name: "Sunrise on the Reaping", aliases: [] },
      { name: "Gregor the Overlander", aliases: [] },
      { name: "Gregor and the Prophecy of Bane", aliases: [] },
      { name: "Gregor and the Curse of the Warmbloods", aliases: [] },
      { name: "Gregor and the Marks of Secret", aliases: [] },
      { name: "Gregor and the Code of Claw", aliases: [] }
    ]
  },
  { id: "lit-best-selling-george-orwell", category: "Books", prompt: "Best-selling George Orwell books", hint: "Dystopian classics",
    items: [
      { name: "1984", aliases: ["Nineteen Eighty-Four"] },
      { name: "Animal Farm", aliases: [] },
      { name: "Homage to Catalonia", aliases: [] },
      { name: "The Road to Wigan Pier", aliases: [] },
      { name: "Down and Out in Paris and London", aliases: [] },
      { name: "Burmese Days", aliases: [] },
      { name: "Keep the Aspidistra Flying", aliases: [] },
      { name: "Coming Up for Air", aliases: [] },
      { name: "A Clergyman's Daughter", aliases: [] },
      { name: "Why I Write", aliases: [] }
    ]
  },
  { id: "lit-best-selling-charles-dickens", category: "Books", prompt: "Best-selling Charles Dickens novels", hint: "Victorian-era masterworks",
    items: [
      { name: "A Tale of Two Cities", aliases: [] },
      { name: "A Christmas Carol", aliases: [] },
      { name: "Oliver Twist", aliases: [] },
      { name: "David Copperfield", aliases: [] },
      { name: "Great Expectations", aliases: [] },
      { name: "Bleak House", aliases: [] },
      { name: "Nicholas Nickleby", aliases: [] },
      { name: "The Pickwick Papers", aliases: [] },
      { name: "Hard Times", aliases: [] },
      { name: "Little Dorrit", aliases: [] }
    ]
  },
  { id: "lit-best-selling-jane-austen", category: "Books", prompt: "Best-selling Jane Austen novels", hint: "Regency-era romance classics",
    items: [
      { name: "Pride and Prejudice", aliases: [] },
      { name: "Sense and Sensibility", aliases: [] },
      { name: "Emma", aliases: [] },
      { name: "Mansfield Park", aliases: [] },
      { name: "Persuasion", aliases: [] },
      { name: "Northanger Abbey", aliases: [] },
      { name: "Lady Susan", aliases: [] },
      { name: "Sanditon", aliases: [] },
      { name: "The Watsons", aliases: [] },
      { name: "Love and Friendship", aliases: ["Love and Freindship"] }
    ]
  },
  { id: "lit-best-selling-victor-hugo", category: "Books", prompt: "Best-selling Victor Hugo works", hint: "French literary giant",
    items: [
      { name: "Les Miserables", aliases: [] },
      { name: "The Hunchback of Notre-Dame", aliases: ["Notre-Dame de Paris"] },
      { name: "Toilers of the Sea", aliases: ["Les Travailleurs de la mer"] },
      { name: "The Man Who Laughs", aliases: ["L'Homme qui rit"] },
      { name: "Ninety-Three", aliases: ["Quatrevingt-treize"] },
      { name: "The Last Day of a Condemned Man", aliases: [] },
      { name: "Claude Gueux", aliases: [] },
      { name: "Bug-Jargal", aliases: [] },
      { name: "Han d'Islande", aliases: ["Han of Iceland"] },
      { name: "Les Contemplations", aliases: [] }
    ]
  },
  { id: "lit-best-selling-jules-verne", category: "Books", prompt: "Best-selling Jules Verne novels", hint: "Adventure and sci-fi pioneer",
    items: [
      { name: "Twenty Thousand Leagues Under the Sea", aliases: ["20,000 Leagues Under the Sea"] },
      { name: "Around the World in Eighty Days", aliases: ["Around the World in 80 Days"] },
      { name: "Journey to the Center of the Earth", aliases: [] },
      { name: "From the Earth to the Moon", aliases: [] },
      { name: "The Mysterious Island", aliases: [] },
      { name: "Michael Strogoff", aliases: [] },
      { name: "Five Weeks in a Balloon", aliases: [] },
      { name: "In Search of the Castaways", aliases: ["The Children of Captain Grant"] },
      { name: "The Begum's Fortune", aliases: [] },
      { name: "Robur the Conqueror", aliases: [] }
    ]
  },
  { id: "lit-best-selling-eiichiro-oda", category: "Books", prompt: "Best-selling One Piece arcs/volumes", hint: "Eiichiro Oda's juggernaut",
    items: [
      { name: "One Piece Volume 1", aliases: [] },
      { name: "One Piece Volume 100", aliases: [] },
      { name: "One Piece: Red novel", aliases: [] },
      { name: "One Piece Color Walk", aliases: [] },
      { name: "One Piece Magazine", aliases: [] },
      { name: "One Piece Party", aliases: [] },
      { name: "One Piece Episode A", aliases: [] },
      { name: "One Piece: Heroines", aliases: [] },
      { name: "One Piece: Ace's Story", aliases: [] },
      { name: "One Piece Yellow", aliases: [] }
    ]
  },
  { id: "lit-best-selling-michael-crichton", category: "Books", prompt: "Best-selling Michael Crichton novels", hint: "Techno-thriller master",
    items: [
      { name: "Jurassic Park", aliases: [] },
      { name: "The Lost World", aliases: [] },
      { name: "Sphere", aliases: [] },
      { name: "Congo", aliases: [] },
      { name: "Rising Sun", aliases: [] },
      { name: "Disclosure", aliases: [] },
      { name: "The Andromeda Strain", aliases: [] },
      { name: "Timeline", aliases: [] },
      { name: "Prey", aliases: [] },
      { name: "State of Fear", aliases: [] }
    ]
  },
  { id: "lit-best-selling-margaret-atwood", category: "Books", prompt: "Best-selling Margaret Atwood novels", hint: "Dystopian and feminist fiction",
    items: [
      { name: "The Handmaid's Tale", aliases: [] },
      { name: "The Testaments", aliases: [] },
      { name: "Oryx and Crake", aliases: [] },
      { name: "The Year of the Flood", aliases: [] },
      { name: "MaddAddam", aliases: [] },
      { name: "Alias Grace", aliases: [] },
      { name: "The Blind Assassin", aliases: [] },
      { name: "Cat's Eye", aliases: [] },
      { name: "Surfacing", aliases: [] },
      { name: "The Edible Woman", aliases: [] }
    ]
  },
  { id: "lit-best-selling-toni-morrison", category: "Books", prompt: "Best-selling Toni Morrison novels", hint: "Nobel laureate's works",
    items: [
      { name: "Beloved", aliases: [] },
      { name: "Song of Solomon", aliases: [] },
      { name: "The Bluest Eye", aliases: [] },
      { name: "Sula", aliases: [] },
      { name: "Jazz", aliases: [] },
      { name: "Paradise", aliases: [] },
      { name: "Love", aliases: [] },
      { name: "A Mercy", aliases: [] },
      { name: "Home", aliases: [] },
      { name: "God Help the Child", aliases: [] }
    ]
  },
  { id: "lit-best-selling-haruki-murakami", category: "Books", prompt: "Best-selling Haruki Murakami novels", hint: "Surreal Japanese fiction",
    items: [
      { name: "Norwegian Wood", aliases: [] },
      { name: "1Q84", aliases: [] },
      { name: "Kafka on the Shore", aliases: [] },
      { name: "The Wind-Up Bird Chronicle", aliases: [] },
      { name: "Hard-Boiled Wonderland and the End of the World", aliases: [] },
      { name: "Sputnik Sweetheart", aliases: [] },
      { name: "South of the Border, West of the Sun", aliases: [] },
      { name: "After Dark", aliases: [] },
      { name: "Colorless Tsukuru Tazaki and His Years of Pilgrimage", aliases: [] },
      { name: "Killing Commendatore", aliases: [] }
    ]
  },
  { id: "lit-best-selling-ernest-hemingway", category: "Books", prompt: "Best-selling Ernest Hemingway novels", hint: "Spare prose, big themes",
    items: [
      { name: "The Old Man and the Sea", aliases: [] },
      { name: "For Whom the Bell Tolls", aliases: [] },
      { name: "A Farewell to Arms", aliases: [] },
      { name: "The Sun Also Rises", aliases: ["Fiesta"] },
      { name: "To Have and Have Not", aliases: [] },
      { name: "Across the River and Into the Trees", aliases: [] },
      { name: "Islands in the Stream", aliases: [] },
      { name: "The Garden of Eden", aliases: [] },
      { name: "True at First Light", aliases: [] },
      { name: "A Moveable Feast", aliases: [] }
    ]
  },
  { id: "lit-most-translated-authors", category: "Books", prompt: "Most translated authors in the world", hint: "Beyond language barriers",
    items: [
      { name: "Agatha Christie", aliases: [] },
      { name: "Jules Verne", aliases: [] },
      { name: "William Shakespeare", aliases: [] },
      { name: "Enid Blyton", aliases: [] },
      { name: "Barbara Cartland", aliases: [] },
      { name: "Danielle Steel", aliases: [] },
      { name: "Vladimir Lenin", aliases: [] },
      { name: "Hans Christian Andersen", aliases: [] },
      { name: "Stephen King", aliases: [] },
      { name: "Mark Twain", aliases: [] }
    ]
  },
  {
    id: "ani-largest-land-animals",
    category: "Animals",
    prompt: "Top 10 Largest Land Animals (by weight)",
    hint: "Heaviest terrestrial creatures alive today",
    items: [
      { name: "African Bush Elephant", aliases: ["Elephant", "Loxodonta africana", "Elephant de savane"] },
      { name: "Asian Elephant", aliases: ["Elephas maximus", "Elephant d'Asie"] },
      { name: "African Forest Elephant", aliases: ["Loxodonta cyclotis"] },
      { name: "White Rhinoceros", aliases: ["Ceratotherium simum", "Rhinoceros blanc"] },
      { name: "Indian Rhinoceros", aliases: ["Rhinoceros unicornis"] },
      { name: "Hippopotamus", aliases: ["Hippo", "Hippopotamus amphibius", "Hippopotame"] },
      { name: "Black Rhinoceros", aliases: ["Diceros bicornis", "Rhinoceros noir"] },
      { name: "Giraffe", aliases: ["Giraffa camelopardalis", "Girafe"] },
      { name: "Gaur", aliases: ["Indian Bison", "Bos gaurus"] },
      { name: "Wild Water Buffalo", aliases: ["Bubalus arnee"] }
    ]
  },
  {
    id: "ani-largest-marine-animals",
    category: "Animals",
    prompt: "Top 10 Largest Marine Animals",
    hint: "Biggest ocean dwellers by length or weight",
    items: [
      { name: "Blue Whale", aliases: ["Balaenoptera musculus", "Baleine bleue"] },
      { name: "Fin Whale", aliases: ["Balaenoptera physalus", "Rorqual commun"] },
      { name: "Sperm Whale", aliases: ["Physeter macrocephalus", "Cachalot"] },
      { name: "Bowhead Whale", aliases: ["Balaena mysticetus"] },
      { name: "Right Whale", aliases: ["Eubalaena", "North Atlantic Right Whale"] },
      { name: "Humpback Whale", aliases: ["Megaptera novaeangliae", "Baleine a bosse"] },
      { name: "Gray Whale", aliases: ["Eschrichtius robustus"] },
      { name: "Whale Shark", aliases: ["Rhincodon typus", "Requin baleine"] },
      { name: "Basking Shark", aliases: ["Cetorhinus maximus"] },
      { name: "Giant Squid", aliases: ["Architeuthis dux", "Calmar geant"] }
    ]
  },
  {
    id: "ani-largest-mammals",
    category: "Animals",
    prompt: "Top 10 Largest Mammals",
    hint: "Heaviest mammals on Earth",
    items: [
      { name: "Blue Whale", aliases: ["Balaenoptera musculus"] },
      { name: "Fin Whale", aliases: ["Balaenoptera physalus"] },
      { name: "Bowhead Whale", aliases: ["Balaena mysticetus"] },
      { name: "Right Whale", aliases: ["Eubalaena"] },
      { name: "Sperm Whale", aliases: ["Physeter macrocephalus"] },
      { name: "Humpback Whale", aliases: ["Megaptera novaeangliae"] },
      { name: "Gray Whale", aliases: ["Eschrichtius robustus"] },
      { name: "Sei Whale", aliases: ["Balaenoptera borealis"] },
      { name: "Bryde's Whale", aliases: ["Balaenoptera edeni"] },
      { name: "African Bush Elephant", aliases: ["Loxodonta africana"] }
    ]
  },
  {
    id: "ani-largest-birds-weight",
    category: "Animals",
    prompt: "Top 10 Largest Birds (by weight)",
    hint: "Heaviest birds alive today",
    items: [
      { name: "Common Ostrich", aliases: ["Struthio camelus", "Autruche"] },
      { name: "Somali Ostrich", aliases: ["Struthio molybdophanes"] },
      { name: "Southern Cassowary", aliases: ["Casuarius casuarius", "Casoar"] },
      { name: "Northern Cassowary", aliases: ["Casuarius unappendiculatus"] },
      { name: "Emu", aliases: ["Dromaius novaehollandiae"] },
      { name: "Emperor Penguin", aliases: ["Aptenodytes forsteri", "Manchot empereur"] },
      { name: "Greater Rhea", aliases: ["Rhea americana", "Nandou"] },
      { name: "Domestic Turkey", aliases: ["Meleagris gallopavo", "Dindon"] },
      { name: "Dalmatian Pelican", aliases: ["Pelecanus crispus"] },
      { name: "Kori Bustard", aliases: ["Ardeotis kori", "Outarde kori"] }
    ]
  },
  {
    id: "ani-largest-wingspan",
    category: "Animals",
    prompt: "Top 10 Largest Wingspans (Birds)",
    hint: "Widest wings in the avian world",
    items: [
      { name: "Wandering Albatross", aliases: ["Diomedea exulans", "Albatros hurleur"] },
      { name: "Southern Royal Albatross", aliases: ["Diomedea epomophora"] },
      { name: "Dalmatian Pelican", aliases: ["Pelecanus crispus"] },
      { name: "Great White Pelican", aliases: ["Pelecanus onocrotalus"] },
      { name: "Andean Condor", aliases: ["Vultur gryphus", "Condor des Andes"] },
      { name: "Marabou Stork", aliases: ["Leptoptilos crumenifer", "Marabout"] },
      { name: "Trumpeter Swan", aliases: ["Cygnus buccinator"] },
      { name: "Mute Swan", aliases: ["Cygnus olor", "Cygne tubercule"] },
      { name: "Whooper Swan", aliases: ["Cygnus cygnus"] },
      { name: "California Condor", aliases: ["Gymnogyps californianus"] }
    ]
  },
  {
    id: "ani-largest-reptiles",
    category: "Animals",
    prompt: "Top 10 Largest Reptiles",
    hint: "Heaviest scaly creatures alive",
    items: [
      { name: "Saltwater Crocodile", aliases: ["Crocodylus porosus", "Crocodile marin"] },
      { name: "Nile Crocodile", aliases: ["Crocodylus niloticus"] },
      { name: "Orinoco Crocodile", aliases: ["Crocodylus intermedius"] },
      { name: "Black Caiman", aliases: ["Melanosuchus niger"] },
      { name: "American Crocodile", aliases: ["Crocodylus acutus"] },
      { name: "Gharial", aliases: ["Gavialis gangeticus"] },
      { name: "American Alligator", aliases: ["Alligator mississippiensis"] },
      { name: "Leatherback Sea Turtle", aliases: ["Dermochelys coriacea", "Tortue luth"] },
      { name: "Green Anaconda", aliases: ["Eunectes murinus", "Anaconda vert"] },
      { name: "Komodo Dragon", aliases: ["Varanus komodoensis", "Dragon de Komodo"] }
    ]
  },
  {
    id: "ani-largest-fish",
    category: "Animals",
    prompt: "Top 10 Largest Fish",
    hint: "Biggest fish in the sea",
    items: [
      { name: "Whale Shark", aliases: ["Rhincodon typus"] },
      { name: "Basking Shark", aliases: ["Cetorhinus maximus"] },
      { name: "Great White Shark", aliases: ["Carcharodon carcharias"] },
      { name: "Tiger Shark", aliases: ["Galeocerdo cuvier"] },
      { name: "Greenland Shark", aliases: ["Somniosus microcephalus"] },
      { name: "Giant Manta Ray", aliases: ["Mobula birostris", "Raie manta"] },
      { name: "Ocean Sunfish", aliases: ["Mola mola", "Poisson lune"] },
      { name: "Beluga Sturgeon", aliases: ["Huso huso"] },
      { name: "Atlantic Bluefin Tuna", aliases: ["Thunnus thynnus", "Thon rouge"] },
      { name: "Oarfish", aliases: ["Regalecus glesne"] }
    ]
  },
  {
    id: "ani-largest-sharks",
    category: "Animals",
    prompt: "Top 10 Largest Sharks",
    hint: "Biggest shark species alive",
    items: [
      { name: "Whale Shark", aliases: ["Rhincodon typus"] },
      { name: "Basking Shark", aliases: ["Cetorhinus maximus"] },
      { name: "Great White Shark", aliases: ["Carcharodon carcharias"] },
      { name: "Tiger Shark", aliases: ["Galeocerdo cuvier"] },
      { name: "Pacific Sleeper Shark", aliases: ["Somniosus pacificus"] },
      { name: "Greenland Shark", aliases: ["Somniosus microcephalus"] },
      { name: "Bluntnose Sixgill Shark", aliases: ["Hexanchus griseus"] },
      { name: "Megamouth Shark", aliases: ["Megachasma pelagios"] },
      { name: "Thresher Shark", aliases: ["Alopias vulpinus"] },
      { name: "Bull Shark", aliases: ["Carcharhinus leucas"] }
    ]
  },
  {
    id: "ani-largest-whales",
    category: "Animals",
    prompt: "Top 10 Largest Whales",
    hint: "Biggest cetaceans on Earth",
    items: [
      { name: "Blue Whale", aliases: ["Balaenoptera musculus"] },
      { name: "Fin Whale", aliases: ["Balaenoptera physalus"] },
      { name: "Bowhead Whale", aliases: ["Balaena mysticetus"] },
      { name: "North Atlantic Right Whale", aliases: ["Eubalaena glacialis"] },
      { name: "Sperm Whale", aliases: ["Physeter macrocephalus"] },
      { name: "Humpback Whale", aliases: ["Megaptera novaeangliae"] },
      { name: "Sei Whale", aliases: ["Balaenoptera borealis"] },
      { name: "Gray Whale", aliases: ["Eschrichtius robustus"] },
      { name: "Bryde's Whale", aliases: ["Balaenoptera edeni"] },
      { name: "Minke Whale", aliases: ["Balaenoptera acutorostrata"] }
    ]
  },
  {
    id: "ani-largest-big-cats",
    category: "Animals",
    prompt: "Top 10 Largest Big Cats (by weight)",
    hint: "Heaviest feline predators",
    items: [
      { name: "Siberian Tiger", aliases: ["Amur Tiger", "Panthera tigris tigris"] },
      { name: "Bengal Tiger", aliases: ["Panthera tigris tigris"] },
      { name: "African Lion", aliases: ["Panthera leo", "Lion"] },
      { name: "Jaguar", aliases: ["Panthera onca"] },
      { name: "Cougar", aliases: ["Puma concolor", "Mountain Lion", "Puma"] },
      { name: "Leopard", aliases: ["Panthera pardus"] },
      { name: "Snow Leopard", aliases: ["Panthera uncia", "Once"] },
      { name: "Cheetah", aliases: ["Acinonyx jubatus", "Guepard"] },
      { name: "Eurasian Lynx", aliases: ["Lynx lynx"] },
      { name: "Clouded Leopard", aliases: ["Neofelis nebulosa"] }
    ]
  },
  {
    id: "ani-largest-dog-breeds",
    category: "Animals",
    prompt: "Top 10 Largest Dog Breeds (by weight)",
    hint: "Heaviest canine companions",
    items: [
      { name: "English Mastiff", aliases: ["Mastiff"] },
      { name: "Saint Bernard", aliases: ["St Bernard"] },
      { name: "Tibetan Mastiff", aliases: ["Dogue du Tibet"] },
      { name: "Great Dane", aliases: ["Dogue allemand"] },
      { name: "Newfoundland", aliases: ["Terre-Neuve"] },
      { name: "Leonberger", aliases: [] },
      { name: "Caucasian Shepherd", aliases: ["Caucasian Ovcharka"] },
      { name: "Anatolian Shepherd", aliases: ["Kangal"] },
      { name: "Great Pyrenees", aliases: ["Pyrenean Mountain Dog"] },
      { name: "Irish Wolfhound", aliases: ["Levrier irlandais"] }
    ]
  },
  {
    id: "ani-fastest-land-animals",
    category: "Animals",
    prompt: "Top 10 Fastest Land Animals",
    hint: "Speediest creatures on terra firma",
    items: [
      { name: "Cheetah", aliases: ["Acinonyx jubatus", "Guepard"] },
      { name: "Pronghorn", aliases: ["Antilocapra americana"] },
      { name: "Springbok", aliases: ["Antidorcas marsupialis"] },
      { name: "Wildebeest", aliases: ["Connochaetes", "Gnu"] },
      { name: "Lion", aliases: ["Panthera leo"] },
      { name: "Blackbuck", aliases: ["Antilope cervicapra"] },
      { name: "Brown Hare", aliases: ["Lepus europaeus"] },
      { name: "Greyhound", aliases: ["Levrier"] },
      { name: "Thomson's Gazelle", aliases: ["Eudorcas thomsonii"] },
      { name: "Quarter Horse", aliases: ["American Quarter Horse"] }
    ]
  },
  {
    id: "ani-fastest-marine",
    category: "Animals",
    prompt: "Top 10 Fastest Marine Animals",
    hint: "Speed demons of the sea",
    items: [
      { name: "Black Marlin", aliases: ["Istiompax indica"] },
      { name: "Sailfish", aliases: ["Istiophorus", "Voilier"] },
      { name: "Striped Marlin", aliases: ["Kajikia audax"] },
      { name: "Wahoo", aliases: ["Acanthocybium solandri"] },
      { name: "Mako Shark", aliases: ["Isurus oxyrinchus", "Shortfin Mako"] },
      { name: "Yellowfin Tuna", aliases: ["Thunnus albacares"] },
      { name: "Bluefin Tuna", aliases: ["Thunnus thynnus"] },
      { name: "Blue Shark", aliases: ["Prionace glauca"] },
      { name: "Bonito", aliases: ["Sarda sarda"] },
      { name: "Swordfish", aliases: ["Xiphias gladius", "Espadon"] }
    ]
  },
  {
    id: "ani-fastest-birds-flight",
    category: "Animals",
    prompt: "Top 10 Fastest Birds in Level Flight",
    hint: "Quickest wings in horizontal flight",
    items: [
      { name: "White-throated Needletail", aliases: ["Hirundapus caudacutus"] },
      { name: "Eurasian Hobby", aliases: ["Falco subbuteo"] },
      { name: "Mexican Free-tailed Bat", aliases: ["Tadarida brasiliensis"] },
      { name: "Frigatebird", aliases: ["Fregata"] },
      { name: "Rock Dove", aliases: ["Columba livia", "Homing Pigeon"] },
      { name: "Spur-winged Goose", aliases: ["Plectropterus gambensis"] },
      { name: "Red-breasted Merganser", aliases: ["Mergus serrator"] },
      { name: "Canvasback", aliases: ["Aythya valisineria"] },
      { name: "Eider", aliases: ["Somateria mollissima"] },
      { name: "Teal", aliases: ["Anas crecca"] }
    ]
  },
  {
    id: "ani-fastest-birds-dive",
    category: "Animals",
    prompt: "Top 10 Fastest Diving Birds",
    hint: "Speediest birds in a dive or stoop",
    items: [
      { name: "Peregrine Falcon", aliases: ["Falco peregrinus", "Faucon pelerin"] },
      { name: "Golden Eagle", aliases: ["Aquila chrysaetos"] },
      { name: "Gyrfalcon", aliases: ["Falco rusticolus"] },
      { name: "Saker Falcon", aliases: ["Falco cherrug"] },
      { name: "White-throated Needletail", aliases: ["Hirundapus caudacutus"] },
      { name: "Frigatebird", aliases: ["Fregata"] },
      { name: "Common Swift", aliases: ["Apus apus"] },
      { name: "Northern Goshawk", aliases: ["Accipiter gentilis"] },
      { name: "Red-tailed Hawk", aliases: ["Buteo jamaicensis"] },
      { name: "Anna's Hummingbird", aliases: ["Calypte anna"] }
    ]
  },
  {
    id: "ani-fastest-insects",
    category: "Animals",
    prompt: "Top 10 Fastest Insects",
    hint: "Quickest bugs (flying or running)",
    items: [
      { name: "Dragonfly", aliases: ["Anisoptera", "Libellule"] },
      { name: "Horsefly", aliases: ["Tabanidae", "Taon"] },
      { name: "Hawk Moth", aliases: ["Sphingidae", "Sphinx Moth"] },
      { name: "Hornet", aliases: ["Vespa", "Frelon"] },
      { name: "Honeybee", aliases: ["Apis mellifera", "Abeille"] },
      { name: "Tiger Beetle", aliases: ["Cicindelinae"] },
      { name: "Cockroach", aliases: ["Blattodea", "American Cockroach"] },
      { name: "Desert Locust", aliases: ["Schistocerca gregaria"] },
      { name: "Bot Fly", aliases: ["Oestridae"] },
      { name: "Mosquito", aliases: ["Culicidae", "Moustique"] }
    ]
  },
  {
    id: "ani-most-venomous-snakes",
    category: "Animals",
    prompt: "Top 10 Most Venomous Snakes",
    hint: "Deadliest venoms by toxicity (LD50)",
    items: [
      { name: "Inland Taipan", aliases: ["Oxyuranus microlepidotus", "Fierce Snake"] },
      { name: "Eastern Brown Snake", aliases: ["Pseudonaja textilis"] },
      { name: "Coastal Taipan", aliases: ["Oxyuranus scutellatus"] },
      { name: "Tiger Snake", aliases: ["Notechis scutatus"] },
      { name: "Black Mamba", aliases: ["Dendroaspis polylepis"] },
      { name: "Russell's Viper", aliases: ["Daboia russelii"] },
      { name: "Saw-scaled Viper", aliases: ["Echis carinatus"] },
      { name: "Banded Krait", aliases: ["Bungarus fasciatus"] },
      { name: "King Cobra", aliases: ["Ophiophagus hannah"] },
      { name: "Belcher's Sea Snake", aliases: ["Hydrophis belcheri"] }
    ]
  },
  {
    id: "ani-most-venomous-spiders",
    category: "Animals",
    prompt: "Top 10 Most Venomous Spiders",
    hint: "Most dangerous arachnid bites",
    items: [
      { name: "Brazilian Wandering Spider", aliases: ["Phoneutria"] },
      { name: "Sydney Funnel-Web Spider", aliases: ["Atrax robustus"] },
      { name: "Black Widow", aliases: ["Latrodectus mactans", "Veuve noire"] },
      { name: "Redback Spider", aliases: ["Latrodectus hasselti"] },
      { name: "Brown Recluse", aliases: ["Loxosceles reclusa"] },
      { name: "Six-eyed Sand Spider", aliases: ["Sicarius hahni"] },
      { name: "Yellow Sac Spider", aliases: ["Cheiracanthium"] },
      { name: "Chilean Recluse", aliases: ["Loxosceles laeta"] },
      { name: "Mouse Spider", aliases: ["Missulena"] },
      { name: "Wolf Spider", aliases: ["Lycosidae"] }
    ]
  },
  {
    id: "ani-most-venomous-marine",
    category: "Animals",
    prompt: "Top 10 Most Venomous Marine Animals",
    hint: "Deadliest ocean stings and bites",
    items: [
      { name: "Box Jellyfish", aliases: ["Chironex fleckeri"] },
      { name: "Blue-Ringed Octopus", aliases: ["Hapalochlaena"] },
      { name: "Geography Cone Snail", aliases: ["Conus geographus"] },
      { name: "Stonefish", aliases: ["Synanceia"] },
      { name: "Irukandji Jellyfish", aliases: ["Carukia barnesi"] },
      { name: "Belcher's Sea Snake", aliases: ["Hydrophis belcheri"] },
      { name: "Pufferfish", aliases: ["Tetraodontidae", "Fugu"] },
      { name: "Striped Pyjama Squid", aliases: ["Sepioloidea lineolata"] },
      { name: "Lionfish", aliases: ["Pterois"] },
      { name: "Portuguese Man o' War", aliases: ["Physalia physalis"] }
    ]
  },
  {
    id: "ani-deadliest-to-humans",
    category: "Animals",
    prompt: "Top 10 Deadliest Animals to Humans (annual deaths)",
    hint: "Animals causing the most human fatalities per year",
    items: [
      { name: "Mosquito", aliases: ["Culicidae", "Moustique"] },
      { name: "Human", aliases: ["Homo sapiens"] },
      { name: "Snake", aliases: ["Serpentes"] },
      { name: "Dog", aliases: ["Rabies", "Canis familiaris"] },
      { name: "Freshwater Snail", aliases: ["Schistosomiasis", "Bilharzia"] },
      { name: "Assassin Bug", aliases: ["Triatominae", "Kissing Bug"] },
      { name: "Tsetse Fly", aliases: ["Glossina"] },
      { name: "Ascaris Roundworm", aliases: ["Ascaris lumbricoides"] },
      { name: "Tapeworm", aliases: ["Cestoda"] },
      { name: "Crocodile", aliases: ["Crocodylidae"] }
    ]
  },
  {
    id: "ani-strongest-animals",
    category: "Animals",
    prompt: "Top 10 Strongest Animals (relative to size)",
    hint: "Mightiest creatures pound for pound",
    items: [
      { name: "Dung Beetle", aliases: ["Scarabaeidae"] },
      { name: "Rhinoceros Beetle", aliases: ["Dynastinae"] },
      { name: "Leafcutter Ant", aliases: ["Atta", "Acromyrmex"] },
      { name: "Gorilla", aliases: ["Gorilla gorilla"] },
      { name: "Eagle", aliases: ["Aquila"] },
      { name: "Tiger", aliases: ["Panthera tigris"] },
      { name: "Musk Ox", aliases: ["Ovibos moschatus"] },
      { name: "Anaconda", aliases: ["Eunectes"] },
      { name: "Grizzly Bear", aliases: ["Ursus arctos horribilis"] },
      { name: "Ox", aliases: ["Bos taurus"] }
    ]
  },
  {
    id: "ani-smartest-animals",
    category: "Animals",
    prompt: "Top 10 Smartest Animals",
    hint: "Most intelligent non-human creatures",
    items: [
      { name: "Chimpanzee", aliases: ["Pan troglodytes"] },
      { name: "Bonobo", aliases: ["Pan paniscus"] },
      { name: "Bottlenose Dolphin", aliases: ["Tursiops truncatus"] },
      { name: "Orangutan", aliases: ["Pongo"] },
      { name: "Gorilla", aliases: ["Gorilla gorilla"] },
      { name: "Elephant", aliases: ["Loxodonta", "Elephas"] },
      { name: "African Grey Parrot", aliases: ["Psittacus erithacus"] },
      { name: "Crow", aliases: ["Corvus", "New Caledonian Crow"] },
      { name: "Pig", aliases: ["Sus scrofa domesticus"] },
      { name: "Octopus", aliases: ["Octopoda"] }
    ]
  },
  {
    id: "ani-longest-lived",
    category: "Animals",
    prompt: "Top 10 Longest-Lived Animals",
    hint: "Species with the greatest lifespans",
    items: [
      { name: "Immortal Jellyfish", aliases: ["Turritopsis dohrnii"] },
      { name: "Glass Sponge", aliases: ["Hexactinellida"] },
      { name: "Ocean Quahog", aliases: ["Arctica islandica"] },
      { name: "Greenland Shark", aliases: ["Somniosus microcephalus"] },
      { name: "Bowhead Whale", aliases: ["Balaena mysticetus"] },
      { name: "Rougheye Rockfish", aliases: ["Sebastes aleutianus"] },
      { name: "Tuatara", aliases: ["Sphenodon punctatus"] },
      { name: "Galapagos Tortoise", aliases: ["Chelonoidis nigra"] },
      { name: "Red Sea Urchin", aliases: ["Mesocentrotus franciscanus"] },
      { name: "Macaw", aliases: ["Ara"] }
    ]
  },
  {
    id: "ani-heaviest-extinct",
    category: "Animals",
    prompt: "Top 10 Heaviest Extinct Animals",
    hint: "Largest creatures that ever lived (now gone)",
    items: [
      { name: "Argentinosaurus", aliases: [] },
      { name: "Patagotitan", aliases: ["Patagotitan mayorum"] },
      { name: "Dreadnoughtus", aliases: [] },
      { name: "Puertasaurus", aliases: [] },
      { name: "Notocolossus", aliases: [] },
      { name: "Futalognkosaurus", aliases: [] },
      { name: "Sauroposeidon", aliases: [] },
      { name: "Brachiosaurus", aliases: [] },
      { name: "Mamenchisaurus", aliases: [] },
      { name: "Paraceratherium", aliases: ["Indricotherium"] }
    ]
  },
  {
    id: "ani-tallest-animals",
    category: "Animals",
    prompt: "Top 10 Tallest Animals",
    hint: "Greatest heights from ground to top",
    items: [
      { name: "Giraffe", aliases: ["Giraffa camelopardalis", "Girafe"] },
      { name: "African Bush Elephant", aliases: ["Loxodonta africana"] },
      { name: "Asian Elephant", aliases: ["Elephas maximus"] },
      { name: "Camel", aliases: ["Camelus", "Dromadaire"] },
      { name: "Ostrich", aliases: ["Struthio camelus"] },
      { name: "Moose", aliases: ["Alces alces", "Elan"] },
      { name: "Brown Bear", aliases: ["Ursus arctos"] },
      { name: "Polar Bear", aliases: ["Ursus maritimus"] },
      { name: "Horse", aliases: ["Equus caballus", "Shire Horse"] },
      { name: "Gaur", aliases: ["Bos gaurus"] }
    ]
  },
  {
    id: "ani-smallest-mammals",
    category: "Animals",
    prompt: "Top 10 Smallest Mammals",
    hint: "Tiniest furry creatures alive",
    items: [
      { name: "Etruscan Shrew", aliases: ["Suncus etruscus"] },
      { name: "Bumblebee Bat", aliases: ["Craseonycteris thonglongyai", "Kitti's Hog-nosed Bat"] },
      { name: "Pygmy Jerboa", aliases: ["Salpingotulus michaelis"] },
      { name: "African Pygmy Mouse", aliases: ["Mus minutoides"] },
      { name: "Long-tailed Planigale", aliases: ["Planigale ingrami"] },
      { name: "Northern Pygmy Mouse", aliases: ["Baiomys taylori"] },
      { name: "Eurasian Pygmy Shrew", aliases: ["Sorex minutus"] },
      { name: "Pygmy Possum", aliases: ["Cercartetus lepidus"] },
      { name: "Pygmy Marmoset", aliases: ["Cebuella pygmaea"] },
      { name: "Pygmy Slow Loris", aliases: ["Nycticebus pygmaeus"] }
    ]
  },
  {
    id: "ani-smallest-birds",
    category: "Animals",
    prompt: "Top 10 Smallest Birds",
    hint: "Tiniest birds in the world",
    items: [
      { name: "Bee Hummingbird", aliases: ["Mellisuga helenae"] },
      { name: "Vervain Hummingbird", aliases: ["Mellisuga minima"] },
      { name: "Weebill", aliases: ["Smicrornis brevirostris"] },
      { name: "Bushtit", aliases: ["Psaltriparus minimus"] },
      { name: "Goldcrest", aliases: ["Regulus regulus"] },
      { name: "Brown Gerygone", aliases: ["Gerygone mouki"] },
      { name: "Pardalote", aliases: ["Pardalotus"] },
      { name: "Bananaquit", aliases: ["Coereba flaveola"] },
      { name: "Lesser Goldfinch", aliases: ["Spinus psaltria"] },
      { name: "Verdin", aliases: ["Auriparus flaviceps"] }
    ]
  },
  {
    id: "ani-popular-dog-breeds",
    category: "Animals",
    prompt: "Top 10 Most Popular Dog Breeds (AKC)",
    hint: "Top breeds registered by the AKC",
    items: [
      { name: "French Bulldog", aliases: ["Bouledogue francais"] },
      { name: "Labrador Retriever", aliases: ["Labrador"] },
      { name: "Golden Retriever", aliases: [] },
      { name: "German Shepherd", aliases: ["Berger allemand"] },
      { name: "Poodle", aliases: ["Caniche"] },
      { name: "Bulldog", aliases: ["English Bulldog"] },
      { name: "Rottweiler", aliases: [] },
      { name: "Beagle", aliases: [] },
      { name: "Dachshund", aliases: ["Teckel"] },
      { name: "German Shorthaired Pointer", aliases: [] }
    ]
  },
  {
    id: "ani-popular-cat-breeds",
    category: "Animals",
    prompt: "Top 10 Most Popular Cat Breeds",
    hint: "Most beloved feline breeds worldwide",
    items: [
      { name: "Ragdoll", aliases: [] },
      { name: "Maine Coon", aliases: [] },
      { name: "Devon Rex", aliases: [] },
      { name: "Exotic Shorthair", aliases: [] },
      { name: "Persian", aliases: ["Persan"] },
      { name: "British Shorthair", aliases: [] },
      { name: "Abyssinian", aliases: [] },
      { name: "American Shorthair", aliases: [] },
      { name: "Scottish Fold", aliases: [] },
      { name: "Sphynx", aliases: [] }
    ]
  },
  {
    id: "ani-expensive-dog-breeds",
    category: "Animals",
    prompt: "Top 10 Most Expensive Dog Breeds",
    hint: "Priciest pups to purchase",
    items: [
      { name: "Tibetan Mastiff", aliases: [] },
      { name: "Samoyed", aliases: [] },
      { name: "Chow Chow", aliases: [] },
      { name: "Lowchen", aliases: ["Little Lion Dog"] },
      { name: "Pharaoh Hound", aliases: [] },
      { name: "Akita", aliases: [] },
      { name: "Saluki", aliases: [] },
      { name: "Rottweiler", aliases: [] },
      { name: "French Bulldog", aliases: [] },
      { name: "English Bulldog", aliases: [] }
    ]
  },
  {
    id: "ani-largest-carnivorous-dinosaurs",
    category: "Animals",
    prompt: "Top 10 Largest Carnivorous Dinosaurs",
    hint: "Biggest meat-eating dinosaurs ever",
    items: [
      { name: "Spinosaurus", aliases: ["Spinosaurus aegyptiacus"] },
      { name: "Giganotosaurus", aliases: [] },
      { name: "Carcharodontosaurus", aliases: [] },
      { name: "Tyrannosaurus rex", aliases: ["T-Rex"] },
      { name: "Mapusaurus", aliases: [] },
      { name: "Tyrannotitan", aliases: [] },
      { name: "Acrocanthosaurus", aliases: [] },
      { name: "Allosaurus", aliases: [] },
      { name: "Torvosaurus", aliases: [] },
      { name: "Suchomimus", aliases: [] }
    ]
  },
  {
    id: "ani-largest-herbivorous-dinosaurs",
    category: "Animals",
    prompt: "Top 10 Largest Herbivorous Dinosaurs",
    hint: "Biggest plant-eating dinosaurs ever",
    items: [
      { name: "Argentinosaurus", aliases: [] },
      { name: "Patagotitan", aliases: [] },
      { name: "Dreadnoughtus", aliases: [] },
      { name: "Puertasaurus", aliases: [] },
      { name: "Notocolossus", aliases: [] },
      { name: "Futalognkosaurus", aliases: [] },
      { name: "Sauroposeidon", aliases: [] },
      { name: "Brachiosaurus", aliases: [] },
      { name: "Mamenchisaurus", aliases: [] },
      { name: "Diplodocus", aliases: [] }
    ]
  },
  {
    id: "ani-smallest-dinosaurs",
    category: "Animals",
    prompt: "Top 10 Smallest Dinosaurs",
    hint: "Tiniest non-avian dinosaurs ever discovered",
    items: [
      { name: "Microraptor", aliases: [] },
      { name: "Anchiornis", aliases: [] },
      { name: "Parvicursor", aliases: [] },
      { name: "Mahakala", aliases: [] },
      { name: "Epidexipteryx", aliases: [] },
      { name: "Lariosaurus", aliases: [] },
      { name: "Compsognathus", aliases: [] },
      { name: "Mei long", aliases: [] },
      { name: "Albertonykus", aliases: [] },
      { name: "Bambiraptor", aliases: [] }
    ]
  },
  {
    id: "ani-longest-dinosaur-necks",
    category: "Animals",
    prompt: "Top 10 Longest Dinosaur Necks",
    hint: "Sauropods with the most extreme necks",
    items: [
      { name: "Mamenchisaurus", aliases: [] },
      { name: "Sauroposeidon", aliases: [] },
      { name: "Supersaurus", aliases: [] },
      { name: "Xinjiangtitan", aliases: [] },
      { name: "Patagotitan", aliases: [] },
      { name: "Argentinosaurus", aliases: [] },
      { name: "Diplodocus", aliases: [] },
      { name: "Brachiosaurus", aliases: [] },
      { name: "Barosaurus", aliases: [] },
      { name: "Futalognkosaurus", aliases: [] }
    ]
  },
  {
    id: "ani-famous-dinosaur-fossils",
    category: "Animals",
    prompt: "Top 10 Famous Discovered Dinosaur Fossils",
    hint: "Most renowned individual dinosaur specimens",
    items: [
      { name: "Sue", aliases: ["FMNH PR 2081"] },
      { name: "Stan", aliases: ["BHI 3033"] },
      { name: "Big Al", aliases: ["MOR 693"] },
      { name: "Trix", aliases: [] },
      { name: "Scotty", aliases: ["RSM P2523.8"] },
      { name: "Dippy", aliases: ["Diplodocus carnegii"] },
      { name: "Hatcher", aliases: [] },
      { name: "Leonardo", aliases: [] },
      { name: "Dakota", aliases: [] },
      { name: "Tristan Otto", aliases: [] }
    ]
  },
  {
    id: "ani-tallest-trees",
    category: "Animals",
    prompt: "Top 10 Tallest Trees in the World",
    hint: "Skyscrapers of the forest",
    items: [
      { name: "Hyperion", aliases: ["Coast Redwood", "Sequoia sempervirens"] },
      { name: "Helios", aliases: ["Coast Redwood"] },
      { name: "Icarus", aliases: ["Coast Redwood"] },
      { name: "Stratosphere Giant", aliases: ["Coast Redwood"] },
      { name: "Centurion", aliases: ["Eucalyptus regnans", "Mountain Ash"] },
      { name: "Doerner Fir", aliases: ["Pseudotsuga menziesii", "Douglas Fir"] },
      { name: "Menara", aliases: ["Shorea faguetiana", "Yellow Meranti"] },
      { name: "Raven's Tower", aliases: ["Sitka Spruce", "Picea sitchensis"] },
      { name: "Unnamed Manna Gum", aliases: ["Eucalyptus viminalis"] },
      { name: "Neeminah Loggorale Meena", aliases: ["Eucalyptus regnans"] }
    ]
  },
  {
    id: "ani-oldest-trees",
    category: "Animals",
    prompt: "Top 10 Oldest Trees in the World",
    hint: "Most ancient individual trees alive",
    items: [
      { name: "Methuselah", aliases: ["Pinus longaeva", "Bristlecone Pine"] },
      { name: "Prometheus", aliases: ["Bristlecone Pine"] },
      { name: "Old Tjikko", aliases: ["Norway Spruce", "Picea abies"] },
      { name: "Llangernyw Yew", aliases: ["Taxus baccata"] },
      { name: "Sarv-e Abarkuh", aliases: ["Zoroastrian Sarv"] },
      { name: "Alerce Milenario", aliases: ["Gran Abuelo", "Fitzroya cupressoides"] },
      { name: "Jomon Sugi", aliases: ["Cryptomeria japonica"] },
      { name: "Patriarca da Floresta", aliases: [] },
      { name: "General Sherman", aliases: ["Sequoiadendron giganteum"] },
      { name: "Fortingall Yew", aliases: ["Taxus baccata"] }
    ]
  },
  {
    id: "ani-largest-trees",
    category: "Animals",
    prompt: "Top 10 Largest Trees in the World (by volume)",
    hint: "Most massive trees on Earth",
    items: [
      { name: "General Sherman", aliases: ["Sequoiadendron giganteum"] },
      { name: "General Grant", aliases: ["Giant Sequoia"] },
      { name: "President", aliases: ["Giant Sequoia"] },
      { name: "Lincoln", aliases: ["Giant Sequoia"] },
      { name: "Stagg", aliases: ["Giant Sequoia"] },
      { name: "Boole", aliases: ["Giant Sequoia"] },
      { name: "Genesis", aliases: ["Giant Sequoia"] },
      { name: "Franklin", aliases: ["Giant Sequoia"] },
      { name: "King Arthur", aliases: ["Giant Sequoia"] },
      { name: "Monroe", aliases: ["Giant Sequoia"] }
    ]
  },
  {
    id: "ani-largest-flowers",
    category: "Animals",
    prompt: "Top 10 Largest Flowers in the World",
    hint: "Biggest blooms in the plant kingdom",
    items: [
      { name: "Rafflesia arnoldii", aliases: ["Corpse Flower"] },
      { name: "Titan Arum", aliases: ["Amorphophallus titanum"] },
      { name: "Talipot Palm", aliases: ["Corypha umbraculifera"] },
      { name: "Giant Water Lily", aliases: ["Victoria amazonica"] },
      { name: "Magnolia", aliases: ["Magnolia grandiflora"] },
      { name: "Sunflower", aliases: ["Helianthus annuus", "Tournesol"] },
      { name: "Hibiscus", aliases: ["Hibiscus rosa-sinensis"] },
      { name: "Lotus", aliases: ["Nelumbo nucifera"] },
      { name: "Dahlia", aliases: ["Dahlia imperialis"] },
      { name: "Puya raimondii", aliases: ["Queen of the Andes"] }
    ]
  },
  {
    id: "ani-popular-houseplants",
    category: "Animals",
    prompt: "Top 10 Most Popular Houseplants",
    hint: "Most common indoor green companions",
    items: [
      { name: "Pothos", aliases: ["Devil's Ivy", "Epipremnum aureum"] },
      { name: "Snake Plant", aliases: ["Sansevieria", "Dracaena trifasciata"] },
      { name: "Monstera deliciosa", aliases: ["Swiss Cheese Plant"] },
      { name: "Spider Plant", aliases: ["Chlorophytum comosum"] },
      { name: "Peace Lily", aliases: ["Spathiphyllum"] },
      { name: "ZZ Plant", aliases: ["Zamioculcas zamiifolia"] },
      { name: "Fiddle Leaf Fig", aliases: ["Ficus lyrata"] },
      { name: "Aloe Vera", aliases: ["Aloe barbadensis"] },
      { name: "Rubber Plant", aliases: ["Ficus elastica"] },
      { name: "Philodendron", aliases: ["Heartleaf Philodendron"] }
    ]
  },
  {
    id: "ani-poisonous-plants",
    category: "Animals",
    prompt: "Top 10 Most Poisonous Plants",
    hint: "Deadliest plants known to humans",
    items: [
      { name: "Castor Bean", aliases: ["Ricinus communis", "Ricin"] },
      { name: "Deadly Nightshade", aliases: ["Atropa belladonna"] },
      { name: "Oleander", aliases: ["Nerium oleander", "Laurier rose"] },
      { name: "Water Hemlock", aliases: ["Cicuta"] },
      { name: "White Snakeroot", aliases: ["Ageratina altissima"] },
      { name: "Rosary Pea", aliases: ["Abrus precatorius"] },
      { name: "Monkshood", aliases: ["Aconitum", "Wolfsbane"] },
      { name: "Manchineel", aliases: ["Hippomane mancinella"] },
      { name: "Angel's Trumpet", aliases: ["Brugmansia"] },
      { name: "Tobacco", aliases: ["Nicotiana tabacum"] }
    ]
  },
  {
    id: "ani-cultivated-crops",
    category: "Animals",
    prompt: "Top 10 Most Cultivated Crops Worldwide",
    hint: "Highest global production by tonnage",
    items: [
      { name: "Sugarcane", aliases: ["Saccharum officinarum"] },
      { name: "Maize", aliases: ["Corn", "Zea mays", "Mais"] },
      { name: "Wheat", aliases: ["Triticum", "Ble"] },
      { name: "Rice", aliases: ["Oryza sativa", "Riz"] },
      { name: "Potato", aliases: ["Solanum tuberosum", "Pomme de terre"] },
      { name: "Soybean", aliases: ["Glycine max", "Soja"] },
      { name: "Cassava", aliases: ["Manihot esculenta", "Manioc"] },
      { name: "Tomato", aliases: ["Solanum lycopersicum"] },
      { name: "Sweet Potato", aliases: ["Ipomoea batatas"] },
      { name: "Yam", aliases: ["Dioscorea", "Igname"] }
    ]
  },
  {
    id: "ani-most-endangered",
    category: "Animals",
    prompt: "Top 10 Most Critically Endangered Animals",
    hint: "Species closest to extinction",
    items: [
      { name: "Vaquita", aliases: ["Phocoena sinus"] },
      { name: "Javan Rhinoceros", aliases: ["Rhinoceros sondaicus"] },
      { name: "Amur Leopard", aliases: ["Panthera pardus orientalis"] },
      { name: "Sumatran Rhinoceros", aliases: ["Dicerorhinus sumatrensis"] },
      { name: "Cross River Gorilla", aliases: ["Gorilla gorilla diehli"] },
      { name: "Sumatran Orangutan", aliases: ["Pongo abelii"] },
      { name: "Hawksbill Turtle", aliases: ["Eretmochelys imbricata"] },
      { name: "Saola", aliases: ["Pseudoryx nghetinhensis"] },
      { name: "South China Tiger", aliases: ["Panthera tigris amoyensis"] },
      { name: "Yangtze Finless Porpoise", aliases: ["Neophocaena asiaeorientalis"] }
    ]
  },
  {
    id: "ani-longest-gestation",
    category: "Animals",
    prompt: "Top 10 Longest Gestation Periods (mammals)",
    hint: "Mammals with the longest pregnancies",
    items: [
      { name: "African Elephant", aliases: ["Loxodonta africana"] },
      { name: "Asian Elephant", aliases: ["Elephas maximus"] },
      { name: "Sperm Whale", aliases: ["Physeter macrocephalus"] },
      { name: "Giraffe", aliases: ["Giraffa camelopardalis"] },
      { name: "Walrus", aliases: ["Odobenus rosmarus"] },
      { name: "Bactrian Camel", aliases: ["Camelus bactrianus"] },
      { name: "Tapir", aliases: ["Tapirus"] },
      { name: "Donkey", aliases: ["Equus asinus"] },
      { name: "Rhinoceros", aliases: ["White Rhino"] },
      { name: "Horse", aliases: ["Equus caballus"] }
    ]
  },
  {
    id: "ani-shortest-gestation",
    category: "Animals",
    prompt: "Top 10 Shortest Gestation Periods (mammals)",
    hint: "Mammals with the briefest pregnancies",
    items: [
      { name: "Virginia Opossum", aliases: ["Didelphis virginiana"] },
      { name: "Short-nosed Bandicoot", aliases: ["Isoodon"] },
      { name: "Eastern Quoll", aliases: ["Dasyurus viverrinus"] },
      { name: "Golden Hamster", aliases: ["Mesocricetus auratus"] },
      { name: "House Mouse", aliases: ["Mus musculus"] },
      { name: "Norway Rat", aliases: ["Rattus norvegicus"] },
      { name: "Meadow Vole", aliases: ["Microtus pennsylvanicus"] },
      { name: "Brown Lemming", aliases: ["Lemmus trimucronatus"] },
      { name: "Rabbit", aliases: ["Oryctolagus cuniculus"] },
      { name: "Ferret", aliases: ["Mustela putorius furo"] }
    ]
  },
  {
    id: "ani-heaviest-insects",
    category: "Animals",
    prompt: "Top 10 Heaviest Insects",
    hint: "Biggest bugs by weight",
    items: [
      { name: "Giant Weta", aliases: ["Deinacrida"] },
      { name: "Goliath Beetle", aliases: ["Goliathus"] },
      { name: "Titan Beetle", aliases: ["Titanus giganteus"] },
      { name: "Elephant Beetle", aliases: ["Megasoma elephas"] },
      { name: "Actaeon Beetle", aliases: ["Megasoma actaeon"] },
      { name: "Atlas Beetle", aliases: ["Chalcosoma atlas"] },
      { name: "Hercules Beetle", aliases: ["Dynastes hercules"] },
      { name: "Giant Stick Insect", aliases: ["Phasmatodea"] },
      { name: "Giant Burrowing Cockroach", aliases: ["Macropanesthia rhinoceros"] },
      { name: "Queen Alexandra's Birdwing", aliases: ["Ornithoptera alexandrae"] }
    ]
  },
  {
    id: "ani-largest-crustaceans",
    category: "Animals",
    prompt: "Top 10 Largest Crustaceans",
    hint: "Biggest creatures with exoskeletons in water",
    items: [
      { name: "Japanese Spider Crab", aliases: ["Macrocheira kaempferi"] },
      { name: "American Lobster", aliases: ["Homarus americanus"] },
      { name: "Tasmanian Giant Crab", aliases: ["Pseudocarcinus gigas"] },
      { name: "Coconut Crab", aliases: ["Birgus latro"] },
      { name: "Giant Isopod", aliases: ["Bathynomus giganteus"] },
      { name: "European Lobster", aliases: ["Homarus gammarus"] },
      { name: "Giant Freshwater Crayfish", aliases: ["Astacopsis gouldi"] },
      { name: "Alaskan King Crab", aliases: ["Paralithodes camtschaticus"] },
      { name: "Dungeness Crab", aliases: ["Metacarcinus magister"] },
      { name: "Mantis Shrimp", aliases: ["Stomatopoda"] }
    ]
  },
  {
    id: "ani-largest-amphibians",
    category: "Animals",
    prompt: "Top 10 Largest Amphibians",
    hint: "Biggest frogs, salamanders and newts",
    items: [
      { name: "South China Giant Salamander", aliases: ["Andrias sligoi"] },
      { name: "Chinese Giant Salamander", aliases: ["Andrias davidianus"] },
      { name: "Japanese Giant Salamander", aliases: ["Andrias japonicus"] },
      { name: "Goliath Frog", aliases: ["Conraua goliath"] },
      { name: "Hellbender", aliases: ["Cryptobranchus alleganiensis"] },
      { name: "Cane Toad", aliases: ["Rhinella marina"] },
      { name: "Mudpuppy", aliases: ["Necturus maculosus"] },
      { name: "African Bullfrog", aliases: ["Pyxicephalus adspersus"] },
      { name: "American Bullfrog", aliases: ["Lithobates catesbeianus"] },
      { name: "Smoky Jungle Frog", aliases: ["Leptodactylus pentadactylus"] }
    ]
  },
  {
    id: "ani-largest-rodents",
    category: "Animals",
    prompt: "Top 10 Largest Rodents",
    hint: "Biggest gnawing mammals alive",
    items: [
      { name: "Capybara", aliases: ["Hydrochoerus hydrochaeris"] },
      { name: "Eurasian Beaver", aliases: ["Castor fiber"] },
      { name: "North American Beaver", aliases: ["Castor canadensis"] },
      { name: "Patagonian Mara", aliases: ["Dolichotis patagonum"] },
      { name: "North American Porcupine", aliases: ["Erethizon dorsatum"] },
      { name: "African Crested Porcupine", aliases: ["Hystrix cristata"] },
      { name: "Pacarana", aliases: ["Dinomys branickii"] },
      { name: "Coypu", aliases: ["Myocastor coypus", "Nutria", "Ragondin"] },
      { name: "Muskrat", aliases: ["Ondatra zibethicus"] },
      { name: "Paca", aliases: ["Cuniculus paca"] }
    ]
  },
  {
    id: "ani-largest-pinnipeds",
    category: "Animals",
    prompt: "Top 10 Largest Pinnipeds",
    hint: "Biggest seals, sea lions and walruses",
    items: [
      { name: "Southern Elephant Seal", aliases: ["Mirounga leonina"] },
      { name: "Northern Elephant Seal", aliases: ["Mirounga angustirostris"] },
      { name: "Walrus", aliases: ["Odobenus rosmarus"] },
      { name: "Steller Sea Lion", aliases: ["Eumetopias jubatus"] },
      { name: "Leopard Seal", aliases: ["Hydrurga leptonyx"] },
      { name: "Bearded Seal", aliases: ["Erignathus barbatus"] },
      { name: "Weddell Seal", aliases: ["Leptonychotes weddellii"] },
      { name: "Australian Sea Lion", aliases: ["Neophoca cinerea"] },
      { name: "California Sea Lion", aliases: ["Zalophus californianus"] },
      { name: "Grey Seal", aliases: ["Halichoerus grypus"] }
    ]
  },
  {
    id: "ani-smartest-dog-breeds",
    category: "Animals",
    prompt: "Top 10 Most Intelligent Dog Breeds (Coren rankings)",
    hint: "Smartest breeds per Stanley Coren's research",
    items: [
      { name: "Border Collie", aliases: [] },
      { name: "Poodle", aliases: ["Standard Poodle"] },
      { name: "German Shepherd", aliases: [] },
      { name: "Golden Retriever", aliases: [] },
      { name: "Doberman Pinscher", aliases: [] },
      { name: "Shetland Sheepdog", aliases: ["Sheltie"] },
      { name: "Labrador Retriever", aliases: [] },
      { name: "Papillon", aliases: [] },
      { name: "Rottweiler", aliases: [] },
      { name: "Australian Cattle Dog", aliases: ["Blue Heeler"] }
    ]
  },
  {
    id: "ani-largest-spiders",
    category: "Animals",
    prompt: "Top 10 Largest Spiders",
    hint: "Biggest arachnids by leg span or weight",
    items: [
      { name: "Goliath Birdeater", aliases: ["Theraphosa blondi"] },
      { name: "Giant Huntsman Spider", aliases: ["Heteropoda maxima"] },
      { name: "Brazilian Salmon Pink Birdeater", aliases: ["Lasiodora parahybana"] },
      { name: "Grammostola anthracina", aliases: [] },
      { name: "Chaco Golden Knee", aliases: ["Grammostola pulchripes"] },
      { name: "Colombian Giant Tarantula", aliases: ["Megaphobema robustum"] },
      { name: "Face-Sized Tarantula", aliases: ["Poecilotheria rajaei"] },
      { name: "Hercules Baboon Spider", aliases: ["Hysterocrates hercules"] },
      { name: "Camel Spider", aliases: ["Solifugae"] },
      { name: "Brazilian Giant Tawny Red", aliases: ["Grammostola mollicoma"] }
    ]
  },
  {
    id: "ani-slowest-animals",
    category: "Animals",
    prompt: "Top 10 Slowest Animals",
    hint: "Creatures with the most leisurely pace",
    items: [
      { name: "Three-toed Sloth", aliases: ["Bradypus"] },
      { name: "Garden Snail", aliases: ["Cornu aspersum"] },
      { name: "Starfish", aliases: ["Asteroidea", "Sea Star"] },
      { name: "Seahorse", aliases: ["Hippocampus"] },
      { name: "Koala", aliases: ["Phascolarctos cinereus"] },
      { name: "Manatee", aliases: ["Trichechus", "Lamantin"] },
      { name: "Gila Monster", aliases: ["Heloderma suspectum"] },
      { name: "Giant Tortoise", aliases: ["Galapagos Tortoise"] },
      { name: "Banana Slug", aliases: ["Ariolimax"] },
      { name: "American Woodcock", aliases: ["Scolopax minor"] }
    ]
  },
  {
    id: "ani-most-colorful-birds",
    category: "Animals",
    prompt: "Top 10 Most Colorful Birds",
    hint: "Most vibrantly plumaged species",
    items: [
      { name: "Scarlet Macaw", aliases: ["Ara macao"] },
      { name: "Mandarin Duck", aliases: ["Aix galericulata"] },
      { name: "Indian Peafowl", aliases: ["Pavo cristatus", "Peacock"] },
      { name: "Wilson's Bird-of-Paradise", aliases: ["Cicinnurus respublica"] },
      { name: "Lilac-breasted Roller", aliases: ["Coracias caudatus"] },
      { name: "Resplendent Quetzal", aliases: ["Pharomachrus mocinno"] },
      { name: "Keel-billed Toucan", aliases: ["Ramphastos sulfuratus"] },
      { name: "Painted Bunting", aliases: ["Passerina ciris"] },
      { name: "Gouldian Finch", aliases: ["Erythrura gouldiae"] },
      { name: "Atlantic Puffin", aliases: ["Fratercula arctica"] }
    ]
  },
  {
    id: "ani-most-common-pets",
    category: "Animals",
    prompt: "Top 10 Most Common Pet Species",
    hint: "Most widely kept pets worldwide",
    items: [
      { name: "Dog", aliases: ["Canis familiaris"] },
      { name: "Cat", aliases: ["Felis catus"] },
      { name: "Goldfish", aliases: ["Carassius auratus"] },
      { name: "Budgerigar", aliases: ["Budgie", "Melopsittacus undulatus"] },
      { name: "Rabbit", aliases: ["Oryctolagus cuniculus"] },
      { name: "Hamster", aliases: ["Mesocricetus auratus"] },
      { name: "Guinea Pig", aliases: ["Cavia porcellus"] },
      { name: "Canary", aliases: ["Serinus canaria"] },
      { name: "Cockatiel", aliases: ["Nymphicus hollandicus"] },
      { name: "Turtle", aliases: ["Red-eared Slider"] }
    ]
  },
  {
    id: "ani-diverse-animal-classes",
    category: "Animals",
    prompt: "Top 10 Most Diverse Animal Classes (by species count)",
    hint: "Animal groups with the most known species",
    items: [
      { name: "Insecta", aliases: ["Insects"] },
      { name: "Arachnida", aliases: ["Spiders", "Scorpions"] },
      { name: "Gastropoda", aliases: ["Snails", "Slugs"] },
      { name: "Actinopterygii", aliases: ["Ray-finned Fishes"] },
      { name: "Malacostraca", aliases: ["Crabs", "Lobsters", "Shrimp"] },
      { name: "Aves", aliases: ["Birds"] },
      { name: "Reptilia", aliases: ["Reptiles"] },
      { name: "Mammalia", aliases: ["Mammals"] },
      { name: "Amphibia", aliases: ["Amphibians"] },
      { name: "Bivalvia", aliases: ["Clams", "Mussels"] }
    ]
  },
  {
    id: "ani-largest-eagles",
    category: "Animals",
    prompt: "Top 10 Largest Eagles in the World",
    hint: "Biggest birds of prey by weight",
    items: [
      { name: "Steller's Sea Eagle", aliases: ["Haliaeetus pelagicus"] },
      { name: "Philippine Eagle", aliases: ["Pithecophaga jefferyi"] },
      { name: "Harpy Eagle", aliases: ["Harpia harpyja"] },
      { name: "White-tailed Eagle", aliases: ["Haliaeetus albicilla"] },
      { name: "Martial Eagle", aliases: ["Polemaetus bellicosus"] },
      { name: "Wedge-tailed Eagle", aliases: ["Aquila audax"] },
      { name: "Golden Eagle", aliases: ["Aquila chrysaetos"] },
      { name: "Bald Eagle", aliases: ["Haliaeetus leucocephalus"] },
      { name: "Crowned Eagle", aliases: ["Stephanoaetus coronatus"] },
      { name: "Verreaux's Eagle", aliases: ["Aquila verreauxii"] }
    ]
  },
  {
    id: "ani-largest-bears",
    category: "Animals",
    prompt: "Top 10 Largest Bears",
    hint: "Biggest ursine species and subspecies",
    items: [
      { name: "Polar Bear", aliases: ["Ursus maritimus"] },
      { name: "Kodiak Bear", aliases: ["Ursus arctos middendorffi"] },
      { name: "Grizzly Bear", aliases: ["Ursus arctos horribilis"] },
      { name: "Brown Bear", aliases: ["Ursus arctos"] },
      { name: "American Black Bear", aliases: ["Ursus americanus"] },
      { name: "Asian Black Bear", aliases: ["Ursus thibetanus"] },
      { name: "Sloth Bear", aliases: ["Melursus ursinus"] },
      { name: "Spectacled Bear", aliases: ["Tremarctos ornatus"] },
      { name: "Giant Panda", aliases: ["Ailuropoda melanoleuca"] },
      { name: "Sun Bear", aliases: ["Helarctos malayanus"] }
    ]
  },
  {
    id: "ani-largest-snakes",
    category: "Animals",
    prompt: "Top 10 Largest Snakes",
    hint: "Longest and heaviest serpents alive",
    items: [
      { name: "Green Anaconda", aliases: ["Eunectes murinus"] },
      { name: "Reticulated Python", aliases: ["Malayopython reticulatus"] },
      { name: "Burmese Python", aliases: ["Python bivittatus"] },
      { name: "African Rock Python", aliases: ["Python sebae"] },
      { name: "Indian Python", aliases: ["Python molurus"] },
      { name: "Yellow Anaconda", aliases: ["Eunectes notaeus"] },
      { name: "Amethystine Python", aliases: ["Simalia amethistina"] },
      { name: "Boa Constrictor", aliases: ["Boa constrictor"] },
      { name: "King Cobra", aliases: ["Ophiophagus hannah"] },
      { name: "Cuban Boa", aliases: ["Chilabothrus angulifer"] }
    ]
  },
  {
    id: "ani-most-popular-flowers",
    category: "Animals",
    prompt: "Top 10 Most Popular Flowers in the World",
    hint: "Best-loved blooms in gardens and gifts",
    items: [
      { name: "Rose", aliases: ["Rosa"] },
      { name: "Tulip", aliases: ["Tulipa"] },
      { name: "Lily", aliases: ["Lilium"] },
      { name: "Orchid", aliases: ["Orchidaceae"] },
      { name: "Sunflower", aliases: ["Helianthus annuus"] },
      { name: "Daisy", aliases: ["Bellis perennis"] },
      { name: "Carnation", aliases: ["Dianthus caryophyllus"] },
      { name: "Chrysanthemum", aliases: [] },
      { name: "Daffodil", aliases: ["Narcissus"] },
      { name: "Iris", aliases: [] }
    ]
  },
  {
    id: "ani-largest-prehistoric-mammals",
    category: "Animals",
    prompt: "Top 10 Largest Prehistoric Mammals",
    hint: "Heaviest mammals of the Cenozoic",
    items: [
      { name: "Paraceratherium", aliases: ["Indricotherium"] },
      { name: "Palaeoloxodon namadicus", aliases: ["Asian Straight-tusked Elephant"] },
      { name: "Mammuthus sungari", aliases: ["Songhua River Mammoth"] },
      { name: "Mammuthus trogontherii", aliases: ["Steppe Mammoth"] },
      { name: "Deinotherium", aliases: [] },
      { name: "Woolly Mammoth", aliases: ["Mammuthus primigenius"] },
      { name: "Megatherium", aliases: ["Giant Ground Sloth"] },
      { name: "Megaloceros", aliases: ["Irish Elk"] },
      { name: "Glyptodon", aliases: [] },
      { name: "Smilodon", aliases: ["Saber-toothed Cat"] }
    ]
  },
  {
    id: "ani-fastest-fish",
    category: "Animals",
    prompt: "Top 10 Fastest Fish in the Ocean",
    hint: "Speediest swimmers in salt water",
    items: [
      { name: "Black Marlin", aliases: ["Istiompax indica"] },
      { name: "Sailfish", aliases: ["Istiophorus platypterus"] },
      { name: "Striped Marlin", aliases: ["Kajikia audax"] },
      { name: "Wahoo", aliases: ["Acanthocybium solandri"] },
      { name: "Mako Shark", aliases: ["Isurus oxyrinchus"] },
      { name: "Bluefin Tuna", aliases: ["Thunnus thynnus"] },
      { name: "Yellowfin Tuna", aliases: ["Thunnus albacares"] },
      { name: "Swordfish", aliases: ["Xiphias gladius"] },
      { name: "Blue Shark", aliases: ["Prionace glauca"] },
      { name: "Bonefish", aliases: ["Albula vulpes"] }
    ]
  },
  {
    id: "ani-most-poisonous-frogs",
    category: "Animals",
    prompt: "Top 10 Most Poisonous Frogs",
    hint: "Deadliest amphibian skin toxins",
    items: [
      { name: "Golden Poison Frog", aliases: ["Phyllobates terribilis"] },
      { name: "Black-legged Dart Frog", aliases: ["Phyllobates bicolor"] },
      { name: "Kokoe Poison Dart Frog", aliases: ["Phyllobates aurotaenia"] },
      { name: "Phantasmal Poison Frog", aliases: ["Epipedobates tricolor"] },
      { name: "Strawberry Poison Dart Frog", aliases: ["Oophaga pumilio"] },
      { name: "Blue Poison Dart Frog", aliases: ["Dendrobates tinctorius azureus"] },
      { name: "Dyeing Dart Frog", aliases: ["Dendrobates tinctorius"] },
      { name: "Granular Poison Frog", aliases: ["Oophaga granulifera"] },
      { name: "Yellow-banded Poison Dart Frog", aliases: ["Dendrobates leucomelas"] },
      { name: "Lovely Poison Frog", aliases: ["Phyllobates lugubris"] }
    ]
  },
  {
    id: "ani-largest-owls",
    category: "Animals",
    prompt: "Top 10 Largest Owls in the World",
    hint: "Biggest nocturnal raptors",
    items: [
      { name: "Blakiston's Fish Owl", aliases: ["Bubo blakistoni"] },
      { name: "Eurasian Eagle-Owl", aliases: ["Bubo bubo"] },
      { name: "Great Grey Owl", aliases: ["Strix nebulosa"] },
      { name: "Snowy Owl", aliases: ["Bubo scandiacus"] },
      { name: "Verreaux's Eagle-Owl", aliases: ["Bubo lacteus"] },
      { name: "Pharaoh Eagle-Owl", aliases: ["Bubo ascalaphus"] },
      { name: "Powerful Owl", aliases: ["Ninox strenua"] },
      { name: "Great Horned Owl", aliases: ["Bubo virginianus"] },
      { name: "Tawny Fish Owl", aliases: ["Ketupa flavipes"] },
      { name: "Spotted Eagle-Owl", aliases: ["Bubo africanus"] }
    ]
  },
  { id: "sci-planets-size", category: "Science", prompt: "Top 10 largest planets in our solar system (by diameter)", hint: "There are only 8 planets, so include dwarf planets",
    items: [
      { name: "Jupiter", aliases: ["Jupiter"] },
      { name: "Saturn", aliases: ["Saturne"] },
      { name: "Uranus", aliases: ["Uranus"] },
      { name: "Neptune", aliases: ["Neptune"] },
      { name: "Earth", aliases: ["Terre"] },
      { name: "Venus", aliases: ["Venus", "Vénus"] },
      { name: "Mars", aliases: ["Mars"] },
      { name: "Mercury", aliases: ["Mercure"] },
      { name: "Pluto", aliases: ["Pluton"] },
      { name: "Eris", aliases: ["Eris"] }
    ]
  },
  { id: "sci-planets-distance", category: "Science", prompt: "Top 10 planets/dwarf planets by distance from the Sun (closest to farthest)", hint: "Starts with Mercury",
    items: [
      { name: "Mercury", aliases: ["Mercure"] },
      { name: "Venus", aliases: ["Vénus"] },
      { name: "Earth", aliases: ["Terre"] },
      { name: "Mars", aliases: ["Mars"] },
      { name: "Ceres", aliases: ["Cérès"] },
      { name: "Jupiter", aliases: ["Jupiter"] },
      { name: "Saturn", aliases: ["Saturne"] },
      { name: "Uranus", aliases: ["Uranus"] },
      { name: "Neptune", aliases: ["Neptune"] },
      { name: "Pluto", aliases: ["Pluton"] }
    ]
  },
  { id: "sci-planets-mass", category: "Science", prompt: "Top 10 most massive planets/dwarf planets in solar system", hint: "Gas giants dominate",
    items: [
      { name: "Jupiter", aliases: ["Jupiter"] },
      { name: "Saturn", aliases: ["Saturne"] },
      { name: "Neptune", aliases: ["Neptune"] },
      { name: "Uranus", aliases: ["Uranus"] },
      { name: "Earth", aliases: ["Terre"] },
      { name: "Venus", aliases: ["Vénus"] },
      { name: "Mars", aliases: ["Mars"] },
      { name: "Mercury", aliases: ["Mercure"] },
      { name: "Eris", aliases: ["Eris"] },
      { name: "Pluto", aliases: ["Pluton"] }
    ]
  },
  { id: "sci-largest-moons", category: "Science", prompt: "Top 10 largest moons in the solar system", hint: "Jupiter and Saturn host most",
    items: [
      { name: "Ganymede", aliases: ["Ganymède"] },
      { name: "Titan", aliases: ["Titan"] },
      { name: "Callisto", aliases: ["Callisto"] },
      { name: "Io", aliases: ["Io"] },
      { name: "Moon", aliases: ["Lune", "Luna"] },
      { name: "Europa", aliases: ["Europe"] },
      { name: "Triton", aliases: ["Triton"] },
      { name: "Titania", aliases: ["Titania"] },
      { name: "Rhea", aliases: ["Rhéa"] },
      { name: "Oberon", aliases: ["Obéron"] }
    ]
  },
  { id: "sci-constellations", category: "Science", prompt: "Top 10 most prominent/recognizable constellations", hint: "Includes zodiac and famous patterns",
    items: [
      { name: "Orion", aliases: ["Orion"] },
      { name: "Ursa Major", aliases: ["Grande Ourse", "Big Dipper"] },
      { name: "Ursa Minor", aliases: ["Petite Ourse", "Little Dipper"] },
      { name: "Cassiopeia", aliases: ["Cassiopée"] },
      { name: "Leo", aliases: ["Lion"] },
      { name: "Scorpius", aliases: ["Scorpion"] },
      { name: "Taurus", aliases: ["Taureau"] },
      { name: "Gemini", aliases: ["Gémeaux"] },
      { name: "Cygnus", aliases: ["Cygne"] },
      { name: "Crux", aliases: ["Croix du Sud", "Southern Cross"] }
    ]
  },
  { id: "sci-brightest-stars", category: "Science", prompt: "Top 10 brightest stars in the night sky (apparent magnitude)", hint: "Sirius is #1",
    items: [
      { name: "Sirius", aliases: ["Sirius"] },
      { name: "Canopus", aliases: ["Canopus"] },
      { name: "Alpha Centauri", aliases: ["Rigil Kentaurus"] },
      { name: "Arcturus", aliases: ["Arcturus"] },
      { name: "Vega", aliases: ["Véga"] },
      { name: "Capella", aliases: ["Capella"] },
      { name: "Rigel", aliases: ["Rigel"] },
      { name: "Procyon", aliases: ["Procyon"] },
      { name: "Achernar", aliases: ["Achernar"] },
      { name: "Betelgeuse", aliases: ["Bételgeuse"] }
    ]
  },
  { id: "sci-closest-stars", category: "Science", prompt: "Top 10 closest star systems to Earth", hint: "Excluding the Sun",
    items: [
      { name: "Proxima Centauri", aliases: ["Proxima du Centaure"] },
      { name: "Alpha Centauri A", aliases: ["Rigil Kentaurus A"] },
      { name: "Alpha Centauri B", aliases: ["Rigil Kentaurus B"] },
      { name: "Barnard's Star", aliases: ["Étoile de Barnard"] },
      { name: "Luhman 16", aliases: ["WISE 1049-5319"] },
      { name: "WISE 0855-0714", aliases: ["WISE 0855"] },
      { name: "Wolf 359", aliases: ["Wolf 359"] },
      { name: "Lalande 21185", aliases: ["Lalande 21185"] },
      { name: "Sirius A", aliases: ["Sirius A"] },
      { name: "Sirius B", aliases: ["Sirius B"] }
    ]
  },
  { id: "sci-largest-stars", category: "Science", prompt: "Top 10 largest known stars (by radius)", hint: "Hypergiants",
    items: [
      { name: "Stephenson 2-18", aliases: ["Stephenson 2-18"] },
      { name: "UY Scuti", aliases: ["UY Scuti"] },
      { name: "WOH G64", aliases: ["WOH G64"] },
      { name: "Westerlund 1-26", aliases: ["Westerlund 1-26"] },
      { name: "VY Canis Majoris", aliases: ["VY Canis Majoris"] },
      { name: "RW Cephei", aliases: ["RW Cephei"] },
      { name: "VV Cephei A", aliases: ["VV Cephei A"] },
      { name: "Mu Cephei", aliases: ["Mu Cephei", "Erakis"] },
      { name: "V354 Cephei", aliases: ["V354 Cephei"] },
      { name: "KY Cygni", aliases: ["KY Cygni"] }
    ]
  },
  { id: "sci-first-10-elements", category: "Science", prompt: "Top 10 elements by atomic number (first 10)", hint: "Starts with hydrogen",
    items: [
      { name: "Hydrogen", aliases: ["Hydrogène", "H"] },
      { name: "Helium", aliases: ["Hélium", "He"] },
      { name: "Lithium", aliases: ["Lithium", "Li"] },
      { name: "Beryllium", aliases: ["Béryllium", "Be"] },
      { name: "Boron", aliases: ["Bore", "B"] },
      { name: "Carbon", aliases: ["Carbone", "C"] },
      { name: "Nitrogen", aliases: ["Azote", "N"] },
      { name: "Oxygen", aliases: ["Oxygène", "O"] },
      { name: "Fluorine", aliases: ["Fluor", "F"] },
      { name: "Neon", aliases: ["Néon", "Ne"] }
    ]
  },
  { id: "sci-earth-crust", category: "Science", prompt: "Top 10 most abundant elements in Earth's crust", hint: "Oxygen is #1",
    items: [
      { name: "Oxygen", aliases: ["Oxygène", "O"] },
      { name: "Silicon", aliases: ["Silicium", "Si"] },
      { name: "Aluminum", aliases: ["Aluminium", "Al"] },
      { name: "Iron", aliases: ["Fer", "Fe"] },
      { name: "Calcium", aliases: ["Calcium", "Ca"] },
      { name: "Sodium", aliases: ["Sodium", "Na"] },
      { name: "Potassium", aliases: ["Potassium", "K"] },
      { name: "Magnesium", aliases: ["Magnésium", "Mg"] },
      { name: "Titanium", aliases: ["Titane", "Ti"] },
      { name: "Hydrogen", aliases: ["Hydrogène", "H"] }
    ]
  },
  { id: "sci-human-body-elements", category: "Science", prompt: "Top 10 most abundant elements in the human body (by mass)", hint: "Oxygen leads",
    items: [
      { name: "Oxygen", aliases: ["Oxygène", "O"] },
      { name: "Carbon", aliases: ["Carbone", "C"] },
      { name: "Hydrogen", aliases: ["Hydrogène", "H"] },
      { name: "Nitrogen", aliases: ["Azote", "N"] },
      { name: "Calcium", aliases: ["Calcium", "Ca"] },
      { name: "Phosphorus", aliases: ["Phosphore", "P"] },
      { name: "Potassium", aliases: ["Potassium", "K"] },
      { name: "Sulfur", aliases: ["Soufre", "S"] },
      { name: "Sodium", aliases: ["Sodium", "Na"] },
      { name: "Chlorine", aliases: ["Chlore", "Cl"] }
    ]
  },
  { id: "sci-universe-elements", category: "Science", prompt: "Top 10 most abundant elements in the universe", hint: "Hydrogen dominates",
    items: [
      { name: "Hydrogen", aliases: ["Hydrogène", "H"] },
      { name: "Helium", aliases: ["Hélium", "He"] },
      { name: "Oxygen", aliases: ["Oxygène", "O"] },
      { name: "Carbon", aliases: ["Carbone", "C"] },
      { name: "Neon", aliases: ["Néon", "Ne"] },
      { name: "Iron", aliases: ["Fer", "Fe"] },
      { name: "Nitrogen", aliases: ["Azote", "N"] },
      { name: "Silicon", aliases: ["Silicium", "Si"] },
      { name: "Magnesium", aliases: ["Magnésium", "Mg"] },
      { name: "Sulfur", aliases: ["Soufre", "S"] }
    ]
  },
  { id: "sci-elements-places", category: "Science", prompt: "Top 10 elements named after places", hint: "Cities, countries, regions",
    items: [
      { name: "Americium", aliases: ["Américium", "Am"] },
      { name: "Californium", aliases: ["Californium", "Cf"] },
      { name: "Francium", aliases: ["Francium", "Fr"] },
      { name: "Germanium", aliases: ["Germanium", "Ge"] },
      { name: "Polonium", aliases: ["Polonium", "Po"] },
      { name: "Scandium", aliases: ["Scandium", "Sc"] },
      { name: "Gallium", aliases: ["Gallium", "Ga"] },
      { name: "Hassium", aliases: ["Hassium", "Hs"] },
      { name: "Berkelium", aliases: ["Berkélium", "Bk"] },
      { name: "Darmstadtium", aliases: ["Darmstadtium", "Ds"] }
    ]
  },
  { id: "sci-elements-people", category: "Science", prompt: "Top 10 elements named after people", hint: "Curium, Einsteinium...",
    items: [
      { name: "Curium", aliases: ["Curium", "Cm"] },
      { name: "Einsteinium", aliases: ["Einsteinium", "Es"] },
      { name: "Fermium", aliases: ["Fermium", "Fm"] },
      { name: "Mendelevium", aliases: ["Mendélévium", "Md"] },
      { name: "Nobelium", aliases: ["Nobélium", "No"] },
      { name: "Bohrium", aliases: ["Bohrium", "Bh"] },
      { name: "Rutherfordium", aliases: ["Rutherfordium", "Rf"] },
      { name: "Seaborgium", aliases: ["Seaborgium", "Sg"] },
      { name: "Meitnerium", aliases: ["Meitnérium", "Mt"] },
      { name: "Oganesson", aliases: ["Oganesson", "Og"] }
    ]
  },
  { id: "sci-reactive-elements", category: "Science", prompt: "Top 10 most reactive elements", hint: "Alkali metals & halogens",
    items: [
      { name: "Fluorine", aliases: ["Fluor", "F"] },
      { name: "Cesium", aliases: ["Césium", "Cs"] },
      { name: "Francium", aliases: ["Francium", "Fr"] },
      { name: "Rubidium", aliases: ["Rubidium", "Rb"] },
      { name: "Potassium", aliases: ["Potassium", "K"] },
      { name: "Sodium", aliases: ["Sodium", "Na"] },
      { name: "Lithium", aliases: ["Lithium", "Li"] },
      { name: "Chlorine", aliases: ["Chlore", "Cl"] },
      { name: "Oxygen", aliases: ["Oxygène", "O"] },
      { name: "Bromine", aliases: ["Brome", "Br"] }
    ]
  },
  { id: "sci-densest-metals", category: "Science", prompt: "Top 10 densest metals", hint: "Osmium is #1",
    items: [
      { name: "Osmium", aliases: ["Osmium", "Os"] },
      { name: "Iridium", aliases: ["Iridium", "Ir"] },
      { name: "Platinum", aliases: ["Platine", "Pt"] },
      { name: "Rhenium", aliases: ["Rhénium", "Re"] },
      { name: "Neptunium", aliases: ["Neptunium", "Np"] },
      { name: "Plutonium", aliases: ["Plutonium", "Pu"] },
      { name: "Gold", aliases: ["Or", "Au"] },
      { name: "Tungsten", aliases: ["Tungstène", "W"] },
      { name: "Uranium", aliases: ["Uranium", "U"] },
      { name: "Tantalum", aliases: ["Tantale", "Ta"] }
    ]
  },
  { id: "sci-lightest-metals", category: "Science", prompt: "Top 10 lightest metals (lowest density)", hint: "Lithium is #1",
    items: [
      { name: "Lithium", aliases: ["Lithium", "Li"] },
      { name: "Potassium", aliases: ["Potassium", "K"] },
      { name: "Sodium", aliases: ["Sodium", "Na"] },
      { name: "Rubidium", aliases: ["Rubidium", "Rb"] },
      { name: "Calcium", aliases: ["Calcium", "Ca"] },
      { name: "Magnesium", aliases: ["Magnésium", "Mg"] },
      { name: "Beryllium", aliases: ["Béryllium", "Be"] },
      { name: "Cesium", aliases: ["Césium", "Cs"] },
      { name: "Aluminum", aliases: ["Aluminium", "Al"] },
      { name: "Strontium", aliases: ["Strontium", "Sr"] }
    ]
  },
  { id: "sci-rarest-elements", category: "Science", prompt: "Top 10 rarest naturally-occurring elements on Earth", hint: "Astatine is #1",
    items: [
      { name: "Astatine", aliases: ["Astate", "At"] },
      { name: "Francium", aliases: ["Francium", "Fr"] },
      { name: "Protactinium", aliases: ["Protactinium", "Pa"] },
      { name: "Radium", aliases: ["Radium", "Ra"] },
      { name: "Polonium", aliases: ["Polonium", "Po"] },
      { name: "Actinium", aliases: ["Actinium", "Ac"] },
      { name: "Technetium", aliases: ["Technétium", "Tc"] },
      { name: "Promethium", aliases: ["Prométhium", "Pm"] },
      { name: "Neptunium", aliases: ["Neptunium", "Np"] },
      { name: "Plutonium", aliases: ["Plutonium", "Pu"] }
    ]
  },
  { id: "sci-top-drugs-sales", category: "Science", prompt: "Top 10 best-selling pharmaceutical drugs (lifetime sales)", hint: "Includes Humira, Lipitor",
    items: [
      { name: "Humira", aliases: ["Adalimumab"] },
      { name: "Lipitor", aliases: ["Atorvastatin", "Atorvastatine"] },
      { name: "Keytruda", aliases: ["Pembrolizumab"] },
      { name: "Revlimid", aliases: ["Lenalidomide"] },
      { name: "Enbrel", aliases: ["Etanercept"] },
      { name: "Plavix", aliases: ["Clopidogrel"] },
      { name: "Remicade", aliases: ["Infliximab"] },
      { name: "Rituxan", aliases: ["Rituximab", "MabThera"] },
      { name: "Advair", aliases: ["Seretide", "Fluticasone-salmeterol"] },
      { name: "Nexium", aliases: ["Esomeprazole"] }
    ]
  },
  { id: "sci-moon-walkers", category: "Science", prompt: "Top 12 people who walked on the Moon (in order)", hint: "Only 12 ever — list any 10",
    items: [
      { name: "Neil Armstrong", aliases: ["Armstrong"] },
      { name: "Buzz Aldrin", aliases: ["Aldrin"] },
      { name: "Pete Conrad", aliases: ["Conrad"] },
      { name: "Alan Bean", aliases: ["Bean"] },
      { name: "Alan Shepard", aliases: ["Shepard"] },
      { name: "Edgar Mitchell", aliases: ["Mitchell"] },
      { name: "David Scott", aliases: ["Scott"] },
      { name: "James Irwin", aliases: ["Irwin"] },
      { name: "John Young", aliases: ["Young"] },
      { name: "Charles Duke", aliases: ["Duke"] }
    ]
  },
  { id: "sci-first-humans-space", category: "Science", prompt: "Top 10 first humans in space (chronological)", hint: "Gagarin was first",
    items: [
      { name: "Yuri Gagarin", aliases: ["Gagarine"] },
      { name: "Alan Shepard", aliases: ["Shepard"] },
      { name: "Gus Grissom", aliases: ["Grissom"] },
      { name: "Gherman Titov", aliases: ["Titov"] },
      { name: "John Glenn", aliases: ["Glenn"] },
      { name: "Scott Carpenter", aliases: ["Carpenter"] },
      { name: "Andrian Nikolayev", aliases: ["Nikolayev"] },
      { name: "Pavel Popovich", aliases: ["Popovitch"] },
      { name: "Wally Schirra", aliases: ["Schirra"] },
      { name: "Gordon Cooper", aliases: ["Cooper"] }
    ]
  },
  { id: "sci-nasa-missions", category: "Science", prompt: "Top 10 most successful/famous NASA missions", hint: "Apollo, Voyager, Hubble...",
    items: [
      { name: "Apollo 11", aliases: ["Apollo 11"] },
      { name: "Voyager 1", aliases: ["Voyager 1"] },
      { name: "Hubble Space Telescope", aliases: ["Hubble"] },
      { name: "James Webb Space Telescope", aliases: ["JWST", "Webb"] },
      { name: "Apollo 13", aliases: ["Apollo 13"] },
      { name: "Mars Curiosity", aliases: ["Curiosity Rover"] },
      { name: "Mars Perseverance", aliases: ["Perseverance"] },
      { name: "Cassini", aliases: ["Cassini-Huygens"] },
      { name: "Space Shuttle", aliases: ["Navette spatiale"] },
      { name: "International Space Station", aliases: ["ISS", "Station spatiale internationale"] }
    ]
  },
  { id: "sci-longest-spaceflights", category: "Science", prompt: "Top 10 longest single human spaceflights", hint: "Polyakov tops list",
    items: [
      { name: "Valeri Polyakov", aliases: ["Poliakov"] },
      { name: "Sergei Avdeyev", aliases: ["Avdeïev"] },
      { name: "Vladimir Titov", aliases: ["Titov"] },
      { name: "Musa Manarov", aliases: ["Manarov"] },
      { name: "Mikhail Kornienko", aliases: ["Kornienko"] },
      { name: "Scott Kelly", aliases: ["Kelly"] },
      { name: "Yuri Romanenko", aliases: ["Romanenko"] },
      { name: "Sergei Krikalev", aliases: ["Krikalev"] },
      { name: "Valeri Korzun", aliases: ["Korzun"] },
      { name: "Frank Rubio", aliases: ["Rubio"] }
    ]
  },
  { id: "sci-powerful-rockets", category: "Science", prompt: "Top 10 most powerful rockets ever built (by thrust)", hint: "Starship is current king",
    items: [
      { name: "SpaceX Starship", aliases: ["Starship"] },
      { name: "SLS Block 1", aliases: ["Space Launch System"] },
      { name: "Saturn V", aliases: ["Saturn V"] },
      { name: "Energia", aliases: ["Energia"] },
      { name: "N1", aliases: ["N-1"] },
      { name: "Falcon Heavy", aliases: ["Falcon Heavy"] },
      { name: "Delta IV Heavy", aliases: ["Delta IV Heavy"] },
      { name: "Space Shuttle", aliases: ["Navette spatiale"] },
      { name: "Ariane 5", aliases: ["Ariane 5"] },
      { name: "Long March 5", aliases: ["Longue Marche 5"] }
    ]
  },
  { id: "sci-largest-telescopes", category: "Science", prompt: "Top 10 largest optical telescopes (by mirror diameter)", hint: "Includes upcoming projects",
    items: [
      { name: "Extremely Large Telescope", aliases: ["ELT"] },
      { name: "Thirty Meter Telescope", aliases: ["TMT"] },
      { name: "Giant Magellan Telescope", aliases: ["GMT"] },
      { name: "Gran Telescopio Canarias", aliases: ["GTC"] },
      { name: "Large Binocular Telescope", aliases: ["LBT"] },
      { name: "Keck Observatory", aliases: ["Keck I", "Keck II"] },
      { name: "Southern African Large Telescope", aliases: ["SALT"] },
      { name: "Hobby-Eberly Telescope", aliases: ["HET"] },
      { name: "Subaru Telescope", aliases: ["Subaru"] },
      { name: "Very Large Telescope", aliases: ["VLT"] }
    ]
  },
  { id: "sci-particle-accelerators", category: "Science", prompt: "Top 10 largest/most powerful particle accelerators", hint: "LHC is the biggest",
    items: [
      { name: "Large Hadron Collider", aliases: ["LHC"] },
      { name: "Tevatron", aliases: ["Tevatron"] },
      { name: "HERA", aliases: ["HERA"] },
      { name: "LEP", aliases: ["Large Electron-Positron"] },
      { name: "Relativistic Heavy Ion Collider", aliases: ["RHIC"] },
      { name: "SLAC", aliases: ["Stanford Linear Accelerator"] },
      { name: "SPS", aliases: ["Super Proton Synchrotron"] },
      { name: "PEP-II", aliases: ["PEP-II"] },
      { name: "KEKB", aliases: ["KEKB"] },
      { name: "J-PARC", aliases: ["J-PARC"] }
    ]
  },
  { id: "sci-famous-scientists", category: "Science", prompt: "Top 10 most famous scientists in history", hint: "Einstein, Newton, Darwin...",
    items: [
      { name: "Albert Einstein", aliases: ["Einstein"] },
      { name: "Isaac Newton", aliases: ["Newton"] },
      { name: "Charles Darwin", aliases: ["Darwin"] },
      { name: "Galileo Galilei", aliases: ["Galilée"] },
      { name: "Marie Curie", aliases: ["Curie"] },
      { name: "Nikola Tesla", aliases: ["Tesla"] },
      { name: "Stephen Hawking", aliases: ["Hawking"] },
      { name: "Louis Pasteur", aliases: ["Pasteur"] },
      { name: "Nicolaus Copernicus", aliases: ["Copernic"] },
      { name: "Aristotle", aliases: ["Aristote"] }
    ]
  },
  { id: "sci-nobel-physics-countries", category: "Science", prompt: "Top 10 countries by Nobel Prizes in Physics", hint: "USA leads",
    items: [
      { name: "United States", aliases: ["USA", "États-Unis"] },
      { name: "Germany", aliases: ["Allemagne"] },
      { name: "United Kingdom", aliases: ["UK", "Royaume-Uni"] },
      { name: "France", aliases: ["France"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Russia", aliases: ["Russie", "USSR", "URSS"] },
      { name: "Netherlands", aliases: ["Pays-Bas"] },
      { name: "Sweden", aliases: ["Suède"] },
      { name: "Switzerland", aliases: ["Suisse"] },
      { name: "Italy", aliases: ["Italie"] }
    ]
  },
  { id: "sci-nobel-chemistry-countries", category: "Science", prompt: "Top 10 countries by Nobel Prizes in Chemistry", hint: "USA leads here too",
    items: [
      { name: "United States", aliases: ["USA"] },
      { name: "Germany", aliases: ["Allemagne"] },
      { name: "United Kingdom", aliases: ["UK", "Royaume-Uni"] },
      { name: "France", aliases: ["France"] },
      { name: "Japan", aliases: ["Japon"] },
      { name: "Switzerland", aliases: ["Suisse"] },
      { name: "Sweden", aliases: ["Suède"] },
      { name: "Israel", aliases: ["Israël"] },
      { name: "Netherlands", aliases: ["Pays-Bas"] },
      { name: "Canada", aliases: ["Canada"] }
    ]
  },
  { id: "sci-nobel-medicine-countries", category: "Science", prompt: "Top 10 countries by Nobel Prizes in Medicine", hint: "USA dominant",
    items: [
      { name: "United States", aliases: ["USA"] },
      { name: "United Kingdom", aliases: ["UK", "Royaume-Uni"] },
      { name: "Germany", aliases: ["Allemagne"] },
      { name: "France", aliases: ["France"] },
      { name: "Sweden", aliases: ["Suède"] },
      { name: "Switzerland", aliases: ["Suisse"] },
      { name: "Australia", aliases: ["Australie"] },
      { name: "Denmark", aliases: ["Danemark"] },
      { name: "Austria", aliases: ["Autriche"] },
      { name: "Japan", aliases: ["Japon"] }
    ]
  },
  { id: "sci-mass-extinctions", category: "Science", prompt: "Top 10 largest mass extinction events in Earth's history", hint: "Big Five plus others",
    items: [
      { name: "Permian-Triassic", aliases: ["The Great Dying", "Permien-Trias"] },
      { name: "Cretaceous-Paleogene", aliases: ["K-Pg", "K-T extinction"] },
      { name: "Late Devonian", aliases: ["Dévonien"] },
      { name: "Ordovician-Silurian", aliases: ["Ordovicien-Silurien"] },
      { name: "Triassic-Jurassic", aliases: ["Trias-Jurassique"] },
      { name: "Capitanian", aliases: ["Capitanien"] },
      { name: "Cambrian-Ordovician", aliases: ["Cambrien-Ordovicien"] },
      { name: "Eocene-Oligocene", aliases: ["Grande Coupure"] },
      { name: "Toarcian", aliases: ["Toarcien"] },
      { name: "Holocene Extinction", aliases: ["Anthropocene", "Sixth Extinction"] }
    ]
  },
  { id: "sci-greatest-inventions", category: "Science", prompt: "Top 10 most important inventions of all time", hint: "Wheel, printing press...",
    items: [
      { name: "Wheel", aliases: ["Roue"] },
      { name: "Printing Press", aliases: ["Imprimerie"] },
      { name: "Electricity", aliases: ["Électricité"] },
      { name: "Internet", aliases: ["Internet"] },
      { name: "Telephone", aliases: ["Téléphone"] },
      { name: "Penicillin", aliases: ["Pénicilline"] },
      { name: "Steam Engine", aliases: ["Machine à vapeur"] },
      { name: "Light Bulb", aliases: ["Ampoule"] },
      { name: "Compass", aliases: ["Boussole"] },
      { name: "Computer", aliases: ["Ordinateur"] }
    ]
  },
  { id: "sci-20th-century-scientists", category: "Science", prompt: "Top 10 most influential 20th-century scientists", hint: "Einstein, Curie...",
    items: [
      { name: "Albert Einstein", aliases: ["Einstein"] },
      { name: "Marie Curie", aliases: ["Curie"] },
      { name: "Niels Bohr", aliases: ["Bohr"] },
      { name: "Alan Turing", aliases: ["Turing"] },
      { name: "Werner Heisenberg", aliases: ["Heisenberg"] },
      { name: "Richard Feynman", aliases: ["Feynman"] },
      { name: "Erwin Schrödinger", aliases: ["Schrödinger"] },
      { name: "Max Planck", aliases: ["Planck"] },
      { name: "Francis Crick", aliases: ["Crick"] },
      { name: "James Watson", aliases: ["Watson"] }
    ]
  },
  { id: "sci-hottest-planets", category: "Science", prompt: "Top 10 hottest planets/dwarf planets in solar system (surface temp)", hint: "Venus is #1",
    items: [
      { name: "Venus", aliases: ["Vénus"] },
      { name: "Mercury", aliases: ["Mercure"] },
      { name: "Earth", aliases: ["Terre"] },
      { name: "Mars", aliases: ["Mars"] },
      { name: "Jupiter", aliases: ["Jupiter"] },
      { name: "Saturn", aliases: ["Saturne"] },
      { name: "Ceres", aliases: ["Cérès"] },
      { name: "Uranus", aliases: ["Uranus"] },
      { name: "Neptune", aliases: ["Neptune"] },
      { name: "Pluto", aliases: ["Pluton"] }
    ]
  },
  { id: "sci-most-moons", category: "Science", prompt: "Top 10 planets/dwarf planets with most known moons", hint: "Saturn leads",
    items: [
      { name: "Saturn", aliases: ["Saturne"] },
      { name: "Jupiter", aliases: ["Jupiter"] },
      { name: "Uranus", aliases: ["Uranus"] },
      { name: "Neptune", aliases: ["Neptune"] },
      { name: "Pluto", aliases: ["Pluton"] },
      { name: "Mars", aliases: ["Mars"] },
      { name: "Haumea", aliases: ["Hauméa"] },
      { name: "Eris", aliases: ["Eris"] },
      { name: "Earth", aliases: ["Terre"] },
      { name: "Makemake", aliases: ["Makémaké"] }
    ]
  },
  { id: "sci-largest-black-holes", category: "Science", prompt: "Top 10 largest known black holes (by mass)", hint: "Ultramassive",
    items: [
      { name: "TON 618", aliases: ["TON 618"] },
      { name: "Phoenix A", aliases: ["Phoenix A"] },
      { name: "Holmberg 15A", aliases: ["Holm 15A"] },
      { name: "IC 1101", aliases: ["IC 1101"] },
      { name: "SDSS J102325.31+514251.0", aliases: ["SDSS J1023"] },
      { name: "NGC 4889", aliases: ["NGC 4889"] },
      { name: "NGC 1600", aliases: ["NGC 1600"] },
      { name: "NGC 3842", aliases: ["NGC 3842"] },
      { name: "M87*", aliases: ["Messier 87", "M87"] },
      { name: "Cygnus A", aliases: ["Cygnus A"] }
    ]
  },
  { id: "sci-powerful-telescopes", category: "Science", prompt: "Top 10 most powerful/famous space telescopes", hint: "Hubble, JWST...",
    items: [
      { name: "James Webb Space Telescope", aliases: ["JWST", "Webb"] },
      { name: "Hubble Space Telescope", aliases: ["Hubble"] },
      { name: "Chandra X-ray Observatory", aliases: ["Chandra"] },
      { name: "Spitzer Space Telescope", aliases: ["Spitzer"] },
      { name: "Kepler", aliases: ["Kepler Space Telescope"] },
      { name: "TESS", aliases: ["Transiting Exoplanet Survey Satellite"] },
      { name: "Compton Gamma Ray Observatory", aliases: ["Compton", "CGRO"] },
      { name: "Fermi Gamma-ray Space Telescope", aliases: ["Fermi"] },
      { name: "Gaia", aliases: ["Gaia"] },
      { name: "Herschel Space Observatory", aliases: ["Herschel"] }
    ]
  },
  { id: "sci-supercomputers", category: "Science", prompt: "Top 10 most powerful supercomputers (recent TOP500)", hint: "Frontier and Aurora lead",
    items: [
      { name: "El Capitan", aliases: ["El Capitan"] },
      { name: "Frontier", aliases: ["Frontier"] },
      { name: "Aurora", aliases: ["Aurora"] },
      { name: "Eagle", aliases: ["Eagle"] },
      { name: "Fugaku", aliases: ["Fugaku"] },
      { name: "LUMI", aliases: ["LUMI"] },
      { name: "Alps", aliases: ["Alps"] },
      { name: "Leonardo", aliases: ["Leonardo"] },
      { name: "Tuolumne", aliases: ["Tuolumne"] },
      { name: "MareNostrum 5", aliases: ["MareNostrum"] }
    ]
  },
  { id: "sci-programming-languages", category: "Science", prompt: "Top 10 most popular programming languages all-time", hint: "TIOBE/Stack Overflow",
    items: [
      { name: "Python", aliases: ["Python"] },
      { name: "JavaScript", aliases: ["JS"] },
      { name: "Java", aliases: ["Java"] },
      { name: "C", aliases: ["C language"] },
      { name: "C++", aliases: ["Cpp"] },
      { name: "C#", aliases: ["CSharp", "C-Sharp"] },
      { name: "PHP", aliases: ["PHP"] },
      { name: "SQL", aliases: ["SQL"] },
      { name: "TypeScript", aliases: ["TS"] },
      { name: "Ruby", aliases: ["Ruby"] }
    ]
  },
  { id: "sci-blood-types", category: "Science", prompt: "Top 10 most common blood types globally", hint: "O+ is #1",
    items: [
      { name: "O+", aliases: ["O positive"] },
      { name: "A+", aliases: ["A positive"] },
      { name: "B+", aliases: ["B positive"] },
      { name: "AB+", aliases: ["AB positive"] },
      { name: "O-", aliases: ["O negative"] },
      { name: "A-", aliases: ["A negative"] },
      { name: "B-", aliases: ["B negative"] },
      { name: "AB-", aliases: ["AB negative"] },
      { name: "Bombay phenotype", aliases: ["hh blood"] },
      { name: "Rh-null", aliases: ["Golden Blood"] }
    ]
  },
  { id: "sci-eye-colors", category: "Science", prompt: "Top 10 most common eye colors globally", hint: "Brown dominates",
    items: [
      { name: "Brown", aliases: ["Marron", "Brun"] },
      { name: "Blue", aliases: ["Bleu"] },
      { name: "Hazel", aliases: ["Noisette"] },
      { name: "Amber", aliases: ["Ambre"] },
      { name: "Green", aliases: ["Vert"] },
      { name: "Gray", aliases: ["Gris"] },
      { name: "Black", aliases: ["Noir"] },
      { name: "Red", aliases: ["Albino", "Rouge"] },
      { name: "Violet", aliases: ["Violet"] },
      { name: "Heterochromia", aliases: ["Hétérochromie"] }
    ]
  },
  { id: "sci-hair-colors", category: "Science", prompt: "Top 10 most common natural hair colors", hint: "Black is #1",
    items: [
      { name: "Black", aliases: ["Noir"] },
      { name: "Brown", aliases: ["Brun", "Châtain"] },
      { name: "Dark Brown", aliases: ["Châtain foncé"] },
      { name: "Light Brown", aliases: ["Châtain clair"] },
      { name: "Blonde", aliases: ["Blond"] },
      { name: "Dark Blonde", aliases: ["Blond foncé"] },
      { name: "Auburn", aliases: ["Auburn"] },
      { name: "Red", aliases: ["Roux"] },
      { name: "Gray", aliases: ["Gris", "Grey"] },
      { name: "White", aliases: ["Blanc"] }
    ]
  },
  { id: "sci-powerful-earthquakes", category: "Science", prompt: "Top 10 most powerful recorded earthquakes (magnitude)", hint: "Chile 1960 is #1",
    items: [
      { name: "Valdivia Chile 1960", aliases: ["Chile 1960", "Great Chilean"] },
      { name: "Alaska 1964", aliases: ["Good Friday"] },
      { name: "Sumatra 2004", aliases: ["Indian Ocean", "Boxing Day"] },
      { name: "Tohoku 2011", aliases: ["Japan 2011"] },
      { name: "Kamchatka 1952", aliases: ["Kamchatka"] },
      { name: "Chile 2010", aliases: ["Maule"] },
      { name: "Ecuador 1906", aliases: ["Ecuador-Colombia"] },
      { name: "Rat Islands 1965", aliases: ["Aleutian"] },
      { name: "Sumatra 2005", aliases: ["Nias"] },
      { name: "Assam-Tibet 1950", aliases: ["Assam"] }
    ]
  },
  { id: "sci-volcanic-eruptions", category: "Science", prompt: "Top 10 most powerful volcanic eruptions in recorded history (VEI)", hint: "Tambora is famous",
    items: [
      { name: "Tambora 1815", aliases: ["Mount Tambora"] },
      { name: "Krakatoa 1883", aliases: ["Krakatau"] },
      { name: "Mount Pinatubo 1991", aliases: ["Pinatubo"] },
      { name: "Novarupta 1912", aliases: ["Katmai"] },
      { name: "Mount St. Helens 1980", aliases: ["St Helens"] },
      { name: "Mount Vesuvius 79 AD", aliases: ["Vésuve"] },
      { name: "Mount Pelée 1902", aliases: ["Pelée"] },
      { name: "Huaynaputina 1600", aliases: ["Huaynaputina"] },
      { name: "Laki 1783", aliases: ["Laki"] },
      { name: "Santorini Minoan", aliases: ["Thera"] }
    ]
  },
  { id: "sci-influential-mathematicians", category: "Science", prompt: "Top 10 most influential mathematicians in history", hint: "Euler, Gauss, Newton...",
    items: [
      { name: "Isaac Newton", aliases: ["Newton"] },
      { name: "Carl Friedrich Gauss", aliases: ["Gauss"] },
      { name: "Leonhard Euler", aliases: ["Euler"] },
      { name: "Archimedes", aliases: ["Archimède"] },
      { name: "Euclid", aliases: ["Euclide"] },
      { name: "Pythagoras", aliases: ["Pythagore"] },
      { name: "Bernhard Riemann", aliases: ["Riemann"] },
      { name: "Henri Poincaré", aliases: ["Poincaré"] },
      { name: "David Hilbert", aliases: ["Hilbert"] },
      { name: "Pierre de Fermat", aliases: ["Fermat"] }
    ]
  },
  { id: "sci-expensive-elements", category: "Science", prompt: "Top 10 most expensive elements per gram", hint: "Often radioactive",
    items: [
      { name: "Francium", aliases: ["Fr"] },
      { name: "Californium", aliases: ["Cf"] },
      { name: "Plutonium", aliases: ["Pu"] },
      { name: "Tritium", aliases: ["Tritium"] },
      { name: "Scandium", aliases: ["Sc"] },
      { name: "Lutetium", aliases: ["Lu"] },
      { name: "Rhodium", aliases: ["Rh"] },
      { name: "Platinum", aliases: ["Platine", "Pt"] },
      { name: "Gold", aliases: ["Or", "Au"] },
      { name: "Iridium", aliases: ["Ir"] }
    ]
  },
  { id: "sci-coldest-planets", category: "Science", prompt: "Top 10 coldest planets/dwarf planets in solar system", hint: "Pluto and beyond",
    items: [
      { name: "Pluto", aliases: ["Pluton"] },
      { name: "Neptune", aliases: ["Neptune"] },
      { name: "Uranus", aliases: ["Uranus"] },
      { name: "Saturn", aliases: ["Saturne"] },
      { name: "Jupiter", aliases: ["Jupiter"] },
      { name: "Ceres", aliases: ["Cérès"] },
      { name: "Mars", aliases: ["Mars"] },
      { name: "Earth", aliases: ["Terre"] },
      { name: "Mercury", aliases: ["Mercure"] },
      { name: "Venus", aliases: ["Vénus"] }
    ]
  },
  { id: "sci-saturn-moons", category: "Science", prompt: "Top 10 largest moons of Saturn", hint: "Titan is #1",
    items: [
      { name: "Titan", aliases: ["Titan"] },
      { name: "Rhea", aliases: ["Rhéa"] },
      { name: "Iapetus", aliases: ["Japet"] },
      { name: "Dione", aliases: ["Dioné"] },
      { name: "Tethys", aliases: ["Téthys"] },
      { name: "Enceladus", aliases: ["Encelade"] },
      { name: "Mimas", aliases: ["Mimas"] },
      { name: "Phoebe", aliases: ["Phœbé"] },
      { name: "Hyperion", aliases: ["Hypérion"] },
      { name: "Janus", aliases: ["Janus"] }
    ]
  },
  { id: "sci-jupiter-moons", category: "Science", prompt: "Top 10 largest moons of Jupiter", hint: "Galilean moons lead",
    items: [
      { name: "Ganymede", aliases: ["Ganymède"] },
      { name: "Callisto", aliases: ["Callisto"] },
      { name: "Io", aliases: ["Io"] },
      { name: "Europa", aliases: ["Europe"] },
      { name: "Amalthea", aliases: ["Amalthée"] },
      { name: "Himalia", aliases: ["Himalia"] },
      { name: "Thebe", aliases: ["Thébé"] },
      { name: "Elara", aliases: ["Elara"] },
      { name: "Pasiphae", aliases: ["Pasiphaé"] },
      { name: "Carme", aliases: ["Carmé"] }
    ]
  },
  { id: "sci-zodiac-constellations", category: "Science", prompt: "Top 10 of the 12 zodiac constellations", hint: "Astrological signs",
    items: [
      { name: "Aries", aliases: ["Bélier"] },
      { name: "Taurus", aliases: ["Taureau"] },
      { name: "Gemini", aliases: ["Gémeaux"] },
      { name: "Cancer", aliases: ["Cancer"] },
      { name: "Leo", aliases: ["Lion"] },
      { name: "Virgo", aliases: ["Vierge"] },
      { name: "Libra", aliases: ["Balance"] },
      { name: "Scorpius", aliases: ["Scorpion"] },
      { name: "Sagittarius", aliases: ["Sagittaire"] },
      { name: "Capricorn", aliases: ["Capricorne"] }
    ]
  },
  { id: "sci-noble-gases", category: "Science", prompt: "Top 10 noble gases and group 18 elements (by atomic number)", hint: "Only 7 noble gases, extend with halogens",
    items: [
      { name: "Helium", aliases: ["Hélium", "He"] },
      { name: "Neon", aliases: ["Néon", "Ne"] },
      { name: "Argon", aliases: ["Argon", "Ar"] },
      { name: "Krypton", aliases: ["Krypton", "Kr"] },
      { name: "Xenon", aliases: ["Xénon", "Xe"] },
      { name: "Radon", aliases: ["Radon", "Rn"] },
      { name: "Oganesson", aliases: ["Og"] },
      { name: "Fluorine", aliases: ["Fluor", "F"] },
      { name: "Chlorine", aliases: ["Chlore", "Cl"] },
      { name: "Bromine", aliases: ["Brome", "Br"] }
    ]
  },
  { id: "sci-physics-nobel-laureates", category: "Science", prompt: "Top 10 most famous Nobel Prize Physics laureates", hint: "Einstein, Curie...",
    items: [
      { name: "Albert Einstein", aliases: ["Einstein"] },
      { name: "Marie Curie", aliases: ["Curie"] },
      { name: "Niels Bohr", aliases: ["Bohr"] },
      { name: "Werner Heisenberg", aliases: ["Heisenberg"] },
      { name: "Richard Feynman", aliases: ["Feynman"] },
      { name: "Max Planck", aliases: ["Planck"] },
      { name: "Enrico Fermi", aliases: ["Fermi"] },
      { name: "Wolfgang Pauli", aliases: ["Pauli"] },
      { name: "Paul Dirac", aliases: ["Dirac"] },
      { name: "Erwin Schrödinger", aliases: ["Schrödinger"] }
    ]
  },
  { id: "sci-famous-inventors", category: "Science", prompt: "Top 10 most famous inventors in history", hint: "Edison, Bell...",
    items: [
      { name: "Thomas Edison", aliases: ["Edison"] },
      { name: "Alexander Graham Bell", aliases: ["Bell"] },
      { name: "Nikola Tesla", aliases: ["Tesla"] },
      { name: "Leonardo da Vinci", aliases: ["Vinci"] },
      { name: "Benjamin Franklin", aliases: ["Franklin"] },
      { name: "Wright Brothers", aliases: ["Frères Wright"] },
      { name: "Johannes Gutenberg", aliases: ["Gutenberg"] },
      { name: "James Watt", aliases: ["Watt"] },
      { name: "Eli Whitney", aliases: ["Whitney"] },
      { name: "Karl Benz", aliases: ["Benz"] }
    ]
  },
  { id: "sci-mars-rovers", category: "Science", prompt: "Top 10 missions/rovers to Mars", hint: "Curiosity, Perseverance...",
    items: [
      { name: "Perseverance", aliases: ["Mars 2020"] },
      { name: "Curiosity", aliases: ["MSL"] },
      { name: "Opportunity", aliases: ["MER-B"] },
      { name: "Spirit", aliases: ["MER-A"] },
      { name: "Sojourner", aliases: ["Pathfinder Rover"] },
      { name: "InSight", aliases: ["InSight Lander"] },
      { name: "Viking 1", aliases: ["Viking 1"] },
      { name: "Viking 2", aliases: ["Viking 2"] },
      { name: "Phoenix", aliases: ["Phoenix Lander"] },
      { name: "Zhurong", aliases: ["Tianwen-1"] }
    ]
  },
  { id: "sci-modern-aircraft", category: "Science", prompt: "Top 10 fastest manned aircraft ever flown", hint: "X-15 leads",
    items: [
      { name: "North American X-15", aliases: ["X-15"] },
      { name: "SR-71 Blackbird", aliases: ["SR-71"] },
      { name: "Lockheed YF-12", aliases: ["YF-12"] },
      { name: "MiG-25 Foxbat", aliases: ["MiG-25"] },
      { name: "Bell X-2", aliases: ["X-2"] },
      { name: "XB-70 Valkyrie", aliases: ["XB-70"] },
      { name: "MiG-31 Foxhound", aliases: ["MiG-31"] },
      { name: "F-15 Eagle", aliases: ["F-15"] },
      { name: "Concorde", aliases: ["Concorde"] },
      { name: "Tu-144", aliases: ["Tupolev 144"] }
    ]
  },
  { id: "sci-dinosaurs", category: "Science", prompt: "Top 10 most famous dinosaurs", hint: "T-rex, Velociraptor...",
    items: [
      { name: "Tyrannosaurus Rex", aliases: ["T-Rex", "T. rex"] },
      { name: "Velociraptor", aliases: ["Velociraptor"] },
      { name: "Triceratops", aliases: ["Tricératops"] },
      { name: "Stegosaurus", aliases: ["Stégosaure"] },
      { name: "Brachiosaurus", aliases: ["Brachiosaure"] },
      { name: "Spinosaurus", aliases: ["Spinosaure"] },
      { name: "Diplodocus", aliases: ["Diplodocus"] },
      { name: "Ankylosaurus", aliases: ["Ankylosaure"] },
      { name: "Pterodactyl", aliases: ["Ptérodactyle"] },
      { name: "Allosaurus", aliases: ["Allosaure"] }
    ]
  },
  { id: "sci-human-organs", category: "Science", prompt: "Top 10 largest organs in the human body", hint: "Skin is #1",
    items: [
      { name: "Skin", aliases: ["Peau"] },
      { name: "Liver", aliases: ["Foie"] },
      { name: "Brain", aliases: ["Cerveau"] },
      { name: "Lungs", aliases: ["Poumons"] },
      { name: "Heart", aliases: ["Cœur"] },
      { name: "Kidneys", aliases: ["Reins"] },
      { name: "Spleen", aliases: ["Rate"] },
      { name: "Pancreas", aliases: ["Pancréas"] },
      { name: "Thyroid", aliases: ["Thyroïde"] },
      { name: "Intestines", aliases: ["Intestins"] }
    ]
  },
  { id: "sci-tech-companies", category: "Science", prompt: "Top 10 largest tech companies by market cap", hint: "Apple, Microsoft...",
    items: [
      { name: "Apple", aliases: ["Apple Inc"] },
      { name: "Microsoft", aliases: ["MSFT"] },
      { name: "Nvidia", aliases: ["NVIDIA"] },
      { name: "Alphabet", aliases: ["Google"] },
      { name: "Amazon", aliases: ["AMZN"] },
      { name: "Meta", aliases: ["Facebook"] },
      { name: "TSMC", aliases: ["Taiwan Semiconductor"] },
      { name: "Tesla", aliases: ["TSLA"] },
      { name: "Broadcom", aliases: ["AVGO"] },
      { name: "Samsung", aliases: ["Samsung Electronics"] }
    ]
  },
  { id: "sci-galaxies", category: "Science", prompt: "Top 10 best-known galaxies", hint: "Milky Way, Andromeda...",
    items: [
      { name: "Milky Way", aliases: ["Voie Lactée"] },
      { name: "Andromeda", aliases: ["M31", "Andromède"] },
      { name: "Triangulum", aliases: ["M33"] },
      { name: "Large Magellanic Cloud", aliases: ["LMC", "Grand Nuage de Magellan"] },
      { name: "Small Magellanic Cloud", aliases: ["SMC", "Petit Nuage de Magellan"] },
      { name: "Whirlpool Galaxy", aliases: ["M51"] },
      { name: "Sombrero Galaxy", aliases: ["M104"] },
      { name: "Pinwheel Galaxy", aliases: ["M101"] },
      { name: "Centaurus A", aliases: ["NGC 5128"] },
      { name: "Cigar Galaxy", aliases: ["M82"] }
    ]
  },
  { id: "sci-asteroids", category: "Science", prompt: "Top 10 largest asteroids in solar system", hint: "Ceres is #1",
    items: [
      { name: "Ceres", aliases: ["Cérès"] },
      { name: "Vesta", aliases: ["Vesta"] },
      { name: "Pallas", aliases: ["Pallas"] },
      { name: "Hygiea", aliases: ["Hygiea"] },
      { name: "Interamnia", aliases: ["Interamnia"] },
      { name: "Europa", aliases: ["52 Europa"] },
      { name: "Davida", aliases: ["Davida"] },
      { name: "Sylvia", aliases: ["Sylvia"] },
      { name: "Cybele", aliases: ["Cybèle"] },
      { name: "Eunomia", aliases: ["Eunomia"] }
    ]
  },
  { id: "sci-software-os", category: "Science", prompt: "Top 10 most-used operating systems all-time", hint: "Windows leads",
    items: [
      { name: "Windows", aliases: ["Microsoft Windows"] },
      { name: "Android", aliases: ["Android OS"] },
      { name: "iOS", aliases: ["iPhone OS"] },
      { name: "macOS", aliases: ["OS X", "Mac OS"] },
      { name: "Linux", aliases: ["GNU/Linux"] },
      { name: "Chrome OS", aliases: ["ChromeOS"] },
      { name: "Unix", aliases: ["UNIX"] },
      { name: "MS-DOS", aliases: ["DOS"] },
      { name: "Ubuntu", aliases: ["Ubuntu Linux"] },
      { name: "Windows XP", aliases: ["XP"] }
    ]
  },
  { id: "sci-medical-discoveries", category: "Science", prompt: "Top 10 most important medical discoveries", hint: "Penicillin, vaccines...",
    items: [
      { name: "Penicillin", aliases: ["Pénicilline"] },
      { name: "Smallpox Vaccine", aliases: ["Variole"] },
      { name: "Anesthesia", aliases: ["Anesthésie"] },
      { name: "X-rays", aliases: ["Rayons X"] },
      { name: "DNA Structure", aliases: ["ADN"] },
      { name: "Germ Theory", aliases: ["Théorie microbienne"] },
      { name: "Insulin", aliases: ["Insuline"] },
      { name: "Antiseptics", aliases: ["Antiseptiques"] },
      { name: "Blood Types", aliases: ["Groupes sanguins"] },
      { name: "MRI", aliases: ["IRM"] }
    ]
  },
  { id: "sci-renewable-energy", category: "Science", prompt: "Top 10 largest sources of electricity generation worldwide", hint: "Coal still leads",
    items: [
      { name: "Coal", aliases: ["Charbon"] },
      { name: "Natural Gas", aliases: ["Gaz naturel"] },
      { name: "Hydropower", aliases: ["Hydroélectricité"] },
      { name: "Nuclear", aliases: ["Nucléaire"] },
      { name: "Wind", aliases: ["Éolien"] },
      { name: "Solar", aliases: ["Solaire"] },
      { name: "Oil", aliases: ["Pétrole"] },
      { name: "Biomass", aliases: ["Biomasse"] },
      { name: "Geothermal", aliases: ["Géothermie"] },
      { name: "Tidal", aliases: ["Marémotrice"] }
    ]
  },
  { id: "sci-internet-browsers", category: "Science", prompt: "Top 10 most-used web browsers all-time", hint: "Chrome leads",
    items: [
      { name: "Chrome", aliases: ["Google Chrome"] },
      { name: "Safari", aliases: ["Apple Safari"] },
      { name: "Edge", aliases: ["Microsoft Edge"] },
      { name: "Firefox", aliases: ["Mozilla Firefox"] },
      { name: "Internet Explorer", aliases: ["IE"] },
      { name: "Opera", aliases: ["Opera Browser"] },
      { name: "Samsung Internet", aliases: ["Samsung Browser"] },
      { name: "Netscape Navigator", aliases: ["Netscape"] },
      { name: "Brave", aliases: ["Brave Browser"] },
      { name: "UC Browser", aliases: ["UC"] }
    ]
  },
  { id: "his-recent-us-presidents", category: "History", prompt: "Last 10 US Presidents (most recent first)", hint: "Since JFK",
    items: [
      { name: "Donald Trump", aliases: ["Trump"] },
      { name: "Joe Biden", aliases: ["Biden", "Joseph Biden"] },
      { name: "Barack Obama", aliases: ["Obama"] },
      { name: "George W. Bush", aliases: ["Bush Jr", "George Bush Jr"] },
      { name: "Bill Clinton", aliases: ["Clinton", "William Clinton"] },
      { name: "George H. W. Bush", aliases: ["Bush Sr", "George Bush Sr"] },
      { name: "Ronald Reagan", aliases: ["Reagan"] },
      { name: "Jimmy Carter", aliases: ["Carter"] },
      { name: "Gerald Ford", aliases: ["Ford"] },
      { name: "Richard Nixon", aliases: ["Nixon"] }
    ]
  },
  { id: "his-longest-us-presidents", category: "History", prompt: "Longest-serving US Presidents (days in office)", hint: "FDR tops the list",
    items: [
      { name: "Franklin D. Roosevelt", aliases: ["FDR", "Roosevelt"] },
      { name: "Thomas Jefferson", aliases: ["Jefferson"] },
      { name: "James Madison", aliases: ["Madison"] },
      { name: "James Monroe", aliases: ["Monroe"] },
      { name: "Andrew Jackson", aliases: ["Jackson"] },
      { name: "Ulysses S. Grant", aliases: ["Grant"] },
      { name: "Grover Cleveland", aliases: ["Cleveland"] },
      { name: "Woodrow Wilson", aliases: ["Wilson"] },
      { name: "Dwight D. Eisenhower", aliases: ["Eisenhower", "Ike"] },
      { name: "Ronald Reagan", aliases: ["Reagan"] }
    ]
  },
  { id: "his-recent-uk-pms", category: "History", prompt: "Last 10 UK Prime Ministers (most recent first)", hint: "From Thatcher onward",
    items: [
      { name: "Keir Starmer", aliases: ["Starmer"] },
      { name: "Rishi Sunak", aliases: ["Sunak"] },
      { name: "Liz Truss", aliases: ["Truss"] },
      { name: "Boris Johnson", aliases: ["Johnson", "Boris"] },
      { name: "Theresa May", aliases: ["May"] },
      { name: "David Cameron", aliases: ["Cameron"] },
      { name: "Gordon Brown", aliases: ["Brown"] },
      { name: "Tony Blair", aliases: ["Blair"] },
      { name: "John Major", aliases: ["Major"] },
      { name: "Margaret Thatcher", aliases: ["Thatcher", "Iron Lady"] }
    ]
  },
  { id: "his-longest-uk-pms", category: "History", prompt: "Longest-serving UK Prime Ministers", hint: "Walpole was first and longest",
    items: [
      { name: "Robert Walpole", aliases: ["Walpole"] },
      { name: "William Pitt the Younger", aliases: ["Pitt the Younger"] },
      { name: "Lord Liverpool", aliases: ["Robert Jenkinson"] },
      { name: "Marquess of Salisbury", aliases: ["Salisbury"] },
      { name: "William Gladstone", aliases: ["Gladstone"] },
      { name: "Lord North", aliases: ["Frederick North"] },
      { name: "Margaret Thatcher", aliases: ["Thatcher"] },
      { name: "Tony Blair", aliases: ["Blair"] },
      { name: "Henry Pelham", aliases: ["Pelham"] },
      { name: "Winston Churchill", aliases: ["Churchill"] }
    ]
  },
  { id: "his-recent-french-presidents", category: "History", prompt: "French Presidents of the 5th Republic (most recent first)", hint: "Since de Gaulle",
    items: [
      { name: "Emmanuel Macron", aliases: ["Macron"] },
      { name: "François Hollande", aliases: ["Hollande", "Francois Hollande"] },
      { name: "Nicolas Sarkozy", aliases: ["Sarkozy"] },
      { name: "Jacques Chirac", aliases: ["Chirac"] },
      { name: "François Mitterrand", aliases: ["Mitterrand", "Francois Mitterrand"] },
      { name: "Valéry Giscard d'Estaing", aliases: ["Giscard", "Valery Giscard d'Estaing"] },
      { name: "Georges Pompidou", aliases: ["Pompidou"] },
      { name: "Alain Poher", aliases: ["Poher"] },
      { name: "Charles de Gaulle", aliases: ["De Gaulle", "Gaulle"] },
      { name: "René Coty", aliases: ["Coty", "Rene Coty"] }
    ]
  },
  { id: "his-recent-french-pms", category: "History", prompt: "Recent French Prime Ministers (most recent first)", hint: "Matignon residents",
    items: [
      { name: "François Bayrou", aliases: ["Bayrou"] },
      { name: "Michel Barnier", aliases: ["Barnier"] },
      { name: "Gabriel Attal", aliases: ["Attal"] },
      { name: "Élisabeth Borne", aliases: ["Borne", "Elisabeth Borne"] },
      { name: "Jean Castex", aliases: ["Castex"] },
      { name: "Édouard Philippe", aliases: ["Philippe", "Edouard Philippe"] },
      { name: "Bernard Cazeneuve", aliases: ["Cazeneuve"] },
      { name: "Manuel Valls", aliases: ["Valls"] },
      { name: "Jean-Marc Ayrault", aliases: ["Ayrault"] },
      { name: "François Fillon", aliases: ["Fillon", "Francois Fillon"] }
    ]
  },
  { id: "his-recent-popes", category: "History", prompt: "Last 10 Popes (most recent first)", hint: "Bishops of Rome",
    items: [
      { name: "Leo XIV", aliases: ["Pope Leo XIV", "Robert Prevost"] },
      { name: "Francis", aliases: ["Pope Francis", "Bergoglio"] },
      { name: "Benedict XVI", aliases: ["Ratzinger", "Pope Benedict XVI"] },
      { name: "John Paul II", aliases: ["Wojtyla", "Jean-Paul II"] },
      { name: "John Paul I", aliases: ["Jean-Paul I", "Luciani"] },
      { name: "Paul VI", aliases: ["Paul Six", "Montini"] },
      { name: "John XXIII", aliases: ["Jean XXIII", "Roncalli"] },
      { name: "Pius XII", aliases: ["Pacelli"] },
      { name: "Pius XI", aliases: ["Ratti"] },
      { name: "Benedict XV", aliases: ["Della Chiesa"] }
    ]
  },
  { id: "his-longest-popes", category: "History", prompt: "Longest-serving Popes", hint: "Peter excluded by tradition",
    items: [
      { name: "Pius IX", aliases: ["Pio Nono"] },
      { name: "John Paul II", aliases: ["Wojtyla"] },
      { name: "Leo XIII", aliases: ["Pecci"] },
      { name: "Pius VI", aliases: ["Braschi"] },
      { name: "Adrian I", aliases: ["Hadrian I"] },
      { name: "Pius VII", aliases: ["Chiaramonti"] },
      { name: "Alexander III", aliases: ["Bandinelli"] },
      { name: "Sylvester I", aliases: ["Silvester I"] },
      { name: "Leo I", aliases: ["Leo the Great"] },
      { name: "Urban VIII", aliases: ["Barberini"] }
    ]
  },
  { id: "his-recent-un-sg", category: "History", prompt: "UN Secretaries-General (most recent first)", hint: "All nine of them",
    items: [
      { name: "António Guterres", aliases: ["Guterres", "Antonio Guterres"] },
      { name: "Ban Ki-moon", aliases: ["Ban Ki Moon"] },
      { name: "Kofi Annan", aliases: ["Annan"] },
      { name: "Boutros Boutros-Ghali", aliases: ["Boutros-Ghali"] },
      { name: "Javier Pérez de Cuéllar", aliases: ["Perez de Cuellar"] },
      { name: "Kurt Waldheim", aliases: ["Waldheim"] },
      { name: "U Thant", aliases: ["Thant"] },
      { name: "Dag Hammarskjöld", aliases: ["Hammarskjold"] },
      { name: "Trygve Lie", aliases: ["Lie"] },
      { name: "Gladwyn Jebb", aliases: ["Jebb"] }
    ]
  },
  { id: "his-largest-empires-area", category: "History", prompt: "Largest empires in history (by peak land area)", hint: "British Empire #1",
    items: [
      { name: "British Empire", aliases: ["British"] },
      { name: "Mongol Empire", aliases: ["Mongols", "Genghis Khan empire"] },
      { name: "Russian Empire", aliases: ["Russia"] },
      { name: "Qing Dynasty", aliases: ["Qing", "Manchu"] },
      { name: "Spanish Empire", aliases: ["Spain"] },
      { name: "Second French Colonial Empire", aliases: ["French Empire", "France"] },
      { name: "Abbasid Caliphate", aliases: ["Abbasids"] },
      { name: "Umayyad Caliphate", aliases: ["Umayyads"] },
      { name: "Yuan Dynasty", aliases: ["Yuan"] },
      { name: "Portuguese Empire", aliases: ["Portugal"] }
    ]
  },
  { id: "his-empires-population", category: "History", prompt: "Largest empires by peak population share", hint: "All over 20% of world",
    items: [
      { name: "British Empire", aliases: ["British"] },
      { name: "Qing Dynasty", aliases: ["Qing"] },
      { name: "Han Dynasty", aliases: ["Han"] },
      { name: "Mongol Empire", aliases: ["Mongols"] },
      { name: "Tang Dynasty", aliases: ["Tang"] },
      { name: "Roman Empire", aliases: ["Rome"] },
      { name: "Ming Dynasty", aliases: ["Ming"] },
      { name: "Mughal Empire", aliases: ["Mughals"] },
      { name: "Maurya Empire", aliases: ["Mauryas"] },
      { name: "Achaemenid Empire", aliases: ["Persian Empire"] }
    ]
  },
  { id: "his-bloodiest-wars", category: "History", prompt: "Bloodiest wars in history (by death toll)", hint: "WWII tops it",
    items: [
      { name: "World War II", aliases: ["WWII", "Second World War"] },
      { name: "Mongol Conquests", aliases: ["Mongol invasions"] },
      { name: "Taiping Rebellion", aliases: ["Taiping"] },
      { name: "World War I", aliases: ["WWI", "Great War"] },
      { name: "Qing conquest of the Ming", aliases: ["Manchu conquest"] },
      { name: "An Lushan Rebellion", aliases: ["An Lushan"] },
      { name: "Russian Civil War", aliases: ["Russian Civil"] },
      { name: "Thirty Years' War", aliases: ["30 Years War"] },
      { name: "Chinese Civil War", aliases: ["China Civil War"] },
      { name: "Napoleonic Wars", aliases: ["Napoleon Wars"] }
    ]
  },
  { id: "his-bloodiest-battles", category: "History", prompt: "Bloodiest battles in history", hint: "Mostly WWII",
    items: [
      { name: "Battle of Stalingrad", aliases: ["Stalingrad"] },
      { name: "Siege of Leningrad", aliases: ["Leningrad"] },
      { name: "Battle of Berlin", aliases: ["Berlin"] },
      { name: "Battle of the Somme", aliases: ["Somme"] },
      { name: "Battle of Moscow", aliases: ["Moscow"] },
      { name: "Battle of Kiev", aliases: ["Kiev 1941"] },
      { name: "Battle of Verdun", aliases: ["Verdun"] },
      { name: "Battle of Kursk", aliases: ["Kursk"] },
      { name: "Battle of Dnieper", aliases: ["Dnieper"] },
      { name: "Battle of Passchendaele", aliases: ["Passchendaele", "Third Ypres"] }
    ]
  },
  { id: "his-longest-wars", category: "History", prompt: "Longest wars in human history", hint: "Some lasted centuries",
    items: [
      { name: "Reconquista", aliases: ["Spanish Reconquista"] },
      { name: "Roman-Persian Wars", aliases: ["Roman Persian Wars"] },
      { name: "Anglo-French Wars", aliases: ["England France wars"] },
      { name: "Byzantine-Bulgarian Wars", aliases: ["Byzantine Bulgar"] },
      { name: "Three Hundred and Thirty Five Years' War", aliases: ["Scilly War"] },
      { name: "Arauco War", aliases: ["Mapuche War"] },
      { name: "Hundred Years' War", aliases: ["100 Years War"] },
      { name: "Ottoman-Habsburg Wars", aliases: ["Ottoman Habsburg"] },
      { name: "Punic Wars", aliases: ["Rome Carthage"] },
      { name: "Thirty Years' War", aliases: ["30 Years War"] }
    ]
  },
  { id: "his-oldest-civilizations", category: "History", prompt: "Oldest civilizations (by emergence date)", hint: "Mesopotamia first",
    items: [
      { name: "Mesopotamia", aliases: ["Sumer", "Sumerians"] },
      { name: "Ancient Egypt", aliases: ["Egypt"] },
      { name: "Indus Valley Civilization", aliases: ["Harappan"] },
      { name: "Norte Chico", aliases: ["Caral"] },
      { name: "Ancient China", aliases: ["Xia Dynasty"] },
      { name: "Minoan Civilization", aliases: ["Minoans"] },
      { name: "Olmec", aliases: ["Olmecs"] },
      { name: "Maya Civilization", aliases: ["Maya"] },
      { name: "Ancient Greece", aliases: ["Greeks"] },
      { name: "Persian Empire", aliases: ["Achaemenid"] }
    ]
  },
  { id: "his-ancient-wonders", category: "History", prompt: "Seven Wonders of the Ancient World (plus 3 honorary)", hint: "Only Great Pyramid survives",
    items: [
      { name: "Great Pyramid of Giza", aliases: ["Pyramid of Giza"] },
      { name: "Hanging Gardens of Babylon", aliases: ["Babylon Gardens"] },
      { name: "Statue of Zeus at Olympia", aliases: ["Zeus Olympia"] },
      { name: "Temple of Artemis at Ephesus", aliases: ["Artemis Ephesus"] },
      { name: "Mausoleum at Halicarnassus", aliases: ["Mausoleum Halicarnassus"] },
      { name: "Colossus of Rhodes", aliases: ["Rhodes Colossus"] },
      { name: "Lighthouse of Alexandria", aliases: ["Pharos", "Alexandria Lighthouse"] },
      { name: "Walls of Babylon", aliases: ["Ishtar Gate"] },
      { name: "Great Wall of China", aliases: ["China Wall"] },
      { name: "Colosseum", aliases: ["Roman Colosseum"] }
    ]
  },
  { id: "his-modern-wonders", category: "History", prompt: "New Seven Wonders of the World (plus 3 finalists)", hint: "2007 vote",
    items: [
      { name: "Great Wall of China", aliases: ["China Wall"] },
      { name: "Petra", aliases: ["Petra Jordan"] },
      { name: "Christ the Redeemer", aliases: ["Cristo Redentor"] },
      { name: "Machu Picchu", aliases: ["Machu-Picchu"] },
      { name: "Chichen Itza", aliases: ["Chichén Itzá"] },
      { name: "Colosseum", aliases: ["Roman Colosseum"] },
      { name: "Taj Mahal", aliases: ["Taj"] },
      { name: "Great Pyramid of Giza", aliases: ["Giza Pyramid"] },
      { name: "Statue of Liberty", aliases: ["Liberty Statue"] },
      { name: "Eiffel Tower", aliases: ["Tour Eiffel"] }
    ]
  },
  { id: "his-famous-roman-emperors", category: "History", prompt: "Most famous Roman emperors", hint: "Caesar wasn't technically one",
    items: [
      { name: "Augustus", aliases: ["Octavian", "Auguste"] },
      { name: "Nero", aliases: ["Néron"] },
      { name: "Caligula", aliases: ["Gaius"] },
      { name: "Claudius", aliases: ["Claude"] },
      { name: "Trajan", aliases: ["Trajanus", "Trajan"] },
      { name: "Hadrian", aliases: ["Hadrien"] },
      { name: "Marcus Aurelius", aliases: ["Marc Aurèle", "Marc Aurele"] },
      { name: "Constantine", aliases: ["Constantin", "Constantine the Great"] },
      { name: "Diocletian", aliases: ["Dioclétien"] },
      { name: "Vespasian", aliases: ["Vespasien"] }
    ]
  },
  { id: "his-famous-french-monarchs", category: "History", prompt: "Most famous French monarchs", hint: "Mostly Louis",
    items: [
      { name: "Louis XIV", aliases: ["Sun King", "Roi Soleil", "Louis 14"] },
      { name: "Napoleon Bonaparte", aliases: ["Napoléon", "Napoleon I"] },
      { name: "Louis XVI", aliases: ["Louis 16"] },
      { name: "Charlemagne", aliases: ["Charles the Great"] },
      { name: "Francis I", aliases: ["François I", "Francois Premier"] },
      { name: "Henry IV", aliases: ["Henri IV", "Henri Quatre"] },
      { name: "Louis IX", aliases: ["Saint Louis"] },
      { name: "Philip II Augustus", aliases: ["Philippe Auguste"] },
      { name: "Louis XV", aliases: ["Louis 15"] },
      { name: "Clovis I", aliases: ["Clovis"] }
    ]
  },
  { id: "his-famous-english-monarchs", category: "History", prompt: "Most famous English/British monarchs", hint: "Including current era",
    items: [
      { name: "Elizabeth II", aliases: ["Queen Elizabeth II"] },
      { name: "Henry VIII", aliases: ["Henry 8"] },
      { name: "Elizabeth I", aliases: ["Queen Elizabeth I", "Virgin Queen"] },
      { name: "Victoria", aliases: ["Queen Victoria"] },
      { name: "William the Conqueror", aliases: ["William I", "Guillaume le Conquérant"] },
      { name: "Richard the Lionheart", aliases: ["Richard I", "Richard Cœur de Lion"] },
      { name: "Henry V", aliases: ["Henry 5"] },
      { name: "George III", aliases: ["George 3"] },
      { name: "Charles I", aliases: ["Charles 1"] },
      { name: "Edward I", aliases: ["Edward Longshanks"] }
    ]
  },
  { id: "his-famous-spanish-monarchs", category: "History", prompt: "Most famous Spanish monarchs", hint: "From Reconquista to today",
    items: [
      { name: "Isabella I of Castile", aliases: ["Isabel la Católica", "Isabella the Catholic"] },
      { name: "Ferdinand II of Aragon", aliases: ["Fernando II", "Ferdinand the Catholic"] },
      { name: "Philip II", aliases: ["Felipe II"] },
      { name: "Charles V", aliases: ["Carlos V", "Charles Quint"] },
      { name: "Juan Carlos I", aliases: ["Juan Carlos"] },
      { name: "Felipe VI", aliases: ["King Felipe VI"] },
      { name: "Philip V", aliases: ["Felipe V"] },
      { name: "Alfonso XIII", aliases: ["Alphonse XIII"] },
      { name: "Charles III", aliases: ["Carlos III"] },
      { name: "Philip IV", aliases: ["Felipe IV"] }
    ]
  },
  { id: "his-explorers-columbus-era", category: "History", prompt: "Most famous European explorers (Age of Discovery)", hint: "1400s-1500s",
    items: [
      { name: "Christopher Columbus", aliases: ["Colomb", "Cristóbal Colón"] },
      { name: "Vasco da Gama", aliases: ["Da Gama"] },
      { name: "Ferdinand Magellan", aliases: ["Magellan", "Magalhães"] },
      { name: "Hernán Cortés", aliases: ["Cortes", "Cortez"] },
      { name: "Francisco Pizarro", aliases: ["Pizarro"] },
      { name: "Amerigo Vespucci", aliases: ["Vespucci"] },
      { name: "John Cabot", aliases: ["Giovanni Caboto"] },
      { name: "Bartolomeu Dias", aliases: ["Dias", "Diaz"] },
      { name: "Jacques Cartier", aliases: ["Cartier"] },
      { name: "Francis Drake", aliases: ["Drake"] }
    ]
  },
  { id: "his-famous-russian-leaders", category: "History", prompt: "Most famous Russian/Soviet leaders", hint: "Tsars and Soviets",
    items: [
      { name: "Vladimir Putin", aliases: ["Putin", "Poutine"] },
      { name: "Joseph Stalin", aliases: ["Stalin", "Staline"] },
      { name: "Vladimir Lenin", aliases: ["Lenin", "Lénine"] },
      { name: "Mikhail Gorbachev", aliases: ["Gorbachev", "Gorbatchev"] },
      { name: "Peter the Great", aliases: ["Peter I", "Pierre le Grand"] },
      { name: "Catherine the Great", aliases: ["Catherine II", "Catherine la Grande"] },
      { name: "Ivan the Terrible", aliases: ["Ivan IV"] },
      { name: "Nicholas II", aliases: ["Tsar Nicholas II"] },
      { name: "Nikita Khrushchev", aliases: ["Khrushchev", "Khrouchtchev"] },
      { name: "Boris Yeltsin", aliases: ["Yeltsin", "Eltsine"] }
    ]
  },
  { id: "his-famous-chinese-emperors", category: "History", prompt: "Most famous Chinese emperors/dynasties figures", hint: "Including unifiers",
    items: [
      { name: "Qin Shi Huang", aliases: ["Qin Shihuang", "First Emperor"] },
      { name: "Emperor Wu of Han", aliases: ["Han Wudi"] },
      { name: "Emperor Taizong of Tang", aliases: ["Tang Taizong"] },
      { name: "Kublai Khan", aliases: ["Khubilai Khan"] },
      { name: "Hongwu Emperor", aliases: ["Zhu Yuanzhang"] },
      { name: "Yongle Emperor", aliases: ["Zhu Di"] },
      { name: "Kangxi Emperor", aliases: ["Kangxi"] },
      { name: "Qianlong Emperor", aliases: ["Qianlong"] },
      { name: "Empress Wu Zetian", aliases: ["Wu Zetian"] },
      { name: "Puyi", aliases: ["Last Emperor"] }
    ]
  },
  { id: "his-famous-indian-leaders", category: "History", prompt: "Most famous Indian leaders (modern)", hint: "Independence and beyond",
    items: [
      { name: "Mahatma Gandhi", aliases: ["Gandhi"] },
      { name: "Jawaharlal Nehru", aliases: ["Nehru"] },
      { name: "Indira Gandhi", aliases: ["Indira"] },
      { name: "Narendra Modi", aliases: ["Modi"] },
      { name: "Sardar Patel", aliases: ["Vallabhbhai Patel"] },
      { name: "B. R. Ambedkar", aliases: ["Ambedkar"] },
      { name: "Rajiv Gandhi", aliases: ["Rajiv"] },
      { name: "Manmohan Singh", aliases: ["Manmohan"] },
      { name: "Atal Bihari Vajpayee", aliases: ["Vajpayee"] },
      { name: "Subhas Chandra Bose", aliases: ["Bose", "Netaji"] }
    ]
  },
  { id: "his-famous-african-leaders", category: "History", prompt: "Most famous African leaders (modern era)", hint: "Liberation to today",
    items: [
      { name: "Nelson Mandela", aliases: ["Mandela", "Madiba"] },
      { name: "Kwame Nkrumah", aliases: ["Nkrumah"] },
      { name: "Jomo Kenyatta", aliases: ["Kenyatta"] },
      { name: "Julius Nyerere", aliases: ["Nyerere"] },
      { name: "Muammar Gaddafi", aliases: ["Gaddafi", "Kadhafi"] },
      { name: "Gamal Abdel Nasser", aliases: ["Nasser"] },
      { name: "Haile Selassie", aliases: ["Selassie"] },
      { name: "Patrice Lumumba", aliases: ["Lumumba"] },
      { name: "Robert Mugabe", aliases: ["Mugabe"] },
      { name: "Thomas Sankara", aliases: ["Sankara"] }
    ]
  },
  { id: "his-ancient-philosophers", category: "History", prompt: "Most influential ancient philosophers", hint: "Across cultures",
    items: [
      { name: "Socrates", aliases: ["Socrate"] },
      { name: "Plato", aliases: ["Platon"] },
      { name: "Aristotle", aliases: ["Aristote"] },
      { name: "Confucius", aliases: ["Kong Fuzi"] },
      { name: "Laozi", aliases: ["Lao Tzu", "Lao Tseu"] },
      { name: "Buddha", aliases: ["Siddhartha Gautama"] },
      { name: "Epicurus", aliases: ["Épicure"] },
      { name: "Zeno of Citium", aliases: ["Zenon"] },
      { name: "Pythagoras", aliases: ["Pythagore"] },
      { name: "Heraclitus", aliases: ["Héraclite"] }
    ]
  },
  { id: "his-greek-philosophers", category: "History", prompt: "Most influential Greek philosophers", hint: "Birthplace of philosophy",
    items: [
      { name: "Socrates", aliases: ["Socrate"] },
      { name: "Plato", aliases: ["Platon"] },
      { name: "Aristotle", aliases: ["Aristote"] },
      { name: "Pythagoras", aliases: ["Pythagore"] },
      { name: "Heraclitus", aliases: ["Héraclite"] },
      { name: "Parmenides", aliases: ["Parménide"] },
      { name: "Democritus", aliases: ["Démocrite"] },
      { name: "Epicurus", aliases: ["Épicure"] },
      { name: "Diogenes", aliases: ["Diogène"] },
      { name: "Thales of Miletus", aliases: ["Thalès"] }
    ]
  },
  { id: "his-renaissance-figures", category: "History", prompt: "Most influential Renaissance figures", hint: "14th-17th centuries",
    items: [
      { name: "Leonardo da Vinci", aliases: ["Da Vinci", "Léonard de Vinci"] },
      { name: "Michelangelo", aliases: ["Michel-Ange"] },
      { name: "Raphael", aliases: ["Raphaël"] },
      { name: "Galileo Galilei", aliases: ["Galileo", "Galilée"] },
      { name: "Niccolò Machiavelli", aliases: ["Machiavelli", "Machiavel"] },
      { name: "William Shakespeare", aliases: ["Shakespeare"] },
      { name: "Erasmus", aliases: ["Érasme"] },
      { name: "Johannes Gutenberg", aliases: ["Gutenberg"] },
      { name: "Nicolaus Copernicus", aliases: ["Copernicus", "Copernic"] },
      { name: "Martin Luther", aliases: ["Luther"] }
    ]
  },
  { id: "his-us-founding-fathers", category: "History", prompt: "Most influential US Founding Fathers", hint: "Architects of America",
    items: [
      { name: "George Washington", aliases: ["Washington"] },
      { name: "Thomas Jefferson", aliases: ["Jefferson"] },
      { name: "Benjamin Franklin", aliases: ["Franklin"] },
      { name: "John Adams", aliases: ["Adams"] },
      { name: "Alexander Hamilton", aliases: ["Hamilton"] },
      { name: "James Madison", aliases: ["Madison"] },
      { name: "James Monroe", aliases: ["Monroe"] },
      { name: "John Jay", aliases: ["Jay"] },
      { name: "Samuel Adams", aliases: ["Sam Adams"] },
      { name: "Patrick Henry", aliases: ["Henry"] }
    ]
  },
  { id: "his-decorated-military-leaders", category: "History", prompt: "Most decorated/famous military leaders in history", hint: "Conquerors and generals",
    items: [
      { name: "Alexander the Great", aliases: ["Alexandre le Grand"] },
      { name: "Julius Caesar", aliases: ["Caesar", "César"] },
      { name: "Genghis Khan", aliases: ["Gengis Khan"] },
      { name: "Napoleon Bonaparte", aliases: ["Napoleon", "Napoléon"] },
      { name: "Hannibal Barca", aliases: ["Hannibal"] },
      { name: "Sun Tzu", aliases: ["Sun Zi"] },
      { name: "Saladin", aliases: ["Salah ad-Din"] },
      { name: "Cyrus the Great", aliases: ["Cyrus II"] },
      { name: "Tamerlane", aliases: ["Timur"] },
      { name: "Charlemagne", aliases: ["Charles the Great"] }
    ]
  },
  { id: "his-longest-reigning-monarchs", category: "History", prompt: "Longest reigning monarchs in history", hint: "Decades on the throne",
    items: [
      { name: "Louis XIV of France", aliases: ["Louis XIV", "Sun King"] },
      { name: "Elizabeth II of the UK", aliases: ["Elizabeth II"] },
      { name: "Bhumibol Adulyadej of Thailand", aliases: ["Bhumibol", "Rama IX"] },
      { name: "Johann II of Liechtenstein", aliases: ["Johann II"] },
      { name: "K'inich Janaab' Pakal", aliases: ["Pakal the Great"] },
      { name: "Queen Victoria", aliases: ["Victoria"] },
      { name: "James I of Aragon", aliases: ["Jaume I"] },
      { name: "Hirohito of Japan", aliases: ["Hirohito", "Showa"] },
      { name: "Franz Joseph I of Austria", aliases: ["Franz Joseph"] },
      { name: "Christian IV of Denmark", aliases: ["Christian IV"] }
    ]
  },
  { id: "his-currently-longest-monarchs", category: "History", prompt: "Currently longest-reigning monarchs", hint: "As of 2026",
    items: [
      { name: "Hassanal Bolkiah of Brunei", aliases: ["Sultan of Brunei", "Hassanal Bolkiah"] },
      { name: "Margrethe II of Denmark", aliases: ["Margrethe II"] },
      { name: "Carl XVI Gustaf of Sweden", aliases: ["Carl Gustaf"] },
      { name: "Harald V of Norway", aliases: ["Harald V"] },
      { name: "Mswati III of Eswatini", aliases: ["Mswati III"] },
      { name: "Abdullah II of Jordan", aliases: ["Abdullah II"] },
      { name: "Mohammed VI of Morocco", aliases: ["Mohammed VI"] },
      { name: "Hamad bin Isa of Bahrain", aliases: ["Hamad bin Isa"] },
      { name: "Henri of Luxembourg", aliases: ["Grand Duke Henri"] },
      { name: "Felipe VI of Spain", aliases: ["Felipe VI"] }
    ]
  },
  { id: "his-bloodiest-revolutions", category: "History", prompt: "Bloodiest revolutions in history", hint: "Death tolls in millions",
    items: [
      { name: "Chinese Communist Revolution", aliases: ["Chinese Revolution"] },
      { name: "Russian Revolution", aliases: ["October Revolution"] },
      { name: "Taiping Rebellion", aliases: ["Taiping Revolution"] },
      { name: "Mexican Revolution", aliases: ["Revolución Mexicana"] },
      { name: "French Revolution", aliases: ["Révolution Française"] },
      { name: "Iranian Revolution", aliases: ["Islamic Revolution"] },
      { name: "Cuban Revolution", aliases: ["Cuban"] },
      { name: "Haitian Revolution", aliases: ["Haiti Revolution"] },
      { name: "American Revolution", aliases: ["US Revolution"] },
      { name: "Cultural Revolution", aliases: ["Chinese Cultural Revolution"] }
    ]
  },
  { id: "his-largest-migrations", category: "History", prompt: "Largest mass migrations in history", hint: "Millions of people",
    items: [
      { name: "Partition of India", aliases: ["India Partition"] },
      { name: "European emigration to the Americas", aliases: ["European migration to Americas"] },
      { name: "Atlantic slave trade", aliases: ["Transatlantic Slave Trade"] },
      { name: "Post-WWII expulsion of Germans", aliases: ["German expulsions"] },
      { name: "Great Migration (African American)", aliases: ["Great Migration"] },
      { name: "Bantu migrations", aliases: ["Bantu expansion"] },
      { name: "Mongol migrations", aliases: ["Mongol expansion"] },
      { name: "Syrian refugee crisis", aliases: ["Syria refugees"] },
      { name: "Indo-Aryan migrations", aliases: ["Aryan migration"] },
      { name: "Migration Period (Volkerwanderung)", aliases: ["Barbarian Invasions"] }
    ]
  },
  { id: "his-famous-wwi-battles", category: "History", prompt: "Most famous WWI battles", hint: "1914-1918",
    items: [
      { name: "Battle of the Somme", aliases: ["Somme"] },
      { name: "Battle of Verdun", aliases: ["Verdun"] },
      { name: "Battle of the Marne", aliases: ["Marne", "First Marne"] },
      { name: "Battle of Gallipoli", aliases: ["Gallipoli", "Dardanelles"] },
      { name: "Battle of Passchendaele", aliases: ["Passchendaele", "Third Ypres"] },
      { name: "Battle of Tannenberg", aliases: ["Tannenberg"] },
      { name: "Battle of Jutland", aliases: ["Jutland"] },
      { name: "Battle of Ypres", aliases: ["Ypres", "First Ypres"] },
      { name: "Battle of Cambrai", aliases: ["Cambrai"] },
      { name: "Battle of Caporetto", aliases: ["Caporetto"] }
    ]
  },
  { id: "his-famous-wwii-battles", category: "History", prompt: "Most famous WWII battles", hint: "1939-1945",
    items: [
      { name: "D-Day (Normandy Landings)", aliases: ["D-Day", "Normandy", "Débarquement"] },
      { name: "Battle of Stalingrad", aliases: ["Stalingrad"] },
      { name: "Battle of Midway", aliases: ["Midway"] },
      { name: "Battle of Britain", aliases: ["Britain"] },
      { name: "Battle of the Bulge", aliases: ["Ardennes", "Bulge"] },
      { name: "Battle of Iwo Jima", aliases: ["Iwo Jima"] },
      { name: "Pearl Harbor", aliases: ["Attack on Pearl Harbor"] },
      { name: "Battle of Kursk", aliases: ["Kursk"] },
      { name: "Battle of El Alamein", aliases: ["El Alamein"] },
      { name: "Battle of Berlin", aliases: ["Berlin"] }
    ]
  },
  { id: "his-famous-civil-war-battles", category: "History", prompt: "Most famous US Civil War battles", hint: "1861-1865",
    items: [
      { name: "Battle of Gettysburg", aliases: ["Gettysburg"] },
      { name: "Battle of Antietam", aliases: ["Antietam", "Sharpsburg"] },
      { name: "Battle of Bull Run", aliases: ["Bull Run", "Manassas"] },
      { name: "Battle of Vicksburg", aliases: ["Vicksburg", "Siege of Vicksburg"] },
      { name: "Battle of Shiloh", aliases: ["Shiloh"] },
      { name: "Battle of Chancellorsville", aliases: ["Chancellorsville"] },
      { name: "Battle of Fredericksburg", aliases: ["Fredericksburg"] },
      { name: "Battle of Chickamauga", aliases: ["Chickamauga"] },
      { name: "Battle of the Wilderness", aliases: ["Wilderness"] },
      { name: "Battle of Cold Harbor", aliases: ["Cold Harbor"] }
    ]
  },
  { id: "his-napoleonic-battles", category: "History", prompt: "Most famous Napoleonic Wars battles", hint: "Empire era",
    items: [
      { name: "Battle of Waterloo", aliases: ["Waterloo"] },
      { name: "Battle of Austerlitz", aliases: ["Austerlitz"] },
      { name: "Battle of Trafalgar", aliases: ["Trafalgar"] },
      { name: "Battle of Borodino", aliases: ["Borodino"] },
      { name: "Battle of Leipzig", aliases: ["Leipzig", "Battle of the Nations"] },
      { name: "Battle of Jena", aliases: ["Jena-Auerstedt"] },
      { name: "Battle of Wagram", aliases: ["Wagram"] },
      { name: "Battle of Friedland", aliases: ["Friedland"] },
      { name: "Battle of Marengo", aliases: ["Marengo"] },
      { name: "Battle of the Pyramids", aliases: ["Pyramids"] }
    ]
  },
  { id: "his-antiquity-battles", category: "History", prompt: "Most famous battles of antiquity", hint: "BC era",
    items: [
      { name: "Battle of Thermopylae", aliases: ["Thermopylae", "300 Spartans"] },
      { name: "Battle of Marathon", aliases: ["Marathon"] },
      { name: "Battle of Cannae", aliases: ["Cannae"] },
      { name: "Battle of Salamis", aliases: ["Salamis"] },
      { name: "Battle of Gaugamela", aliases: ["Gaugamela", "Arbela"] },
      { name: "Battle of Actium", aliases: ["Actium"] },
      { name: "Battle of Zama", aliases: ["Zama"] },
      { name: "Battle of Issus", aliases: ["Issus"] },
      { name: "Battle of Plataea", aliases: ["Plataea"] },
      { name: "Battle of the Teutoburg Forest", aliases: ["Teutoburg"] }
    ]
  },
  { id: "his-famous-treaties", category: "History", prompt: "Most famous historic treaties", hint: "Peace and partition",
    items: [
      { name: "Treaty of Versailles", aliases: ["Versailles 1919"] },
      { name: "Treaty of Westphalia", aliases: ["Peace of Westphalia"] },
      { name: "Treaty of Tordesillas", aliases: ["Tordesillas"] },
      { name: "Magna Carta", aliases: ["Magna Carta 1215"] },
      { name: "Treaty of Rome", aliases: ["Rome Treaty 1957"] },
      { name: "Treaty of Paris (1783)", aliases: ["Paris 1783"] },
      { name: "Treaty of Brest-Litovsk", aliases: ["Brest-Litovsk"] },
      { name: "Treaty of Utrecht", aliases: ["Utrecht"] },
      { name: "Camp David Accords", aliases: ["Camp David"] },
      { name: "Molotov-Ribbentrop Pact", aliases: ["Nazi-Soviet Pact"] }
    ]
  },
  { id: "his-chinese-dynasties", category: "History", prompt: "Most powerful Chinese dynasties", hint: "Centuries of rule",
    items: [
      { name: "Han Dynasty", aliases: ["Han"] },
      { name: "Tang Dynasty", aliases: ["Tang"] },
      { name: "Ming Dynasty", aliases: ["Ming"] },
      { name: "Qing Dynasty", aliases: ["Qing", "Manchu"] },
      { name: "Song Dynasty", aliases: ["Song"] },
      { name: "Yuan Dynasty", aliases: ["Yuan", "Mongol Yuan"] },
      { name: "Zhou Dynasty", aliases: ["Zhou"] },
      { name: "Qin Dynasty", aliases: ["Qin"] },
      { name: "Sui Dynasty", aliases: ["Sui"] },
      { name: "Shang Dynasty", aliases: ["Shang"] }
    ]
  },
  { id: "his-influential-20c-leaders", category: "History", prompt: "Most influential 20th-century leaders", hint: "Defined the century",
    items: [
      { name: "Winston Churchill", aliases: ["Churchill"] },
      { name: "Franklin D. Roosevelt", aliases: ["FDR", "Roosevelt"] },
      { name: "Joseph Stalin", aliases: ["Stalin"] },
      { name: "Adolf Hitler", aliases: ["Hitler"] },
      { name: "Mao Zedong", aliases: ["Mao", "Mao Tse-tung"] },
      { name: "Mahatma Gandhi", aliases: ["Gandhi"] },
      { name: "Nelson Mandela", aliases: ["Mandela"] },
      { name: "Vladimir Lenin", aliases: ["Lenin"] },
      { name: "Mikhail Gorbachev", aliases: ["Gorbachev"] },
      { name: "Charles de Gaulle", aliases: ["De Gaulle"] }
    ]
  },
  { id: "his-influential-women", category: "History", prompt: "Most influential women in history", hint: "From ancient to modern",
    items: [
      { name: "Cleopatra VII", aliases: ["Cleopatra", "Cléopâtre"] },
      { name: "Queen Elizabeth I", aliases: ["Elizabeth I"] },
      { name: "Queen Victoria", aliases: ["Victoria"] },
      { name: "Catherine the Great", aliases: ["Catherine II"] },
      { name: "Joan of Arc", aliases: ["Jeanne d'Arc"] },
      { name: "Marie Curie", aliases: ["Curie"] },
      { name: "Margaret Thatcher", aliases: ["Thatcher"] },
      { name: "Indira Gandhi", aliases: ["Indira"] },
      { name: "Eleanor Roosevelt", aliases: ["Roosevelt"] },
      { name: "Empress Wu Zetian", aliases: ["Wu Zetian"] }
    ]
  },
  { id: "his-longest-dictators", category: "History", prompt: "Longest-serving dictators in modern history", hint: "Decades in power",
    items: [
      { name: "Kim Il-sung", aliases: ["Kim Il Sung"] },
      { name: "Fidel Castro", aliases: ["Castro"] },
      { name: "Chiang Kai-shek", aliases: ["Chiang Kai Shek"] },
      { name: "Francisco Franco", aliases: ["Franco"] },
      { name: "Muammar Gaddafi", aliases: ["Gaddafi", "Kadhafi"] },
      { name: "Robert Mugabe", aliases: ["Mugabe"] },
      { name: "Antonio Salazar", aliases: ["Salazar"] },
      { name: "Saparmurat Niyazov", aliases: ["Niyazov", "Turkmenbashi"] },
      { name: "Joseph Stalin", aliases: ["Stalin"] },
      { name: "Saddam Hussein", aliases: ["Saddam"] }
    ]
  },
  { id: "his-recent-german-chancellors", category: "History", prompt: "Recent German Chancellors (most recent first)", hint: "Post-war Germany",
    items: [
      { name: "Friedrich Merz", aliases: ["Merz"] },
      { name: "Olaf Scholz", aliases: ["Scholz"] },
      { name: "Angela Merkel", aliases: ["Merkel"] },
      { name: "Gerhard Schröder", aliases: ["Schroeder", "Schröder"] },
      { name: "Helmut Kohl", aliases: ["Kohl"] },
      { name: "Helmut Schmidt", aliases: ["Schmidt"] },
      { name: "Willy Brandt", aliases: ["Brandt"] },
      { name: "Kurt Georg Kiesinger", aliases: ["Kiesinger"] },
      { name: "Ludwig Erhard", aliases: ["Erhard"] },
      { name: "Konrad Adenauer", aliases: ["Adenauer"] }
    ]
  },
  { id: "his-russian-tsars", category: "History", prompt: "Most famous Russian Tsars", hint: "Romanov and before",
    items: [
      { name: "Ivan the Terrible", aliases: ["Ivan IV"] },
      { name: "Peter the Great", aliases: ["Peter I", "Pierre le Grand"] },
      { name: "Catherine the Great", aliases: ["Catherine II"] },
      { name: "Nicholas II", aliases: ["Nicolas II"] },
      { name: "Alexander I", aliases: ["Alexandre I"] },
      { name: "Alexander II", aliases: ["Alexandre II"] },
      { name: "Nicholas I", aliases: ["Nicolas I"] },
      { name: "Ivan III", aliases: ["Ivan the Great"] },
      { name: "Boris Godunov", aliases: ["Godunov"] },
      { name: "Michael I", aliases: ["Mikhail Romanov"] }
    ]
  },
  { id: "his-cold-war-leaders", category: "History", prompt: "Most important Cold War leaders", hint: "1947-1991",
    items: [
      { name: "Joseph Stalin", aliases: ["Stalin"] },
      { name: "Harry Truman", aliases: ["Truman"] },
      { name: "Dwight Eisenhower", aliases: ["Eisenhower", "Ike"] },
      { name: "John F. Kennedy", aliases: ["JFK", "Kennedy"] },
      { name: "Nikita Khrushchev", aliases: ["Khrushchev"] },
      { name: "Leonid Brezhnev", aliases: ["Brezhnev"] },
      { name: "Richard Nixon", aliases: ["Nixon"] },
      { name: "Ronald Reagan", aliases: ["Reagan"] },
      { name: "Mikhail Gorbachev", aliases: ["Gorbachev"] },
      { name: "Mao Zedong", aliases: ["Mao"] }
    ]
  },
  { id: "his-french-revolution-figures", category: "History", prompt: "Key figures of the French Revolution", hint: "1789-1799",
    items: [
      { name: "Maximilien Robespierre", aliases: ["Robespierre"] },
      { name: "Louis XVI", aliases: ["Louis 16"] },
      { name: "Marie Antoinette", aliases: ["Marie-Antoinette"] },
      { name: "Georges Danton", aliases: ["Danton"] },
      { name: "Jean-Paul Marat", aliases: ["Marat"] },
      { name: "Napoleon Bonaparte", aliases: ["Napoleon", "Napoléon"] },
      { name: "Marquis de Lafayette", aliases: ["Lafayette"] },
      { name: "Camille Desmoulins", aliases: ["Desmoulins"] },
      { name: "Emmanuel Sieyès", aliases: ["Sieyes", "Sieyès"] },
      { name: "Honoré Mirabeau", aliases: ["Mirabeau"] }
    ]
  },
  { id: "his-mongol-leaders", category: "History", prompt: "Most famous Mongol leaders", hint: "Khans and conquerors",
    items: [
      { name: "Genghis Khan", aliases: ["Gengis Khan", "Temujin"] },
      { name: "Kublai Khan", aliases: ["Khubilai Khan"] },
      { name: "Ögedei Khan", aliases: ["Ogedei"] },
      { name: "Möngke Khan", aliases: ["Mongke"] },
      { name: "Batu Khan", aliases: ["Batu"] },
      { name: "Hulagu Khan", aliases: ["Hulagu"] },
      { name: "Tolui Khan", aliases: ["Tolui"] },
      { name: "Chagatai Khan", aliases: ["Chagatai"] },
      { name: "Jochi", aliases: ["Jochi Khan"] },
      { name: "Subutai", aliases: ["Subotai"] }
    ]
  },
  { id: "his-american-civil-war-figures", category: "History", prompt: "Key figures of the American Civil War", hint: "1861-1865",
    items: [
      { name: "Abraham Lincoln", aliases: ["Lincoln"] },
      { name: "Ulysses S. Grant", aliases: ["Grant"] },
      { name: "Robert E. Lee", aliases: ["Lee"] },
      { name: "Jefferson Davis", aliases: ["Davis"] },
      { name: "William Tecumseh Sherman", aliases: ["Sherman"] },
      { name: "Stonewall Jackson", aliases: ["Jackson"] },
      { name: "George McClellan", aliases: ["McClellan"] },
      { name: "Frederick Douglass", aliases: ["Douglass"] },
      { name: "Harriet Tubman", aliases: ["Tubman"] },
      { name: "John Wilkes Booth", aliases: ["Booth"] }
    ]
  },
  { id: "his-ottoman-sultans", category: "History", prompt: "Most famous Ottoman Sultans", hint: "From founding to decline",
    items: [
      { name: "Suleiman the Magnificent", aliases: ["Suleiman I", "Soliman le Magnifique"] },
      { name: "Mehmed the Conqueror", aliases: ["Mehmed II"] },
      { name: "Selim I", aliases: ["Selim the Grim"] },
      { name: "Osman I", aliases: ["Osman"] },
      { name: "Orhan", aliases: ["Orhan I"] },
      { name: "Murad I", aliases: ["Murad"] },
      { name: "Bayezid I", aliases: ["Bayezid"] },
      { name: "Selim III", aliases: ["Selim 3"] },
      { name: "Abdul Hamid II", aliases: ["Abdulhamid II"] },
      { name: "Mehmed VI", aliases: ["Mehmed 6"] }
    ]
  },
  { id: "his-egyptian-pharaohs", category: "History", prompt: "Most famous Egyptian Pharaohs", hint: "Ancient Egypt",
    items: [
      { name: "Tutankhamun", aliases: ["King Tut", "Toutankhamon"] },
      { name: "Ramesses II", aliases: ["Ramses II", "Ramses the Great"] },
      { name: "Cleopatra VII", aliases: ["Cleopatra", "Cléopâtre"] },
      { name: "Khufu", aliases: ["Cheops", "Khéops"] },
      { name: "Akhenaten", aliases: ["Akhenaton"] },
      { name: "Hatshepsut", aliases: ["Hatshepsout"] },
      { name: "Thutmose III", aliases: ["Tuthmosis III"] },
      { name: "Nefertiti", aliases: ["Néfertiti"] },
      { name: "Narmer", aliases: ["Menes"] },
      { name: "Djoser", aliases: ["Zoser"] }
    ]
  },
  { id: "his-vietnam-war-figures", category: "History", prompt: "Key figures of the Vietnam War", hint: "1955-1975",
    items: [
      { name: "Ho Chi Minh", aliases: ["Hô Chi Minh"] },
      { name: "Lyndon B. Johnson", aliases: ["LBJ"] },
      { name: "Richard Nixon", aliases: ["Nixon"] },
      { name: "Henry Kissinger", aliases: ["Kissinger"] },
      { name: "Vo Nguyen Giap", aliases: ["Giap"] },
      { name: "Ngo Dinh Diem", aliases: ["Diem"] },
      { name: "Le Duan", aliases: ["Le Duan"] },
      { name: "William Westmoreland", aliases: ["Westmoreland"] },
      { name: "John F. Kennedy", aliases: ["JFK"] },
      { name: "Robert McNamara", aliases: ["McNamara"] }
    ]
  },
  { id: "his-nobel-peace-laureates", category: "History", prompt: "Most famous Nobel Peace Prize laureates", hint: "Peacemakers",
    items: [
      { name: "Martin Luther King Jr.", aliases: ["MLK"] },
      { name: "Mother Teresa", aliases: ["Mère Teresa"] },
      { name: "Nelson Mandela", aliases: ["Mandela"] },
      { name: "Dalai Lama", aliases: ["14th Dalai Lama"] },
      { name: "Malala Yousafzai", aliases: ["Malala"] },
      { name: "Barack Obama", aliases: ["Obama"] },
      { name: "Mikhail Gorbachev", aliases: ["Gorbachev"] },
      { name: "Jimmy Carter", aliases: ["Carter"] },
      { name: "Yitzhak Rabin", aliases: ["Rabin"] },
      { name: "Aung San Suu Kyi", aliases: ["Suu Kyi"] }
    ]
  },
  { id: "his-italian-pm", category: "History", prompt: "Recent Italian Prime Ministers (most recent first)", hint: "Palazzo Chigi",
    items: [
      { name: "Giorgia Meloni", aliases: ["Meloni"] },
      { name: "Mario Draghi", aliases: ["Draghi"] },
      { name: "Giuseppe Conte", aliases: ["Conte"] },
      { name: "Paolo Gentiloni", aliases: ["Gentiloni"] },
      { name: "Matteo Renzi", aliases: ["Renzi"] },
      { name: "Enrico Letta", aliases: ["Letta"] },
      { name: "Mario Monti", aliases: ["Monti"] },
      { name: "Silvio Berlusconi", aliases: ["Berlusconi"] },
      { name: "Romano Prodi", aliases: ["Prodi"] },
      { name: "Massimo D'Alema", aliases: ["D'Alema"] }
    ]
  },
  { id: "his-canadian-pm", category: "History", prompt: "Recent Canadian Prime Ministers (most recent first)", hint: "From Trudeau Sr to now",
    items: [
      { name: "Mark Carney", aliases: ["Carney"] },
      { name: "Justin Trudeau", aliases: ["Trudeau"] },
      { name: "Stephen Harper", aliases: ["Harper"] },
      { name: "Paul Martin", aliases: ["Martin"] },
      { name: "Jean Chrétien", aliases: ["Chretien"] },
      { name: "Kim Campbell", aliases: ["Campbell"] },
      { name: "Brian Mulroney", aliases: ["Mulroney"] },
      { name: "John Turner", aliases: ["Turner"] },
      { name: "Pierre Trudeau", aliases: ["Trudeau Sr"] },
      { name: "Joe Clark", aliases: ["Clark"] }
    ]
  },
  { id: "his-soviet-leaders", category: "History", prompt: "Soviet Union leaders (in order)", hint: "1922-1991",
    items: [
      { name: "Vladimir Lenin", aliases: ["Lenin"] },
      { name: "Joseph Stalin", aliases: ["Stalin"] },
      { name: "Georgy Malenkov", aliases: ["Malenkov"] },
      { name: "Nikita Khrushchev", aliases: ["Khrushchev"] },
      { name: "Leonid Brezhnev", aliases: ["Brezhnev"] },
      { name: "Yuri Andropov", aliases: ["Andropov"] },
      { name: "Konstantin Chernenko", aliases: ["Chernenko"] },
      { name: "Mikhail Gorbachev", aliases: ["Gorbachev"] },
      { name: "Alexei Rykov", aliases: ["Rykov"] },
      { name: "Vyacheslav Molotov", aliases: ["Molotov"] }
    ]
  },
  { id: "his-african-empires", category: "History", prompt: "Most famous African empires", hint: "Pre-colonial powers",
    items: [
      { name: "Ancient Egypt", aliases: ["Egypt"] },
      { name: "Mali Empire", aliases: ["Mali"] },
      { name: "Songhai Empire", aliases: ["Songhai"] },
      { name: "Ghana Empire", aliases: ["Ghana"] },
      { name: "Kingdom of Kush", aliases: ["Kush", "Nubia"] },
      { name: "Kingdom of Aksum", aliases: ["Axum"] },
      { name: "Great Zimbabwe", aliases: ["Zimbabwe"] },
      { name: "Ethiopian Empire", aliases: ["Ethiopia"] },
      { name: "Carthaginian Empire", aliases: ["Carthage"] },
      { name: "Zulu Kingdom", aliases: ["Zulu Empire"] }
    ]
  },
  { id: "his-crusades", category: "History", prompt: "Major Crusades (in order)", hint: "1096-1291",
    items: [
      { name: "First Crusade", aliases: ["Crusade 1"] },
      { name: "Second Crusade", aliases: ["Crusade 2"] },
      { name: "Third Crusade", aliases: ["Crusade 3", "Kings' Crusade"] },
      { name: "Fourth Crusade", aliases: ["Crusade 4"] },
      { name: "Fifth Crusade", aliases: ["Crusade 5"] },
      { name: "Sixth Crusade", aliases: ["Crusade 6"] },
      { name: "Seventh Crusade", aliases: ["Crusade 7"] },
      { name: "Eighth Crusade", aliases: ["Crusade 8"] },
      { name: "Ninth Crusade", aliases: ["Crusade 9"] },
      { name: "People's Crusade", aliases: ["Peasants' Crusade"] }
    ]
  },
  { id: "his-japanese-leaders", category: "History", prompt: "Most famous Japanese historical leaders", hint: "Shoguns and emperors",
    items: [
      { name: "Oda Nobunaga", aliases: ["Nobunaga"] },
      { name: "Toyotomi Hideyoshi", aliases: ["Hideyoshi"] },
      { name: "Tokugawa Ieyasu", aliases: ["Ieyasu"] },
      { name: "Emperor Meiji", aliases: ["Meiji"] },
      { name: "Emperor Hirohito", aliases: ["Hirohito", "Showa"] },
      { name: "Minamoto no Yoritomo", aliases: ["Yoritomo"] },
      { name: "Date Masamune", aliases: ["Masamune"] },
      { name: "Takeda Shingen", aliases: ["Shingen"] },
      { name: "Uesugi Kenshin", aliases: ["Kenshin"] },
      { name: "Emperor Akihito", aliases: ["Akihito"] }
    ]
  },
  { id: "his-deadliest-pandemics", category: "History", prompt: "Deadliest pandemics in history", hint: "Disease across centuries",
    items: [
      { name: "Black Death", aliases: ["Bubonic Plague"] },
      { name: "Spanish Flu", aliases: ["1918 Flu"] },
      { name: "Plague of Justinian", aliases: ["Justinian Plague"] },
      { name: "HIV/AIDS pandemic", aliases: ["AIDS"] },
      { name: "Third Plague Pandemic", aliases: ["Third Plague"] },
      { name: "Cocoliztli epidemics", aliases: ["Cocoliztli"] },
      { name: "COVID-19", aliases: ["Coronavirus"] },
      { name: "Antonine Plague", aliases: ["Plague of Galen"] },
      { name: "Asian Flu (1957)", aliases: ["1957 Flu"] },
      { name: "Hong Kong Flu (1968)", aliases: ["1968 Flu"] }
    ]
  },
  { id: "his-greek-leaders-ancient", category: "History", prompt: "Most famous figures of Ancient Greece", hint: "Politics and military",
    items: [
      { name: "Alexander the Great", aliases: ["Alexandre le Grand"] },
      { name: "Pericles", aliases: ["Périclès"] },
      { name: "Leonidas I", aliases: ["Leonidas"] },
      { name: "Themistocles", aliases: ["Thémistocle"] },
      { name: "Solon", aliases: ["Solon"] },
      { name: "Philip II of Macedon", aliases: ["Philip II"] },
      { name: "Cleisthenes", aliases: ["Clisthène"] },
      { name: "Lycurgus", aliases: ["Lycurgue"] },
      { name: "Alcibiades", aliases: ["Alcibiade"] },
      { name: "Draco", aliases: ["Dracon"] }
    ]
  },
  {
    id: "biz-interbrand-top10",
    category: "Brands",
    prompt: "Top 10 most valuable global brands (Interbrand)",
    hint: "Tech giants dominate the top",
    items: [
      { name: "Apple", aliases: ["Apple Inc."] },
      { name: "Microsoft", aliases: ["MSFT"] },
      { name: "Amazon", aliases: ["Amazon.com"] },
      { name: "Google", aliases: ["Alphabet"] },
      { name: "Samsung", aliases: ["Samsung Electronics"] },
      { name: "Toyota", aliases: ["Toyota Motor"] },
      { name: "Coca-Cola", aliases: ["Coke"] },
      { name: "Mercedes-Benz", aliases: ["Mercedes"] },
      { name: "McDonald's", aliases: ["McDo", "Mickey D's"] },
      { name: "BMW", aliases: ["Bayerische Motoren Werke"] }
    ]
  },
  {
    id: "biz-market-cap-top10",
    category: "Brands",
    prompt: "Top 10 largest companies by market capitalization",
    hint: "Mostly US tech, plus Saudi oil",
    items: [
      { name: "Apple", aliases: ["Apple Inc."] },
      { name: "Microsoft", aliases: ["MSFT"] },
      { name: "Nvidia", aliases: ["NVDA"] },
      { name: "Alphabet", aliases: ["Google"] },
      { name: "Amazon", aliases: ["Amazon.com"] },
      { name: "Saudi Aramco", aliases: ["Aramco"] },
      { name: "Meta", aliases: ["Facebook", "Meta Platforms"] },
      { name: "Berkshire Hathaway", aliases: ["Berkshire"] },
      { name: "TSMC", aliases: ["Taiwan Semiconductor"] },
      { name: "Tesla", aliases: ["TSLA"] }
    ]
  },
  {
    id: "biz-fortune-global-500",
    category: "Brands",
    prompt: "Top 10 largest companies by revenue (Fortune Global 500)",
    hint: "Walmart leads, oil and Chinese giants follow",
    items: [
      { name: "Walmart", aliases: ["Wal-Mart"] },
      { name: "Amazon", aliases: ["Amazon.com"] },
      { name: "State Grid", aliases: ["State Grid Corporation of China"] },
      { name: "Saudi Aramco", aliases: ["Aramco"] },
      { name: "Sinopec", aliases: ["China Petrochemical"] },
      { name: "China National Petroleum", aliases: ["CNPC"] },
      { name: "Apple", aliases: ["Apple Inc."] },
      { name: "UnitedHealth Group", aliases: ["UnitedHealth"] },
      { name: "Berkshire Hathaway", aliases: ["Berkshire"] },
      { name: "CVS Health", aliases: ["CVS"] }
    ]
  },
  {
    id: "biz-largest-tech",
    category: "Tech",
    prompt: "Top 10 largest tech companies by revenue",
    hint: "Hardware, software and Asian electronics",
    items: [
      { name: "Apple", aliases: ["Apple Inc."] },
      { name: "Samsung Electronics", aliases: ["Samsung"] },
      { name: "Alphabet", aliases: ["Google"] },
      { name: "Foxconn", aliases: ["Hon Hai"] },
      { name: "Microsoft", aliases: ["MSFT"] },
      { name: "Huawei", aliases: ["Huawei Technologies"] },
      { name: "Dell Technologies", aliases: ["Dell"] },
      { name: "Meta", aliases: ["Facebook"] },
      { name: "Sony", aliases: ["Sony Group"] },
      { name: "Hitachi", aliases: [] }
    ]
  },
  {
    id: "biz-largest-us",
    category: "Brands",
    prompt: "Top 10 largest US companies by revenue",
    hint: "Retail, healthcare and oil dominate",
    items: [
      { name: "Walmart", aliases: ["Wal-Mart"] },
      { name: "Amazon", aliases: ["Amazon.com"] },
      { name: "Apple", aliases: ["Apple Inc."] },
      { name: "UnitedHealth Group", aliases: ["UnitedHealth"] },
      { name: "Berkshire Hathaway", aliases: ["Berkshire"] },
      { name: "CVS Health", aliases: ["CVS"] },
      { name: "ExxonMobil", aliases: ["Exxon"] },
      { name: "Alphabet", aliases: ["Google"] },
      { name: "McKesson", aliases: [] },
      { name: "Cencora", aliases: ["AmerisourceBergen"] }
    ]
  },
  {
    id: "biz-largest-european",
    category: "Brands",
    prompt: "Top 10 largest European companies by revenue",
    hint: "Oil, autos and retail leaders",
    items: [
      { name: "Shell", aliases: ["Royal Dutch Shell"] },
      { name: "Volkswagen", aliases: ["VW"] },
      { name: "TotalEnergies", aliases: ["Total"] },
      { name: "BP", aliases: ["British Petroleum"] },
      { name: "Glencore", aliases: [] },
      { name: "Stellantis", aliases: [] },
      { name: "Mercedes-Benz Group", aliases: ["Mercedes-Benz"] },
      { name: "BMW Group", aliases: ["BMW"] },
      { name: "Carrefour", aliases: [] },
      { name: "Allianz", aliases: [] }
    ]
  },
  {
    id: "biz-largest-asian",
    category: "Brands",
    prompt: "Top 10 largest Asian companies by revenue",
    hint: "Chinese state giants and Japanese autos",
    items: [
      { name: "State Grid", aliases: ["State Grid of China"] },
      { name: "Saudi Aramco", aliases: ["Aramco"] },
      { name: "Sinopec", aliases: [] },
      { name: "China National Petroleum", aliases: ["CNPC"] },
      { name: "Toyota", aliases: ["Toyota Motor"] },
      { name: "ICBC", aliases: ["Industrial and Commercial Bank of China"] },
      { name: "China Construction Bank", aliases: ["CCB"] },
      { name: "Ping An Insurance", aliases: ["Ping An"] },
      { name: "Samsung Electronics", aliases: ["Samsung"] },
      { name: "Agricultural Bank of China", aliases: ["ABC"] }
    ]
  },
  {
    id: "biz-most-used-apps",
    category: "Tech",
    prompt: "Top 10 most-downloaded apps worldwide",
    hint: "Social, messaging and short video",
    items: [
      { name: "TikTok", aliases: ["Douyin"] },
      { name: "Instagram", aliases: ["IG"] },
      { name: "Facebook", aliases: ["FB"] },
      { name: "WhatsApp", aliases: ["WhatsApp Messenger"] },
      { name: "CapCut", aliases: [] },
      { name: "Telegram", aliases: [] },
      { name: "Snapchat", aliases: ["Snap"] },
      { name: "Messenger", aliases: ["Facebook Messenger"] },
      { name: "Spotify", aliases: [] },
      { name: "Temu", aliases: [] }
    ]
  },
  {
    id: "biz-social-media",
    category: "Tech",
    prompt: "Top 10 largest social media platforms by users",
    hint: "Meta owns several of them",
    items: [
      { name: "Facebook", aliases: ["FB", "Meta"] },
      { name: "YouTube", aliases: [] },
      { name: "WhatsApp", aliases: [] },
      { name: "Instagram", aliases: ["IG"] },
      { name: "TikTok", aliases: ["Douyin"] },
      { name: "WeChat", aliases: ["Weixin"] },
      { name: "Messenger", aliases: ["Facebook Messenger"] },
      { name: "Telegram", aliases: [] },
      { name: "Snapchat", aliases: ["Snap"] },
      { name: "Douyin", aliases: [] }
    ]
  },
  {
    id: "biz-most-visited-websites",
    category: "Tech",
    prompt: "Top 10 most-visited websites in the world",
    hint: "Search, video and social",
    items: [
      { name: "Google", aliases: ["google.com"] },
      { name: "YouTube", aliases: ["youtube.com"] },
      { name: "Facebook", aliases: ["facebook.com"] },
      { name: "Instagram", aliases: ["instagram.com"] },
      { name: "X", aliases: ["Twitter", "twitter.com", "x.com"] },
      { name: "WhatsApp", aliases: ["whatsapp.com"] },
      { name: "Wikipedia", aliases: ["wikipedia.org"] },
      { name: "ChatGPT", aliases: ["chatgpt.com", "OpenAI"] },
      { name: "Reddit", aliases: ["reddit.com"] },
      { name: "Yahoo", aliases: ["yahoo.com"] }
    ]
  },
  {
    id: "biz-largest-ecommerce",
    category: "Tech",
    prompt: "Top 10 largest e-commerce companies by GMV/revenue",
    hint: "Chinese and US giants",
    items: [
      { name: "Amazon", aliases: ["Amazon.com"] },
      { name: "Alibaba", aliases: ["Taobao", "Tmall"] },
      { name: "JD.com", aliases: ["Jingdong"] },
      { name: "Pinduoduo", aliases: ["PDD", "Temu"] },
      { name: "Shopee", aliases: [] },
      { name: "Walmart", aliases: ["Walmart.com"] },
      { name: "eBay", aliases: [] },
      { name: "Rakuten", aliases: [] },
      { name: "Mercado Libre", aliases: ["MercadoLibre"] },
      { name: "Coupang", aliases: [] }
    ]
  },
  {
    id: "biz-fast-food-locations",
    category: "Food",
    prompt: "Top 10 fast food chains by number of locations",
    hint: "Sandwiches, burgers and chicken",
    items: [
      { name: "Subway", aliases: [] },
      { name: "McDonald's", aliases: ["McDo"] },
      { name: "Starbucks", aliases: [] },
      { name: "KFC", aliases: ["Kentucky Fried Chicken"] },
      { name: "Burger King", aliases: ["BK"] },
      { name: "Pizza Hut", aliases: [] },
      { name: "Domino's", aliases: ["Domino's Pizza"] },
      { name: "Dunkin'", aliases: ["Dunkin Donuts"] },
      { name: "Taco Bell", aliases: [] },
      { name: "Wendy's", aliases: [] }
    ]
  },
  {
    id: "biz-fast-food-revenue",
    category: "Food",
    prompt: "Top 10 fast food chains by global revenue",
    hint: "McDonald's still leads",
    items: [
      { name: "McDonald's", aliases: ["McDo"] },
      { name: "Starbucks", aliases: [] },
      { name: "Chick-fil-A", aliases: [] },
      { name: "Taco Bell", aliases: [] },
      { name: "Wendy's", aliases: [] },
      { name: "Burger King", aliases: ["BK"] },
      { name: "Subway", aliases: [] },
      { name: "Chipotle", aliases: ["Chipotle Mexican Grill"] },
      { name: "Domino's", aliases: ["Domino's Pizza"] },
      { name: "Dunkin'", aliases: ["Dunkin Donuts"] }
    ]
  },
  {
    id: "biz-hotel-chains-rooms",
    category: "Brands",
    prompt: "Top 10 largest hotel chains by number of rooms",
    hint: "Marriott leads the pack",
    items: [
      { name: "Marriott", aliases: ["Marriott International"] },
      { name: "Jin Jiang", aliases: ["Jin Jiang International"] },
      { name: "Hilton", aliases: ["Hilton Worldwide"] },
      { name: "IHG", aliases: ["InterContinental Hotels Group"] },
      { name: "Wyndham", aliases: ["Wyndham Hotels"] },
      { name: "Accor", aliases: [] },
      { name: "Choice Hotels", aliases: ["Choice"] },
      { name: "Huazhu", aliases: ["H World"] },
      { name: "BTH Hotels", aliases: ["BTG Homeinns"] },
      { name: "Best Western", aliases: [] }
    ]
  },
  {
    id: "biz-airlines-passengers",
    category: "Brands",
    prompt: "Top 10 airlines by annual passengers carried",
    hint: "Big US carriers and Ryanair",
    items: [
      { name: "Delta Air Lines", aliases: ["Delta"] },
      { name: "American Airlines", aliases: ["American"] },
      { name: "Ryanair", aliases: [] },
      { name: "Southwest Airlines", aliases: ["Southwest"] },
      { name: "United Airlines", aliases: ["United"] },
      { name: "China Southern", aliases: ["China Southern Airlines"] },
      { name: "Turkish Airlines", aliases: [] },
      { name: "IndiGo", aliases: [] },
      { name: "easyJet", aliases: [] },
      { name: "Lufthansa", aliases: [] }
    ]
  },
  {
    id: "biz-airlines-fleet",
    category: "Brands",
    prompt: "Top 10 airlines by fleet size",
    hint: "American Airlines flies the most planes",
    items: [
      { name: "American Airlines", aliases: ["American"] },
      { name: "Delta Air Lines", aliases: ["Delta"] },
      { name: "United Airlines", aliases: ["United"] },
      { name: "Southwest Airlines", aliases: ["Southwest"] },
      { name: "FedEx", aliases: ["FedEx Express"] },
      { name: "China Southern", aliases: [] },
      { name: "Ryanair", aliases: [] },
      { name: "China Eastern", aliases: [] },
      { name: "Air China", aliases: [] },
      { name: "UPS Airlines", aliases: ["UPS"] }
    ]
  },
  {
    id: "biz-cruise-lines",
    category: "Brands",
    prompt: "Top 10 largest cruise lines by passengers",
    hint: "Carnival, Royal Caribbean and MSC lead",
    items: [
      { name: "Carnival Cruise Line", aliases: ["Carnival"] },
      { name: "Royal Caribbean", aliases: ["Royal Caribbean International"] },
      { name: "MSC Cruises", aliases: ["MSC"] },
      { name: "Norwegian Cruise Line", aliases: ["NCL", "Norwegian"] },
      { name: "Princess Cruises", aliases: ["Princess"] },
      { name: "Costa Cruises", aliases: ["Costa"] },
      { name: "Celebrity Cruises", aliases: ["Celebrity"] },
      { name: "Holland America Line", aliases: ["Holland America"] },
      { name: "AIDA Cruises", aliases: ["AIDA"] },
      { name: "P&O Cruises", aliases: ["P and O"] }
    ]
  },
  {
    id: "biz-pizza-chains",
    category: "Food",
    prompt: "Top 10 most popular pizza chains worldwide",
    hint: "Domino's and Pizza Hut at the top",
    items: [
      { name: "Domino's", aliases: ["Domino's Pizza"] },
      { name: "Pizza Hut", aliases: [] },
      { name: "Little Caesars", aliases: [] },
      { name: "Papa John's", aliases: ["Papa Johns"] },
      { name: "Papa Murphy's", aliases: [] },
      { name: "Marco's Pizza", aliases: ["Marcos Pizza"] },
      { name: "California Pizza Kitchen", aliases: ["CPK"] },
      { name: "Sbarro", aliases: [] },
      { name: "Round Table Pizza", aliases: [] },
      { name: "Chuck E. Cheese", aliases: ["Chuck E Cheese"] }
    ]
  },
  {
    id: "biz-coffee-chains",
    category: "Food",
    prompt: "Top 10 most popular coffee chains worldwide",
    hint: "Starbucks, Luckin, Tim Hortons",
    items: [
      { name: "Starbucks", aliases: [] },
      { name: "Luckin Coffee", aliases: ["Luckin"] },
      { name: "Dunkin'", aliases: ["Dunkin Donuts"] },
      { name: "Tim Hortons", aliases: ["Timmies"] },
      { name: "Costa Coffee", aliases: ["Costa"] },
      { name: "Cotti Coffee", aliases: ["Cotti"] },
      { name: "McCafe", aliases: ["McCafé"] },
      { name: "Caribou Coffee", aliases: ["Caribou"] },
      { name: "Peet's Coffee", aliases: ["Peets"] },
      { name: "Pret a Manger", aliases: ["Pret"] }
    ]
  },
  {
    id: "biz-ice-cream-brands",
    category: "Food",
    prompt: "Top 10 most popular ice cream brands worldwide",
    hint: "Unilever and Nestlé own most",
    items: [
      { name: "Magnum", aliases: [] },
      { name: "Ben & Jerry's", aliases: ["Ben and Jerry's"] },
      { name: "Häagen-Dazs", aliases: ["Haagen-Dazs", "Haagen Dazs"] },
      { name: "Cornetto", aliases: [] },
      { name: "Wall's", aliases: ["Walls"] },
      { name: "Breyers", aliases: [] },
      { name: "Baskin-Robbins", aliases: ["Baskin Robbins"] },
      { name: "Dairy Queen", aliases: ["DQ"] },
      { name: "Klondike", aliases: [] },
      { name: "Drumstick", aliases: [] }
    ]
  },
  {
    id: "biz-beer-brands",
    category: "Food",
    prompt: "Top 10 most popular beer brands worldwide",
    hint: "Chinese and AB InBev brands lead",
    items: [
      { name: "Snow", aliases: ["Snow Beer"] },
      { name: "Budweiser", aliases: ["Bud"] },
      { name: "Tsingtao", aliases: [] },
      { name: "Bud Light", aliases: [] },
      { name: "Skol", aliases: [] },
      { name: "Heineken", aliases: [] },
      { name: "Harbin", aliases: ["Harbin Beer"] },
      { name: "Brahma", aliases: [] },
      { name: "Yanjing", aliases: ["Yanjing Beer"] },
      { name: "Corona", aliases: ["Corona Extra"] }
    ]
  },
  {
    id: "biz-whiskey-producers",
    category: "Food",
    prompt: "Top 10 best-selling whiskey brands worldwide",
    hint: "Indian whiskies dominate by volume",
    items: [
      { name: "Officer's Choice", aliases: [] },
      { name: "McDowell's No. 1", aliases: ["McDowells No 1"] },
      { name: "Imperial Blue", aliases: [] },
      { name: "Royal Stag", aliases: [] },
      { name: "Jack Daniel's", aliases: ["Jack Daniels"] },
      { name: "Johnnie Walker", aliases: [] },
      { name: "Jameson", aliases: ["Jameson Irish Whiskey"] },
      { name: "Crown Royal", aliases: [] },
      { name: "Jim Beam", aliases: [] },
      { name: "Ballantine's", aliases: ["Ballantines"] }
    ]
  },
  {
    id: "biz-most-consumed-beverages",
    category: "Food",
    prompt: "Top 10 most consumed beverages globally",
    hint: "Water and tea on top",
    items: [
      { name: "Water", aliases: [] },
      { name: "Tea", aliases: [] },
      { name: "Coffee", aliases: [] },
      { name: "Beer", aliases: [] },
      { name: "Carbonated soft drinks", aliases: ["Soda", "Pop"] },
      { name: "Milk", aliases: [] },
      { name: "Wine", aliases: [] },
      { name: "Fruit juice", aliases: ["Juice"] },
      { name: "Bottled water", aliases: [] },
      { name: "Energy drinks", aliases: [] }
    ]
  },
  {
    id: "biz-alcohol-by-country",
    category: "Food",
    prompt: "Top 10 countries by alcohol consumption per capita",
    hint: "Eastern European countries lead",
    items: [
      { name: "Latvia", aliases: [] },
      { name: "Moldova", aliases: [] },
      { name: "Germany", aliases: [] },
      { name: "Lithuania", aliases: [] },
      { name: "Ireland", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "Uganda", aliases: [] },
      { name: "Bulgaria", aliases: [] },
      { name: "Luxembourg", aliases: [] },
      { name: "Romania", aliases: [] }
    ]
  },
  {
    id: "biz-cuisines-presence",
    category: "Food",
    prompt: "Top 10 most popular cuisines by global presence",
    hint: "Italian, Chinese, Japanese top the list",
    items: [
      { name: "Italian", aliases: [] },
      { name: "Chinese", aliases: [] },
      { name: "Japanese", aliases: [] },
      { name: "Indian", aliases: [] },
      { name: "Mexican", aliases: [] },
      { name: "French", aliases: [] },
      { name: "Thai", aliases: [] },
      { name: "Spanish", aliases: [] },
      { name: "Greek", aliases: [] },
      { name: "American", aliases: [] }
    ]
  },
  {
    id: "biz-michelin-3star-countries",
    category: "Food",
    prompt: "Top 10 countries by number of Michelin 3-star restaurants",
    hint: "France and Japan in front",
    items: [
      { name: "France", aliases: ["FR"] },
      { name: "Japan", aliases: [] },
      { name: "Italy", aliases: [] },
      { name: "United States", aliases: ["USA", "US"] },
      { name: "Germany", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "Switzerland", aliases: [] },
      { name: "China", aliases: [] },
      { name: "United Kingdom", aliases: ["UK", "Britain"] },
      { name: "Belgium", aliases: [] }
    ]
  },
  {
    id: "biz-50-best-restaurants",
    category: "Food",
    prompt: "Top 10 of World's 50 Best Restaurants (recent winners)",
    hint: "Lima, Barcelona, Bangkok lead",
    items: [
      { name: "Disfrutar", aliases: [] },
      { name: "Asador Etxebarri", aliases: ["Etxebarri"] },
      { name: "Table by Bruno Verjus", aliases: ["Table"] },
      { name: "Diverxo", aliases: ["DiverXO"] },
      { name: "Maido", aliases: [] },
      { name: "Atomix", aliases: [] },
      { name: "Quintonil", aliases: [] },
      { name: "Alchemist", aliases: [] },
      { name: "Kjolle", aliases: [] },
      { name: "Don Julio", aliases: [] }
    ]
  },
  {
    id: "biz-snack-brands",
    category: "Food",
    prompt: "Top 10 most popular snack brands worldwide",
    hint: "Lays, Doritos and Oreo dominate",
    items: [
      { name: "Lay's", aliases: ["Lays", "Walkers"] },
      { name: "Doritos", aliases: [] },
      { name: "Oreo", aliases: [] },
      { name: "Cheetos", aliases: [] },
      { name: "Pringles", aliases: [] },
      { name: "Ruffles", aliases: [] },
      { name: "Tostitos", aliases: [] },
      { name: "Ritz", aliases: ["Ritz Crackers"] },
      { name: "Goldfish", aliases: [] },
      { name: "Chips Ahoy!", aliases: ["Chips Ahoy"] }
    ]
  },
  {
    id: "biz-candy-brands",
    category: "Food",
    prompt: "Top 10 most popular candy brands worldwide",
    hint: "Mars, Nestlé and Hershey rule",
    items: [
      { name: "M&M's", aliases: ["M and M's", "MMs"] },
      { name: "Snickers", aliases: [] },
      { name: "Reese's", aliases: ["Reeses"] },
      { name: "Kit Kat", aliases: ["KitKat"] },
      { name: "Hershey's", aliases: ["Hershey"] },
      { name: "Twix", aliases: [] },
      { name: "Cadbury Dairy Milk", aliases: ["Dairy Milk"] },
      { name: "Skittles", aliases: [] },
      { name: "Milky Way", aliases: [] },
      { name: "Mars", aliases: ["Mars Bar"] }
    ]
  },
  {
    id: "biz-cereal-brands",
    category: "Food",
    prompt: "Top 10 most popular breakfast cereal brands",
    hint: "Kellogg's and General Mills",
    items: [
      { name: "Cheerios", aliases: [] },
      { name: "Frosted Flakes", aliases: ["Frosties"] },
      { name: "Honey Nut Cheerios", aliases: [] },
      { name: "Cinnamon Toast Crunch", aliases: [] },
      { name: "Lucky Charms", aliases: [] },
      { name: "Froot Loops", aliases: ["Fruit Loops"] },
      { name: "Special K", aliases: [] },
      { name: "Frosted Mini-Wheats", aliases: ["Mini-Wheats"] },
      { name: "Rice Krispies", aliases: [] },
      { name: "Corn Flakes", aliases: ["Kellogg's Corn Flakes"] }
    ]
  },
  {
    id: "biz-soft-drinks",
    category: "Food",
    prompt: "Top 10 best-selling soft drink brands worldwide",
    hint: "Coke and Pepsi own most slots",
    items: [
      { name: "Coca-Cola", aliases: ["Coke"] },
      { name: "Pepsi", aliases: ["Pepsi-Cola"] },
      { name: "Diet Coke", aliases: ["Coca-Cola Light"] },
      { name: "Sprite", aliases: [] },
      { name: "Fanta", aliases: [] },
      { name: "Mountain Dew", aliases: ["Mtn Dew"] },
      { name: "Dr Pepper", aliases: ["Doctor Pepper"] },
      { name: "Coca-Cola Zero", aliases: ["Coke Zero"] },
      { name: "7 Up", aliases: ["7UP", "Seven Up"] },
      { name: "Schweppes", aliases: [] }
    ]
  },
  {
    id: "biz-most-consumed-fruits",
    category: "Food",
    prompt: "Top 10 most consumed fruits worldwide",
    hint: "Tomato counts, surprisingly",
    items: [
      { name: "Tomato", aliases: ["Tomatoes"] },
      { name: "Banana", aliases: ["Bananas"] },
      { name: "Watermelon", aliases: [] },
      { name: "Apple", aliases: ["Apples"] },
      { name: "Orange", aliases: ["Oranges"] },
      { name: "Mango", aliases: ["Mangoes"] },
      { name: "Grapes", aliases: [] },
      { name: "Plantain", aliases: ["Plantains"] },
      { name: "Pineapple", aliases: [] },
      { name: "Pear", aliases: ["Pears"] }
    ]
  },
  {
    id: "biz-most-consumed-vegetables",
    category: "Food",
    prompt: "Top 10 most consumed vegetables worldwide",
    hint: "Potatoes lead by far",
    items: [
      { name: "Potato", aliases: ["Potatoes"] },
      { name: "Onion", aliases: ["Onions"] },
      { name: "Cucumber", aliases: ["Cucumbers"] },
      { name: "Cabbage", aliases: [] },
      { name: "Eggplant", aliases: ["Aubergine"] },
      { name: "Carrot", aliases: ["Carrots"] },
      { name: "Sweet potato", aliases: ["Sweet potatoes"] },
      { name: "Lettuce", aliases: [] },
      { name: "Spinach", aliases: [] },
      { name: "Broccoli", aliases: [] }
    ]
  },
  {
    id: "biz-most-produced-grains",
    category: "Food",
    prompt: "Top 10 most produced grains worldwide",
    hint: "Corn, wheat and rice on top",
    items: [
      { name: "Corn", aliases: ["Maize"] },
      { name: "Wheat", aliases: [] },
      { name: "Rice", aliases: [] },
      { name: "Barley", aliases: [] },
      { name: "Sorghum", aliases: [] },
      { name: "Oats", aliases: [] },
      { name: "Rye", aliases: [] },
      { name: "Millet", aliases: [] },
      { name: "Triticale", aliases: [] },
      { name: "Buckwheat", aliases: [] }
    ]
  },
  {
    id: "biz-expensive-spices",
    category: "Food",
    prompt: "Top 10 most expensive spices in the world",
    hint: "Saffron is famously costly",
    items: [
      { name: "Saffron", aliases: [] },
      { name: "Vanilla", aliases: ["Vanilla bean"] },
      { name: "Mahlab", aliases: ["Mahleb"] },
      { name: "Long pepper", aliases: ["Pippali"] },
      { name: "Grains of paradise", aliases: [] },
      { name: "Cardamom", aliases: [] },
      { name: "Cinnamon", aliases: ["Ceylon cinnamon"] },
      { name: "Cloves", aliases: ["Clove"] },
      { name: "Black cumin", aliases: ["Nigella"] },
      { name: "Asafoetida", aliases: ["Hing"] }
    ]
  },
  {
    id: "biz-spiciest-peppers",
    category: "Food",
    prompt: "Top 10 spiciest peppers in the world (Scoville)",
    hint: "Pepper X is the new king",
    items: [
      { name: "Pepper X", aliases: [] },
      { name: "Carolina Reaper", aliases: [] },
      { name: "Dragon's Breath", aliases: ["Dragons Breath"] },
      { name: "Komodo Dragon", aliases: [] },
      { name: "Trinidad Moruga Scorpion", aliases: ["Moruga Scorpion"] },
      { name: "7 Pot Douglah", aliases: ["Chocolate 7 Pot"] },
      { name: "7 Pot Primo", aliases: [] },
      { name: "Trinidad Scorpion Butch T", aliases: ["Butch T Scorpion"] },
      { name: "Naga Viper", aliases: [] },
      { name: "Ghost Pepper", aliases: ["Bhut Jolokia"] }
    ]
  },
  {
    id: "biz-beer-producing-countries",
    category: "Food",
    prompt: "Top 10 beer-producing countries",
    hint: "China leads by volume",
    items: [
      { name: "China", aliases: [] },
      { name: "United States", aliases: ["USA"] },
      { name: "Brazil", aliases: [] },
      { name: "Mexico", aliases: [] },
      { name: "Germany", aliases: [] },
      { name: "Russia", aliases: [] },
      { name: "Japan", aliases: [] },
      { name: "Vietnam", aliases: [] },
      { name: "United Kingdom", aliases: ["UK"] },
      { name: "Spain", aliases: [] }
    ]
  },
  {
    id: "biz-wine-producing-countries",
    category: "Food",
    prompt: "Top 10 wine-producing countries",
    hint: "Italy, France and Spain",
    items: [
      { name: "Italy", aliases: [] },
      { name: "France", aliases: [] },
      { name: "Spain", aliases: [] },
      { name: "United States", aliases: ["USA"] },
      { name: "Australia", aliases: [] },
      { name: "Chile", aliases: [] },
      { name: "Argentina", aliases: [] },
      { name: "South Africa", aliases: [] },
      { name: "Germany", aliases: [] },
      { name: "Portugal", aliases: [] }
    ]
  },
  {
    id: "biz-spirits-producing-countries",
    category: "Food",
    prompt: "Top 10 spirits-producing countries",
    hint: "China leads, then India and US",
    items: [
      { name: "China", aliases: [] },
      { name: "India", aliases: [] },
      { name: "United States", aliases: ["USA"] },
      { name: "Russia", aliases: [] },
      { name: "Brazil", aliases: [] },
      { name: "Japan", aliases: [] },
      { name: "Philippines", aliases: [] },
      { name: "Thailand", aliases: [] },
      { name: "South Korea", aliases: [] },
      { name: "Germany", aliases: [] }
    ]
  },
  {
    id: "biz-top-exporting-countries",
    category: "Brands",
    prompt: "Top 10 exporting countries by value",
    hint: "China, US and Germany",
    items: [
      { name: "China", aliases: [] },
      { name: "United States", aliases: ["USA"] },
      { name: "Germany", aliases: [] },
      { name: "Netherlands", aliases: [] },
      { name: "Japan", aliases: [] },
      { name: "South Korea", aliases: [] },
      { name: "Italy", aliases: [] },
      { name: "France", aliases: [] },
      { name: "Hong Kong", aliases: [] },
      { name: "Mexico", aliases: [] }
    ]
  },
  {
    id: "biz-largest-universities",
    category: "Brands",
    prompt: "Top 10 largest universities by enrollment",
    hint: "Open universities dominate",
    items: [
      { name: "Indira Gandhi National Open University", aliases: ["IGNOU"] },
      { name: "Allama Iqbal Open University", aliases: ["AIOU"] },
      { name: "Anadolu University", aliases: [] },
      { name: "Islamic Azad University", aliases: [] },
      { name: "Bangladesh National University", aliases: ["National University Bangladesh"] },
      { name: "Payame Noor University", aliases: [] },
      { name: "University of Mumbai", aliases: ["Bombay University"] },
      { name: "University of Pune", aliases: ["Savitribai Phule Pune University"] },
      { name: "University of Delhi", aliases: ["Delhi University", "DU"] },
      { name: "Tribhuvan University", aliases: [] }
    ]
  },
  {
    id: "biz-largest-automakers",
    category: "Brands",
    prompt: "Top 10 largest automakers by vehicles sold",
    hint: "Toyota and Volkswagen lead",
    items: [
      { name: "Toyota", aliases: ["Toyota Motor"] },
      { name: "Volkswagen", aliases: ["VW", "Volkswagen Group"] },
      { name: "Hyundai-Kia", aliases: ["Hyundai Motor Group"] },
      { name: "Stellantis", aliases: [] },
      { name: "General Motors", aliases: ["GM"] },
      { name: "Ford", aliases: ["Ford Motor"] },
      { name: "Honda", aliases: ["Honda Motor"] },
      { name: "Nissan", aliases: [] },
      { name: "BYD", aliases: [] },
      { name: "Suzuki", aliases: [] }
    ]
  },
  {
    id: "biz-largest-banks-assets",
    category: "Brands",
    prompt: "Top 10 largest banks by total assets",
    hint: "Chinese state banks lead",
    items: [
      { name: "ICBC", aliases: ["Industrial and Commercial Bank of China"] },
      { name: "Agricultural Bank of China", aliases: ["ABC"] },
      { name: "China Construction Bank", aliases: ["CCB"] },
      { name: "Bank of China", aliases: ["BoC"] },
      { name: "JPMorgan Chase", aliases: ["JPM"] },
      { name: "Bank of America", aliases: ["BofA"] },
      { name: "HSBC", aliases: ["HSBC Holdings"] },
      { name: "BNP Paribas", aliases: [] },
      { name: "Crédit Agricole", aliases: ["Credit Agricole"] },
      { name: "Mitsubishi UFJ", aliases: ["MUFG"] }
    ]
  },
  {
    id: "biz-largest-insurance",
    category: "Brands",
    prompt: "Top 10 largest insurance companies by revenue",
    hint: "Berkshire and Ping An on top",
    items: [
      { name: "Berkshire Hathaway", aliases: ["Berkshire"] },
      { name: "Ping An Insurance", aliases: ["Ping An"] },
      { name: "UnitedHealth Group", aliases: ["UnitedHealth"] },
      { name: "China Life Insurance", aliases: ["China Life"] },
      { name: "Centene", aliases: ["Centene Corporation"] },
      { name: "Allianz", aliases: [] },
      { name: "AXA", aliases: [] },
      { name: "Munich Re", aliases: [] },
      { name: "Assicurazioni Generali", aliases: ["Generali"] },
      { name: "People's Insurance Company of China", aliases: ["PICC"] }
    ]
  },
  {
    id: "biz-largest-oil-companies",
    category: "Brands",
    prompt: "Top 10 largest oil and gas companies by revenue",
    hint: "Aramco, Sinopec and ExxonMobil",
    items: [
      { name: "Saudi Aramco", aliases: ["Aramco"] },
      { name: "Sinopec", aliases: ["China Petrochemical"] },
      { name: "China National Petroleum", aliases: ["CNPC", "PetroChina"] },
      { name: "ExxonMobil", aliases: ["Exxon"] },
      { name: "Shell", aliases: ["Royal Dutch Shell"] },
      { name: "TotalEnergies", aliases: ["Total"] },
      { name: "BP", aliases: ["British Petroleum"] },
      { name: "Chevron", aliases: [] },
      { name: "Marathon Petroleum", aliases: ["Marathon"] },
      { name: "Valero Energy", aliases: ["Valero"] }
    ]
  },
  {
    id: "biz-largest-mining",
    category: "Brands",
    prompt: "Top 10 largest mining companies by revenue",
    hint: "Glencore and BHP up top",
    items: [
      { name: "Glencore", aliases: [] },
      { name: "BHP", aliases: ["BHP Group"] },
      { name: "Rio Tinto", aliases: [] },
      { name: "Vale", aliases: [] },
      { name: "China Shenhua Energy", aliases: ["Shenhua"] },
      { name: "Anglo American", aliases: [] },
      { name: "Freeport-McMoRan", aliases: ["Freeport"] },
      { name: "Norilsk Nickel", aliases: ["Nornickel"] },
      { name: "Newmont", aliases: ["Newmont Mining"] },
      { name: "Barrick Gold", aliases: ["Barrick"] }
    ]
  },
  {
    id: "biz-largest-defense",
    category: "Brands",
    prompt: "Top 10 largest defense contractors by revenue",
    hint: "Lockheed Martin leads",
    items: [
      { name: "Lockheed Martin", aliases: [] },
      { name: "RTX", aliases: ["Raytheon Technologies", "Raytheon"] },
      { name: "Northrop Grumman", aliases: [] },
      { name: "Boeing", aliases: ["Boeing Defense"] },
      { name: "General Dynamics", aliases: [] },
      { name: "BAE Systems", aliases: [] },
      { name: "NORINCO", aliases: ["China North Industries"] },
      { name: "AVIC", aliases: ["Aviation Industry Corporation of China"] },
      { name: "Leonardo", aliases: [] },
      { name: "Airbus", aliases: ["Airbus Defence and Space"] }
    ]
  },
  {
    id: "biz-largest-retailers",
    category: "Brands",
    prompt: "Top 10 largest retailers worldwide by revenue",
    hint: "Walmart, Amazon and Costco",
    items: [
      { name: "Walmart", aliases: ["Wal-Mart"] },
      { name: "Amazon", aliases: ["Amazon.com"] },
      { name: "Costco", aliases: ["Costco Wholesale"] },
      { name: "Schwarz Group", aliases: ["Lidl", "Kaufland"] },
      { name: "The Home Depot", aliases: ["Home Depot"] },
      { name: "Kroger", aliases: [] },
      { name: "Aldi", aliases: [] },
      { name: "JD.com", aliases: ["Jingdong"] },
      { name: "Target", aliases: ["Target Corporation"] },
      { name: "Carrefour", aliases: [] }
    ]
  },
  {
    id: "biz-largest-pharma",
    category: "Brands",
    prompt: "Top 10 largest pharmaceutical companies by revenue",
    hint: "J&J, Pfizer and Roche",
    items: [
      { name: "Johnson & Johnson", aliases: ["J&J", "Johnson and Johnson"] },
      { name: "Pfizer", aliases: [] },
      { name: "Roche", aliases: [] },
      { name: "Merck", aliases: ["Merck & Co.", "MSD"] },
      { name: "AbbVie", aliases: [] },
      { name: "Novartis", aliases: [] },
      { name: "Bristol Myers Squibb", aliases: ["BMS"] },
      { name: "AstraZeneca", aliases: [] },
      { name: "Sanofi", aliases: [] },
      { name: "GSK", aliases: ["GlaxoSmithKline"] }
    ]
  },
  {
    id: "biz-largest-luxury",
    category: "Brands",
    prompt: "Top 10 largest luxury goods companies",
    hint: "LVMH towers over the field",
    items: [
      { name: "LVMH", aliases: ["Louis Vuitton Moët Hennessy", "LVMH Moet Hennessy"] },
      { name: "Kering", aliases: [] },
      { name: "Hermès", aliases: ["Hermes"] },
      { name: "Richemont", aliases: ["Compagnie Financiere Richemont"] },
      { name: "EssilorLuxottica", aliases: [] },
      { name: "Chanel", aliases: [] },
      { name: "L'Oréal Luxe", aliases: ["L'Oreal Luxe", "Loreal Luxe"] },
      { name: "The Estée Lauder Companies", aliases: ["Estee Lauder"] },
      { name: "Rolex", aliases: [] },
      { name: "Swatch Group", aliases: ["Swatch"] }
    ]
  },
  {
    id: "biz-largest-streaming",
    category: "Tech",
    prompt: "Top 10 largest video streaming services by subscribers",
    hint: "Netflix, Prime Video, Disney+",
    items: [
      { name: "Netflix", aliases: [] },
      { name: "Amazon Prime Video", aliases: ["Prime Video"] },
      { name: "Disney+", aliases: ["Disney Plus"] },
      { name: "Tencent Video", aliases: [] },
      { name: "iQiyi", aliases: [] },
      { name: "Max", aliases: ["HBO Max"] },
      { name: "Youku", aliases: [] },
      { name: "Paramount+", aliases: ["Paramount Plus"] },
      { name: "Hulu", aliases: [] },
      { name: "Apple TV+", aliases: ["Apple TV Plus"] }
    ]
  },
  {
    id: "biz-largest-airports",
    category: "Brands",
    prompt: "Top 10 busiest airports by passenger traffic",
    hint: "Atlanta and Dubai near the top",
    items: [
      { name: "Hartsfield-Jackson Atlanta", aliases: ["Atlanta", "ATL"] },
      { name: "Dubai International", aliases: ["DXB", "Dubai"] },
      { name: "Dallas/Fort Worth", aliases: ["DFW", "Dallas"] },
      { name: "Tokyo Haneda", aliases: ["Haneda", "HND"] },
      { name: "London Heathrow", aliases: ["Heathrow", "LHR"] },
      { name: "Denver International", aliases: ["DEN", "Denver"] },
      { name: "Istanbul Airport", aliases: ["IST", "Istanbul"] },
      { name: "Los Angeles International", aliases: ["LAX"] },
      { name: "Chicago O'Hare", aliases: ["O'Hare", "ORD"] },
      { name: "Shanghai Pudong", aliases: ["PVG", "Pudong"] }
    ]
  },
  {
    id: "biz-most-popular-cars",
    category: "Brands",
    prompt: "Top 10 best-selling car models worldwide",
    hint: "Toyota Corolla and RAV4 lead",
    items: [
      { name: "Toyota RAV4", aliases: ["RAV4"] },
      { name: "Toyota Corolla", aliases: ["Corolla"] },
      { name: "Tesla Model Y", aliases: ["Model Y"] },
      { name: "Honda CR-V", aliases: ["CR-V"] },
      { name: "Ford F-Series", aliases: ["F-150", "Ford F-150"] },
      { name: "Toyota Camry", aliases: ["Camry"] },
      { name: "Toyota Hilux", aliases: ["Hilux"] },
      { name: "Honda Civic", aliases: ["Civic"] },
      { name: "Nissan Sentra", aliases: ["Sentra"] },
      { name: "Chevrolet Silverado", aliases: ["Silverado"] }
    ]
  },
  {
    id: "biz-largest-shipping",
    category: "Brands",
    prompt: "Top 10 largest container shipping companies",
    hint: "MSC and Maersk lead",
    items: [
      { name: "MSC", aliases: ["Mediterranean Shipping Company"] },
      { name: "Maersk", aliases: ["A.P. Moller-Maersk"] },
      { name: "CMA CGM", aliases: [] },
      { name: "COSCO", aliases: ["China COSCO Shipping"] },
      { name: "Hapag-Lloyd", aliases: [] },
      { name: "ONE", aliases: ["Ocean Network Express"] },
      { name: "Evergreen Marine", aliases: ["Evergreen"] },
      { name: "HMM", aliases: ["Hyundai Merchant Marine"] },
      { name: "Yang Ming", aliases: ["Yang Ming Marine Transport"] },
      { name: "ZIM", aliases: ["ZIM Integrated Shipping"] }
    ]
  },
  {
    id: "biz-largest-utilities",
    category: "Brands",
    prompt: "Top 10 largest electric utilities by revenue",
    hint: "State Grid is by far the biggest",
    items: [
      { name: "State Grid", aliases: ["State Grid Corporation of China"] },
      { name: "China Southern Power Grid", aliases: ["CSG"] },
      { name: "Enel", aliases: [] },
      { name: "Engie", aliases: [] },
      { name: "Iberdrola", aliases: [] },
      { name: "EDF", aliases: ["Électricité de France", "Electricite de France"] },
      { name: "E.ON", aliases: ["EON"] },
      { name: "NextEra Energy", aliases: ["NextEra"] },
      { name: "Duke Energy", aliases: ["Duke"] },
      { name: "Southern Company", aliases: [] }
    ]
  },
  {
    id: "biz-largest-semiconductor",
    category: "Tech",
    prompt: "Top 10 largest semiconductor companies by revenue",
    hint: "Nvidia, Samsung and TSMC",
    items: [
      { name: "Nvidia", aliases: ["NVDA"] },
      { name: "Samsung Electronics", aliases: ["Samsung"] },
      { name: "TSMC", aliases: ["Taiwan Semiconductor"] },
      { name: "Intel", aliases: [] },
      { name: "SK Hynix", aliases: ["SK hynix"] },
      { name: "Broadcom", aliases: [] },
      { name: "Qualcomm", aliases: [] },
      { name: "AMD", aliases: ["Advanced Micro Devices"] },
      { name: "Micron", aliases: ["Micron Technology"] },
      { name: "Texas Instruments", aliases: ["TI"] }
    ]
  },
  {
    id: "biz-most-followed-instagram",
    category: "Tech",
    prompt: "Top 10 most-followed accounts on Instagram",
    hint: "Instagram itself, then Ronaldo",
    items: [
      { name: "Instagram", aliases: ["@instagram"] },
      { name: "Cristiano Ronaldo", aliases: ["Cristiano", "CR7"] },
      { name: "Lionel Messi", aliases: ["Leo Messi"] },
      { name: "Selena Gomez", aliases: [] },
      { name: "Kylie Jenner", aliases: [] },
      { name: "Dwayne Johnson", aliases: ["The Rock"] },
      { name: "Ariana Grande", aliases: [] },
      { name: "Kim Kardashian", aliases: [] },
      { name: "Beyoncé", aliases: ["Beyonce"] },
      { name: "Khloé Kardashian", aliases: ["Khloe Kardashian"] }
    ]
  },
  {
    id: "biz-largest-asset-managers",
    category: "Brands",
    prompt: "Top 10 largest asset managers by AUM",
    hint: "BlackRock leads by far",
    items: [
      { name: "BlackRock", aliases: [] },
      { name: "Vanguard", aliases: ["The Vanguard Group"] },
      { name: "Fidelity Investments", aliases: ["Fidelity"] },
      { name: "State Street Global Advisors", aliases: ["State Street"] },
      { name: "JPMorgan Asset Management", aliases: ["JPM Asset Management"] },
      { name: "Goldman Sachs Asset Management", aliases: ["GSAM"] },
      { name: "Capital Group", aliases: [] },
      { name: "Amundi", aliases: [] },
      { name: "BNY Mellon", aliases: ["Bank of New York Mellon"] },
      { name: "PIMCO", aliases: [] }
    ]
  },
  {
    id: "biz-largest-aerospace",
    category: "Brands",
    prompt: "Top 10 largest aerospace companies by revenue",
    hint: "Boeing, Airbus and big defense",
    items: [
      { name: "Boeing", aliases: [] },
      { name: "Airbus", aliases: [] },
      { name: "Lockheed Martin", aliases: [] },
      { name: "RTX", aliases: ["Raytheon Technologies"] },
      { name: "Northrop Grumman", aliases: [] },
      { name: "GE Aerospace", aliases: ["General Electric Aerospace"] },
      { name: "Safran", aliases: [] },
      { name: "L3Harris", aliases: ["L3Harris Technologies"] },
      { name: "Rolls-Royce Holdings", aliases: ["Rolls-Royce"] },
      { name: "Honeywell Aerospace", aliases: ["Honeywell"] }
    ]
  },
  {
    id: "biz-largest-saas",
    category: "Tech",
    prompt: "Top 10 largest SaaS companies by revenue",
    hint: "Microsoft, Oracle and Salesforce",
    items: [
      { name: "Microsoft", aliases: ["MSFT"] },
      { name: "Oracle", aliases: [] },
      { name: "Salesforce", aliases: [] },
      { name: "SAP", aliases: [] },
      { name: "Adobe", aliases: [] },
      { name: "Intuit", aliases: [] },
      { name: "ServiceNow", aliases: [] },
      { name: "Workday", aliases: [] },
      { name: "Shopify", aliases: [] },
      { name: "Atlassian", aliases: [] }
    ]
  },
  {
    id: "biz-largest-chemical",
    category: "Brands",
    prompt: "Top 10 largest chemical companies by revenue",
    hint: "BASF, Sinopec and Dow",
    items: [
      { name: "BASF", aliases: [] },
      { name: "Sinopec", aliases: [] },
      { name: "Dow", aliases: ["Dow Chemical"] },
      { name: "SABIC", aliases: ["Saudi Basic Industries"] },
      { name: "Ineos", aliases: [] },
      { name: "Formosa Plastics", aliases: [] },
      { name: "ExxonMobil Chemical", aliases: ["Exxon Chemical"] },
      { name: "LyondellBasell", aliases: [] },
      { name: "Mitsubishi Chemical", aliases: [] },
      { name: "Air Liquide", aliases: [] }
    ]
  },
  {
    id: "biz-largest-food-companies",
    category: "Food",
    prompt: "Top 10 largest food and beverage companies by revenue",
    hint: "Nestlé and PepsiCo at the top",
    items: [
      { name: "Nestlé", aliases: ["Nestle"] },
      { name: "PepsiCo", aliases: ["Pepsi Co"] },
      { name: "JBS", aliases: ["JBS Foods"] },
      { name: "Anheuser-Busch InBev", aliases: ["AB InBev"] },
      { name: "Tyson Foods", aliases: ["Tyson"] },
      { name: "The Coca-Cola Company", aliases: ["Coca-Cola Company"] },
      { name: "Cargill", aliases: [] },
      { name: "ADM", aliases: ["Archer Daniels Midland"] },
      { name: "Unilever", aliases: [] },
      { name: "Mondelez", aliases: ["Mondelēz International"] }
    ]
  },
  {
    id: "biz-most-valuable-tech-brands",
    category: "Tech",
    prompt: "Top 10 most valuable tech brands worldwide",
    hint: "Same suspects: Apple, MS, Google",
    items: [
      { name: "Apple", aliases: ["Apple Inc."] },
      { name: "Microsoft", aliases: ["MSFT"] },
      { name: "Google", aliases: ["Alphabet"] },
      { name: "Amazon", aliases: ["Amazon.com"] },
      { name: "Samsung", aliases: ["Samsung Electronics"] },
      { name: "Meta", aliases: ["Facebook"] },
      { name: "Tencent", aliases: [] },
      { name: "Oracle", aliases: [] },
      { name: "IBM", aliases: [] },
      { name: "Intel", aliases: [] }
    ]
  },
  {
    id: "biz-most-influential-ceos",
    category: "Brands",
    prompt: "Top 10 most influential CEOs of the 21st century",
    hint: "Jobs, Musk and Bezos",
    items: [
      { name: "Steve Jobs", aliases: [] },
      { name: "Elon Musk", aliases: [] },
      { name: "Jeff Bezos", aliases: [] },
      { name: "Bill Gates", aliases: [] },
      { name: "Mark Zuckerberg", aliases: ["Zuck"] },
      { name: "Sundar Pichai", aliases: [] },
      { name: "Satya Nadella", aliases: [] },
      { name: "Warren Buffett", aliases: [] },
      { name: "Larry Page", aliases: [] },
      { name: "Tim Cook", aliases: [] }
    ]
  }
];
