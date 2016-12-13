#pragma strict

var speed: float;
var Jump: float;
var grounded:boolean;
var end: Transform; 
var Dis: UI.Text;
var win: GameObject;
var Compass: GameObject;

var rot: GameObject[];

function Start () {

}

function Update () {
	for(var item : GameObject in rot)
    {
        item.transform.Rotate(Vector3.up * 50 *Time.deltaTime);
    }

	Compass.transform.LookAt(end);

	var dist = Vector3.Distance(end.position, transform.position);
	Dis.text = dist.ToString("F0");

	if(dist<2){
		win.SetActive(true);	
	}

    var H = Input.GetAxis("Horizontal"); 
    var V = Input.GetAxis("Vertical");

    var Movement = Vector3(H,0,V);

	transform.Translate (Movement * speed * Time.deltaTime);

	if(Input.GetKeyDown(KeyCode.Space)){
		if(grounded){
			grounded=false;
			GetComponent.<Rigidbody>().AddForce(Vector3(0,Jump,0));
		}
	}

	if(transform.position.y < -10){
		Application.LoadLevel(Application.loadedLevel);
	}
}

function OnCollisionStay ()
{
	grounded = true;	
}