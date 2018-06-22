import configureStoreProduction from './configureStore.prod';
import configureStoreDev from './configureStore.dev';

if(process.env.NODE_ENV === "production"){
    export const configureStoreProduction = configureStoreProduction;
}else{
    export const configureStoreDev = configureStoreDev;
}