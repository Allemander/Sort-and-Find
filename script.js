//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
 //find in grid
 let tbNumberToFind = document.getElementById("tbNumberToFind");
 let spans = document.getElementsByTagName('span');

 console.log("spans: ", spans);
 for (let index = 0; index < spans.length; index++) {
    
     if(tbNumberToFind.value == spans[index].innerHTML){
     spans[index].classList.add('spanHighlighted');
     }
 }

}

function findInList() {
   //find In List
     let tbTextToFind = document.getElementById("tbTextToFind");
     let spans = document.getElementsByTagName('span');

     console.log("spans: ", spans);
     for (let index = 0; index < spans.length; index++) {
        
         if(tbTextToFind.value == spans[index].innerHTML){
         spans[index].classList.add('spanHighlighted');
         }
     }

}

function sortIt() {
    //Sort it
    let spans = document.getElementsByTagName('span');
    let sortedArray = [];
    for (let index = 0; index < spans.length; index++) {
        
        sortedArray.push(spans[index].innerHTML);
    }
    sortedArray.sort(); // sort array using javascript sort function 
    for (let index = 0; index < sortedArray.length; index++) {
        
            spans[index].innerHTML = sortedArray[index];
    }
         

}