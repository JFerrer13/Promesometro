Vue.component('propuesta-corta', {
    template: //html
    `      
    <div  class="card" name="propuesta-corta">
        <div class="card-body">     
            <div class="row">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-outline-secondary" v-for="item in etiquetas" v-text="item"></button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h5>
                                <span class="badge badge-secondary" v-text="porcentaje"></span>
                                <strong v-text="'@' + usuario"></strong>
                                <span class="text-muted" v-text="data-fecha"></strong>
                            </h4>
                            <p class="text-muted" v-text="data-tuit"></p>
                            <a class="btn btn-info" :href="href" >ver en <i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ['usuario', 'data-fecha', 'data-tuit', 'href', 'porcentaje'],
});