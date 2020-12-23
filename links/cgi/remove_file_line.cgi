#!/bin/bash

read REQUEST_DATA

if [[ $REQUEST_DATA =~ ^filename=([a-z]+)\&line=(.+) ]]; then
    LINE=$(echo -ne $(echo -n ${BASH_REMATCH[2]} | sed "s/%/\\\\x/g"))
    sed -i -e "/${LINE//\//\\/}/d" "/var/www/links/save/${BASH_REMATCH[1]}"
fi

echo -e 'Content-type: text/html\n'
