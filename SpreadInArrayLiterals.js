const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

// using spread operator to concat multiple arrays and storing it into a new array.
const mollusca = [...cephalopods,...gastropods];

const invertebrates = [...cnidaria, ...cephalopods, ...gastropods];