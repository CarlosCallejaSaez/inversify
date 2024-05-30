import { injectable } from "inversify";
import { Weapon } from "./interfaces";

// La clase Katana implementa la interfaz Weapon
@injectable() // Decorador que marca la clase como inyectable
export class Katana implements Weapon {
    public hit() {
        return "cut!"; // Implementación del método hit
    }
}