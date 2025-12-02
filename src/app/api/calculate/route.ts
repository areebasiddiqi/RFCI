import { NextRequest, NextResponse } from 'next/server';
import { estimateRFCI } from '@/lib/openai';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
    try {
        // IP detection (simplified for example, might need x-forwarded-for in prod)
        const ip = req.headers.get('x-forwarded-for') || 'unknown';

        const { allowed, remaining } = checkRateLimit(ip);

        if (!allowed) {
            return NextResponse.json(
                { error: 'Daily limit reached. Please upgrade for unlimited checks.' },
                { status: 429 }
            );
        }

        const { topic } = await req.json();

        if (!topic) {
            return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
        }

        const result = await estimateRFCI(topic);

        return NextResponse.json({ ...result, remainingChecks: remaining });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
