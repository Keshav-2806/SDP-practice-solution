let timerId = setInterval(() => console.log('tick'), 3000);
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 12000);
