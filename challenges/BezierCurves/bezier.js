// Take point 1 and point 2 as  the endpoints
//find control points based on t = 1/3 and t = 2/3

 // reference http://blog.sklambert.com/finding-the-control-points-of-a-bezier-curve/



function findPoint() {
    var x0 = Number(document.getElementById("x0").value);


    var y0 = Number(document.getElementById("y0").value);
    var x1 = Number(document.getElementById("x1").value);
    var y1 = Number(document.getElementById("y1").value);
    var height = Number(document.getElementById("height").value);

    document.getElementById("controlPoints").innerHTML = getPoint(x0, y0, x1, y1, height);
}

function getMidPoint(x0, x1, y0, height) {
 
    var mx = x0 + (x1 - x0) * 0.5;
    var my = y0 + height;
    return "(" + mx + ", " + my + ")";
}
function getPoint(Px0, Py0, Px1, Py1, height) {
   

  

// Convert Px0, Py0 to 0, 0 and recalculate other coordinates as cartesian coordinates
    var x0 = 0.0;
    var y0 = 0.0;
    var x1 = Px1 - Px0;
    var y1 = Py1 - Py0;
   
    My = height;
    Cx0 = (x1)*(1/3);
    Cx1 = Cx0;
    Cy0 = (My - (0.25 * y0)) * (4/ 3);
    Cy1 = Cy0;
    var yDiff = Cy0 - My;
    console.log(Cy0);
    //recalculate actual coordinates
    Cy0 = Py0 - yDiff;
    Cy1 = Py1 - yDiff;
    Cx0 = Px0 + Cx0;
    Cx1 = Px1 - Cx1;
    console.log(Cx0);
    var returnString = "Control1: (" + Cx0 + ", " + Cy0 + ")     Control2: (" +
        Cx1 + ", " + Cy1 + ")";
   
    return returnString;
  
}