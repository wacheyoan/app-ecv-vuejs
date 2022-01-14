export
<template>
  <footer>
    <ul>
      <li><a href="">Lien 1</a></li>
      <li><a href="">Lien 2</a></li>
      <li><a href="">Lien 3</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
footer {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    list-style-type: none;
    display: flex;
    gap: 16px;
    align-items: center;

    & a {
      color: var(--black);
      text-decoration: none;
      font-weight: bold;
    }
  }
  width: 100%;
  border-top: 2px solid black;
  margin-top: auto;
  background: var(--blue);
}
</style>
