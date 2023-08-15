const todoForm = document.querySelector(".todo-form");
const formInput = document.querySelector(".form-input");
const list = document.querySelector(".list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newText = formInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span>${newText}</span>
        <div class="btn">
            <button class="done">Done</button>
            <button class="remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml;
    list.append(newLi);
    formInput.value = "";
});

list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }

});
