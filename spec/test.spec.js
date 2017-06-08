describe('installer input formatting', function() {
	var Installer = require('../installer.js');
	var installer = new Installer();

	it('should split input array elements into sub arrays and create array of original packages (excluding their dependencies)', function() {
		var basicInput = [ "KittenService: CamelCaser", "CamelCaser: " ];
		var basicOutput = {
			'arrSplit': [ [ 'KittenService', 'CamelCaser' ], [ 'CamelCaser', '' ] ],
			'packages': [ 'KittenService', 'CamelCaser' ]
		}
		expect(installer.splitInput(basicInput)).toEqual(basicOutput)
	})
})
describe('installer package ordering', function() {
	var Installer = require('../installer.js');
	var installer = new Installer();

	it('should order packages regardless of dependiencies or order', function() {
			var basicInput = {
				'arrSplit': [ [ 'KittenService', 'CamelCaser' ], [ 'CamelCaser', '' ], [ 'CamelCaser2', 'depWithNoDep' ] ],
				'packages': [ 'KittenService', 'CamelCaser', 'CamelCaser2']
			}
			var basicOutput = [ 'depWithNoDep', 'CamelCaser2', 'CamelCaser', 'KittenService' ]
		expect(installer.orderPackages(basicInput)).toEqual(basicOutput)
			var variation1 = {
				'arrSplit': [ [ 'CamelCaser', '' ], [ 'CamelCaser2', 'depWithNoDep' ], [ 'KittenService', 'CamelCaser' ] ],
				'packages': [ 'KittenService', 'CamelCaser', 'CamelCaser2']
			}
		expect(installer.orderPackages(variation1)).toEqual(basicOutput)
			var variation2 = {
				'arrSplit': [ [ 'CamelCaser2', 'depWithNoDep' ], [ 'KittenService', 'CamelCaser' ], [ 'CamelCaser', '' ]],
				'packages': [ 'KittenService', 'CamelCaser', 'CamelCaser2']
			}
			var variation2Output = [ 'CamelCaser', 'KittenService', 'depWithNoDep', 'CamelCaser2' ]
		expect(installer.orderPackages(variation2)).toEqual(variation2Output)
	})
	it('should report circular package dependencies', function() {
			var circInput = {
				'arrSplit': [ [ 'CamelCaser2', 'depWithNoDep' ], [ 'KittenService', 'CamelCaser' ], [ 'CamelCaser', 'KittenService' ]],
				'packages': [ 'KittenService', 'CamelCaser', 'CamelCaser2']
			}
			var errorOutput = 'ERROR: circular dependency'
		expect(installer.orderPackages(circInput)).toBe(errorOutput)
	})




})
