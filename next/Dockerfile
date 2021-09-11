ARG DATABASE_URL=test
FROM node:alpine
WORKDIR /usr/src
COPY ./package*.json ./
RUN yarn 
# We copy and install package.json node modules with yarn then move down a directory and add the filesystem
ENV PATH /usr/src/node_modules/.bin:$PATH
WORKDIR /usr/src/app
COPY ./ ./ 
RUN yarn build
ENV PORT=3000
EXPOSE 3000
# yarn start calls the package.json start script which is next build && next start; next build builds the dynamic pages in the .next directory; next start starts the server
CMD yarn start
