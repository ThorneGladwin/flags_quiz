# update AWS Credentials for the current console session
# 
# Usage
#   source ./scripts/updateAWSCredentials.sh <token_code>
#
# Note
#
# After running this script we should have the environment variables created, and then we can test if aws is working:

#!/bin/bash 
set -o pipefail

# get environment variables from .env
[ -f .env ] && source .env

#enable mfa (required for assume role)
if [[ -z $MFA_SERIAL2 ]]; then
    echo "\$MFA_SERIAL2 is empty, please set it as an environment variable"
fi
echo "MFA_SERIAL2: $MFA_SERIAL2"

# read -p "Enter Your MFA token here: " MFA_TOKEN
MFA_TOKEN=$1
echo "MFA_TOKEN: $MFA_TOKEN"
if [ -z "$MFA_TOKEN" ]
then
    echo "Please Enter your MFA token"
fi

response=`aws sts get-session-token --serial-number $MFA_SERIAL2 --token-code $MFA_TOKEN`

if [[ $? != 0 ]]; then
    echo $?
    echo "MFA id: $MFA_SERIAL2 and MFA token: $MFA_TOKEN do not match up, or authentication to AWS failed. If not working, try to run a fresh console."
fi

export AWS_ACCESS_KEY_ID=$(echo "$response" | grep AccessKeyId | awk '{ print $2 }' | sed s/\"//g | sed s/,//g)
export AWS_SECRET_ACCESS_KEY=$(echo "$response" | grep SecretAccessKey | awk '{ print $2 }' | sed s/\"//g | sed s/,//g)
export AWS_SESSION_TOKEN=$(echo "$response" | grep SessionToken | awk '{ print $2 }' | sed s/\"//g | sed s/,//g)
echo "AWS_ACCESS_KEY_ID: $AWS_ACCESS_KEY_ID"
echo "AWS_SECRET_ACCESS_KEY: $AWS_SECRET_ACCESS_KEY"
echo "AWS_SESSION_TOKEN: $AWS_SESSION_TOKEN"
