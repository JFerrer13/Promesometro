Vue.component('develope-info', {
    template: //html
    `
    <section name="develope-info">
        <div class="row text-center" >
            <div class="col-md-12" >
                <h2>Backend</h2>
            </div>
        </div>
        <div class="row text-center" >
        <div :class="'col-sm-' + (Math.floor(12/backend.length))" v-for="(item, index) in backend">
        <div class="card brand">
            <div class="card-body">
                <h1><i><img :src="item.icono"/></i></h1>
                <h3 v-text="item.nombre"></h3>
            </div>
        </div>
        <div class="row text-center" >
            <div class="col-md-12" >
                <h2>Frontend</h2>
            </div>
        </div>
        <div class="row text-center" >
            <div :class="'col-sm-' + (Math.floor(12/frontend.length))" v-for="(item, index) in frontend">
                <div class="card brand">
                    <div class="card-body">
                        <h1><i :class="item.icono" :style="'background-color:' + item.color"></i></h1>
                        <h3 v-text="item.nombre"></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </section>
    `,
    data: function (){
        return {
            frontend: [
                {
                  icono: 'fab fa-vuejs',
                  color: '#42b983',
                  nombre:'Vue',
                },
                {
                  icono: 'fab fa-font-awesome-flag',
                  color: '#298be6',
                  nombre:'FontAwesome',
                },
                {
                  icono: 'fab fa-bootstrap',
                  color: '#563d7c',
                  nombre:'Bootstrap',
                },
            ],
            backend: [
                {
                  icono: 'img/245px-Amazon_Web_Services_Logo.svg.png',
                  color: '#eee',
                  nombre:'Amazon Web Services',
                },
            ]
        }
    }
})