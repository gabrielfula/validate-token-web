# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.18.2


FROM --platform=linux/amd64 node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app
COPY . .
RUN npm install


FROM base AS development
EXPOSE 5173
# CMD npm run dev
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


FROM base AS build
RUN npm run build


FROM --platform=linux/amd64 nginx:1.23.1-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"];
