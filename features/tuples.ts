const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};

// Type Alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 30];
const tea: Drink = ["black", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsePower: 400,
    weight: 3354
};
