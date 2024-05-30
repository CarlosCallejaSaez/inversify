import { Container } from "inversify";
import { Warrior, Weapon } from "./interfaces";
import { Ninja } from "./ninja";
import { Katana } from "./katana";

// Crea un nuevo contenedor
const container = new Container();

// Enlaza la interfaz Warrior a la clase Ninja
container.bind<Warrior>("Warrior").to(Ninja);

// Enlaza la interfaz Weapon a la clase Katana
container.bind<Weapon>("Weapon").to(Katana);

export { container };