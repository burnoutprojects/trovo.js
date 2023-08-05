export default class Timer {
    private running: boolean = false
    private interval: number = 5000
    private timeout: ReturnType<typeof setTimeout> | undefined = undefined
    private cb: unknown

    constructor() {
        this.running = false;
        this.interval = 5000;
    }

    start(cb?: unknown, interval?: number): Timer {
        clearTimeout(this.timeout)
        this.running = true
        if (cb) {
            this.cb = cb
        }
        if (interval) {
            this.interval = interval
        }
        this.timeout = setTimeout(this.execute, this.interval);

        return this;
    }

    execute() {
        if (!this.running) return false;
        if(!this.cb) throw new Error('cb must doesn\'t exist')
        this.cb()
        this.start()
    }
}