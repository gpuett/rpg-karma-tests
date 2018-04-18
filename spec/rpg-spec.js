import { User, Enemy } from './../src/rpg.js';

describe('Player', function() {
  let player;
  let mummra;

  it('should test giving the user a level', function() {
    player = new User();
    expect(player.level).toEqual(1);
  });

  it('should insert enemy into battle scenario', function() {
    mummra = new Enemy(25, 15);
    console.log(mummra);
  });

  it('should subtract player damage from enemy health', function() {
    player = new User();
    mummra = new Enemy(25, 15);
    mummra.health -= player.damage;
    expect(mummra.health).toEqual(15);
  });

  it('should subtract enemy damage from player health', function() {
    player = new User();
    mummra = new Enemy(25, 15);
    player.health -= mummra.damage;
    expect(player.health).toEqual(85);
  });
});
