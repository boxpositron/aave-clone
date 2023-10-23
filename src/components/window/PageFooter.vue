<template>
  <footer>
    <section class="top">
      <div class="content">
        <div class="left">
          <div class="logo">
            <span class="brand-text">AAVE</span>
          </div>
        </div>
        <div class="right">
          <ul class="footer-link-container-horizontal">
            <li class="footer-link"><a href="#">Aave Protocol</a></li>
            <li class="footer-link"><a href="#">Governance</a></li>
            <li class="footer-link"><a href="#">Docs</a></li>
            <li class="footer-link"><a href="#">Security</a></li>
            <li class="footer-link"><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section class="bottom">
      <div class="content">
        <div class="left">
          <div class="icon-cluster">
            <ul class="footer-icon-container">
              <li class="icon-cluster-link">
                <div class="icon">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </div>
              </li>
              <li class="icon-cluster-link">
                <div class="icon">
                  <font-awesome-icon icon="fa-brands fa-github" />
                </div>
              </li>
              <li class="icon-cluster-link">
                <div class="icon">
                  <font-awesome-icon icon="fa-brands fa-discord" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="right">
          <div class="page-links">
            <ul class="footer-link-container-vertical">
              <li class="page-link">
                <a href="#">Technical Paper</a>
              </li>
              <li class="page-link">
                <a href="#">Bug Bounty</a>
              </li>
            </ul>
            <ul class="footer-link-container-vertical">
              <li class="page-link">
                <a href="#">Branding</a>
              </li>
              <li class="page-link">
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul class="footer-link-container-vertical">
              <li class="page-link">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="page-link">
                <a href="#">Terms of Use</a>
              </li>
              <li class="page-link">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../../assets/scss/colors.scss";

footer {
  a {
    text-decoration: none;
  }

  section {
    padding: 0 60px;

    &.top {
      background-color: $ebony-clay;

      div.content {
        margin: 0 auto;
        padding: 50px 0;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;

        max-width: 1400px;

        color: $athens-gray;

        a {
          color: $athens-gray;
        }

        div.left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          div.logo {
            span.brand-text {
              display: block;
              font-size: 2rem;
            }
          }
        }

        div.right {
          ul.footer-link-container-horizontal {
            display: flex;
            -webkit-padding-start: none;
            list-style: none;
            margin: 0;
            padding: 0;

            flex-direction: row;
            align-items: center;
            gap: 40px;

            height: 60px;
          }
        }
      }
    }

    &.bottom {
      background-color: $bright-gray;

      div.content {
        margin: 0 auto;
        padding-top: 60px;

        height: 250px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 1400px;

        color: $aluminium;

        a {
          color: $aluminium;
        }

        div.left {
          div.icon-cluster {
            ul.footer-icon-container {
              display: flex;
              flex-direction: row;
              -webkit-padding-start: 0;
              margin: 0;
              padding: 0;

              list-style: none;
              gap: 20px;

              li.icon-cluster-link {
                div.icon {
                  $size: 25px;

                  svg {
                    height: $size;
                    width: $size;
                  }
                }
              }
            }
          }
        }

        div.right {
          div.page-links {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 40px;

            min-width: 50vw;

            ul.footer-link-container-vertical {
              display: flex;
              flex-direction: column;
              gap: 20px;

              -webkit-padding-start: none;
              padding: 0;
              margin: 0;
              list-style: none;
            }
          }
        }
      }
    }
  }
}
</style>
