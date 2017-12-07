<?php
	$root = ".";
	if (isset($_GET['root'])) {
		$root = $_GET['root'];
	}

	// Does this directory contain its own index file?
	if ($root != ".") {
		$files = array_filter(glob($root.'/*'), 'is_file');
		$index = false;
		foreach ($files as $file) {
		$name = strtolower(end(explode("/", $file)));
			if ($name == "index.html" || $name == "index.php") {
				$index = true;
				break;
			}
		}

		if ($index) {
			$redirect_to = "Location: ".$root."/";
			header($redirect_to);
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>localhost</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="style.css">

	<!-- This script cleans the URL by removing query strings from it. -->
	<script type="text/javascript">
		var uri = window.location.toString();
		if (uri.indexOf("?") > 0) {
    		var clean_uri = uri.substring(0, uri.indexOf("?"));
    		window.history.replaceState({}, document.title, clean_uri);
		}
	</script>
</head>
<body>
	<?php
		$label = strtoupper(end(explode("/", $root)));
		if ($label == ".") $label = "Portfolio";
		echo "
		<h1>$label</h1>
		<div>";
		$dirs = array_filter(glob($root.'/*'), 'is_dir');
		$i = 0;
		foreach ($dirs as $dir) {
			// Does this directory contain its own index file?
			$files = array_filter(glob($dir.'/*'), 'is_file');
			$index = false;
			foreach ($files as $file) {
				$name = strtoupper(end(explode("/", $file)));
				if ($name == "INDEX.PHP" || $name == "INDEX.HTML") {
					$index = true;
					break;
				}
			}

			// If yes, link it to that file
			if ($index) {
				echo "
					<div class='icon linked' onclick=\"window.location = '$dir'\">";
			}

			// Otherwise, open the directory
			else {
				echo "
					<div class='icon' onclick=\"window.location = '?root=$dir'\">";
			}
			$label = strtoupper(end(explode("/", $dir)));

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
			echo "
					<p class='index'>".++$i."</p>
    				<img src='$icon'/>
    				<br/>
					<label>$label</label>
				</div>";
		} echo "
		</div>
		";
	?>
</body>