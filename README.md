# Schemas

[JSON Schema](http://json-schema.org) data model schemas for use across products.

## Quick Start

Install via NPM:

    npm install --save-dev dash-schemas

Require individual schemas:

    const trackSchema = require('dash-schemas').track
    const appSchema = require('dash-schemas').app

Reference individual schemas:

    ...
    "track": { "$ref": "https://schemas.dashaudio.co/track" }
    ...
