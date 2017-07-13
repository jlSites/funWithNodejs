import { isOld } from "./age-service";

class HelloTs {
    public sayHi(): number {
        console.log('say hi, ' + this.blahAge());
        return 1;
    }

    public blahAge(): string {
        return isOld(34) ? 'very old' : 'young man';
    }
}

new HelloTs().sayHi();