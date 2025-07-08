import { http, HttpResponse } from 'msw';
import type { 
  LoginRequest, 
  DjangoActionRequest, 
  ChatMessageRequest,
  User,
  Product,
  Contact,
  Message
} from './types';

// Mock data for different backend simulations
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
];

const mockProducts = [
  { id: 1, name: 'Product A', price: 29.99, category: 'electronics' },
  { id: 2, name: 'Product B', price: 49.99, category: 'clothing' },
  { id: 3, name: 'Product C', price: 19.99, category: 'books' },
];

const mockContacts = [
  { id: 1, name: 'Alice Brown', email: 'alice@example.com', status: 'active' },
  { id: 2, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'inactive' },
];

const mockMessages = [
  { id: 1, sender: 'user1', message: 'Hello!', timestamp: '2024-01-15T10:00:00Z' },
  { id: 2, sender: 'user2', message: 'Hi there!', timestamp: '2024-01-15T10:01:00Z' },
];

// FastAPI-style handlers (RESTful, token-based auth)
export const fastapiHandlers = [
  // Dashboard data
  http.get('/api/fastapi/dashboard', () => {
    return HttpResponse.json({
      users_count: 150,
      revenue: 25000,
      growth_rate: 12.5,
      recent_activity: [
        { id: 1, action: 'user_login', timestamp: '2024-01-15T10:00:00Z' },
        { id: 2, action: 'payment_received', timestamp: '2024-01-15T09:30:00Z' },
      ]
    });
  }),

  // Users endpoint
  http.get('/api/fastapi/users', () => {
    return HttpResponse.json({
      data: mockUsers,
      total: mockUsers.length,
      page: 1,
      per_page: 10
    });
  }),

  // CRM contacts
  http.get('/api/fastapi/contacts', () => {
    return HttpResponse.json({
      contacts: mockContacts,
      total_count: mockContacts.length,
      filters: {
        status: ['active', 'inactive'],
        category: ['lead', 'customer', 'prospect']
      }
    });
  }),
];

// Django-style handlers (session-based, admin layout)
export const djangoHandlers = [
  // Admin panel data
  http.get('/api/django/admin/users', () => {
    return HttpResponse.json({
      objects: mockUsers,
      meta: {
        total_count: mockUsers.length,
        page: 1,
        per_page: 20,
        filters: {
          is_active: true,
          date_joined: '2024-01-01'
        }
      },
      actions: ['delete_selected', 'make_active', 'make_inactive']
    });
  }),

  // Django admin actions
  http.post('/api/django/admin/users/action', async ({ request }) => {
    const { action, selected_ids } = await request.json() as DjangoActionRequest;
    return HttpResponse.json({
      success: true,
      message: `Successfully ${action} ${selected_ids.length} users`,
      updated_count: selected_ids.length
    });
  }),
];

// Firebase-style handlers (nested data, real-time)
export const firebaseHandlers = [
  // Auth endpoints
  http.post('/api/firebase/auth/signin', async ({ request }) => {
    const { email, password } = await request.json() as LoginRequest;
    return HttpResponse.json({
      user: {
        uid: 'user123',
        email: email,
        displayName: 'John Doe',
        photoURL: null
      },
      token: 'firebase_jwt_token_here',
      expiresIn: 3600
    });
  }),

  // Firestore-style data
  http.get('/api/firebase/firestore/users', () => {
    return HttpResponse.json({
      documents: mockUsers.map(user => ({
        name: `projects/demo/databases/(default)/documents/users/${user.id}`,
        fields: {
          name: { stringValue: user.name },
          email: { stringValue: user.email },
          role: { stringValue: user.role }
        },
        createTime: '2024-01-15T10:00:00Z',
        updateTime: '2024-01-15T10:00:00Z'
      }))
    });
  }),
];

// Node.js/Express-style handlers (REST endpoints)
export const expressHandlers = [
  // Ecommerce products
  http.get('/api/express/products', () => {
    return HttpResponse.json({
      success: true,
      data: mockProducts,
      pagination: {
        page: 1,
        limit: 10,
        total: mockProducts.length,
        pages: 1
      }
    });
  }),

  // Chat messages
  http.get('/api/express/chat/messages', () => {
    return HttpResponse.json({
      success: true,
      messages: mockMessages,
      room: 'general',
      participants: ['user1', 'user2']
    });
  }),

  http.post('/api/express/chat/messages', async ({ request }) => {
    const { message, sender } = await request.json() as ChatMessageRequest;
    return HttpResponse.json({
      success: true,
      message: {
        id: Date.now(),
        sender,
        message,
        timestamp: new Date().toISOString()
      }
    });
  }),
];

// Laravel-style handlers (form validation, controller responses)
export const laravelHandlers = [
  // Form validation
  http.post('/api/laravel/auth/login', async ({ request }) => {
    const { email, password } = await request.json() as LoginRequest;
    
    if (!email || !password) {
      return HttpResponse.json({
        message: 'The given data was invalid.',
        errors: {
          email: email ? [] : ['The email field is required.'],
          password: password ? [] : ['The password field is required.']
        }
      }, { status: 422 });
    }

    return HttpResponse.json({
      user: {
        id: 1,
        name: 'John Doe',
        email: email,
        email_verified_at: '2024-01-15T10:00:00Z'
      },
      token: 'laravel_sanctum_token'
    });
  }),

  // CRUD operations
  http.get('/api/laravel/users', () => {
    return HttpResponse.json({
      data: mockUsers.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z'
      })),
      links: {
        first: '/api/laravel/users?page=1',
        last: '/api/laravel/users?page=1',
        prev: null,
        next: null
      },
      meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        per_page: 15,
        to: mockUsers.length,
        total: mockUsers.length
      }
    });
  }),
];

// Rails-style handlers (embedded responses, CSRF)
export const railsHandlers = [
  // Rails CRUD with embedded data
  http.get('/api/rails/contacts', () => {
    return HttpResponse.json({
      contacts: mockContacts.map(contact => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        status: contact.status,
        notes: [
          { id: 1, content: 'Initial contact made', created_at: '2024-01-15T10:00:00Z' },
          { id: 2, content: 'Follow up scheduled', created_at: '2024-01-15T11:00:00Z' }
        ],
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z'
      }))
    });
  }),

  // Rails form with CSRF
  http.get('/api/rails/csrf-token', () => {
    return HttpResponse.json({
      authenticity_token: 'rails_csrf_token_here'
    });
  }),
];

// Go-style handlers (minimalistic, flat JSON)
export const goHandlers = [
  http.get('/api/go/users', () => {
    return HttpResponse.json({
      users: mockUsers,
      count: mockUsers.length,
      timestamp: new Date().toISOString()
    });
  }),

  http.get('/api/go/health', () => {
    return HttpResponse.json({
      status: 'ok',
      uptime: 1234567,
      version: '1.0.0'
    });
  }),
];

// Supabase-style handlers (PostgreSQL JSON, RBAC)
export const supabaseHandlers = [
  http.get('/api/supabase/users', () => {
    return HttpResponse.json({
      data: mockUsers,
      count: mockUsers.length,
      error: null
    });
  }),

  http.post('/api/supabase/auth/signin', async ({ request }) => {
    const { email, password } = await request.json() as LoginRequest;
    return HttpResponse.json({
      access_token: 'supabase_jwt_token',
      refresh_token: 'supabase_refresh_token',
      user: {
        id: 'user-uuid',
        email: email,
        role: 'authenticated'
      }
    });
  }),
];

// Combine all handlers
export const handlers = [
  ...fastapiHandlers,
  ...djangoHandlers,
  ...firebaseHandlers,
  ...expressHandlers,
  ...laravelHandlers,
  ...railsHandlers,
  ...goHandlers,
  ...supabaseHandlers,
]; 