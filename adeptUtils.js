function AdeptUtils(adeptMonitor) {
  this.mon = adeptMonitor;



  var isCalibrated = false;

  var posJ = {
    J1: -1,
    J2: -1,
    J3: -1,
    J4: -1
  };

  var posXYZ = {
    Y: -1,
    X: -1,
    Z: -1,
    P: -1,
    Y: -1,
    R: -1
  };

  var posBaseTransform = {
    X: 0,
    Y: 0,
    Z: 0,
    R: 0
  };

  var posToolTransform = {
    X: 0,
    Y: 0,
    Z: 0,
    R: 0
  };

  var status = {};
}

// Get Status msg
AdeptUtils.prototype.updateStatus= function() {
  this.mon.write("STATUS\n\r");
  return this.mon.read();
};

// parse Status msg
AdeptUtils.prototype.parseStatusMsg = function(statusMsg) {};


// Calibrate robot
AdeptUtils.prototype.calibrate = function() {
this.mon.writeLn("CALIBRATE");
};









test = new AdeptUtils();
