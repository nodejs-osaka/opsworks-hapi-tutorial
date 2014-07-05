Opsworks HAPI Tutorial
======================

Step 1
------

This Repository contains a working hapi server that listens to Port 80.
(Opsworks will make sure that the server will listen to the correct domain)


To start this server you can simply start with:

```
$ sudo npm start
```

(```sudo``` is required because the server should run on port: 80)

Once started you should see "Hello World" when the server is up and running on:

http://localhost/


Step 2
------

When you deploy an application with opsworks, it provides you with a few
environment variables from the beginning. Most importantly the environment
variable ```HOST_NAME``` should be mentioned, as this contains the current
instance's name (important for logging).

After you have installed this branch you should be able to call:

```http://<yourserver>/host```

to show your server's host name, and:

```http://<yourserver>/env```

to list all the environment variables that are available.

### Extension

You can extend the environment variables by adding a custom Chef script
to your Opswork instance like those available here:

https://github.com/martinheidegger/OpsworksNodeAddons

> Why should you do that?
>
> If you have some secret keys for encryptions, passwords or API tokens
> that you don't want to leek in the public or your co-workers then it
> is not a bad idea to use opsworks as your configuration storage

Step 3
------

To continue go to the branch https://github.com/nodejs-osaka/opsworks-hapi-tutorial/tree/step-3