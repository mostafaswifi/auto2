let comments = document.querySelectorAll('.comment');

comments.forEach(comment =>{
    
    comment.addEventListener("click",()=>{
        comments.forEach(comment=>{
            comment.children[1].classList.remove("showMe")
        })
        comment.children[1].classList.add("showMe")
    });

})


