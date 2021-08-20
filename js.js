let Questions = [
	{
	'question': 'Das flächenmäßig kleinste Bundesland heißt?',
	'answer_1': 'Berlin',
	'answer_2': 'Bremen',
	'answer_3': 'Saarland',
	'answer_4': 'Hamburg',
	'right_answer': 2
	},
	{
	'question': 'Einen Feinschmecker nennt man auch?',
	'answer_1': 'Gourmet',
	'answer_2': 'Gourmed',
	'answer_3': 'Genießer',
	'answer_4': 'Leckermäulchen',
	'right_answer': 1
	},
	{
	'question': 'Wo herrscht kein Linksverkehr?',
	'answer_1': 'Irland',
	'answer_2': 'Indien',
	'answer_3': 'Island',
	'answer_4': 'Großbritannienen',
	'right_answer': 3
	},
	{
	'question': 'Wie viele Knochen hat ein Erwachsenenkörper?',
	'answer_1': '250',
	'answer_2': '170',
	'answer_3': '206',
	'answer_4': '215',
	'right_answer': 3
	},
	{
	'question': 'Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken?',
	'answer_1': '150 Liter',
	'answer_2': '170 Liter',
	'answer_3': '100 Liter',
	'answer_4': '200 Liter',
	'right_answer': 3
	}
];


let Rightquessions = 0;// variable für richtige antwort
let currentQuession = 0;// variable für den zahl array
let Audiosuccess = new Audio('audio/success.mp3');
let Audiofail = new Audio('audio/fail.mp3');

function init(){// function für mehrere functionen
	document.getElementById('quessionid').style = 'display:none';//quessionid ausblenden
	document.getElementById('end').style = 'display:none';//end id ausblenden
	
	showquession()
}
function start(){
	document.getElementById('quessionid').style = '';////quessionid einblenden
	document.getElementById('right').style = 'display: none';//
	showquession();
}
function showquession(){// function
	if(quizEnd()){// wenn variable für den Array zahl gleich oder größer als array.lenght
		showendscreen();// zeig show end screen
	}else{ // show quession 
		uptadeprogressbar();
		schowUpdateQuession();	
	}
}

function quizEnd(){
	return currentQuession >= Questions.length;
}
function schowUpdateQuession(){
	let quiession = Questions[currentQuession];//neue variable die zugriff hat arrays anzahl

	document.getElementById('fragen').innerHTML = currentQuession + 1;// bei quiz unten seite zahl anzeigen
	document.getElementById('question').innerHTML = quiession	['question'];// in der id 'quession html code anzeigen
	document.getElementById('answer_1').innerHTML = quiession['answer_1'];
	document.getElementById('answer_2').innerHTML = quiession['answer_2'];
	document.getElementById('answer_3').innerHTML = quiession['answer_3'];
	document.getElementById('answer_4').innerHTML = quiession['answer_4'];
}

function showendscreen(){
	//TOdo show endcreen
	document.getElementById('end').style = '';// style in class card-body wird durch '' gelöscht oder geleert
	document.getElementById('quessionid').style = 'display: none';
	document.getElementById('ergebnis').innerHTML = Questions.length;
	document.getElementById('fragen').innerHTML = Rightquessions;
}
function uptadeprogressbar(){
	let percent = (currentQuession + 1) / Questions.length ;
	percent = Math.round(percent * 100);
	document.getElementById('progress-bar').innerHTML = `${percent}%`;
	document.getElementById('progress-bar').style =  `width: ${percent}%`;	
}





function answer(selection){// function mit parameter
	let quiession = Questions[currentQuession];// variable die zugriff hat arrays anzahl

	console.log('selected answer', selection);
	let selectedQuessionNumber = selection.slice(-1);// neue variable die zugriff zu der letzte buchstabe hat

	let IdOfRightAnswer = `answer_${quiession['right_answer']}`;


	if (selectedQuessionNumber == quiession['right_answer']) {// wenn letzte buchtabe von answer gleich answer letzte buchstabe in arrays
		console.log('rigtige antwort');// zeig richtige antwort
		document.getElementById(selection).parentNode.classList.add('bg-success');// wenn es rigtig farbe wird grün. .parentNode -> ein div höhe
		Audiosuccess.play();
		Rightquessions++;
	}else{ // wenn nicht
		console.log('falsche antwort');// falsche antwort
		document.getElementById(selection).parentNode.classList.add('bg-danger');// wenn es rigtig farbe wird rot. .parentNode -> ein div höhe
		document.getElementById(IdOfRightAnswer).parentNode.classList.add('bg-success');// wenn es rigtig farbe wird rot. .parentNode -> ein div höhe

		Audiofail.play();
	}
	document.getElementById('nextquestion').disabled = false;// button wieder anclikbar machen
	document.getElementById('lastquestion').disabled = false;// button wieder anclikbar machen

}



function nextQuession(){
	currentQuession++;// array wir auf 1 erhöht. Z.b. von 0 auf 1
	
	document.getElementById('nextquestion').disabled = true;
	resetanswerbtn();	
	showquession();
}

function resetanswerbtn(){
	document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
	document.getElementById('answer_1').parentNode.classList.remove('bg-success');
	document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
	document.getElementById('answer_2').parentNode.classList.remove('bg-success');
	document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
	document.getElementById('answer_3').parentNode.classList.remove('bg-success');
	document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
	document.getElementById('answer_4').parentNode.classList.remove('bg-success');
// die grüne und rote farben nicht mehr zeigen, wenn man zu nächste frage geht

}

function lastquession(){
	currentQuession--;
	document.getElementById('lastquestion').disabled = true;

	showquession();
}
function  Restart(){
	// document.getElementById('endimage').src = 'img/brain result.png';
	document.getElementById('quessionid').style = '';// quessionid wieder einblenden
	document.getElementById('end').style = 'display: none';// endscreen ausblenden
	document.getElementById('right').style = '';// quessionid wieder einblenden

	Rightquessions = 0;
	currentQuession = 0;
	init();
}

