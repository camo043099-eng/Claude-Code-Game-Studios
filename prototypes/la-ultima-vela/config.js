// PROTOTYPE - NOT FOR PRODUCTION
// Question: ¿Es divertido pasar de huir a arrasar la multitud durante una partida de 10 minutos?
// Date: 2026-11-10
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
// Distances are world pixels (the world is 426x240 pixels, scaled up by 3); times are seconds.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // The run
  run_length: { value: 600, min: 60, max: 1200, step: 30 },      // s until the boss arrives
  gold_per_minute: { value: 5, min: 0, max: 50, step: 1 },        // gold banked per minute survived

  // The lamplighter
  player_speed: { value: 52, min: 20, max: 120, step: 1 },        // px/s
  player_hp: { value: 100, min: 20, max: 400, step: 5 },
  light_radius: { value: 72, min: 30, max: 160, step: 1 },        // px; also the gem pull radius
  contact_cooldown: { value: 0.6, min: 0.1, max: 2, step: 0.05 }, // s between hits from one enemy
  knockback: { value: 40, min: 0, max: 150, step: 5 },            // px/s pushed on a hit

  // Levels
  xp_base: { value: 20, min: 2, max: 60, step: 1 },               // xp for level 2
  xp_growth: { value: 9, min: 0, max: 60, step: 1 },              // extra xp per level after

  // The horde
  spawn_base: { value: 0.9, min: 0.1, max: 6, step: 0.1 },        // enemies/s at minute 0
  spawn_growth: { value: 0.42, min: 0, max: 3, step: 0.02 },      // extra enemies/s per minute
  max_enemies: { value: 320, min: 50, max: 800, step: 10 },
  hp_growth: { value: 0.12, min: 0, max: 1, step: 0.01 },         // enemy hp +12% per minute

  bat_hp: { value: 8, min: 1, max: 80, step: 1 },
  bat_speed: { value: 24, min: 5, max: 100, step: 1 },
  bat_damage: { value: 4, min: 0, max: 40, step: 1 },

  hound_start: { value: 50, min: 0, max: 600, step: 5 },          // s when crypt hounds join
  hound_hp: { value: 14, min: 1, max: 120, step: 1 },
  hound_speed: { value: 50, min: 10, max: 120, step: 1 },
  hound_damage: { value: 6, min: 0, max: 40, step: 1 },

  skel_hp: { value: 55, min: 5, max: 400, step: 5 },
  skel_speed: { value: 26, min: 5, max: 100, step: 1 },
  skel_damage: { value: 10, min: 0, max: 60, step: 1 },
  ring_time: { value: 120, min: 10, max: 600, step: 5 },          // s: first ring of skeletons
  ring_count: { value: 16, min: 4, max: 60, step: 1 },
  ring2_time: { value: 420, min: 30, max: 1200, step: 5 },        // s: second, larger ring
  ring2_count: { value: 26, min: 4, max: 80, step: 1 },

  spectre_start: { value: 240, min: 0, max: 900, step: 5 },       // s when shooting spectres join
  spectre_hp: { value: 26, min: 1, max: 200, step: 1 },
  spectre_speed: { value: 30, min: 5, max: 100, step: 1 },
  spectre_damage: { value: 8, min: 0, max: 60, step: 1 },
  spectre_fire: { value: 2.6, min: 0.5, max: 8, step: 0.1 },      // s between shots
  shot_speed: { value: 60, min: 10, max: 200, step: 5 },          // px/s

  swarm_time: { value: 300, min: 30, max: 1200, step: 5 },        // s: a flock of bats sweeps in
  swarm_count: { value: 40, min: 5, max: 150, step: 5 },

  boss_hp: { value: 3500, min: 100, max: 20000, step: 100 },
  boss_speed: { value: 22, min: 5, max: 80, step: 1 },
  boss_damage: { value: 18, min: 0, max: 80, step: 1 },
  boss_burst: { value: 3.2, min: 0.8, max: 10, step: 0.1 },       // s between shot bursts
  boss_summon: { value: 9, min: 2, max: 30, step: 0.5 },          // s between bat summons

  // Weapons (level 1 values; each level adds as the cards say)
  spark_damage: { value: 10, min: 1, max: 80, step: 1 },
  spark_cooldown: { value: 1.1, min: 0.1, max: 4, step: 0.05 },
  spark_speed: { value: 150, min: 40, max: 400, step: 5 },
  blade_damage: { value: 9, min: 1, max: 80, step: 1 },
  blade_radius: { value: 26, min: 10, max: 80, step: 1 },
  blade_spin: { value: 3.2, min: 0.5, max: 10, step: 0.1 },       // rad/s
  ring_damage: { value: 5, min: 1, max: 60, step: 1 },
  ring_tick: { value: 0.5, min: 0.1, max: 2, step: 0.05 },        // s between burns
  ring_fraction: { value: 0.42, min: 0.1, max: 1, step: 0.01 },   // share of the light that burns
  wax_damage: { value: 6, min: 1, max: 60, step: 1 },
  wax_cooldown: { value: 2.4, min: 0.3, max: 8, step: 0.1 },
  wax_radius: { value: 13, min: 4, max: 50, step: 1 },
  wax_duration: { value: 2.6, min: 0.5, max: 8, step: 0.1 },

  // Drops and the workshop
  gold_chance: { value: 0.03, min: 0, max: 1, step: 0.01 },
  heal_chance: { value: 0.006, min: 0, max: 0.2, step: 0.002 },
  heal_amount: { value: 25, min: 1, max: 100, step: 1 },
  meta_cost: { value: 30, min: 1, max: 300, step: 1 },            // gold for workshop level 1; x level after
};
