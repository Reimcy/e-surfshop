<?
$servidor="localhost";
$usuario="root";
$clave="";
$basededatos="e-surfshop";
$conexion=mysqli_connect($servidor,$usuario,$clave,$basededatos);

if($conexion->connect_error){

die("No se pudo conectar a la base de datos" . $conexion ->connect_error);
}

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(["message" => "Solicitud GET recibida"]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(["message" => "Datos recibidos", "data" => $data]);
}
?>
