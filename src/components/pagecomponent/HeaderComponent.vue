<script setup>
</script>

<template>
  <div class="header-content">
    <div class="pl-up">
      <div class="header-logo">
        <div class="pl-logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#00FFC6"/>
            <path d="M8 8h8v8H8z" fill="#0A0F12"/>
            <circle cx="12" cy="12" r="2" fill="#00FFC6"/>
          </svg>
        </div>
        <div class="pl-logo-text">PixelVault</div>
      </div>
      <div class="pl-header-items">
        <div class="pl-search">
          <input type="search" placeholder=" " />
          <label>Search...</label>
        </div>
        <div class="pl-login">
          <button>Login</button>
        </div>
      </div>
    </div>
    <div class="pl-down">
      <a href="#" class="pl-nav-item store">Store</a>
      <a href="#" class="pl-nav-item community">Community</a>
      <a href="#" class="pl-nav-item news">News</a>
      <a href="#" class="pl-nav-item cases">Cases</a>
      <a href="#" class="pl-nav-item support">Support</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-content {
  text-transform: uppercase;
  background: var(--bg-navbar);
  color: var(--nav-text);

  .pl-up {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo {
      font-size: var(--text-xxl);
      font-weight: var(--font-weight-bold);
      box-shadow: var(--accent-glow);
      display: flex;
      align-items: center;
      gap: 0.8rem;
      cursor: pointer;
    }

    .pl-header-items {
      display: flex;
      align-items: center;
      gap: 10rem;

      .pl-search {
        position: relative;
        flex-grow: 0;
        width: 800px;

        input {
          width: 100%;
          padding: 0.5rem 0.8rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: var(--input-bg);
          color: var(--input-text);
          font-size: var(--text-md);
          outline: none;
          transition: 0.2s ease;
          cursor: pointer;

          &:focus {
            border-color: #00FFC6;
            box-shadow: 0 0 6px #00FFC6;
          }
        }
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 12px;
          left: 10px;
          background: var(--bg-navbar);
          padding: 0 4px;
        }
        label {
          text-transform: capitalize;
          border-radius: 20px;
          position: absolute;
          left: 12px;
          top: 12px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          pointer-events: none;
          transition: 0.3s ease;
        }
      }

      .pl-login {
        button {
          padding: 0.6rem 1.5rem;
          font-size: var(--text-md);
          background-color: var(--btn-bg);
          color: var(--btn-text);
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.2s ease;

          &:hover {
            transform: translateY(-2px);
            background: var(--btn-hover-bg);
            box-shadow: 0 0 6px #00FFC6;
          }
        }
      }
    }
  }

  .pl-down {
    display: flex;
    padding: 1rem;
    gap: 0.8rem;

    a {
      position: relative;
      color: var(--nav-text);
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      text-decoration: none;
      padding: 4px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: var(--nav-text-hover);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease;
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover {
        box-shadow: var(--accent-glow);
        color: var(--nav-text-hover);
        transition: 0.2s ease;
      }

      &:active {
        color: var(--nav-text-active);
        transition: 0.2s ease;
      }
    }
  }
}
</style>
