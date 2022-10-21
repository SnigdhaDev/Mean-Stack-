var fs = require('fs');
fs.unlink('modified.txt', function (err) { 
                        if (err)
        			console.log(err);
                        else
       	 	console.log('File Deleted  !');
});
