let e;

e = document.getElementsByClassName('collection-item');
let vetor =  Array.from(e);

vetor.forEach(function(val){
    val.style.color = 'green';

    console.log(val.innerText);
});

e = document.querySelectorAll('li');

e.forEach(function(val){
    console.log(val.innerText);
});

e = document.querySelectorAll('li:nth-child(add)');

onslotchange.log(e[2]);

e.forEach(function(val){
    val.style.background = '#dedede';
});

e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa(val){
    console.log(val);
}
