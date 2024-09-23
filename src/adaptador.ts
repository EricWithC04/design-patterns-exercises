import { Equipo, Tipo, Inventario } from "./types/types-exercise4";

class InventarioViejo {
    private equipos: Array<Equipo> = [];

    public agregarItem(nombre: string, tipo: Tipo, estado: string): void {
        this.equipos.push({ nombre, tipo, estado });
    }

    public verEquipos(): Array<Equipo> {
        return this.equipos;
    }
}

class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo(nombre: string, tipo: Tipo, estado: string): void {
        return this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    public listarEquipos(): Array<Equipo> {
        return this.inventarioViejo.verEquipos();
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Notebook HP", "Portátil", "en reparación");
adaptador.agregarEquipo("Notebook Asus", "Portátil", "disponible");
console.log(adaptador.listarEquipos());