#!/bin/bash

read REQUEST_DATA

if [[ $REQUEST_DATA =~ ^filename=([a-z]+)\&content=(.*) ]]; then
    echo -ne $(echo -n ${BASH_REMATCH[2]} | sed "s/%/\\\\x/g") > /var/www/notes/save/${BASH_REMATCH[1]}
fi

echo -e 'Content-type: text/html\n'
