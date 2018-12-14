var list = {
    items: [
        {
            title: 'Exit',
            handler: 'ExitAction'
        },
        {
            title: 'Open',
            handler: 'OpenAction'
        },
        {
            
        }
    ]
};

var margin = 5;

function ExitAction(){
    return console.log('exit');
}
function OpenAction(){
    return console.log('open');
}

function actionHandler(ev){
    if(!ev.target.dataset.action) return;
    actions[ev.target.dataset.action]();
}

var actions = {
    ExitAction: ExitAction,
    OpenAction: OpenAction
}

function renderMenu(source){
    var container = document.querySelector('.container');
    container.classList.add('hidden');
    if (!container || !source || !source.items) return console.error('wrong');

    var ul = document.createElement('ul');
    var li;
    for(var i = 0; i < source.items.length; i++){
        // if (!source.items[i].title)  continue;
        // li = '<li>' + source.items[i].title + '</li>';
        li = document.createElement('li');
        if (!source.items[i].title)  continue;

        li.innerHTML = source.items[i].title;
        if(source.items[i].handler) {
            li.dataset.action = source.items[i].handler;
        }
        li.addEventListener('click', actionHandler);
        ul.appendChild(li);
        // ul.innerHTML += li;
        
        // ul.querySelector('li:last-child').addEventListener('click', actions[source.items[i].handler]);
    }
    container.appendChild(ul);
}





window.onload = function(){
    renderMenu(list);

    document.addEventListener('contextmenu', function(ev){
        ev.preventDefault();
        var menuContainer = document.querySelector('.container');

        if (!menuContainer.querySelector('ul')) {
            renderMenu(list);
        }

        menuContainer.style.left = ev.clientX + margin + 'px';
        menuContainer.style.top = ev.clientY + margin + 'px';
        menuContainer.classList.remove('hidden');
    })

    document.addEventListener('click', function(){
        var menuContainer = document.querySelector('.container');
        menuContainer.classList.add('hidden');
    })
}


