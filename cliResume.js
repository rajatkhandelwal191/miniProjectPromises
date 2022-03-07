var inquirer = require('inquirer');


const cp  = require('child_process');

function displayList(){
    inquirer
    .prompt([
        /* Pass your questions in here */ //use object for that

        {
            type : 'list',
            name : 'selection',  //selection is parent of choices
            choices : ['About', 'Skills', 'Academics','Projects']  //selection have two choices
        }


    ])
    .then(function(ans) {
        // Use user feedback for... whatever!!

        if(ans.selection == 'list'){
            console.log('list selected')
            displayGoBack();
        }
        else if(ans.selection == 'Skills'){
            console.log('skills is selected')
            displayGoBack();
        }
        else if(ans.selection == 'Academics'){
            // console.log('acaedemics selected')
            cp.execSync('start brave https://drive.google.com/file/d/1L0Qsu1bVwc0A_amYY5fjJwWGCcGA4z7A/view?usp=sharing') //will open that link
            displayGoBack();
        }
        else if(ans.selection == 'Projects'){
            // console.log('Projects selected')

            cp.execSync('start brave https://github.com/rajatkhandelwal191')
            displayGoBack();
        }
    });
}


displayList();  //will display list with Go Back option

//go back optiopn

function displayGoBack(){
    inquirer
    .prompt([
      /* Pass your questions in here */ //use object for that
  
      {
          type : 'list',
          name : 'selection',  //selection is parent of choices
          choices : ['Go Back', 'Exit']  //selection have two choices
      }
  
  
    ])
    .then(function(ans) {
      // Use user feedback for... whatever!!
  
      if(ans.selection == 'Go Back'){
          displayList();
      }
      else if(ans.selection == 'Exit'){
          console.log('Resume Closed')
      }
    })
}
