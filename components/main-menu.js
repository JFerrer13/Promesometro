Vue.component('main-menu', {
    props: ['visible'],
    template: //html
    `
    <div name="main-menu"  v-if="visible">
        <ul class="nav flotante">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item disabled">
                <a class="nav-link" href="#">Categorías</a>
                <nav class="nav flex-column">
                    <a class="nav-link" href="#">Salud</a>
                    <a class="nav-link" href="#">Educacion</a>
                    <a class="nav-link" href="#">Seguridad</a>
                    <a class="nav-link" href="#">Economía</a>
                    <a class="nav-link" href="#">Social</a>
                    <a class="nav-link" href="#">Institucional</a>
                </nav>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Comunidad</a>
                <nav class="nav flex-column">
                    <a class="nav-link" href="#">Usuarios</a>
                    <a class="nav-link" href="#">Moderadores</a>
                    <a class="nav-link" href="#">Grupos</a>
                </nav>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Promesas</a>
                <nav class="nav flex-column" >
                    <a class="nav-link" href="#">Nueva</a>
                    <a class="nav-link" href="#">En Caliente</a>
                    <a class="nav-link" href="#">Mas votadas</a>
                </nav>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void()">Buscar</a>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="" aria-label="Etiquetas..  " aria-describedby="button-addon2">
                    <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </li>  
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Cuenta</a>
            </li>
        </ul>
    </div>
    `,
    data: function(){
        return {
            Titulo: "Promesómetro"
        }
    }
});