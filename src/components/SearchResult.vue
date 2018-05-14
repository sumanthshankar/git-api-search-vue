<template>
  <div>
    <div v-if="items.length !== 0">
      <div class="horizontal-line-box">
        <hr class="horizontal-line">
      </div>
      <div class="horizontal-line-box">
        <p class="text">Search Results:</p>
      </div>
      <div class="row" v-for="item in items">
        <div class="col span-1-of-4">
          <h4 class="text-position text-position-color">{{ item.owner.login }} / {{ item.name }}</h4>
          <p class="text-position">{{ item.description }}</p>
          <p class="text-position">{{ item.owner.url }}</p>
        </div>
        <hr class="horizontal-line-divider">
        <div class="col span-2-of-4 vertical-divider-first">
          <h4 class="text-position-center">Stars</h4>
          <p class="text-position-center">{{ item.stargazers_count }}</p>
        </div>
        <div class="col span-3-of-4 vertical-divider">
          <h4 class="text-position-center">License</h4>
          <p class="text-position-center" v-if="item.license !== null">{{ item.license.name }}</p>
          <p class="text-position-center" v-if="item.license === null">No info</p>
        </div>
        <div class="col span-4-of-4 vertical-divider">
          <h4 class="text-position-center">Forked</h4>
          <p class="text-position-center">{{ item.fork }}</p>
        </div>
      </div>
    </div>
    <div class="row" v-if="items.length === 0">
      <div>
        <p>No Results to display</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [],
        q: this.$route.query.q,
        stars: this.$route.query.stars,
        license: this.$route.query.license,
        fork: this.$route.query.fork
      }
    },
    created() {
      this.$http.get(`repositories?q=${this.q}&stars=${this.stars}&license=${this.license}&fork=${this.fork}`)
        .then((response) => {
          this.items = response.body.items;
          console.log(this.items);
        });
    }
  }
</script>

<style>
  .row {
    margin: 1% 12.0% 1% 12.0%;
    background-color: #ffffff;
  }

  .row:before,
  .row:after {
    content:"";
    display:table;
  }

  .row:after {
    clear:both;
  }

  .col {
    display: block;
    float: left;
  }


  .col:first-child {
    margin-left: 0;
  }

  .span-1-of-4 {
    width: 55%;
  }

  .span-2-of-4 {
    width: 14%;
  }

  .span-3-of-4 {
    width: 14%;
  }

  .span-4-of-4 {
    width: 14%;
  }

  @media only screen and (max-width: 700px) {
    .row {
      margin: 0;
    }
  }

  @media only screen and (max-width: 700px) {
    .span-1-of-4 {
      width: 100%;
    }
  }

  @media only screen and (max-width: 700px) {
    .span-2-of-4 {
      width: 32.3%;
    }
  }

  @media only screen and (max-width: 700px) {
    .span-3-of-4 {
      width: 32.3%;
    }
  }

  @media only screen and (max-width: 700px) {
    .span-4-of-4 {
      width: 32.3%;
    }
  }

  .horizontal-line-box {
    margin: 1% 12.0% 1% 12.0%;
  }

  .horizontal-line {
    width: 100%;
    background: #fff
  }

  .text {
    text-align: center;
  }

  .border-right {
    border-left: 1px solid #fff;
  }

  .text-position {
    padding-left: 2%;
  }

  .text-position-center {
    text-align: center;
  }

  .text-position-color {
    color: #0e4275;
  }

  .vertical-divider-first {
    position: relative;
    border-left: 1px solid #989898;
  }

  .vertical-divider {
    position: relative;
    border-left: 1px solid #989898;
  }

  .horizontal-line-divider {
    width: 0%;
  }

  @media only screen and (max-width: 700px) {
    .vertical-divider-first {
      position: relative;
      border-left: 0px;
    }
  }

  @media only screen and (max-width: 700px) {
    .horizontal-line-divider {
      width: 100%;
      background: #989898;
    }
  }
</style>
