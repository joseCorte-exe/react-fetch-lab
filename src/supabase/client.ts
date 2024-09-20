import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://tmmsrvuquuqlppmdjixi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbXNydnVxdXVxbHBwbWRqaXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NTUzNjYsImV4cCI6MjA0MjQzMTM2Nn0.wbapSjxcwpiIhKClvgz0M2lJybaKgHAviScgruKghdc'
)