

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Potato Games</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <?php

  $arrayGenres = ["mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts"];

    function getUrl($nameFunction, $genre){
        $baseUrl = "https://www.freetogame.com/api/";
        $url = 'none';
        if($nameFunction == 'listGames'){
            $url = $baseUrl . 'games';
            $retorno = json_decode(file_get_contents($url));
            return $retorno;
        }
        if($nameFunction == 'listGamesGenre'){
            $url = $baseUrl . 'games?category='.$genre;
            $retorno = json_decode(file_get_contents($url));
            return $retorno;
        }
    }
    ?>


    <header>
        <nav>
            <img src="img/potato.png" height="30px" alt="">
            <div class="barra-pesquisa">
                <input type="text" placeholder="Procurar jogos">
                <button>Pesquisar</button>

            </div>
        </nav>
    </header>
    
    <main>
        
        <div>
            <div class="games-container">
                <?php 
                    foreach($arrayGenres as $genre){
                ?>
                <div class="games-list">
                    <div class="games-list-title">
                        <h3>Populares em <?php echo $genre?></h3>
                    </div>
                    <div class="game-covers">
                        <?php
                            $count = 0;
                            foreach(getUrl('listGamesGenre',$genre) as $ret){
                        ?>
                        <a href="game.php?gameId=<?php echo $ret->id ?>" >
                            <div class="game-link">
                                <img src="<?php echo $ret->thumbnail ?>" alt="">
                                <small><?php echo $ret->title ?></small>
                            </div>
                        </a>
                        <?php
                            $count++;
                            if($count >= 5){
                                break;
                            }
                        }
                    ?>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
        
    </main>
</body>
</html>