#!/bin/bash

read request

echo -e 'Content-type: text/html\n'

cd ../mp3
ls -d */ | sed 's/\///'
