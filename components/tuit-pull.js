Vue.component('tuit-pull', {
    template: //html
    `      
    <section name="tuit-pull">
        <div class="row">
          <div class="col-12 text-center"><h3>Los tweets</h3></div>
        </div>
        <div class="row">
            <div class="row">
                <div v-for="item in tweets" >
                    <tuit :usuario="item.usuario" :fecha="item.fecha" :tuitt="item.tuit" :tuit="item.tuit" :porcentaje="item.porcentaje"></tuit> 
                </div>
            </div> 
        </div>      
    </section>
    `,
    props: ['usuario', 'data-fecha', 'data-tuit', 'href', 'porcentaje'],
    data(){
        return {
            Url: "https://3jsqinb7kf.execute-api.us-east-1.amazonaws.com/dev/",
            tweets: [],
        }
    },  
    methods:{
        consulta(){                    
            const url = "obtenertuits?tuser=creoguate&partido=GT_CREO";
            axios.get(this.Url + url).then(response => {
                if(response.status == 200){                    
                    let datos = JSON.parse(response.data.body);
                    console.log(datos);
                    for(var i = 0; i < datos.length; i++ ){
                        this.tweets.push({
                            usuario: datos[i][0],
                            fecha: datos[i][2],
                            tuit: datos[i][3],
                            porcentaje: Math.trunc(datos[i][5]),
                        })
                    } 
                    console.log(this.tweets);
                }                
            }).catch(err =>  {
                //alert("Algo salio mal");
            });        
        },   
    },
    mounted: function(){
        this.consulta();
    },
});