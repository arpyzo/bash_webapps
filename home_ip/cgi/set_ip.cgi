#!/bin/bash

read request

echo -e 'Content-type: text/html\n'

echo "<meta charset="us-ascii">" > ../ip
echo "<h1>$REMOTE_ADDR</h1>" >> ../ip
