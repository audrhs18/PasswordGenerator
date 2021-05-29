// Assignment Code
var generateBtn = document.querySelector("#generate");
var charPoolArray = [];


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
  const length = getUserPasswordofLength();
  const finalPasswordCharPoolArray = getPasswordCharPoolArray();
  return assemblePassword(finalPasswordCharPoolArray, length);

};

function getUserPasswordofLength(){
  let passLength = 0;
  passLength = prompt('How long do you want to have for your password');
  while( passLength < 8 || passLength > 125 ){
    passLength = prompt('please input valid length of Password(8 ~ 125 char')

  }
  return passLength;
}

function getPasswordCharPoolArray(){
  var allcharacter = [];
  const charTypes = ["LowerCase", "upperCase", "number","specialChar"];
  const charTypesArray = {
    lowerCase: ["a","b","c","d","e"],
    upperCase: ['A','B','C','D','E'],
    number: ['1','2','3','4','5'],
    specialChar: ['~','!','@','#']
     };

    for(var i=0; i < charTypes.length; i++){

      var iteration = false; 
  
      while(!iteration){
       const charTypesResponse = prompt("Do you want to use " + charTypes[i] + ", Y/N")
  
         if(charTypesResponse === "Y"){
            typeReturn = charTypes[i];
            iteration = true;
            }
         else if(charTypesResponse ==="N"){
            typeReturn = undefined;
            iteration = true;
            }
        else{
          iteration = false;
        }
        charPoolArray.push(typeReturn);
      };
      
   
    };

    var passCollector = [];
    var input_value = []
    if(charPoolArray[0] === 'LowerCase')
    {input_value = charTypesArray.lowerCase;
    passCollector.push(...input_value)};

    
    if(charPoolArray[1] === "upperCase")
    {input_value = charTypesArray.upperCase;
        passCollector.push(...input_value)};
      
    if(charPoolArray[2] === "number")
    {input_value = charTypesArray.number;
    passCollector.push(...input_value)};
  
    if(charPoolArray[3] === "specialChar")
    {input_value = charTypesArray.specialChar;
    passCollector.push(...input_value)};

       return passCollector;
  };
  

function assemblePassword(allcharacter, getlength){
var resultpassword = null;
  for(var i=0; i < getlength; i++){
  var random = Math.floor(Math.random() * (allcharacter.length+1));
  console.log(allcharacter.length)
  console.log(random);
  oneCharcter = allcharacter[random];

  if(resultpassword === null)
  {resultpassword = oneCharcter}
  else{
  resultpassword = resultpassword + oneCharcter;}
  //  console.log("ResultPassword " + resultpassword);
}
return resultpassword;

}

  // charTypes.forEach(handleChartype);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
