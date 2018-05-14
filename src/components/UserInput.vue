<template>
  <div>
    <form>
      <div class="row">
        <div class="col span-1-of-1">
          <label for="searchKeyword">Search Keyword</label>
          <input type="text"
                 id="searchKeyword"
                 class="input"
                 name="searchKeyword"
                 v-model="userData.searchKeyword">
        </div>
        <div class="col span-1-of-1">
          <label for="stars">Stars</label>
          <input type="text"
                 id="stars"
                 class="input"
                 name="stars"
                 v-model="userData.stars">
        </div>
      </div>
      <div class="row">
        <div class="col span-1-of-1 space">
          <label for="license">License</label>
          <br>
          <select class="input"
                  id="license"
                  v-model="userData.license">
            <option value="mit">MIT</option>
            <option value="isc">ISC</option>
            <option value="apache-2.0">Apache</option>
            <option value="gpl">GPL</option>
          </select>
        </div>
        <div class="col span-1-of-1">
          <br>
          <div class="checbox-holder">
            <input type="checkbox"
                   name="true"
                   v-model="userData.forked">
            <label>Include Forked</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="buttonHolder">
          <button type="button"
                  class="btn"
                  @click.prevent="searchData">Search</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userData: {
          searchKeyword: '',
          stars: '',
          license: '',
          forked: false
        }
      }
    },
    methods: {
      searchData() {
        this.$router.push({ path: 'search', query: { q: this.userData.searchKeyword,
                                                     stars: this.userData.stars,
                                                     license: this.userData.license,
                                                     fork: this.userData.forked
                                                   }
                          });
      }
    }

  }
</script>

<style>
  .row {
    margin: 1% 12.0% 1% 12.0%;
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

  col:first-child {
    margin-left: 0;
  }

  .span-1-of-1 {
    width: 47%;
    margin-right: 3%;
  }

  .input {
    width: 100%;
    height: 20px;
  }


  .btn {
    min-width: 80px;
    min-height: 30px;
    color: #ffffff;
    background-color: #0e4275;
    align-items: center;
    justify-content: center;
  }

  .btn:hover {
    background-color: #497cc2;
  }


  .buttonHolder {
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    .row {
      margin: 0;
    }
    .span-1-of-1 {
      width: 100%;
    }
    .checbox-holder {
      text-align: center;
      padding-bottom: 15px;
    }
  }
</style>
