
// this a dummy transport like thing for similuating 
// two client connection.
export class FakePipe {
    constructor() {
        this.first_handler = null
        this.second_handler = null
    }

    /**
     * @param {Uint8Array} data
     */
    sendFirst = async (data) => {
        this.second_handler(data)
    }
    /**
    * @param {Uint8Array} data
    */
    sendSecond = async (data) => {
        this.first_handler(data)
    }

    onFirst = (fn) => {
        this.first_handler = fn
    }

    onSecond = (fn) => {
        this.second_handler = fn
    }

    get = (t) => {
        switch (t) {
            case "first":
                return { send: this.sendFirst, on: this.onFirst }
            case "second":
                return { send: this.sendSecond, on: this.onSecond }
            default:
                break;
        }
    }
}