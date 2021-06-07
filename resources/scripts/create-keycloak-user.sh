#!/usr/bin/env bash

if [ -z "${KEYCLOAK_URL+set}" ]; then
  KEYCLOAK_URL="http://keycloak:8080"
fi

echo $KEYCLOAK_URL

#sleep 20
while true; do
  curl -s $KEYCLOAK_URL > /dev/null
  retcode=$?
  echo $retcode
  if [ $retcode -gt 0 ] ;
  then
    echo 'Waiting...';
    sleep 2;
  else
    break;
  fi
done;

cd /opt/jboss/keycloak/bin/
./kcadm.sh config credentials --server "$KEYCLOAK_URL"/auth --realm master --user admin --password admin123

./kcadm.sh create users -r hume -s username=testuser -s enabled=true -o --fields id
./kcadm.sh set-password -r hume --username testuser --new-password default

./kcadm.sh add-roles --uusername testuser --rolename ROLE_ADMINISTRATOR --cclientid hume-web -r hume
./kcadm.sh add-roles --uusername testuser --rolename ROLE_USER --cclientid hume-web -r hume

