import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ubhglnwmggcirwwbcwap.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViaGdsbndtZ2djaXJ3d2Jjd2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0ODE0OTksImV4cCI6MTk4NzA1NzQ5OX0.S1wCBnCFywT2J19Jp62dYpyLbc6YEU1G_4ioQlHnVeQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
