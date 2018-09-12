#!/usr/bin/env bash

echo "Did you connect your iPhone to the PC? Type 'yes' to continue..."
read line
if [ "${line}" != "yes" ]; then
    exit
fi

ionic cordova build ios --prod

xcodebuild platforms/ios/facts.xcodeproj