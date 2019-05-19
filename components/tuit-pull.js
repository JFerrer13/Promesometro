Vue.component('tuit-pull', {
    template: //html
    `      
    <section name="tuit-pull">
        <div class="row">
          <div class="col-12 text-center"><h3>Los tweets</h3></div>
        </div>
        <div class="row">

        </div>      
      </section>
    `,
    props: ['usuario', 'data-fecha', 'data-tuit', 'href', 'porcentaje'],
    data(){
        consulta();
        return {
            Url: "https://3jsqinb7kf.execute-api.us-east-1.amazonaws.com/dev/",
        }
    },  
    methods:{
        consulta(){                    
            const url = "obtenersecuencias?tabla=promesas";
            axios.get(this.Url + url).then(response => {
                if(response.status == 200){
                    console.log(response.data);                    
                }                
            }).catch(err =>  {
                //alert("Algo salio mal");
            });        
        },   
    },
});