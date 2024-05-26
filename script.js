//DOM Access
    const body = document.querySelector('body');
    const image = document.querySelector('img');

        
 //FUNCTION
     function ColorChange(BckColor,BulbColor){
        body.style.cssText = `background: ${BckColor};`;
         image.src = BulbColor;
    }