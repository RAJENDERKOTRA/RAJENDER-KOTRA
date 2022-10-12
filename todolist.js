


let inpEle = document.getElementById('input')
let task = document.getElementById('tasklist')
let btn = document.getElementById('btn');
btn.onclick = function () {
    if (inpEle.value.length == 0) {
        alert('enter a task here');
    } else {
        task.innerHTML = task.innerHTML + `
        <div class="task">
            <span id='work'>${inpEle.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>

        </div>`
        let allTask = document.querySelectorAll('.del')
        for (i = 0; i < allTask.length; i++) {
            allTask[i].onclick = function () {
                console.log(this)
                this.parentNode.remove()
            }
        }
        inpEle.value = ''
    }
}

