function Level(){
  this.enemies = 1;
  this.number  = 1;

  this.desenhar = function(ctx){
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    ctx.font = "1em Arial Black";
    var texto = "Level: " + this.number + " Enemies: " +this.enemies;
    ctx.fillText(texto, 100, 20);
    ctx.strokeText(texto, 100, 20);
  }



}
