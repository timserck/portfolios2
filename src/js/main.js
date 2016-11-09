const $ = require("jquery");


let ProjetsLink = $('.projects__li--a')
let ProjetsLinks = $('.projects').find(ProjetsLink);
let ProjectsImg = document.getElementById("projects__img");
// console.log(ProjetsLinks);

let ProjectId = function(){
	for (var i = ProjetsLinks.length - 1; i >= 0; i--) {
		ProjetsLinks[i].id = 'img_' + i;
		// console.log(ProjetsLinks[i].id);
	};
}

let ProjectImg = function(LinkId){
	let url = 'imgs/'+LinkId + '.jpg'; 
	ProjectsImg.src = url;
}

let ProjectHover = function(){
	ProjetsLink.hover(function(){
	ProjetsLink.removeClass('active');
	let linkHover = 'img_' + $('a').index($(this));
	$('#' + linkHover).addClass('active');

	ProjectImg(linkHover);
	});
}

let projectModule = function(){
	ProjectId();
	ProjectHover();
}

projectModule();






// var module = require('./monModule.js');
// module.myvar = 'Hello world';
// module.test();






