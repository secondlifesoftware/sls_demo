// TypeScript interfaces for MSW handlers

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  status: string;
}

export interface Message {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
}

export interface DjangoActionRequest {
  action: string;
  selected_ids: number[];
}

export interface ChatMessageRequest {
  message: string;
  sender: string;
}

// FastAPI Response Types
export interface FastAPIDashboardResponse {
  users_count: number;
  revenue: number;
  growth_rate: number;
  recent_activity: Array<{
    id: number;
    action: string;
    timestamp: string;
  }>;
}

export interface FastAPIUsersResponse {
  data: User[];
  total: number;
  page: number;
  per_page: number;
}

// Django Response Types
export interface DjangoAdminResponse {
  objects: User[];
  meta: {
    total_count: number;
    page: number;
    per_page: number;
    filters: Record<string, any>;
  };
  actions: string[];
}

// Firebase Response Types
export interface FirebaseAuthResponse {
  user: {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string | null;
  };
  token: string;
  expiresIn: number;
}

// Express Response Types
export interface ExpressProductsResponse {
  success: boolean;
  data: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface ExpressChatResponse {
  success: boolean;
  messages: Message[];
  room: string;
  participants: string[];
}

// Laravel Response Types
export interface LaravelValidationError {
  message: string;
  errors: Record<string, string[]>;
}

export interface LaravelUserResponse {
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
  };
  token: string;
}

// Rails Response Types
export interface RailsContact {
  id: number;
  name: string;
  email: string;
  status: string;
  notes: Array<{
    id: number;
    content: string;
    created_at: string;
  }>;
  created_at: string;
  updated_at: string;
}

// Go Response Types
export interface GoUsersResponse {
  users: User[];
  count: number;
  timestamp: string;
}

export interface GoHealthResponse {
  status: string;
  uptime: number;
  version: string;
}

// Supabase Response Types
export interface SupabaseAuthResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
} 