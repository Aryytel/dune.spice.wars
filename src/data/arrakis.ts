import type { VillageTrait, Resource, SpecialRegion } from './types';

// ──────────────────────────────────────────────
// Village Traits
// ──────────────────────────────────────────────

export const villageTraits: VillageTrait[] = [
  {
    id: 'connections',
    name: 'Connections',
    effects: ['-5% Authority cost to annex a village'],
  },
  {
    id: 'desert-miners',
    name: 'Desert Miners',
    effects: ['+8 Plascrete production'],
  },
  {
    id: 'glass-sculptors',
    name: 'Glass Sculptors',
    effects: ["Gain 20% of the village's Plascrete production as Solari production"],
  },
  {
    id: 'handymen',
    name: 'Handymen',
    effects: [
      '-50% Buildings construction cost',
      'New Building slots cost -50% in this Village',
    ],
  },
  {
    id: 'scavenger-network',
    name: 'Scavenger Network',
    effects: ['Gain 20 Solari per enemy Unit dying in ally territory'],
  },
  {
    id: 'scientists',
    name: 'Scientists',
    effects: [
      '+1 Research Hub limit',
      '+30% Research Hub resource production',
    ],
  },
  {
    id: 'strong-network',
    name: 'Strong Network',
    effects: ['+1 Intel production'],
  },
  {
    id: 'strong-willed',
    name: 'Strong-Willed',
    effects: ['+2 Manpower production'],
  },
  {
    id: 'way-of-the-desert',
    name: 'Way of the Desert',
    effects: ['+20% Experience gains for all your military Units'],
  },
  {
    id: 'merchants',
    name: 'Merchants',
    effects: ['+6 Solari production'],
  },
];

// ──────────────────────────────────────────────
// Resources
// ──────────────────────────────────────────────

export const resources: Resource[] = [
  {
    id: 'spice',
    name: 'Spice',
    info: [
      '+ The most valuable resource in the game - used to both generate Solari at a variable exchange rate and pay the Imperial Spice Tax',
      '+ Spice Fields with harvesters on them will generate Spice, but will also be attacked by Sandworms intermittedly',
      '+ If set to Auto-Recall, harvesters will generate -5% Spice but will attempt to automatically recall itself to the village when attacked by a Sandworm. Note that sometimes it will still be destroyed even on Auto-Recall.',
      '+ Can be traded with other factions',
    ],
  },
  {
    id: 'solari',
    name: 'Solari',
    info: [
      '+ Solari is the main currency on Arrakis and is used to pay for a variety of things including Units and Buildings.',
      '+ Primarily gained from selling Spice',
      '+ By default, your Main Base generates +30 Solari',
      '+ Can be traded with other factions',
    ],
    deficitEffects: [
      '-50% Knowledge',
      '-100% Agent recruitment speed',
      '-5 Landsraad Standing',
    ],
  },
  {
    id: 'plascrete',
    name: 'Plascrete',
    info: [
      '+ Plascrete is required to build and maintain all Buildings within Villages and Main Bases.',
      '+ Primarily gained from Plascrete Factories',
      '+ By default, your Main Base generates +20 Plascrete',
      '+ Can be traded with other factions',
      '− No more than 5000 Plascrete can be stockpiled at any given time',
    ],
    deficitEffects: [
      '+50% Buildings Solari Upkeep',
      '-50% Buildings construction speed',
    ],
  },
  {
    id: 'manpower',
    name: 'Manpower',
    info: [
      '+ Manpower is required to recruit and maintain Units',
      '+ Primarily gained from Recruitment Offices and Agents assigned to Spacing Guild Infiltration',
      '+ By default, your Main Base generates +10 Manpower',
      '− No more than 500 Manpower can be stockpiled at any given time',
    ],
    deficitEffects: [
      '-100% health regeneration on Units',
    ],
  },
  {
    id: 'fuelCells',
    name: 'Fuel Cells',
    info: [
      '+ Fuel Cells are the main power source used on Arrakis. They are used to operate vehicles such as Harvesters and Drones, as well as some Buildings',
      '+ Primarily gained by building Fuel Cell Factories',
      '+ By default, your Main Base generates +10 Fuel Cells',
    ],
  },
  {
    id: 'water',
    name: 'Water',
    info: [
      '+ Water is essential for life, and a rare resource on Arrakis. It is mainly used to supply controlled Villages as well as recruit and maintain Units',
      '+ Primarily gained by building Wind Traps',
    ],
    deficitEffects: [
      '+50% Supply drain',
      '-50% Manpower production',
      'Unrest and Rebellion may take place in your Villages',
    ],
  },
  {
    id: 'authority',
    name: 'Authority',
    info: [
      "+ Authority represents a Faction's leadership and reach over the regions of Arrakis",
      '+ Primarily gained by assigning Agents to Arrakis Infiltration',
      '+ Used to take control of Villages',
      '+ By default, your Main Base generates +4 Authority',
      '− No more than 500 Authority can be stockpiled at any given time',
    ],
  },
  {
    id: 'knowledge',
    name: 'Knowledge',
    info: [
      "+ Knowledge determines how quickly a Faction's Developments are researched",
      '+ Gained from building Research Hubs, the Research Center or Research Agreement Treaties',
    ],
  },
  {
    id: 'influence',
    name: 'Influence',
    info: [
      '+ Influence may be spent to grant votes in the Landsraad Council',
      '+ Primarily gained from building Listening Posts and assigning Agents to Landsraad Infiltration',
    ],
  },
  {
    id: 'intel',
    name: 'Intel',
    info: [
      '+ Intel is used to launch Espionage Operations',
      '+ Primarily gained from Agents and building Data Centers',
      '− No more than 1000 Intel can be stockpiled at any given time',
    ],
  },
  {
    id: 'commandPoints',
    name: 'Command Points',
    info: [
      '+ Command Points limit the size of your army',
      '+ By default, your Main Base grants you 22 Command Points',
      '+ This cap is mainly increased by researching Military Developments',
    ],
  },
  {
    id: 'hegemony',
    name: 'Hegemony',
    info: [
      "+ Hegemony is the reflection of a Faction's overall power over Dune. Some thresholds will unlock new abilities and ultimate allow you to win the game!",
      '+ A high Landsraad Standing will grant your Faction several buffs while a low Landsraad Standing can have severe penalties',
      '+ The exact Landsraad Standing effects can be seen below:',
    ],
  },
  {
    id: 'landsraad',
    name: 'Landsraad Standing',
    info: [
      "+ Landsraad Standing represents your Faction's current political power",
      '+ A high Landsraad Standing will grant your Faction several buffs while a low Landsraad Standing can have severe penalties',
      '+ The exact Landsraad Standing effects can be seen below:',
    ],
    landsraadTiers: [
      {
        range: '0-49',
        effects: [
          '-50% CHOAM Spice exchange rate',
          '100% Votes',
          '-5 Influence',
          'Targeted by Landsraad Guard every 10 days',
        ],
      },
      {
        range: '50-99',
        effects: [
          '-25% CHOAM Spice exchange rate',
          '-50 Votes',
          '-5 Influence',
        ],
      },
      {
        range: '100-199',
        effects: [
          '-20% CHOAM Spice exchange rate',
          '-20 Votes',
          '-2 Influence',
        ],
      },
      {
        range: '200-299',
        effects: ['+200 Hegemony'],
      },
      {
        range: '300-399',
        effects: [
          '+10% CHOAM Spice exchange rate',
          '+20 Votes',
          '+2 Influence',
          '+600-800 Hegemony',
        ],
      },
      {
        range: '400-500',
        effects: [
          '+20% CHOAM Spice exchange rate',
          '+30 Votes',
          '+3 Influence',
          '+1400 Hegemony',
        ],
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Special Regions
// ──────────────────────────────────────────────

export const specialRegions: SpecialRegion[] = [
  {
    id: 'acidLakes',
    name: 'Acid Lakes',
    effects: [
      'Ground units lose -10% Health daily',
      '+100% Research Hub production',
    ],
  },
  {
    id: 'crescent',
    name: 'Crescent Ridge',
    effects: [
      '+100% Dew Collector production',
      'Fremen only: +100% Windtrap production',
    ],
  },
  {
    id: 'volcano',
    name: 'Great Volcano',
    effects: [
      'Allows Fuel Cell Factory construction',
      '+100% Fuel Cell Factory production',
      'Fremen only: Allows Ceremonial Caves construction',
      'Fremen only: +100% Ceremonial Caves production',
    ],
  },
  {
    id: 'imperialBasin',
    name: 'Imperial Basin',
    effects: [
      '+100% Recruitment Center production',
    ],
  },
  {
    id: 'moonDew',
    name: 'Moon Dew Vale',
    effects: [
      'Ground units lose Supply at 50% speed',
      'Village buildings consume no Water',
    ],
  },
  {
    id: 'idaho',
    name: 'Mount Idaho',
    effects: [
      '+200% Plascrete Factory production',
    ],
  },
  {
    id: 'observatory',
    name: 'Observatory Mountain',
    effects: [
      'Allows Data Center construction',
      'Allows Listening Post construction',
      '+50% Data Center production',
      '+50% Listening Post production',
    ],
  },
  {
    id: 'polar',
    name: 'Polar Sink',
    note: 'Always located at map center',
    effects: [
      'Allows Water Extractor construction',
    ],
  },
  {
    id: 'sandFall',
    name: 'Sand Fall',
    effects: [
      'Converts 6% of Village Solari upkeep into Knowledge',
    ],
  },
  {
    id: 'shield',
    name: 'Shield Wall',
    effects: [
      '-50% Building upkeep in this region',
    ],
  },
  {
    id: 'spaceWreck',
    name: 'Space Wreck',
    effects: [
      'Space Craft Wreck discovery appears periodically',
      'Spacing Guild Branch provides +1 Guild Favor',
      'Fremen only: Recycling Plant provides +1 Spaceship Parts',
    ],
  },
  {
    id: 'desolation',
    name: 'The Desolation',
    effects: [
      'Cannot be owned',
      '+400% Supply drain',
      'Ground units lose -40% Health daily',
      '-40% Ground unit Speed',
    ],
  },
  {
    id: 'riches',
    name: 'Well of Riches',
    effects: [
      '+100% Processing Plant production',
    ],
  },
  {
    id: 'rift',
    name: 'White Rift',
    effects: [
      '+100% Crafts Workshop production',
    ],
  },
  {
    id: 'nest',
    name: 'Worm Nest',
    effects: [
      'Military units attract Sandworms 50% faster',
      '+25% Spice production in the region',
    ],
  },
];
