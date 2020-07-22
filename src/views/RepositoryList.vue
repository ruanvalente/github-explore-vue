<template>
  <div class="repo-list">
    <div id="repo-container" v-for="(repository, index) in repositories" :key="index">
      <router-link :to="`/repository/${repository.full_name}`">
        <img :src="repository.owner.avatar_url" alt="Profile image" />
        <div>
          <strong>{{repository.full_name}}</strong>
          <p>{{ repository.description }}</p>
        </div>
        <arrow-right-icon size="1.5x" class="custom-class"></arrow-right-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ArrowRightIcon } from "vue-feather-icons";
export default {
  name: "RepositoryList",
  components: {
    ArrowRightIcon
  },
  computed: {
    ...mapState(["repositories"])
  }
};
</script>

<style lang="css" scoped>
#repo-container {
  margin: 16px 0;
}
.repo-list {
  margin-top: 80px;
  max-width: 700px;
}

a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

a:hover {
  transform: translateX(10px);
}

a + a {
  margin-top: 16px;
}
img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.repo-list div {
  flex: 1;
  margin: 0 16px;
}
strong {
  font-size: 16px;
  color: #3d3d4d;
  line-height: 28px;
}

p {
  font-size: 14px;
  color: #a8a8b3;
  line-height: 21px;
}

svg {
  margin-left: auto;
  color: #a8a8b3;
}
</style>