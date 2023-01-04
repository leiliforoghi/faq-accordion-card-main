const accordin = document.getElementsByClassName('accordin-head');
for(let i =0; i< accordin.length;i++){
    accordin[i].addEventListener('click',
    function(){
        this.classList.toggle('active');
    })
}