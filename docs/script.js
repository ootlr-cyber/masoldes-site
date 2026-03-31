/* ==========================================================================
   DESTOCKAGE PREMIUM — Main JavaScript
   Production-quality vanilla JS — Complete e-commerce features
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   0. PRODUCT DATA — used by cart, search, and product displays
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  // Cuisines OSKAB
  { id: 'cui-001', name: 'HELIA Noir Mat', brand: 'OSKAB', category: 'cuisine', price: 1350, originalPrice: 4500, image: 'images/cuisines/slider-4.jpg', desc: 'Cuisine moderne, facades noires mates sans poignee' },
  { id: 'cui-002', name: 'IPOMA Blanc Brillant', brand: 'OSKAB', category: 'cuisine', price: 1140, originalPrice: 3800, image: 'images/cuisines/acc-realisations.jpg', desc: 'Cuisine contemporaine, finition laquee haute brillance' },
  { id: 'cui-003', name: 'GINKO Bois Naturel', brand: 'OSKAB', category: 'cuisine', price: 1560, originalPrice: 5200, image: 'images/cuisines/project-cuisine.jpeg', desc: 'Esprit scandinave, chene naturel' },
  { id: 'cui-004', name: 'BORA Bleu Nuit', brand: 'OSKAB', category: 'cuisine', price: 1470, originalPrice: 4900, image: 'images/cuisines/project-relooking.jpeg', desc: 'Cuisine design, couleur tendance' },
  { id: 'cui-005', name: 'HELIA Gris Clair', brand: 'OSKAB', category: 'cuisine', price: 1260, originalPrice: 4200, image: 'images/cuisines/slider-2.jpg', desc: 'Finition grise satinee, design contemporain' },
  { id: 'cui-006', name: 'HELIA Chene Naturel', brand: 'OSKAB', category: 'cuisine', price: 1440, originalPrice: 4800, image: 'images/cuisines/slider-3.jpg', desc: 'Facades effet bois chene' },
  { id: 'cui-007', name: 'IPOMA Chene Blond', brand: 'OSKAB', category: 'cuisine', price: 1230, originalPrice: 4100, image: 'images/cuisines/acc-devis.jpeg', desc: 'Facades chene blond, finition brillante' },
  { id: 'cui-008', name: 'BORA Vert Sauge', brand: 'OSKAB', category: 'cuisine', price: 1410, originalPrice: 4700, image: 'images/cuisines/acc-logiciel.jpeg', desc: 'Vert doux et naturel, finition mate' },
  { id: 'cui-009', name: 'PIMA Blanc Mat', brand: 'OSKAB', category: 'cuisine', price: 750, originalPrice: 2500, image: 'images/cuisines/acc-psm.jpeg', desc: 'Entree de gamme, rapport qualite/prix optimal' },
  { id: 'cui-010', name: 'STATIC Ivoire', brand: 'OSKAB', category: 'cuisine', price: 960, originalPrice: 3200, image: 'images/cuisines/project-sdb.jpeg', desc: 'Blanc casse classique, moulures discretes' },
  { id: 'cui-011', name: 'STECIA Blanc Brillant', brand: 'OSKAB', category: 'cuisine', price: 1650, originalPrice: 5500, image: 'images/cuisines/slider-2.jpg', desc: 'Haut de gamme, finition laquee premium' },
  { id: 'cui-012', name: 'GINKO Noyer', brand: 'OSKAB', category: 'cuisine', price: 1380, originalPrice: 4600, image: 'images/cuisines/slider-3.jpg', desc: 'Finition noyer fonce, chaleureux' },
  // Salles de bain OSKAB
  {id:'sdb-001', name:'HELIA Noir Mat SDB', brand:'OSKAB', category:'sdb', price:890, originalPrice:2970, image:'images/sdb/sdb-1.jpeg', desc:'Meuble vasque 80cm + colonne, finition noire mate'},
  {id:'sdb-002', name:'IPOMA Blanc SDB', brand:'OSKAB', category:'sdb', price:750, originalPrice:2500, image:'images/sdb/sdb-blanche.jpg', desc:'Meuble vasque 100cm, blanc brillant'},
  {id:'sdb-003', name:'GINKO Bois SDB', brand:'OSKAB', category:'sdb', price:960, originalPrice:3200, image:'images/sdb/sdb-bois.jpg', desc:'Meuble vasque chene + miroir, esprit nature'},
  {id:'sdb-004', name:'BORA Gris SDB', brand:'OSKAB', category:'sdb', price:850, originalPrice:2830, image:'images/sdb/sdb-grise.jpg', desc:'Ensemble complet gris anthracite'},
  {id:'sdb-005', name:'HELIA Design SDB', brand:'OSKAB', category:'sdb', price:1100, originalPrice:3670, image:'images/sdb/sdb-design.jpg', desc:'Double vasque 120cm, design contemporain'},
  {id:'sdb-006', name:'STATIC Ivoire SDB', brand:'OSKAB', category:'sdb', price:690, originalPrice:2300, image:'images/sdb/sdb-vasque.jpg', desc:'Meuble vasque classique, moulures discretes'},
  {id:'sdb-007', name:'STECIA Premium SDB', brand:'OSKAB', category:'sdb', price:1350, originalPrice:4500, image:'images/sdb/sdb-luxe.jpg', desc:'Ensemble premium, finition laquee'},
  {id:'sdb-008', name:'BORA Noir SDB', brand:'OSKAB', category:'sdb', price:920, originalPrice:3070, image:'images/sdb/sdb-noire.jpg', desc:'Meuble vasque noir mat + colonne'},
  // Vetements
  { id: 'vet-001', name: 'Lot 50kg Vetements Femme', brand: 'Lot Femme', category: 'vetement', price: 100, originalPrice: null, image: 'images/vetements/lot-femme.jpg', desc: 'Robes, tops, pantalons, jupes. ~200 pieces' },
  { id: 'vet-002', name: 'Lot 50kg Vetements Homme', brand: 'Lot Homme', category: 'vetement', price: 100, originalPrice: null, image: 'images/vetements/lot-homme.jpg', desc: 'Chemises, polos, jeans. ~180 pieces' },
  { id: 'vet-003', name: 'Lot 30kg Vetements Enfant', brand: 'Lot Enfant', category: 'vetement', price: 90, originalPrice: null, image: 'images/vetements/lot-enfant.jpg', desc: 'Bodies, t-shirts, pantalons. ~250 pieces' },
  { id: 'vet-004', name: 'Lot 40kg Manteaux Vestes', brand: 'Lot Manteaux', category: 'vetement', price: 200, originalPrice: null, image: 'images/vetements/lot-manteaux.jpg', desc: 'Doudounes, parkas, trenchs. ~60 pieces' },
  { id: 'vet-005', name: 'Lot 20kg Accessoires', brand: 'Lot Accessoires', category: 'vetement', price: 80, originalPrice: null, image: 'images/vetements/lot-accessoires.jpg', desc: 'Sacs, echarpes, ceintures. ~150 pieces' },
  { id: 'vet-006', name: 'Lot 40kg Sportswear', brand: 'Lot Sportswear', category: 'vetement', price: 120, originalPrice: null, image: 'images/vetements/lot-sportswear.jpg', desc: 'Leggings, sweats, joggings. ~160 pieces' },
];

/* --------------------------------------------------------------------------
   1. TOAST NOTIFICATION SYSTEM
   -------------------------------------------------------------------------- */
const Toast = (() => {
  let container = null;

  const getContainer = () => {
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      Object.assign(container.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '10000',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        pointerEvents: 'none',
      });
      document.body.appendChild(container);
    }
    return container;
  };

  const show = (message, type = 'info', duration = 3000) => {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#1e293b' };
    Object.assign(toast.style, {
      background: colors[type] || colors.info,
      color: '#fff',
      padding: '14px 24px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 8px 30px rgba(0,0,0,.15)',
      transform: 'translateX(120%)',
      transition: 'transform .35s cubic-bezier(.22,1,.36,1), opacity .35s ease',
      pointerEvents: 'auto',
      maxWidth: '360px',
      lineHeight: '1.4',
    });
    toast.textContent = message;

    getContainer().appendChild(toast);
    requestAnimationFrame(() => { toast.style.transform = 'translateX(0)'; });

    setTimeout(() => {
      toast.style.transform = 'translateX(120%)';
      toast.style.opacity = '0';
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, duration);
  };

  return { show };
})();

/* --------------------------------------------------------------------------
   2. CART SYSTEM — full shopping cart with localStorage persistence
   -------------------------------------------------------------------------- */
const Cart = (() => {
  const STORAGE_KEY = 'destockage_cart';
  let items = [];

  const init = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      items = saved ? JSON.parse(saved) : [];
    } catch {
      items = [];
    }
    updateBadge();
    renderDrawer();
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateBadge();
    renderDrawer();
  };

  const add = (product) => {
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        quantity: 1,
        category: product.category,
      });
    }
    save();
    Toast.show(`${product.name} ajouté au panier`, 'success');
    openDrawer();
    // Auto-close drawer after 2s
    setTimeout(() => {
      const drawer = document.querySelector('.cart-drawer');
      if (drawer && drawer.classList.contains('open')) closeDrawer();
    }, 2000);
  };

  const remove = (id) => {
    items = items.filter(i => i.id !== id);
    save();
  };

  const updateQty = (id, qty) => {
    const item = items.find(i => i.id === id);
    if (item) {
      item.quantity = Math.max(1, qty);
      save();
    }
  };

  const getTotal = () => items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const getSavings = () => items.reduce((sum, i) => {
    if (i.originalPrice && i.originalPrice > i.price) {
      return sum + (i.originalPrice - i.price) * i.quantity;
    }
    return sum;
  }, 0);

  const getCount = () => items.reduce((sum, i) => sum + i.quantity, 0);

  const getItems = () => [...items];

  const clear = () => {
    items = [];
    save();
  };

  const updateBadge = () => {
    const count = getCount();
    document.querySelectorAll('.cart-count').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? '' : 'none';
    });
  };

  /* --- Cart Drawer Rendering --- */
  const renderDrawer = () => {
    const body = document.querySelector('.cart-drawer-body');
    const footer = document.querySelector('.cart-drawer-footer');
    if (!body) return;

    if (items.length === 0) {
      body.innerHTML = `
        <div style="text-align:center;padding:60px 20px;color:#94a3b8;">
          <i class="fas fa-shopping-cart" style="font-size:48px;margin-bottom:16px;display:block;opacity:.4;"></i>
          <p style="font-size:16px;font-weight:600;color:#64748b;margin-bottom:8px;">Votre panier est vide</p>
          <p style="font-size:13px;">Découvrez nos offres exceptionnelles !</p>
        </div>`;
      if (footer) footer.style.display = 'none';
      return;
    }

    body.innerHTML = items.map(item => `
      <div class="cart-drawer-item" data-cart-id="${item.id}" style="
        display:flex;gap:12px;padding:16px;border-bottom:1px solid #f1f5f9;align-items:center;">
        ${item.image
          ? `<img src="${item.image}" alt="${item.name}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;flex-shrink:0;">`
          : `<div style="width:64px;height:64px;background:#f1f5f9;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><i class="fas fa-image" style="color:#cbd5e1;font-size:20px;"></i></div>`
        }
        <div style="flex:1;min-width:0;">
          <p style="font-size:13px;font-weight:600;color:#1e293b;margin:0 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.name}</p>
          <p style="font-size:11px;color:#94a3b8;margin:0 0 8px;">${item.brand}</p>
          <div style="display:flex;align-items:center;gap:8px;">
            <button class="cart-qty-btn" data-action="decrease" data-id="${item.id}" style="
              width:28px;height:28px;border:1px solid #e2e8f0;border-radius:6px;background:#fff;
              cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;color:#64748b;">−</button>
            <span style="font-size:14px;font-weight:600;min-width:20px;text-align:center;">${item.quantity}</span>
            <button class="cart-qty-btn" data-action="increase" data-id="${item.id}" style="
              width:28px;height:28px;border:1px solid #e2e8f0;border-radius:6px;background:#fff;
              cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;color:#64748b;">+</button>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <p style="font-size:15px;font-weight:700;color:#e02020;margin:0 0 4px;">${formatPrice(item.price * item.quantity)}</p>
          ${item.originalPrice ? `<p style="font-size:11px;color:#94a3b8;text-decoration:line-through;margin:0;">${formatPrice(item.originalPrice * item.quantity)}</p>` : ''}
          <button class="cart-remove-btn" data-id="${item.id}" style="
            background:none;border:none;color:#ef4444;font-size:12px;cursor:pointer;
            margin-top:4px;padding:2px 0;opacity:.7;transition:opacity .2s;" title="Supprimer">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Bind drawer item events
    body.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const item = items.find(i => i.id === id);
        if (!item) return;
        if (btn.dataset.action === 'increase') {
          updateQty(id, item.quantity + 1);
        } else {
          if (item.quantity <= 1) {
            remove(id);
          } else {
            updateQty(id, item.quantity - 1);
          }
        }
      });
    });

    body.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => remove(btn.dataset.id));
    });

    // Footer totals
    if (footer) {
      footer.style.display = '';
      const savings = getSavings();
      footer.innerHTML = `
        ${savings > 0 ? `<div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px;">
          <span style="color:#10b981;font-weight:500;">Économies</span>
          <span style="color:#10b981;font-weight:700;">-${formatPrice(savings)}</span>
        </div>` : ''}
        <div style="display:flex;justify-content:space-between;margin-bottom:16px;font-size:16px;">
          <span style="font-weight:600;color:#1e293b;">Total</span>
          <span style="font-weight:800;color:#e02020;">${formatPrice(getTotal())}</span>
        </div>
        <a href="panier.html" class="btn-drawer-view" style="
          display:block;text-align:center;padding:12px;background:#f1f5f9;color:#1e293b;
          border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;
          margin-bottom:8px;transition:background .2s;">Voir le panier</a>
        <a href="panier.html#checkout" class="btn-drawer-order" style="
          display:block;text-align:center;padding:12px;
          background:#e02020;color:#fff;
          border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;
          transition:opacity .2s;">Commander</a>
      `;
    }
  };

  /* --- Drawer Open/Close --- */
  const openDrawer = () => {
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    if (!overlay || !drawer) return;
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    if (!overlay || !drawer) return;
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  return { init, add, remove, updateQty, getTotal, getSavings, getCount, getItems, save, clear, openDrawer, closeDrawer, renderDrawer, updateBadge };
})();

/* --------------------------------------------------------------------------
   3. CART DRAWER INITIALIZATION — bind open/close events
   -------------------------------------------------------------------------- */
const initCartDrawer = () => {
  // Close drawer on overlay click
  const overlay = document.querySelector('.cart-overlay');
  overlay?.addEventListener('click', Cart.closeDrawer);

  // Close drawer on close button
  document.querySelectorAll('.cart-drawer-close, [data-close-cart]').forEach(btn => {
    btn.addEventListener('click', Cart.closeDrawer);
  });

  // Open drawer on cart icon click
  document.querySelectorAll('.cart-icon, [data-open-cart], .nav-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      Cart.openDrawer();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') Cart.closeDrawer();
  });
};

/* --------------------------------------------------------------------------
   4. ADD TO CART BUTTONS — [data-add-cart] attribute binding
   -------------------------------------------------------------------------- */
const initAddToCartButtons = () => {
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const productId = btn.dataset.addCart;
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) {
        Toast.show('Produit introuvable', 'error');
        return;
      }

      Cart.add(product);

      // Button feedback
      const originalText = btn.innerHTML;
      const originalBg = btn.style.background;
      btn.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
      btn.style.background = '#10b981';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = originalBg;
        btn.disabled = false;
      }, 1500);
    });
  });
};

/* --------------------------------------------------------------------------
   5. CART PAGE — full cart rendering for panier.html
   -------------------------------------------------------------------------- */
const initCartPage = () => {
  const cartPageBody = document.querySelector('.cart-page-body');
  if (!cartPageBody) return;

  const renderCartPage = () => {
    const items = Cart.getItems();
    const cartSummary = document.querySelector('.cart-summary');

    if (items.length === 0) {
      cartPageBody.innerHTML = `
        <div style="text-align:center;padding:80px 20px;">
          <i class="fas fa-shopping-cart" style="font-size:64px;color:#cbd5e1;margin-bottom:20px;display:block;"></i>
          <h2 style="font-size:22px;font-weight:700;color:#1e293b;margin-bottom:8px;">Votre panier est vide</h2>
          <p style="color:#64748b;margin-bottom:24px;">Parcourez nos offres pour trouver des produits à prix cassés !</p>
          <a href="index.html" style="
            display:inline-block;padding:14px 32px;background:#e02020;
            color:#fff;border-radius:10px;font-weight:600;text-decoration:none;font-size:15px;
            transition:opacity .2s;">Voir les offres</a>
        </div>`;
      if (cartSummary) cartSummary.style.display = 'none';
      return;
    }

    if (cartSummary) cartSummary.style.display = '';

    cartPageBody.innerHTML = `
      <div class="cart-items-list">
        ${items.map(item => `
          <div class="cart-page-item" data-cart-id="${item.id}" style="
            display:flex;gap:16px;padding:20px;background:#fff;border-radius:12px;
            margin-bottom:12px;box-shadow:0 1px 3px rgba(0,0,0,.06);align-items:center;">
            ${item.image
              ? `<img src="${item.image}" alt="${item.name}" style="width:80px;height:80px;object-fit:cover;border-radius:10px;flex-shrink:0;">`
              : `<div style="width:80px;height:80px;background:#f1f5f9;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><i class="fas fa-image" style="color:#cbd5e1;font-size:24px;"></i></div>`
            }
            <div style="flex:1;min-width:0;">
              <h4 style="font-size:15px;font-weight:600;color:#1e293b;margin:0 0 2px;">${item.name}</h4>
              <p style="font-size:12px;color:#94a3b8;margin:0 0 10px;">${item.brand} — ${item.category === 'cuisine' ? 'Cuisine' : item.category === 'sdb' ? 'Salle de bain' : 'Vetement'}</p>
              <div style="display:flex;align-items:center;gap:10px;">
                <button class="cart-page-qty" data-action="decrease" data-id="${item.id}" style="
                  width:32px;height:32px;border:1px solid #e2e8f0;border-radius:8px;background:#fff;
                  cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;color:#64748b;">−</button>
                <span style="font-size:15px;font-weight:600;min-width:24px;text-align:center;">${item.quantity}</span>
                <button class="cart-page-qty" data-action="increase" data-id="${item.id}" style="
                  width:32px;height:32px;border:1px solid #e2e8f0;border-radius:8px;background:#fff;
                  cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;color:#64748b;">+</button>
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
              <p style="font-size:18px;font-weight:700;color:#e02020;margin:0 0 4px;">${formatPrice(item.price * item.quantity)}</p>
              ${item.originalPrice ? `<p style="font-size:12px;color:#94a3b8;text-decoration:line-through;margin:0 0 8px;">${formatPrice(item.originalPrice * item.quantity)}</p>` : ''}
              <button class="cart-page-remove" data-id="${item.id}" style="
                background:none;border:1px solid #fecaca;color:#ef4444;font-size:12px;
                cursor:pointer;padding:6px 12px;border-radius:6px;transition:background .2s;">
                <i class="fas fa-trash-alt"></i> Supprimer
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Bind events
    cartPageBody.querySelectorAll('.cart-page-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const item = items.find(i => i.id === id);
        if (!item) return;
        if (btn.dataset.action === 'increase') {
          Cart.updateQty(id, item.quantity + 1);
        } else {
          if (item.quantity <= 1) {
            Cart.remove(id);
          } else {
            Cart.updateQty(id, item.quantity - 1);
          }
        }
        renderCartPage();
      });
    });

    cartPageBody.querySelectorAll('.cart-page-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        Cart.remove(btn.dataset.id);
        renderCartPage();
      });
    });

    // Update subtitle
    const subtitle = document.getElementById('cartPageSubtitle');
    if (subtitle) {
      const count = Cart.getCount();
      subtitle.textContent = `${count} article${count > 1 ? 's' : ''} dans votre panier`;
    }

    // Update summary
    renderCartSummary();
  };

  const renderCartSummary = () => {
    const summary = document.querySelector('.cart-summary');
    if (!summary) return;

    const subtotal = Cart.getTotal();
    const savings = Cart.getSavings();
    const shipping = subtotal >= 500 ? 0 : 49;
    const total = subtotal + shipping;

    summary.innerHTML = `
      <h3 style="font-size:18px;font-weight:700;color:#1e293b;margin:0 0 20px;">Récapitulatif</h3>

      <!-- Promo code -->
      <div class="promo-section" style="margin-bottom:20px;">
        <form class="promo-form" style="display:flex;gap:8px;">
          <input type="text" class="promo-input" placeholder="Code promo" style="
            flex:1;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;
            font-size:13px;outline:none;transition:border-color .2s;">
          <button type="submit" style="
            padding:10px 16px;background:#1e293b;color:#fff;border:none;border-radius:8px;
            font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;">Appliquer</button>
        </form>
        <p class="promo-message" style="font-size:12px;margin:6px 0 0;display:none;"></p>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;padding-bottom:16px;border-bottom:1px solid #f1f5f9;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;font-size:14px;">
          <span style="color:#64748b;">Sous-total (${Cart.getCount()} article${Cart.getCount() > 1 ? 's' : ''})</span>
          <span style="font-weight:600;color:#1e293b;">${formatPrice(subtotal)}</span>
        </div>
        ${savings > 0 ? `<div style="display:flex;justify-content:space-between;font-size:14px;">
          <span style="color:#10b981;">Économies</span>
          <span style="font-weight:600;color:#10b981;">-${formatPrice(savings)}</span>
        </div>` : ''}
        <div style="display:flex;justify-content:space-between;font-size:14px;">
          <span style="color:#64748b;">Livraison estimée</span>
          <span style="font-weight:600;color:${shipping === 0 ? '#10b981' : '#1e293b'};">${shipping === 0 ? 'Gratuite' : formatPrice(shipping)}</span>
        </div>
        ${shipping > 0 ? `<p style="font-size:11px;color:#94a3b8;margin:0;">Livraison gratuite à partir de 500 €</p>` : ''}
      </div>

      <div style="display:flex;justify-content:space-between;font-size:18px;margin-bottom:20px;">
        <span style="font-weight:700;color:#1e293b;">Total</span>
        <span style="font-weight:800;color:#e02020;">${formatPrice(total)}</span>
      </div>

      <a href="panier.html#checkout" class="btn-checkout-link" style="
        display:block;text-align:center;padding:14px;
        background:#e02020;color:#fff;
        border-radius:10px;font-weight:600;font-size:15px;text-decoration:none;
        transition:opacity .2s;margin-bottom:10px;">Commander</a>
      <a href="index.html" style="
        display:block;text-align:center;padding:10px;color:#64748b;
        font-size:13px;text-decoration:none;transition:color .2s;">
        ← Continuer mes achats</a>
    `;

    // Promo code handler
    summary.querySelector('.promo-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = summary.querySelector('.promo-input');
      const msg = summary.querySelector('.promo-message');
      const code = input.value.trim();
      if (!code) return;
      msg.textContent = 'Code invalide';
      msg.style.color = '#ef4444';
      msg.style.display = 'block';
      input.style.borderColor = '#ef4444';
      setTimeout(() => {
        msg.style.display = 'none';
        input.style.borderColor = '#e2e8f0';
      }, 3000);
    });
  };

  renderCartPage();

  // Handle checkout section
  if (window.location.hash === '#checkout') {
    setTimeout(() => initCheckout(), 100);
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#checkout') initCheckout();
  });
};

/* --------------------------------------------------------------------------
   6. CHECKOUT FORM — validation + success message
   -------------------------------------------------------------------------- */
const initCheckout = () => {
  const checkoutSection = document.querySelector('.checkout-section, #checkout');
  if (!checkoutSection) return;

  checkoutSection.scrollIntoView({ behavior: 'smooth' });

  // If form already rendered, skip
  if (checkoutSection.querySelector('.checkout-form')) return;

  const items = Cart.getItems();
  if (items.length === 0) {
    checkoutSection.innerHTML = `
      <div style="text-align:center;padding:40px;">
        <p style="color:#64748b;font-size:16px;">Ajoutez des produits à votre panier avant de commander.</p>
      </div>`;
    return;
  }

  checkoutSection.innerHTML = `
    <h2 style="font-size:22px;font-weight:700;color:#1e293b;margin-bottom:24px;">Informations de livraison</h2>
    <form class="checkout-form" style="display:grid;gap:16px;max-width:600px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div>
          <label style="font-size:13px;font-weight:600;color:#374151;display:block;margin-bottom:4px;">Prénom *</label>
          <input type="text" name="firstname" required placeholder="Jean" style="
            width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;">
        </div>
        <div>
          <label style="font-size:13px;font-weight:600;color:#374151;display:block;margin-bottom:4px;">Nom *</label>
          <input type="text" name="lastname" required placeholder="Dupont" style="
            width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;">
        </div>
      </div>
      <div>
        <label style="font-size:13px;font-weight:600;color:#374151;display:block;margin-bottom:4px;">Email *</label>
        <input type="email" name="email" required placeholder="jean@exemple.fr" style="
          width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;">
      </div>
      <div>
        <label style="font-size:13px;font-weight:600;color:#374151;display:block;margin-bottom:4px;">Téléphone *</label>
        <input type="tel" name="phone" required placeholder="06 12 34 56 78" style="
          width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;">
      </div>
      <div>
        <label style="font-size:13px;font-weight:600;color:#374151;display:block;margin-bottom:4px;">Adresse *</label>
        <input type="text" name="address" required placeholder="12 rue de la Paix" style="
          width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;">
      </div>
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:12px;">
        <div>
          <label style="font-size:13px;font-weight:600;color:#374151;display:block;margin-bottom:4px;">Code postal *</label>
          <input type="text" name="zip" required placeholder="75001" pattern="[0-9]{5}" style="
            width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;">
        </div>
        <div>
          <label style="font-size:13px;font-weight:600;color:#374151;display:block;margin-bottom:4px;">Ville *</label>
          <input type="text" name="city" required placeholder="Paris" style="
            width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;">
        </div>
      </div>
      <p class="checkout-error" style="color:#ef4444;font-size:13px;display:none;margin:0;"></p>
      <button type="submit" class="checkout-submit" style="
        padding:14px;background:#e02020;color:#fff;
        border:none;border-radius:10px;font-weight:600;font-size:15px;cursor:pointer;
        margin-top:8px;transition:opacity .2s;">Confirmer la commande</button>
    </form>
    <div class="checkout-success" style="display:none;text-align:center;padding:60px 20px;">
      <div style="width:80px;height:80px;background:#d1fae5;border-radius:50%;display:flex;
        align-items:center;justify-content:center;margin:0 auto 20px;">
        <i class="fas fa-check" style="font-size:36px;color:#10b981;"></i>
      </div>
      <h2 style="font-size:24px;font-weight:700;color:#1e293b;margin-bottom:8px;">Commande confirmée !</h2>
      <p style="color:#64748b;margin-bottom:24px;line-height:1.6;">
        Merci pour votre commande. Vous recevrez un email de confirmation sous peu.<br>
        Notre équipe vous contactera pour organiser la livraison.
      </p>
      <a href="index.html" style="
        display:inline-block;padding:14px 32px;background:#e02020;
        color:#fff;border-radius:10px;font-weight:600;text-decoration:none;font-size:15px;">
        Retour à l'accueil</a>
    </div>
  `;

  const form = checkoutSection.querySelector('.checkout-form');
  const errorEl = checkoutSection.querySelector('.checkout-error');
  const successEl = checkoutSection.querySelector('.checkout-success');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate
    const formData = new FormData(form);
    const fields = ['firstname', 'lastname', 'email', 'phone', 'address', 'zip', 'city'];
    let valid = true;

    fields.forEach(field => {
      const val = formData.get(field)?.trim();
      if (!val) valid = false;
    });

    const email = formData.get('email')?.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      valid = false;
      errorEl.textContent = 'Veuillez entrer une adresse email valide.';
      errorEl.style.display = 'block';
      return;
    }

    const zip = formData.get('zip')?.trim();
    if (zip && !/^[0-9]{5}$/.test(zip)) {
      valid = false;
      errorEl.textContent = 'Le code postal doit contenir 5 chiffres.';
      errorEl.style.display = 'block';
      return;
    }

    if (!valid) {
      errorEl.textContent = 'Veuillez remplir tous les champs obligatoires.';
      errorEl.style.display = 'block';
      return;
    }

    // Success
    errorEl.style.display = 'none';
    form.style.display = 'none';
    successEl.style.display = 'block';
    Cart.clear();

    // Also re-render cart page body if present
    const cartPageBody = document.querySelector('.cart-page-body');
    if (cartPageBody) cartPageBody.innerHTML = '';
    const cartSummary = document.querySelector('.cart-summary');
    if (cartSummary) cartSummary.style.display = 'none';

    Toast.show('Commande confirmée avec succès !', 'success', 5000);
  });
};

/* --------------------------------------------------------------------------
   UTILITY — Format price
   -------------------------------------------------------------------------- */
const formatPrice = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/* --------------------------------------------------------------------------
   7. HEADER SCROLL EFFECT — shadow + hide/show on direction
   -------------------------------------------------------------------------- */
const initHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;

  let lastY = 0;
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 10);
      if (y > 100) {
        header.classList.toggle('header--hidden', y > lastY);
      } else {
        header.classList.remove('header--hidden');
      }
      lastY = y;
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
};

/* --------------------------------------------------------------------------
   8. MOBILE MENU — toggle + body scroll lock
   -------------------------------------------------------------------------- */
const initMobileMenu = () => {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  const close = () => {
    toggle.classList.remove('active');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const opening = !menu.classList.contains('open');
    toggle.classList.toggle('active', opening);
    menu.classList.toggle('open', opening);
    document.body.style.overflow = opening ? 'hidden' : '';
  });

  menu.querySelectorAll('.mobile-link, a').forEach(link => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) close();
  });
};

/* --------------------------------------------------------------------------
   9. FILTER BUTTONS — toggle active + filter products by data-category
   -------------------------------------------------------------------------- */
const initFilters = () => {
  document.querySelectorAll('.filters-bar').forEach(bar => {
    const btns = bar.querySelectorAll('.filter-btn');
    const grid = bar.closest('section')?.querySelector('.products-grid, .grid, .auction-grid');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (!grid) return;
        const filter = btn.dataset.filter || 'all';
        const cards = grid.querySelectorAll('[data-category]');

        cards.forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
          if (match) {
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = 'fadeUp .4s ease forwards';
          }
        });
      });
    });
  });
};

/* --------------------------------------------------------------------------
   10. SMART SEARCH — suggestions dropdown, keyboard nav, redirect
   -------------------------------------------------------------------------- */
const initSearch = () => {
  document.querySelectorAll('.search-bar, .mobile-search').forEach(wrapper => {
    const input = wrapper.querySelector('input');
    if (!input) return;

    let dropdown = wrapper.querySelector('.search-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-dropdown';
      Object.assign(dropdown.style, {
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        background: '#fff',
        borderRadius: '0 0 12px 12px',
        boxShadow: '0 12px 40px rgba(0,0,0,.12)',
        maxHeight: '320px',
        overflowY: 'auto',
        zIndex: '999',
        display: 'none',
      });
      wrapper.style.position = 'relative';
      wrapper.appendChild(dropdown);
    }

    let activeIdx = -1;

    const renderSuggestions = (results) => {
      if (results.length === 0) {
        dropdown.style.display = 'none';
        return;
      }
      activeIdx = -1;
      dropdown.innerHTML = results.map((item, i) => {
        const url = item.category === 'cuisine' ? 'cuisines.html' : 'vetements.html';
        const icon = item.category === 'cuisine' ? 'utensils' : 'tshirt';
        const label = item.category === 'cuisine' ? 'Cuisine' : item.category === 'sdb' ? 'Salle de bain' : 'Vetement';
        return `
          <div class="search-suggestion" data-index="${i}" data-url="${url}" style="
            padding:12px 18px;cursor:pointer;display:flex;align-items:center;gap:10px;
            border-bottom:1px solid #f1f5f9;transition:background .15s ease;font-size:14px;">
            <span style="color:#94a3b8;font-size:12px;text-transform:uppercase;min-width:70px;">
              <i class="fas fa-${icon}"></i> ${label}
            </span>
            <span>${item.name}</span>
            <span style="margin-left:auto;font-weight:600;color:#e02020;font-size:13px;">${formatPrice(item.price)}</span>
          </div>`;
      }).join('');
      dropdown.style.display = 'block';

      dropdown.querySelectorAll('.search-suggestion').forEach(el => {
        el.addEventListener('mouseenter', () => highlightItem(parseInt(el.dataset.index)));
        el.addEventListener('click', () => { window.location.href = el.dataset.url; });
      });
    };

    const highlightItem = (idx) => {
      const items = dropdown.querySelectorAll('.search-suggestion');
      items.forEach(el => el.style.background = '');
      if (idx >= 0 && idx < items.length) {
        items[idx].style.background = '#f1f5f9';
        activeIdx = idx;
      }
    };

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { dropdown.style.display = 'none'; return; }
      const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      ).slice(0, 8);
      renderSuggestions(results);
    });

    input.addEventListener('keydown', (e) => {
      const items = dropdown.querySelectorAll('.search-suggestion');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        highlightItem(Math.min(activeIdx + 1, items.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        highlightItem(Math.max(activeIdx - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIdx >= 0 && items[activeIdx]) {
          window.location.href = items[activeIdx].dataset.url;
        } else {
          const q = input.value.trim().toLowerCase();
          if (q.includes('cuisine') || q.includes('oskab')) {
            window.location.href = 'cuisines.html';
          } else if (q.includes('vetement') || q.includes('kilo') || q.includes('lot')) {
            window.location.href = 'vetements.html';
          }
        }
      } else if (e.key === 'Escape') {
        dropdown.style.display = 'none';
        input.blur();
      }
    });

    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) dropdown.style.display = 'none';
    });
  });
};

/* --------------------------------------------------------------------------
   11. FAVORITES SYSTEM — localStorage, heart toggle, counter, toast
   -------------------------------------------------------------------------- */
const Favorites = (() => {
  const STORAGE_KEY = 'destockage_favorites';

  const get = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  };

  const save = (ids) => localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));

  const toggle = (productId) => {
    const favs = get();
    const idx = favs.indexOf(productId);
    if (idx > -1) {
      favs.splice(idx, 1);
      Toast.show('Retiré des favoris', 'info');
    } else {
      favs.push(productId);
      Toast.show('Ajouté aux favoris', 'success');
    }
    save(favs);
    updateCounter();
    return favs.includes(productId);
  };

  const has = (productId) => get().includes(productId);

  const updateCounter = () => {
    const count = get().length;
    document.querySelectorAll('.favorites-count, .fav-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? '' : 'none';
    });
  };

  const init = () => {
    updateCounter();

    document.querySelectorAll('[data-favorite]').forEach(btn => {
      const id = btn.dataset.favorite;
      const icon = btn.querySelector('i');
      if (has(id) && icon) {
        icon.classList.replace('far', 'fas');
        icon.style.color = '#e02020';
      }
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const active = toggle(id);
        if (icon) {
          if (active) {
            icon.classList.replace('far', 'fas');
            icon.style.color = '#e02020';
          } else {
            icon.classList.replace('fas', 'far');
            icon.style.color = '';
          }
        }
      });
    });

    // Legacy support for heart buttons without data-favorite
    document.querySelectorAll('.product-actions button:not([data-favorite])').forEach(btn => {
      const icon = btn.querySelector('i.fa-heart');
      if (!icon) return;
      const card = btn.closest('[data-id]');
      const id = card?.dataset.id || `product-${Math.random().toString(36).slice(2, 8)}`;

      if (has(id)) {
        icon.classList.replace('far', 'fas');
        icon.style.color = '#e02020';
      }

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const active = toggle(id);
        if (active) {
          icon.classList.replace('far', 'fas');
          icon.style.color = '#e02020';
        } else {
          icon.classList.replace('fas', 'far');
          icon.style.color = '';
        }
      });
    });
  };

  return { init, get, has, toggle, updateCounter };
})();

/* --------------------------------------------------------------------------
   12. NEWSLETTER POPUP — 15s delay or exit intent, localStorage 7-day dismiss
   -------------------------------------------------------------------------- */
const initNewsletter = () => {
  const STORAGE_KEY = 'destockage_newsletter_dismissed';
  const dismissed = localStorage.getItem(STORAGE_KEY);
  if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

  let shown = false;

  const createPopup = () => {
    if (shown) return;
    if (document.querySelector('.newsletter-popup')) return;
    shown = true;

    const overlay = document.createElement('div');
    overlay.className = 'newsletter-popup';
    Object.assign(overlay.style, {
      position: 'fixed', inset: '0', background: 'rgba(0,0,0,.6)',
      zIndex: '9999', display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: '0', transition: 'opacity .3s ease',
    });

    overlay.innerHTML = `
      <div class="newsletter-box" style="
        background:#fff;border-radius:16px;padding:40px;max-width:480px;width:90%;
        position:relative;text-align:center;transform:scale(.9);
        transition:transform .35s cubic-bezier(.22,1,.36,1);">
        <button class="newsletter-close" aria-label="Fermer" style="
          position:absolute;top:14px;right:14px;background:none;border:none;
          font-size:22px;cursor:pointer;color:#64748b;line-height:1;">&times;</button>
        <h3 style="font-size:22px;font-weight:700;margin-bottom:8px;color:#1e293b;">
          Ne manquez aucune offre !</h3>
        <p style="color:#64748b;margin-bottom:24px;font-size:14px;line-height:1.5;">
          Inscrivez-vous et recevez nos meilleures ventes et offres exclusives directement dans votre boite mail.</p>
        <form class="newsletter-form" style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
          <input type="email" placeholder="Votre adresse email" required style="
            flex:1;min-width:200px;padding:12px 16px;border:2px solid #e2e8f0;border-radius:10px;
            font-size:14px;outline:none;transition:border-color .2s;">
          <button type="submit" style="
            padding:12px 24px;background:#e02020;
            color:#fff;border:none;border-radius:10px;font-weight:600;cursor:pointer;
            font-size:14px;transition:opacity .2s;">S'inscrire</button>
        </form>
        <p class="newsletter-msg" style="margin-top:14px;font-size:13px;color:#10b981;display:none;"></p>
      </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      overlay.querySelector('.newsletter-box').style.transform = 'scale(1)';
    });

    const dismiss = () => {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
    };

    overlay.querySelector('.newsletter-close').addEventListener('click', dismiss);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') dismiss();
    }, { once: true });

    overlay.querySelector('.newsletter-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = overlay.querySelector('input[type="email"]').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const msg = overlay.querySelector('.newsletter-msg');
      if (!emailRegex.test(email)) {
        msg.textContent = 'Veuillez entrer une adresse email valide.';
        msg.style.color = '#ef4444';
        msg.style.display = 'block';
        return;
      }
      msg.textContent = 'Merci pour votre inscription ! Vous recevrez nos prochaines offres.';
      msg.style.color = '#10b981';
      msg.style.display = 'block';
      overlay.querySelector('form').style.display = 'none';
      setTimeout(dismiss, 3000);
    });
  };

  setTimeout(createPopup, 15000);

  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0) createPopup();
  });
};

/* --------------------------------------------------------------------------
   13. SCROLL REVEAL ANIMATIONS — IntersectionObserver, stagger
   -------------------------------------------------------------------------- */
const initScrollReveal = () => {
  const reveals = document.querySelectorAll('.reveal, .product-card, .auction-card, .stat-item, .step');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('revealed');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el) => {
    el.classList.add('reveal-init');
    const parent = el.parentElement;
    if (parent && (parent.classList.contains('products-grid') || parent.classList.contains('grid') || parent.classList.contains('auction-grid'))) {
      const siblings = [...parent.children];
      const idx = siblings.indexOf(el);
      el.dataset.delay = idx * 80;
    }
    observer.observe(el);
  });

  if (!document.getElementById('reveal-styles')) {
    const style = document.createElement('style');
    style.id = 'reveal-styles';
    style.textContent = `
      .reveal-init { opacity: 0; transform: translateY(30px); transition: opacity .6s ease, transform .6s ease; }
      .reveal-init.revealed { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
  }
};

/* --------------------------------------------------------------------------
   14. COUNTDOWN TIMERS — flash sale countdowns
   -------------------------------------------------------------------------- */
const initCountdowns = () => {
  const timers = document.querySelectorAll('[data-countdown]');
  if (timers.length === 0) return;

  const pad = (n) => String(n).padStart(2, '0');

  const update = () => {
    timers.forEach(el => {
      const target = new Date(el.dataset.countdown).getTime();
      const now = Date.now();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      el.innerHTML = `
        <span class="cd-unit"><strong>${pad(days)}</strong> Jours</span>
        <span class="cd-unit"><strong>${pad(hours)}</strong> Heures</span>
        <span class="cd-unit"><strong>${pad(mins)}</strong> Min</span>
        <span class="cd-unit"><strong>${pad(secs)}</strong> Sec</span>
      `;

      if (diff === 0) el.classList.add('countdown-ended');
    });
  };

  update();
  setInterval(update, 1000);
};

/* --------------------------------------------------------------------------
   15. STOCK COUNTERS — animate progress bars on scroll into view
   -------------------------------------------------------------------------- */
const initStockCounters = () => {
  const bars = document.querySelectorAll('.stock-bar, [data-stock]');
  if (bars.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const fill = bar.querySelector('.stock-fill, .bar-fill') || bar;
        const target = parseInt(bar.dataset.stock || fill.dataset.width || fill.style.width) || 0;
        fill.style.transition = 'width 1.2s cubic-bezier(.22,1,.36,1)';
        requestAnimationFrame(() => {
          fill.style.width = `${target}%`;
        });
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    const fill = bar.querySelector('.stock-fill, .bar-fill') || bar;
    fill.dataset.width = fill.style.width || fill.getAttribute('data-width') || '0';
    fill.style.width = '0';
    observer.observe(bar);
  });
};

/* --------------------------------------------------------------------------
   16. IMAGE CAROUSEL — prev/next, dots, swipe support
   -------------------------------------------------------------------------- */
const initCarousels = () => {
  document.querySelectorAll('.carousel, .product-carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track, .carousel-slides');
    const slides = track?.children;
    if (!track || !slides || slides.length === 0) return;

    let current = 0;
    const total = slides.length;

    const goTo = (idx) => {
      current = ((idx % total) + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      updateDots();
    };

    const prev = carousel.querySelector('.carousel-prev, .prev-btn');
    const next = carousel.querySelector('.carousel-next, .next-btn');
    prev?.addEventListener('click', () => goTo(current - 1));
    next?.addEventListener('click', () => goTo(current + 1));

    let dotsContainer = carousel.querySelector('.carousel-dots');
    if (!dotsContainer && total > 1) {
      dotsContainer = document.createElement('div');
      dotsContainer.className = 'carousel-dots';
      Object.assign(dotsContainer.style, {
        display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px',
      });
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Image ${i + 1}`);
        Object.assign(dot.style, {
          width: '10px', height: '10px', borderRadius: '50%', border: 'none',
          background: i === 0 ? '#667eea' : '#cbd5e1', cursor: 'pointer',
          transition: 'background .2s',
        });
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
      carousel.appendChild(dotsContainer);
    }

    const updateDots = () => {
      dotsContainer?.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.style.background = i === current ? '#667eea' : '#cbd5e1';
      });
    };

    let startX = 0;
    let deltaX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchmove', (e) => { deltaX = e.touches[0].clientX - startX; }, { passive: true });
    track.addEventListener('touchend', () => {
      if (Math.abs(deltaX) > 50) {
        goTo(deltaX > 0 ? current - 1 : current + 1);
      }
      deltaX = 0;
    });

    track.style.transition = 'transform .4s cubic-bezier(.22,1,.36,1)';
  });
};

/* --------------------------------------------------------------------------
   17. PRODUCT MODAL — detail view with "Ajouter au panier" CTA
   -------------------------------------------------------------------------- */
const initProductModal = () => {
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  Object.assign(modal.style, {
    position: 'fixed', inset: '0', background: 'rgba(0,0,0,.6)',
    zIndex: '9998', display: 'none', alignItems: 'center', justifyContent: 'center',
    opacity: '0', transition: 'opacity .3s ease',
  });
  modal.innerHTML = `
    <div class="product-modal__content" style="
      background:#fff;border-radius:16px;max-width:750px;width:92%;max-height:90vh;
      overflow-y:auto;position:relative;transform:translateY(20px);
      transition:transform .35s cubic-bezier(.22,1,.36,1);padding:0;">
      <button class="product-modal__close" aria-label="Fermer" style="
        position:sticky;top:12px;float:right;margin:12px 12px 0 0;background:#f1f5f9;
        border:none;width:36px;height:36px;border-radius:50%;font-size:20px;
        cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;
        color:#64748b;transition:background .2s;">&times;</button>
      <div class="product-modal__body" style="padding:24px 32px 32px;"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const content = modal.querySelector('.product-modal__content');
  const body = modal.querySelector('.product-modal__body');

  const openModal = (data) => {
    // Try to find matching product in PRODUCTS array
    const matchedProduct = data.productId
      ? PRODUCTS.find(p => p.id === data.productId)
      : null;

    body.innerHTML = `
      ${data.image ? `<img src="${data.image}" alt="${data.name || ''}" style="width:100%;border-radius:12px;margin-bottom:20px;object-fit:cover;max-height:400px;">` : ''}
      <h2 style="font-size:22px;font-weight:700;margin-bottom:8px;color:#1e293b;">${data.name || 'Produit'}</h2>
      ${data.category ? `<span style="display:inline-block;background:#f1f5f9;color:#e02020;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:12px;">${data.category}</span>` : ''}
      ${data.description ? `<p style="color:#64748b;line-height:1.6;margin-bottom:16px;font-size:14px;">${data.description}</p>` : ''}
      ${data.specs ? `<div style="background:#f8fafc;border-radius:10px;padding:16px;margin-bottom:16px;">
        <h4 style="font-size:14px;font-weight:600;margin-bottom:8px;color:#1e293b;">Caractéristiques</h4>
        <p style="font-size:13px;color:#64748b;line-height:1.6;">${data.specs}</p>
      </div>` : ''}
      <div style="display:flex;align-items:center;gap:16px;margin-top:20px;flex-wrap:wrap;">
        ${data.price ? `<span style="font-size:26px;font-weight:800;color:#e02020;">${data.price}</span>` : ''}
        ${data.oldPrice ? `<span style="font-size:16px;color:#94a3b8;text-decoration:line-through;">${data.oldPrice}</span>` : ''}
        <button class="modal-cta" ${matchedProduct ? `data-add-cart="${matchedProduct.id}"` : ''} style="
          margin-left:auto;padding:14px 32px;background:#e02020;
          color:#fff;border:none;border-radius:10px;font-weight:600;cursor:pointer;
          font-size:15px;transition:opacity .2s;">
          <i class="fas fa-cart-plus"></i> Ajouter au panier
        </button>
      </div>
    `;

    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    });
    document.body.style.overflow = 'hidden';

    // Bind modal CTA
    const cta = body.querySelector('.modal-cta');
    cta?.addEventListener('click', () => {
      if (matchedProduct) {
        Cart.add(matchedProduct);
        cta.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
        cta.style.background = '#10b981';
        setTimeout(() => {
          cta.innerHTML = '<i class="fas fa-cart-plus"></i> Ajouter au panier';
          cta.style.background = '#e02020';
        }, 1500);
      } else {
        Toast.show('Produit ajouté au panier !', 'success');
      }
    });
  };

  const closeModal = () => {
    modal.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  };

  modal.querySelector('.product-modal__close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
  });

  // Bind product cards — navigate to product page if link exists, otherwise open modal
  document.querySelectorAll('.product-card, .auction-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('button, a, .product-actions, [data-add-cart], [data-favorite]')) return;

      // Check if card has a link to a product page
      const productLink = card.querySelector('a[href*="produits/"]');
      if (productLink) {
        window.location.href = productLink.href;
        return;
      }

      // Fallback: open modal for cards without product pages
      const img = card.querySelector('img');
      const nameEl = card.querySelector('.product-title, h3, h4, .card-title');
      const priceEl = card.querySelector('.product-price, .current-price, .price');
      const oldPriceEl = card.querySelector('.old-price, .original-price, del, s');
      const descEl = card.querySelector('.product-desc, .card-desc, p');
      const catEl = card.querySelector('.product-badge, .badge, .tag');
      const specsEl = card.querySelector('.product-specs, .specs');
      const productId = card.dataset.addCart || card.dataset.id || '';

      openModal({
        image: img?.src || img?.dataset?.src || '',
        name: nameEl?.textContent || '',
        price: priceEl?.textContent || '',
        oldPrice: oldPriceEl?.textContent || '',
        description: descEl?.textContent || '',
        category: catEl?.textContent || '',
        specs: specsEl?.textContent || '',
        productId,
      });
    });
  });
};

/* --------------------------------------------------------------------------
   18. BACK TO TOP — appears after 400px, smooth scroll
   -------------------------------------------------------------------------- */
const initBackToTop = () => {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Retour en haut');
  btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  Object.assign(btn.style, {
    position: 'fixed', bottom: '30px', right: '30px', width: '48px', height: '48px',
    borderRadius: '50%', border: 'none',
    background: '#e02020',
    color: '#fff', fontSize: '18px', cursor: 'pointer', zIndex: '9000',
    opacity: '0', visibility: 'hidden',
    transition: 'opacity .3s ease, visibility .3s ease, transform .3s ease',
    boxShadow: '0 4px 20px rgba(102,126,234,.35)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  });

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.visibility = show ? 'visible' : 'hidden';
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

/* --------------------------------------------------------------------------
   19. PARALLAX — hero banner translateY on scroll
   -------------------------------------------------------------------------- */
const initParallax = () => {
  const heroes = document.querySelectorAll('.hero, .hero-banner, [data-parallax]');
  if (heroes.length === 0) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      heroes.forEach(hero => {
        const bg = hero.querySelector('.hero-bg, .hero-image, img') || hero;
        const speed = parseFloat(hero.dataset.parallaxSpeed) || 0.35;
        bg.style.transform = `translateY(${y * speed}px)`;
      });
      ticking = false;
    });
  }, { passive: true });
};

/* --------------------------------------------------------------------------
   20. COOKIE BANNER — first visit, localStorage acceptance
   -------------------------------------------------------------------------- */
const initCookieBanner = () => {
  if (localStorage.getItem('destockage_cookies_accepted')) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  Object.assign(banner.style, {
    position: 'fixed', bottom: '0', left: '0', right: '0',
    background: '#1e293b', color: '#e2e8f0', padding: '18px 24px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: '20px', zIndex: '9990', fontSize: '14px', lineHeight: '1.5',
    transform: 'translateY(100%)', transition: 'transform .4s ease',
    flexWrap: 'wrap',
  });
  banner.innerHTML = `
    <p style="margin:0;flex:1;min-width:240px;">
      Ce site utilise des cookies pour améliorer votre expérience.
      En continuant, vous acceptez notre politique de confidentialité.
    </p>
    <div style="display:flex;gap:10px;flex-shrink:0;">
      <button class="cookie-decline" style="
        padding:10px 20px;background:transparent;color:#94a3b8;border:1px solid #475569;
        border-radius:8px;cursor:pointer;font-size:13px;font-weight:500;">Refuser</button>
      <button class="cookie-accept" style="
        padding:10px 20px;background:#667eea;color:#fff;border:none;
        border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;">Accepter</button>
    </div>
  `;

  document.body.appendChild(banner);
  requestAnimationFrame(() => { banner.style.transform = 'translateY(0)'; });

  const dismiss = (accepted) => {
    if (accepted) localStorage.setItem('destockage_cookies_accepted', 'true');
    else localStorage.setItem('destockage_cookies_accepted', 'declined');
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 400);
  };

  banner.querySelector('.cookie-accept').addEventListener('click', () => dismiss(true));
  banner.querySelector('.cookie-decline').addEventListener('click', () => dismiss(false));
};

/* --------------------------------------------------------------------------
   21. LAZY LOADING — IntersectionObserver for data-src images
   -------------------------------------------------------------------------- */
const initLazyLoad = () => {
  const images = document.querySelectorAll('img[data-src]');
  if (images.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  images.forEach(img => observer.observe(img));
};

/* --------------------------------------------------------------------------
   22. SMOOTH SCROLL — anchor links
   -------------------------------------------------------------------------- */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
};

/* --------------------------------------------------------------------------
   23. SORT SELECT — sort product grids
   -------------------------------------------------------------------------- */
const initSort = () => {
  document.querySelectorAll('.sort-select, [data-sort]').forEach(select => {
    select.addEventListener('change', () => {
      const grid = select.closest('section')?.querySelector('.products-grid, .grid, .auction-grid');
      if (!grid) return;

      const cards = [...grid.children];
      const value = select.value;

      cards.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price || a.querySelector('.product-price, .current-price, .price')?.textContent?.replace(/[^\d]/g, '') || 0);
        const priceB = parseFloat(b.dataset.price || b.querySelector('.product-price, .current-price, .price')?.textContent?.replace(/[^\d]/g, '') || 0);
        const nameA = (a.querySelector('.product-title, h3, h4')?.textContent || '').toLowerCase();
        const nameB = (b.querySelector('.product-title, h3, h4')?.textContent || '').toLowerCase();

        switch (value) {
          case 'price-asc': return priceA - priceB;
          case 'price-desc': return priceB - priceA;
          case 'name-asc': return nameA.localeCompare(nameB);
          case 'name-desc': return nameB.localeCompare(nameA);
          default: return 0;
        }
      });

      cards.forEach(card => grid.appendChild(card));
    });
  });
};

/* --------------------------------------------------------------------------
   24. CHAT WIDGET — floating chat bubble + minimal form
   -------------------------------------------------------------------------- */
const initChatWidget = () => {
  if (document.querySelector('.chat-widget')) return;

  const widget = document.createElement('div');
  widget.className = 'chat-widget';
  Object.assign(widget.style, {
    position: 'fixed', bottom: '30px', left: '30px', zIndex: '9000',
  });

  widget.innerHTML = `
    <button class="chat-bubble" aria-label="Chat" style="
      width:56px;height:56px;border-radius:50%;border:none;
      background:#e02020;color:#fff;
      font-size:22px;cursor:pointer;box-shadow:0 4px 20px rgba(102,126,234,.35);
      display:flex;align-items:center;justify-content:center;
      transition:transform .2s ease;">
      <i class="fas fa-comment-dots"></i>
    </button>
    <div class="chat-panel" style="
      display:none;position:absolute;bottom:70px;left:0;width:320px;
      background:#fff;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.15);
      overflow:hidden;">
      <div style="background:#e02020;color:#fff;padding:16px 20px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div>
            <h4 style="margin:0;font-size:15px;font-weight:600;">Besoin d'aide ?</h4>
            <p style="margin:4px 0 0;font-size:12px;opacity:.8;">Nous répondons en moins de 24h</p>
          </div>
          <button class="chat-close" style="background:none;border:none;color:#fff;font-size:18px;cursor:pointer;opacity:.8;">&times;</button>
        </div>
      </div>
      <div style="padding:20px;">
        <form class="chat-form">
          <input type="text" name="name" placeholder="Votre nom" required style="
            width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;
            font-size:13px;margin-bottom:10px;outline:none;box-sizing:border-box;">
          <input type="email" name="email" placeholder="Votre email" required style="
            width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;
            font-size:13px;margin-bottom:10px;outline:none;box-sizing:border-box;">
          <textarea name="message" placeholder="Votre message..." required rows="3" style="
            width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;
            font-size:13px;margin-bottom:12px;outline:none;resize:vertical;box-sizing:border-box;"></textarea>
          <button type="submit" style="
            width:100%;padding:10px;background:#e02020;
            color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer;
            font-size:13px;transition:opacity .2s;">Envoyer</button>
        </form>
        <p class="chat-success" style="display:none;text-align:center;color:#10b981;font-size:13px;padding:20px 0;">
          Message envoyé ! Nous vous répondrons rapidement.</p>
      </div>
    </div>
  `;

  document.body.appendChild(widget);

  const bubble = widget.querySelector('.chat-bubble');
  const panel = widget.querySelector('.chat-panel');
  const closeBtn = widget.querySelector('.chat-close');

  bubble.addEventListener('click', () => {
    const isOpen = panel.style.display === 'block';
    panel.style.display = isOpen ? 'none' : 'block';
    bubble.style.transform = isOpen ? '' : 'scale(.9)';
  });

  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
    bubble.style.transform = '';
  });

  widget.querySelector('.chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    widget.querySelector('.chat-form').style.display = 'none';
    widget.querySelector('.chat-success').style.display = 'block';
    setTimeout(() => {
      panel.style.display = 'none';
      bubble.style.transform = '';
      widget.querySelector('.chat-form').style.display = '';
      widget.querySelector('.chat-form').reset();
      widget.querySelector('.chat-success').style.display = 'none';
    }, 3000);
  });
};

/* --------------------------------------------------------------------------
   25. FAQ ACCORDION — toggle open/close on click
   -------------------------------------------------------------------------- */
const initFaqAccordion = () => {
  document.querySelectorAll('.faq-item, .accordion-item').forEach(item => {
    const question = item.querySelector('.faq-question, .accordion-header, .accordion-trigger');
    const answer = item.querySelector('.faq-answer, .accordion-body, .accordion-content');
    if (!question || !answer) return;

    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height .35s ease, padding .35s ease';
    answer.style.padding = '0 16px';

    question.style.cursor = 'pointer';
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close siblings
      item.parentElement?.querySelectorAll('.faq-item.open, .accordion-item.open').forEach(sibling => {
        if (sibling !== item) {
          sibling.classList.remove('open');
          const sibAnswer = sibling.querySelector('.faq-answer, .accordion-body, .accordion-content');
          if (sibAnswer) {
            sibAnswer.style.maxHeight = '0';
            sibAnswer.style.padding = '0 16px';
          }
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        answer.style.padding = '0 16px';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 32 + 'px';
        answer.style.padding = '16px';
      }
    });
  });
};

/* --------------------------------------------------------------------------
   BOOT — Initialize everything on DOMContentLoaded
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Core cart system
  Cart.init();
  initCartDrawer();
  initAddToCartButtons();
  initCartPage();

  // Header & navigation
  initHeader();
  initMobileMenu();
  initSmoothScroll();

  // Product features
  initFilters();
  initSearch();
  initSort();
  initCarousels();
  initProductModal();
  Favorites.init();

  // Visual effects
  initScrollReveal();
  initParallax();
  initLazyLoad();

  // Timers & stock
  initCountdowns();
  initStockCounters();

  // UI widgets
  initBackToTop();
  initChatWidget();
  initFaqAccordion();

  // Popups & banners
  initNewsletter();
  initCookieBanner();
});

// ===== FOMO: RANDOM VIEWERS =====
function initFomo() {
    document.querySelectorAll('.fomo-viewers').forEach(el => {
        const baseCount = parseInt(el.textContent) || Math.floor(Math.random() * 15) + 3;
        const updateViewers = () => {
            const variation = Math.floor(Math.random() * 5) - 2;
            const count = Math.max(1, baseCount + variation);
            const dot = el.querySelector('.fomo-dot');
            el.innerHTML = '';
            if (dot) el.appendChild(dot.cloneNode(true));
            else {
                const newDot = document.createElement('span');
                newDot.className = 'fomo-dot';
                el.appendChild(newDot);
            }
            el.appendChild(document.createTextNode(' ' + count + ' personnes regardent'));
        };
        updateViewers();
        setInterval(updateViewers, 8000 + Math.random() * 7000);
    });
}

// ===== STAR RATINGS FOR PRODUCT CARDS =====
function initStarRatings() {
    // Auto-add stars to product cards that don't have them
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.querySelector('.stars')) return; // already has stars
        const brand = card.querySelector('.product-brand');
        if (!brand) return;

        const rating = (3.5 + Math.random() * 1.5).toFixed(1);
        const fullStars = Math.floor(rating);
        const hasHalf = rating - fullStars >= 0.3;
        const count = Math.floor(Math.random() * 60) + 10;

        const starsDiv = document.createElement('div');
        starsDiv.className = 'stars';
        let html = '';
        for (let i = 0; i < fullStars; i++) html += '<i class="fas fa-star"></i>';
        if (hasHalf) html += '<i class="fas fa-star-half-alt"></i>';
        const empty = 5 - fullStars - (hasHalf ? 1 : 0);
        for (let i = 0; i < empty; i++) html += '<i class="fas fa-star empty"></i>';
        html += '<span class="stars-count">(' + count + ')</span>';
        starsDiv.innerHTML = html;
        brand.after(starsDiv);
    });
}

// ===== FOMO BAR AUTO-ADD TO PRODUCT CARDS =====
function initFomoBars() {
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.querySelector('.fomo-bar') || card.querySelector('.product-fomo')) return;

        const footer = card.querySelector('.product-footer');
        if (!footer) return;

        const viewers = Math.floor(Math.random() * 18) + 2;
        const stock = Math.floor(Math.random() * 8) + 1;

        const fomo = document.createElement('div');
        fomo.className = 'product-fomo';
        fomo.innerHTML = '<span class="fomo-live"><span class="fomo-dot"></span> ' + viewers + ' personnes regardent</span><span style="color:var(--accent);font-weight:600;">' + (stock <= 3 ? 'Plus que ' + stock + ' !' : stock + ' en stock') + '</span>';
        footer.before(fomo);
    });
}

// ===== FLASH SALE COUNTDOWN ON PROMO PAGE =====
function initFlashCountdowns() {
    document.querySelectorAll('.flash-card-timer[data-end]').forEach(el => {
        const end = new Date(el.dataset.end).getTime();
        const update = () => {
            const now = Date.now();
            const diff = end - now;
            if (diff <= 0) { el.textContent = 'Terminee'; return; }
            const d = Math.floor(diff / 86400000);
            const h = Math.floor((diff % 86400000) / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            el.textContent = (d > 0 ? d + 'j ' : '') + h + 'h ' + m + 'min';
        };
        update();
        setInterval(update, 60000);
    });
}

// ===== MEMBER BAR DISMISS =====
function initMemberBar() {
    const bar = document.querySelector('.member-bar');
    if (!bar) return;
    if (localStorage.getItem('destockpro_user') || localStorage.getItem('member_bar_dismissed')) {
        bar.style.display = 'none';
        return;
    }
}

// ===== REFERRAL CODE COPY =====
function initReferral() {
    document.querySelectorAll('.referral-code-box .btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.closest('.referral-code-box')?.querySelector('.referral-code')?.textContent;
            if (code) {
                navigator.clipboard?.writeText(code).then(() => {
                    const original = btn.innerHTML;
                    btn.innerHTML = '<i class="fas fa-check"></i> Copie !';
                    btn.style.background = 'var(--green)';
                    btn.style.color = '#fff';
                    setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; btn.style.color = ''; }, 2000);
                });
            }
        });
    });
}

// ===== PRICE RANGE FILTER =====
function initPriceFilter() {
    const slider = document.querySelector('.price-range input[type="range"]');
    const display = document.querySelector('.price-range-value');
    if (!slider || !display) return;

    slider.addEventListener('input', () => {
        const val = parseInt(slider.value);
        display.textContent = val + ' EUR';

        // Filter product cards by price
        document.querySelectorAll('.product-card').forEach(card => {
            const priceEl = card.querySelector('.price-current');
            if (!priceEl) return;
            const price = parseInt(priceEl.textContent.replace(/[^0-9]/g, ''));
            card.style.display = price <= val ? '' : 'none';
        });
    });
}

// ===== USER ACCOUNT STATE =====
function initUserState() {
    const user = JSON.parse(localStorage.getItem('destockpro_user') || 'null');
    if (user) {
        // Update account icon
        document.querySelectorAll('.header-action').forEach(a => {
            const small = a.querySelector('small');
            if (small && small.textContent === 'Compte') {
                small.textContent = user.name || 'Compte';
                a.querySelector('i').className = 'fas fa-user-check';
            }
        });
        // Hide member bar
        const bar = document.querySelector('.member-bar');
        if (bar) bar.style.display = 'none';
    }
}

// ===== INIT ALL NEW FEATURES =====
document.addEventListener('DOMContentLoaded', () => {
    initStarRatings();
    initFomoBars();
    initFomo();
    initFlashCountdowns();
    initMemberBar();
    initReferral();
    initPriceFilter();
    initUserState();
});
