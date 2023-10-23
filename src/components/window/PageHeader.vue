<template>
  <nav>
    <div class="left">
      <div class="brand">
        <span class="brand-text"> AAVE </span>
      </div>
    </div>
    <div class="middle">
      <div class="links">
        <ul class="nav-link-container">
          <li class="nav-link">
            <a href="#protocol" class="page-navigation">Aave Protocol</a>
          </li>
          <li class="nav-link">
            <a href="#governance" class="page-navigation">Governance</a>
          </li>
          <li class="nav-link">
            <a href="#docs" class="page-navigation">Docs</a>
          </li>
          <li class="nav-link">
            <a href="#security" class="page-navigation">Security</a>
          </li>
          <li class="nav-link">
            <a href="#faq" class="page-navigation">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="action">
        <button class="action primary">Launch App</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../../assets/scss/default.scss";
@import "../../assets/scss/colors.scss";

nav {
  position: fixed;
  top: 0;
  left: 0;

  right: 0;
  height: 60px;

  background-color: $athens-gray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 50px;

  padding: 0 30px;

  div.left {
    div.brand {
      span.brand-text {
        font-size: 2.5rem;
        font-weight: 300;
      }
    }
  }

  div.middle {
    div.links {
      ul.nav-link-container {
        display: flex;
        flex-direction: row;
        -webkit-padding-start: 0;
        padding: 0;
        margin: 0;

        gap: 40px;
        list-style: none;

        li {
          a {
            text-decoration: none;
            color: $bright-gray;
            font-weight: 500;
          }
        }
      }
    }
  }

  div.right {
    div.action {
      button.action {
        border: none;

        height: 35px;
        border-radius: 5px;
        font-size: .95rem;
        font-weight: 400;
        padding: 0 10px;

        &.primary {
          background-color: $bright-gray;
          color: $athens-gray-dim;
        }
      }
    }
  }
}
</style>
