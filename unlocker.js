var Gpio = require('onoff').Gpio;
var LED = new Gpio(14, 'out');


unlock();

function unlock()
{
if (LED.readSync() ===0)
	{
	LED.writeSync(1);
	}
else
	{
	LED.writeSync(0);
	}
}

function endUnlock()
{
	LED.writeSync(0);
	LED.unexport();
	
}

setTimeout(endUnlock, 5000);

