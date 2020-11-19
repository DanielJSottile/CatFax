<template>
  <div class="about">
    <h1>About CatFax<i class="fas fa-paw"></i></h1>
    <p v-for="paragraph in texts" v-bind:key="paragraph.id" class="text">
      {{ paragraph.text }}
    </p>
    <img
      v-bind:title="message"
      class="image"
      src="https://media1.giphy.com/media/ule4vhcY1xEKQ/giphy.gif"
      alt="cat-typing-gif"
    />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      texts: [
        {
          id: 0,
          text: `CatFax was created by Daniel Sottile while working at Nexient in Ann Arbor, MI.  
        He does not like cats, but knows other people do and he just wants to make everyone happy.
        This site uses the Cat Facts API (http://cat-fact.herokuapp.com) as well as The Cat API (https://api.thecatapi.com)
        in order to provide insightful facts about cats and cute images!`
        },
        {
          id: 1,
          text: `Please enjoy this site.  This is my first time learning Vue, I have no clue what I'm doing at the moment, so it
          would mean a lot if you could give me a virtual hugsies!! (=^-ω-^=)`
        }
      ],
      message: "Aww lookie these cute fuggin cats tho!"
    };
  }
};
</script>

<style scoped>
.text {
  text-align: center;
  word-spacing: 2px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 50%;
}

.image {
  border: 10px double #999999;
  border-radius: 100px;
  height: 400px;
}
</style>
