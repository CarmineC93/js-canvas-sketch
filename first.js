const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    for  (let i = 0; i < 5 ; i ++) {
      //volendo aggiungere piu row di quadrati anche lungo l'asse y aggiungiamo un nuovo loop dentro il loop
      for (let j=0; j<5; j++)  {
        let width = 60;  //px
        let height= 60;
        let gap = 20;   //distanza tra i quadrati
        let x = 100 + (width + gap)*i;
        let y = 100 + (height + gap)*j; //aggiungiamo '+ (height + gap)*j' alla coordianata y perche le nuove righe si sviluppano appunto sull'asse y
      
        context.beginPath();
        context.rect(x,y,width, height);
        context.stroke();
    

      }
    }
  };
};


canvasSketch(sketch, settings);
