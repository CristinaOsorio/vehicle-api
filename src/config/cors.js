const parseCorsOrigins = (origins) => {
  return origins ? origins.split(',') : ['http://localhost:4200'];
};

const corsOptions = {
  origin: parseCorsOrigins(process.env.CORS_ORIGIN),
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

module.exports = corsOptions;
