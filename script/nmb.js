let body = JSON.parse($response.body)
body[0] = "";

body = JSON.stringify(body)
$done({ body })