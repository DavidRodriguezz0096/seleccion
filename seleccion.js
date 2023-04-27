var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, numeroPasaporte, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroPasaporte = numeroPasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }
    Persona.prototype.getEdad = function () {
        var now = new Date();
        var diff = now.getTime() - this.fechaNacimiento.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    };
    return Persona;
}());
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, apellido, numeroPasaporte, fechaNacimiento, posicion) {
        var _this = _super.call(this, nombre, apellido, numeroPasaporte, fechaNacimiento) || this;
        _this.posicion = posicion;
        return _this;
    }
    Futbolista.prototype.jugarPartido = function () {
        console.log("El futbolista ".concat(this.nombre, " ").concat(this.apellido, " est\u00E1 jugando un partido."));
    };
    return Futbolista;
}(Persona));
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, numeroPasaporte, fechaNacimiento, estrategia) {
        var _this = _super.call(this, nombre, apellido, numeroPasaporte, fechaNacimiento) || this;
        _this.estrategia = estrategia;
        return _this;
    }
    Entrenador.prototype.dirigirEntrenamiento = function () {
        console.log("El entrenador ".concat(this.nombre, " ").concat(this.apellido, " est\u00E1 dirigiendo un entrenamiento."));
    };
    return Entrenador;
}(Persona));
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, apellido, numeroPasaporte, fechaNacimiento, especialidad) {
        var _this = _super.call(this, nombre, apellido, numeroPasaporte, fechaNacimiento) || this;
        _this.especialidad = especialidad;
        return _this;
    }
    Masajista.prototype.darMasaje = function () {
        console.log("El masajista ".concat(this.nombre, " ").concat(this.apellido, " est\u00E1 dando un masaje."));
    };
    return Masajista;
}(Persona));
var Equipo = /** @class */ (function () {
    function Equipo(futbolistas, entrenador, masajista) {
        this.futbolistas = futbolistas;
        this.entrenador = entrenador;
        this.masajista = masajista;
    }
    Equipo.prototype.entrenar = function () {
        this.entrenador.dirigirEntrenamiento();
        for (var _i = 0, _a = this.futbolistas; _i < _a.length; _i++) {
            var futbolista = _a[_i];
            futbolista.jugarPartido();
        }
    };
    return Equipo;
}());
var messi = new Futbolista("Lionel", "Messi", "123456", new Date(1987, 6, 24), "Delantero");
var alvarez = new Futbolista("Julian", "Alvarez", "234567", new Date(2000, 1, 31), "Delantero");
var scaloni = new Entrenador("Lionel", "Scaloni", "345678", new Date(1978, 5, 16), "4-3-3");
var masajista = new Masajista("Juan", "Perez", "456789", new Date(1985, 8, 10), "Masajes relajantes");
var equipo = new Equipo([messi, alvarez], scaloni, masajista);
equipo.entrenar();
