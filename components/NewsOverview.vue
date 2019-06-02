<template>
  <div id="nieuws" class="section">
    <h1>Nieuws</h1>
    <div class="artikel"
          v-for="(item, index) in items"
          :item="item"
          :index="index"
          :key="item.name">
      <div class="artikel_img">
        <img :src="item.image">
      </div>
      <div class="artikel_text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
        <router-link :to="item.url">Lees meer...</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsOverview",
  props: {
    items: Array
  }
};
</script>

<style scoped>
.artikel a {
  color: rgba(255, 194, 68);
  text-decoration: none;
}

.section {
  background: #0a91ab;
  text-align: center;
  padding: 5% 0px;
}

h1 {
  color: rgba(255, 194, 68);
}

.artikel {
  width: 70%;
  margin-left: 15%;
  background: white;
  text-align: left;
  margin-bottom: 50px;
}

.artikel_img,
.artikel_text {
  display: inline-block;
  text-align: left;
  vertical-align: top;
}

.artikel_img {
  padding-right: 20px;
  height: 200px;
}

.artikel_text {
  width: 70%;
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

@media screen and (max-width: 1024px) {
  .artikel_text {
    width: 50%;
  }
}

@media screen and (max-width: 767px) {
  .artikel_img {
    height: auto;
    width: 100%;
  }

  .artikel_img img {
    width: 100%;
  }

  .artikel_text {
    width: 90%;
    padding: 10px;
  }

  ul {
    list-style-type: none;
    width: 100%;
    padding: 0px;
  }

  .artikel {
    width: 80%;
    margin-left: 10%;
  }
}
</style>
