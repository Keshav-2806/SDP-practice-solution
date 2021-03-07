function determineLever(arr) {
	return arr[1] == 'f' ? 'first class lever' : 
				 arr[2] == 'f' ? 'second class lever' :
				 'third class lever';
	}