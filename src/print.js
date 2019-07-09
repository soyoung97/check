import {} from '../node.js';

const print = (...args) => {
  args.forEach((arg) => {
    console.log(args)
    return;
  })
}


export {print};
