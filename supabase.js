import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://vcbpgfjismmcajkxwbgb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjYnBnZmppc21tY2Fqa3h3YmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTA0NTMsImV4cCI6MjAyNDM4NjQ1M30.gQozhCIQ7IQOTPyrh4urXK0tT3AXuXpyXxfYWkirxKA';


export const supabase = createClient(supabaseUrl, supabaseKey);




