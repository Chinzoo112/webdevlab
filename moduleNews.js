export  let News = {

    News: function (_title, _body) {this.title = _title; this.body = _body;  return this;},
}

 export function getNews(url, callMeBack) {

    fetch(url)
    .then(response => response.json())
    .then(data => {
        callMeBack(data.news);
 })
}
export function getPosts(url, callMeBack) {
    fetch(url)
    .then(response => response.json())
        .then(data => {
            let posts = [];
            data.songolt.forEach((post) => { posts.push(new Post(post.img, post.title, post.body))})
        callMeBack(posts);
        })
        }
        setInterval(() => getPosts("posts"), 60000)
    
    export class Post { 

        constructor(_img, _title, _body) {
            this.img = _img;
            this.title = _title;
            this.body = _body;
     }

    Create(){
        return  `<div id="recent-wrapper">
                <div id="recent" class="container">
                    <div class="major">
                        <h2><a href="medee.html" class="button">Recent News</a></h2>
                    </div>
                    <div class="column1">
                        <span class="icon"><img src="${this.img}" alt="" width="200" height="200"/></span>
                        <div class="title">
                            <h2>${this.title}</h2>
                            <span class="byline">${this.body}</span>
                            <p><a href="medee.html" class="button">More Details</a></p>
                            
                        </div>
                    </div>
                    <div class="column2">
                        <span class="icon"><img src="${this.img}" alt="#" width="200" height="200"/></span>
                        <div class="title">
                            <h2>${this.title}</h2>
                            <span class="byline">${this.body}</span>
                            <p><a href="medee.html" class="button">More Details</a></p>
                           
                        </div>
                    </div>
                    <div class="column3">
                        <span class="icon"><img src="${this.img}" alt="" width="200" height="200"/></span>
                        <div class="title">
                            <h2>${this.title}</h2>
                            <span class="byline" href="medee.html">${this.body}</span>
                            <p><a href="medee.html" class="button">More Details</a></p>
                           
                        </div>
                    </div>
                    <div class="column4">
                        <span class="icon"><img src="${this.img}" alt="" width="200" height="200"/></span>
                        <div class="title">
                            <h2>${this.title}</h2>
                            <span class="byline">${this.body}</span>
                            <p><a href="medee.html" class="button">More Details</a></p>
                            
                        </div>
                    </div>
                </div>
            </div>`
    }}
