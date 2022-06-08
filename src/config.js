import { RisiBank } from "risibank-web-api";


export const callbacks = {

    /**
     * Add the link to the source image (e.g. NoelShack)
     */
    source: RisiBank.Actions.addSourceImageLink,

    /**
     * Add the link to the RisiBank image
     */
    risibank: RisiBank.Actions.addRisiBankImageLink,

    /**
     * Paste the image in base64 format to the specified element
     */
    raw: RisiBank.Actions.pasteImage,

    /**
     * Do nothing
     */
    void: () => () => {},
};


/**
 * Default configuration, when we do not know what to do with the site
 */
export const defaultConfig = {
    "mode": "risibank",
};



export const rules = [
    {
        "host": "www.jeuxvideo.com",
        "pathname": "/",
        "config": {
            "mode": "source",
        },
    },
    {
        "host": "twitter.com",
        "pathname": "/",
        "config": {
            "mode": "risibank",
        },
    },
    {
        "host": "avenoel.org",
        "pathname": "/",
        "config": {
            "mode": "source",
        },
    },
    {
        "host": "2sucres.org",
        "pathname": "/",
        "config": {
            "mode": "void",
        },
    },
    {
        "host": "risibank.fr",
        "pathname": "/",
        "config": {
            "mode": "risibank",
        },
    },
    {
        "host": "skych.at",
        "pathname": "/",
        "config": {
            "mode": "risibank",
        },
    },
    {
        "host": "facebook.com",
        "pathname": "/",
        "config": {
            "mode": "raw",
        },
    },
    {
        "host": "www.facebook.com",
        "pathname": "/",
        "config": {
            "mode": "raw",
        },
    },
    {
        "host": "web.whatsapp.com",
        "pathname": "/",
        "config": {
            "mode": "raw",
        },
    },
    {
        "host": "discord.com",
        "pathname": "/",
        "config": {
            "mode": "raw",
        },
    },
    {
        "host": "www.reddit.com",
        "pathname": "/",
        "config": {
            "mode": "raw",
        },
    },
];
