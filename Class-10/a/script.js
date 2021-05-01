let tasklist = [];
window.onload = function () {
  const task = document.getElementById("task");
  const addbtn = document.getElementById("add");
  const showAllBtn = document.getElementById("showAll");
  const deletAllBtn = document.getElementById("deleteAll");
  const list = document.getElementById("list");

  function add() {
    tasklist.push(task.value);
    console.log(task.value);
    refreshList();
    task.value = "";
  }
  function deleteAll() {
      if (tasklist.length == 0) {
        alert("No todos left");
      }
    tasklist = [];
    console.log("list is empty");
    refreshList();
  }
  function refreshList() {
    list.innerHTML = "";
    for (let task in tasklist) {
      const li = document.createElement("li");
      const spane = document.createElement("span");
      spane.innerHTML = tasklist[task];

      const up = document.createElement("button");
      up.className = "btn btn-dark mx-2 col-1";
      up.innerHTML = "UP";
      const down = document.createElement("button");
      down.className = "btn btn-success mx-2 col-1";
      down.innerHTML = "DOWN";
      const del = document.createElement("button");
      del.className = "btn btn-danger mx-2 col-1";
      del.innerHTML = "DEL";


      up.onclick=function(){
          
          let t=tasklist.splice(task,1);
          tasklist.splice(task-1,0,t[0]);
          refreshList()
      }
      down.onclick=function(){
          let t=tasklist.splice(task,1);
          tasklist.splice(task+1,0,t[0])
          refreshList()
      }
      del.onclick=function(){
          tasklist.splice(task,1);
          refreshList()
      }
      

      li.appendChild(spane);
      li.appendChild(up);
      li.appendChild(down);
      li.appendChild(del);
      // list.appendChild(li);
      document.getElementById('list').appendChild(li);
    }
  }


  addbtn.onclick = add;
  deletAllBtn.onclick = deleteAll;
};
