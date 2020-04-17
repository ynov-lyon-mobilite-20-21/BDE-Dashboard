<template>
    <div>
        <nav
            class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
        >
            <span style="height: 48px; display: block;"></span>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <nav class="sidebar col-md-2 d-none d-md-block bg-light">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link
                                    to="/administration"
                                    class="nav-link"
                                    >Accueil</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/administration/users"
                                    class="nav-link"
                                    >Users</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/administration/products"
                                    class="nav-link"
                                    >Products</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/administration/images"
                                    class="nav-link"
                                    >Images</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/administration/logout"
                                    class="nav-link"
                                    >Déconnexion</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div class="container h-100 py-4">
                        <slot></slot>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBarLayout"
};
</script>

<style scoped></style>
