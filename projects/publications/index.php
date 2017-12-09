<!DOCTYPE html>
<html lang="en" manifest="/offline.manifest">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Web App settings -->
    <meta name="apple-mobile-web-app-title" content="Saif's Portfolio" />
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <!-- iOS startup screen -->
    <link rel="apple-touch-startup-image" href="/ios/start/iphone-startup.png">
    <link rel="apple-touch-startup-image" href="/ios/start/ipad-landscape-startup.png" />

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
    <html manifest="manifest.appcache">
    <meta name="p:domain_verify" content="a756de613e3e91e14743d6a24b29a35c" />

    <title>Publications | Muhammad Saifullah Khan</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
        crossorigin="anonymous">

    <!-- Custom fonts for this page -->
    <script src="https://use.fontawesome.com/54fcd4a1ed.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:800|Roboto|EB+Garamond" rel="stylesheet">

    <!-- Custom styles for this page -->
    <link href="/css/navigation.css" rel="stylesheet">
    <link href="/css/theme.css" rel="stylesheet">
    <link href="/css/portfolio.css" rel="stylesheet">
    <style>
        section {
            background: #212121 !important;
        }

        section a:hover,
        section a:hover * {
            color: whitesmoke;
            text-shadow: 1px 1px 10px teal;
        }

        section a,
        section a * {
            color: white;
        }

		nav {
			text-align: left !important;
		}

        .se-pre-con {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            background: url('/img/loading.gif') center no-repeat #fff;
        }

        .heading-center h1,
        .heading-center h2,
        .heading-center h3,
        .heading-center h4,
        .heading-center h5,
        .heading-center h6 {
            text-align: center;
        }
    </style>
    <script>
        // Clean URL
        var uri = window.location.toString();
        if (uri.indexOf("?") > 0) {
            var uri = uri.substring(0, uri.indexOf("?"));
            window.history.replaceState({}, document.title, uri);
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
            <ul class="nav navbar-nav navbar-right sidebar-nav">
                <li>
                    <a href="/projects/">HOME</a>
                </li>
                <li>
                    <a href="/projects/?root=apps">APPS</a>
                </li>
                <li>
                    <a href="/projects/?root=games">GAMES</a>
                </li>
                <li>
                    <a href="/projects/?root=web">WEBSITES</a>
                </li>
                <li>
                    <a href="/projects/?root=libs">LIBRARIES</a>
                </li>
                <li>
                    <a href="/projects/?root=designs">DESIGNS</a>
                </li>
                <li class="active">
                    <a href="/projects/?root=publications">PUBLICATIONS</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Portfolio -->
    <section id="portfolio" class="portfolio">
        <div class="gallery-grids">
            <div class="row">
                <div id="publications" class="col-lg-10 col-lg-offset-1 heading-center">
                    <h2>Publications</h2>
                    <hr class="small">
                    <div class="first container">
                        <h3 class="title text-primary">Papers</h3>
                        <hr class="small">
                        <ol>
                            <li>
                                <a href="#">
                                    S. U. Khan, M. Tariq and S. Iqbal, "Pre-Planned Electricity Bills Without Prepaid Billing," in
                                    <i>IEEE FIT 2017</i>, June 30, 2017, Islamabad (Unpublished).
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div class="last container">
                        <div class="left-col col-sm-8 col-xs-12 gallery-grids">
                            <h3 class="title text-primary">Blog Articles</h3>
                            <hr class="small">
                            <div class="blog-articles">
                                <?
                                foreach (json_decode(file_get_contents("blogs.json"))->blogs as $blog) {
                                echo "
                                <a class='blog' style='background-image: url(\"$blog->cover\");'
                                   target='_blank' href='$blog->link'>
                                    <div class='blog-overlay'></div>
                                    <label>
                                        <h4 class='blog-title'>$blog->title</h4>
                                        <i class='blog-date'>$blog->date</i>
                                    </label>
                                </a>";
                                }
                                ?>
                            </div>
                        </div>
                        <div class="right-col col-sm-4 col-xs-12">
                            <h3 class="title text-primary">Stories &amp; Essays</h3>
                            <hr class="small">
                            <ol>
                                <li>
                                    <a href="publications/stories/his-last-speech.html">
                                        His Last Speech
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        From Indifference to Passion
                                    </a>
                                </li>
                            </ol>
                            <h3 class="title text-primary">Poetry</h3>
                            <hr class="small">
                            <ol>
                                <li>
                                    <a href="#">
                                        Morning Beauty
                                    </a>
                                </li>
                            </ol>
                            <h3 class="title text-primary">Travelogues</h3>
                            <hr class="small">
                            <ol>
                                <li>
                                    <a href="#">
                                        There and Back Again
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <!-- /.row (nested) -->
                </div>
                <!-- /.col-lg-10 -->
            </div>
            <!-- /.row -->
        </div>
        </div>
        <!-- /.container -->
    </section>

    <!-- Bootstrap core JavaScript -->
    <script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>

    <!-- Custom scripts for this template -->
    <script src="/js/navigation.js"></script>
    <script src="/js/webapp.js"></script>
    <script src="/js/script.js"></script>
    <script>
        window.onload = function () {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        };
    </script>
</body>

</html>