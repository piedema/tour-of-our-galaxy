# FROM node:8-alpine
# RUN mkdir -p /dist
# WORKDIR /dist
# RUN npm install && npm install typescript
# COPY . .
# RUN tsc
# EXPOSE 31500
# CMD [ "node", "./dist/app.js" ]

FROM node:11-slim
WORKDIR /usr/src/app

# Also copy the lock file
COPY . .

# typescript is a devDependencies, no need to separately install it
RUN npm install
RUN npm install -g typescript

# Copy the rest of your application in
# (include `node_modules` in a `.dockerignore` file)
COPY ./ ./

# Now build it (Docker supplies a `sh -c` wrapper for you)
RUN tsc -p .

# Runtime metadata as above
ENV PORT=31500
EXPOSE 31500
USER node
CMD ["node", "./dist/app.js"]