const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal");
const textArea = document.querySelector(".text-area");
const mainCont = document.querySelector(".main_cont");
const priorityColors = document.querySelectorAll(".modal_color_pick");

let addBtnFlag = false;
let modalPriorityColor = "lightpink";

//event to show or hide the modal
addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;
  if (addBtnFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

//event to modal
modalCont.addEventListener("keydown", function (e) {
  if (e.key === "Shift") {
    console.log(textArea.value);
    const id = (Math.random() * 10000).toFixed(0);
    createTicket(textArea.value, id);
  }
});

//generate a ticket
function createTicket(task, id) {
  const ticket_cont = document.createElement("div");
  ticket_cont.setAttribute("class", "ticket_cont");
  ticket_cont.innerHTML = ` <div class="${modalPriorityColor} ticket_color"></div>
        <div class="ticket_id">${id}</div>
        <div class="ticket_area">${task}</div>
        <div class="ticket_lock">
          <i class="fa-solid fa-lock"></i>
        </div>`;
  mainCont.appendChild(ticket_cont);
  modalCont.style.display = "none";
  addBtnFlag = false;
}

priorityColors.forEach(function (priorityColor) {
  priorityColor.addEventListener("click", function () {
    priorityColors.forEach(function (pcolor) {
      pcolor.classList.remove("active");
    });

    priorityColor.classList.add("active");
    modalPriorityColor = priorityColor.classList[0];
  });
});
