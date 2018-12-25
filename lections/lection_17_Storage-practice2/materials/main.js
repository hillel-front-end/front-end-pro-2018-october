console.log('Lection_17');



// localStorage повторение
// console.log(window.localStorage);

// localStorage.x = 200;
// localStorage.removeItem('y');


// sessionStorage



// практика
//

var config = {
    isSearchHistoryNeeded: true,
    searchKey: 'search-results_id_48'
};

window.onload = function(){
    var search = document.querySelector('.search');
    var search_history = document.querySelector('#search_history');

    search.addEventListener('keypress', function(event){
        // this => search
        if (event.keyCode != 13) return;
        if (event.target.value.length < 3) return;
        
        // console.log(this, event.target);

        saveSearchResult(event.target.value);
        event.target.value = '';

        // config.isSearchHistoryNeeded && printSearchHistory();
        if (config.isSearchHistoryNeeded) {
            printSearchHistory();
        }
    })
}

function printSearchHistory(){
    var history = getSetValue(config.searchKey);

    if (search_history.innerHTML) {
        search_history.innerHTML = '';
    }

    for(var i = history.length - 1; i >= 0; i--){
        search_history.innerHTML += history[i] + "<br />";
    }
}

// localStorage[config.searchKey]
function saveSearchResult(query){
    if (!localStorage[config.searchKey]){
        getSetValue(config.searchKey, [])
    }

    getSetValue(config.searchKey, getSetValue(config.searchKey).concat(query));
    // var currValue = getSetValue(config.searchKey);
    // currValue.push(query);
    // getSetValue(config.searchKey, currValue);
}

function getSetValue(key, value){
    if (!value) {
        return JSON.parse(localStorage[key]);
    }

    localStorage[key] = JSON.stringify(value);
}
