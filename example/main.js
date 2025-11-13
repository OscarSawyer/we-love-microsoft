//  List of words
// Write a program that asks the user for a word until
// the user types "stop". The program then shows each of these words,
//  except "stop".
const readline = require('readline');
const userScreen = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
  //create an empty array where the words will be stored
  const words=[];
  //create a function with the word selection logic
  function getWord(){
    //ask for the words from the user
    userScreen.question("Enter a choice of your words: ",(answer)=>{
        //use provide a condition for word selection
        if(answer==='stop'){
            //display the words entered except 'stop'
            console.log("The words entered except 'stop': ")
            // for(let i=0;i<words.length;i++){
            //     console.log(words[i])
            // }
            console.log(words.join(', '))
            userScreen.close()
        }else{
            words.push(answer)
            getWord()

        }

    })
  }
getWord()
 