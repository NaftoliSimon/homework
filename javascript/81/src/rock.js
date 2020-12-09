
import rockImg from './images/rock2.png';

export default class Rock {
  constructor() {
    this.image = rockImg;
    this.name = 'Rock';
    this.value = 1;
  }
}
export const rock = new Rock();
export const computerRock = new Rock();




