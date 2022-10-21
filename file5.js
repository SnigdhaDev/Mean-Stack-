var fs = require('fs');
fs.rename('sample.txt', 'modifed.txt', function (err) { 
                        if (err)
        			console.log(err);
                        else
       	 	console.log('File Name Changed  !');
});
