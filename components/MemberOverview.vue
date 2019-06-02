<template>
  <div id="leden" class="section">
    <h1>Leden</h1>
    <div class="leden_container">
      <div class="slide_container">
        <div
          class="slide"
          v-for="(item, index) in items"
          :item="item"
          :index="index"
          :key="item.name"
        >
          <img :src="item.image">
          <div class="name">
            {{ item.name }}
            <br>
            Leeftijd: {{ item.age }}
            <br>
            Positie: {{ item.position }}
          </div>
        </div>
        <div class="controls">
          <button class="button_left" onclick="slideMembers(-1)">❮</button>
          <button class="button_right" onclick="slideMembers(1)">❯</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
window.slideMembers = function(offset) {
  var container = document.querySelector("#leden .slide_container");
  var slides = container.querySelectorAll(".slide");

  var index = container.attributes["slide-index"] || 0;
  index += offset;
  index = index % slides.length;
  index = index >= 0 ? index : slides.length + index;
  container.attributes["slide-index"] = index;
  var n = window.innerWidth < 768 ? 2 : 3;

  slides.forEach(function(slide, i) {
    slide.style.display = i >= index && i - index < n ? "" : "none";
  });
};

export default {
  name: "MemberOverview",
  props: {
    items: Array
  },
  mounted: function() {
    slideMembers(0);
  }
};
</script>

<style scoped>
.section {
  background: #eee;
}

h1 {
  margin-top: 30px;
}

.slide {
  display: inline-block;
  position: relative;
  margin: auto;
  text-align: center;
  line-height: 20px;
  width: 30%;
}

.slide img {
  width: 90% !important;
}

.leden_container {
  padding-bottom: 20px;
}

.controls {
  text-align: center;
  margin-top: 20px;
}

.slide_container {
  text-align: center;
}

button {
  background-color: #065471;
  color: #ffc244;
  width: 50px;
  font-size: 1.3em;
  padding: 10px 0px;
}

.button_left {
  margin-right: 20px;
}

@media screen and (max-width: 768px) {
  .slide {
    width: 48%;
  }
}
</style>
