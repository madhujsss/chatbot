import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_KEY
);

// Replace with your Supabase project details
// Obtain these values from your Supabase project settings
process.env.VITE_SUPABASE_URL = "https://vcbpgfjismmcajkxwbgb.supabase.co";
process.env.VITE_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjYnBnZmppc21tY2Fqa3h3YmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTA0NTMsImV4cCI6MjAyNDM4NjQ1M30.gQozhCIQ7IQOTPyrh4urXK0tT3AXuXpyXxfYWkirxKA";
