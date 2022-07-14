import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'login', name: 'login',component: () => import('pages/Auth.vue') },
      { path: 'about', name: 'about',component: () => import('pages/About.vue') },
      { path: 'faq', name: 'faq',component: () => import('pages/FAQ.vue') },
      { path: 'escrow-help', name: 'escrow-help',component: () => import('pages/EscrowHelp.vue') },
      { path: 'register', name: 'register',component: () => import('pages/Auth.vue')},
      { path: 'forgot', name: 'forgot',component: () => import('pages/Auth.vue') },
      { path: 'reset-password/:token', name: 'reset-password', component: () => import('pages/Auth.vue') },
      { path: 'withdrawal-requests', name: 'withdrawal_requests', component: () => import('pages/Dashboard.vue'), meta: { requiresAuth: true } },
      { path: 'account', name: 'account',component: () => import('pages/Auth.vue'), meta: { requiresAuth: true } },
      { path: 'products', name: 'products', component: () => import('pages/Escrow.vue'), meta: { requiresAuth: true } },
      { path: 'transaction-disputes/:transaction_id', name: 'disputes', component: () => import('pages/Escrow.vue'), meta: { requiresAuth: true } },
      { path: 'escrow-transactions', name: 'transactions', component: () => import('pages/Escrow.vue'), meta: { requiresAuth: true } },
      { path: 'Referral', name: 'referral', component: () => import('pages/Escrow.vue'), meta: { requiresAuth: true } },
      { path: 'escrow-transaction/:T_ref', name: 'transaction', component: () => import('pages/Escrow.vue')},
      { path: 'product/:slug', name: 'product', component: () => import('pages/Escrow.vue')},
      { path: 'product/:slug/:referral_token', name: 'refer_product', component: () => import('pages/Escrow.vue')},
      { path: 'escrow/dispute/:id', name: 'dispute', component: () => import('pages/Escrow.vue')},
      { path: 'escrow/product/:slug/payment', name: 'payment', component: () => import('pages/Escrow.vue')},
      { path: 'payment', name: 'payment', component: () => import('pages/Payment.vue'), props: true },
      { path: ':link/fund', name: 'fund', component: () => import('pages/Payment.vue'), props: true },

      { path: 'transaction', name: 'transaction', component: () => import('pages/Transaction.vue'), meta: { requiresAuth: true } },
      { path: 'wallet', name: 'wallet', component: () => import('pages/Card.vue'), meta: { requiresAuth: true } },
      { path: 'virtual-card/payment', name: 'virtual-card-payment', component: () => import('pages/Card.vue'), meta: { requiresAuth: true } },
      { path: 'virtual-card/create', name: 'create-card', component: () => import('pages/Card.vue'), meta: { requiresAuth: true } },
      { path: 'virtual-card/fund-card/:card_id', name: 'fund-card', component: () => import('pages/Card.vue'), props: true, meta: { requiresAuth: true } },
      { path: 'virtual-card/fund-card-status', name: 'fund-card-status', component: () => import('pages/Card.vue'), props: true, meta: { requiresAuth: true }},
      { path: 'activate-card', name: 'activate-card', component: () => import('pages/Card.vue'), props: true, meta: { requiresAuth: true } },
      { path: 'settings', name: 'settings', component: () => import('pages/Settings.vue'), meta: { requiresAuth: true } },
      { path: '/product-payment', name: 'product-status', component: () => import('pages/product_status.vue'), meta: { requiresAuth: true } },
      { path: '/escrow-transaction/:t_ref/:t_id/payment', name: 'pay-product', component: () => import('pages/product_payment.vue'), meta: { requiresAuth: true } },
      

        // { path: 'security', name: 'security', component: () => import('pages/Index.vue') },
        // { path: 'initAccount', name: 'initAccount',component: () => import('pages/Auth.vue') },
        // { path: 'crypto', name: 'crypto', component: () => import('pages/Crypto.vue'), meta: { requiresAuth: true } },
        // { path: 'gift-card', name: 'gift-card', component: () => import('pages/GiftCard.vue'), meta: { requiresAuth: true } },
        // { path: 'products', name: 'products', component: () => import('pages/Product.vue'), meta: { requiresAuth: true } },
        // { path: 'remittance', name: 'remittance', component: () => import('pages/Remittance.vue'), meta: { requiresAuth: true } },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
