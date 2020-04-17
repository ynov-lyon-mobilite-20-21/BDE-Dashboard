<template>
    <div>
        <main>
            <section class="box">
                <img
                    class="image-fond"
                    src="../assets/public/BUREAU.png"
                    alt="Image de fond"
                />

                <img
                    alt="Logo SelfBuy"
                    class="logo"
                    src="../assets/public/logo.png"
                />

                <h1>Bonjour et bienvenue dans votre futur</h1>

                <h2>
                    Self Buy vous propose un modèle d’interface modifiable pour
                    la vente de votre marque peu importe votre domaine
                </h2>

                <a href="#mockup" class="fleche">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="68.836"
                        height="39.358"
                        viewBox="0 0 68.836 39.358"
                    >
                        <path
                            id="Icon_ionic-ios-arrow-down"
                            data-name="Icon ionic-ios-arrow-down"
                            d="M40.619,38.74,66.647,12.691a4.9,4.9,0,0,1,6.948,0,4.961,4.961,0,0,1,0,6.968L44.1,49.172a4.91,4.91,0,0,1-6.784.143L7.622,19.68a4.92,4.92,0,0,1,6.948-6.968Z"
                            transform="translate(-6.188 -11.246)"
                            fill="#de1d32"
                        />
                    </svg>
                </a>
            </section>

            <section id="mockup" class="images">
                <figure class="visu">
                    <img
                        class="visu-image"
                        src="../assets/public/mockup 1.png"
                    />
                </figure>

                <figure class="visu">
                    <img
                        class="visu-image"
                        src="../assets/public/mockup 2.png"
                    />
                </figure>

                <figure class="visu">
                    <img
                        class="visu-image"
                        src="../assets/public/mockup 3.png"
                    />
                </figure>

                <figure class="visu">
                    <img
                        class="visu-image"
                        src="../assets/public/mockup 4.png"
                    />
                </figure>

                <figure class="visu">
                    <img
                        class="visu-image"
                        src="../assets/public/mockup 5.png"
                    />
                </figure>

                <figure class="visu">
                    <img
                        class="visu-image"
                        src="../assets/public/mockup 6.png"
                    />
                </figure>
            </section>
        </main>
        <footer class="footer">
            <section class="info">
                <section class="contact">
                    <p class="contact1">Nous contacter :</p>
                    <p>selfbuy.ynov@gmail.com</p>
                </section>

                <section class="téléchargement">
                    <img
                        class="android"
                        src="../assets/public/google_play.png"
                    />
                    <img src="../assets/public/app_store.png" />
                </section>
            </section>
        </footer>
    </div>
</template>

<script>
export default {
    name: "PublicHome"
};
</script>

<style scoped lang="css">

.box {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.box .logo {
  position: absolute;
  left: 18%;
}

.box h1 {
  position: absolute;
  top: 6%;
  left: 42%;
  width: 55%;
  font-size: 62px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
}

.box h2 {
  position: absolute;
  top: 56%;
  left: 48%;
  width: 44%;
  text-align: right;
  font-size: 39px;
  font-style: italic;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
}


.box .fleche {
  border: transparent;
  background-color: transparent;
  position: absolute;
  top: 91%;
  left: 50%;
  transform: translateX(-50%);
}

.image-fond {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.visu-image {
  margin: 130px;
}

.visu {
  margin: 0;
}

#mockup {
  margin-top: 5%;
}

.footer {
  height: 195px;
  background-color: black;
  margin-top: 50px;
}

p {
  color: white;
  font-size: 20px;
  font-family: "Segoe UI";
}

.contact1 {
  font-weight: bold;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 75px;
  margin-right: 75px;
  padding-top: 46px;
}

.android {
  margin-right: 50px;
}
</style>
