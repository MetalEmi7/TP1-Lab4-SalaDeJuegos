webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n    <body> <app-menu-strip [puntosTotales]=\"unJuego.puntajeTotal\" ></app-menu-strip>\r\n\r\n    <div class=\"container\" align=\"center\" >\r\n        <button class=\"btn btn-primary btn-lg\" routerLink=\"/salaDeJuegos\" >Volver atras</button>\r\n    </div>\r\n\r\n<div class=\"container row justify-content-md-center centroDePagina2\">\r\n    \r\n        <div align=\"Center\" class=\"col sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/AdivinaElNumero.jpg\" alt=\"Card image cap\" width=\"500\" height=\"200\" >\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-text\">{{unJuego.nombreJuego}} </h4>\r\n                Descripcion: {{unJuego.descripcion}}\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n    <div class=\"alert bg-primary col sm-6\">\r\n        <div align=\"center\" class=\"col sm-6\">\r\n\r\n            <div class=\"clearfix\">\r\n                <p class=\"text-white float-left\"><strong>Adivine el numero:</strong></p>\r\n                <p class=\"text-white float-right text-dark\" ><strong>Intentos: {{intentos_Usuario}} / {{intentos_Sistema}}</strong></p>\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\" >\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Introduzca un numero\" *ngIf=\"this.unJuego.juega\" name=\"TxtNumUser\" [(ngModel)]=\"numero_Usuario\" (keypress)=\"keyPressEnter($event)\" >\r\n                </div> \r\n                \r\n                <div class=\"col-sm-3\">\r\n                <button class=\"btn btn-success btn-block\" name=\"BtnAdivinar\" (click)=\"Adivinar()\" *ngIf=\"this.unJuego.juega\">Adivinar</button>  \r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                <button class=\"btn btn-info btn-block text-dark\" name=\"BtnNuevo\" (click)=\"GenerarNum()\" *ngIf=\"!this.unJuego.juega\"><strong>Juego nuevo</strong></button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <br>\r\n        <h5 align=\"center\" id=\"LblMensaje\" class=\"text-white\">{{unJuego.mensaje}}</h5>\r\n        <br>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n    </body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entidades_juego__ = __webpack_require__("../../../../../src/app/entidades/juego.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent() {
        this.Modo_Testeo = true;
        this._numMax = 10;
        this._numMin = 1;
        this.intentos_Usuario = 0;
        this.intentos_Sistema = 3;
        this.event_emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unJuego = new __WEBPACK_IMPORTED_MODULE_1__entidades_juego__["a" /* Juego */](localStorage.getItem("jugador"), "Adivina el juego", "Debe adivinar el numero secreto del 1 al 10, tiene como maximo 3 intentos para lograrlo", "Haga click en el boton 'Juego nuevo' para comenzar.");
        //this.GenerarNum();
    }
    AdivinaElNumeroComponent.prototype.GenerarNum = function () {
        this.puntos = 0;
        this.puntos_Negativos = 0;
        this.intentos_Usuario = 0;
        this.unJuego.juega = true;
        this.numero_Secreto = Math.floor(Math.random() * (this._numMax - this._numMin + 1)) + 1;
        this.unJuego.mensaje = "Escriba el numero correcta y haga click en 'verificar' o precione la tecla 'enter'.";
        this._Inspeccion();
    };
    AdivinaElNumeroComponent.prototype.Adivinar = function () {
        if (this.intentos_Usuario < this.intentos_Sistema && this.unJuego.juega == true) {
            if (this.numero_Usuario == this.numero_Secreto) {
                this.puntos += 50 - this.puntos_Negativos;
                //this.event_emitter.emit(this.unJuego);
                this.unJuego.mensaje = "Muy bien!!! era el numero " + this.numero_Secreto + ", ";
                this.unJuego.resultado = true;
                this.finDelJuego();
            }
            else {
                this.puntos_Negativos -= 5;
                if (this.intentos_Usuario < 2) {
                    if (this.numero_Usuario < this.numero_Secreto) {
                        document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                        this.unJuego.mensaje = "Numero incorrecto!: es mas alto.";
                    }
                    else {
                        document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                        this.unJuego.mensaje = "Numero incorrecto!: es mas bajo.";
                    }
                }
                else {
                    this.unJuego.mensaje = "Usted perdio, era el numero " + this.numero_Secreto + ", ";
                    this.unJuego.resultado = false;
                }
            }
            this.intentos_Usuario++;
            this.numero_Usuario = null;
        }
        if (this.intentos_Usuario >= this.intentos_Sistema && this.unJuego.juega == true) {
            this.finDelJuego();
        }
    };
    AdivinaElNumeroComponent.prototype.resetVariables = function () {
        this.numero_Usuario = "";
        this.numero_Secreto = "";
    };
    AdivinaElNumeroComponent.prototype.finDelJuego = function () {
        this.unJuego.juega = false;
        this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos").toString());
        this.unJuego.puntajeTotal += this.puntos;
        localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());
        document.getElementById("LblMensaje").setAttribute("class", "text-white");
        if (this.intentos_Usuario == 0)
            this.unJuego.mensaje += "adivinaste al primer intento, sumas " + this.puntos + " Pts a tu cuenta. ";
        else
            this.unJuego.mensaje += "sumo un total de " + this.puntos + " Pts. ";
        this.unJuego.mensaje += "Haga click en el boton 'Juego nuevo' para jugar de nuevo.";
        this.resetVariables();
    };
    AdivinaElNumeroComponent.prototype._Inspeccion = function () {
        if (this.Modo_Testeo == true) {
            console.log("numero_Usuario: " + this.numero_Usuario);
            console.log("numero_Secreto: " + this.numero_Secreto);
            console.log("unJuego: " + this.unJuego);
        }
    };
    AdivinaElNumeroComponent.prototype.keyPressEnter = function (e) {
        if (e.key == "Enter") {
            this.Adivinar();
        }
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "event_emitter", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/agilidad/agilidad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agilidad/agilidad.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n      <body> <app-menu-strip [puntosTotales]=\"unJuego.puntajeTotal\" ></app-menu-strip>\r\n      \r\n            <div class=\"container\" align=\"center\" >\r\n                        <button class=\"btn btn-primary btn-lg\" routerLink=\"/salaDeJuegos\" >Volver atras</button>\r\n                </div>\r\n\r\n<div class=\"container centroDePagina2\">\r\n<div class=\"row justify-content-md-center\">\r\n\r\n      <div class=\"col sm-6\">\r\n      <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/Agilidad.jpg\" alt=\"Card image cap\" width=\"500\" height=\"200\" >\r\n            <div class=\"card-body\">\r\n                  <h4 class=\"card-text\">{{unJuego.nombreJuego}} </h4>\r\n                  Descripcion: {{unJuego.descripcion}}\r\n            </div>\r\n      </div>\r\n      </div>\r\n\r\n\r\n\r\n      \r\n      <div class=\"alert bg-primary col sm-6\">\r\n      <div align=\"center\" class=\"col sm-6\">\r\n\r\n            \r\n            <p class=\"text-white\" align=\"left\"><strong> Operacion a resolver </strong></p> \r\n            \r\n            <div class=\"justify-content alert bg-dark\">\r\n                  <div class=\"row md-center\">\r\n                        <div class=\"col col-lg-2\">  <h1 class=\"text-white\">{{numUno}}</h1>           </div>\r\n                        <div class=\"col-md-auto\">  <h1 class=\"text-white\">{{operador}}</h1>          </div>\r\n                        <div class=\"col col-lg-2\">  <h1 class=\"text-white\">{{numDos}}</h1>           </div>\r\n                  </div>\r\n            </div>\r\n\r\n            <div class=\"clearfix\">\r\n                  <p class=\"text-white float-left\"><strong>Resultado:</strong></p>\r\n                  <p class=\"text-white float-right text-warning\" ><strong>Pts: {{puntos}} </strong></p>\r\n                  <p class=\"text-white text-dark\"><strong>Intentos: {{intentos_Usuario}} / {{intentos_Sistema}} </strong></p>\r\n            </div> \r\n\r\n\r\n            <div class=\"row\">\r\n                  <div class=\"col-sm-9\" >                  \r\n                  <input class=\"form-control\" [(ngModel)]=\"resultadoUsuario\" type=\"text\" placeholder=\"Ingrese resultado\" name=\"numeroIngresado\" (keypress)=\"keyPressEnter($event)\"/>\r\n                  </div>\r\n                        \r\n                  <div class=\"col-sm-3\">  \r\n                  <button *ngIf=\"unJuego.juega\"  (click)=\"verificar()\" class=\"btn btn-success btn-block\"> <strong>Verificar {{Tiempo}}</strong> </button>\r\n                  <button *ngIf=\"!unJuego.juega\" (click)=\"prepararJuego()\" class=\"btn btn-info btn-block text-dark\"><strong>Nuevo</strong></button>\r\n                  </div>\r\n\r\n            </div>            \r\n\r\n            <br>\r\n            <h5 align=\"center\" id=\"LblMensaje\" class=\"text-white\" >{{unJuego.mensaje}}</h5>\r\n            <br>\r\n            \r\n      </div>\r\n      </div>\r\n</div>\r\n</div> \r\n\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/agilidad/agilidad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entidades_juego__ = __webpack_require__("../../../../../src/app/entidades/juego.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgilidadComponent = (function () {
    // QUE ES ESTO?
    //private subscription: Subscription;
    function AgilidadComponent() {
        this.event_emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.numUno = 0;
        this.operador = "?";
        this.numDos = 0;
        this.ocultarVerificar = false;
        this.intentos_Usuario = 0;
        this.intentos_Sistema = 5;
        this.aciertosPositivos = 0;
        this.event_emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unJuego = new __WEBPACK_IMPORTED_MODULE_1__entidades_juego__["a" /* Juego */](localStorage.getItem("jugador"), "Agilidad aritmetica", "Debe calcular y responder correcta y rapidamente la operacion que el sistema tiene preparado para usted.", "Haga clic en el TextBox y presione la tecla 'Enter' para iniciar el juego, Para verificar el resultado vuelva a precionar la tecla 'Enter' hasta que termine el juego.");
    }
    AgilidadComponent.prototype.prepararJuego = function () {
        this.puntos = 0;
        this.unJuego.juega = true;
        this.intentos_Usuario = 0;
        this.unJuego.mensaje = "Para verificar el resultado vuelva a precionar la tecla 'Enter'.";
        //this.Tiempo = 7;
        this.generarCalculo();
        /*
        this.repetidor = setInterval(()=>
        {
            this.Tiempo--;
            console.log("llega", this.Tiempo);
    
            if(this.Tiempo == 0)
            {this.reiniciarCuentaAtras();}
        }, 900);
        */
    };
    AgilidadComponent.prototype.generarCalculo = function () {
        console.log("entro 3");
        this.aux_operador = Math.floor(Math.random() * ((4 + 1) - 1) + 1);
        switch (this.aux_operador) {
            case 1:
                this.operador = "X";
                this.numUno = Math.floor(Math.random() * ((100 + 1) - 1) + 1);
                this.numDos = Math.floor(Math.random() * ((10 + 1) - 1) + 1);
                break;
            case 2:
                this.operador = "-";
                this.numUno = Math.floor(Math.random() * ((100 + 1) - 1) + 1);
                this.numDos = Math.floor(Math.random() * ((100 + 1) - 1) + 1);
                break;
            case 3:
                this.operador = "+";
                this.numUno = Math.floor(Math.random() * ((100 + 1) - 1) + 1);
                this.numDos = Math.floor(Math.random() * ((100 + 1) - 1) + 1);
                break;
            case 4:
                this.operador = ":";
                var bandera = true;
                while (bandera || (this.numUno % this.numDos) != 0) {
                    bandera = false;
                    this.numUno = Math.floor(Math.random() * ((100 + 1) - 1) + 1);
                    this.numDos = Math.floor(Math.random() * ((10 + 1) - 1) + 1);
                }
                break;
        }
        switch (this.operador) {
            case "X":
                this.resultadoSistema = this.numUno * this.numDos;
                break;
            case "-":
                this.resultadoSistema = this.numUno - this.numDos;
                break;
            case "+":
                this.resultadoSistema = this.numUno + this.numDos;
                break;
            case ":":
                this.resultadoSistema = this.numUno / this.numDos;
                break;
        }
        console.log("RDO: " + this.resultadoSistema);
    };
    AgilidadComponent.prototype.verificar = function () {
        if (this.intentos_Usuario < this.intentos_Sistema) {
            //this.reiniciarCuentaAtras();
            console.log("RDO: " + this.resultadoSistema);
            if (this.resultadoUsuario == this.resultadoSistema) {
                this.puntos += 25;
                this.aciertosPositivos++;
                document.getElementById("LblMensaje").setAttribute("class", "text-white");
                this.unJuego.mensaje = "Correcto! calcule el siguiente calculo...";
            }
            else {
                document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                this.unJuego.mensaje = "Incorrecto! era " + this.resultadoSistema + " calcule el siguiente calculo...";
            }
        }
        this.intentos_Usuario++;
        this.resultadoUsuario = null;
        if (this.intentos_Usuario < this.intentos_Sistema)
            this.generarCalculo();
        if (this.intentos_Usuario >= this.intentos_Sistema) {
            this.finDelJuego();
        }
    };
    AgilidadComponent.prototype.finDelJuego = function () {
        this.unJuego.juega = false;
        this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos").toString());
        this.unJuego.puntajeTotal += this.puntos;
        localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());
        if (this.aciertosPositivos == this.intentos_Sistema) {
            this.unJuego.mensaje = "Excelente puntuacion! sumo un total de " + this.puntos + " Pts. ";
            this.unJuego.resultado = true;
        }
        else if (this.aciertosPositivos > 0) {
            this.unJuego.mensaje = "Sumo un total de " + this.puntos + " Pts. ";
            this.unJuego.resultado = true;
        }
        else {
            this.unJuego.mensaje = "Usted perdio!!! no pudo acertar ninguna cuenta. ";
            this.unJuego.resultado = false;
        }
        this.unJuego.mensaje += "Haga clic en el TextBox y presione la tecla 'Enter' o haga click en 'Nuevo' para volver a jugar.";
        this.resetVariables();
    };
    AgilidadComponent.prototype.resetVariables = function () {
        this.resultadoUsuario = null;
        this.resultadoSistema = null;
        this.numUno = 0;
        this.operador = "?";
        this.numDos = 0;
        this.aciertosPositivos = 0;
        document.getElementById("LblMensaje").setAttribute("class", "text-white");
    };
    AgilidadComponent.prototype.keyPressEnter = function (e) {
        console.log(e);
        if (e.key == "Enter") {
            if (this.unJuego.juega == false)
                this.prepararJuego();
            else {
                this.verificar();
            }
        }
    };
    return AgilidadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AgilidadComponent.prototype, "event_emitter", void 0);
AgilidadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agilidad',
        template: __webpack_require__("../../../../../src/app/agilidad/agilidad.component.html"),
        styles: [__webpack_require__("../../../../../src/app/agilidad/agilidad.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadComponent);

var _a;
//# sourceMappingURL=agilidad.component.js.map

/***/ }),

/***/ "../../../../../src/app/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "    <html>\r\n    <body> <app-menu-strip [puntosTotales]=\"unJuego.puntajeTotal\" ></app-menu-strip>\r\n        \r\n        <div class=\"container\" align=\"center\" >\r\n        <button class=\"btn btn-primary btn-lg\" routerLink=\"/salaDeJuegos\" >Volver atras</button>\r\n        </div>\r\n        \r\n        <div class=\"container row justify-content-md-center centroDePagina2\">\r\n\r\n                <div align=\"Center\" class=\"col sm-6\">\r\n                <div class=\"card mb-3\">\r\n                    <img class=\"card-img-top\" src=\"./assets/imagenes/Anagrama.jpg\" alt=\"Card image cap\" width=\"500\" height=\"200\" >\r\n                    <div class=\"card-body\">\r\n                    <h4 class=\"card-text\">{{unJuego.nombreJuego}} </h4>\r\n                    Descripcion: {{unJuego.descripcion}}\r\n                    </div>\r\n                </div>\r\n                </div>\r\n        \r\n\r\n\r\n\r\n\r\n                <div class=\"alert bg-primary col sm-6\">\r\n                <div align=\"center\" class=\"col sm-6\">\r\n\r\n                        <p class=\"text-white\" align=\"left\"><strong>Palabra mezclada</strong></p>\r\n                        <div class=\"alert bg-dark text-white\" >\r\n                        <h3>{{palabra_Mezclada}} </h3>                        \r\n                        </div> \r\n\r\n                        <div class=\"clearfix\">\r\n                        <p class=\"text-white float-left\"><strong>Escriba que palabra es:</strong></p>\r\n                        <p class=\"text-white float-right text-warning\" ><strong>Pts: {{puntos}} / 50</strong></p>\r\n                        <p class=\"text-white text-dark\"><strong>Intentos: {{intentos_Usuario}} / {{intentos_Sistema}} </strong></p>\r\n                        </div> \r\n                        \r\n                        <div class=\"row\">                       \r\n                            \r\n                        <div class=\"col-sm-9\" >\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Introduzca la palabra\" *ngIf=\"this.unJuego.juega\" name=\"TxtNumUser\" [(ngModel)]=\"palabra_Usuario\" (keypress)=\"keyPressEnter($event)\" >\r\n                        </div> \r\n                            \r\n                        <div class=\"col-sm-3\">\r\n                        <button class=\"btn btn-success btn-block BtnAzul\" name=\"BtnAdivinar\" (click)=\"verificar()\" *ngIf=\"this.unJuego.juega\">Verificar</button>  \r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                        <button class=\"btn btn-info btn-block text-dark\" name=\"BtnNuevo\" (click)=\"generarJuego()\" *ngIf=\"!this.unJuego.juega\"><strong> Juego nuevo </strong></button>\r\n                        </div>\r\n                    </div>\r\n        \r\n                <br>\r\n                <h5 align=\"center\" id=\"LblMensaje\" class=\"text-white\" >{{unJuego.mensaje}} </h5>\r\n                <br>\r\n\r\n                </div>\r\n                </div>\r\n        </div>\r\n    </body>\r\n    </html>"

/***/ }),

/***/ "../../../../../src/app/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entidades_juego__ = __webpack_require__("../../../../../src/app/entidades/juego.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service__ = __webpack_require__("../../../../../src/app/servicios/juego.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnagramaComponent = (function () {
    function AnagramaComponent(datos) {
        this.datos = datos;
        this.palabra_Usuario = "";
        this.palabra_Sistema = "";
        this.palabra_Mezclada = "****";
        this.intentos_Usuario = 0;
        this.intentos_Sistema = 5;
        this.aciertosPositivos = 0;
        this.ListaDePalabras = new Array();
        this.event_emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unJuego = new __WEBPACK_IMPORTED_MODULE_1__entidades_juego__["a" /* Juego */](localStorage.getItem("jugador"), "Anagrama", "Apareceran palabras con sus letras mezcladas, hay de descifrar 5 veces cual es la palabra correcta para sumar puntos", "Haga click en el boton 'Juego nuevo' para comenzar.");
        //this.GenerarNum();
    }
    AnagramaComponent.prototype.generarJuego = function () {
        this.puntos = 0;
        this.unJuego.juega = true;
        this.intentos_Usuario = 0;
        this.obtenerPalabra();
        this.unJuego.mensaje = "Escriba la palabra correcta y haga click en 'verificar' o precione la tecla 'enter'.";
    };
    AnagramaComponent.prototype.obtenerPalabra = function () {
        var _this = this;
        if (this.unJuego.juega == true) {
            this.datos.palabras()
                .then(function (data) {
                _this.ListaDePalabras = data;
                if (_this.ListaDePalabras.length > 0) {
                    _this.ListaDePalabras = _this.ListaDePalabras.sort(function () { return Math.random() - 0.5; });
                    _this.palabra_Sistema = _this.ListaDePalabras.pop().toUpperCase();
                    _this.mezclarLetras();
                }
            })
                .catch();
        }
    };
    AnagramaComponent.prototype.mezclarLetras = function () {
        do {
            this.palabra_Mezclada = this.palabra_Sistema.split('').sort(function () { return 0.5 - Math.random(); }).join('');
        } while (this.palabra_Mezclada == this.palabra_Sistema);
        console.log(this.palabra_Sistema);
        console.log(this.palabra_Mezclada);
    };
    AnagramaComponent.prototype.verificar = function () {
        if (this.intentos_Usuario < this.intentos_Sistema && this.unJuego.juega == true) {
            if (this.palabra_Usuario.toUpperCase() == this.palabra_Sistema.toUpperCase()) {
                this.puntos += 10;
                this.aciertosPositivos++;
                document.getElementById("LblMensaje").setAttribute("class", "text-white");
                this.unJuego.mensaje = "Palabra correcta, pruebe con esta otra palabra...";
            }
            else {
                document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                this.unJuego.mensaje = "Palabra incorrecta, era: " + this.palabra_Sistema + ", pruebe con esta otra palabra...";
            }
            this.intentos_Usuario++;
            this.palabra_Usuario = "";
            if (this.intentos_Usuario < this.intentos_Sistema)
                this.obtenerPalabra();
            console.log(this.puntos);
            if (this.intentos_Usuario >= this.intentos_Sistema) {
                this.finDelJuego();
            }
        }
    };
    AnagramaComponent.prototype.finDelJuego = function () {
        this.unJuego.juega = false;
        this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos").toString());
        this.unJuego.puntajeTotal += this.puntos;
        localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());
        if (this.aciertosPositivos == this.intentos_Sistema) {
            this.unJuego.mensaje = "Excelente puntuacion! sumo un total de " + this.puntos + " Pts. ";
            this.unJuego.resultado = true;
        }
        else if (this.aciertosPositivos > 0) {
            this.unJuego.mensaje = "Sumo un total de " + this.puntos + " Pts. ";
            this.unJuego.resultado = true;
        }
        else {
            this.unJuego.mensaje = "Usted perdio!!! no pudo acertar ninguna palabra. ";
            this.unJuego.resultado = false;
        }
        this.unJuego.mensaje += "Haga click en el boton 'Juego nuevo' para volver a comenzar.";
        this.resetVariables();
    };
    AnagramaComponent.prototype.resetVariables = function () {
        this.palabra_Usuario = "";
        this.palabra_Sistema = "";
        this.palabra_Mezclada = "****";
        this.aciertosPositivos = 0;
        document.getElementById("LblMensaje").setAttribute("class", "text-white");
    };
    AnagramaComponent.prototype.keyPressEnter = function (e) {
        if (e.key == "Enter") {
            this.verificar();
        }
    };
    AnagramaComponent.prototype.ngOnInit = function () { };
    return AnagramaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AnagramaComponent.prototype, "event_emitter", void 0);
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service__["a" /* JuegoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service__["a" /* JuegoService */]) === "function" && _b || Object])
], AnagramaComponent);

var _a, _b;
//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_juego_service__ = __webpack_require__("../../../../../src/app/servicios/juego.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servicios_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //Verificar dependencia
 //Verificar dependencia


//Router

 //Verificar dependencia
//Componente            //Verificar dependencia

//Servicios                 //Verificar dependencia




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__routing_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["a" /* Ng2SmartTableModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__servicios_juego_service__["a" /* JuegoService */],
            __WEBPACK_IMPORTED_MODULE_10__servicios_mi_http_service__["a" /* MiHttpService */],
            __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__["a" /* ArchivosJugadoresService */],
            __WEBPACK_IMPORTED_MODULE_12__servicios_jugadores_service__["a" /* JugadoresService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(jug, nomJuego, desc, mens) {
        this.nombreJuego = "_Juego";
        this.descripcion = "_Un juego para jugar";
        this.mensaje = "Esperando...";
        this.resultado = false;
        //las siguientes variables deben ser modificadas en el componente que instancia esta clase.
        this.juega = false;
        this.FechaYHora = new Date();
        this.jugador = jug;
        this.nombreJuego = nomJuego;
        this.descripcion = desc;
        this.mensaje = mens;
        this.juega = false;
    }
    Juego.prototype.toString = function () {
        return "[Juego]: " + this.nombreJuego + " [Jugador]: " + this.jugador + " - " + this.FechaYHora.toLocaleDateString() + " - " + this.FechaYHora.toLocaleTimeString() + " - " + this.resultado + " - " + this.puntajeTotal;
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n    <body>  \r\n    <div class=\"container centroDePagina2\">\r\n\r\n      <div class=\"jumbotron bg-danger\">\r\n        <h1>ERROR 404: No se ha encontrado la ruta</h1>\r\n        <hr class=\"my-4\">\r\n        <p>Es posible que haya escrito mal la ruta o que aun no se haya desarrollado esta parte de la pagina. Compruebe la ruta o comuniquese con el administrador.</p>\r\n        <p class=\"lead\">\r\n          <a class=\"btn btn-dark btn-lg text-white\" routerLink=\"/\" role=\"button\">Pagina de inicio</a>\r\n          <a class=\"btn btn-dark btn-lg text-white\" routerLink=\"/salaDeJuegos\" role=\"button\">Sala de Juegos</a>\r\n        </p>\r\n      </div>\r\n\r\n    </div>  \r\n  </body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/juego-de-colores/juego-de-colores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/juego-de-colores/juego-de-colores.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n<body> <app-menu-strip [puntosTotales]=\"unJuego.puntajeTotal\" ></app-menu-strip>\r\n    \r\n    <div class=\"container\" align=\"center\" >\r\n            <button class=\"btn btn-primary btn-lg\" routerLink=\"/salaDeJuegos\" >Volver atras</button>\r\n    </div>\r\n\r\n    <div class=\"container row justify-content-md-center centroDePagina2\">\r\n        <div class=\"col sm-6\">\r\n            <div class=\"card mb-3\">\r\n                <img class=\"card-img-top\" src=\"./assets/imagenes/JuegoColores.jpg\" alt=\"Card image cap\" width=\"500\" height=\"200\" >\r\n\r\n                <div class=\"card-body\"><h4 class=\"card-text\">{{unJuego.nombreJuego}} </h4>\r\n                    Descripcion: {{unJuego.descripcion}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col sm-6\">\r\n            <div class=\"card bg-{{colorFondo}}\">\r\n\r\n            <div class=\"card-header\" align=\"center\"> <h3>{{elSistemaPide}}</h3>\r\n            </div>\r\n\r\n            <div class=\"card-body\"> \r\n                        <div class=\"clearfix\">\r\n                        <p class=\"text-white float-right text-dark\" ><strong>Pts: {{puntos}}</strong></p>\r\n                        <p class=\"text-white text-dark\"><strong>Colores: {{intentos_Usuario}} / {{intentos_Sistema}} </strong></p>\r\n                        </div> \r\n                   \r\n                <h1 class=\"card-title text-{{colorLetra}}\" align=\"center\"> {{Palabra}} </h1>\r\n                \r\n\r\n                <hr>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Introduzca el color\" *ngIf=\"this.unJuego.juega\" id=\"TxtRespuesta\" [(ngModel)]=\"respuestaUsuario\" (keypress)=\"keyPressEnter($event)\">\r\n                <button class=\"btn btn-dark btn-block\" name=\"BtnAdivinar\" (click)=\"prepararJuego()\" *ngIf=\"!this.unJuego.juega\">Juego nuevo</button>  \r\n                <h5 align=\"center\" id=\"LblMensaje\" class=\"text-white\"><strong>{{unJuego.mensaje}}</strong></h5>  \r\n            </div>            \r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/juego-de-colores/juego-de-colores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoDeColoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entidades_juego__ = __webpack_require__("../../../../../src/app/entidades/juego.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JuegoDeColoresComponent = (function () {
    function JuegoDeColoresComponent() {
        this.respuestaUsuario = "";
        //Systema
        this.elSistemaPide = "Esperando...";
        this.colorFondo = "secondary";
        this.colorLetra = "dark";
        this.Palabra = "Negro";
        this.intentos_Usuario = 0;
        this.intentos_Sistema = 5;
        this.aciertosPositivos = 0;
        this.event_emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unJuego = new __WEBPACK_IMPORTED_MODULE_1__entidades_juego__["a" /* Juego */](localStorage.getItem("jugador"), "Juego de Colores", "Responda que color le pide el sistema 10 veces seguidas, le pedira COLOR DE FONDO, COLOR DE LA LETRA y LA PALABRA ESCRITA (mencionara un color)", "Esperando a empezar el juego...");
    }
    JuegoDeColoresComponent.prototype.prepararJuego = function () {
        this.puntos = 0;
        this.unJuego.juega = true;
        this.intentos_Usuario = 0;
        this.aciertosPositivos = 0;
        this.unJuego.mensaje = "Escriba el color que se le pide y presione la tecla 'Enter' para verificar las respuestas hasta terminar.";
        this.jugar();
    };
    JuegoDeColoresComponent.prototype.keyPressEnter = function (e) {
        if (e.key == "Enter") {
            this.verificar();
        }
    };
    //Equivalente a GenerarJugada();
    JuegoDeColoresComponent.prototype.jugar = function () {
        this.elSistemaPide = this.quePide();
        this.colorLetra = this.generarColor();
        this.colorFondo = this.generarColor();
        this.Palabra = this.quePalabra();
        while (this.colorFondo == this.colorLetra) {
            this.colorLetra = this.generarColor();
        }
    };
    JuegoDeColoresComponent.prototype.generarColor = function () {
        var aux = Math.floor(Math.random() * ((4 + 1) - 1) + 1);
        //console.log(aux);
        switch (aux) {
            case 1:
                return "primary";
            case 2:
                return "danger";
            case 3:
                return "success";
            case 4:
                return "warning";
        }
    };
    JuegoDeColoresComponent.prototype.quePalabra = function () {
        var aux = Math.floor(Math.random() * ((4 + 1) - 1) + 1);
        //console.log(aux);
        switch (aux) {
            case 1:
                return "Azul";
            case 2:
                return "Rojo";
            case 3:
                return "Verde";
            case 4:
                return "Amarillo";
        }
    };
    JuegoDeColoresComponent.prototype.quePide = function () {
        var aux = Math.floor(Math.random() * ((3 + 1) - 1) + 1);
        //console.log(aux);
        switch (aux) {
            case 1:
                return "COLOR DE FONDO";
            case 2:
                return "COLOR DE LA LETRA";
            case 3:
                return "QUE PALABRA DICE";
        }
    };
    JuegoDeColoresComponent.prototype.verificar = function () {
        this.intentos_Usuario++;
        if (this.intentos_Usuario <= this.intentos_Sistema) {
            if (this.unJuego.juega == true) {
                switch (this.elSistemaPide) {
                    case "QUE PALABRA DICE":
                        if (this.respuestaUsuario.toLowerCase() == this.Palabra.toLowerCase() && this.respuestaUsuario.toLowerCase() != "") {
                            this.puntos += 10;
                            this.aciertosPositivos++;
                            document.getElementById("LblMensaje").setAttribute("class", "text-white");
                            this.unJuego.mensaje = "Correcto!!! Ahora el siguiente color.";
                        }
                        else {
                            document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                            this.unJuego.mensaje = "Incorrecto!!! era " + this.Palabra;
                        }
                        break;
                    case "COLOR DE FONDO":
                        switch (this.colorFondo) {
                            case "primary":
                                this.respuestaSistema = "Azul";
                                break;
                            case "danger":
                                this.respuestaSistema = "Rojo";
                                break;
                            case "success":
                                this.respuestaSistema = "Verde";
                                break;
                            case "warning":
                                this.respuestaSistema = "Amarillo";
                                break;
                        }
                        if (this.respuestaUsuario.toLowerCase() == this.respuestaSistema.toLowerCase()) {
                            this.puntos += 10;
                            this.aciertosPositivos++;
                            document.getElementById("LblMensaje").setAttribute("class", "text-white");
                            this.unJuego.mensaje = "Correcto!!! Ahora el siguiente color.";
                        }
                        else {
                            document.getElementById("LblMensaje").setAttribute("class", "text-dark");
                            this.unJuego.mensaje = "Incorrecto!!! era " + this.respuestaSistema;
                        }
                        break;
                    case "COLOR DE LA LETRA":
                        switch (this.colorLetra) {
                            case "primary":
                                this.respuestaSistema = "Azul";
                                break;
                            case "danger":
                                this.respuestaSistema = "Rojo";
                                break;
                            case "success":
                                this.respuestaSistema = "Verde";
                                break;
                            case "warning":
                                this.respuestaSistema = "Amarillo";
                                break;
                        }
                        if (this.respuestaUsuario.toLowerCase() == this.respuestaSistema.toLowerCase()) {
                            this.puntos += 10;
                            this.aciertosPositivos++;
                            document.getElementById("LblMensaje").setAttribute("class", "text-white");
                            this.unJuego.mensaje = "Correcto!!! Ahora el siguiente color.";
                        }
                        else {
                            document.getElementById("LblMensaje").setAttribute("class", "text-dark");
                            this.unJuego.mensaje = "Incorrecto!!! era " + this.respuestaSistema;
                        }
                        break;
                }
            }
        }
        this.respuestaUsuario = "";
        if (this.intentos_Usuario < this.intentos_Sistema)
            this.jugar();
        if (this.intentos_Usuario >= this.intentos_Sistema) {
            this.finDelJuego();
        }
    };
    JuegoDeColoresComponent.prototype.finDelJuego = function () {
        this.unJuego.juega = false;
        this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos").toString());
        this.unJuego.puntajeTotal += this.puntos;
        localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());
        if (this.aciertosPositivos == this.intentos_Sistema) {
            this.unJuego.mensaje = "Excelente puntuacion! sumo un total de " + this.puntos + " Pts. ";
            this.unJuego.resultado = true;
        }
        else if (this.aciertosPositivos > 0) {
            this.unJuego.mensaje = "Sumo un total de " + this.puntos + " Pts. ";
            this.unJuego.resultado = true;
        }
        else {
            this.unJuego.mensaje = "Usted perdio!!! no pudo acertar ningun color. ";
            this.unJuego.resultado = false;
        }
        this.unJuego.mensaje += "Haga click en el boton 'Juego nuevo' para volver a jugar.";
        this.resetVariables();
    };
    JuegoDeColoresComponent.prototype.resetVariables = function () {
        document.getElementById("LblMensaje").setAttribute("class", "text-white");
        this.elSistemaPide = " - Juego de colores - ";
        this.colorFondo = "secondary";
        this.colorLetra = "dark";
        this.Palabra = "Negro";
        this.aciertosPositivos = 0;
    };
    return JuegoDeColoresComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], JuegoDeColoresComponent.prototype, "event_emitter", void 0);
JuegoDeColoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-juego-de-colores',
        template: __webpack_require__("../../../../../src/app/juego-de-colores/juego-de-colores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/juego-de-colores/juego-de-colores.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegoDeColoresComponent);

var _a;
//# sourceMappingURL=juego-de-colores.component.js.map

/***/ }),

/***/ "../../../../../src/app/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n  <body> <app-menu-strip></app-menu-strip>\r\n\r\n      <div class=\"row justify-content-md-center\">\r\n        <div class=\"alert alert-success\">\r\n          <button class=\"btn text-white btn-success\" type=\"button\" (click)=\"filtrar($event)\" value=\"Todos\">Todos</button>  \r\n          <button class=\"btn text-white btn-success\" type=\"button\" (click)=\"filtrar($event)\" value=\"Ganadores\" >Los que ganaron</button>  \r\n          <button class=\"btn text-white btn-success\" type=\"button\" (click)=\"filtrar($event)\" value=\"Perdedores\">Los que perdieron</button>\r\n        </div>\r\n      </div>  \r\n\r\n    <!-- \r\n    <div class=\"container\">\r\n    <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Cuit</th>\r\n              <th>Nombre</th>\r\n              <th>Email</th>\r\n              <th>Puntaje</th>\r\n              <th>Fecha</th>\r\n              <th>Sexo</th>\r\n              <th>Gano</th>\r\n            </tr>\r\n          </thead>   \r\n          \r\n          <tr *ngFor=\"let jug of ListaDeJugadores\" >\r\n            <td>{{jug.cuit}}</td>\r\n            <td>{{jug.usuario}}</td>\r\n            <td>{{jug.email}}</td>\r\n            <td>{{jug.puntaje}}</td>   \r\n            <td>{{jug.fecha}}</td>\r\n            <td>{{jug.sexo}}</td>\r\n            <td>{{jug.gano}}</td>   \r\n          </tr>\r\n\r\n    </table>\r\n    </div>\r\n    -->\r\n\r\n    <!-- IMAGEN PERSONALIZADA -->\r\n    <div class=\"container alert alert-primary\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"ListaDeJugadores\"></ng2-smart-table>\r\n    </div>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(datos) {
        var _this = this;
        this.datos = datos;
        //Config Smart_TAble
        this.settings = {
            columns: {
                cuit: {
                    title: 'Cuit'
                },
                usuario: {
                    title: 'Usuario'
                },
                email: {
                    title: 'Email'
                },
                puntaje: {
                    title: 'Pts'
                },
                fecha: {
                    title: 'Fecha jugada'
                },
                sexo: {
                    title: 'Genero'
                },
                gano: {
                    title: 'Resultado'
                }
            }
        };
        this.datos.jugadores("usuarios.json")
            .then(function (data) {
            _this.ListaDeJugadores = data;
        })
            .catch(function (error) { return console.log(error); });
    }
    ListadoComponent.prototype.filtrar_Ganadores = function (item) { return item.email == "hbelchem2@nytimes.com"; };
    ListadoComponent.prototype.filtrar_Perdedores = function (item) { return !item.gano; };
    ListadoComponent.prototype.filtrar = function (ctrl) {
        var _this = this;
        //console.log(ctrl);
        this.ListaDeJugadores = [];
        switch (ctrl.target.value) {
            case "Ganadores":
                this.datos.jugadores("usuarios.json")
                    .then(function (data) {
                    _this.ListaDeJugadores = data.filter(_this.filtrar_Ganadores);
                    console.log(_this.ListaDeJugadores);
                })
                    .catch(function (error) { return console.log(error); });
                break;
            case "Perdedores":
                this.datos.jugadores("usuarios.json")
                    .then(function (data) {
                    _this.ListaDeJugadores = data.filter(_this.filtrar_Perdedores);
                    console.log(_this.ListaDeJugadores);
                })
                    .catch(function (error) { return console.log(error); });
                break;
            case "Todos":
                this.datos.jugadores("usuarios.json")
                    .then(function (data) {
                    _this.ListaDeJugadores = data;
                    console.log(_this.ListaDeJugadores);
                })
                    .catch(function (error) { return console.log(error); });
                break;
        }
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n  <body>\r\n     <app-menu-strip></app-menu-strip>\r\n\r\n  <div class=\"container\">\r\n\r\n        <div class=\"jumbotron\">\r\n          <h1 class=\"display-3\">Bienvenidos al TP: Sala de juegos</h1>\r\n          <p class=\"lead\">Este es un proyecto de Trabajo practico desarrollado con el fin de promocionar Laboratorio 4.</p>\r\n          <hr class=\"my-4\">\r\n          <p>Fue desarrollado con esfuerzo y dedicacion, espero que lo disfruten.</p>\r\n          <p class=\"lead\">\r\n            <a class=\"btn btn-primary btn-lg BtnAzul\" href=\"https://github.com/MetalEmi7/TP1-Lab4-SalaDeJuegos\" role=\"button\">Repositorio del TP</a>\r\n          </p>\r\n        </div>\r\n\r\n    \r\n\r\n        <div class=\"card-deck\">\r\n\r\n          <div class=\"card\">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/SalaDeJuegos.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-body \">\r\n              <h4 class=\"card-title\">Sala de juegos</h4>\r\n              <p class=\"card-text\">Encontraran un conjunto de juegos de tipo cognitivos, cada uno registran los resultados y sus puntos logrados en un historial.</p>\r\n              <p class=\"card-text\"><button class=\"btn btn-primary\" name=\"BtnSalaDeJuegos\" routerLink=\"/salaDeJuegos\">Entrar</button> </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card \">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/Listado.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-body \">\r\n              <h4 class=\"card-title\">Listado</h4>\r\n              <p class=\"card-text\">Muestra todos los resultados de todos los jugadores con filtros.</p>\r\n              <p class=\"card-text\"><button class=\"btn btn-primary\" name=\"BtnSalaDeJuegos\" routerLink=\"/listado\">Entrar</button> </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card \">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/CardQuienSoy.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-body \">\r\n              <h4 class=\"card-title\">Quien soy</h4>\r\n              <p class=\"card-text\">Un estudiande a termino de la carrera de Tecnico Superior en Programacion.</p>\r\n              <p class=\"card-text\"><button class=\"btn btn-primary\" name=\"BtnSalaDeJuegos\" routerLink=\"/quienSoy\">Detalles</button> </p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n  </div>  \r\n  \r\n  </body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainMenuComponent = (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () { };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-menu',
        template: __webpack_require__("../../../../../src/app/main-menu/main-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-menu/main-menu.component.css")]
    })
], MainMenuComponent);

//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-strip/menu-strip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-strip/menu-strip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n    <div class=\"alert menuimagen\">\r\n        <div class=\"clearfix\">\r\n\r\n          <div class=\"float-left\">\r\n            <button class=\"btn btn-white text-dark\" routerLink=\"/\">Pagina Principal</button>\r\n            <button class=\"btn btn-danger\" *ngIf=\"Logueado\" type=\"button\" (click)=\"desLoguearse()\" >Log out</button>\r\n\r\n                                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Login</button>\r\n                        \r\n                            <div class=\"dropdown-menu\">\r\n                                <form class=\"px-4 py-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"recipient-name\" class=\"col-form-label\">Nombre de cuenta:</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"TxtLoginUsuario\" name=\"TxtNombre\" [(ngModel)]=\"form.nombre\" >\r\n                                  </div>  \r\n                        \r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"message-text\" class=\"col-form-label\">Contraseña:</label>\r\n                                    <input type=\"password\" class=\"form-control\" id=\"TxtLoginPass\" name=\"TxtPass\" [(ngModel)]=\"form.password\">\r\n                                  </div> \r\n                        \r\n                                  <div class=\"form-group\">\r\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"datosAdmin()\">usar cuenta admin</button>\r\n                                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"Loguearse()\" >Log in</button>\r\n                                  </div>\r\n                        \r\n                                </form>        \r\n                            </div>\r\n          </div>\r\n\r\n          <div class=\"float-right\">\r\n            <strong class=\"text-white\">Jugador: {{cuenta}}</strong>\r\n            <strong class=\"text-warning\">Pts Totales: {{puntosTotales}}</strong>\r\n          <div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu-strip/menu-strip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuStripComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuStripComponent = (function () {
    function MenuStripComponent(datos) {
        this.datos = datos;
        this.Logueado = false;
        this.form = {
            nombre: "",
            password: "",
            mail: "",
            sexo: "",
            foto: ""
        };
    }
    MenuStripComponent.prototype.Loguearse = function () {
        var auxNombre = this.form.nombre;
        var auxPassword = this.form.password;
        if (this.form.nombre == auxNombre && this.form.password == auxPassword) {
            localStorage.setItem("jugador", this.form.nombre);
            this.Logueado = true;
            this.cuenta = localStorage.getItem("jugador");
            this.puntosTotales = Number.parseInt(localStorage.getItem("puntos"));
            console.log(localStorage.getItem("jugador"));
        }
    };
    MenuStripComponent.prototype.desLoguearse = function () {
        this.Logueado = false;
        localStorage.setItem("jugador", "Anonimo");
        localStorage.setItem("puntos", "0");
        this.cuenta = localStorage.getItem("jugador");
        this.puntosTotales = localStorage.getItem("puntos");
    };
    MenuStripComponent.prototype.datosAdmin = function () {
        this.form.nombre = "Admin";
        this.form.password = "123456";
    };
    MenuStripComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("jugador") != "Anonimo") {
            this.Logueado = true;
            this.cuenta = localStorage.getItem("jugador");
            this.puntosTotales = Number.parseInt(localStorage.getItem("puntos"));
            console.log(localStorage.getItem("jugador"));
            console.log(localStorage.getItem("puntos"));
        }
        else {
            localStorage.setItem("jugador", "Anonimo");
            localStorage.setItem("puntos", "0");
            this.cuenta = localStorage.getItem("jugador");
            this.puntosTotales = localStorage.getItem("puntos");
        }
    };
    return MenuStripComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MenuStripComponent.prototype, "puntosTotales", void 0);
MenuStripComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-strip',
        template: __webpack_require__("../../../../../src/app/menu-strip/menu-strip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-strip/menu-strip.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _a || Object])
], MenuStripComponent);

var _a;
//# sourceMappingURL=menu-strip.component.js.map

/***/ }),

/***/ "../../../../../src/app/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n<body> <app-menu-strip [puntosTotales]=\"unJuego.puntajeTotal\" ></app-menu-strip>\r\n    \r\n    <div class=\"container\" align=\"center\" >\r\n            <button class=\"btn btn-primary btn-lg\" routerLink=\"/salaDeJuegos\" >Volver atras</button>\r\n    </div>\r\n\r\n\r\n    <div class=\"container row justify-content-md-center centroDePagina2\"> \r\n    <div class=\"col sm-6\">            \r\n        <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/PPT.jpg\" alt=\"Card image cap\" width=\"500\" height=\"200\" >\r\n            <div class=\"card-body\">\r\n            <h4 class=\"card-text\">{{unJuego.nombreJuego}} </h4>\r\n            Descripcion: {{unJuego.descripcion}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"alert bg-dark col sm-6\">\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-6 col-md-3\">\r\n                <div align=\"center\">\r\n                    <h6 class=\"text-white\">{{this.unJuego.jugador}}</h6>\r\n                    <button class=\"btn btn-outline-primary\" id=\"BtnPiedra_user\" > <img src=\"assets/imagenes/Piedra papel o tijera/Piedra.jpg\" alt=\"Piedra\"    class=\"rounded\" width=50 (click)=\"QueHay($event)\"> </button><br><br>\r\n                    <button class=\"btn btn-outline-primary\" id=\"BtnPapel_user\" > <img src=\"assets/imagenes/Piedra papel o tijera/Papel.jpg\"  alt=\"Papel\"     class=\"rounded\" width=50 (click)=\"QueHay($event)\"> </button><br><br>\r\n                    <button class=\"btn btn-outline-primary\" id=\"BtnTijera_user\" > <img src=\"assets/imagenes/Piedra papel o tijera/Tijera.jpg\" alt=\"Tijera\"    class=\"rounded\" width=50 (click)=\"QueHay($event)\"> </button><br><br>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-auto\">                \r\n            </div>\r\n\r\n            <div class=\"col-6 col-md-3\">\r\n                <div align=\"center\">\r\n                    <h6 class=\"text-white\">Sistema</h6>\r\n                    <button class=\"btn btn-outline-danger\" id=\"BtnPiedra\" disabled> <img src=\"assets/imagenes/Piedra papel o tijera/Piedra.jpg\" alt=\"Piedra\" class=\"rounded\" width=50> </button><br><br>\r\n                    <button class=\"btn btn-outline-danger\" id=\"BtnPapel\" disabled> <img src=\"assets/imagenes/Piedra papel o tijera/Papel.jpg\" alt=\"Papel\" class=\"rounded\" width=50></button><br><br>\r\n                    <button class=\"btn btn-outline-danger\" id=\"BtnTijera\" disabled> <img src=\"assets/imagenes/Piedra papel o tijera/Tijera.jpg\" alt=\"Tijera\" class=\"rounded\" width=50></button><br><br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n<!--\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <button *ngIf=\"unJuego.juega\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"verificarJugada()\"> Jugar </button>\r\n        </div>\r\n        </div>\r\n-->      \r\n        <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <button *ngIf=\"!unJuego.juega\" class=\"btn btn-info btn-lg btn-block text-dark\" (click)=\"reiniciarJuego()\"><strong> Intentar otra vez </strong></button>\r\n        </div>\r\n        </div>\r\n\r\n        <br>\r\n        <h5 align=\"center\" id=\"LblMensaje\" class=\"text-white\" ><strong>  {{unJuego.mensaje}}</strong> </h5>\r\n        <br>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n        \r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entidades_juego__ = __webpack_require__("../../../../../src/app/entidades/juego.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PiedraPapelTijeraComponent = (function () {
    //intentos:any=3;
    function PiedraPapelTijeraComponent() {
        this.jugadaUsuario = null;
        this.Modo_Testeo = true;
        this.event_emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unJuego = new __WEBPACK_IMPORTED_MODULE_1__entidades_juego__["a" /* Juego */](localStorage.getItem("jugador"), "Piedra, Pepel o Tijera", "Debe elegir piedra papel o tijera y ganarle al sistema.", "Haga click en la alguno de los botones (en la piedra, en el papel o en la tijera) para realizar su jugada.");
        this.prepararJuego();
    }
    PiedraPapelTijeraComponent.prototype.prepararJuego = function () {
        this.puntos = 0;
        this.unJuego.mensaje = "Haga click en la alguno de los botones (en la piedra, en el papel o en la tijera) para realizar su jugada.";
        this.unJuego.juega = true;
        this.jugadaUsuario = null;
        this.generarJugada();
    };
    PiedraPapelTijeraComponent.prototype.generarJugada = function () {
        //this.aux_jugadaSistema = 3;
        this.aux_jugadaSistema = Math.floor(Math.random() * ((3 + 1) - 1) + 1);
        console.log(this.aux_jugadaSistema);
        switch (this.aux_jugadaSistema) {
            case 1:
                this.jugadaSistema = "Piedra";
                break;
            case 2:
                this.jugadaSistema = "Papel";
                break;
            case 3:
                this.jugadaSistema = "Tijera";
                break;
        }
        console.log(this.jugadaSistema);
    };
    PiedraPapelTijeraComponent.prototype.verificarJugada = function () {
        if (this.unJuego.juega == true) {
            if (this.jugadaUsuario != this.jugadaSistema) {
                if (this.jugadaUsuario == "Piedra") {
                    if (this.jugadaSistema == "Tijera") {
                        this.unJuego.resultado = true;
                        document.getElementById("LblMensaje").setAttribute("class", "text-white");
                        this.unJuego.mensaje = "Usted ha ganado";
                        this.puntos += 15;
                    }
                    else {
                        this.unJuego.resultado = false;
                        document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                        this.unJuego.mensaje = "Usted perdio";
                    }
                }
                if (this.jugadaUsuario == "Tijera") {
                    if (this.jugadaSistema == "Papel") {
                        this.unJuego.resultado = true;
                        document.getElementById("LblMensaje").setAttribute("class", "text-white");
                        this.unJuego.mensaje = "Usted ha ganado";
                        this.puntos += 15;
                    }
                    else {
                        this.unJuego.resultado = false;
                        document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                        this.unJuego.mensaje = "Usted perdio";
                    }
                }
                if (this.jugadaUsuario == "Papel") {
                    if (this.jugadaSistema == "Piedra") {
                        this.unJuego.resultado = true;
                        document.getElementById("LblMensaje").setAttribute("class", "text-white");
                        this.unJuego.mensaje = "Usted ha ganado";
                        this.puntos += 15;
                    }
                    else {
                        this.unJuego.resultado = false;
                        document.getElementById("LblMensaje").setAttribute("class", "text-danger");
                        this.unJuego.mensaje = "Usted perdio";
                    }
                }
            }
            else {
                this.unJuego.resultado = false;
                this.unJuego.mensaje = "Empate";
                this.puntos += 5;
            }
            this.unJuego.mensaje += ". Sumo " + this.puntos + "Pts., haga click en 'Intentar otra vez' e intente con otra jugada.";
            switch (this.jugadaSistema) {
                case "Piedra":
                    document.getElementById("BtnPiedra").setAttribute("class", "btn btn-danger active");
                    break;
                case "Papel":
                    document.getElementById("BtnPapel").setAttribute("class", "btn btn-danger active");
                    break;
                case "Tijera":
                    document.getElementById("BtnTijera").setAttribute("class", "btn btn-danger active");
                    break;
            }
            console.log("PUTA MADRE");
            this.finDelJuego();
        }
    };
    PiedraPapelTijeraComponent.prototype.QueHay = function (val) {
        if (this.unJuego.juega == true) {
            this.jugadaUsuario = val.target.alt;
            console.log(this.jugadaUsuario);
            this.desmarcarBotones();
            switch (this.jugadaUsuario) {
                case "Piedra":
                    document.getElementById("BtnPiedra_user").setAttribute("class", "btn btn-primary active");
                    break;
                case "Papel":
                    document.getElementById("BtnPapel_user").setAttribute("class", "btn btn-primary active");
                    break;
                case "Tijera":
                    document.getElementById("BtnTijera_user").setAttribute("class", "btn btn-primary active");
                    break;
            }
        }
        this.verificarJugada();
    };
    PiedraPapelTijeraComponent.prototype.desmarcarBotones = function () {
        document.getElementById("BtnPiedra_user").setAttribute("class", "btn btn-outline-primary");
        document.getElementById("BtnPapel_user").setAttribute("class", "btn btn-outline-primary");
        document.getElementById("BtnTijera_user").setAttribute("class", "btn btn-outline-primary");
        document.getElementById("BtnPiedra").setAttribute("class", "btn btn-outline-danger");
        document.getElementById("BtnPapel").setAttribute("class", "btn btn-outline-danger");
        document.getElementById("BtnTijera").setAttribute("class", "btn btn-outline-danger");
    };
    PiedraPapelTijeraComponent.prototype.finDelJuego = function () {
        this.unJuego.juega = false;
        this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos"));
        this.unJuego.puntajeTotal += this.puntos;
        localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());
    };
    PiedraPapelTijeraComponent.prototype.reiniciarJuego = function () {
        this.prepararJuego();
        this.desmarcarBotones();
    };
    return PiedraPapelTijeraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PiedraPapelTijeraComponent.prototype, "event_emitter", void 0);
PiedraPapelTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__("../../../../../src/app/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/piedra-papel-tijera/piedra-papel-tijera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PiedraPapelTijeraComponent);

var _a;
//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".html\r\n{ \r\n  background-image: url(/assets/imagenes/BtnCeleste.jpg);\r\n  background-position: top center;\r\n  background-attachment: fixed;\r\n  background-size: 100% ;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-strip></app-menu-strip>\r\n<body class=\"container\">\r\n  <div class=\"alert bg-white\">\r\n\r\n    <blockquote class=\"blockquote text-center alert bg-primary\">\r\n      <h1 class=\"mb-0 display-4\"><strong> ¿Quien soy?.</strong></h1>\r\n    </blockquote>\r\n      \r\n    <div class=\"container\" align=\"center\">\r\n      <img src=\"./assets/imagenes/QuienSoy.jpg\" class=\"rounded-circle\" alt=\"¿Quien soy?\">\r\n    </div>\r\n    <br>\r\n    \r\n    <div class=\"container\">\r\n      <p>Soy Emiliano Alvarez, alumno de la Universidad Tecnologia Nacional: Facultad Regional de Avellaneda (UTNfra) y he desarrollado este trabajo practico que gestiona un sitio web de sala de juegos donde se maneja un sistema de puntos para el jugador que se loguea, donde se almacenan datos de manera local y se toman datos de archivos Json.</p>\r\n      <p>Entre las herramientas utilizadas para el diseño del sitio se utilizo Visual Studio Code, Bootstrap, Github Desktop, CorelDraw x7, Corel Photo-Paint x7. </p>\r\n      <p>Desarrolle un juego llamado \"Juego de colores\" donde se le pide un requicito al usuario y el mismo debe ingresar el color solicitado, esto sucedera en forma consecutiva hasta una cantidad determinada, en este caso 5 veces. El juego proporciona la comodidad de poder escribir el color solicitado y verificar el mismo con la tecla enter y asi escribir el siguiente color. </p>\r\n    </div>\r\n\r\n    <div class=\"container alert bg-primary\">\r\n        <h1 class=\"mb-0 display-4\" align=\"center\"><strong>Dónde Funciona?</strong></h1>\r\n    </div>\r\n\r\n\r\n\r\n      <div class=\"card-deck\">\r\n          <div class=\"card\">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/quiensoy3.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">             \r\n              <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"card\">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/quiensoy2.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n                <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"card\">\r\n            <img class=\"card-img-top\" src=\"./assets/imagenes/quiensoy1.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n            </div>\r\n          </div>         \r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <footer class=\"blockquote-footer\">Trabajo Practico: Sala de Juegos 2017.\r\n    </footer>\r\n  </div>\r\n<div>"

/***/ }),

/***/ "../../../../../src/app/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\r\n\r\n  \r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          ...\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegistroComponent = (function () {
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registro/registro.component.css")],
    })
], RegistroComponent);

//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registro_registro_component__ = __webpack_require__("../../../../../src/app/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agilidad_agilidad_component__ = __webpack_require__("../../../../../src/app/agilidad/agilidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__juego_de_colores_juego_de_colores_component__ = __webpack_require__("../../../../../src/app/juego-de-colores/juego-de-colores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sala_de_juegos_sala_de_juegos_component__ = __webpack_require__("../../../../../src/app/sala-de-juegos/sala-de-juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menu_strip_menu_strip_component__ = __webpack_require__("../../../../../src/app/menu-strip/menu-strip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__listado_listado_component__ = __webpack_require__("../../../../../src/app/listado/listado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Router

//Componente













//Entidades
var miRuteo = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__["a" /* MainMenuComponent */] },
    { path: "salaDeJuegos", component: __WEBPACK_IMPORTED_MODULE_13__sala_de_juegos_sala_de_juegos_component__["a" /* SalaDeJuegosComponent */] },
    { path: "listado", component: __WEBPACK_IMPORTED_MODULE_18__listado_listado_component__["a" /* ListadoComponent */] },
    { path: "anagrama", component: __WEBPACK_IMPORTED_MODULE_15__anagrama_anagrama_component__["a" /* AnagramaComponent */] },
    { path: "adivina", component: __WEBPACK_IMPORTED_MODULE_9__adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
    { path: "agilidad", component: __WEBPACK_IMPORTED_MODULE_10__agilidad_agilidad_component__["a" /* AgilidadComponent */] },
    { path: "piedraPapelTijera", component: __WEBPACK_IMPORTED_MODULE_14__piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */] },
    { path: "juego de colores", component: __WEBPACK_IMPORTED_MODULE_11__juego_de_colores_juego_de_colores_component__["a" /* JuegoDeColoresComponent */] },
    { path: "quienSoy", component: __WEBPACK_IMPORTED_MODULE_16__quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_12__error_error_component__["a" /* ErrorComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_9__adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_10__agilidad_agilidad_component__["a" /* AgilidadComponent */],
            __WEBPACK_IMPORTED_MODULE_11__juego_de_colores_juego_de_colores_component__["a" /* JuegoDeColoresComponent */],
            __WEBPACK_IMPORTED_MODULE_12__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sala_de_juegos_sala_de_juegos_component__["a" /* SalaDeJuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_14__piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_15__anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_16__quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_17__menu_strip_menu_strip_component__["a" /* MenuStripComponent */],
            __WEBPACK_IMPORTED_MODULE_18__listado_listado_component__["a" /* ListadoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(miRuteo),
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["a" /* Ng2SmartTableModule */]
        ],
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/sala-de-juegos/sala-de-juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sala-de-juegos/sala-de-juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-strip></app-menu-strip>\r\n<div class=\"container centroDePagina2\" *ngIf=\"CtrlCarousel\"> \r\n    \r\n    \r\n\r\n    <div class=\"alert alert-primary\">\r\n    <strong>Pantalla de seleccion:</strong>\r\n    Elige tu juego y suma puntos a tu cuenta por cada victoria. Cada juego tiene diferentes puntuaciones que varian segun la mecanica del mismo. \r\n    </div>\r\n\r\n    \r\n\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" >\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\r\n    </ol>\r\n\r\n\r\n\r\n    <div class=\"carousel-inner rounded\">\r\n      <div class=\"carousel-item active\" >\r\n        <img class=\"d-block w-100\" src=\"./assets/imagenes/Carousel_Anagrama.jpg\" alt=\"Anagrama\" height=\"300\" routerLink=\"/adivina\" (click)=\"irAJuego($event)\">\r\n          <div class=\"carousel d-none d-md-block\">   \r\n\r\n              <div class=\"carousel-caption d-none d-md-block\" role=\"alert\">\r\n                  <hr>\r\n                  Pruebe que tan bueno es develando las palabras con sus letras desordenadas.\r\n              </div> \r\n\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item \">\r\n          <img class=\"d-block w-100\" src=\"./assets/imagenes/Carousel_AdivinaElNumero.jpg\" alt=\"Adivina\" height=\"300\" (click)=\"irAJuego($event)\">\r\n            <div class=\"carousel d-none d-md-block\">\r\n\r\n                <div class=\"carousel-caption d-none d-md-block\" role=\"alert\">\r\n                    <hr>\r\n                    <p class=\"mb-0\">adivine cual es el numero secreto que el sistema tiene preparado para usted.</p>\r\n                </div>    \r\n\r\n            </div>\r\n        </div>      \r\n\r\n      <div class=\"carousel-item \">\r\n        <img class=\"d-block w-100\" src=\"./assets/imagenes/Carousel_Agilidad.jpg\" alt=\"Agilidad\" height=\"300\" (click)=\"irAJuego($event)\">\r\n        <div class=\"carousel d-none d-md-block\">   \r\n\r\n            <div class=\"carousel-caption d-none d-md-block\" role=\"alert\">\r\n                <hr>\r\n                <p class=\"mb-0\">En este juego su oponente sera una operacion simple entre 2 numeros, que puede salir mal?</p>\r\n            </div> \r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item \">\r\n          <img class=\"d-block w-100\" src=\"./assets/imagenes/Carousel_PPT.jpg\" alt=\"PPT\" height=\"300\" (click)=\"irAJuego($event)\">\r\n            <div class=\"carousel d-none d-md-block\">   \r\n\r\n                <div class=\"carousel-caption d-none d-md-block\" role=\"alert\">\r\n                    <hr>\r\n                    <p class=\"mb-0\">Logre ganarle al sistema.</p>\r\n                </div>\r\n  \r\n            </div>\r\n        </div>      \r\n\r\n      <div class=\"carousel-item \">\r\n        <img class=\"d-block w-100\" src=\"./assets/imagenes/Carousel_JuegoColores.jpg\" alt=\"JuegoDeColores\" height=\"300\" (click)=\"irAJuego($event)\">\r\n        <div class=\"carousel d-none d-md-block\">  \r\n\r\n                <div class=\"carousel-caption d-none d-md-block\" role=\"alert\">\r\n                    <hr>\r\n                    <p class=\"mb-0\">Escriba el color que el sistema le pide para ganar este juego.</p>\r\n                </div> \r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Anterior</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Siguiente</span>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sala-de-juegos/sala-de-juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaDeJuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalaDeJuegosComponent = (function () {
    function SalaDeJuegosComponent(ruta) {
        this.ruta = ruta;
        this.CtrlCarousel = true;
    }
    SalaDeJuegosComponent.prototype.irAJuego = function (evento) {
        switch (evento.target.alt) {
            case "Anagrama":
                this.ruta.navigate(["/anagrama"]);
                break;
            case "Adivina":
                this.ruta.navigate(["/adivina"]);
                break;
            case "Agilidad":
                this.ruta.navigate(["/agilidad"]);
                break;
            case "PPT":
                this.ruta.navigate(["/piedraPapelTijera"]);
                break;
            case "JuegoDeColores":
                this.ruta.navigate(["/juego de colores"]);
                break;
        }
    };
    SalaDeJuegosComponent.prototype.ngOnInit = function () {
    };
    return SalaDeJuegosComponent;
}());
SalaDeJuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sala-de-juegos',
        template: __webpack_require__("../../../../../src/app/sala-de-juegos/sala-de-juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sala-de-juegos/sala-de-juegos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SalaDeJuegosComponent);

var _a;
//# sourceMappingURL=sala-de-juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/archivos-jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosJugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchivosJugadoresService = (function () {
    function ArchivosJugadoresService(http) {
        this.http = http;
    }
    ArchivosJugadoresService.prototype.archivosJugadores = function (archivo) {
        //let url="http://Localhost/slim/apirest/a donde apunta esto?";
        var url = "http://Localhost:8080/slim/apirest/jugaodres/conFiltro";
        return this.http.get(url)
            .toPromise()
            .then(this.extraerDatos);
        //.catch(this.handlerError)
    };
    ArchivosJugadoresService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    ArchivosJugadoresService.prototype.handlerError = function (error) {
        return error;
    };
    return ArchivosJugadoresService;
}());
ArchivosJugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArchivosJugadoresService);

var _a;
//# sourceMappingURL=archivos-jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JuegoService = (function () {
    function JuegoService(httpMiHttp) {
        this.httpMiHttp = httpMiHttp;
    }
    JuegoService.prototype.palabras = function () {
        return this.httpMiHttp.realPalabras()
            .then(function (data) { return data; })
            .catch(function (data) { return data; });
    };
    return JuegoService;
}());
JuegoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], JuegoService);

var _a;
//# sourceMappingURL=juego.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JugadoresService = (function () {
    function JugadoresService(httpMiHttp, http) {
        this.httpMiHttp = httpMiHttp;
        this.http = http;
    }
    JugadoresService.prototype.jugadores = function (archivo) {
        return this.httpMiHttp.realJugadores(archivo)
            .then(function (data) { return data; })
            .catch(function (data) { return data; });
    };
    JugadoresService.prototype.verificarLogin = function () {
        return this.httpMiHttp.login()
            .then(function (data) { return data; })
            .catch(function (data) { return data; });
    };
    return JugadoresService;
}());
JugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], JugadoresService);

var _a, _b;
//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/mi-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MiHttpService = (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.SubirArchivo = function (arc) {
        var url = " http://localhost/slim/apirest/archivos/subir";
        return this.http
            .post(url, arc)
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handlerError);
    };
    MiHttpService.prototype.realJugadores = function (archivo) {
        return this.http.get("./assets/archivos/" + archivo)
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handlerError);
    };
    MiHttpService.prototype.realPalabras = function () {
        return this.http.get("./assets/archivos/palabras.json")
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handlerError);
    };
    MiHttpService.prototype.login = function () {
        var archivoU = "usuarios.json";
        var archivoJ = "jugadores.json";
        return this.http.get("./assets/archivos/" + archivoU)
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handlerError);
    };
    //Tratar datos desde aca?
    MiHttpService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    MiHttpService.prototype.handlerError = function (error) {
        return error;
    };
    return MiHttpService;
}());
MiHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MiHttpService);

var _a;
//# sourceMappingURL=mi-http.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map