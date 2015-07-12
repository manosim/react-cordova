#!/bin/bash


function remove {

    echo ""
    echo "-------------------"
    echo " Removing Plugins"
    echo "-------------------"
    echo ""

    ionic plugin rm cordova-plugin-device  # "Device"
    ionic plugin rm cordova-plugin-console  # "Console"

}

function install {

    echo ""
    echo "------------------"
    echo "Installing Plugins"
    echo "------------------"
    echo ""

    ionic plugin add cordova-plugin-device # "Device"
    ionic plugin add cordova-plugin-console # "Console"

}

if [ "$1" == "remove" ]; then
    remove
elif [ "$1" == "install" ]; then
    install
else
    remove
    install
fi
