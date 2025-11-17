import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	'levoit-core-300',
	'coway-airmega-200m',
	'blueair-blue-pure-211',
	'winix-5500-2',
	'honeywell-hpa300',
	'dyson-pure-cool',
	'jackery-explorer-1000',
	'ecoflow-delta-2'
]

export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://ampvoyage.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/product/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('voyage', 'true', { path: '/', maxAge: 60 })

		return res
	}

}

export const config = {
	matcher: ['/wair'],
}