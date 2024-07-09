var bulb=0;
function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="imageon.webp";
        bulb=1;
    }
    else{
        document.getElementById("image").src="imageoff.webp";
        bulb=0;
    }
}