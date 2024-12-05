import { createClient } from '@supabase/supabase-js'

// Obtén las variables de entorno
const supabaseUrl = process.env.sqymxkuvortxtcvbzlqe.supabase.co
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxeW14a3V2b3J0eHRjdmJ6bHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MDcwNzcsImV4cCI6MjA0ODk4MzA3N30.mymrqbxjBcl1WJJRGiLVLMy7MVgJCHo-FZ6vJDYDJq4

// Crea el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
