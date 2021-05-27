import { News, getPosts } from './moduleNews.js';

const songoltUrl = "https://api.jsonbin.io/b/606c33d38be464182c5993bd/latest";

getPosts(songoltUrl,
    (posts) => {
        posts.forEach(
            (post) => 
            {
        document.getElementById("posts").innerHTML += post.Create();
    })
})
    setInterval(() => getPosts("post"), 60000)






