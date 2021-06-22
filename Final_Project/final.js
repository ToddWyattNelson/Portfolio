let input_textarea = document.getElementById("input_textarea");
let output_textarea = document.getElementById("output_textarea");
let translate_button = document.getElementById("translate");

input_textarea.addEventListener("input", writeText);
translate_button.addEventListener("click", getTranslation);

function writeText() {
    console.log(input_textarea.value);
    output_textarea.value  = input_textarea.value;
}


function getTranslation() {
    console.log("hello");
   
    fetch("https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to=de&textType=plain&profanityAction=NoAction", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "18d9ae5e49msh0b916864e1060a7p110e35jsn57633f96b6a2",
		"x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com"
	},
	"body": [
		{
			"Text": "I would really like to drive your car around the block a few times."
		}
	]
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}
