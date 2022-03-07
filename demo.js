var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */ //use object for that

    {
        type : 'list',
        name : 'selection',  //selection is parent of choices
        choices : ['choice 1', 'choice 2']  //selection have two choices
    }


  ])
  .then(function(ans) {
    // Use user feedback for... whatever!!

    if(ans.selection == 'choice 1'){
        console.log('choice 1 selected')
    }
    else{
        console.log('choice 2 is selected')
    }
  })