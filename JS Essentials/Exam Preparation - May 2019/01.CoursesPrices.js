function solve(a, b, c, d){
    let isJSFun = (a === true);
    let isJSAdv = (b === true);
    let isJSApp = (c === true);

    let priceJSFun = Number(170);
    let priceJSAdv = Number(180);
    let priceJSApp = Number(190);
    let totalPrice = Number(0);

    if (isJSFun && isJSAdv && isJSApp) {
        totalPrice = priceJSFun + priceJSAdv * 0.9 + priceJSApp;
        totalPrice = totalPrice * 0.94;
    }else if(isJSFun && isJSAdv){
        totalPrice = priceJSFun + (priceJSAdv * 0.9);
    }else {
        if (isJSFun){
            totalPrice += priceJSFun;
        }
        if (isJSAdv){
            totalPrice += priceJSAdv;
        }
        if (isJSApp){
            totalPrice += priceJSApp;
        }
    }
    
    if (d === 'online') {
        totalPrice = totalPrice * 0.94;
    }
    console.log(Math.round(totalPrice).toFixed(0));
}
solve(true, true, false,
    "onsite");