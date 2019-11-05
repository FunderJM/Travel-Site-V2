FROM node:8
COPY travelsite-v2 .
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]