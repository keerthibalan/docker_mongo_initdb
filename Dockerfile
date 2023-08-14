FROM mongo:4.2

EXPOSE 27017

COPY mongo-init.js /docker-entrypoint-initdb.d/

CMD ["--auth"]
