# prophet
Caching Layer Server App

## Deploy

```
npm install -g @cornerstone-erp/prophet
prophet start
```

If you want to run it on a server, it's best to use a daemon manager :

```
pm2 start prophet --name "prophet" -- start
pm2 save
```

Depending on what database engine you plan to use, you may also register the repository :

```
npm install -g @cornerstone-erp/prophet

```


## Usage Commands 

- start : starts the server with following options :

  - memory_limit : define the maximal cache size, ex: 1G (units: M for Mb or G for Gb)
  - maxAge : default max age, ex : 1d (units: s for seconds, m for minutes, d for days)
  - prune : prune interval, ex : 30s (units: s for seconds, m for minutes, d for days)
  - log : log file, ex : /var/log/prophet.log
  - log-level : the log level : error, warn, info, debug, trace

- restart : stops the process and starts again, can pass same parameters as start command

- stop : stops the process

- status : gets the process status

- stats : show statistics about the run

- flush : flush caches on all repositories
