/* STEEL STRIDE gameplay tuning. Keep behavior changes isolated from engine code. */
window.GAME_CONFIG = Object.freeze({
  world: { groundY: 330, width: 5200 },
  player: {
    startX: 120, height: 44, minX: 40, maxXOffset: 60,
    moveSpeed: 230, jumpVelocity: 610, gravity: 1450,
    dashSpeed: 720, dashDuration: 0.22, dashCooldown: 0.65
  },
  combat: {
    muzzleOffsetX: 18, muzzleOffsetY: 22, aimFallbackDistance: 420,
    bulletSpeed: 500, bulletLifetimeMs: 2400, fireIntervalMs: 145
  },
  enemies: {
    hitPoints: 2, surviveSpawnInterval: 0.58,
    infantry: { width: 32, height: 32 },
    drone: { width: 30, height: 20, y: 145 }
  },
  sectors: [
    { start: 650, end: 1250, spawnLead: 520, wave: 8 },
    { start: 1750, end: 2400, spawnLead: 560, wave: 9 },
    { start: 2900, end: 3600, spawnLead: 600, wave: 10 },
    { start: 4100, end: 4800, spawnLead: 640, wave: 11 }
  ]
});
