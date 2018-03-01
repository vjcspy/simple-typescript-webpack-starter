import * as _ from "lodash";
import {Subject} from "rxjs/Subject";

const stream = new Subject();

stream.subscribe((d) => console.log(d));

const test = () => {
    const array = [1, 2, 3, 4, 5];
    _.forEach(array, (i) => stream.next(i));
};

test();