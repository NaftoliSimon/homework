// export interface WeatherServerProps {
//     // id: number;
//     // name: string;
//     // username: string;
//     // email: string;
//     // website: string;
//     // company: {
//     //   name: string;
//     //   catchPhrase: string;
//     //   bs: string;
//     // }
//     base: string;
//     clouds: {
//         all: number;
//     }
//     cod: number
//     coord: { lon: number, lat: number }
//     dt: number
//     id: number
//     main: {}/*{ temp: number; feels_like: number; temp_min: number; temp_max: number; pressure: number; temp: number;
//         temp_max: number;
//         temp_min: number; }*/
//     name: string;
//     sys: { type: 1, id: 4896, country: "US", sunrise: 1611058097, sunset: 1611096842 }
//     timezone: number
//     visibility: number
//     weather: []
//     description: "few clouds"
//     icon: "02d"
//     id: 801
//     main: "Clouds"
//     wind: { speed: number, deg: number }
// }

export interface Weather {
    main: {
        temp: number;
    }
    name: string;
    weather: [{
        description: string,
        icon: string
    }]

}
