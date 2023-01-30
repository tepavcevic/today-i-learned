import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kcczcpcgqkezmuvmlsna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjY3pjcGNncWtlem11dm1sc25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MjcwNTksImV4cCI6MTk5MDUwMzA1OX0.03H8dPgY5c4L9rL6jCzpQ6KABG4HMGuaF0eeJOHc06E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
