function cipherText() {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  var inputOriginal = document.getElementById('inputOriginalText');
  var result = document.getElementById('result');
  var password = parseInt(document.getElementById('inputpassword').value); 
  let originalMessage = inputOriginal.value;
  let cipheredMessage = '';

  for (let i = 0; i < originalMessage.length; i++) {
    let letra = originalMessage[i].toLowerCase();
    let index = alphabet.indexOf(letra);

    let newLetter = alphabet[(index + password) % alphabet.length];
    cipheredMessage += newLetter;
  }

  result.value = cipheredMessage;
}

function decoderText() {
  const alphabet = ["z","y","x","w","v","u","t","s","r","q","p","o","ñ","n","m","l","k","j","i","h","g","f","e","d","c","b","a"];
  var inputdecrypted = document.getElementById('inputdecryptedtext');
  var resultdecrypted = document.getElementById('resultdecrypted');
  var password = parseInt(document.getElementById('inputpassword').value); 
  let decryptedMessage = inputdecrypted.value;

  for (let i = 0; i < decryptedMessage.length; i++) {
      let letra = decryptedMessage[i].toLowerCase();
      let index = alphabet.indexOf(letra);
      let newLetter = alphabet[(index + password) % alphabet.length];
      decryptedMessage = decryptedMessage.replace(letra, newLetter);
    }

  resultdecrypted.value = decryptedMessage;
}