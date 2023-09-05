console.log('start...')
function f1() {
    return new Promise((resolve, reject) => {
        console.log(1)
        setTimeout(() => resolve('done'), 1000);
        console.log(2);
    })
}
async function f2() {
    console.log(3);
    let res = await f1();
    console.log(res);
    console.log(4);
}
f2();
console.log('end');
//Solution
/*
start...
3
1
2
end
done
4
*/