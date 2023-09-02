module.exports = {
  apps : [{
    name   : "ROS_server-frontend",
    script : "cd frontend && pnpm start",
		watch  : true,
  },
  {
    name   : "ROS_server-backend",
    script : "cd backend && pnpm start"
		watch  : true,
  },
  {
    name   : "ROS_server-records",
    script : "cd backend/records && php -S 0.0.0.0:8889"
		watch  : true,
  },
  ]
}
