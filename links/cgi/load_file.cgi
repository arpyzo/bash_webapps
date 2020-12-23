#!/bin/bash

read request

echo -e 'Content-type: text/html\n'

if [[ $QUERY_STRING =~ ^file=([a-z]+)$ ]]; then
    if [[ -f /var/www/links/save/${BASH_REMATCH[1]} ]]; then
        cat /var/www/links/save/${BASH_REMATCH[1]}
    else
        echo -n "Can't find links file: ${BASH_REMATCH[1]}"
    fi
fi
