import Vue from "vue";

let eventBus = new Vue();

export {eventBus};

let eventBusActions = {
    LANGUAGE_CHANGED: "langChanged"
};

export {eventBusActions};


