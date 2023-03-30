var displayVideos = (data) => {
    const pageDiv = document.getElementById("pageDiv");
    const videoDiv=document.getElementById('videos');
   if(videoDiv) videoDiv.innerHTML = "";
    data.items.forEach(item => {
        let br = document.createElement("br");


        const videoContainer = document.createElement("div");
        videoContainer.setAttribute("class", "video-container");

        const thumbnails = item.snippet.thumbnails.medium.url;
        const videoElement = document.createElement("img");
        videoElement.setAttribute("src", `${thumbnails}`);
        videoElement.setAttribute("class", "video-element");

      
        const videoDescription = document.createElement("div");


        const title_des = item.snippet.title;
        const anchorTag = document.createElement("a");
        anchorTag.setAttribute("href", `https://www.youtube.com/watch?v=${item.id.videoId}`);
        anchorTag.setAttribute("class", "anchor");
        const title = document.createElement("h3");
        title.setAttribute("class", "title");
        title.innerHTML = title_des;
        anchorTag.append(title);

        const about = item.snippet.description;
        const description = document.createElement("h4");
        description.innerHTML = about;

    
        const authorName = item.snippet.channelTitle;
        const author = document.createElement("h5");
        author.setAttribute("class", "author");
        author.innerHTML = authorName;


        const publishedAt = item.snippet.publishTime;
        const publish = document.createElement("h5");
        publish.innerHTML = publishedAt;

        let curViewcnt = 0;
        const viewsUrl = "https://www.googleapis.com/youtube/v3/videos?key=" + apiKey + "&id=" + item.id.videoId + "&part=snippet,statistics"
        fetch(viewsUrl)
            .then((response) => (response.json()))
            .then((data) => {
                console.log(curViewcnt = data.items[0].statistics.viewCount);
                const views = document.createElement("h5");
                views.innerHTML = "Views " + curViewcnt;
                videoDescription.append(anchorTag);
                videoDescription.append(description);
                videoDescription.append(author);
                videoDescription.append(publish);
                videoDescription.append(views);
                videoContainer.append(videoElement);
                videoContainer.append(videoDescription);
                videoDiv.append(videoContainer);

            })
    })


    applyPagination(data, pageDiv);
}

const  add=(a,b)=>{

    return a+b;
}