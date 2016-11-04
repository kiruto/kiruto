import Timer = NodeJS.Timer;
/**
 * Created by yuriel on 11/4/16.
 */
export class CyclicTask {

    private shouldRun = true;
    private interval: number;
    private cb: () => any;
    private id: Timer;

    times: number = 0;

    static run(task: ()=> any, interval: number): CyclicTask {
        let instance = new CyclicTask();
        instance.interval = interval;
        instance.cb = function() {
            if (instance.shouldRun) {
                task();
                instance.times ++;
                instance.id = setTimeout(instance.cb, instance.interval)
            }
        };
        instance.cb();
        return instance;
    }

    constructor(){}

    stop() {
        this.shouldRun = false;
        clearTimeout(this.id);
    }

    run() {
        this.shouldRun = true;
        this.cb();
    }
}