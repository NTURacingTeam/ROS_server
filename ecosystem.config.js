module.exports = {
  apps : [{
    name   : "frontend",
    script : "cd frontend && pnpm start",
		//watch  : true,
  },
  {
    name   : "backend",
    script : "cd backend && pnpm start"
		//watch  : true,
  },
  {
    name   : "records",
    script : "cd /home/nturt/Documents/docker/packages/ros2/raw_data && php -S 0.0.0.0:8889"
		//watch  : true,
  },
  ]
}
