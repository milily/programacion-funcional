l1 = [1, 2, 3];
l2 = [2, 3, 4];

function intersection(l1, l2){
	var l3 = [];
	for(var i = 0; i < l1.length; i++){
	 for(var j = 0; i < l2.length; j++){
	 	if(l1[i] == l2[i]){
	 		l3.push(li[i]);

	 }
   }
}
  return l3;
}

function intersection2(l1, l2){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1
	})
};