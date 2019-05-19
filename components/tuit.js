Vue.component('tuit', {
    template: //html
    `      
    <div  class="card" name="tuit">
        <div class="card-body">     
            <div class="row">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-outline-secondary" v-for="inte in etiquetas"><span class="text-muted"  v-text="inte"></span></button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h3>
                                <span class="badge badge-secondary" v-text="porcentaje"></span>
                                <strong v-text="'@' + usuario"></strong>
                                <span class="text-muted" v-text="fecha"></span>
                            </h3>
                            <p class="text-muted" v-text="tuitt"></p>
                            <a class="btn btn-info" style="color:white" :href="href" >ver en <i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ['usuario', 'fecha', 'tuitt', 'href', 'porcentaje', 'lab'],
    data: function (){
        return { 
            etiquetas: [],
        }
    },
    mounted: function(){
        this.etiquetas = this.lab.split(',');
    }
});