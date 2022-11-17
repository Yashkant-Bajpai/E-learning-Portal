console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.links);
console.log(document,all);
let header=document.getElemenyById('header-title');//target that element by that id
header.style.backgroundColor='red';

var button=document.querySelector('#btn');
var form=document.getElementById('addForm');

button.addEventListener('click', runEvent);
<button class="btn btn-dark" iid="btn">Submit</button>

function runEvent(e)
{
    console.log("event-type:"+e.type)
}