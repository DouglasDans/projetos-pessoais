<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>


    <?php
    $url = "https://www.freetogame.com/api/game?id=".$_GET['gameId'];
    
    $retorno = json_decode(file_get_contents($url));


    function plataformas($slug){
        if($slug == "Windows"){
            return '
            <div class="logo-platforms">
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png" alt="">
            </div>
            ';
        }
        if($slug == "Playstation"){
            return '<img height="30px" src="img/ps.png" alt="">';
        }
        if($slug == "nintendo"){
            return '<img height="30px" src="http://imageform.se/wp-content/uploads/2017/02/Nintendo_Switch_Logo.svg_.png" alt="">';
        }
        if($slug == "steam"){
            return '<img height="30px" src="img/steam.png" alt="">';
        }
        if($slug == "epic-games"){
            return '<img height="30px" src="img/epic.png" alt="">';
        }else{
            return '<small>'.$slug.'</small>';
        }
    }

    $dateArray = explode("-",$retorno->release_date);

    ?>
    
    <header>
        <nav>
            <a href="index.php">
                <img src="img/potato.png" height="30px" alt="">
            </a>
        </nav>
    </header>
    
    <div class="game-background-image">
        <img src="<?php echo $retorno->screenshots[0]->image ?>" alt="">
        <video class="video-trailer" autoplay src="https://www.freetogame.com/g/<?php echo $retorno->id ?>/videoplayback.webm"></video>
    </div>

    <aside>
        <img class="game-cover" src="<?php echo $retorno->thumbnail ?>" alt="">

        <a href="<?php echo $retorno->game_url ?>"><button class="play-button">Jogar</button></a>

        <div class="game-title">
            <h1><?php echo $retorno->title ?></h1>
            <small><?php echo $retorno->publisher ?> | <?php echo $retorno->genre ?> | <?php echo $dateArray[0]?></small>
        </div>

        <!-- <div class="left-games-info">
            

        </div> -->
    </aside>
    <main class="game-container">
        <section>
            <div class="details-game">
                <div class="game-detail">
                    <h5>Gênero(s)</h5>
                    <small><?php echo ($retorno->genre) ?></small>
                </div>
                <div class="game-detail">
                    <h5>Plataformas</h5>
                    <small><?php echo ($retorno->platform) ?></small>
                </div>
                <div class="game-detail">
                    <h5>Data de Lançamento</h5>
                    <small><?php echo $retorno->release_date ?></small>
                </div>
                <div class="game-detail">
                    <h5>Desenvolvedor</h5>
                    <small><?php echo $retorno->developer ?></small>
                </div>
                <div class="game-detail">
                    <h5>Distribuidora</h5>
                    <small><?php echo $retorno->publisher ?></small>
                </div>
                <div class="game-detail">
                    <h5>Status do Jogo</h5>
                    <small><?php echo $retorno->status ?></small>
                </div>
            </div>
            <div class="game-detail">
                <h3>Sobre <?php echo $retorno->title ?></h3>
                <small class="game-description"><?php echo $retorno->description ?></small>
            </div>
            <div class="game-detail">
                <h3>Screenshots</h3>
                <div class="game-screenshots">
                    <?php
                        $count = 0;
                        foreach($retorno->screenshots as $img){?>
                            <img height="200px" src="<?php echo $img->image ?>" alt="<?php echo $retorno->title?> screenshot">  
                    <?php   $count ++;
                            if($count >= 3){
                                break;
                            }
                        }?>
                </div>
            </div>
            <div class="details-game">
                <div class="game-detail">
                    <h5>Sistema Operacional</h5>
                    <small><?php echo $retorno->minimum_system_requirements->os ?></small>
                </div>
                <div class="game-detail">
                    <h5>Processador</h5>
                    <small><?php echo $retorno->minimum_system_requirements->processor ?></small>
                </div>
                <div class="game-detail">
                    <h5>Memoria RAM</h5>
                    <small><?php echo $retorno->minimum_system_requirements->memory ?></small>
                </div>
                <div class="game-detail">
                    <h5>Gráficos Mínimos</h5>
                    <small><?php echo $retorno->minimum_system_requirements->graphics ?></small>
                </div>
                <div class="game-detail">
                    <h5>Armazenamento Necessário</h5>
                    <small><?php echo $retorno->minimum_system_requirements->storage ?></small>
                </div>
            </div>
        </section>
    </main>
    
    <script src="js/video.js"></script>
</body>
</html>