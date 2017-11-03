new CircleType(document.getElementById('title')).radius(700);

var li_children = document.querySelectorAll("li");

for ( var i = 0 ; i < li_children.length ; i++ ){
	li_children[i].style.animationDelay = i*0.3+"s"
}
