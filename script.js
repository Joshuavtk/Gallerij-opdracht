var resultaat = document.getElementById('image');
var fotos = document.getElementById('fotos')
var backButton = document.getElementById('backButton')
var nextButton = document.getElementById('nextButton')

var images = ["hearthFoto1.jpg","hearthFoto2.jpg","hearthFoto3.jpg","hearthFoto4.jpg","hearthFoto5.jpg","hearthFoto6.jpg","hearthFoto7.jpg","hearthFoto8.jpg","hearthFoto9.jpg",
"hearthFoto10.jpg","hearthFoto11.jpg","hearthFoto12.jpg","hearthFoto13.jpg","hearthFoto14.jpg","hearthFoto15.jpg","hearthFoto16.jpg","hearthFoto17.jpg","hearthFoto18.jpg",
"hearthFoto19.jpg","hearthFoto20.jpg","hearthFoto21.jpg","hearthFoto22.jpg","hearthFoto23.jpg","hearthFoto24.jpg","hearthFoto25.jpg"];

var smallImages = ["hearthFoto1-min.jpg","hearthFoto2-min.jpg","hearthFoto3-min.jpg","hearthFoto4-min.jpg","hearthFoto5-min.jpg","hearthFoto6-min.jpg","hearthFoto7-min.jpg","hearthFoto8-min.jpg","hearthFoto9-min.jpg",
"hearthFoto10-min.jpg","hearthFoto11-min.jpg","hearthFoto12-min.jpg","hearthFoto13-min.jpg","hearthFoto14-min.jpg","hearthFoto15-min.jpg","hearthFoto16-min.jpg","hearthFoto17-min.jpg","hearthFoto18-min.jpg",
"hearthFoto19-min.jpg","hearthFoto20-min.jpg","hearthFoto21-min.jpg","hearthFoto22-min.jpg","hearthFoto23-min.jpg","hearthFoto24-min.jpg","hearthFoto25-min.jpg"];
var num = 0;
/*for(let i=0;i<25;i++){
	var img = document.createElement('img');
	var src = document.createAttribute('src');
	var clss = document.createAttribute('class');
	src.value = "smallImages/" + imageNames[i];
}*/



for (let i = 0; i < 25; i++) {
	var img = document.createElement('img');
	img.setAttribute('src','images/'+smallImages[i]);
	fotos.appendChild(img);

	img.addEventListener('click',()=>{
		resultaat.src='bigImages/'+images[i];
		num = i;
	})

}




		nextButton.addEventListener('click',()=>{
			num++;
			if(num > images.length-1){
				num = 0;
			}

			resultaat.src='bigImages/'+images[num];
		})
	backButton.addEventListener('click',()=>{
			num--;
			if(num < 0){
				num = images.length-1;
			}

			resultaat.src='bigImages/'+images[num];
		})
