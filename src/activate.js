import { RisiBank } from "risibank-web-api";
import { callbacks, defaultConfig, rules } from "./config";

(() => {
    // Check if already init
    if (document.getElementById('risibank-extension-container')) {
        return;
    }
    const tracer = document.createElement('div');
    tracer.id = 'risibank-extension-container';
    tracer.style.display = 'none';
    tracer.style.width = '0';
    tracer.style.height = '0';
    document.body.appendChild(tracer);

    // Listen for keyboard event listener
    document.addEventListener('keydown', event => {
        
        // Shortcut we want? Alt+;
        if (! (event.key === ';' && event.altKey)) {
            return;
        }

        // Input-able element?
        if (! ['TEXTAREA', 'INPUT', 'DIV'].includes(document.activeElement.tagName)) {
            return;
        }

        // Identify rule
        const rule = rules.find(rule => rule.host === location.host && location.pathname.startsWith(rule.pathname));
        const config = rule ? rule.config : defaultConfig;

        // Identify callback
        const callback = callbacks[config.mode];

        RisiBank.activate({
            ...RisiBank.Defaults.Modal.Dark,
            onSelectMedia: callback(document.activeElement),
        });
    });
})();
