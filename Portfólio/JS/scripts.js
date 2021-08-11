
function openNav() {

	var x = document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className = " menujs";
		document.getElementById("três_linhas").innerHTML = "<font color='red' size='6'>&#x02717;</font>";
	} else {
		x.className = "navigation";
		document.getElementById("três_linhas").innerHTML = "&#8801;";
	}
}