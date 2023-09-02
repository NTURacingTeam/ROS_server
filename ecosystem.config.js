module.exports = {
  apps : [{
    name   : "ROS_Server-frontend",
    script : "cd frontend && pnpm start"
  },
  {
    name   : "ROS_Server-backend",
    script : "cd backend && pnpm start"
  },
  {
    name   : "ROS_Server-records",
    script : "cd backend/records && php -S 0.0.0.0:8889"
  },
  ]
}
