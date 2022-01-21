export
<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/"
          ><img src="@/assets/logo.png" alt="Logo"
          /></router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
        <li><router-link to="/registration">Inscription</router-link></li>
        <li><a href="">Menu 3</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
header {
  & nav {
    display: flex;
    justify-content: flex-end;
    height: 70px;

    & ul {
      list-style-type: none;
      display: flex;
      gap: 16px;
      align-items: center;

      img {
        width: 35px;
      }

      & li:first-child {
        position: absolute;
        left: 0;
        transform: translateX(50%);
      }

      & a {
        color: var(--black);
        text-decoration: none;
        font-weight: bold;
      }
    }

    border-bottom: 2px solid black;
    padding-left: 64px;
    padding-right: 64px;
    background: var(--blue);
  }
}

</style>
