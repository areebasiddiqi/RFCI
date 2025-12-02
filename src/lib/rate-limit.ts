const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const LIMIT = 5;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return { allowed: true, remaining: LIMIT - 1 };
    }

    if (now - record.lastReset > WINDOW_MS) {
        // Reset window
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return { allowed: true, remaining: LIMIT - 1 };
    }

    if (record.count >= LIMIT) {
        return { allowed: false, remaining: 0 };
    }

    record.count += 1;
    return { allowed: true, remaining: LIMIT - record.count };
}
