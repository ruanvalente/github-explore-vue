<template>
  <div>
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="Github Explore Vue" srcset />
    </router-link>
    <h1 class="title">Explore repositórios no Github</h1>
    <form class="form">
      <input
        :class="hasError ? 'error' : ''"
        type="text"
        placeholder="Entre com usuário/repositório no Github"
        v-model="newRepository"
      />
      <button type="submit" @click.prevent="hanldeAddRepository">Pesquisar</button>
    </form>
    <span v-if="!!errorMessager">{{errorMessager}}</span>
    <repository-list />
  </div>
</template>

<script>
import { mapState } from "vuex";
import RepositoryList from "@/views/RepositoryList";

export default {
  name: "Main",
  components: {
    RepositoryList
  },
  data() {
    return {
      errorMessager: "",
      newRepository: "",
      hasError: false
    };
  },
  computed: {
    ...mapState(["repositories"])
  },
  methods: {
    hanldeAddRepository() {
      if (!this.newRepository) {
        this.hasError = true;
        return;
      }
      this.$store.dispatch("addUserRepository", `${this.newRepository}`);
      this.$store.dispatch("getRepositories");
      this.newRepository = "";
    }
  }
};
</script>

<style lang="css" scoped>
.title {
  max-width: 433px;

  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 40px;
}

.form {
  display: flex;
  margin-top: 40px;
  max-width: 700px;
}

.form input {
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 2px solid #fff;
  border-right: 0;
  border-radius: 5px 0px 0px 5px;
  color: #a8a8a8b3;
  box-shadow: 0px 2px 2px 0px rgba(168, 162, 162, 0.5);
  transition: all 0.2s;
}

.form input.error {
  border-color: #c53030;
}

.form input:hover {
  transform: scale(1.1);
}

button {
  max-width: 200px;
  width: 100vh;
  background: #04d361;
  border: none;
  border-radius: 0px 5px 5px 0px;
  box-shadow: 0px 2px 2px 0px rgba(168, 162, 162, 0.5);
  color: #fff;
  height: 70px;
  font-weight: bold;
  transition: background-color 0.5s;
}
button:hover {
  background-color: #09c05b;
}

span {
  display: block;
  color: #c53030;
  margin-top: 10px;
}
</style>