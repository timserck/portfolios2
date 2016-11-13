const $ = require("jquery");

class Project {

	constructor(){
		this.ProjectsImg = $(".projects__img");
		this.link = $('.projects__li--a');
		this.ProjetsLinks = $('.projects').find(this.link);
	}


	ProjectData(){
		console.log(this.ProjetsLinks)
		for (var i = this.ProjetsLinks.length - 1; i >= 0; i--) {
		this.ProjetsLinks[i].dataset.id = `img_${i}`;
		};
	}

	ProjectImg(src){
		let url = `imgs/${src}.jpg`;
		this.ProjectsImg.attr("src", url);
	}

	ProjectHover(){
		let hoverLink = (e) => {
    	this.link.removeClass('link-hover')
      	let elem = $(e.currentTarget);
    	elem.addClass('link-hover');
    	this.ProjectImg(elem.data('id'));
    	}
    
    this.link.on('mouseover', this.link, hoverLink);
	}

	ProjectStart(){
		this.ProjectData();
		this.ProjectHover();
	}


}

let projectModule = new Project();
projectModule.ProjectStart();