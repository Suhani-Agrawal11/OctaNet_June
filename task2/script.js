let tasks = new Set()

function submit(){
    let date = document.getElementById('date').value
    console.log(caltime(date))
    if(!new Date(date.value)){
        alert('Enter a date')
    }
    let div1 = document.createElement('div');
    let div2 = document.createElement('div')
    let div3 = document.createElement('div');
    let div4 = document.createElement('div')
    let div5 = document.createElement('div');
    let div6 = document.createElement('div')
    let div7 = document.createElement('div')
    div1.classList.add('container')
    div2.classList.add('task')
    div3.classList.add('taskname')
    div4.classList.add('edit')
    div5.classList.add('delete')
    div6.classList.add('complete')
    div7.classList.add('reminder')
    div1.appendChild(div2)
    div2.appendChild(div3)
    div2.appendChild(div7)
    div2.appendChild(div4)
    div2.appendChild(div5)
    div2.appendChild(div6)
    let task = document.getElementById('input').value
    if(task==='' || date===''){
        if(task===''){
            alert('Please enter a task')
        }else{
            alert('Please enter the date')
        }
        return
    }
    if(new Date(date) < new Date()){
        alert('Enter valid date')
        return
    }

    if(tasks.has(task)){
        alert('Task already exists')
        return
    }       
    tasks.add(task)
    div4.addEventListener('click',()=>{
        if(div4.innerText === 'Edit'){
            tasks.delete(task)
            div3.contentEditable='true'
            div4.innerText = 'Save'
            div3.focus()
        }else{
            tasks.add(div3.innerText)
            div3.contentEditable='false'
            div4.innerText = 'Edit'
        }
    })
    div5.addEventListener('click',()=>{
        let div8 = document.createElement('div')
        div8.classList.add('DeletedTask')
        document.getElementsByClassName('DeleteContainer')[0].appendChild(div8)
        div8.innerText =  div3.innerText
        document.getElementsByClassName('dialogue')[1].style.display = 'block'
        for(let i=0;i<document.getElementsByClassName('container').length;i++){
            document.getElementsByClassName('container')[i].style.filter = 'blur(5px)'
            document.getElementsByClassName('container')[i].style.pointerEvents = 'none'
        }
        document.getElementsByClassName('close')[1].addEventListener('click',()=>{
            document.getElementsByClassName('dialogue')[1].style.display = 'none'
            if(document.getElementsByClassName('dialogue')[1].style.display = 'none'){
                for(let i=0;i<document.getElementsByClassName('container').length;i++){
                    document.getElementsByClassName('container')[i].style.filter = 'blur(0px)'
                    document.getElementsByClassName('container')[i].style.pointerEvents = 'auto'
                }
            }else{
                for(let i=0;i<document.getElementsByClassName('container').length;i++){
                    document.getElementsByClassName('container')[i].style.filter = 'blur(5px)'
                }
            }
        })
        div1.remove()
        tasks.delete(task)
    })
    div6.addEventListener('click',()=>{
        let div8 = document.createElement('div')
        div8.classList.add('CompletedTask')
        document.getElementsByClassName('CompleteContainer')[0].appendChild(div8)
        div8.innerText =  div3.innerText
        document.getElementsByClassName('dialogue')[0].style.display = 'block'
        for(let i=0;i<document.getElementsByClassName('container').length;i++){
            document.getElementsByClassName('container')[i].style.filter = 'blur(5px)'
            document.getElementsByClassName('container')[i].style.pointerEvents = 'none'
        }
        document.getElementsByClassName('dialogue')[0].style.opacity = '1'
        document.getElementsByClassName('close')[0].addEventListener('click',()=>{
            document.getElementsByClassName('dialogue')[0].style.display = 'none'
            if(document.getElementsByClassName('dialogue')[0].style.display = 'none'){
                for(let i=0;i<document.getElementsByClassName('container').length;i++){
                    document.getElementsByClassName('container')[i].style.filter = 'blur(0px)'
                    document.getElementsByClassName('container')[i].style.pointerEvents = 'auto'
                }
            }else{
                for(let i=0;i<document.getElementsByClassName('container').length;i++){
                    document.getElementsByClassName('container')[i].style.filter = 'blur(5px)'
                }
            }
        })
        div1.remove()
        tasks.delete(task)
    })
    div3.innerText = task
    div4.innerText = 'Edit'
    div5.innerText = 'Delete'
    div6.innerText = 'Complete'
    
    if(caltime(date)<=24){
        div7.innerText = caltime(date)
        setInterval(()=>{ 
            div7.innerText = caltime(date) 
        }, 1000)
    }else{ 
        div7.innerText = caltime(date)
        setInterval(()=>{ 
            div7.innerText = caltime(date) 
        }, 1000)
    }
    document.body.appendChild(div1)
    document.getElementById('input').value = ''
    document.getElementById('date').value = ''
}

function displayCompleted(){
    document.getElementsByClassName('complete-list')[0].style.animation = 'slide-in 1s linear 1 normal forwards'
}

function backCompleted(){
    document.getElementsByClassName('complete-list')[0].style.animation = 'slide-out 1s linear 1 normal forwards'
}

function displayDeleted(){
    document.getElementsByClassName('delete-list')[0].style.animation = 'slide-in 1s linear 1 normal forwards'
}

function backDeleted(){
    document.getElementsByClassName('delete-list')[0].style.animation = 'slide-out 1s linear 1 normal forwards'
}

function caltime(val){
    let dif =(((new Date(val).getTime() - new Date().getTime())/3600000)-5.5)
    if(dif<=24){
        let m = (dif-Math.floor(dif))*60
        let s = (m-Math.floor(m))*60
        return Math.floor(dif)+'hr '+Math.floor(m)+'m '+Math.floor(s)+'s'
    }else{
        let d = Math.floor(dif/24)
        let h = dif-(d*24)
        let m = (h-Math.floor(h))*60
        let s = (m-Math.floor(m))*60
        return (d+'d '+Math.floor(h)+'hr '+Math.floor(m)+'m '+Math.floor(s*60)+'s')
    }
}
