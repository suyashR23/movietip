
document.querySelector('.button').addEventListener('click',function(){
    console.log('buttonrunning');
	document.getElementById('new').classList.toggle('active');
});

document.querySelector('.btn').addEventListener('click',function(){
	document.querySelector('.btn').classList.toggle('active');
	window.open('genre/index.html','blank');	
});

