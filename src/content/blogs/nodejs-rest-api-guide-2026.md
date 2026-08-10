---
title: "How to Build a REST API with Node.js and Express in 2026: Complete Developer Guide"
description: "A comprehensive, production-grade guide to building scalable REST APIs with Node.js and Express. Covers project structure, authentication with JWT, database integration (PostgreSQL & MongoDB), input validation, error handling, rate limiting, Docker deployment, and API testing in 2026."
slug: "nodejs-rest-api-guide-2026"
date: "2026-08-06"
author: "Algorithyum Software Engineering Team"
category: "Backend Development"
tags: ["Node.js", "REST API", "Express.js", "Backend Development", "JavaScript", "TypeScript", "JWT Authentication", "PostgreSQL", "MongoDB", "Docker", "API Security", "Software Development", "Web Development", "API Design", "Microservices"]
image: "/images/blog/nodejs-rest-api-guide-2026.png"
canonical: "https://algorithyum.in/blog/nodejs-rest-api-guide-2026"
readingTime: "28 min read"
faq:
  - q: "What is a REST API and why is Node.js a good choice for building one?"
    a: "A REST API (Representational State Transfer API) is a standardized architectural interface that allows systems to communicate over HTTP using stateless requests and JSON payloads. Node.js is an excellent choice for REST API development because of its non-blocking, event-driven I/O model that handles high concurrency with minimal overhead, its vast npm ecosystem, its shared JavaScript language across frontend and backend, and its production-proven performance in companies like Netflix, LinkedIn, and Uber."
  - q: "What is the difference between REST and GraphQL APIs?"
    a: "REST APIs expose multiple endpoints (e.g., /users, /products/:id) each returning fixed data shapes. GraphQL exposes a single endpoint where clients declare exactly what fields they need, reducing over-fetching. REST is simpler to cache, easier to implement HTTP security standards, and better for CRUD-heavy applications. GraphQL excels when frontends need flexible, nested data queries from complex entity graphs. For most enterprise CRUD services, REST remains the pragmatic default."
  - q: "Should I use JavaScript or TypeScript for a production Node.js REST API?"
    a: "TypeScript is strongly recommended for production Node.js REST APIs in 2026. TypeScript enforces static type safety across request bodies, response schemas, database models, and service interfaces, catching entire classes of runtime errors at compile time. It dramatically improves team collaboration through auto-complete, refactoring safety, and self-documenting interfaces. The compilation overhead is negligible compared to the reduction in production bugs."
  - q: "How do I secure a Node.js REST API?"
    a: "Securing a Node.js REST API requires multiple layered defenses: JWT or OAuth 2.0 authentication with short-lived access tokens plus refresh token rotation, input validation and sanitization using Zod or Joi on every endpoint, parameterized database queries to prevent SQL injection, rate limiting via express-rate-limit, CORS whitelist configuration, HTTPS enforcement, Helmet.js security headers, and secrets management via environment variables and cloud vaults."
  - q: "How do I handle errors properly in a Node.js REST API?"
    a: "Production Node.js APIs require a centralized global error handler as Express middleware. Create a custom AppError class that standardizes error shapes with HTTP status codes, error codes, and messages. Wrap all async route handlers in a catchAsync utility to avoid unhandled promise rejections. The global error handler differentiates between operational errors (send descriptive JSON to client) and programming errors (log full stack trace, return generic 500 response). Never leak stack traces to clients in production."
  - q: "What database should I use with a Node.js REST API — PostgreSQL or MongoDB?"
    a: "The choice depends on your data model. PostgreSQL (relational) is ideal for structured data with strong relational integrity, complex JOIN queries, financial transactions, and ACID compliance needs. MongoDB (document-oriented) suits flexible, schema-less documents, rapidly evolving data shapes, and hierarchical data that maps naturally to JSON. Many production systems use both: PostgreSQL for core transactional data and MongoDB for logging, catalogs, or content management."
  - q: "How do I deploy a Node.js REST API to production?"
    a: "The modern production deployment stack for Node.js APIs uses Docker containers orchestrated with Kubernetes (or Docker Compose for smaller services). Containerize the API with a multi-stage Dockerfile, push to a container registry (ECR, GCR, Docker Hub), deploy via CI/CD pipeline (GitHub Actions, CircleCI) to your cloud (AWS ECS/EKS, Google Cloud Run, Azure Container Apps). Add a managed load balancer, auto-scaling rules, health check endpoints, and structured JSON logging for observability."
  - q: "How do I version a REST API?"
    a: "API versioning prevents breaking changes from disrupting existing clients. The most common strategy is URL path versioning: prefix all routes with /api/v1, /api/v2, etc. This makes versions explicit, easy to route, and simple to deprecate. Header-based versioning (Accept: application/vnd.api+json;version=2) is cleaner architecturally but harder to test and cache. Maintain at least one major version in parallel during deprecation windows with sunset headers."
  - q: "What tools should I use for API testing?"
    a: "Use Jest with Supertest for automated integration tests that run against an in-memory or test database. For manual exploration and documentation, Postman and Insomnia remain industry standards. For contract testing between microservices, Pact.io enforces consumer-driven contracts. Add Newman (Postman's CLI) to your CI pipeline to run your Postman collection as automated regression tests on every pull request."
  - q: "How does Algorithyum help enterprises build scalable Node.js APIs?"
    a: "Algorithyum's backend engineering team builds production-grade Node.js REST and GraphQL APIs with TypeScript, following clean architecture patterns, domain-driven design, and security-first principles. We integrate enterprise authentication (SAML, OAuth, LDAP), design optimized PostgreSQL and MongoDB schemas, implement CQRS and event sourcing patterns for high-throughput systems, and deliver fully Dockerized, CI/CD-ready codebases with comprehensive test suites."
---

# How to Build a REST API with Node.js and Express in 2026: Complete Developer Guide

Building a scalable, secure, and maintainable REST API is one of the most fundamental skills in modern software engineering. In 2026, **Node.js with Express** remains the most widely adopted backend stack for REST API development — powering everything from startup MVPs to enterprise microservice architectures at Netflix, LinkedIn, PayPal, and NASA.

This guide goes far beyond "Hello World" tutorials. We cover the complete production lifecycle: project architecture, TypeScript integration, database design, JWT authentication, input validation, centralized error handling, rate limiting, API documentation, Docker containerization, and automated testing — everything you need to ship a REST API that scales.

Whether you're a junior developer building your first API or a senior engineer designing a microservice for an enterprise platform, this guide delivers the depth you need.

---

## What is a REST API? Core Concepts

A **REST API** (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications based on stateless, client-server communication over HTTP.

### REST Constraints

| Constraint | Description |
|---|---|
| **Stateless** | Every request contains all information needed. No server-side session state. |
| **Client-Server** | UI and data concerns are separated. Each can evolve independently. |
| **Cacheable** | Responses declare whether they can be cached using HTTP headers. |
| **Uniform Interface** | Consistent resource naming (nouns), HTTP methods (verbs), and response formats. |
| **Layered System** | Clients don't know if they're talking to the origin server or a proxy/cache layer. |

### HTTP Methods → CRUD Mapping

| HTTP Method | Operation | Example |
|---|---|---|
| `GET` | Read | `GET /api/v1/users` |
| `POST` | Create | `POST /api/v1/users` |
| `PUT` | Full Replace | `PUT /api/v1/users/:id` |
| `PATCH` | Partial Update | `PATCH /api/v1/users/:id` |
| `DELETE` | Delete | `DELETE /api/v1/users/:id` |

> [!TIP]
> Always use **plural nouns** for resources (`/users`, `/products`, `/orders`) and **never use verbs in URLs** (`/getUser`, `/createOrder`). The HTTP method already communicates the action.

---

## Why Node.js + Express in 2026?

Despite strong competition from Bun, Deno, Fastify, and Go-based frameworks, **Node.js + Express remains the dominant REST API stack** for good reason:

- **Massive Ecosystem**: Over 2 million npm packages covering every integration imaginable
- **Non-Blocking I/O**: Handles thousands of concurrent connections efficiently via the event loop
- **JavaScript Everywhere**: Share validation schemas, types, and utilities between frontend and backend
- **Fastify Alternative**: For performance-critical microservices, consider Fastify — it benchmarks 2x faster than Express with built-in schema validation and serialization
- **TypeScript First**: Modern Node.js APIs use TypeScript for type safety, better IDE support, and fewer runtime errors

### Node.js vs Competing Stacks (2026)

| | Node.js/Express | Go/Gin | Python/FastAPI | Bun/Elysia |
|---|---|---|---|---|
| **Performance** | High | Very High | Medium | Very High |
| **Ecosystem** | Largest | Growing | Large (ML/DS) | Early-Stage |
| **Dev Speed** | Very Fast | Fast | Very Fast | Fast |
| **Type Safety** | TypeScript | Native | Pydantic | TypeScript |
| **Enterprise Adoption** | Dominant | High | High (AI/ML) | Emerging |
| **Best For** | Web APIs, Microservices | High-throughput systems | Data APIs, AI backends | Experimental high-perf |

---

## Project Setup: TypeScript + Node.js + Express

### 1. Initialize the Project

```bash
mkdir my-rest-api && cd my-rest-api
npm init -y
npm install express cors helmet morgan dotenv
npm install -D typescript ts-node @types/node @types/express @types/cors @types/morgan nodemon
```

### 2. TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 3. Production-Grade Project Structure

```
my-rest-api/
├── src/
│   ├── config/
│   │   ├── database.ts        # DB connection setup
│   │   ├── env.ts             # Validated environment variables
│   │   └── logger.ts          # Winston/Pino logger config
│   ├── controllers/
│   │   ├── user.controller.ts # Route handlers (thin layer)
│   │   └── auth.controller.ts
│   ├── services/
│   │   ├── user.service.ts    # Business logic (fat layer)
│   │   └── auth.service.ts
│   ├── repositories/
│   │   ├── user.repository.ts # Database queries
│   │   └── base.repository.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts  # JWT verification
│   │   ├── validate.middleware.ts  # Zod schema validation
│   │   ├── rateLimiter.ts
│   │   └── errorHandler.ts    # Global error handler
│   ├── routes/
│   │   ├── v1/
│   │   │   ├── users.routes.ts
│   │   │   ├── auth.routes.ts
│   │   │   └── index.ts       # v1 router aggregator
│   │   └── index.ts           # Mount all versions
│   ├── models/
│   │   └── user.model.ts      # ORM models / type definitions
│   ├── schemas/
│   │   └── user.schema.ts     # Zod validation schemas
│   ├── utils/
│   │   ├── AppError.ts        # Custom error class
│   │   ├── catchAsync.ts      # Async wrapper
│   │   └── apiResponse.ts     # Consistent response formatter
│   ├── types/
│   │   └── express.d.ts       # Augmented Express Request types
│   └── app.ts                 # Express app setup (no listen())
├── index.ts                   # Server entry (listen here)
├── .env
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── package.json
```

> [!IMPORTANT]
> This **Controller → Service → Repository** (3-layer) architecture is critical for testability. Controllers handle HTTP concerns only. Services contain all business logic. Repositories handle all database queries. This separation allows unit testing each layer independently.

---

## Building the Express Application

### App Bootstrap (`src/app.ts`)

```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { globalErrorHandler } from './middleware/errorHandler';
import { rateLimiter } from './middleware/rateLimiter';
import { router } from './routes';

const app = express();

// Security headers
app.use(helmet());

// CORS whitelist configuration
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Rate limiter (100 requests per 15 minutes per IP)
app.use('/api/', rateLimiter);

// Body parsers
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// HTTP request logger
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Health check
app.get('/health', (_, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: `Route ${req.originalUrl} not found` });
});

// Global error handler (must be last middleware)
app.use(globalErrorHandler);

export { app };
```

---

## Input Validation with Zod

Input validation is your **first and most critical security layer**. Never trust incoming data from clients.

```typescript
// src/schemas/user.schema.ts
import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name cannot exceed 100 characters')
      .trim(),
    email: z.string()
      .email('Invalid email format')
      .toLowerCase()
      .trim(),
    password: z.string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
        'Password must contain uppercase, lowercase, and a number'),
    role: z.enum(['user', 'admin', 'moderator']).default('user'),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid user ID format'),
  }),
  body: z.object({
    name: z.string().min(2).max(100).trim().optional(),
    email: z.string().email().toLowerCase().trim().optional(),
  }).refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update'
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>['body'];
export type UpdateUserInput = z.infer<typeof updateUserSchema>['body'];
```

```typescript
// src/middleware/validate.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      const errors = result.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      return res.status(422).json({
        status: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    // Attach validated data back to request
    req.body = result.data.body;
    next();
  };
};
```

---

## JWT Authentication

```typescript
// src/services/auth.service.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AppError } from '../utils/AppError';

const SALT_ROUNDS = 12;

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  }

  static async verifyPassword(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }

  static generateAccessToken(payload: { userId: string; role: string }): string {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '15m',       // Short-lived access token
      issuer: 'algorithyum',
      audience: 'api',
    });
  }

  static generateRefreshToken(userId: string): string {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: '7d',        // Long-lived refresh token
    });
  }

  static verifyAccessToken(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET!, {
        issuer: 'algorithyum',
        audience: 'api',
      }) as { userId: string; role: string; iat: number; exp: number };
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        throw new AppError('Access token expired', 401, 'TOKEN_EXPIRED');
      }
      throw new AppError('Invalid access token', 401, 'TOKEN_INVALID');
    }
  }
}
```

```typescript
// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';
import { catchAsync } from '../utils/catchAsync';

export const authenticate = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ status: 'error', message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = AuthService.verifyAccessToken(token);

    // Attach user to request for downstream use
    req.user = { userId: decoded.userId, role: decoded.role };
    next();
  }
);

export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to perform this action'
      });
    }
    next();
  };
};
```

---

## Centralized Error Handling

One of the most overlooked aspects of API design — critical for security and debugging.

```typescript
// src/utils/AppError.ts
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly errorCode: string;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, errorCode: string = 'GENERIC_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;  // Distinguishes from programming errors
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
```

```typescript
// src/utils/catchAsync.ts
import { Request, Response, NextFunction } from 'express';

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const catchAsync = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);  // All unhandled errors forwarded to globalErrorHandler
  };
};
```

```typescript
// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Known operational errors — safe to expose to client
  if (err instanceof AppError && err.isOperational) {
    return res.status(err.statusCode).json({
      status: 'error',
      errorCode: err.errorCode,
      message: err.message,
    });
  }

  // Handle common library errors
  if (err.name === 'ValidationError') {    // Mongoose validation
    return res.status(422).json({ status: 'error', message: err.message });
  }
  if (err.name === 'CastError') {          // Mongoose invalid ID
    return res.status(400).json({ status: 'error', message: 'Invalid ID format' });
  }

  // Unknown programming error — never expose internals
  console.error('UNHANDLED ERROR:', err);
  res.status(500).json({
    status: 'error',
    message: process.env.NODE_ENV === 'production'
      ? 'An unexpected error occurred'
      : err.message,
  });
};
```

---

## Defining Routes and Controllers

```typescript
// src/routes/v1/users.routes.ts
import { Router } from 'express';
import { UserController } from '../../controllers/user.controller';
import { validate } from '../../middleware/validate.middleware';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { createUserSchema, updateUserSchema } from '../../schemas/user.schema';

const router = Router();

router.get('/', authenticate, authorize('admin'), UserController.getAll);
router.get('/:id', authenticate, UserController.getById);
router.post('/', validate(createUserSchema), UserController.create);
router.patch('/:id', authenticate, validate(updateUserSchema), UserController.update);
router.delete('/:id', authenticate, authorize('admin'), UserController.delete);

export { router as usersRouter };
```

```typescript
// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { catchAsync } from '../utils/catchAsync';

export class UserController {
  static getAll = catchAsync(async (req: Request, res: Response) => {
    const { page = '1', limit = '20', search } = req.query;
    const users = await UserService.findAll({
      page: parseInt(page as string),
      limit: Math.min(parseInt(limit as string), 100),
      search: search as string | undefined,
    });
    res.status(200).json({ status: 'success', data: users });
  });

  static getById = catchAsync(async (req: Request, res: Response) => {
    const user = await UserService.findById(req.params.id);
    res.status(200).json({ status: 'success', data: user });
  });

  static create = catchAsync(async (req: Request, res: Response) => {
    const user = await UserService.create(req.body);
    res.status(201).json({ status: 'success', data: user });
  });

  static update = catchAsync(async (req: Request, res: Response) => {
    const user = await UserService.update(req.params.id, req.body);
    res.status(200).json({ status: 'success', data: user });
  });

  static delete = catchAsync(async (req: Request, res: Response) => {
    await UserService.delete(req.params.id);
    res.status(204).send();
  });
}
```

---

## Rate Limiting

```typescript
// src/middleware/rateLimiter.ts
import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // 15 minutes
  max: 100,                     // Max 100 requests per window per IP
  standardHeaders: true,        // Return rate limit info in RateLimit-* headers
  legacyHeaders: false,
  message: {
    status: 'error',
    message: 'Too many requests from this IP. Please try again in 15 minutes.',
  },
  skip: (req) => req.path === '/health',  // Don't rate-limit health checks
});

// Stricter limiter for auth endpoints
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,                      // Max 10 login attempts per 15 minutes
  message: {
    status: 'error',
    message: 'Too many authentication attempts. Account temporarily locked.',
  },
});
```

---

## Docker Deployment

```dockerfile
# Dockerfile — Multi-stage build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage — minimal image
FROM node:22-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json .
EXPOSE 8080
USER node
CMD ["node", "dist/index.js"]
```

```yaml
# docker-compose.yml
version: '3.9'
services:
  api:
    build: .
    ports:
      - "8080:8080"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/mydb
      - JWT_SECRET=${JWT_SECRET}
      - JWT_REFRESH_SECRET=${JWT_REFRESH_SECRET}
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

---

## API Testing Strategy

### Integration Tests with Jest + Supertest

```typescript
// tests/users.test.ts
import request from 'supertest';
import { app } from '../src/app';
import { db } from '../src/config/database';

describe('Users API', () => {
  let authToken: string;

  beforeAll(async () => {
    await db.migrate.latest();
    await db.seed.run();
    // Get auth token for protected routes
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'admin@test.com', password: 'Test@1234' });
    authToken = res.body.data.accessToken;
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  describe('GET /api/v1/users', () => {
    it('should return 401 without authentication', async () => {
      const res = await request(app).get('/api/v1/users');
      expect(res.status).toBe(401);
    });

    it('should return paginated users for admin', async () => {
      const res = await request(app)
        .get('/api/v1/users?page=1&limit=10')
        .set('Authorization', `Bearer ${authToken}`);
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(Array.isArray(res.body.data.users)).toBe(true);
    });
  });

  describe('POST /api/v1/users', () => {
    it('should return 422 for invalid input', async () => {
      const res = await request(app)
        .post('/api/v1/users')
        .send({ email: 'not-an-email', password: '123' });
      expect(res.status).toBe(422);
      expect(res.body.errors).toBeDefined();
    });

    it('should create a user with valid input', async () => {
      const res = await request(app)
        .post('/api/v1/users')
        .send({ name: 'Test User', email: 'test@example.com', password: 'Test@1234' });
      expect(res.status).toBe(201);
      expect(res.body.data.email).toBe('test@example.com');
      expect(res.body.data.password).toBeUndefined(); // Never expose password
    });
  });
});
```

---

## API Documentation with OpenAPI

Always document your API. Use `swagger-jsdoc` + `swagger-ui-express` for auto-generated docs from JSDoc comments, or maintain a standalone `openapi.yaml`.

```typescript
// Auto-generated /api/docs endpoint
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const spec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My REST API',
      version: '1.0.0',
      description: 'Production REST API documentation',
    },
    servers: [{ url: '/api/v1' }],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ['./src/routes/**/*.ts'],
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(spec));
```

---

## Production Checklist

Before going live, verify every item:

- **✅ Environment variables**: All secrets in `.env`, never committed to Git — use AWS Secrets Manager or HashiCorp Vault in production
- **✅ HTTPS only**: Enforce via load balancer; redirect all HTTP → HTTPS
- **✅ Input validation**: Zod schemas on every POST/PUT/PATCH body and URL params
- **✅ SQL/NoSQL injection prevention**: Parameterized queries only — never string concatenation
- **✅ Authentication on all private routes**: JWT middleware applied
- **✅ CORS whitelist**: Explicit origin list, not wildcard (`*`) in production
- **✅ Rate limiting**: Both global and per-endpoint (auth routes stricter)
- **✅ Helmet.js**: Security headers (CSP, HSTS, X-Frame-Options) configured
- **✅ Error handler**: Global handler catches all async errors; no stack traces to clients
- **✅ Health check endpoint**: `/health` returns 200 for load balancer probes
- **✅ Structured logging**: JSON-formatted logs (Pino/Winston) with correlation IDs
- **✅ Docker multi-stage build**: Production image runs as non-root `node` user
- **✅ Database connection pooling**: Configured with sensible min/max pool sizes
- **✅ Integration tests**: Full happy-path and error-case coverage in CI pipeline

---

## What's Next: Scaling Your Node.js API

Once your REST API is production-ready, consider these architectural evolutions:

- **Microservices**: Decompose large APIs into focused services communicating via REST or gRPC
- **Message Queues**: Add RabbitMQ or Apache Kafka for async processing (email, PDF generation, heavy computation)
- **Caching**: Add Redis caching for expensive database queries and session storage
- **GraphQL Gateway**: Add a GraphQL layer above your REST services for flexible frontend queries
- **Observability**: Integrate OpenTelemetry for distributed tracing across services

Need help architecting or building your enterprise Node.js API platform? [Contact Algorithyum's backend engineering team](/contact) for a technical architecture consultation.
