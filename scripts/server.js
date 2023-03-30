let searchInput = '';
if (document.getElementById('search') != null)
    searchInput = document.getElementById("search").value;

function fetchData(searchText) {
    const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + searchText;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data);

}
async function RequestData(args) {
    if (args == undefined && searchInput == "") {
        alert(ErrorMessage);
        return;
    }
    if (args != undefined) {
        searchInput = args;
    }
    if (searchInput) {
        let data = await fetchData(searchInput);
        displayVideos(data);
    }

}

