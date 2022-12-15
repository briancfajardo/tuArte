let colores = new Map();
colores.set('#ff6493',['#7e3148','#a13e5c']);
colores.set('#11ca00',['#0b3507','#114c0a']);
colores.set('#e68c37',['#9e6027','#be742e']);
colores.set('#FFAD00',['#8f6200','#be8200']);
colores.set('#00ade1',['#006685','#0084ac']);

var view = {
    cambiarColorSecciones: function(){
        var secciones = document.getElementById('secciones');
        var titulo = document.getElementById('saludo');
        secciones.setAttribute('style','--f:'+octopus.obtenerColorSecundario() + '; --b:'+colores.get(octopus.obtenerColorSecundario())[0] + '; --a:'+colores.get(octopus.obtenerColorSecundario())[1]);
        titulo.setAttribute('style', '--clr:'+octopus.obtenerColorPrincipal());
    },
    quitarClaseSeleccionPrincipal: function(){
        var nuevoColor = document.getElementsByClassName('color-item');
        for(var i = 0; i< 5; i++){
            nuevoColor[i].classList.remove('color-seleccionado');
        }
    },
    cambiarColorPrincipal: function(){
        var nuevoColor = document.getElementsByClassName('color-item');
        self = this;
        for(var i = 0; i< 5; i++){
            nuevoColor[i].addEventListener('click', (function(elementoCopy){
                return function(){
                    localStorage.setItem('color-principal',elementoCopy.getAttribute('style').slice(6));
                    self.quitarClaseSeleccionPrincipal();
                    elementoCopy.classList.add('color-seleccionado');
                }
            })(nuevoColor[i]));
        }
    },
    quitarClaseSeleccionSecundario: function(){
        var nuevoColor = document.getElementsByClassName('color-item');
        for(var i = 5; i< 10; i++){
            nuevoColor[i].classList.remove('color-seleccionado');
        }
    },
    cambiarColorSecundario: function(){
        var nuevoColor = document.getElementsByClassName('color-item');
        self = this;
        for(var i = 5; i< 10; i++){
            nuevoColor[i].addEventListener('click', (function(elementoCopy){
                return function(){
                    localStorage.setItem('color-secundario',elementoCopy.getAttribute('style').slice(6));
                    self.quitarClaseSeleccionSecundario();
                    elementoCopy.classList.add('color-seleccionado');
                }
            })(nuevoColor[i]));
        }
    },
    oyenteInput: function(){
        var nombre = $('#cambio-nombre');
        var nombrep = '';        
        nombre[0].addEventListener('input', function(e){
            nombrep = e.srcElement.value;
            if (nombrep !== ''){
                localStorage.setItem('Nombre', nombrep);
            }else{
                localStorage.setItem('Nombre', '¿Cómo estás?');
            }
            e.preventDefault();
        });
    },
    init: function(){
        var nombreP = document.getElementById('nombreP');
        nombreP.textContent = 'Hola, ' + octopus.getNombre();
        this.cambiarColorSecciones();
        this.cambiarColorPrincipal();
        this.cambiarColorSecundario();
        this.oyenteInput();
    }
}