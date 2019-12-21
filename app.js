'use strict';
function Person(data){
this.name = data.name;
};

Person.prototype.render=function(){
$('ul').append(`
<li>${this.name}</li>`);
};

$.get('./a.json')
.then(data =>{
    data.forEach(element => {
        let person = new Person(element);
        person.render();
    });
});