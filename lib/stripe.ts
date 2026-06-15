/**
 * Integración de pagos con Stripe (suscripciones).
 *
 * El cliente solo se inicializa si `STRIPE_SECRET_KEY` está definido. La demo
 * incluye los planes y precios en `lib/demo-data.ts`; la creación real de
 * sesiones de checkout se conecta aquí cuando configures Stripe en producción.
 */

import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = secretKey ? new Stripe(secretKey) : null;

export const stripeHabilitado = Boolean(secretKey);
