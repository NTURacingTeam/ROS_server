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
    script : "cd backend/records && php -S 0.0.0.0:8889"
		//watch  : true,
  },
  ]
}
