<!-- Navigation Bar (appears as a side menu on small devices) -->
<nav id="sidebar-wrapper" class="navbar navbar-inverse">
    <div class="container container-fluid">
        <ul class="nav navbar-nav sidebar-nav">
            <li>
                <a href="/projects/publications/"><span class="fa fa-chevron-left"> PUBLICATIONS</span></a>
            </li>
        </ul>
        <ul class="nav navbar-nav navbar-right sidebar-nav">
            <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">PAPERS
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#">There and Back Again: The Twenty-First Summer</a>
                    </li>
                </ul>
            </li>
            <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">BLOGS
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <?php
                    foreach (json_decode(file_get_contents(dirname(__FILE__)."/blogs.json"))->blogs as $blog) {
                        echo "
                            <li>
                                <a href='$blog->link' target='_blank'>
                                $blog->title
                                </a>
                            </li>";
                    }
                    ?>
                </ul>
            </li>
            <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">PROSE
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="/projects/publications/stories/his-last-speech.php">His Last Speech</a>
                    </li>
                    <hr>
                    <li>
                        <a href="/projects/publications/essays/from-indifference-to-passion.php">From Indifference to Passion</a>
                    </li>
                </ul>
            </li>
            <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">POETRY
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#">Morning Beauty</a>
                    </li>
                </ul>
            </li>
            <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">TRAVELOGUES
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#">There and Back Again: The Twenty-First Summer</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>