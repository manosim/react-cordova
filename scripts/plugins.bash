#!/bin/bash


function remove {

    echo ""
    echo "-------------------"
    echo " Removing Plugins"
    echo "-------------------"
    echo ""

    cordova plugin rm cordova-plugin-device  # "Device"
    cordova plugin rm cordova-plugin-console  # "Console"
    cordova plugin rm cordova-plugin-statusbar # "Status Bar"

}

function install {

    echo ""
    echo "------------------"
    echo "Installing Plugins"
    echo "------------------"
    echo ""

    cordova plugin add cordova-plugin-device # "Device"
    cordova plugin add cordova-plugin-console # "Console"
    cordova plugin add cordova-plugin-statusbar # "Status Bar"

}

if [ "$1" == "remove" ]; then
    remove
elif [ "$1" == "install" ]; then
    install
else
    remove
    install
fi
