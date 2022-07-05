console.log (create_random_letter(5))
function create_random_letter(string_length){
    var random_letter = '';
    var characters = 'ASDFGHJKLZXCVBNM'
    for( var i, i = 0 ; i < string_length; i++){
        random_letter += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    return random_letter
}
