<template>
    <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner mt-5 mb-5">
                <div class="carousel-item active">
                    <div class="row p-2">
                        <div v-for="char in viewCharacters" :key="char.id" class="col-md-4 p-4">
                            <div v-if="char.id">
                                <Card :name="char.name" :location="char.location" :image="char.image" :status="char.status" :specie="char.specie" :gender="char.gender"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" @click="previusView">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" @click="nextView">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    name: 'History',
    components: {
        Card,
    }, 
    data: function() {
        return {
            allCharacters: new Array,
            viewCharacters: new Array,
            indexView: 0,
        }
    },
    mounted: function() {
        this.getLocalCharacters()
    },
    methods: {
        getLocalCharacters() {
            const allCharacters = localStorage.getItem('characters') ? JSON.parse(localStorage.getItem('characters')) : new Array;
            for (let indexA = 0; indexA < allCharacters.length/3; indexA++) {
                let groupCharacters = new Array;
                for (let indexB = 0; indexB < 3; indexB++) {
                    if (allCharacters[indexA + (indexB*3)]) groupCharacters.push(allCharacters[indexA + (indexB*3)]);
                }
                this.allCharacters.push(groupCharacters);
            }
            this.viewCharacters = this.allCharacters[this.indexView];
        },
        nextView() {
            this.indexView++;
            if (this.indexView > this.allCharacters.length - 1) this.indexView = 0;
            this.viewCharacters = this.allCharacters[this.indexView];
        },
        previusView() {
            this.indexView--;
            if (this.indexView < 0) this.indexView = this.allCharacters.length - 1;
            this.viewCharacters = this.allCharacters[this.indexView];
        }
    }
}
</script>