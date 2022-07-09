// export default interface keys {
//     [key: string]: string
//     KeyW: 'forward',
//     KeyS: 'backward',
//     KeyA: 'left',
//     KeyD: 'right',
//     Space: 'jump',
// }

interface mass {
    massValue: number;
    massExponent: number;
}

interface PlanetResponse {
    alternativeName: string;
    // aphelion: number;
    // argPeriapsis: number;
    // avgTemp: number;
    // axialTilt: number;
    // bodyType: string;
    // density: number;
    // dimension: string;
    // discoveredBy: string;
    // discoveryDate: string;
    // eccentricity: number;
    // englishName: string;
    // equaRadius: number;
    // escape: number;
    // flattening: number;
    // gravity: number;
    // id: string;
    // inclination: number;
    // isPlanet: boolean;
    // longAscNode: number;
    // mainAnomaly: number;
    // mass: mass;
    // meanRadius: number;
    // name: string;
    // perihelion: number;
    // polarRadius: number;
    // semimajorAxis: number;
    // sideralOrbit: number;
    // sideralRotation: number;
}

export type { PlanetResponse }