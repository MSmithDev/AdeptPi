function AdeptMonitor(port, baud) {
  this.serialPort = new SerialPort(port, {
    baudRate: baud
  });
}

//Prints a single line with return chars
AdeptMonitor.prototype.write = function(string) {
  this.serialPort.write(string);
};

//Prints a single line with return chars
AdeptMonitor.prototype.writeLn = function(string) {
  this.serialPort.write(string + "\n\r");
};


///////// Prototypes for all adept monitor commands /////////

//Base ()


// Get Base 
AdeptMonitor.prototype.writeLn = function(string) {
    this.serialPort.write(string + "\n\r");
  };





monitor = new AdeptMonitor("CNCA0", 9600);
monitor.writeLn("test");
