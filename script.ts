abstract class Bebida {
  protected description: string;
  getDescription(): string {
    return this.description;
  }
  abstract Costo() :number;
}

class Expreso extends Bebida {
  constructor() {
    super();
    this.description = 'Expreso';
  }
  Costo(): number {
    return 12.00;
  }
}
class Latte extends Bebida  {
  constructor() {
    super();
    this.description = 'Latte';
  }
  Costo(): number {
    return 9.00;
  }
}
class Americano extends Bebida {
  constructor() {
    super();
    this.description = 'Americano';
  }
  Costo(): number{
    return 9.00;
  }
}
class Capuccino extends Bebida {
  constructor() {
    super();
    this.description = 'Capuchino';
  }
  Costo(): number{
    return 10.00;
  }
}

abstract class condimentoDecorador extends Bebida {
  abstract getDescription(): string; 
}

class Crema extends condimentoDecorador {
  bebida: Bebida;
  
  constructor(bebida: Bebida) {
    super();
    this.bebida = bebida;
  }
  getDescription(): string {
    return this.bebida.getDescription() + ", Crema ";
  }
  Costo() :number {
    return 1.00 + this.bebida.Costo();
  }
}
class Moka extends condimentoDecorador {
  bebida: Bebida;

  constructor(bebida: Bebida) {
    super();
    this.bebida = bebida;
  }
  getDescription(): string {
    return this.bebida.getDescription() + ", Moka ";
  }
  Costo(): number {
    return 1.20 + this.bebida.Costo();
  }
}
class Leche extends condimentoDecorador {
  bebida: Bebida;

  constructor(bebida: Bebida) {
    super();
    this.bebida = bebida;
  }
  getDescription(): string {
    return this.bebida.getDescription() + ", Leche ";
  }
  Costo(): number {
    return 1.50 + this.bebida.Costo();
  }
}
class Soya extends condimentoDecorador {
  bebida: Bebida;

  constructor(bebida: Bebida) {
    super();
    this.bebida = bebida;
  }
  getDescription(): string {
    return this.bebida.getDescription() + ", Soya ";
  } 
  Costo(): number {
    return 1.80 + this.bebida.Costo();
  }
}


let btnExpreso = document.getElementById('btnExpreso');
let btnCapuchino = document.getElementById('btnCapuchino');
let products: Array<Bebida> = [];
let ventas:Array<Bebida[]> = []

let bebidas: Bebida;
let btnAmericano = document.getElementById('btnAmericano');
let btnLatte = document.getElementById('btnLatte');
let listProduct =  document.getElementById('listProduct') as HTMLDivElement;
let Etotal = <HTMLElement>document.getElementById('total');


let btnLimpiar = document.getElementById('btnLimpiar');
let btnRegistros = document.getElementById('btnRegistros');
let btnAgregar = document.getElementById('btnAgregar');

let listVenta = document.getElementById('listVentas');
let listVentaDetalle = document.getElementById('listItemDetalle');



function agregarCrema(item) {
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  products[index] = new Crema(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#Crema');
  let cantidad: number = Number(cantElemet.textContent);
  cantElemet.innerHTML = String( cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}
function agregarMoka(item) {
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  products[index] = new Moka(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#Moka');
  let cantidad: number = Number(cantElemet.textContent);
  cantElemet.innerHTML = String(cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}
function agregarLeche(item) {
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  products[index] = new Leche(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#Leche');
  let cantidad: number = Number(cantElemet.textContent);
  cantElemet.innerHTML = String(cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}
function agregarSoya(item) {
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  products[index] = new Soya(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#Soya');
  let cantidad: number = Number(cantElemet.textContent);
  cantElemet.innerHTML = String(cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}


btnExpreso.addEventListener('click', () => {
  let bebida = new Expreso();
  listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
  products.push(bebida);
  calcularTotal();
})

btnCapuchino.addEventListener('click', () => {
  let bebida = new Capuccino();
  listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
  products.push(bebida);
  calcularTotal();
})

btnAmericano.addEventListener('click', () => {
  let bebida = new Americano();
  listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
  products.push(bebida);
  calcularTotal();
})

btnLatte.addEventListener('click', () => {
  let bebida = new Latte();
  listProduct.insertAdjacentHTML('beforeend', itemCaffe(bebida));
  products.push(bebida);
  calcularTotal();
})

function itemCaffe(bebida : Bebida) : string {
  return `<div class="card mb-3" style="max-width: 100%;">
            <div class="row no-gutters">
              <div class="col-md-3">
                <img src="${bebida.getDescription()}.jpg" alt="..." height="120" width="120" >
              </div>
              <div class="col-md-6" >
                  <h5 class="card-title">Caffe ${bebida.getDescription()}</h5>
                  <div class="row">
                    <div class="col-sm-6">
                      <button type="button" id="btnMoka" onclick='agregarMoka(this);' class="btn btn-primary btn-block btn-sm">
                        <i class="fas fa-plus"></i>
                        Moka <span class="badge badge-light" id="Moka">0</span>
                      </button>
                      <button type="button" id="btnCrema" onclick='agregarCrema(this);' class="btn btn-primary btn-block btn-sm">
                        <i class="fas fa-plus"></i>
                        Crema <span class="badge badge-light" id="Crema" >0</span>
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <button type="button" onclick='agregarLeche(this);' class="btn btn-primary btn-block btn-sm" >
                        <i class="fas fa-plus"></i>
                        Leche <span class="badge badge-light" id="Leche"  >0</span>
                      </button>
                      <button type="button" onclick='agregarSoya(this);' class="btn btn-primary btn-block btn-sm">
                        <i class="fas fa-plus"></i>
                        Soya <span class="badge badge-light" id="Soya" >0</span>
                      </button>
                    </div>
                  </div>
              </div>
              <div class="col-sm-3">
                <button type="button" id="subtotal" class="btn btn-danger btn-block btn-sm">
                  S/ ${bebida.Costo().toFixed(2)}
                </button>
                <button type="button" onclick='quitarItem(this);' class="btn btn-danger btn-block btn-sm">
                <i class="fas fa-times"></i>
                  Quitar
                </button>
              </div>
            </div>
          </div>`;
}

function quitarItem(item) {
  let button = item.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, button);
  products.splice(index);
  listProduct.removeChild(button);
  console.log(listProduct);
  calcularTotal();
}

function calcularTotal() {
  let total = 0;
  products.forEach(element => {
    total += element.Costo();
  });
  Etotal.innerHTML = "Total: " + total.toFixed(2);
}
function calcularTotalVentas(arr) {
  let total = 0;
  arr.forEach(element => {
    total += element.Costo();
  });
  return total.toFixed(2);
}

function limpiar() {
  listProduct.innerHTML = "";
  products = [];
  Etotal.innerHTML = "Total: S/0.00"
}

btnLimpiar.addEventListener("click", () => {
  limpiar();
} )

btnRegistros.addEventListener("click", () => {
  listVenta.innerHTML = "";
  ventas.forEach(element => {
    listVenta.insertAdjacentHTML('beforeend', agregarItemVenta(element));
    console.log(element);
  });

})
btnAgregar.addEventListener("click", ()=>{
  ventas.push(products);
  limpiar();
  // ventas.forEach(element => {
  //   console.log(calcularTotalVentas(element));
  // });
})

function agregarItemVenta(bebida : Array<Bebida>) {
  let item = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Venta</h5>
                      <div class="row">
                        <button type="button" class="btn btn-primary">
                          Total <span class="badge badge-light">S/${ calcularTotalVentas(bebida)}</span>
                        </button>
                        <button class="btn btn-info" onclick='verDetalle(this)' data-toggle="modal" data-target="#modalDetalles"  ><i class="fas fa-info-circle"></i> Detalles </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  return item;
}


function verDetalle(item) {
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listVenta.children, card);
  console.log(card);
  listVentaDetalle.innerHTML = '';
  ventas[index].forEach(element => {
    listVentaDetalle.insertAdjacentHTML('beforeend', itemCaffeDetalle(element));
  })
  let detTotal = document.getElementById('detalleTotal')
  detTotal.innerHTML = 'S/' + calcularTotalVentas(ventas[index]);
  console.log(calcularTotalVentas(ventas[index]));
  
  //let index = Array.prototype.indexOf.call(listProduct.children, card);
}
function itemCaffeDetalle(bebida: Bebida): string {
  return `<div class="card mb-3" style="max-width: 100%;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${getCaffe(bebida.getDescription())}.jpg" alt="..." height="120" width="120" >
              </div>
              <div class="col-md-6" >
                <h5 class="card-title">Caffe ${bebida.getDescription()}</h5>
              </div>
              <div class="col-sm-2">
                <button type="button" id="subtotal" class="btn btn-danger btn-block btn-sm">
                  S/ ${bebida.Costo().toFixed(2)}
                </button>
              </div>
            </div>
          </div>`;
}
function getCaffe(description: string) {
  let index = description.indexOf(',');
  if (index > -1) {
    return description.substring(0, index )
  } else {
    return description;
  }
}