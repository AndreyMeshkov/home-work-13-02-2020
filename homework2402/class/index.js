var Server = /** @class */ (function () {
    // constructor(name: string, ip: number) {
    //   this.name = name
    //   this.ip = ip
    // }
    // other variant
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        // public name: string
        // private ip: number
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 1234);
