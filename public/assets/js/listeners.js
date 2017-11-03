document.querySelector('body').addEventListener('click', function(event) {
  	if (event.target.tagName.toLowerCase() === 'span') {
		var currAddress = window.location.origin;
  		$.ajax({
  			url:currAddress+"/eat",
  			type:"post",
  			data:{burger:event.target.parentElement.innerText.replace("eat!","")}
  		}).then(function(){
        window.location.reload();
  		});
  	}
});