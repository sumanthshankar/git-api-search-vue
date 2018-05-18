<template>
  <div>
    <form>
      <div class="row">
        <div class="col span-1-of-1" :class="{invalid: $v.searchKeyword.$error}">
          <label for="searchKeyword">Search Keyword</label>
          <input type="text"
                 id="searchKeyword"
                 class="input"
                 name="searchKeyword"
                 @input="$v.searchKeyword.$touch()"
                 v-model="searchKeyword">
          <span v-if="$v.searchKeyword.$error">Please provide search word</span>
        </div>
        <div class="col span-1-of-1">
          <label for="stars">Stars</label>
          <input type="text"
                 id="stars"
                 class="input"
                 name="stars"
                 v-model="stars">
          <span v-if="!$v.stars.numeric">You must provide a number</span>
          <span v-if="$v.stars.$error">You must provide number of stars</span>
        </div>
      </div>
      <div class="row">
        <div class="col span-1-of-1 space">
          <label for="license">License</label>
          <br>
          <select class="input"
                  id="license"
                  v-model="license">
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
                   v-model="fork">
            <label>Include Forked</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="buttonHolder">
          <button type="button"
                  class="btn"
                  @click.prevent="searchData"
                  :disabled="$v.$invalid">Search</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { required, numeric } from 'vuelidate/lib/validators';
  export default {
    data() {
      return {
        searchKeyword: '',
        stars: '',
        license: '',
        fork: false
      }
    },
    validations: {
      searchKeyword: {
        required
      },
      stars: {
        required,
        numeric
      }
    },
    methods: {
      searchData() {
        this.$router.push({ path: 'search', query: { q: this.searchKeyword,
                                                     stars: this.stars,
                                                     license: this.license,
                                                     fork: this.fork
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
