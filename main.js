
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';
var username = "ois.seminar";
var password = "ois4fri";
var ehrIDs=[]
var bolniki=[]
var bolnikData1=[]
var bolnikData2=[]
var bolnikData3=[]
var bolnikData4=[]
var teee=0;

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
		if(teee>0){console.log("Vsi trije bolniki niso bili ustvarjeni. ustvarjenih je bilo : "+ehrIDs.length+". Prosimo, poskusite znova.");}
	
	}else{
		bolnikiUspesni=1;
		console.log("Ustvarjeni: "+ehrIDs[0]+"\t"+ehrIDs[1]+"\t"+ehrIDs[2]);
		document.getElementById('button1').style.visibility = 'hidden';
		
		changeBtnText("item0",bolniki[0]);
		changeBtnText("item1",bolniki[1]);
		changeBtnText("item2",bolniki[2]);
		changeBtnText("item20",bolniki[0]);
		changeBtnText("item21",bolniki[1]);
		changeBtnText("item22",bolniki[2]);

	}
	//nevem zakaj ampak prvič ne ustvari nobenega

	
}


function blabla(){
	//blabla dela pravilno
	console.log("smov blabla");
	if(ehrIDs.length>2){
											 //"2011-07-01T19:15:28Z"
		dodajMeritevVitalnihZnakov( ehrIDs[0], "2000-11-20T12:00Z", 167, 60, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov( ehrIDs[0], "2001-11-20T12:00Z", 168, 64, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[0], "2002-11-20T12:00Z", 169, 66, 36, 120, 70, "James Bond");
			dodajMeritevVitalnihZnakov(ehrIDs[0], "2002-12-20T12:00Z", 169, 66, 36, 120, 70, "James Bond");
			dodajMeritevVitalnihZnakov(ehrIDs[0], "2002-12-25T12:00Z", 169, 66, 36, 120, 70, "James Bond");
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
		
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2000-11-20T12:00Z", 167, 60, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2001-11-20T12:00Z", 168, 64, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2002-11-20T12:00Z", 169, 66, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2003-11-20T12:00Z", 171, 72, 36, 120, 70, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2004-11-20T12:00Z", 172, 72, 36, 125, 75, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2005-11-20T12:00Z", 173, 75, 36, 123, 83, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2006-11-20T12:00Z", 173, 75, 36, 126, 86, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2007-11-20T12:00Z", 174, 78, 36, 127, 90, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2008-11-20T12:00Z", 174, 83, 36, 125, 90, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2009-11-20T12:00Z", 175, 78, 36, 124, 90, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2010-11-20T12:00Z", 176, 78, 36, 125, 91, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2011-11-20T12:00Z", 177, 81, 36, 130, 92, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2012-11-20T12:00Z", 178, 85, 36, 135, 95, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2013-11-20T12:00Z", 178, 86, 36, 120, 86, "James Bond");
		dodajMeritevVitalnihZnakov(ehrIDs[2], "2014-11-20T12:00Z", 179, 84, 36, 119, 84, "James Bond");
	}else{
		console.log("Napaka! Ustvarjen ni še noben bolnik! ")
	}
		
		
}

function dodajMeritevVitalnihZnakov(ehrid, datumUra, visina, teza, tempe, sistolicniKrvniTlak1, diastolicniKrvniTlak1, merilec1) {
	console.log("dodajam meritev");
	sessionId = getSessionId();
	var ehrId = ehrid;
	var datumInUra = datumUra;
	var telesnaVisina = visina;
	var telesnaTeza = teza;
	var telesnaTemperatura = tempe;
	var sistolicniKrvniTlak = sistolicniKrvniTlak1;
	var diastolicniKrvniTlak = diastolicniKrvniTlak1;
	var nasicenostKrviSKisikom = 0;
	var merilec = merilec1;

	if (!ehrId || ehrId.trim().length == 0) {
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var podatki = {
			// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
		    "ctx/language": "en",
		    "ctx/territory": "SI",
		    "ctx/time": datumInUra,
		    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
		    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
		    "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
		    "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
		    "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom
		};
		var parametriZahteve = {
		    "ehrId": ehrId,
		    templateId: 'Vital Signs',
		    format: 'FLAT',
		    committer: merilec
		};
		$.ajax({
		    url: baseUrl + "/composition?" + $.param(parametriZahteve),
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(podatki),
		    success: function (res) {
		    	console.log(res.meta.href);
		    },
		    error: function(err) {
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
	}
}




function getEhr(x){
	if(ehrIDs.length>x){
	var	sessionId=getSessionId();
	$.ajaxSetup({ headers: {"Ehr-Session": sessionId}});
		$.ajax({
			url:baseUrl+"/demographics/ehr/"+ehrIDs[x]+"/party",
			
		success: function(p){
					var party=p.party;
					var te="Prebran bolnik "+x+" ime: "+party.firstNames+" "+party.lastNames;
					document.getElementById("test").innerHTML = te;
					console.log(te+"\n Meritve: ");
					
					//klič metodo znotraj iframe da nariše graf
					$(window).load(function(){
        				 document.getElementById('iframe_graf_1').contentWindow.getT(ehrIDs[x]);
    				 });
					document.getElementById('iframe_graf_1').contentWindow.getT(ehrIDs[x]);
					
					
					
					
					
				//	preberiMeritveVitalnihZnakov(x);
				}
		});
	}

}



function preberiAql(x){
		var AQL2=
		"select "+
    	"a_a/data[at0002]/events[at0003]/data[at0001]/items[at0004, 'Body weight']/value as Body_weight " +
		"from EHR e[e/ehr_id/value='"+ehrIDs[x]+"'] "+
		"contains COMPOSITION a "+
       	"contains OBSERVATION a_a[openEHR-EHR-OBSERVATION.body_weight.v1] "+
		"where a_a/data[at0002]/events[at0003]/data[at0001]/items[at0004, 'Body weight']/value/magnitude>0 " +
		"order by "+
    	"a_a/data[at0002]/events[at0003]/data[at0001]/items[at0004, 'Body weight']/value/magnitude desc " +
		"limit 1";
		
		var AQL = 
		"select " +
			"t/data[at0002]/events[at0003]/time/value as cas, " +
			"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, " +
			"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota " +
		"from EHR e[e/ehr_id/value='" + ehrIDs[x] + "'] " +
		"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] " +
		"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 " +
		"order by t/data[at0002]/events[at0003]/time/value desc " +
		"limit 10";
	$.ajax({
	    url: baseUrl + "/query?" + $.param({"aql": AQL}),
	    type: 'GET',
	    headers: {"Ehr-Session": sessionId},
	    success: function (res) {
	    	if (res) {
	    		var rows = res.resultSet;
		        for (var i in rows) {
		            console.log("demo: primer "+rows[i].temperatura_vrednost);
		        }
	    	} else {
	    		console.log("demo primer nima res")
	    	}
	
	    },
	    error: function() {
			console.log(JSON.parse(err.responseText).userMessage);
	    }
	});
	

		$.ajax({
	    url: baseUrl + "/query?" + $.param({"aql": AQL2}),
	    type: 'GET',
	    headers: {"Ehr-Session": sessionId},
	    success: function (res) {
	    	if (res) {
	    		var rows = res.resultSet;
		        for (var i in rows) {
		            console.log("moj: primer "+rows[i].Body_weight);
		        }
	    	} else {
	    		console.log("moj primer nima res")
	    	}
	
	    },
	    error: function() {
			console.log(JSON.parse(err.responseText).userMessage);
	    }
	});
	
	
}

function inicializacija(){
	//z jquery disable dropdown
	ustvariBolnike();
}

$(document).ready(function() {
		$("#bolnikiSporocilo").html("");
		$("#button2");
		$("#button1");
		$("#buttonGetEhr");
		$("#navi");
});