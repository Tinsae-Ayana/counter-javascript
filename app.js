let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

value.textContent=count;
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const styles = e.currentTarget.classList;
       if(styles.contains('decrease')){
        count-=1;
       } else if (styles.contains('reset')){
        count=0;
       } else {
        count+=1; 
       }
       value.textContent = count;
       if(count<0){
        value.style.color = 'Red';
       } else {
        value.style.color = 'Green';
       }
    });

});