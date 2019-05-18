Vue.component('main-nav', {
    template: //html
    `
    <ul class="nav main-nav">
        <li class="nav-item flag">
            <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item brand">
            <a class="nav-link" href="#" v-text="Titulo"></a>
            <main-menu :visible="desplegarMenu"></main-menu>
        </li>
        <li class="nav-item desplegar"  @click="verMenu()">
            <a class="nav-link" href="#"><i :class="iconoMenu"></i></a>
        </li>
    </ul>
    `,
    data: function(){
        return {
            Titulo: "Promesómetro",
            desplegarMenu: false,
            iconoMenu: 'fas fa-chevron-down',
        }
    },
    methods:{
        verMenu: function (){
            this.desplegarMenu = !this.desplegarMenu;

            if(!this.desplegarMenu){
                this.iconoMenu = 'fas fa-chevron-down';
            }else{
                this.iconoMenu = 'fas fa-chevron-up';
            }
        }
    }
});