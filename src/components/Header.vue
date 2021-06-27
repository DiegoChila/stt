<template>
    <nav class="navbar navbar-dark">
        <div class="container">
            <div class="col-12">
            <div class="row">
                <div class="col-md-6 logo_st">
                <a class="navbar-brand" href="https://grupostt.com/"><img src="https://grupostt.com/wp-content/uploads/2019/08/logo-STT-Header.png" alt="logo"></a>
                </div>
                <div class="col-md-6 links_st">
                    <div>
                        <router-link to="/character" class="btn">Personaje</router-link>
                    </div>
                    <div>
                        <router-link class="btn" to="/history">Historial</router-link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
nav {
  background-color: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
}

.links_st {
  display: flex;
  justify-content: flex-end;
  color: whitesmoke;
}

.links_st a {
  color: whitesmoke;
}

@media only screen and (max-width: 768px) {
  .links_st {
      margin-top: 30px;
      display: grid;
      justify-content: center;
  }

  .logo_st{
      display: grid;
      justify-content: center;
  }
}
</style>