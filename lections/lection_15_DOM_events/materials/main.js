window.onload = function() {
    block = document.querySelector('.block')


    // block.innerText = '<br />';
    // console.log(block.innerText)

    // var attrValue = block.getAttribute('data-foo');
    // block.setAttribute('some', 'hello');
    // block.removeAttribute('some');


    // ------------------------------

    // console.log(block.dataset)
    // block.dataset.action = "hello";
    // delete block.dataset.foo;

    // ------------------------------

    // creating 

    var div = document.createElement('div');

    div.innerHTML = 'Inner div'
    div.classList.add('item', 'hidden');

    // insert, append

    document.body.appendChild(div);
    // document.body.appendChild(document.querySelector('#special'));

    // console.dir(div);


    list = [
        { title: 'title 1' },
        { title: 'title 2' },
        { title: 'title 3' },
        { title: 'title 4' },
        { title: 'title 5' },
        { title: 'title 6' },
        { title: 'title 7' }
    ]

    var ul = document.createElement('ul');
    ul.classList.add('list');
    
    var li;

    for(var i = 0; i < list.length; i++){
        li = document.createElement('li');
        li.innerHTML = list[i].title;
        li.dataset.position = i;

        li.addEventListener('click', function(event){
            event.target.remove();
            delete list[event.target.dataset.position];
        });

        ul.appendChild(li);
    }

    document.body.appendChild(ul);

   
}