const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    const w = 60;  //px
    const h = 60;
    const gap = 20;   //distanza tra i quadrati
    let x;
    let y;

    for  (let i = 0; i < 5 ; i ++) {
      //volendo aggiungere piu row di quadrati anche lungo l'asse y aggiungiamo loop annidato
      for (let j=0; j < 5; j++)  {
        x = 100 + (w + gap)*i;
        y = 100 + (h + gap)*j; //aggiungiamo '+ (height + gap)*j' alla coordianata y perche le nuove righe si sviluppano appunto sull'asse y
     
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
        
        //nello stesso ciclo posso creare una nuova figura per esempio un cerchio all'interno dei quadrati
        // qui mostrerò i nuovi cerchi solo il 50% delle volte. Math.random restituisce un numero tra 0 e 1
        if (Math.random () > 0.5) {
          context.beginPath();
          context.arc (x + 30 , y + 30 , 20 ,0, Math.PI * 2);
          /* con '+ 30' stiamo ad indicare di quanti px il centro deve spostarsi sull'asse x e y 
          per non intersecarsi con i quadrati, perchè voglio i cerchi all'interno dei rect. il terzo parametro è il raggio*/
          context.stroke()   
          }
      }
    }
  };
};


canvasSketch(sketch, settings);
