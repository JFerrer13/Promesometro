Vue.component('main-nuevo', {
  //  props: ['visible'],
    template: //html
    `
    <div name='main-nuevo'>
        <div class="row justify-content-md-center" style="margin-top: 25px">
            <div class="col-2">
                <button class="btn btn-success btn-block" @click="NuevaPropuesta()">Ingresar propuesta</button>
            </div>
        </div>
        <button type="button" class="btn btn-info" @click="consulta()">Consultar</button>
        <div class="row justify-content-md-center" v-if="showform" style="margin-top:20px">
            <div class="col-4">
                <label>Candidato</label>
                <input type="text" class="form-control" name="inPromesa" v-model="dato.Promesa">
            </div>
            <div class="col-4">
                <label>Partido</label>
                <input type="text" class="form-control" name="inCandidato" v-model="dato.Candidato">   
            </div>
        </div>
        <div class="row justify-content-md-center" style="margin-top: 10px" v-if="showform">
            <div class="col-8">
                <label>Promesa</label>
                <textarea type="text" class="form-control" name="inPromesa" v-model="dato.Promesa"></textarea>
            </div>
        </div>    
    </div>    
    `,
    data: function(){
        return {
            Titulo: "Promesómetro", 
            showform: false,
            dato:{
                Promesa: "", 
                Partido: "",
                Candidato: ""
            }
        }
    },
    methods:{
        NuevaPropuesta: function(){
            this.showform = !this.showform;
        }, 
        consulta: function(){

            axios({
                method: 'get',
                url: 'https://3jsqinb7kf.execute-api.us-east-1.amazonaws.com/dev/tweets',
               // responseType: 'stream'
            })
            .then(function (response) {
                response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            });
        }
    
    }

});