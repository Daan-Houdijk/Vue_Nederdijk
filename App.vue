<template>
  <div id="app">
    <nav>
      <div>
        <div class="logo">
          <img src="@/assets/logo.png">
        </div>
        <div class="menu">
          <ul>
            <li>
              <a href="/#over_ons">Over ons</a>
            </li>
            <li>
              <a href="/#nieuws">Nieuws</a>
            </li>
            <li>
              <a href="/#leden">Leden</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="header">
      <img src="@/assets/header.png">
    </div>
    <router-view/>
    <div id="footer">
      <p>© 2019-2020</p>
    </div>
  </div>
</template>

<style>
html {
  font-family: Arial;
}

body {
  margin: 0px;
  padding: 0px;
}

nav {
  width: 100%;
  background: rgba(6, 84, 113);
  position: fixed;
  z-index: 9999;
}

.menu > ul {
  padding: 0px;
}

.menu > ul > li {
  display: inline-block;
  border-left: 1px solid white;
}

.menu a {
  display: inline-block;
  width: 150px;
  padding: 10px 0px;
}

.menu > ul > li:first-of-type {
  border-left: 0px;
}

.menu a {
  color: rgba(255, 194, 68);
  text-decoration: none;
}

.menu a:hover {
  opacity: 0.8;
}

.menu {
  width: 80%;
  text-align: center;
  font-size: 20px;
  vertical-align: top;
  margin-top: 15px;
  display: inline-block;
}

.logo {
  display: inline-block;
}

.logo img {
  width: 150px;
}

.section h1 {
  text-align: center;
  font-size: 40px;
  color: rgba(255, 194, 68);
}

.section {
  width: 100%;
  line-height: 20px;
  padding: 100px 15%;
  box-sizing: border-box;
}

button {
  background-color: #065471;
  color: #ffc244;
  width: 100%;
  font-size: 1.3em;
  border: 0px;
  padding: 5px 0px;
}

button:hover {
  background-color: #ffc244;
  color: #065471;
  cursor: pointer;
}

#header img {
  width: 100%;
  margin-top: 110px;
}

#footer {
    text-align: center;
    background: #eee;
    position: fixed;
    width: 100%;
    bottom: 0px;
}

@media screen and (max-width: 1024px) {
  .menu {
    width: 78%;
  }

  .menu a {
    width: 110px;
  }
}

@media screen and (max-width: 767px) {
  nav {
    width: 100%;
    background: rgba(6, 84, 113);
    position: static;
    z-index: 9999;
  }

  .menu {
    width: 100%;
    margin-top: 0px;
  }

  .logo img {
    width: 30%;
    display: inline-block;
    margin-left: 35%;
  }

  .menu > ul > li {
    width: 100% !important;
    display: block;
    border: none;
  }

  .logo img {
    margin-top: 0px;
  }

  .section {
    width: 100% !important;
    padding: 100px 5%;
  }

  #header img {
    margin-top: 0;
  }
  
  button {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
  }
}
</style>
