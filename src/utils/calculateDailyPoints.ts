/**
 * Calculate daily points based on the current day of the season
 * 
 * Rules:
 * - Day 1 of season: 2 points
 * - Day 2 of season: 3 points
 * - Day 3+: 100% of (day - 2) points + 60% of (day - 1) points
 */

export const calculateDailyPoints = (date: Date = new Date()): number => {
  const dayOfSeason = getDayOfSeason(date);
  
  if (dayOfSeason === 1) return 2;
  if (dayOfSeason === 2) return 3;
  
  // Calculate points for day 3 onwards
  const points: number[] = [2, 3]; // Day 1 and Day 2
  
  for (let day = 3; day <= dayOfSeason; day++) {
    const prevDayPoints = points[day - 2]; // day - 1 (0-indexed)
    const twoDaysAgoPoints = points[day - 3]; // day - 2 (0-indexed)
    const newPoints = twoDaysAgoPoints * 1.0 + prevDayPoints * 0.6;
    points.push(newPoints);
  }
  
  return Math.round(points[dayOfSeason - 1]);
};

/**
 * Get the day number within the current season (1-indexed)
 * Seasons:
 * - Spring: March 1 - May 31
 * - Summer: June 1 - August 31
 * - Autumn: September 1 - November 30
 * - Winter: December 1 - February 28/29
 */
export const getDayOfSeason = (date: Date): number => {
  const month = date.getMonth(); // 0-11
  const year = date.getFullYear();
  
  let seasonStart: Date;
  
  // Determine season start date
  if (month >= 2 && month <= 4) {
    // Spring: March 1
    seasonStart = new Date(year, 2, 1);
  } else if (month >= 5 && month <= 7) {
    // Summer: June 1
    seasonStart = new Date(year, 5, 1);
  } else if (month >= 8 && month <= 10) {
    // Autumn: September 1
    seasonStart = new Date(year, 8, 1);
  } else {
    // Winter: December 1 (previous year if Jan/Feb)
    const winterYear = month >= 11 ? year : year - 1;
    seasonStart = new Date(winterYear, 11, 1);
  }
  
  // Calculate days since season start
  const diffTime = date.getTime() - seasonStart.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays + 1; // 1-indexed
};

/**
 * Format points for display (e.g., 28745 -> "29K")
 */
export const formatPoints = (points: number): string => {
  if (points >= 1000) {
    return `${Math.round(points / 1000)}K`;
  }
  return points.toString();
};
