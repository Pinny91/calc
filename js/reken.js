var val = 0, cijfer = 0, memId = 0, memTekenId = 0;;
var wat;
var memNum = [], memTeken = [];
var tekst = '';
var puntTrue = false;
var deci = 1;
$(document).ready(function() {
	inIt();
	uitkomst.html('0');
	
	een.on('click', function(){
		cijfer = 1;
		printNumber();
	});
	twee.on('click', function(){
		cijfer = 2;
		printNumber();
	});	
	drie.on('click', function(){
		cijfer = 3;
		printNumber();
	});
	vier.on('click', function(){
		cijfer = 4;
		printNumber();
	});	
	vijf.on('click', function(){
		cijfer = 5;
		printNumber();
	});
	zes.on('click', function(){
		cijfer = 6;
		printNumber();
	});	
	zeven.on('click', function(){
		cijfer = 7;
		printNumber();
	});
	acht.on('click', function(){
		cijfer = 8;
		printNumber();
	});	
	negen.on('click', function(){
		cijfer = 9;
		printNumber();
	});
	nul.on('click', function(){
		cijfer = 0;
		printNumber();
	});

	punt.on('click', function(){
		puntTrue = true;
		tekst += '.';
		uitkomst.html(tekst);
	});
	
	plus.on('click', function() {
		wat='+';
		printBewerking();
	});	
	min.on('click', function() {
		wat='-';
		printBewerking();
	});	
	maal.on('click', function() {
		wat='*';
		printBewerking();
	});	
	delen.on('click', function() {
		wat='/';
		printBewerking();
	});	

	gelijk.on('click', function() {
		uitrekenen();
	});	

	clear.on('click', function() {
		val = 0;
		wat='';
		puntTrue = false;
		deci = 1;
		tekst = '';
		sum = 0;
		memId = 0;
		memNum = [];
		memTeken = [];
		uitkomst.html('0');
	});
});	

function printNumber () {
	if(puntTrue === true) {
		val = val + cijfer/(10 * deci)
		deci++;
	}
	else {
		val = val*10 + cijfer;
	}
	tekst += cijfer;
	uitkomst.html(tekst);
}

function printBewerking() {
	memNum[memId] = val;
	memTeken[memId] = wat;
	memId++;
	
	//alle waarden resetten
	val = 0;
	wat='';
	puntTrue = false;
	deci = 1;
	tekst = '';
	
	for(i=0; i<memId;i++){
			tekst += memNum[i] + memTeken[i]; 
	}
	uitkomst.html(tekst);
}

function uitrekenen() {
	printBewerking();
	var sum = 0;
	for(j=0;j<memId-1;j++){
		//eerst vermenigvuldigen
		var maalId = memTeken.indexOf('*');
		if(maalId !== -1) {
			memNum[maalId] *= memNum[maalId+1];
			memNum[maalId+1] = 0;
			memTeken[maalId] = '+';
		}
		//dan delen
		var deelId = memTeken.indexOf('/');
		if(deelId !== -1) {
			memNum[deelId] /= memNum[deelId+1];
			memNum[deelId+1] = 0;
			memTeken[deelId] = '+';
		}
	}
	sum = memNum[0];
	for(i=0; i<memId-1;i++){

		//Vervolgens alles optellen en aftrekken
		if(memTeken[i] === '-') {
			sum -= memNum[i+1];
		}
		else {
			sum += memNum[i+1];			
		}
	}
	memNum = [];
	memTeken = [];
	memId = 0;
	val = sum;
	uitkomst.html(sum);
	
}

function inIt() {
	nul = $('#nul');
	een = $('#een');
	twee = $('#twee');
	drie = $('#drie');
	vier = $('#vier');
	vijf = $('#vijf');
	zes = $('#zes');
	zeven = $('#zeven');
	acht = $('#acht');
	negen = $('#negen');
	
	punt =$('#punt');
	
	plus = $('#plus');
	min = $('#min');
	maal = $('#maal');
	delen = $('#delen');
	
	gelijk = $('#gelijk');
	uitkomst = $('#uitkomst');
	
	ac = $('#ac');
	clear = $('#ce');
	ans = $('#ans');
}




























