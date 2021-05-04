import Vue from 'nativescript-vue';
import {settings} from './const'
import store from '../app/store'
import HelloWorld from './components/login/login_main.vue';
import {firebase} from '@nativescript/firebase';


if (!settings.mock){
    firebase.init({}).then(()=>{
        console.log("Firebase init done")
    })
} else{
    console.log("Firebase was disabled due MOCK set to true")
}

new Vue({
    template: `
        <Frame>
            <HelloWorld />
        </Frame>`,

    components: {
        HelloWorld
    },
    store
}).$start();