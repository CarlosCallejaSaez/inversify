import "reflect-metadata"; // Importa reflect-metadata para soportar los decoradores
import { container } from "./inversify.config"; // Importa el contenedor configurado
import { Warrior } from "./interfaces";

// Obtén una instancia de Warrior (que será un Ninja) del contenedor
const ninja = container.get<Warrior>("Warrior");

// Llama al método fight del Ninja, que usa el Katana inyectado
console.log(ninja.fight());  // Output: cut!