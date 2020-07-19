<template>
  <div>
    <section>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/6674232?v=4" alt="Profile image" />
        <div>
          <strong>repository_fullname</strong>
          <p>description</p>
        </div>
      </header>

      <ul>
        <li>
          <strong>44</strong>
          <span>Star</span>
        </li>
        <li>
          <strong>1</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>2</strong>
          <span>Issue Abertas</span>
        </li>
      </ul>
    </section>

    <issues />
  </div>
</template>

<script>
import Issues from "@/components/Issues";
export default {
  name: "RepositoryInfo",
  components: {
    Issues
  }
};
</script>

<style lang="css" scoped>
section {
  margin-top: 80px;
}

header {
  display: flex;
  align-items: center;
}

img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  transition: transform 0.5s;
}

img:hover {
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