export interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  groupAffiliation: string;
  relatives: string;
}

export interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

export const HeroSchema = {
  name: 'Hero',
  properties: {
    id: 'int',
    name: 'string?',
    slug: 'string?',
    powerstats: 'Powerstat',
    appearance: 'Appereance',
    biography: 'Biography',
    work: 'Work',
    connections: 'Connections',
    images: 'Images',
  },
};

export const PowerstatsSchema = {
  name: 'Powerstat',
  properties: {
    intelligence: 'int?',
    strength: 'int?',
    speed: 'int?',
    durability: 'int?',
    power: 'int?',
    combat: 'int?',
  },
};

export const AppereanceSchema = {
  name: 'Appereance',
  properties: {
    gender: 'string?',
    race: 'string?',
    height: 'string[]',
    weight: 'string[]',
    eyeColor: 'string?',
    hairColor: 'string?',
  },
};

export const BiographySchema = {
  name: 'Biography',
  properties: {
    fullName: 'string?',
    alterEgos: 'string?',
    aliases: 'string[]',
    placeOfBirth: 'string?',
    firstAppearance: 'string?',
    publisher: 'string?',
    alignment: 'string?',
  },
};
export const WorkSchema = {
  name: 'Work',
  properties: {
    occupation: 'string?',
    base: 'string?',
  },
};

export const ConnectionsSchema = {
  name: 'Connections',
  properties: {
    groupAffiliation: 'string?',
    relatives: 'string?',
  },
};

export const ImagesSchema = {
  name: 'Images',
  properties: {
    xs: 'string?',
    sm: 'string?',
    md: 'string?',
    lg: 'string?',
  },
};
