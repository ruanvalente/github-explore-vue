<template>
  <div>
    <div v-for="(issue, index) in issues" :key="index">
      <a :href="`${issue.html_url}`" target="_blank">
        <div class="issue-detail">
          <strong>{{issue.title }}</strong>
          <p>{{ issue.user.login }}</p>
        </div>
        <arrow-right-icon size="1.5x" class="custom-class"></arrow-right-icon>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Issues",
  components: {
    ArrowRightIcon,
  },
  computed: {
    ...mapState(["issues"]),
  },
};
</script>

<style lang="css" scoped>
div {
  margin-top: 16px;
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

.issue-detail {
  flex: 1;
  margin: 0 16px;
}

.issue-detail strong {
  font-size: 16px;
  color: #3d3d46;
  line-height: 28px;
}

.issue-detail p {
  font-size: 14px;
  color: #a8a8b3;
  line-height: 21px;
}

.issue-detail svg {
  margin-left: auto;
  color: #a8a8b3;
}
</style>
