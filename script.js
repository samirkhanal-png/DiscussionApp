let discussionPortal = document.querySelector("#discussionPortal");
const discussionTexts = document.querySelector("#discussionTexts");
const inputDiscussion = document.querySelector("#inputDiscussion");
const wrapper = document.querySelector("#wrapper");
const subject = document.querySelector("#subject");
const Questions = document.querySelector("#Questions");
const sendButton = document.querySelector("#sendButton");
const newForm = document.querySelector("#newForm");
const searchDiscussion = document.querySelector("#searchDiscussion");
const displayTexts = document.querySelector("#displayTexts");

let formData={}
let discussionTextsArray=[]

function getFromLocalStorage(){
  let data =JSON.parse(localStorage.getItem("discussionTexts"));
  return data;
}

function saveToLocalStorage(formDataArray){
  localStorage.setItem("discussionTexts", JSON.stringify(formDataArray));
}


function initializeHistory(){
  discussionTextsArray = getFromLocalStorage();
  discussionTextsArray.forEach((obj) => {
    createUI(obj);
  })
}

//For reloading the history
window.addEventListener("load",initializeHistory)

function createObj(){
  formData.id=Date.now();
  formData.subject = subject.value;
  formData.questions= Questions.value;
  return formData;
}


function createUI(obj){
  let div = document.createElement("div");
  div.classList.add("userInquiry");
  div.innerHTML = `<h2>${obj.subject}</h2>
  <p>${obj.questions}</p>`;
  displayTexts.appendChild(div);
}

sendButton.addEventListener("click", () => {
  let obj = createObj();
  createUI(obj);
  discussionTextsArray.push(obj);
  saveToLocalStorage(discussionTextsArray);
 
  //For clearing the text fields
  subject.value = "";
  Questions.value = "";

})