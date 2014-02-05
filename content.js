/*
Copyright (c) 2014 WashU ACM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// EDIT THIS LINE WITH YOUR INSTITUTION'S EMAIL REGEX
var emailRegex = /[\w\.]+@wustl\.edu/;

var elements = document.querySelectorAll(".member-modal");
var objects = [];
Array.prototype.forEach.call(elements, function(element){
	var url = element.getAttribute("href")+"?_="+new Date().valueOf();
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	xhr.addEventListener("load", function(data){
		var content = data.target.responseText;
		var emailMatch = emailRegex.exec(content);
		var nameMatch = /<span class="fn">(.+)<\/span>/.exec(content);
		if(!emailMatch || !nameMatch){
			console.log("Had trouble matching the following response:",
				data.target.responseText);
			objects.push({
				name: "error",
				email: "error"
			});
		}else{
			objects.push({
				name: nameMatch[1],
				email: emailMatch[0]
			});
		}

		// ALL OBJECTS LOADED
		if(objects.length === elements.length){
			var csvString = "";
			objects.forEach(function(object, index){
				csvString += '"'+object.name+'","'+object.email+'"\n';
			});
			var csvUri = "data:text/csv;charset=utf-8,"+encodeURI(csvString);
			var link = document.createElement("a");
			link.setAttribute("href", csvUri);
			link.setAttribute("download", "roster.csv");
			link.click();
		}
	});
	xhr.send(null);
});
