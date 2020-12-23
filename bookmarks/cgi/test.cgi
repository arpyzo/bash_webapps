#!/bin/bash

read REQUEST_DATA

escaped=$(echo -n "$REQUEST_DATA" | sed "s/%/\\\\x/g")
device=$(echo -e "$escaped" | jq -r .deviceName)
echo -e $escaped | jq .bookmarks > "/var/www/bookmarks/save/$device"

echo -e 'Content-type: text/html\n'
