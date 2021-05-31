<script>
</script>

<img src="images/bg-image.jpeg" alt="pizza" class="bg-image" />
<div class="login-frame">
  <h2>Food & Labor Tracker</h2>
  <!-- on click routes to home page -->
  <a href="#/enter-record"><button class="login">Enter</button></a>
</div>

<style>
  img {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  @media only screen and (max-width: 570px) {
    img {
      overflow: auto;
      width: auto;
    }
  }

  .login-frame {
    background-color: rgba(107, 107, 107, 0.5);
    position: fixed;
    left: 10%;
    top: 10%;
    width: auto;
    max-height: 25%;
    border-radius: 0.25em;
    text-align: center;
    padding: 0 5%;
  }

  .login {
    position: relative;
    background-color: rgb(82, 131, 3);
    border: 0.1rem solid black;
    color: black;
    border-color: black;
    border-radius: 0.25em;
    width: 60px;
    margin-bottom: 2%;
  }

  .login:hover {
    background-color: rgb(114, 185, 0);
  }

</style>
