process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
			case 'version':
				console.log('process.versions');
				break;
			case !== 'version':
				console.log('please write command "version"');
        }
    }
});
