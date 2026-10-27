/* STEEL STRIDE gameplay tuning. Keep behavior changes isolated from engine code. */
window.GAME_CONFIG = Object.freeze({
  world: { groundY: 330, width: 5200 },
  player: {
    startX: 120, height: 44, minX: 40, maxXOffset: 60,
    moveSpeed: 230, jumpVelocity: 610, gravity: 1450,
    dashSpeed: 720, dashDuration: 0.22, dashCooldown: 0.65
  },
  combat: {
    // Player weapon: muzzle position is relative to the player object.
    muzzleOffsetX: 18, muzzleOffsetY: 22, aimFallbackDistance: 420,
    bulletSpeed: 500, bulletLifetimeMs: 2400, fireIntervalMs: 145,
    damage: 1
  },
  playerHealth: {
    maxHp: 3, hitFlashMs: 200, invulnerabilityMs: 1000, deathEffectMs: 650
  },
  enemies: {
    defaultHitPoints: 2, explosionMs: 500, surviveSpawnInterval: 0.58,
    infantry: {
      width: 32, height: 32,
      contactDamage: 1,
      rangedAttackEnabled: false
    },
    drone: {
      width: 30, height: 20, y: 145, patrolSpeed: 85,
      muzzleOffsetX: 15, muzzleOffsetY: 10,
      bulletSpeed: 180, bulletLifetimeMs: 3000, fireIntervalMs: 1800, damage: 1
    },
    turret: {
      width: 34, height: 50, range: 320, fireIntervalMs: 1800,
      aimOriginOffsetX: 17, aimOriginOffsetY: 10,
      muzzleLength: 30, bulletSpeed: 180, bulletLifetimeMs: 4000, damage: 1
    }
  },
  sectors: [
    { start: 650, end: 1250, spawnLead: 520, wave: 8 },
    { start: 1750, end: 2400, spawnLead: 560, wave: 9 },
    { start: 2900, end: 3600, spawnLead: 600, wave: 10 },
    { start: 4100, end: 4800, spawnLead: 640, wave: 11 }
  ]
});
