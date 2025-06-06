#docker build . -t cpbx

### STAGE 1: Build Angular frontend ###
FROM node:20 AS frontend
WORKDIR /app

# Copy package.json and package-lock.json
COPY src/cweb-app/package*.json ./
# Copy frontend files
COPY src/cweb-app/src ./src
COPY src/cweb-app/.browserslistrc ./
COPY src/cweb-app/angular.json ./
COPY src/cweb-app/tsconfig.json ./
COPY src/cweb-app/tslint.json ./

# Install frontend dependencies
RUN npm install

# Build frontend
RUN npm run build --omit=dev

### STAGE 2: Build Golang backend ###
FROM golang:1.24 AS backend
WORKDIR /app

# Copy go.mod and go.sum
COPY src/custompbx/go.mod src/custompbx/go.sum ./

# Copy backend files
COPY src/custompbx/ ./

# Download backend dependencies
#RUN go mod edit -replace github.com/custompbx/customorm=./customorm/
RUN go mod download

# Copy frontend assets
COPY --from=frontend /app/dist/* ./dist/cweb-app

# Build frontend assets into Go file
RUN go get -u github.com/go-bindata/go-bindata/...
RUN GOMODULE111=on CGO_ENABLED=0 GOOS=linux go build github.com/go-bindata/go-bindata/go-bindata
RUN ./go-bindata -pkg cweb -prefix dist/cweb-app -o ./cweb/cweb.go ./dist/cweb-app/...

# Build backend
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o cpbx .

### STAGE 3: Final image ###
FROM alpine:latest
WORKDIR /app

RUN mkdir -p /etc/freeswitch/tls

COPY certificates/wss-cert.pem /etc/freeswitch/tls/
COPY certificates/wss-key.pem /etc/freeswitch/tls/

RUN chmod 644 /etc/freeswitch/tls/wss-cert.pem
RUN chmod 600 /etc/freeswitch/tls/wss-key.pem

# Copy Golang backend from previous stage
COPY --from=backend /app/cpbx /app/cpbx

# Set environment variables if necessary
# ENV ...

VOLUME ["/app"]

# Expose the port that the Golang backend listens on
EXPOSE 8080

# Run the Golang backend
CMD ["/app/cpbx"]
