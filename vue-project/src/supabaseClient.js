import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://pkpclnzuyuvnhsyrdyxa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrcGNsbnp1eXV2bmhzeXJkeXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNzY3MDQsImV4cCI6MjA1Njc1MjcwNH0.Cml9ufa3oGp-k4TgTsHeHFU8CfwA-12Yd_zspp7xI7Y"
);

export default supabase;