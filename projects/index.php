<?php
$root = ".";
if (isset($_GET['root'])) {
    $root = $_GET['root'];
}

// Does this directory contain its own index file?
$title = end(explode("/", $root));
if ($title == ".") $title = "Projects";
?>

<!DOCTYPE html>
<html lang="en" manifest="/offline.manifest">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Web App settings -->
    <meta name="apple-mobile-web-app-title" content="Saif's Portfolio"/>
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>

    <!-- iOS startup screen -->
    <link rel="apple-touch-startup-image" href="/ios/start/iphone-startup.png">
    <link rel="apple-touch-startup-image" href="/ios/start/ipad-landscape-startup.png"/>

    <!-- Icons -->
    <link rel="apple-touch-icon" href="/apple-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">

    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

    <!-- Manifest -->
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Application Cache -->
    <meta name="p:domain_verify" content="a756de613e3e91e14743d6a24b29a35c"/>

    <title><? echo ucwords($title); ?> | Muhammad Saifullah Khan</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
          crossorigin="anonymous">

    <!-- Custom fonts for this page -->
    <script src="https://use.fontawesome.com/54fcd4a1ed.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"
          rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:800|Roboto|EB+Garamond" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    <link rel="stylesheet" href="/vendor/simple-line-icons/css/simple-line-icons.css">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="/device-mockups/device-mockups.min.css">

    <!-- Custom styles for this template -->
    <link href="/css/modal.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <link href="/css/new-age.min.css" rel="stylesheet">
    <link href="/css/navigation.css" rel="stylesheet">
    <link href="/css/theme.css" rel="stylesheet">
    <link href="/css/portfolio.css" rel="stylesheet">
    <style>
        .portfolio {
            background: #212121 !important;
        }

        .portfolio a:hover,
        .portfolio a:hover * {
            color: whitesmoke;
            text-shadow: 1px 1px 10px teal;
        }

        .portfolio a,
        .portfolio a * {
            color: white;
        }

        nav {
            text-align: left !important;
        }

        .project-demo .container {
            background: #0000;
        }

        .masthead * {
            color: white !important;
        }

        .masthead a, .masthead:hover {
            color: #fdcc52 !important;
            font-weight: bold;
        }

        .features a, .features a:hover {
            color: rgba(190, 23, 74, 1.0) !important;
            font-weight: bold;
        }

        .se-pre-con {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            background: url('/img/loading.gif') center no-repeat #fff;
        }

        .parent {
            display: table;
        }

        .child {
            display: table-cell;
            vertical-align: middle;
        }

        #title {
            font-family: 'Roboto', Arial, Halvetica, cursive;
            font-weight: bold;
            font-variant: small-caps;
        }
    </style>
    <script>
        // Clean URL
        var uri = window.location.toString();
        if (uri.indexOf("?") > 0) {
            uri = uri.substring(0, uri.indexOf("?")) + "<? echo strtolower($title); ?>";
            window.history.replaceState({}, document.title, uri);
        }

        function scrollToSection(modal, section) {
            // reset the scroll to top
            $('#' + modal + ' .modal-body').scrollTop(0);

            // get the top of the section
            var id = '#' + modal + ' #' + section;
            var elpos = $(id).position();

            //scroll the container
            $('#' + modal).animate({
                scrollTop: elpos.top
            }, 500);
        }
    </script>
</head>
<body>
<div class="se-pre-con"></div>

<!-- Action Bar (Android-style action bar, appears only on small devices) -->
<nav id="action-bar" class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button id="menu-toggle" type="button" class="navbar-toggle pull-left">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <button id="menu-close" type="button" class="navbar-toggle pull-left">
                <span class="fa fa-arrow-left"></span>
            </button>
        </div>
    </div>
</nav>

<!-- Navigation Bar (appears as a side menu on small devices) -->
<nav id="sidebar-wrapper" class="navbar navbar-inverse">
    <div class="container container-fluid">
        <?
        $label = strtolower(end(explode("/", $root)));
        if ($label == ".") {
            echo '
			<ul class="nav navbar-nav navbar-right sidebar-nav">
				<li><a href="/#top">HOME</a></li>
        <li><a href="/#about">ABOUT</a></li>
        <li><a href="/#services">SERVICES</a></li>
        <li><a href="">PROJECTS</a></li>
        <li><a href="/#contact">CONTACT</a></li>
			</ul>';
        } else {
            echo '
			<ul class="nav navbar-nav sidebar-nav">
				<li><a href="/projects/"><span class="fa fa-chevron-left"> PROJECTS</span></a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right sidebar-nav">
        <li class="';
            echo $label == "apps" ? "active" : "";
            echo '"><a href="/projects/?root=apps">APPS</a></li>
        <li class="';
            echo $label == "games" ? "active" : "";
            echo '"><a href="/projects/?root=games">GAMES</a></li>
        <li class="';
            echo $label == "web" ? "active" : "";
            echo '"><a href="/projects/?root=web">WEBSITES</a></li>
        <li class="';
            echo $label == "libs" ? "active" : "";
            echo '"><a href="/projects/?root=libs">LIBRARIES</a></li>
        <li class="';
            echo $label == "designs" ? "active" : "";
            echo '"><a href="/projects/?root=designs">DESIGNS</a></li>
				<li class="';
            echo $label == "publications" ? "active" : "";
            echo '"><a href="/projects/publications">PUBLICATIONS</a></li>
			</ul>';
        }
        ?>
    </div>
</nav>

<!-- Portfolio -->
<section id="portfolio" class="portfolio">
    <div class="gallery-grids">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 text-center">
                <h3 id="title">
                    <br>
                    <? echo ucwords($title); ?>
                    <hr class="small" style="background: white;">
                    <br>
                </h3>
                <div class="container">
                    <?php
                    if (end(explode("/", $root)) == ".") {
                        echo '
			<div class="col-md-4 col-sm-4 gallery-top">
			<a href="/projects/?root=apps">
				<figure class="effect-bubba">
					<img src="/img/portfolio-apps.jpg" alt="" class="img-responsive">
					<figcaption>
						<h4>Applications</h4>
					</figcaption>
				</figure>
			</a>
		</div>
		<div class="col-md-4 col-sm-4 gallery-top">
			<a href="/projects/?root=games">
				<figure class="effect-bubba">
					<img src="/img/portfolio-games.jpg" alt="" class="img-responsive">
					<figcaption>
						<h4>Games</h4>
					</figcaption>
				</figure>
			</a>
		</div>
		<div class="col-md-4 col-sm-4 gallery-top">
			<a href="/projects/?root=web">
				<figure class="effect-bubba">
					<img src="/img/portfolio-web.jpg" alt="" class="img-responsive">
					<figcaption>
						<h4>Websites</h4>
					</figcaption>
				</figure>
			</a>
		</div>
		<div class="col-md-4 col-sm-4 gallery-top">
			<a href="/projects/?root=libs">
				<figure class="effect-bubba">
					<img src="/img/portfolio-libs.gif" alt="" class="img-responsive">
					<figcaption>
						<h4>APIs</h4>
					</figcaption>
				</figure>
			</a>
		</div>
		<div class="col-md-4 col-sm-4 gallery-top">
			<a href="/projects/?root=designs">
				<figure class="effect-bubba">
					<img src="/img/portfolio-graphics.jpg" alt="" class="img-responsive">
					<figcaption>
						<h4>Graphic Designs</h4>
					</figcaption>
				</figure>
			</a>
		</div>
		<div class="col-md-4 col-sm-4 gallery-top">
			<a href="/projects/publications/">
				<figure class="effect-bubba">
					<img src="/img/portfolio-publications.jpg" alt="" class="img-responsive">
					<figcaption>
						<h4>Publications</h4>
					</figcaption>
				</figure>
			</a>
		</div>';
                    } else {
                        $dirs = array_filter(glob($root . '/*'), 'is_dir');
                        $i = 0;
                        foreach ($dirs as $dir) {
                            // Does this directory contain its own index file?
                            $files = array_filter(glob($dir . '/*'), 'is_file');
                            $details = false;
                            foreach ($files as $file) {
                                $name = strtolower(end(explode("/", $file)));
                                if ($name == "details.json") {
                                    $details = true;
                                    break;
                                }
                            }

                            $label = strtoupper(end(explode("/", $dir)));
                            $project = json_decode(file_get_contents($dir . "/details.json"));

                            // Locate an icon
                            $ic_default = "./favicon.png";
                            $icons = array(
                                "$dir/favicon.ico",
                                "$dir/app/src/main/res/mipmap-hdpi/ic_launcher.png",
                                "$dir/$label-android/app/src/main/res/mipmap-hdpi/ic_launcher.png",
                                "$dir/client-android/app/src/main/res/mipmap-hdpi/ic_launcher.png",
                                "$dir/$label-android/$label/src/main/res/mipmap-hdpi/ic_launcher.png",
                            );
                            $icon = $ic_default;
                            foreach ($icons as $ic) {
                                if (file_exists($ic)) {
                                    $icon = $ic;
                                    break;
                                }
                            }

                            // Display directory
                            $label = str_replace(" ", "-", $label);
                            echo "
			<div class='col-md-2 col-sm-3 col-xs-4 gallery-top'>
				<a href='#' data-toggle='modal' data-target='#$label-info' >
					<figure class='effect-bubba'>
						<img src='$icon' alt='' class='img-responsive'>
						<figcaption>
							<h4>$label</h4>
						</figcaption>
					</figure>
				</a>
			</div>
			<!-- Modal -->
			<div id='$label-info' class='modal fade' role='dialog'>
			  <nav class='navbar navbar-inverse navbar-fixed-top modal-header' style='border: 0;'>
				<div class='container-fluid'>
				  <div class='navbar-header'>
					<button type='button' class='modal-title title close' data-dismiss='modal'>
					  <span class='fa fa-close' style='text-shadow: 0 0 5px black;'></span>
					</button>
				  </div>
				</div>
			  </nav>
			  <div class='project-demo modal-body' style='margin-top: -20px'>
			  <header class='masthead parent' style='height: 100%;'>
			  <div class='child'>
			    <div class='container' style='height: 100%'>
				  <div class='col-md-7 parent' style='height: 100%;'>
					<div class='header-content child'>
					  <h1 class='mb-5'>" . $project->about . "</h1>
					  <br>
					  <a onclick='scrollToSection(\"$label-info\", \"features\")' class='btn btn-outline btn-xl js-scroll-trigger'>Discover " . $project->name . "!</a>
					</div>
				  </div>
				  <div class='col-md-5 parent' style='height: 100%;'>
					<div class='device-container child'>
					  <div class='device-mockup " . $project->devices[0] . "'>
						<div class='device'>
						  <div class='screen'>
							<!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
							<img src='" . $project->screens[0] . "' class='img-fluid' alt=''>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</header>
			
			<section class='features' id='features'>
			  <div class='container'>
				<div class='section-heading text-center'>
				  <h2>" . $project->features->heading . "</h2>
				  <p class='text-muted'>" . $project->features->subheading . "</p>
				  <a onclick='scrollToSection(\"$label-info\", \"download\")' class='btn btn-outline btn-light btn-xl js-scroll-trigger'>Get now!</a>
				  <hr class='small'>
				  </div>
				<div class='row'>
				  <div class='col-lg-4 my-auto'>
					<div class='device-container'>
					  <div class='device-mockup " . $project->devices[1] . "'>
						<div class='device'>
						  <div class='screen'>
							<!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
							<img src='" . $project->screens[1] . "' class='img-fluid' alt=''>
						  </div>
						  <div class='button'>
							<!-- You can hook the 'home button' to some JavaScript events or just remove it -->
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  <div class='col-lg-8 my-auto'>
					<div class='container-fluid'>
					  <div class='row'>";
                            foreach ($project->features->list as $feature) {
                                echo "
						<div class='col-lg-6'>
						  <div class='feature-item'>
							<i class='" . $feature->icon . " text-primary'></i>
							<h3>" . $feature->name . "</h3>
							<p class='text-muted'>" . $feature->about . "</p>
						  </div>
						</div>";
                            }
                            echo "
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</section>
			
			<section class='download bg-primary text-center' id='download'>
			  <div class='container'>
					<h2 class='section-heading'>" . $project->tagline . "</h2>
					<p>" . $project->name . " is available on following platforms. Download now to get started!</p>
					<div class='badges'>";
                            if ($project->platforms->android != null) {
                                echo "
					  <a target='_blank' class='badge-link' href='" . $project->platforms->android . "'>
						<img src='/img/google-play-badge.svg' alt=''>
					  </a>";
                            }
                            if ($project->platforms->ios != null) {
                                echo "
					  <a target='_blank' class='badge-link' href='" . $project->platforms->ios . "'>
						<img src='/img/app-store-badge.svg' alt=''>
					  </a>";
                            }
                            echo "</div>
			  </div>
			</section>
			
		  </div>
		</div>";
                        }
                    }
                    ?>
                </div>
                <!-- /.row (nested) -->
            </div>
            <!-- /.col-lg-10 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</section>

<!-- Bootstrap core JavaScript -->
<script src="https://code.jquery.com/jquery-3.0.0.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>

<!-- Custom scripts for this template -->
<script src="/js/navigation.js"></script>
<script src="/js/webapp.js"></script>
<script src="/js/script.js"></script>
<script src="/js/new-age.min.js"></script>
<script>
    window.onload = function () {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
        $('[data-toggle="tooltip"]').tooltip(); <? if (isset($_GET["modal"])) {
        echo "$('#" . str_replace(" ", "-", strtoupper($_GET["modal"])) . "-info').modal('show');";
    } ?>
    };
</script>
</body>

</html>