const api = "https://rawg-video-games-database.p.rapidapi.com"

const headers = {
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "ee5f129151msh9a2e3747969076cp17b077jsn8260f27a0d30"
}

export const search = (query) =>
    fetch(`${api}/games/${query}`, { headers })
        .then(response => response.json())



export const getAll = () =>
    fetch(`${api}/games`, { headers })
        .then(response => response.json())

export const getPage = (page) =>
    fetch(`${api}/games?page=${page}`, { headers })
        .then(response => response.json())





