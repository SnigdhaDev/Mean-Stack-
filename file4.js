var fs = require('fs');
fs.open('newfile.txt', 'w', function (err, data) 
                                               {                                        
		if (err) throw err;                           
		console.log('Empty File Created!');                 
		});
