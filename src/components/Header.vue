export
<template>
  <header>
    <nav>
      <ul>
        <li><img src="@/assets/logo.png" alt="Logo"></li>
        <li><a href="">Menu 1</a></li>
        <li><a href="">Menu 2</a></li>
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

nav {
  display: flex;
  justify-content: flex-end;

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
</style>