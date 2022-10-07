export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            species: "Ornate Butterflyfish",
            food: "coral",
            length: 5,
            location: "Okinawa",
            image: "https://reefbuilders.com/wp-content/blogs.dir/1/files/2017/08/Ornate-2-1-770x527.jpg"
        },
        {
            name: "Fancy Boi",
            species: "Fancy Guppy",
            food: "algae",
            length: 1,
            location: "Amazon River",
            image: "https://www.thesprucepets.com/thmb/BNXs-IK1el5vhZcVAdFRtaCsXdQ=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/guppy-fish-species-profile-5078901-hero-9095fa292246421b820d32d4731c991b.jpg"
        },
        {
            name: "Poppy",
            species: "Red Discus",
            food: "Spirulina",
            length: 4,
            location: "Amazon River",
            image: "https://azgardens.com/wp-content/uploads/2017/05/Alenquer-Red-Discus-Fish-20-Pack.jpg"
        },
        {
            name: "Kenneth",
            species: "Kenyi Cichlid",
            food: "plankton",
            length: 1,
            location: "Lake Malawi",
            image: "https://www.liveaquaria.com/images/categories/large/lg_97233_Kenyi_Cichlid.jpg"
        },
        {
            name: "Legna",
            species: "Freshwater Angelfish",
            food: "worms",
            length: 2,
            location: "Peru",
            image: "https://azgardens.com/wp-content/uploads/2017/05/Pterophyllum-Albino-Altum-Angelfish-Tank-Raised.jpg"
        },
    ]
}