const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    //aggiungo spessore alle linee (+1%)
    context.lineWidth = width * 0.01;

    const w   = width * 0.10;  //la larghezza ora sarà il 10% della larghezza del foglio, qualunque essa sia
    const h   = height * 0.10;
    const gap = width * 0.03;   //distanza tra i quadrati

    const ix  = width * 0.17;  //setto anche i punti iniziali in percentuale
    const iy  = height * 0.17;    

    const inside = width * 0.05; //setto anche le misure delle figure interne

    let x;
    let y;

    for (let i = 0; i < 5 ; i++) {
      //volendo aggiungere piu row di quadrati anche lungo l'asse y aggiungiamo loop annidato
      for (let j = 0; j < 5 ; j++)  {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j; //aggiungiamo '+ (height + gap)*j' alla coordianata y perche le nuove righe si sviluppano appunto sull'asse y
     
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
        
        //nello stesso ciclo posso creare una nuova figura per esempio un cerchio all'interno dei quadrati
        // qui mostrerò i nuovi cerchi solo il 50% delle volte. Math.random restituisce un numero tra 0 e 1
        if (Math.random () > 0.5) {
          
          context.beginPath();
          context.arc (x + inside , y + inside , inside/2 , 0 , Math.PI * 2); 
          /* con '+ 30' stiamo ad indicare di quanti px il centro deve spostarsi sull'asse x e y 
          per non intersecarsi con i quadrati, perchè voglio i cerchi all'interno dei rect. il terzo parametro è il raggio, il quinto la circonferenza*/
          context.stroke()   
          }
      }
    }
  };
};


canvasSketch(sketch, settings);
