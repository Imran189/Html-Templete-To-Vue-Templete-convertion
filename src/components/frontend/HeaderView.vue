<template lang="">
  <div>
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
          <router-link class="nav-link" :to="{name: 'home'}">
              <img src="frontend/img//logo.png" alt />
          </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div
              class="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul class="nav navbar-nav menu_nav justify-content-end" id="menu">
                <li class="nav-item ">
                  <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name:'AboutView'}" class="nav-link" >About</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'ServiceView'}" class="nav-link">Services</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'Protfolio'}" class="nav-link">Portfolio</router-link>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Pages</a
                  >
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="elements.html">Elements</a>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{name:'ProfilesDetails'}" class="nav-link"
                        >Portfolio Details</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Blog</a
                  >
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <router-link :to="{name:'Blog'}" class="nav-link" >Blog</router-link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="single-blog.html"
                        >Blog Details</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link :to="{name:'Contact'}" class="nav-link" >Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {

};
</script>

<style>
 #menu .router-link-exact-active{
   color: #4458dc;
 }
</style>
