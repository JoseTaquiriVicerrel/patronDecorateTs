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
var Bebida = /** @class */ (function () {
    function Bebida() {
    }
    Bebida.prototype.getDescription = function () {
        return this.description;
    };
    return Bebida;
}());
var Expreso = /** @class */ (function (_super) {
    __extends(Expreso, _super);
    function Expreso() {
        var _this = _super.call(this) || this;
        _this.description = 'Expreso';
        return _this;
    }
    Expreso.prototype.Costo = function () {
        return 12.00;
    };
    return Expreso;
}(Bebida));
var Latte = /** @class */ (function (_super) {
    __extends(Latte, _super);
    function Latte() {
        var _this = _super.call(this) || this;
        _this.description = 'Latte';
        return _this;
    }
    Latte.prototype.Costo = function () {
        return 9.00;
    };
    return Latte;
}(Bebida));
var Americano = /** @class */ (function (_super) {
    __extends(Americano, _super);
    function Americano() {
        var _this = _super.call(this) || this;
        _this.description = 'Americano';
        return _this;
    }
    Americano.prototype.Costo = function () {
        return 9.00;
    };
    return Americano;
}(Bebida));
var Capuccino = /** @class */ (function (_super) {
    __extends(Capuccino, _super);
    function Capuccino() {
        var _this = _super.call(this) || this;
        _this.description = 'Capuchino';
        return _this;
    }
    Capuccino.prototype.Costo = function () {
        return 10.00;
    };
    return Capuccino;
}(Bebida));
var condimentoDecorador = /** @class */ (function (_super) {
    __extends(condimentoDecorador, _super);
    function condimentoDecorador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return condimentoDecorador;
}(Bebida));
var Crema = /** @class */ (function (_super) {
    __extends(Crema, _super);
    function Crema(bebida) {
        var _this = _super.call(this) || this;
        _this.bebida = bebida;
        return _this;
    }
    Crema.prototype.getDescription = function () {
        return this.bebida.getDescription() + ", Crema ";
    };
    Crema.prototype.Costo = function () {
        return 1.00 + this.bebida.Costo();
    };
    return Crema;
}(condimentoDecorador));
var Moka = /** @class */ (function (_super) {
    __extends(Moka, _super);
    function Moka(bebida) {
        var _this = _super.call(this) || this;
        _this.bebida = bebida;
        return _this;
    }
    Moka.prototype.getDescription = function () {
        return this.bebida.getDescription() + ", Moka ";
    };
    Moka.prototype.Costo = function () {
        return 1.20 + this.bebida.Costo();
    };
    return Moka;
}(condimentoDecorador));
var Leche = /** @class */ (function (_super) {
    __extends(Leche, _super);
    function Leche(bebida) {
        var _this = _super.call(this) || this;
        _this.bebida = bebida;
        return _this;
    }
    Leche.prototype.getDescription = function () {
        return this.bebida.getDescription() + ", Leche ";
    };
    Leche.prototype.Costo = function () {
        return 1.50 + this.bebida.Costo();
    };
    return Leche;
}(condimentoDecorador));
var Soya = /** @class */ (function (_super) {
    __extends(Soya, _super);
    function Soya(bebida) {
        var _this = _super.call(this) || this;
        _this.bebida = bebida;
        return _this;
    }
    Soya.prototype.getDescription = function () {
        return this.bebida.getDescription() + ", Soya ";
    };
    Soya.prototype.Costo = function () {
        return 1.80 + this.bebida.Costo();
    };
    return Soya;
}(condimentoDecorador));
var btnExpreso = document.getElementById('btnExpreso');
var btnCapuchino = document.getElementById('btnCapuchino');
var products = [];
var ventas = [];
var bebidas;
var btnAmericano = document.getElementById('btnAmericano');
var btnLatte = document.getElementById('btnLatte');
var listProduct = document.getElementById('listProduct');
var Etotal = document.getElementById('total');
var btnLimpiar = document.getElementById('btnLimpiar');
var btnRegistros = document.getElementById('btnRegistros');
var btnAgregar = document.getElementById('btnAgregar');
var listVenta = document.getElementById('listVentas');
var listVentaDetalle = document.getElementById('listItemDetalle');
function agregarCrema(item) {
    var card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    var index = Array.prototype.indexOf.call(listProduct.children, card);
    products[index] = new Crema(products[index]);
    var subElemet = card.querySelector('#subtotal');
    var cantElemet = card.querySelector('#Crema');
    var cantidad = Number(cantElemet.textContent);
    cantElemet.innerHTML = String(cantidad + 1);
    console.log(products[index].Costo());
    subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
    calcularTotal();
}
function agregarMoka(item) {
    var card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    var index = Array.prototype.indexOf.call(listProduct.children, card);
    products[index] = new Moka(products[index]);
    var subElemet = card.querySelector('#subtotal');
    var cantElemet = card.querySelector('#Moka');
    var cantidad = Number(cantElemet.textContent);
    cantElemet.innerHTML = String(cantidad + 1);
    console.log(products[index].Costo());
    subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
    calcularTotal();
}
function agregarLeche(item) {
    var card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    var index = Array.prototype.indexOf.call(listProduct.children, card);
    products[index] = new Leche(products[index]);
    var subElemet = card.querySelector('#subtotal');
    var cantElemet = card.querySelector('#Leche');
    var cantidad = Number(cantElemet.textContent);
    cantElemet.innerHTML = String(cantidad + 1);
    console.log(products[index].Costo());
    subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
    calcularTotal();
}
function agregarSoya(item) {
    var card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    var index = Array.prototype.indexOf.call(listProduct.children, card);
    products[index] = new Soya(products[index]);
    var subElemet = card.querySelector('#subtotal');
    var cantElemet = card.querySelector('#Soya');
    var cantidad = Number(cantElemet.textContent);
    cantElemet.innerHTML = String(cantidad + 1);
    console.log(products[index].Costo());
    subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
    calcularTotal();
}
btnExpreso.addEventListener('click', function () {
    var bebida = new Expreso();
    listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
    products.push(bebida);
    calcularTotal();
});
btnCapuchino.addEventListener('click', function () {
    var bebida = new Capuccino();
    listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
    products.push(bebida);
    calcularTotal();
});
btnAmericano.addEventListener('click', function () {
    var bebida = new Americano();
    listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
    products.push(bebida);
    calcularTotal();
});
btnLatte.addEventListener('click', function () {
    var bebida = new Latte();
    listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
    products.push(bebida);
    calcularTotal();
});
function itemCaffe(bebida) {
    return "<div class=\"card mb-3\" style=\"max-width: 100%;\">\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-3\">\n                <img src=\"" + bebida.getDescription() + ".jpg\" alt=\"...\" height=\"120\" width=\"120\" >\n              </div>\n              <div class=\"col-md-6\" >\n                  <h5 class=\"card-title\">Caffe " + bebida.getDescription() + "</h5>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <button type=\"button\" id=\"btnMoka\" onclick='agregarMoka(this);' class=\"btn btn-primary btn-block btn-sm\">\n                        <i class=\"fas fa-plus\"></i>\n                        Moka <span class=\"badge badge-light\" id=\"Moka\">0</span>\n                      </button>\n                      <button type=\"button\" id=\"btnCrema\" onclick='agregarCrema(this);' class=\"btn btn-primary btn-block btn-sm\">\n                        <i class=\"fas fa-plus\"></i>\n                        Crema <span class=\"badge badge-light\" id=\"Crema\" >0</span>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <button type=\"button\" onclick='agregarLeche(this);' class=\"btn btn-primary btn-block btn-sm\" >\n                        <i class=\"fas fa-plus\"></i>\n                        Leche <span class=\"badge badge-light\" id=\"Leche\"  >0</span>\n                      </button>\n                      <button type=\"button\" onclick='agregarSoya(this);' class=\"btn btn-primary btn-block btn-sm\">\n                        <i class=\"fas fa-plus\"></i>\n                        Soya <span class=\"badge badge-light\" id=\"Soya\" >0</span>\n                      </button>\n                    </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <button type=\"button\" id=\"subtotal\" class=\"btn btn-danger btn-block btn-sm\">\n                  S/ " + bebida.Costo().toFixed(2) + "\n                </button>\n                <button type=\"button\" onclick='quitarItem(this);' class=\"btn btn-danger btn-block btn-sm\">\n                <i class=\"fas fa-times\"></i>\n                  Quitar\n                </button>\n              </div>\n            </div>\n          </div>";
}
function quitarItem(item) {
    var button = item.parentElement.parentElement.parentElement;
    var index = Array.prototype.indexOf.call(listProduct.children, button);
    products.splice(index);
    listProduct.removeChild(button);
    console.log(listProduct);
    calcularTotal();
}
function calcularTotal() {
    var total = 0;
    products.forEach(function (element) {
        total += element.Costo();
    });
    Etotal.innerHTML = "Total: " + total.toFixed(2);
}
function calcularTotalVentas(arr) {
    var total = 0;
    arr.forEach(function (element) {
        total += element.Costo();
    });
    return total.toFixed(2);
}
function limpiar() {
    listProduct.innerHTML = "";
    products = [];
    Etotal.innerHTML = "Total: S/0.00";
}
btnLimpiar.addEventListener("click", function () {
    limpiar();
});
btnRegistros.addEventListener("click", function () {
    listVenta.innerHTML = "";
    ventas.forEach(function (element) {
        listVenta.insertAdjacentHTML('beforeend', agregarItemVenta(element));
        console.log(element);
    });
});
btnAgregar.addEventListener("click", function () {
    ventas.push(products);
    limpiar();
    // ventas.forEach(element => {
    //   console.log(calcularTotalVentas(element));
    // });
});
function agregarItemVenta(bebida) {
    var item = "<div class=\"card mb-3\" style=\"max-width: 540px;\">\n                <div class=\"row no-gutters\">\n                  <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Venta</h5>\n                      <div class=\"row\">\n                        <button type=\"button\" class=\"btn btn-primary\">\n                          Total <span class=\"badge badge-light\">S/" + calcularTotalVentas(bebida) + "</span>\n                        </button>\n                        <button class=\"btn btn-info\" onclick='verDetalle(this)' data-toggle=\"modal\" data-target=\"#modalDetalles\"  ><i class=\"fas fa-info-circle\"></i> Detalles </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>";
    return item;
}
function verDetalle(item) {
    var card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    var index = Array.prototype.indexOf.call(listVenta.children, card);
    console.log(card);
    listVentaDetalle.innerHTML = '';
    ventas[index].forEach(function (element) {
        listVentaDetalle.insertAdjacentHTML('beforeend', itemCaffeDetalle(element));
    });
    var detTotal = document.getElementById('detalleTotal');
    detTotal.innerHTML = 'S/' + calcularTotalVentas(ventas[index]);
    console.log(calcularTotalVentas(ventas[index]));
    //let index = Array.prototype.indexOf.call(listProduct.children, card);
}
function itemCaffeDetalle(bebida) {
    return "<div class=\"card mb-3\" style=\"max-width: 100%;\">\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-4\">\n                <img src=\"" + getCaffe(bebida.getDescription()) + ".jpg\" alt=\"...\" height=\"120\" width=\"120\" >\n              </div>\n              <div class=\"col-md-6\" >\n                <h5 class=\"card-title\">Caffe " + bebida.getDescription() + "</h5>\n              </div>\n              <div class=\"col-sm-2\">\n                <button type=\"button\" id=\"subtotal\" class=\"btn btn-danger btn-block btn-sm\">\n                  S/ " + bebida.Costo().toFixed(2) + "\n                </button>\n              </div>\n            </div>\n          </div>";
}
function getCaffe(description) {
    var index = description.indexOf(',');
    if (index > -1) {
        return description.substring(0, index);
    }
    else {
        return description;
    }
}
