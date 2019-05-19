Vue.component('promesa-corta', {
    template: //html
    `
    <section>
        <div  class="card" name="promesa-corta">
            <div class="card-body">     
                <div class="row">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12">
                                <h4>Vamos a hacer que las remesas representen más ingresos a los guatemaltecos. </h4>
                                <p class="text-muted">
                                <strong>Candidato: </strong> Candidato <br>
                                <strong>Partido: </strong> Partido
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <a><strong>8</strong> <i class="fas fa-heart"></i></a><br>
                        <a><strong>2</strong> <i class="fas fa-heart-broken"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>      
    
    `,
    mounted(){
        this.cargarPromesas();
    },
    data(){
        return {
            Url: "https://3jsqinb7kf.execute-api.us-east-1.amazonaws.com/dev/"

        }
    }, 
    methods:{
        cargarPromesas() {            
            axios.get(this.Url + "promesas").then(response => {
                console.log(response);
            });
        }
    }
});