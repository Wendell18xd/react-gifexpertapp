export const getGifs = async (categories) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=10&api_key=B81wK8tMfzPVLsskB04kxB7p4J42HkTj`
    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}