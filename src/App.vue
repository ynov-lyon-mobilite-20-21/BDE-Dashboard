<template>
  <div id="app">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <span style="height: 48px; display: block;"></span>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="sidebar col-md-2 d-none d-md-block bg-light">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Accueil</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/logout" class="nav-link">Déconnexion</router-link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="p-3 d-flex align-items-center justify-content-center h-100 ">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "assets/sidebar.css";
/*@import "./assets/sidebar.css";*/

/*.nav-link {*/
/*  &.active {*/
/*    background-color: rgba(255, 255, 255, 0.1);*/
/*  }*/
/*}*/
</style>
