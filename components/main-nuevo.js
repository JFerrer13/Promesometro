Vue.component('main-nuevo', {  
    template: //html
    `
    <section name='main-nuevo'>
        <div class="row justify-content-md-center" style="margin-top: 25px">
            <div class="col-8">
                <h3 class="text-center">¡Ayudanos a vigilarlos!</h3>
            </div>
        </div>
        <div class="row justify-content-md-center" style="margin-top: 25px">
            <div class="col-2">
                <button class="btn btn-success btn-block" @click="NuevaPropuesta()"v-if="!showform">Ingresar propuesta</button>
                <button class="btn btn-danger btn-block" @click="CancelarIngreso()" v-if="showform">Cancelar</button>
            </div>
        </div>
        <div class="row justify-content-md-center" style="margin-top: 10px" v-if="showform">
            <div class="col-8">
                <label>Promesa</label>
                <textarea type="text" class="form-control" name="inPromesa" v-model="dato.Promesa"></textarea>
            </div>
        </div> 
        <div class="row justify-content-md-center" v-if="showform" style="margin-top:20px">
            <div class="col-4">
                <label>Candidato</label>
                <input type="text" class="form-control" name="inCandidato" v-model="dato.Candidato">
            </div>
            <div class="col-4">
                <label>Partido</label>
                <input type="text" class="form-control" name="inPartido" v-model="dato.Partido">   
            </div>
        </div> 
        <div class="row justify-content-md-center" v-if="showform" style="margin-top:20px">
            <div class="col-4">
                <label>Fotografías</label>
                <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                        <label class="custom-file-label" for="inputGroupFile04">Adjuntar</label>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <label>Partido</label>
                <input type="text" class="form-control" name="inCandidato"  >
            </div>
        </div>  
        <div class="row justify-content-md-center" style="margin-top: 25px">
            <div class="col-2">
                <button type="button" class="btn btn-info" @click="consulta()" style="width:100%" v-if="showform">Enviar</button>
            </div>
        </div>
    </section>    
    `,
    mounted(){
        //this.nuevaPromesa(8);
        //this.consulta();
    },
    data(){
        return {
            Url: "https://3jsqinb7kf.execute-api.us-east-1.amazonaws.com/dev/",
            Titulo: "Promesómetro", 
            showform: false,
            dato: {
                Promesa: "", 
                Partido: "",
                Candidato: "",
                Archivos: null,
            }
        }
    },    
    methods:{
        NuevaPropuesta(){
            this.showform = !this.showform;
        },
        CancelarIngreso(){
            this.showform = !this.showform;
            this.dato.Promesa = "";
            this.dato.Partido = "";
            this.dato.Candidato = "";
            this.dato.Archivos = null;
        }, 
        consulta(){                    
            const url = "obtenersecuencias?tabla=promesas";
            axios.get(this.Url + url).then(response => {
                if(response.status == 200){
                    let id = response.data;                    
                    this.nuevaPromesa(id);                    
                }                
            }).catch(err =>  {
                //alert("Algo salio mal");
            });        
        },        
        nuevaPromesa(id) {
            const url = "promesas";            
            let Parametros = { 
                "id": id,
                "promesa": this.dato.Promesa,
                "partido": this.dato.Partido,
                "candidato": this.dato.Candidato
            };            
            axios.put(this.Url + url, Parametros).then(response => {
                if(response.status == 200 ){
                    this.CancelarIngreso();
                }                
            });
         }    
    }
});