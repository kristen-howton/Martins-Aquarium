/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const locationCollection = [
    {
        name: "Paris",
        location: "France",
        image: "https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=612x612"
    },

    {
        name: "Tokyo",
        location: "Japan",
        image: "https://img.theculturetrip.com/768x432/wp-content/uploads/2015/12/Shinjuku_Gyoen_National_Garden_-_sakura_3.jpg"

    },

    {
        name: "Venice",
        location: "Venice, Italy",
        image: "https://www.tripsavvy.com/thmb/faSqFmMmFvsyB-_769iWUQI-_5g=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gondolier-heads-into-the-sunset-along-venice-s-grand-canal--sunset--1062428612-261501b5a5f44ffc95f012f908750ad4.jpg"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}
