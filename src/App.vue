<!-- In a component -->
<template>
  <main>
 
    <section>
      <div class="container">
        <h1 v-scroll-reveal.reset="{ delay: 250 }"></h1>

        <div class="row">
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
          >
            <p></p>
          </transition>
          <transition>
            <p></p>
          </transition>
        </div>
      </div>
    </section>
 
    <!-- This section will reveal itself each time it's scrolled into view -->
    <section v-scroll-reveal.reset>
      <div class="container">
        <h1 v-scroll-reveal.reset="{ delay: 100, scale: 2 }"></h1>

        <div class="row">

          <transition>
            <p></p>
          </transition>
          
          <p></p>
        </div>
      </div>
    </section>
 
    <!-- Element-specific configuration options can be passed like this -->
    <section v-scroll-reveal.reset="{ delay: 250 }">
      <div class="container">
        <h1></h1>

        <div class="row">
          <p></p>
          <p></p>
        </div>
      </div>
    </section>
 
  </main>
</template>

<script>

export default {
  methods: {
    // ----------
    // EN ENTRANT
    // ----------

    beforeEnter(el) {
      // ...
      el.style.left = "-100px";
      el.style.opacity = 0;
    },
    // la fonction de rappel done est facultative quand
    // utilisée en combinaison avec du CSS
    enter() {
      // ...

    }

  }
}

</script>
 
<style>

@import url('./assets/scss/index.scss');

  section {
    height: 100vh;
    color: #fff;
  }

  h1 {
    height: 20px;
    width: 40%;
    background-color: #fff;
    border-radius: 20px;
    margin: 0 auto;
  }

  p {
    height: 200px;
    width: 50%;
    background-color: #fff;
    border-radius: 20px;
  }

  section:nth-child(1) {
    background-color: #cb3837;
  }

  section:nth-child(2) {
    background-color: rgb(120, 33, 117);
  }

  section:nth-child(3) {
    background-color: rgb(41, 0, 138);
  }

  .container {
    padding: 30px;
    max-width: 70%;
    margin: 0 auto;
  }

  .row {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 500px;
  }
</style> 
