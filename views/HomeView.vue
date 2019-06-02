<template>
  <div>
    <TextWithImage/>
    <MemberOverview
      :items="[
        {
          image: require('@/assets/leden/lid-een.jpg'), 
          name: 'Rick de vries', 
          age: '43', 
          position: 'Lorem Ipsum'
        },
        {
          image: require('@/assets/leden/lid-twee.jpg'), 
          name: 'Mattijs Mols', 
          age: '30', 
          position: 'Lorem Ipsum'
        },
        {
          image: require('@/assets/leden/lid-drie.jpg'), 
          name: 'Isa Vanmeer', 
          age: '27', 
          position: 'Lorem Ipsum'
        },
        {
          image: require('@/assets/leden/lid-vier.png'), 
          name: 'Daan Houtdijk', 
          age: 'XX', 
          position: 'Lorem Ipsum'
        },
        {
          image: require('@/assets/leden/lid-vijf.png'), 
          name: 'Lorem Ipsum 1', 
          age: 'XX', 
          position: 'Lorem Ipsum'
        },
        {
          image: require('@/assets/leden/lid-zes.png'), 
          name: 'Lorem Ipsum 2', 
          age: 'XX', 
          position: 'Lorem Ipsum'
        },
        {
          image: require('@/assets/leden/lid-zeven.png'), 
          name: 'Lorem Ipsum 3', 
          age: 'XX', 
          position: 'Lorem Ipsum'
        },
        {
          image: require('@/assets/leden/lid-acht.png'), 
          name: 'Lorem Ipsum 4', 
          age: 'XX', 
          position: 'Lorem Ipsum'
        }
      ]"
    />
    <NewsOverview
      :items="[
        {
          image: require('@/assets/news/nieuws-een.jpg'), 
          title: 'HSV Nederdijk heeft een nieuwe site!', 
          body: 'Sinds kort hebben we een gloed nieuwe site. Met zeer duidelijk overleg hebben we met specialisten een site ontworpen. Het ontwerp is nu al genomineerd voor meerdere prijzen volgens de KNB voor ICT. Dit is hoe dan ook geen showboating of wierd flex.', 
          url: '/nieuws/nieuws-een'
        },
        {
          image: require('@/assets/news/nieuws-twee.png'), 
          title: 'Lorem Ipsum', 
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
          url: '/nieuws/nieuws-twee'
        },
        {
          image: require('@/assets/news/nieuws-drie.png'), 
          title: 'Lorem Ipsum', 
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
          url: '/nieuws/nieuws-drie'
        }
      ]"
    />
    <ContactForm/>
  </div>
</template>

<script>
import TextWithImage from "@/components/TextWithImage.vue";
import MemberOverview from "@/components/MemberOverview.vue";
import NewsOverview from "@/components/NewsOverview.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "HomeView",
  components: {
    TextWithImage,
    MemberOverview,
    NewsOverview,
    ContactForm
  }
};
</script>
