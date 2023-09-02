#　NTURT ROS server

## Introduction

hosts website for remote monitor (control tower) for the Epsilon 4 racing car.

## Usage

### Install required packages

first make sure yarn is installed.

run `pnpm install` in root file, frontend folder, and backend folder. 

### Deploy
Make sure you are in the root directory of this repo.

#### Recommand

To start all run `pm2 start`.

#### Others 

To start the frontend run `pnpm start`.

To start the backend run `pnpm server`.

To start the records server run `php -S 0.0.0.0:8889` at `./backend/records`.

(remark: these three should be runned in different shells)
