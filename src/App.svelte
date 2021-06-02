<script>
  import Header from "./components/header.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";

</script>

<main>
  <Header />
  <Router {routes} />
</main>

<style>
  :root {
    width: 100%;
    background-color: rgb(54, 54, 54);
  }

</style>
