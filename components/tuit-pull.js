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
            <tuit usuario="tiem.usuario"></tuit> </div>
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
            const url = "obtenertuits?tuser=panresponde&partido=GT_CREO";
            axios.get(this.Url + url).then(response => {
                if(response.status == 200){                    
                    let datos = JSON.parse(response.data.body);
                    
                    for(var i = 0; i < datos.length; i++ ){
                        this.tweets.push({
                            usuario: datos[i][0],
                            fecha: datos[i][2],
                        })
                    } 
                    
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