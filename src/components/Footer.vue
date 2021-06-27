<template>
    <footer class="text-center footer_st">
        <div class="container">
            <div class="col-12">
            <div class="row">
                <div class="col-md-6 mb-3 mt-3" >Prueba técnica realizada para: <br>
                <a href="https://grupostt.com/"><img src="https://grupostt.com/wp-content/uploads/2019/08/logo-STT-Header.png" alt="logo"></a>
                </div>
                <div class="col-md-6 mb-3 mt-3">
                <div>
                    <h3>Diego Chila</h3>
                </div>
                <div class="mt-2">
                    <a href="https://www.linkedin.com/in/diego-camilo-chila-murcia-a54150175" class="btn btn-outline-light btn_st"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
                    <a href="https://github.com/DiegoChila" class="btn btn-outline-light btn_st"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    <a href="mailto:diegoccm97@hotmail.com" class="btn btn-outline-light btn_st"><font-awesome-icon :icon="['fab', 'microsoft']" /></a>
                    <a href="mailto:diegoccm97@gmail.com" class="btn btn-outline-light btn_st"><font-awesome-icon :icon="['fab', 'google']" /></a>
                    <a href="tel:+573166486758" class="btn btn-outline-light btn_st"><font-awesome-icon :icon="['fas', 'phone']" /></a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
.footer_st {
  background-color: transparent;
  padding-top: 30px;
  padding-bottom: 30px;
}

.btn_st {
  border-radius: 50%!important;
  margin-left: 5px;
  margin-right: 5px;
  color: whitesmoke!important;
  border-color: whitesmoke!important;
}

.btn_st:hover {
  color: black!important;
  background-color: whitesmoke!important;
}

footer {
  color: whitesmoke;
}
</style>