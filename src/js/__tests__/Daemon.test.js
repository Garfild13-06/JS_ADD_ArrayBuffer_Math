import Daemon from '../Daemon';

test('should create a Daemon character with default attack value', () => {
  const daemon = new Daemon('Azazel');
  expect(daemon.name).toBe('Azazel');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.attackValue).toBe(100);
});

test('should calculate attack power for Daemon without stoned', () => {
  const daemon = new Daemon('Azazel');
  daemon.attack = 2;
  expect(daemon.attack).toBe(90);
  daemon.attack = 3;
  expect(daemon.attack).toBe(80);
  daemon.attack = 4;
  expect(daemon.attack).toBe(70);
  daemon.attack = 5;
  expect(daemon.attack).toBe(60);
});

test('should calculate attack power for Daemon with stoned', () => {
  const daemon = new Daemon('Azazel');
  daemon.stoned = true;
  daemon.attack = 2;
  expect(daemon.attack).toBe(85);
  daemon.attack = 3;
  expect(daemon.attack).toBe(72);
  daemon.attack = 4;
  expect(daemon.attack).toBe(60);
  daemon.attack = 5;
  expect(daemon.attack).toBe(48);
});
