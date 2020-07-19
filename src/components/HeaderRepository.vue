<template>
  <div>
    <header>
      <img src="@/assets/logo.svg" alt="GitHub Explore" />
      <router-link to="/">
        <arrow-left-icon size="1.5x"></arrow-left-icon>
        <span>Voltar</span>
      </router-link>
    </header>
    <repository-info />
  </div>
</template>

<script>
import { ArrowLeftIcon } from "vue-feather-icons";
import RepositoryInfo from "@/components/RepositoryInfo";
export default {
  name: "HeaderRepository",
  components: {
    ArrowLeftIcon,
    RepositoryInfo
  }
};
</script>

<style lang="css" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #a8a8b3;
  transition: color 0.2;
}

a:hover {
  color: #98989e;
}

svg {
  margin-right: 12px;
}
</style>