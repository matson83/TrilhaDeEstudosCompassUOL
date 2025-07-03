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
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, porte, patas) {
        this.nome = nome;
        this.porte = porte;
        this.patas = patas;
    }
    Cachorro.prototype.latir = function () {
        console.log(this.nome + ' está latindo!');
    };
    return Cachorro;
}());
var Bulldog = /** @class */ (function (_super) {
    __extends(Bulldog, _super);
    function Bulldog(nome, porte, patas, raca) {
        var _this = _super.call(this, nome, porte, patas) || this;
        _this.nome = nome;
        _this.porte = porte;
        _this.patas = patas;
        _this.raca = raca;
        return _this;
    }
    return Bulldog;
}(Cachorro));
var dog1 = new Bulldog('Rex', 'Médio', 4, 'Bulldog');
var dog2 = new Cachorro('Bobby', 'Pequeno', 4);
console.log(dog1);
dog1.latir();
