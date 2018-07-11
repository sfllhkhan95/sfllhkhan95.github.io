<?php
echo "
<!-- Blog Sidebar Widgets Column -->
<section class='col-md-4 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1'>
    <div class='row'>
        <h3 class='title text-primary'>Papers</h3>
        <hr class='small'>
        <ol>
            <li>
                <a href='#'>
                    S. U. Khan, M. Tariq and S. Iqbal, 'Pre-Planned Electricity Bills Without Prepaid Billing,'
                    in
                    <i>IEEE FIT 2017</i>, June 30, 2017, Islamabad (Unpublished).
                </a>
            </li>
        </ol>

        <h3 class='title text-primary'>Blog Articles</h3>
        <hr class='small'>
        <ol>
";
foreach (json_decode(file_get_contents(dirname(__FILE__)."/blogs.json"))->blogs as $blog) {
    echo "
        <li>
            <a href='$blog->link' target='_blank'>
            $blog->title
            </a>
        </li>";
}
echo "
        </ol>

        <h3 class='title text-primary'>Stories &amp; Essays</h3>
        <hr class='small'>
        <ol>
            <li>
                <a href='../stories/his-last-speech.php'>
                    His Last Speech
                </a>
            </li>
            <li>
                <a href='../essays/from-indifference-to-passion.php'>
                    From Indifference to Passion
                </a>
            </li>
        </ol>
        <h3 class='title text-primary'>Poetry</h3>
        <hr class='small'>
        <ol>
            <li>
                <a href='#'>
                    Morning Beauty
                </a>
            </li>
        </ol>
        <h3 class='title text-primary'>Travelogues</h3>
        <hr class='small'>
        <ol>
            <li>
                <a href='#'>
                    There and Back Again
                </a>
            </li>
        </ol>

    </div>
</section>
";
?>