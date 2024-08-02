import Magician from '../Magician';

test('should create a Magician character with default attack value', () => {
    const magician = new Magician('Merlin');
    expect(magician.name).toBe('Merlin');
    expect(magician.type).toBe('Magician');
    expect(magician.attackValue).toBe(100);
});

test('should calculate attack power for Magician without stoned', () => {
    const magician = new Magician('Merlin');
    magician.attack = 2;
    expect(magician.attack).toBe(90);
    magician.attack = 3;
    expect(magician.attack).toBe(80);
    magician.attack = 4;
    expect(magician.attack).toBe(70);
    magician.attack = 5;
    expect(magician.attack).toBe(60);
});

test('should calculate attack power for Magician with stoned', () => {
    const magician = new Magician('Merlin');
    magician.stoned = true;
    magician.attack = 2;
    expect(magician.attack).toBe(85);
    magician.attack = 3;
    expect(magician.attack).toBe(72);
    magician.attack = 4;
    expect(magician.attack).toBe(60);
    magician.attack = 5;
    expect(magician.attack).toBe(48);
});
