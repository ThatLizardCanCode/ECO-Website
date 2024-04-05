let newsArticles = [
    {
    "img" : "../img/prototype ECO/sealandscape.png",
    "title": "New Marine Protected Area Declared to Safeguard Biodiversity",
    "content": "In a landmark decision, government officials have declared a vast expanse of marine habitat as a protected area, aiming to conserve and restore biodiversity. The newly designated Marine Protected Area (MPA) spans hundreds of square kilometres.",
    "time": "2 Hours ago",
    "author": "Gunther Steiner",
    "readTime": "4min Read",
    "likes": "15",
    "shares": "6",
        },

    {
        "img" : "../img/prototype ECO/kea.png",
        "title": "Kea Conservation Efforts Gain Momentum Amidst Rising Threats",
        "content": "Recent initiatives have focused on habitat restoration in key alpine regions, where kea populations have been dwindling due to habitat degradation and introduced predators.",
        "time": "4 Hours ago",
        "author": "Toto wolf",
        "readTime": "2min Read",
        "likes": "12",
        "shares": "8",
        },

    {
    "img" : "../img/prototype ECO/beardeddragon.png",
    "title": "Invasive Exotic Reptiles Threaten New Zealand's Native Ecosystems",
    "content": "While the nation has long been isolated from many invasive species due to its geographical isolation, the increasing global trade in exotic pets has led to the inadvertent introduction of non-native reptiles.",
    "time": "5 Hours ago",
    "author": "Christian Horner",
    "readTime": "5min Read",
    "likes": "20",
    "shares": "15",
        },

    {
        "img" : "../img/prototype ECO/forest.png",
        "title": "Community-Led Reforestation Initiative Restores Degraded Landscapes",
        "content": "A grassroots reforestation initiative led by local communities is making significant strides in restoring degraded landscapes and promoting biodiversity. Through tree planting campaigns, habitat restoration projects, and sustainable land management practices.",
        "time": "12 Hours ago",
        "author": "Marko",
        "readTime": "6min Read",
        "likes": "22",
        "shares": "13",
        },
]

createNewsCards = () => {
// Select the parent container
var newsCardContainer = document.querySelector('.news-card-container');

// Clone the existing box
var existingBox = document.querySelector('.template').cloneNode(true);

// Number of copies to make
var numberOfCopies = 4;

// Loop to create and append copies
for (var i = 0; i < numberOfCopies; i++) {
    // Clone the existing box
    var newBox = existingBox.cloneNode(true);

    // Update class names
    newBox.classList.remove('template');
    newBox.classList.add('box-' + (i + 1)); // Start from box-2 for the second box
    
    // Update content dynamically
    var article = newsArticles[i];
    newBox.querySelector('img').src = article.img;
    newBox.querySelector('.title').innerText = article.title;
    newBox.querySelector('.content').innerText = article.content;
    newBox.querySelector('.time').innerText = article.time;
    newBox.querySelector('.author').innerText = 'By ' + article.author;
    newBox.querySelector('.readTime').innerText = article.readTime;
    newBox.querySelector('.likes').innerText = article.likes;
    newBox.querySelector('.share').innerText = article.shares;

    // Append the cloned box to the parent container
    newsCardContainer.appendChild(newBox);
}

}

createNewsCards()
