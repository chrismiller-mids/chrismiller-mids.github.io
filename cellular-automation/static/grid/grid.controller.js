angular.module('grid').controller('gridCtrl', function($interval, gridService) {
	var vm = this;

	vm.rows = gridService.getCells;
	vm.getEditMode = true;

	vm.wrap = true;

	vm.iterate = function() {
		$interval(function() {
			vm.editMode = gridService.getEditMode();
			vm.rows = gridService.getCells();
			if (gridService.isRunning()) {
				gridService.generate();	
			}
		}, 130);
	}
	
	function init() {
		gridService.init();
	}

	vm.edit = function(i, j) {
		if (vm.editMode) {
			gridService.editCell(i,j);
		}
	}
	
	clear();
	vm.iterate();


});