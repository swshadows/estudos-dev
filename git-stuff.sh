#!/bin/bash
read -p "Git message: " msg;
if [ -z $msg ] ; then
	exit;
else
	git add . && git commit -am "$msg" && git push;
fi