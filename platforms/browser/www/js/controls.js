document.addEventListener('deviceready',deviceready, false);

function gotoapp(){
	//document.getElementById("app").style.display="block";
	//document.getElementById("login").style.display="none";
	//var ip = document.getElementById("ip").value;
	//window.location=ip;


	}

function deviceready(){
				document.getElementById('status').innerHTML="ready";
				loadapp();
				}
function loadapp(){var status="ready";
					if (status=="ready"){
						var iab = cordova.InAppBrowser;
						inAppBrowserRef=iab.open("http://makoha.ihostfull.com/elgg2/activity", 'random_string', 'location=no,hidden=yes');
						inAppBrowserRef.addEventListener('loadstart',starthh);
						inAppBrowserRef.addEventListener('loadstop', finishedhh);
						inAppBrowserRef.addEventListener('loaderror', errorhh);
						}else{return(0);}
					}
function  starthh(){//inAppBrowserRef.executeScript({});
		  }

function  errorhh(){inAppBrowserRef.close();
					//document.getElementById('app').style.display="none";
					//document.getElementById('login').style.display="block";
					document.getElementById('loader').style.display="block";
					navigator.notification.beep(1);
					navigator.notification.alert("Dear user busitema connect needs internet to load data,please review your network settings and try again.app design by makoha innocent tel +0781983636",callback,"busitema connect cannot load data!","try again");



		  }

function  finishedhh(){inAppBrowserRef.show();
		  }
function callback(){loadapp();
					}