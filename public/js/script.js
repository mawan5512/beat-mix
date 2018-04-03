// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

let toggleDrum = (beat, beatIndex) => {
    if(beatIndex >= 0 && beatIndex <= 15){
        switch(beat) {
            case 'kicks':
                kicks[beatIndex] = !kicks[beatIndex];
                break;
            case 'snares':
                snares[beatIndex] = !snares[beatIndex];
                break;
            case 'hiHats':
                hiHats[beatIndex] = !hiHats[beatIndex];
                break;
            case 'rideCymbals':
                rideCymbals[beatIndex] = !rideCymbals[beatIndex];
                break;
            default:
                break;
        }
    }
};

let clear = (beat) => {
  switch(beat) {
      case 'kicks':
          kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
          break;
      case 'snares':
          snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
          break;
      case 'hiHats':
          hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
          break;
      case 'rideCymbals':
          rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
          break;
      default:
          break;
  }
};

let invert = (beat) => {
  switch(beat) {
      case 'kicks':
          for(let i = 0; i < kicks.length; i++){
            kicks[i] = !kicks[i];
          };
          break;
      case 'snares':
          for(let i = 0; i < snares.length; i++){
            snares[i] = !snares[i];
          };
          break;
      case 'hiHats':
          for(let i = 0; i < hiHats.length; i++){
            hiHats[i] = !hiHats[i];
          };
          break;
      case 'rideCymbals':
          for(let i = 0; i < rideCymbals.length; i++){
            rideCymbals[i] = !rideCymbals[i];
          };
          break;
      default:
          break;
  }
};

let getNeighborPads = (x, y, size) => {
    let neighborPads = [];
    if(x < 0 || y < 0 || x > size - 1 || y > size - 1){
    }
    else
    {
        if(!(x === 0)){
            neighborPads.push([x - 1, y]);
        }
        if(!(x === size - 1)){
            neighborPads.push([x + 1, y]);
        }
        if(!(y === 0)){
            neighborPads.push([x, y - 1]);
        }
        if(!(y === size - 1)){
            neighborPads.push([x, y + 1])
        }
    }
    return neighborPads;

};