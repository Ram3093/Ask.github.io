let clickAddQstion=document.querySelector('.add-question .btn');
let addSectionForm=document.querySelector('#add-section');
clickAddQstion.addEventListener('click',(e1)=>{
    addSectionForm.style.display='block';
});

class User{
     a=5;
    constructor(addbtn1,e2,addSe){
        this.values=addbtn1.querySelectorAll('input[type="text"]');
        this.question=this.values[0].value;
        this.answer=this.values[1].value;
        

        this.div=document.createElement('div');
        this.h3=document.createElement('h3');
        this.p=document.createElement('p');
        this.edit=document.createElement('button');
        this.submit=document.createElement('button'); 

        this.edit.setAttribute('type','button');
        this.submit.setAttribute('type','button');

        this.h3.textContent='Question =>  '+this.question;
        this.p.textContent='Answer => '+this.answer;
        this.edit.textContent='Edit';
        this.submit.textContent='Delete';

        this.edit.classList.add('btn1');
        this.submit.classList.add('btn1');
        this.div.classList.add('dynamic-div');






        this.div.append(this.h3);
        this.div.append(this.p);
        this.div.append(this.edit);
        this.div.append(this.submit);

        this.questions=document.querySelector('.questions');
        addSe.style.display='none';
        this.questions.append(this.div);
        // questions.replaceWith('hey');
        addbtn1.reset();
        
    } 
    
    editFunc(){
        this.changeValue=prompt('enter your answer');
        if(this.answer==''){this.p.textContent+=this.changeValue;}
        else{this.p.textContent='Answer => '+this.changeValue;}
    }
    
    delFunc(){
        this.questions.removeChild(this.div);
    }
    
}




let arrayUser=[];


let addButton=document.forms['add-section'];
    console.log(addButton);
    addButton.addEventListener('submit',(e2)=>{
        e2.preventDefault();
        let user1=new User(addButton,e2,addSectionForm);
        let showQuestionTag=document.querySelector('.show-only-when');
        showQuestionTag.style.display='block';
        arrayUser.push(user1);
        console.log(user1.edit);

        user1.edit.addEventListener('click',(eve)=>{
            user1.editFunc();
        })
        
        user1.submit.addEventListener('click',(eve)=>{
            user1.delFunc();
        })


    });


