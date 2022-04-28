import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const p = document.createElement("p");
  p.className = "li";
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const p = document.createElement("p");
    p.innerText = text;
    p.className = "li";
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};
// document.querySelector("#add-button").addEventListener("click", ()=> onClickAdd());
