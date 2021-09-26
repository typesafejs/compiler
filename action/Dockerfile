FROM node:16
RUN pwd
COPY packages
COPY *.json
RUN ls -l
RUN npx yarn install
RUN npx lerna bootstrap