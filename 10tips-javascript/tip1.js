        // Definición de la clase Beer
        class Beer {
            // Constructor de la clase Beer
            constructor(name, brand) {
                this.name = name;
                this.brand = brand;
            }

            // Método show para mostrar información de la cerveza
            show(){
                return this.name + " " + this.brand;
            }
        }

        // Creación de una instancia de la clase Beer
        let beer = new Beer("Tremens", "Delirium");

        // Imprimir el nombre de la cerveza en la consola
        // console.log(beer.name);

        // Imprimir información detallada de la cerveza usando el método show
        console.log(beer.show());