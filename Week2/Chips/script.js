const inputText = document.querySelector(".chip-input");
console.log(inputText);
const chipsContainer = document.querySelector(".chips");
const deleteButton = document.querySelector(".delete-btn");

inputText.addEventListener('keydown',(e)=>{
    if(e.code=== "Enter" && inputText.value !=null){
        const chip = document.createElement("div");
        const deleteBtn = document.createElement("button");

        chip.className = "chip";
        deleteBtn.className = "delete-btn";

        deleteBtn.append("X");

        chip.append(inputText.value,deleteBtn);

        chipsContainer.append(chip);

        deleteBtn.addEventListener("click",(e)=>{
            const parentEle = e.target.parentNode;
            parentEle.remove();
        })
        e.target.value = '';
    }
})

deleteButton.addEventListener("click",(e)=>{
    const parentEle = e.target.parentNode;
    parentEle.remove();
});