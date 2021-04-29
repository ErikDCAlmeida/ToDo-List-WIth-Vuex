<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/"
          ><img src="@/assets/logoToDo.png" alt="logoToDo"
        /></router-link>
      </div>
      <div class="menu">
        <nav>
          <ul>
            <router-link to="/"><li>Home</li></router-link>
            <router-link to="/about"><li>Sobre</li></router-link>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background: #0000ff;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 5px;
  display: flex;
}
.logo {
  font-size: 40px;
  color: #fff;
  height: 60px;
  font-weight: bold;
}
.logo a {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 225px;
  height: 35px;
  margin-right: 5px;
}
.menu {
  flex: 1;
  height: inherit;
}
.menu ul,
.menu li {
  list-style: none;
}
.menu ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.menu nav {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.menu a {
  padding: 5px 10px;
  margin-right: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 17px;
}
.menu a:last-child {
  margin-right: 0px;
}
.menu a.router-link-exact-active {
  background: #fff;
  color: #0000ff;
  border-radius: 5px;
}

@media (max-width: 415px) {
  header {
    height: auto;
  }
  .container {
    flex-direction: column;
  }
  .menu nav {
    justify-content: center;
  }
  .menu ul {
    padding: 0;
  }
}
</style>
