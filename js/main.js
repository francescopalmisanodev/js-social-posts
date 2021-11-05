const postContainer=document.getElementById("container");
const mainPost=[
    {
        icon: "https://picsum.photos/300",
        nickname: "Phil Mangione",
        postdate:"4 mesi fa",
        description: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image:"https://picsum.photos/600/300",
        likes:80
    },
    {
        icon: "https://picsum.photos/300",
        nickname: "Giovanni Muciaccia",
        postdate:"1 mesi fa",
        description: "Questo è un art attack",
        image:"https://picsum.photos/600/300",
        likes:30000
    },
    {
        icon: "https://picsum.photos/300",
        nickname: "Simone Rossi",
        postdate:"10 mesi fa",
        description: "Vivi per essere l'ammirazione del tuo tempo cit. W.Shakespeare",
        image:"https://picsum.photos/600/300",
        likes:120
    },
    {
        icon: "https://picsum.photos/300",
        nickname: "Paolo Duzioni",
        postdate:"1 anno fa",
        description: "La parte più difficile nella vita di un programmatore è quando si da la caccia ad un bug per una settimana, si trova il codice che genera il bug, si offende l'autore del codice ed infine ci si accorge di essere l'autore del codice maledetto cit. Alepane",
        image:"https://picsum.photos/id/1/600/300",
        likes:3400
    }
];
for (let i = 0; i < mainPost.length; i++) {
    postContainer.innerHTML += 
    (
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${mainPost[i].icon} alt="${mainPost[i].nickname}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${mainPost[i].nickname}</div>
                    <div class="post-meta__time">${mainPost[i].postdate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${mainPost[i].description}</div>
        <div class="post__image">
            <img src=${mainPost[i].image} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${mainPost[i].likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`);
    
}