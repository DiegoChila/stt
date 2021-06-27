<template>
    <div class="container">
        <div class="cont_st">
            <div class="mt-5">
                <button @click="getCharacter" class="btn btn-success">Buscar personaje</button>
            </div>
            <div v-if="display" class="mt-3 mb-5">
                <Card :name="name" :location="location" :image="image" :status="status" :specie="specie" :gender="gender"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import Swal from 'sweetalert2';

export default {
    name: 'Character',
    components: {
        Card,
    }, 
    data: function() {
        return {
            display: false,
            name: '',
            location: '',
            image: '',
            status: '',
            specie: '',
            gender: ''
        }
    },
    mounted: function() {
        this.getCharacter()
    },
    methods: {
        getCharacter() {
            fetch('https://stt-api-dc-2021.herokuapp.com/rymrandom').then(data => data.json())
            .then(response => {
                if (response.success) {
                    this.name = response.char.name;
                    this.image = response.char.image;
                    this.location = response.char.location;
                    this.image = response.char.image;
                    this.status = response.char.status;
                    this.specie = response.char.specie;
                    this.gender = response.char.gender;
                    this.display = true;

                    const localCharacters = localStorage.getItem('characters') ? JSON.parse(localStorage.getItem('characters')) : new Array;
                    let newChar = true;
                    localCharacters.forEach(localChar => {
                        if (localChar.id == response.char.id) newChar = false;
                    });
                    if (newChar) localCharacters.push(response.char);
                    localStorage.setItem('characters', JSON.stringify(localCharacters));
                } else {
                    Swal.fire({
                    icon: 'error',
                    title: `${response.error}`,
                    showConfirmButton: false,
                    timer: 1500
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style>
.cont_st {
    text-align: -webkit-center;
}
</style>