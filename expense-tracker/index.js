const des = document.getElementById("description1");
const date = document.getElementById("date1");
const am = document.getElementById("amount1");
const add = document.getElementById("add");
const expenses = document.getElementById("expences");

add.addEventListener("click", () => {
  if (des.value == "" || date.value == "" || am.value == "") {
    alert("input value");
  } else {
    addExpense();
  }
});

function addExpense() {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.setAttribute("colspan", 1);
  const td2 = document.createElement("td");
  td2.setAttribute("colspan", 2);
  const td3 = document.createElement("td");
  td3.setAttribute("colspan", 3);
  td1.innerText = des.value;
  td2.innerText = date.value;
  td3.innerText = am.value + "$";
  tr.append(td1, td2, td3);
  expenses.append(tr);
  des.value = "";
  date.value = "";
  am.value = "";
}