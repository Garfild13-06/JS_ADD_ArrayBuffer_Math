import Character from '../Character';

test('should create a character with the given name, type, and attack value', () => {
    const character = new Character('Hero', 'Warrior', 100);
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Warrior');
    expect(character.attackValue).toBe(100);
});

test('should set and get stoned property', () => {
    const character = new Character('Hero', 'Warrior', 100);
    character.stoned = true;
    expect(character.stoned).toBe(true);
});

test('should calculate attack power correctly', () => {
    const character = new Character('Hero', 'Warrior', 100);
    character.attack = 1;
    expect(character.attack).toBe(100);
    character.attack = 2;
    expect(character.attack).toBe(90);
    character.attack = 3;
    expect(character.attack).toBe(80);
    character.attack = 4;
    expect(character.attack).toBe(70);
    character.attack = 5;
    expect(character.attack).toBe(60);
});

test('should calculate attack power correctly when stoned', () => {
    const character = new Character('Hero', 'Warrior', 100);
    character.stoned = true;
    character.attack = 1;
    expect(character.attack).toBe(100);
    character.attack = 2;
    expect(character.attack).toBe(85);
    character.attack = 3;
    expect(character.attack).toBe(72);
    character.attack = 4;
    expect(character.attack).toBe(60);
    character.attack = 5;
    expect(character.attack).toBe(48);
});

test('should not return negative attack power', () => {
    const character = new Character('Hero', 'Warrior', 100);
    character.attack = 100;
    expect(character.attack).toBe(0);
});

test('should handle stoned property correctly', () => {
    const character = new Character('Hero', 'Warrior', 100);
    character.stoned = false;
    character.attack = 2;
    expect(character.attack).toBe(90);
    character.stoned = true;
    character.attack = 2;
    expect(character.attack).toBe(85);
});
