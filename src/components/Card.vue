<template>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-body">
            <h3 class="card-title">{{name}}</h3>
            <ul class="list-group">
                <li class="list-group-item"><b>Especie: </b>{{specie}}</li>
                <li class="list-group-item"><b>Genero: </b>{{gender}}</li>
                <li class="list-group-item"><b>Estado: </b>{{status}}</li>
                <li class="list-group-item"><b>Ubicación: </b>{{location}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        name: String,
        image: String,
        location: String,
        status: String,
        specie: String,
        gender: String,
    }
}
</script>