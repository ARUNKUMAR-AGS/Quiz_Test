
// const baseRestUrl = 'http://192.168.1.14:8000/api/v1/';
 const baseRestUrl = 'https://bumblepay-api.herokuapp.com/api/v1/';


export const getFirstCall = () => ({
    list: baseRestUrl
});

export const getCurrenciesCall = () => ({
    list: baseRestUrl+'currencies.json'
});

export const getSignInCall = () => ({
    list: baseRestUrl+'login.json'
});

export const getSignUpCall = () => ({
    list: baseRestUrl+'update_profile.json'
});

export const setDoctypeCall = () => ({
    list: baseRestUrl+'kycs.json'
});

export const Settransactioncall = () => ({
    list: baseRestUrl+'transactions.json'
});

export const getTradeList = (data) => ({
    list: baseRestUrl+'transactions.json?id='+data
});

export const setWalletaddress = () => ({
    list: baseRestUrl+'wallets.json'
});

export const getWalletaddress = (data) => ({
    list: baseRestUrl+'wallets.json?id='+data
});

export const getbankAcclistUrl = (data) => ({
    list: baseRestUrl+'bank_accounts.json?id='+data
});

export const setbankAcclistUrl = () => ({
    list: baseRestUrl+'bank_accounts.json'
});