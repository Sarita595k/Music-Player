const songs = [{
    id: 1,
    name: "kya hua tera vada",
    artist: "mohammed rafi",
    img: "https://a10.gaanacdn.com/gn_img/albums/koMWQ7BKqL/oMWQ7raKqL/size_m.webp",
    genre: "retro",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 2,
    name: "morni banke",
    artist: "guru randhawa",
    img: "https://d3pc1xvrcw35tl.cloudfront.net/sm/images/1260x945/badhai-ho-new-song_20180951392.jpg",
    genre: "party",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 3,
    name: "gun guna rahe hai bhanvare",
    artist: "asha bhosle, mohammed rafi",
    img: "https://c-fa.cdn.smule.com/rs-s77/arr/ce/d9/890e1253-fa5d-4b51-8a24-4217e4443ff1.jpg",
    genre: "retro",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 4,
    name: "what",
    artist: "dj shireen",
    img: "https://www.fluentu.com/blog/wp-content/uploads/site//1/esl-song-activities.jpg",
    genre: "party",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 5,
    name: "koi fariyaad",
    artist: "jagjit singh",
    img: "https://c.saavncdn.com/792/Tum-Bin-Hindi-2001-20221206162237-500x500.jpg",
    genre: "gazals",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 6,
    name: "unforgettable",
    artist: "french montana, swae lee",
    img: "https://c.saavncdn.com/654/Unforgettable-English-2017-20170807151548-500x500.jpg",
    genre: "workout",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 7,
    name: "no stylist",
    artist: "drake",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/French_Montana_%E2%80%93_No_Stylist.png/220px-French_Montana_%E2%80%93_No_Stylist.png",
    genre: "workout",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 8,
    name: "old days",
    artist: "lil durk",
    img: "https://c.saavncdn.com/312/Good-Old-Days-English-2020-20200722130108-500x500.jpg",
    genre: "hip hop",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 9,
    name: "as we speak",
    artist: "drake",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3rz-kDdZbXtdwBsI2vDqngq2fw1QPrpCDg&s",
    genre: "hip hop",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 10,
    name: "eye of the tiger",
    artist: "survivor",
    img: "https://jumptwist.com/cdn/shop/products/eyeofthetiger_1200x1200.png?v=1678811490",
    genre: "motivation",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 11,
    name: "i'm still standing",
    artist: "elton john",
    img: "https://80sheaven.com/wp-content/uploads/2024/05/Im-Still-Standing-7-inch-vinyl-sleeve-front.jpg",
    genre: "motivation",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}]

// latest albums section 

let albumsSection = document.getElementById('albums-section-carousel')
let albumsCardDiv = document.getElementById("albums-card-div")

let albumsCardImage = document.createElement("div")
albumsCardImage.id = "albumsImage"
songs.forEach(song => {
    // console.log(song.name)
    // name of the song
    let card = document.createElement("div")
    card.classList.add("card")
    let albumsTitle = document.createElement("h1")
    albumsTitle.textContent = song.name

    // image of the song
    let albumsImage = document.createElement("img")
    albumsImage.classList.add("albums-image")
    albumsImage.src = song.img

    card.append(albumsImage, albumsTitle)
    albumsCardDiv.append(card)
})
albumsSection.append(albumsCardDiv)
// albums section ends here 