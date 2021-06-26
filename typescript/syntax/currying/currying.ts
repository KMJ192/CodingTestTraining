interface examObjType {
    first: string;
    second: string; 
}

const examObject: examObjType = {
    first: "first",
    second: "second"
}

function examFunc(this: examObjType,  ...arg: string[]){
    const arr = [this.first, this.second];
    const outputArr = arr.concat(arg);
	console.log(`${outputArr}`);
}

Function.prototype.myBinding  = function (...args: string[]) {
    const obj = this; // 여기서 this는 examFunc이 된다.
    const rest = args.slice(1);
    
    return function(...args2: string[]){
        obj.apply(args[0], [...rest, ...args2]);
    };
}

export function curryingRun(){
    // const tmp = examFunc.myBinding(examObject, "third", "forth", "fifth");
    // tmp("sixth", "seventh");
    
}