<script>
</script>

<header>
  <div class="nav-links">
    <a id="newRecord" href="#/enter-record">Create Record</a>
    <a id="search" href="#/search">Search</a>
  </div>
  <h4 id="headerTitle">Food & Labor Tracker</h4>
</header>
<hr />

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border-bottom: 1px;
    align-items: baseline;
  }

  header .nav-links {
    margin-left: 3%;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-between;
    width: 15%;
  }
  .nav-links a {
    text-decoration: none;
    color: rgb(194, 194, 194);
    display: flex;
    flex-direction: row;
  }

  #headerTitle {
    margin-right: 3%;
    color: rgb(194, 194, 194);
  }
  hr {
    width: 98%;
  }
  #newRecord:hover,
  #search:hover {
    color: white;
  }

</style>
