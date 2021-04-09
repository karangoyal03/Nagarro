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
  function showAll() {
        if (tasklist.length == 0) {
          alert("No todos left");
        }
    refreshList();
  }
  function refreshList() {
    list.innerHTML = "";
    for (let task in tasklist) {
      const li = document.createElement("li");
      const spane = document.createElement("span");
      spane.innerHTML = tasklist[task];

      const up = document.createElement("button");
      up.className = "btn btn-outline-dark mx-4 col-1";
      up.innerHTML = "⬆";
      const down = document.createElement("button");
      down.className = "btn btn-outline-success mx-4 col-1";
      down.innerHTML = "⬇";
      const del = document.createElement("button");
      del.className = "btn btn-outline-danger mx-4 col-1";
      del.innerHTML = "❌";

      const edit=document.createElement("button");
      edit.className='btn btn-outline-warning mx-4 col-1'
      edit.innerHTML="✏";


      up.onclick=function(){
          //console.log(task+"inside up btn")
          let t=tasklist.splice(task,1);
        //   console.log(task);
        //   console.log(tasklist);
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
      edit.onclick=function(){
          let inp=prompt("Enter the suitable todo inplace of current todo");
          if(inp==null||inp==""){
              alert("invalid todo");
          }
           //task.innerHTML = inp;
           tasklist.splice(task,1,inp);
           refreshList()

      }
      

      li.appendChild(spane);
      li.appendChild(up);
      li.appendChild(down);
      li.appendChild(del);
      li.appendChild(edit);
      // list.appendChild(li);
      document.getElementById('list').appendChild(li);
    }
  }

//    task.addEventListener("keyup", function (event) {
//      if (event.keyCode == 13) {
//        addnewtask();
//      }
//    });



  addbtn.onclick = add;
  showAllBtn.onclick = showAll;
  deletAllBtn.onclick = deleteAll;
};
