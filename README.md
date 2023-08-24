#　NTURT ROS server

## Introduction

hosts website for remote monitor (control tower) for the Epsilon 4 racing car.

## Usage

### Install required packages

first make sure yarn is installed.

run `yarn install` or `pnpm install` in root file, frontend folder, and backend folder. 

### Deploy
Make sure you are in the root directory of this repo.

To start the frontend run `yarn start`.

To start the backend run `pnpm start`.

To start the file sharing PHP server run `php -S 0.0.0.0:[PORT]` at `backend/records`.

(remark: these three should be runned in different shells)
