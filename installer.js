var Installer = function(arr) {};

Installer.prototype.splitInput = function(arr) {
	var inputs = {
		'arrSplit': [],
		'packages': []
	};
	for (var i = 0; i < arr.length; i++) {
		inputs.arrSplit[i] = arr[i].split(": ");
		inputs.packages[i] = inputs.arrSplit[i][0];
	}
	return inputs;
};

Installer.prototype.orderPackages = function(inputs) {
	var packageOrder = [];
	var infLooper = 0;
	var loopCombos = (inputs.arrSplit.length * inputs.arrSplit.length)//not really how you calc combos, but this will still work
	var j = inputs.arrSplit.length - 1;
	do {
		if(inputs.arrSplit[j][1] === "") { //1) add packages with no dependiencies
			packageOrder.push(inputs.arrSplit[j][0]);
			inputs.arrSplit.splice(j,1);
		}
		else if(inputs.packages.indexOf(inputs.arrSplit[j][1]) < 0) { //2) add the dependency if it has no dependencies itself
			packageOrder.push(inputs.arrSplit[j][1]);
			packageOrder.push(inputs.arrSplit[j][0]);
			inputs.arrSplit.splice(j,1);
		}
		else if(packageOrder.indexOf(inputs.arrSplit[j][1]) !== -1) { //3) add the dependency if it's dependency has been added
		  packageOrder.push(inputs.arrSplit[j][0]);
		  inputs.arrSplit.splice(j,1);
		}
		if(j == 0) { // reset counter if there is still packages left to be ordered
			j = inputs.arrSplit.length - 1
		} else {
			j = j - 1;
		}
		if(infLooper > loopCombos) {
			return 'ERROR: circular dependency'
		} else {
			infLooper++
		}
	}
	while(inputs.arrSplit.length > 0)
	return packageOrder;
};




var runAll = function(input) {
	var install1 = new Installer();
	var formattedInputs = install1.splitInput(input);
	console.log(install1.orderPackages(formattedInputs));
}
var arr1 = [
			"KittenService: ",
			"Leetmeme: Cyberportal",
			"Cyberportal: Ice",
			"CamelCaser: KittenService",
			"Fraudstream: Leetmeme",
			"Ice: "
			]

runAll(arr1);



module.exports = Installer;
