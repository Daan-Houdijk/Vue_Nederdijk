<template>
  <div class="nieuws_pagina section">
    <h1>Artikel 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

    <router-link to="/" class="terug_knop">Terug</router-link>
  </div>
</template>

<script>
export default {
  name: "NewsItem"
};
</script>

<style scoped>
.nieuws_pagina h1 {
  text-align: center;
}

a.terug_knop {
  background: rgba(6, 84, 113);
  color: rgba(255, 194, 68);
  padding: 10px 0px;
  width: 20%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

@media screen and (max-width: 767px) {
  a.terug_knop {
    width: 100%;
    margin-bottom: 30px;
    margin-left: 0px;
  }
}
</style>
