<template>
  <div>
    <form>
      <div class="form-group row">
        <label for="searchKeyword" class="col-sm-2 col-form-label">Search Keyword</label>
        <div class="col-sm-10">
          <input type="text"
                 class="form-control"
                 id="searchKeyword"
                 placeholder="Search Keyword"
                 v-model="userData.searchKeyword">
        </div>
      </div>
      <div class="form-group row">
        <label for="stars" class="col-sm-2 col-form-label">Stars</label>
        <div class="col-sm-10">
          <input type="text"
                 class="form-control"
                 id="stars"
                 placeholder="Stars"
                 v-model="userData.stars">
        </div>
      </div>
      <div class="form-group row">
        <label for="license" class="col-sm-2 col-form-label">License</label>
        <div class="col-sm-10">
          <select name="input"
                  id="license"
                  v-model="userData.license">
            <option value="mit">MIT</option>
            <option value="isc">ISC</option>
            <option value="apache-2.0">Apache</option>
            <option value="gpl">GPL</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2">Forked</div>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value="true"
                   v-model="userData.forked">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit"
                  class="btn btn-primary"
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
        console.log(this.userData.forked);
      }
    }

  }
</script>
