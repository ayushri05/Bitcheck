
var marginVal;
$(function(){
	 
	
$("button").click(function(){
	 /*marginVal= document.getElementById('margin');
	 var down_up= {
				type :"basic",
				title:"bitcoin price got down",
				message: marginVal, 
				iconUrl: "icon.png"
				  };
			chrome.notifications.create(down_up);*/
			alert();
	//engine();
});
    setInterval(engine, 50000);
});

function engine(){
	$.get('https://www.unocoin.com/', function(data){
    var latest_buyprice;
    var latest_sellprice;
    var newbuyprice	;
    var newsellprice;
   
	var buyprice= ($(data).find('#menubarbuyprice')).text();
	var sellprice= ($(data).find('#menubarsellprice')).text();
	marginVal= document.getElementById('margin')
$("button").click(function(){
	alert(marginVal);
	});
	
		if((buyprice <= latest_buyprice-marginVal) || (sellprice >= latest_sellprice+marginVal))
			{

		var down_or_up= {
				type :"basic",
				title:"bitcoin price got down",
				message:"buyprice="+buyprice +"sellprice"+ sellprice, 
				iconUrl: "icon.png"
				  };
			chrome.notifications.create(down_or_up);
			latest_buyprice= buyprice;
			latest_sellprice= sellprice;

				}
	else if ((latest_buyprice == undefined)|| (latest_sellprice == undefined)) {

			var firstrun= {
				type :"basic",
				title:"bitcoin price check",
				message:"You need to open the unocoin site to check the current price",
				iconUrl: "icon.png"
				
			};
			//chrome.notifications.create(firstrun);

			latest_buyprice= buyprice;
			latest_sellprice= sellprice;
			
		}
		else{
			//no update
		}
		
		
console.log(buyprice);
console.log(sellprice);


});
}

