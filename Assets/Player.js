#pragma strict

var speed: float;
var Jump: float;

function Start () {

}

function Update () {
    var H = Input.GetAxis("Horizontal"); 
    var V = Input.GetAxis("Vertical");

    var Movement = Vector3(H,0,V);

	transform.Translate (Movement * speed * Time.deltaTime);

	if(Input.GetKeyDown(KeyCode.Space)){
		GetComponent.<Rigidbody>().AddForce(Vector3(0,Jump,0));
	}
}