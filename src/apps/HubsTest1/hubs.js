import App from "./App.vue";
import HubsAppProto from "../HubsApp";
import Store from "./shared"

class HubsApp extends HubsAppProto {
    constructor () {
        super(App, 400, 475)

        // create our shared data object that will
        // share data between vue and hubs
        this.shared = new Store(this)
        this.vueApp.provide('shared', this.shared)

        this.isInteractive = true;
        this.isNetworked = true;
        this.isStatic = false;

        console.log (JSON.stringify(this.shared.data))
    }
    
    updateSharedData(dataObject) {
        this.shared.updateSharedData(dataObject)
    }

    getSharedData() {
        return this.shared.state;
    }
}

var init = function () {
    let app = new HubsApp()
    app.mount()
    return app
}

export default init
