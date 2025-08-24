// This project no longer uses Supabase.
// Placeholder export to satisfy any stale imports during builds.

export type Database = Record<string, never>;

// A no-op placeholder. Nothing in the app should use this.
export const supabase = {} as unknown as {
  // Intentionally empty
};
