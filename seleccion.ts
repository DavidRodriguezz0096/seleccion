class Persona {
    nombre: string;
    apellido: string;
    numeroPasaporte: string;
    fechaNacimiento: Date;
  
    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: Date) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.numeroPasaporte = numeroPasaporte;
      this.fechaNacimiento = fechaNacimiento;
    }
  
    getEdad(): number {
      const now = new Date();
      const diff = now.getTime() - this.fechaNacimiento.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
  }
  
  class Futbolista extends Persona {
    posicion: string;
  
    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: Date, posicion: string) {
      super(nombre, apellido, numeroPasaporte, fechaNacimiento);
      this.posicion = posicion;
    }
  
    jugarPartido() {
      console.log(`El futbolista ${this.nombre} ${this.apellido} está jugando un partido.`);
    }
  }
  
  class Entrenador extends Persona {
    estrategia: string;
  
    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: Date, estrategia: string) {
      super(nombre, apellido, numeroPasaporte, fechaNacimiento);
      this.estrategia = estrategia;
    }
  
    dirigirEntrenamiento() {
      console.log(`El entrenador ${this.nombre} ${this.apellido} está dirigiendo un entrenamiento.`);
    }
  }
  
  class Masajista extends Persona {
    especialidad: string;
  
    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: Date, especialidad: string) {
      super(nombre, apellido, numeroPasaporte, fechaNacimiento);
      this.especialidad = especialidad;
    }
  
    darMasaje() {
      console.log(`El masajista ${this.nombre} ${this.apellido} está dando un masaje.`);
    }
  }
  
  class Equipo {
    futbolistas: Futbolista[];
    entrenador: Entrenador;
    masajista: Masajista;
  
    constructor(futbolistas: Futbolista[], entrenador: Entrenador, masajista: Masajista) {
        this.futbolistas = futbolistas;
        this.entrenador = entrenador;
        this.masajista = masajista;
      }
    
      entrenar() {
        this.entrenador.dirigirEntrenamiento();
        for (const futbolista of this.futbolistas) {
          futbolista.jugarPartido();
        }
      }
    }
    const messi = new Futbolista("Lionel", "Messi", "123456", new Date(1987, 6, 24), "Delantero");
    const alvarez = new Futbolista("Julian", "Alvarez", "234567", new Date(2000, 1, 31), "Delantero");
    const scaloni = new Entrenador("Lionel", "Scaloni", "345678", new Date(1978, 5, 16), "4-3-3");
    const masajista = new Masajista("Juan", "Perez", "456789", new Date(1985, 8, 10), "Masajes relajantes");

    const equipo = new Equipo([messi, alvarez], scaloni, masajista);
    equipo.entrenar();

  