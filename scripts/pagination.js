var createButton =(value)=> {
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.innerHTML = value;
    return btn;
}
const middleBtn = createButton(1);
middleBtn.setAttribute("id", "pageNumber");

var applyPagination = (data, pageDiv) => {
   if(pageDiv) pageDiv.innerHTML = "";
    const prevPage = createButton("<--prev");
    pageDiv.append(prevPage);
    if(prevPage)
    prevPage.addEventListener('click', () => changePage(data.prevPageToken, "prev"));
    pageDiv.append(middleBtn);
    const nextpage = createButton('next -->');
    pageDiv.append(nextpage);
    if(nextpage)
    nextpage.addEventListener("click", () => changePage(data.nextPageToken, "next"));
}


const changePage = (token, direction, curPage) => {
    const middle = document.getElementById("pageNumber");
    let curPageNo = Number(middle.innerHTML);
    if (direction == "prev" && curPageNo == 1) {
        alert("You are in first page");
        return;
    }
    if (direction == "prev") {
        curPageNo -= 1;
    }
    else {
        curPageNo += 1;
    }

    middle.innerHTML = curPageNo;
    const videoDiv = document.getElementById("videos");
    const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + searchInput + "&pageToken=" + token;
    fetch(url)
        .then((response) => response.json())
        .then((data) => { displayVideos(data, videoDiv) });

}

