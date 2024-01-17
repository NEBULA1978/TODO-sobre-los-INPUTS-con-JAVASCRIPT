// Trucos Javascript

// Utilizando flat y flatMap

// Definiendo un array 'data' con elementos mixtos
const data = [1, 2, "hola mundo", { id: 1, name: 'yandrak' }, [1, { id: 2, name: "youtube" }], { id: 3, name: "javascript" }];

// Utilizando flat para aplanar el array
const flattenedData = data.flat();

// Utilizando flatMap para aplanar y mapear el array
const flatMappedData = data.flatMap(item => Array.isArray(item) ? item : [item]);

// Logging el array original
console.log("Array original:", data);

// Logging el array aplanado
console.log("Array aplanado:", flattenedData);

// Logging el array aplanado y mapeado
console.log("Array aplanado y mapeado:", flatMappedData);

console.log(data.flat().map(d => typeof(d) === "object"))
console.table(data.flat().map(d => typeof(d) === "object"))