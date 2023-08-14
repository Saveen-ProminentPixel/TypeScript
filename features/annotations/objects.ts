const profile = {
    name: "alex",
    age: 24,
    city: "Surat",
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const {age}: {age: number} = profile;
const {coords: {lat, lng}}: {coords: {lat: number; lng: number}} = profile;
const {city, name}: {city: string; name: string} = profile;
