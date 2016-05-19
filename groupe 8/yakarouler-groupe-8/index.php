<?php include 'includes/header.php' ?>

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="./img/visual/fond.jpg" alt="Slide">
            </div>

            <div class="item">
                <img src="./img/visual/slide1.jpg" alt="Slide">
            </div>

            <div class="item">
                <img src="./img/visual/slide2.jpg" alt="Slide">
            </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </a>
    </div>
    </header>
    <!-- HEADER END -->
    <!--MODAL -->
    <div class="modal">
        <div class="modal__header">
            <div class="is-active">
            </div>
        </div>
        <div class="modal__content">
            <div class="inner">
                <div class="compte">
                    <h2>Connexion</h2>
                    <a class="toggleModal"><img src="img/visual/cross.png" alt=""></a>
                    <form action="">
                        <input type="email" placeholder="Email"><br>
                        <input type="password" placeholder="Mot de passe">
                        <p><a href="">Mot de passe oublié ?</a></p>
                        <input type="submit" value="Me connecter">
                    </form>
                </div>
                <div class="Newcompte">
                    <h2>Créer un compte</h2>
                    <a class="toggleModal"><img src="img/visual/cross.png" alt=""></a>
                    <form action="">
                        <input type="email" placeholder="Email"><br>
                        <input type="password" placeholder="Mot de passe"><br>
                        <input type="submit" value="Créer mon compte">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--FIN MODAL-->
    <!-- PAGE CONTENT -->
    <div class="content"> <!-- extended to the footer -->
        <!-- FORM SECTION -->
        <h3>Recherche de pièces en 3 clics</h3>
        <ul class="forms">
            <li class="searchForm">
                <form action="">
                    <label for="modele">Par modèle</label><br>
                    <select name="modele" id="modele">
                        <option value="133" selected>RENAULT</option>
                        <option value="119">PEUGEOT</option>
                        <option value="35">CITROEN</option>
                        <option value="160">VOLKSWAGEN</option>
                        <option value="23">BMW</option>
                        <option value="58">FORD</option>
                        <option value="56">FIAT</option>
                        <option value="11">AUDI</option>
                        <option value="97">MERCEDES</option>
                        <option value="115">OPEL</option>
                        <option value="139">SEAT</option>
                    </select><br>
                    <select name="modele" id="modele">
                        <option value="133">ACCENT I Berline 4 portes</option>
                        <option value="119">ACCENT I Hayon 5 portes</option>
                        <option value="35">ACCENT I Hayon 3 portes</option>
                        <option value="133">ACCENT II Berline 4 portes</option>
                        <option value="119">ACCENT II Hayon 5 portes</option>
                        <option value="35">ACCENT II Hayon 3 portes</option>
                        <option value="133">ACCENT III Berline 4 portes</option>
                        <option value="119">ACCENT III Hayon 5 portes</option>
                        <option value="35">ACCENT III Hayon 3 portes</option>
                    </select><br>
                    <select name="modele" id="modele">
                        <option value="133">1.5 100cv Essence AUTOMATIQUE</option>
                        <option value="119">1.5 90cv Essence AUTOMATIQUE</option>
                        <option value="35">1.3 85cv Essence AUTOMATIQUE</option>
                        <option value="160">1.3 75cv Essence AUTOMATIQUE</option>
                        <option value="133">1.5 100cv Essence MANUELLE</option>
                        <option value="119">1.5 90cv Essence MANUELLE</option>
                        <option value="35">1.3 85cv Essence MANUELLE</option>
                        <option value="160">1.3 75cv Essence MANUELLE</option>
                    </select><br>
                    <input type="submit" value="OK">
                </form>
            </li>
            <li class="searchForm">
                <form action="">
                    <label for="modele">Par immatriculation</label><br>
                    <p>Entrez votre numéro d'immatriculation</p>
                    <input type="text" placeholder="Ex : GA-126-AB"><br>
                    <input type="submit" value="OK">
                </form>
            </li>
            <li class="searchForm">
                <form action="">
                    <label for="modele">Par carte grise</label><br>
                    <p>Entrez le type mine de votre voiture</p>
                    <input type="text" placeholder="Ex : DE14K2"><br>
                    <input type="submit" value="OK">
                </form>
            </li>
        </ul>

        <!-- SECTION VIGNETTES -->
        <h3>Catégories</h3>
        <div class="categorie">
            <ul>
                <li class="moteur"><a href=""><span>Moteur</span></a></li>
                <li class="roue"><a href=""><span>Jantes/Roues</span></a></li>
                <li class="suspension"><a href=""><span>Direction/Suspension</span></a></li>
                <li class="phare"><a href=""><span>Visibilité</span></a></li>
            </ul>
            <ul>
                <li class="chauffage"><a href=""><span>Chauffage/<br>Climatisation</span></a></li>
                <li class="echappement"><a href=""><span>Echappement</span></a></li>
                <li class="filtration"><a href=""><span>Filtration</span></a></li>
                <li class="freinage"><a href=""><span>Freinage</span></a></li>
            </ul>
            <ul>
                <li class="accessoire"><a href=""><span>Accessoire/<br>Portage</span></a></li>
                <li class="batterie"><a href=""><span>Démarage/Charge</span></a></li>
                <li class="vitesse"><a href=""><span>Boite de vitesse/<br>Embrayage</span></a></li>
                <li class="carrosserie"><a href=""><span>Habitacle/<br>Carrosserie</span></a></li>
            </ul>

        </div>

        <!-- BRANDS SECTION -->
        <section class="brands">
            <p>Les grandes marques nous font confiance !</p>
            <main id='slider'>
                <a class='trigger prev'></a>
                <a class='trigger next'></a>
                <section class='frame'>
                    <article class='item first'>
                        <div class='inset'>
                            <img src="./img/brand/bosch.png" alt="">
                        </div>
                    </article>
                    <article class='item'>
                        <div class='inset'>
                            <img src="./img/brand/monroe.png" alt="">
                        </div>
                    </article>
                    <article class='item last'>
                        <div class='inset'>
                            <img src="./img/brand/brembo.png" alt="">
                        </div>
                    </article>
                    <article class='item'>
                        <div class='inset'>
                            <img src="./img/brand/lpr.png" alt="">
                        </div>
                    </article>
                    <article class='item'>
                        <div class='inset'>
                            <img src="./img/brand/sachs.png" alt="">
                        </div>
                    </article>

                </section>
            </main>
        </section>
        <!-- BRANDS SECTION END -->

<?php include 'includes/footer.php' ?>