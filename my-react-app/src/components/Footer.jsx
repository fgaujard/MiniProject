function Footer () {
    return (
        <div class="footer">
            <div id="AboutUs">
                <h3>Mais qu'est-ce donc?</h3>
                <p>Il s'agit du Shop d'Hyrule, une plateforme de référence où vous retrouverez certains ingrédients fournissants des effets. Vous pouvez filtrer ces ingrédients par type d'effet.</p>
            </div>
            <div id="dev">
                <h3>Par qui ?</h3>
                <p>En réponse au Mini Projet de Mr. Gorski Anthony, ce site web a été réalisé par Flavien GAUJARD.</p>
            </div>
            <form action="" method="get" class="form">
                <h3>Laisse moi un message !</h3>
                <div class="SubForm">
                    <label id="name">Nom :</label><br/>
                    <input type="text" name="name" id="name" required/>
                </div>
                <div class="SubForm">
                    <label id="email">Adresse e-mail :</label><br/>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div class="SubForm">
                    <label id="name">Message :</label><br/>
                    <input type="text" name="msg" id="msg" required/>
                </div>
                <div class="SubFrom">
                    <input id="submit" type="submit" value="Envoyer"/>
               </div>
            </form> 
        </div>
    )
}

export default Footer;