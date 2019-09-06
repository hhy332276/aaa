let constants = {
    responseCode:{
        SUCCESS:200
    },
    storageVariables:{
        language:"lang",
        token: "token"
    }
};

export {constants};

let environment = {
    ONLINE: 'online',
    TEST:   'test',
    DEV:    'dev',
    PREONLINE:'preonline'
};
//start by declaring the default object keys here so that you can be
// able to refer them outside when you import this file
let envVariables = {
    BASE_URL: 'http://122.112.148.247/turing/',
};

let getVariables = (env) => {
    switch (env) {
        default:
        case environment.PREONLINE:
            envVariables.BASE_URL = 'http://119.3.75.196/turing/';
            //It's useless but just leave it here just in case it needs to be used in the future
            break;
        case environment.DEV:
            //It's useless but just leave it here just in case it needs to be used in the future
            break;
        case environment.TEST:
            //use the same base url
            break;
        case environment.ONLINE:
            //replace this with the online base url
            envVariables.BASE_URL = 'https://ascend.huawei.com/turing/';
            break;
    }
    return envVariables;
};
//Just change the environment variable here to update the whole website's APIs.
getVariables(environment.DEV);

export {envVariables};



let settings = {
    setLanguage(lang){
        localStorage.setItem(constants.storageVariables.language,lang);
    },
    getLanguage(){
        let language = "zh";
        let storedLanguage = localStorage.getItem(constants.storageVariables.language);
        if(storedLanguage && storedLanguage.trim() !== ""){
            language = storedLanguage.trim();
        }
        return language;
    }
};

export {settings};


let user = {
    isLogin(){
        let result = false;
        let temp = localStorage.getItem(constants.storageVariables.token);
        if(temp && temp.trim() !== ""){
            result = true;
        }
        return result;
    },
    getLoginToken(){
        let result = "";
        let temp = localStorage.getItem(constants.storageVariables.token);
        if(temp && temp.trim() !== ""){
            result = temp;
        }
        return result;
    }
};

export {user};



let HWReport = {
    reportPageView(page){
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments);}
        // gtag('js', new Date());
        // gtag('config', 'UA-143314584-1');

        //add this evaluation just in case the Huawei report JS scripts aren't downloaded
        if(typeof ga !== "undefined" && typeof ga === "function"){
            console.log(1);
            ga('set', 'page', page);
            ga('send', 'pageview');
        }
    },
    reportEvent(eventName){
        //add this evaluation just in case the Huawei report JS scripts aren't downloaded
        if(typeof ga !== "undefined" && typeof ga === "function"){
            ga('send', 'event',eventName);
        }
    }

};


export {HWReport}
