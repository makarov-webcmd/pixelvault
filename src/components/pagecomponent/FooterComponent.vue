<script setup>

</script>

<template>
<div class="footer-main">
  <div class="footer-content">
    <div class="footer-logo">
      <div class="logo">PIXELVAULT</div>
    </div>
    <div class="footer-nav">
      <div class="footer-item">
        <a href="#">Store</a>
      </div>
      <div class="footer-item">
        <a href="#">News</a>
      </div>
      <div class="footer-item">
        <a href="#">Cases</a>
      </div>
      <div class="footer-item">
        <a href="#">Contacts</a>
      </div>
      <div class="footer-item">
        <a href="#">Discord</a>
      </div>
    </div>
    <div class="footer-links">
      <a href="#" class="link-twitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#00BFFF" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 11 5.5a12.8 12.8 0 0 1-9.3-4.7s-4 9 5 13a13.38 13.38 0 0 1-8 2c9 5.5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      </a>
      <a href="#" class="link-steam">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#00FFC6" stroke-width="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M22 4l-10 7L2 4"/>
        </svg>
      </a>
      <a href="#" class="link-discord">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#7B8A96" stroke-width="2">
          <rect x="3" y="5" width="14" height="14" rx="2"/>
          <path d="M7 9h6M7 13h6"/>
        </svg>
      </a>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.footer-main {
  width: 100%;
  background: var(--bg-footer);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0 0 20px 20px;
  backdrop-filter: blur(6px);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 20px 20px;
  text-transform: uppercase;
  color: var(--footer-text);

  .footer-logo .logo {
    font-weight: 800;
    font-size: var(--text-xxl);
    letter-spacing: 2px;
    color: #00FFC6;
    text-shadow: 0 0 6px #00FFC6;
    cursor: pointer;
  }

  .footer-nav {
    display: flex;
    gap: 1.4rem;
    cursor: pointer;
    font-family: var(--font-main);
    font-size: var(--text-md);

    a {
      text-decoration: none;
      color: var(--text-secondary);
      transition: 0.2s ease;

      &:hover {
        color: #00FFC6;
        text-shadow: 0 0 4px #00FFC6;
      }
    }
  }

  .footer-links {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    a {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.03);
      transition: 0.2s ease;
      cursor: pointer;
    }

    svg {
      width: 18px;
      height: 18px;

      &:hover {
        transition: 0.3s ease;
        transform: scale(1.1);
        background: rgba(0, 255, 198, 0.1);
        filter: drop-shadow(0 0 6px #00FFC6);
      }
    }
  }
}

/* Большие мониторы */
@media (max-width: 1400px) { }

/* Стандартные ноутбуки */
@media (max-width: 1200px) {
  .footer-content {
    padding: 1.4rem 1rem;
  }
  .footer-nav {
    gap: 1rem;
  }
}

/* Маленькие ноутбуки / большие планшеты */
@media (max-width: 992px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
  }

  .footer-nav {
    order: 3;
  }

  .footer-links {
    order: 2;
  }
}

/* Планшеты */
@media (max-width: 768px) {
  .footer-nav {
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .footer-nav a {
    font-size: 0.8rem;
  }
}

/* Маленькие смартфоны */
@media (max-width: 576px) {
  .footer-logo .logo {
    font-size: 1.4rem;
  }

  .footer-links div {
    width: 28px;
    height: 28px;
  }
}

</style>