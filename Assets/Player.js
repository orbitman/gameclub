#pragma strict

var speed:float; 

function Start () {

}

function Update () {
    var H = Input.GetAxis("Horizontal"); 
    var V = Input.GetAxis("Veritical");

    var Movement = Vector3(H,0,V);

transform.Translate (Movement * speed * Time.deltaTime);


}