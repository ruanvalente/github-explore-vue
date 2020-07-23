<template>
  <div>
    <header class="header">
      <img src="@/assets/logo.svg" alt="GitHub Explore Vue" />
      <router-link to="/">
        <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
        <p>voltar</p>
      </router-link>
    </header>

    <section>
      <header>
        <img :src="repositoriesInfo.owner.avatar_url" :alt="repositoriesInfo.full_name" />
        <div>
          <strong>{{ repositoriesInfo.full_name }}</strong>
          <p>{{ repositoriesInfo.description }}</p>
        </div>
      </header>

      <ul>
        <li>
          <strong>{{ repositoriesInfo.stargazers_count }}</strong>
          <span>Star</span>
        </li>
        <li>
          <strong>{{ repositoriesInfo.forks_count }}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{{ repositoriesInfo.open_issues_count }}</strong>
          <span>Issue Abertas</span>
        </li>
      </ul>
    </section>

    <issues />
  </div>
</template>

<script>
import { ArrowLeftIcon } from "vue-feather-icons";
import Issues from "@/views/Issues";

import { mapState, mapActions } from "vuex";

export default {
  name: "RepositoryInfo",
  data() {
    return {
      username: this.$route.params.username,
    };
  },
  components: {
    Issues,
    ArrowLeftIcon,
  },
  computed: {
    ...mapState(["repositoriesInfo"]),
  },
  methods: {
    ...mapActions(["getRepositoriesList", "getIssues"]),
  },
  mounted() {
    this.getRepositoriesList(this.username);
    this.getIssues(this.username);
  },
};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #a8a8b3;
  transition: color 0.2s;
}

.header p {
  margin-top: 0;
  margin-left: 10px;
}

.header a:hover {
  color: #a9a9b1;
}

section {
  margin-top: 80px;
}

header {
  display: flex;
  align-items: center;
}

section header img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  transition: transform 0.5s;
}

section header img:hover {
  transform: scale(1.1);
}

div {
  margin-left: 30px;
}

strong {
  font-size: 36px;
  line-height: 42px;
  color: #3d3d4d;
}

@media (max-width: 550px) {
  strong {
    font-size: 24px;
  }
}

p {
  font-size: 18px;
  line-height: 23px;
  color: #737380;
  margin-top: 8px;
}

ul {
  display: flex;
  margin: 40px;
  list-style: none;
}

li + li {
  margin-left: 80px;
}

li strong {
  display: block;
  font-size: 36px;
  color: #3d3d4d;
  transition: transform 0.2s;
}

li span {
  display: block;
  margin-top: 4px;
  color: #6c6c80;
  transition: transform 0.2s;
}

li strong:hover {
  transform: scale(1.2);
  cursor: pointer;
}
li span:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>
