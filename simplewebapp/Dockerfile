FROM node:alpine

WORKDIR /usr/app

#copy only package.json first
COPY ./package.json ./

#run npm install now to download all the dependencies
RUN npm install


#Copy the remaining code now. Whenever we change only the code, we need not install the deps
#again. Docker can use the cache.
#The copy on container can be /. as WORKDIR creates and also changes the directory
COPY ./ ./

CMD ["npm", "start"]