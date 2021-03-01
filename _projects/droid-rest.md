---
layout: project
title:  DroidREST&#58; A RESTful Client for Android
categories: api
keywords: rest api, java
bintray: saifkhichi96/maven/droid-rest
code: saifkhichi96/droid-rest
device: Library
excerpt: DroidREST is a client-side Android library, which provides a RESTful interface for Android applications to exchange POJO objects with a remote server.
icon: /assets/images/projects/droid-rest-logo.png
license: MIT
---

## Key Features
1. Make HTTP GET requests to a remote web server.
2. Make HTTP POST requests to a remote web server.
3. Send POJO class objects in HTTP requests.
4. Receive POJO class objects in HTTP response.

<br/>
## How to use
The easiest way to add DroidREST to your project is to add the following dependency to your Android app's `build.gradle` file:
```groovy
dependencies {
    // ...
    implementation "co.aspirasoft.apis:rest:$latest_version"
}
```
Look for the [download]("#download") badge to find out the latest release version. You might also need to add the following packaging options to your gradle file to resolve any merge conflics.
```groovy
android {
    // ...
    packagingOptions {
        exclude 'META-INF/ASL2.0'
        exclude 'META-INF/LICENSE'
        exclude 'META-INF/license.txt'
        exclude 'META-INF/NOTICE'
        exclude 'META-INF/notice.txt'
    }
}
```

### Connecting to a web server
To use DroidREST, you must add the `android.permission.INTERNET` permission to your app's manifest. Without this, your app won't be able to connect to the network.

Before you can make any HTTP requests, you have to establish a connection with your server. The following Kotlin snippet creates a singleton class to define the path of the remote server.

```kotlin
import co.aspirasoft.apis.rest.HttpServer

object WebServer : HttpServer("https://url/of/the/server/")
```

### Exchanging simple objects with the server
Now, we see how to exchange simple objects with the server. It is important to note here that, in a single HTTP request, DroidREST serializes a Kotlin (or Java) object into JSON and sends it to the server. The server sends back a JSON response, from which it tries to build an instance of another class, that is returned to the client.

Start by creating a `Payload` class to hold our request payload. This class is a container for any data we want to send, which in this case is a simple string.

```kotlin
class Payload {
    var message: String = ""
    // other data ...
}
```

Similarly, create another class `Response` which defines the structure of the response we expect from the server. An instance of this class will be received in the `ResponseListener` if the request is successfully sent, and server's response is parsed without errors.
```kotlin
class Response {
    var uppercaseMessage: String = ""
    // other data ...
}
```

Next, define a listener for receiving the server's response.
```
import co.aspirasoft.apis.rest.ResponseListener

val responseListener = object: ResponseListener<Response> {
    override fun onRequestSuccessful(response: Response) {
        // request successful, see the response here
    }

    override fun onRequestFailed(ex: Exception) {
        // handle errors
    }
}
```

Finally, build a `HttpTask` which executes the request asyncronously.
```
import co.aspirasoft.apis.rest.HttpMethod
import co.aspirasoft.apis.rest.HttpTask

val payload = Payload()
payload.message = "Hello, world!"

val builder = HttpTask.Builder&lt;Payload, Response&gt;(RequestData::class.java)
builder.setMethod(HttpMethod.POST) // supported methods: GET, POST
builder.setRequestUrl("response-handler.php") // a script on the server which handles this request
builder.setPayload(payload)

val task = builder.build(WebServer)
task.startAsync(responseListener)
```

### Handling the request on the server
Below is a snippet of PHP code to handle this request on the server. It receives the request from the Kotlin code above, converts the message in the payload to uppercase, and sends it back. Notice that we use `Payload` and `Response` classes in this code, but they are not defined here. A more complete server-side example can be found [here](https://github.com/saifkhichi96/droid-rest/blob/master/demo-server-side.php).
```php
<?php
// Read the request payload
$request = null;
if (isset($_GET["payload"])) { // GET request
    $request = json_decode($_GET["payload"]);
}
else if (isset($_POST["payload"])) { // POST request
    $request = json_decode($_POST["payload"]);
}

// If a valid payload is found
if ($request != null) {
    $payload = recast(new Payload(), $request);

    // Build a response with received message converted to uppercase
    $response = new Response()
    $response->uppercaseMessage = strtoupper($payload->message);

    // Send the response back as JSON
    header("Content-type: application/json");
    echo json_encode($response->getJsonData());
}
?>
```

## Supported Platforms
- Maven
- Gradle

<br/>
## Programming Languages
- Java
- Kotlin
