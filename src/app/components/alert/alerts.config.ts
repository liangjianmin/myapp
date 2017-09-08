export var AlertsConfigData: any[] = [];

export var AlertsSettingsData: Object = {};

AlertsConfigData['error'] = {
    css: {
        icon: 'error'
    }
};

AlertsConfigData['success'] = {
    css: {
        icon: 'success'

    }
};

AlertsConfigData['warn'] = {
    css: {
        icon: 'warning'
    }
};

AlertsSettingsData['timeout'] = 3;

export class AlertsConfig {
    settings: Object[] = [];

    getstyles(type) {
        return {
            icon: AlertsConfigData[type].css.icon
        };
    }

    setSettings() {
        return AlertsSettingsData;
    }

    callbackfun(callback) {
       
    }
}