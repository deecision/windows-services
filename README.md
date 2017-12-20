WINDOWS-SERVICES
================

Install node apps as windows services.
--------------------------------------

- install if no sources given
```
git clone git@github.com:deecision/windows-services
cd windows-services
npm install
```

- using windows-services

```
npm run install -- --path=ABSOLUTE_PATH_TO_YOUR_EXEC
npm run uninstall -- --path=ABSOLUTE_PATH_TO_YOUR_EXEC
```

Example
-------

```
npm run install -- --path=C:\\Users\\Deecision\\Projects\\Reech.exe
```

Will create a new service called.

```[Deecision] C:\\Users\\Deecision\\Projects\\Reech.exe```

[Services windows](https://github.com/deecision/windows-services/blob/feat-readme/services.png?raw=true)