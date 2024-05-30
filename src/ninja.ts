import { injectable, inject } from "inversify";
import { Warrior, Weapon } from "./interfaces";

// La clase Ninja implementa la interfaz Warrior
@injectable() // Decorador que marca la clase como inyectable
export class Ninja implements Warrior {
    private _katana: Weapon;

    // El constructor inyecta una instancia de Weapon usando el decorador @inject
    constructor(@inject("Weapon") katana: Weapon) {
        this._katana = katana;
    }

    public fight() {
        return this._katana.hit(); // Usa el método hit de Weapon
    }
}