export const DONATION_IN_CENTS = parseInt(
	process.env.NEXT_PUBLIC_DONATION_IN_CENTS || "500",
	10
)

export const MAX_DONATION = parseInt(
	process.env.NEXT_PUBLIC_MAX_DONATION || "10000",
	10
)

export const STRIPE_API_KEY = process.env.STRIPE_API_KEY as string

export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET as string

export const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID
export const SALT_KEY = process.env.PHONEPE_SALT_KEY
export const SALT_INDEX = process.env.PHONEPE_SALT_INDEX
