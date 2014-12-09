
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';
var username = "ois.seminar";
var password = "ois4fri";
var ehrIDs=[]
var bolniki=[]
function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}
function kreirajEHRzaBolnika(x, ime, priimek, datum) {
	var	sessionId = getSessionId();
		$.ajaxSetup({ headers: {"Ehr-Session": sessionId}});
		$.ajax({
		    url: baseUrl + "/ehr",
		    type: 'POST',
		    success: function (data) {
		        var ehrId = data.ehrId;
		        var Pdata = {
		            firstNames: ime,
		            lastNames: priimek,
		            dateOfBirth: datum,
		            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
		        };
		        $.ajax({
		            url: baseUrl + "/demographics/party",
		            type: 'POST',
		            contentType: 'application/json',
		            data: JSON.stringify(Pdata),
		            success: function (party) {
		                if (party.action == 'CREATE') {	
		                	ehrIDs[x]=ehrId;
		                	bolniki[x]=""+ime+" "+priimek;
		                }
		            },
		            error: function(err) {
		            	console.log(JSON.parse(err.responseText).userMessage);
		            }
		        });
		    }
		});
}
function changeBtnText(id, text){
	var b=document.getElementById(id);
	b.innerHTML =text;
	if(b.value!==null){
		b.value=text;
	}
}

function ustvariBolnike() {
	var bolnikiUspesni=0;
	kreirajEHRzaBolnika(0, "Borut", "Novak", "1990-1-5" );
	kreirajEHRzaBolnika(1, "Peter", "Novak", "1985-5-10" );
	kreirajEHRzaBolnika(2, "Sašo", "Novak", "1995-10-20" );

	if(ehrIDs.length != 3){
		console.log("Vsi trije bolniki niso bili ustvarjeni. ustvarjenih je bilo : "+ehrIDs.length+". Prosimo, poskusite znova. Nevem zakaj, ampak prvič jih ne ustvari.");
	
	}else{
		bolnikiUspesni=1;
		console.log("Ustvarjeni: "+ehrIDs[0]+"\t"+ehrIDs[1]+"\t"+ehrIDs[2]);
		document.getElementById('button1').style.visibility = 'hidden';
		
		changeBtnText("item0",bolniki[0]);
		changeBtnText("item1",bolniki[1]);
		changeBtnText("item2",bolniki[2]);

	//	$("#kreirajSporociloLoop").html("<span class='obvestilo label label-success fade-in'>Uspešno kreirani EHR-ji:  '"+ehrIDs[0]+"\t"+ehrIDs[1]+"\t"+ehrIDs[2]  + "'.</span>");
	}
	//nevem zakaj ampak prvič ne ustvari nobenega
	if(bolnikiUspesni==1){
		
		//ustvari podatke za boruta, recimo da postane anoreksičen
		// tole bo izrisal en graf pa neki
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2000-11-20T12:00Z", 167, 60, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2001-11-20T12:00Z", 168, 64, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2002-11-20T12:00Z", 169, 66, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2003-11-20T12:00Z", 171, 72, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2004-11-20T12:00Z", 172, 72, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2005-11-20T12:00Z", 173, 75, 36, 110, 65, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2006-11-20T12:00Z", 173, 75, 36, 110, 64, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2007-11-20T12:00Z", 174, 68, 36, 108, 63, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2008-11-20T12:00Z", 174, 61, 36, 109, 61, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2009-11-20T12:00Z", 175, 52, 36, 108, 59, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2010-11-20T12:00Z", 176, 48, 36, 105, 58, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2011-11-20T12:00Z", 177, 51, 36, 108, 60, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2012-11-20T12:00Z", 178, 54, 36, 111, 62, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2013-11-20T12:00Z", 178, 60, 36, 113, 63, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2014-11-20T12:00Z", 179, 65, 36, 115, 66, "James Bond");
		
		//ustvari podatke za Petra, obratno od Boruta

		dodajMeritevVitalnihZnakov(ehrIDs[1], "2000-11-20T12:00Z", 167, 60, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2001-11-20T12:00Z", 168, 64, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2002-11-20T12:00Z", 169, 66, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2003-11-20T12:00Z", 171, 72, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2004-11-20T12:00Z", 172, 72, 36, 125, 75, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2005-11-20T12:00Z", 173, 75, 36, 123, 83, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2006-11-20T12:00Z", 173, 75, 36, 126, 86, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2007-11-20T12:00Z", 174, 78, 36, 127, 90, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2008-11-20T12:00Z", 174, 83, 36, 132, 95, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2009-11-20T12:00Z", 175, 89, 36, 136, 99, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2010-11-20T12:00Z", 176, 95, 36, 139, 105, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2011-11-20T12:00Z", 177, 130, 36, 146, 106, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2012-11-20T12:00Z", 178, 142, 36, 149, 108, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2013-11-20T12:00Z", 178, 156, 36, 150, 108, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[1], "2014-11-20T12:00Z", 179, 168, 36, 150, 110, "James Bond");

		//ustvari podatke za sašota, pri sašotu ni ekstremov
		
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2000-11-20T12:00Z", 167, 60, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2001-11-20T12:00Z", 168, 64, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2002-11-20T12:00Z", 169, 66, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2003-11-20T12:00Z", 171, 72, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2004-11-20T12:00Z", 172, 72, 125, 75, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2005-11-20T12:00Z", 173, 75, 123, 83, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2006-11-20T12:00Z", 173, 75, 126, 86, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2007-11-20T12:00Z", 174, 78, 127, 90, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2008-11-20T12:00Z", 174, 83, 125, 90, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2009-11-20T12:00Z", 175, 78, 124, 90, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2010-11-20T12:00Z", 176, 78, 125, 91, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2011-11-20T12:00Z", 177, 81, 130, 92, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2012-11-20T12:00Z", 178, 85, 135, 95, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2013-11-20T12:00Z", 178, 86, 120, 86, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2014-11-20T12:00Z", 179, 84, 119, 84, "James Bond");
	}
	
}

function dodajMeritevVitalnihZnakov(ehrid, datumUra, visina, teza, sistolicniKrvniTlak, diastolicniKrvniTlak, merilec) {
	var sessionId = getSessionId();
	var bmi=teza/((visina*visina)/10000);
	$.ajaxSetup({
	 headers: {
        "Ehr-Session": sessionId
    	}
	});
	
	var compositionData = {
    "ctx/time": datumUra,
    "ctx/language": "en",
    "ctx/territory": "SI",
    "vital_signs/body_temperature/any_event/temperature|magnitude": 37.1,
    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
    "vital_signs/blood_pressure/any_event/systolic": 120,
    "vital_signs/blood_pressure/any_event/diastolic": 90,
    "vital_signs/height_length/any_event/body_height_length": 171,
    "vital_signs/body_weight/any_event/body_weight": 57.2
};
var queryParams = {
    "ehrId": ehrid,
    templateId: 'Vital Signs',
    format: 'FLAT',
    committer: 'James'
};
$.ajax({
    url: baseUrl + "/composition?" + $.param(queryParams),
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(compositionData),
    success: function (res) {
        console.log(res);
    }
});
	
}

function getEhr(x){
	if(ehrIDs.length>x){
	var	sessionId=getSessionId();
	$.ajaxSetup({ headers: {"Ehr-Session": sessionId}});
		$.ajax({
			url:baseUrl+"/demographics/ehr/"+ehrIDs[x]+"/party",
			
		success: function(p){
					var party=p.party;
					vat te="Prebran bolnik "+x+" ime: "+party.firstNames+" "+party.lastNames;
					document.getElementById("test").innerHTML = te;
					console.log(te);
					getMeritev(x);
				}
		});
	}
	//end//
}

function getMeritev(x){
	
	
		var	sessionId=getSessionId();

		$.ajaxSetup({
	 headers: {
        "Ehr-Session": sessionId
    	}
	});
	$.ajax({
		 url: baseUrl + "/view/" + ehrIDs[x] + "/blood_pressure",
    	type: 'GET',
    	success: function (res) {
        	for (var i in res) {
        		var lololo=res[i].time + ': ' + res[i].systolic + '/' + res[i].diastolic + res[i].unit;
            	console.log(lololo);
            	var m= document.getElementById('test').innerHTML;
            	document.getElementById("test").innerHTML = te+<br>+lololo;
        	}
    	},
    	error: function(err){console.log("Napaka: "+JSON.parse(err.responseText).userMessage);}
	});
}

function inicializacija(){
	//z jquery disable dropdown
	ustvariBolnike();
}

$(document).ready(function() {
		$("#bolnikiSporocilo").html("");
		$("#button1");
		$("#buttonGetEhr");
		$("#navi");
});